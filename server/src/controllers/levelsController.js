import Level from '../models/Level.js';
import InternProfile from '../models/InternProfile.js';
import Submission from '../models/Submission.js';

export const getAllLevels = async (req, res) => {
  try {
    const { tier } = req.query;
    let query = { status: 'published' };

    if (tier) {
      query.tier = tier;
    }

    const levels = await Level.find(query)
      .populate('requiredTasks', 'title difficulty points')
      .populate('requiredProjects', 'title difficulty points')
      .sort({ levelNumber: 1 });

    res.json(levels);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getLevelById = async (req, res) => {
  try {
    const level = await Level.findById(req.params.id)
      .populate('requiredTasks')
      .populate('requiredProjects');

    if (!level) {
      return res.status(404).json({ error: 'Level not found' });
    }

    res.json(level);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const createLevel = async (req, res) => {
  try {
    const { levelNumber, title, description, tier, requiredTasks, requiredProjects, skills } =
      req.body;

    const level = await Level.create({
      levelNumber,
      title,
      description,
      tier,
      requiredTasks,
      requiredProjects,
      skills,
    });

    res.status(201).json(level);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const updateLevel = async (req, res) => {
  try {
    const { title, description, requiredTasks, requiredProjects, skills, isLocked } = req.body;

    const level = await Level.findByIdAndUpdate(
      req.params.id,
      {
        title,
        description,
        requiredTasks,
        requiredProjects,
        skills,
        isLocked,
      },
      { new: true, runValidators: true }
    );

    if (!level) {
      return res.status(404).json({ error: 'Level not found' });
    }

    res.json(level);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const deleteLevel = async (req, res) => {
  try {
    const level = await Level.findByIdAndDelete(req.params.id);

    if (!level) {
      return res.status(404).json({ error: 'Level not found' });
    }

    res.json({ message: 'Level deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getInternLevelProgress = async (req, res) => {
  try {
    const internId = req.userId;

    const profile = await InternProfile.findOne({ userId: internId });
    if (!profile) {
      return res.status(404).json({ error: 'Intern profile not found' });
    }

    const levels = await Level.find({ tier: profile.currentTier })
      .populate('requiredTasks')
      .populate('requiredProjects')
      .sort({ levelNumber: 1 });

    const levelProgress = await Promise.all(
      levels.map(async (level) => {
        const completedTasks = await Submission.countDocuments({
          internId,
          taskId: { $in: level.requiredTasks },
          status: 'approved',
        });

        const completedProjects = await Submission.countDocuments({
          internId,
          projectId: { $in: level.requiredProjects },
          status: 'approved',
        });

        return {
          level,
          tasksCompleted: completedTasks,
          tasksRequired: level.requiredTasks.length,
          projectsCompleted: completedProjects,
          projectsRequired: level.requiredProjects.length,
          isCompleted: completedTasks === level.requiredTasks.length && 
                      completedProjects === level.requiredProjects.length,
        };
      })
    );

    res.json(levelProgress);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const unlockLevel = async (req, res) => {
  try {
    const level = await Level.findByIdAndUpdate(
      req.params.id,
      { isLocked: false },
      { new: true }
    );

    if (!level) {
      return res.status(404).json({ error: 'Level not found' });
    }

    res.json(level);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
