import Project from '../models/Project.js';
import Submission from '../models/Submission.js';
import Level from '../models/Level.js';

export const getAllProjects = async (req, res) => {
  try {
    const { levelId, difficulty, type } = req.query;
    let query = { status: 'published' };

    if (levelId) {
      query.levelId = levelId;
    }

    if (difficulty) {
      query.difficulty = difficulty;
    }

    if (type) {
      query.type = type;
    }

    const projects = await Project.find(query).populate('levelId', 'title levelNumber').sort({
      createdAt: -1,
    });

    res.json(projects);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getProjectById = async (req, res) => {
  try {
    const project = await Project.findById(req.params.id).populate('levelId');

    if (!project) {
      return res.status(404).json({ error: 'Project not found' });
    }

    res.json(project);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const createProject = async (req, res) => {
  try {
    const {
      levelId,
      title,
      description,
      type,
      techStack,
      difficulty,
      points,
      evaluationGuidelines,
      skills,
    } = req.body;

    // Verify level exists
    const level = await Level.findById(levelId);
    if (!level) {
      return res.status(404).json({ error: 'Level not found' });
    }

    const project = await Project.create({
      levelId,
      title,
      description,
      type,
      techStack,
      difficulty,
      points,
      evaluationGuidelines,
      skills,
    });

    res.status(201).json(project);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const updateProject = async (req, res) => {
  try {
    const {
      title,
      description,
      type,
      techStack,
      difficulty,
      points,
      repositoryUrl,
      liveUrl,
      evaluationGuidelines,
      skills,
    } = req.body;

    const project = await Project.findByIdAndUpdate(
      req.params.id,
      {
        title,
        description,
        type,
        techStack,
        difficulty,
        points,
        repositoryUrl,
        liveUrl,
        evaluationGuidelines,
        skills,
      },
      { new: true, runValidators: true }
    );

    if (!project) {
      return res.status(404).json({ error: 'Project not found' });
    }

    res.json(project);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const deleteProject = async (req, res) => {
  try {
    const project = await Project.findByIdAndDelete(req.params.id);

    if (!project) {
      return res.status(404).json({ error: 'Project not found' });
    }

    res.json({ message: 'Project deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const submitProject = async (req, res) => {
  try {
    const { projectId, attachments, repositoryUrl, liveUrl, description } = req.body;
    const internId = req.userId;

    // Verify project exists
    const project = await Project.findById(projectId);
    if (!project) {
      return res.status(404).json({ error: 'Project not found' });
    }

    // Check if already submitted and pending/approved
    const existingSubmission = await Submission.findOne({
      internId,
      projectId,
      status: { $in: ['submitted', 'under-review', 'approved'] },
    });

    if (existingSubmission) {
      return res.status(400).json({ error: 'Project already submitted or under review' });
    }

    const submission = await Submission.create({
      internId,
      projectId,
      attachments,
      description: `Repository: ${repositoryUrl}\nLive URL: ${liveUrl}\n${description}`,
      status: 'submitted',
    });

    res.status(201).json(submission);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getProjectSubmissions = async (req, res) => {
  try {
    const submissions = await Submission.find({ projectId: req.params.id })
      .populate('internId', 'name email')
      .populate('evaluation');

    res.json(submissions);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getInternProjectProgress = async (req, res) => {
  try {
    const internId = req.userId;

    const submissions = await Submission.find({ internId, projectId: { $exists: true } })
      .populate('projectId')
      .populate('evaluation', 'score rating feedback');

    const projectProgress = {
      submitted: submissions.filter((s) => s.status === 'submitted').length,
      underReview: submissions.filter((s) => s.status === 'under-review').length,
      approved: submissions.filter((s) => s.status === 'approved').length,
      rejected: submissions.filter((s) => s.status === 'rejected').length,
    };

    res.json({
      projectProgress,
      submissions,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
