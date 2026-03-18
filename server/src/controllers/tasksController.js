import Task from '../models/Task.js';
import Submission from '../models/Submission.js';
import Level from '../models/Level.js';

export const getAllTasks = async (req, res) => {
  try {
    const { levelId, difficulty } = req.query;
    let query = { status: 'published' };

    if (levelId) {
      query.levelId = levelId;
    }

    if (difficulty) {
      query.difficulty = difficulty;
    }

    const tasks = await Task.find(query).populate('levelId', 'title levelNumber').sort({
      createdAt: -1,
    });

    res.json(tasks);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getTaskById = async (req, res) => {
  try {
    const task = await Task.findById(req.params.id).populate('levelId');

    if (!task) {
      return res.status(404).json({ error: 'Task not found' });
    }

    res.json(task);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const createTask = async (req, res) => {
  try {
    const {
      levelId,
      title,
      description,
      difficulty,
      dueDate,
      points,
      attachments,
      skillsTaught,
    } = req.body;

    // Verify level exists
    const level = await Level.findById(levelId);
    if (!level) {
      return res.status(404).json({ error: 'Level not found' });
    }

    const task = await Task.create({
      levelId,
      title,
      description,
      difficulty,
      dueDate,
      points,
      attachments,
      skillsTaught,
    });

    res.status(201).json(task);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const updateTask = async (req, res) => {
  try {
    const { title, description, difficulty, dueDate, points, attachments, skillsTaught } =
      req.body;

    const task = await Task.findByIdAndUpdate(
      req.params.id,
      {
        title,
        description,
        difficulty,
        dueDate,
        points,
        attachments,
        skillsTaught,
      },
      { new: true, runValidators: true }
    );

    if (!task) {
      return res.status(404).json({ error: 'Task not found' });
    }

    res.json(task);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const deleteTask = async (req, res) => {
  try {
    const task = await Task.findByIdAndDelete(req.params.id);

    if (!task) {
      return res.status(404).json({ error: 'Task not found' });
    }

    res.json({ message: 'Task deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const submitTask = async (req, res) => {
  try {
    const { taskId, attachments, description } = req.body;
    const internId = req.userId;

    // Verify task exists
    const task = await Task.findById(taskId);
    if (!task) {
      return res.status(404).json({ error: 'Task not found' });
    }

    // Check if already submitted and pending/approved
    const existingSubmission = await Submission.findOne({
      internId,
      taskId,
      status: { $in: ['submitted', 'under-review', 'approved'] },
    });

    if (existingSubmission) {
      return res.status(400).json({ error: 'Task already submitted or under review' });
    }

    const submission = await Submission.create({
      internId,
      taskId,
      attachments,
      description,
      status: 'submitted',
    });

    res.status(201).json(submission);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getTaskSubmissions = async (req, res) => {
  try {
    const submissions = await Submission.find({ taskId: req.params.id })
      .populate('internId', 'name email')
      .populate('evaluation');

    res.json(submissions);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getInternTaskProgress = async (req, res) => {
  try {
    const internId = req.userId;

    const submissions = await Submission.find({ internId, taskId: { $exists: true } })
      .populate('taskId')
      .populate('evaluation', 'score rating feedback');

    const taskProgress = {
      submitted: submissions.filter((s) => s.status === 'submitted').length,
      underReview: submissions.filter((s) => s.status === 'under-review').length,
      approved: submissions.filter((s) => s.status === 'approved').length,
      rejected: submissions.filter((s) => s.status === 'rejected').length,
    };

    res.json({
      taskProgress,
      submissions,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
