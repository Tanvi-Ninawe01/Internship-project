import Evaluation from '../models/Evaluation.js';
import Submission from '../models/Submission.js';
import Leaderboard from '../models/Leaderboard.js';

export const getAllEvaluations = async (req, res) => {
  try {
    const { status } = req.query;
    let query = {};

    if (status) {
      query.status = status;
    }

    const evaluations = await Evaluation.find(query)
      .populate('internId', 'name email')
      .populate('mentorId', 'name email')
      .populate('submissionId')
      .sort({ createdAt: -1 });

    res.json(evaluations);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getEvaluationById = async (req, res) => {
  try {
    const evaluation = await Evaluation.findById(req.params.id)
      .populate('internId', 'name email')
      .populate('mentorId', 'name email')
      .populate('submissionId');

    if (!evaluation) {
      return res.status(404).json({ error: 'Evaluation not found' });
    }

    res.json(evaluation);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const createEvaluation = async (req, res) => {
  try {
    const {
      submissionId,
      internId,
      taskId,
      projectId,
      score,
      rating,
      feedback,
      strengths,
      areasForImprovement,
    } = req.body;

    const mentorId = req.userId;

    // Verify submission exists
    const submission = await Submission.findById(submissionId);
    if (!submission) {
      return res.status(404).json({ error: 'Submission not found' });
    }

    const evaluation = await Evaluation.create({
      submissionId,
      internId,
      mentorId,
      taskId,
      projectId,
      score,
      rating,
      feedback,
      strengths,
      areasForImprovement,
      status: 'completed',
    });

    // Update submission status
    await Submission.findByIdAndUpdate(
      submissionId,
      {
        status: 'approved',
        evaluation: evaluation._id,
        evaluatedDate: new Date(),
      },
      { new: true }
    );

    // Update leaderboard points if approved
    if (score >= 70) {
      const taskOrProject = taskId || projectId;
      const points = taskId ? 10 : 50; // Projects are worth more

      await Leaderboard.findOneAndUpdate(
        { userId: internId },
        {
          $inc: {
            points: points,
            tasksCompleted: taskId ? 1 : 0,
            projectsCompleted: projectId ? 1 : 0,
          },
        },
        { upsert: true, new: true }
      );
    }

    res.status(201).json(evaluation);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const updateEvaluation = async (req, res) => {
  try {
    const { score, rating, feedback, strengths, areasForImprovement } = req.body;

    const evaluation = await Evaluation.findByIdAndUpdate(
      req.params.id,
      {
        score,
        rating,
        feedback,
        strengths,
        areasForImprovement,
      },
      { new: true, runValidators: true }
    );

    if (!evaluation) {
      return res.status(404).json({ error: 'Evaluation not found' });
    }

    res.json(evaluation);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const deleteEvaluation = async (req, res) => {
  try {
    const evaluation = await Evaluation.findByIdAndDelete(req.params.id);

    if (!evaluation) {
      return res.status(404).json({ error: 'Evaluation not found' });
    }

    res.json({ message: 'Evaluation deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getPendingEvaluations = async (req, res) => {
  try {
    const mentorId = req.userId;

    const submissions = await Submission.find({ status: 'submitted' }).populate('internId', 'name email');

    res.json(submissions);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getInternEvaluations = async (req, res) => {
  try {
    const internId = req.userId;

    const evaluations = await Evaluation.find({ internId })
      .populate('mentorId', 'name email')
      .populate('submissionId')
      .sort({ createdAt: -1 });

    // Calculate analytics
    const avgScore = evaluations.length > 0
      ? evaluations.reduce((sum, e) => sum + (e.score || 0), 0) / evaluations.length
      : 0;

    const avgRating = evaluations.length > 0
      ? evaluations.reduce((sum, e) => sum + (e.rating || 0), 0) / evaluations.length
      : 0;

    res.json({
      evaluations,
      analytics: {
        totalEvaluations: evaluations.length,
        averageScore: Math.round(avgScore),
        averageRating: Math.round(avgRating * 10) / 10,
      },
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
