import Leaderboard from '../models/Leaderboard.js';
import User from '../models/User.js';
import Certificate from '../models/Certificate.js';
import Submission from '../models/Submission.js';

export const getLeaderboard = async (req, res) => {
  try {
    const { tier, limit = 50, offset = 0 } = req.query;

    let query = {};
    if (tier) {
      query.tier = tier;
    }

    const leaderboard = await Leaderboard.find(query)
      .populate('userId', 'name email avatar')
      .populate('level', 'title levelNumber')
      .sort({ points: -1 })
      .skip(parseInt(offset))
      .limit(parseInt(limit));

    // Update ranks
    const rankedLeaderboard = leaderboard.map((entry, index) => ({
      ...entry.toObject(),
      rank: parseInt(offset) + index + 1,
    }));

    const total = await Leaderboard.countDocuments(query);

    res.json({
      leaderboard: rankedLeaderboard,
      total,
      offset: parseInt(offset),
      limit: parseInt(limit),
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getInternRank = async (req, res) => {
  try {
    const userId = req.userId;

    const leaderboardEntry = await Leaderboard.findOne({ userId })
      .populate('userId', 'name email avatar')
      .populate('level', 'title levelNumber');

    if (!leaderboardEntry) {
      return res.json({
        rank: null,
        entry: null,
      });
    }

    // Count how many are ahead
    const rank = await Leaderboard.countDocuments({ points: { $gt: leaderboardEntry.points } });

    res.json({
      rank: rank + 1,
      entry: leaderboardEntry,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const updateLeaderboardEntry = async (req, res) => {
  try {
    const { userId, points, level, tier, streak } = req.body;

    const entry = await Leaderboard.findOneAndUpdate(
      { userId },
      {
        points,
        level,
        tier,
        streak,
      },
      { new: true, upsert: true, runValidators: true }
    );

    res.json(entry);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getTopPerformers = async (req, res) => {
  try {
    const { limit = 10 } = req.query;

    const topPerformers = await Leaderboard.find()
      .populate('userId', 'name email avatar')
      .sort({ points: -1 })
      .limit(parseInt(limit));

    const performers = topPerformers.map((entry, index) => ({
      rank: index + 1,
      user: entry.userId,
      points: entry.points,
      level: entry.level,
      tier: entry.tier,
      tasksCompleted: entry.tasksCompleted,
      projectsCompleted: entry.projectsCompleted,
      certificatesEarned: entry.certificatesEarned,
    }));

    res.json(performers);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getLeaderboardByCategory = async (req, res) => {
  try {
    const { category } = req.params;
    const { limit = 50 } = req.query;

    let sortQuery = {};

    switch (category) {
      case 'points':
        sortQuery = { points: -1 };
        break;
      case 'tasks':
        sortQuery = { tasksCompleted: -1 };
        break;
      case 'projects':
        sortQuery = { projectsCompleted: -1 };
        break;
      case 'certificates':
        sortQuery = { certificatesEarned: -1 };
        break;
      case 'streak':
        sortQuery = { streak: -1 };
        break;
      default:
        sortQuery = { points: -1 };
    }

    const leaderboard = await Leaderboard.find()
      .populate('userId', 'name email avatar')
      .sort(sortQuery)
      .limit(parseInt(limit));

    const ranked = leaderboard.map((entry, index) => ({
      rank: index + 1,
      ...entry.toObject(),
    }));

    res.json(ranked);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const recalculateLeaderboard = async (req, res) => {
  try {
    // Get all users
    const users = await User.find({ role: 'intern' });

    for (const user of users) {
      const tasksCompleted = await Submission.countDocuments({
        internId: user._id,
        taskId: { $exists: true },
        status: 'approved',
      });

      const projectsCompleted = await Submission.countDocuments({
        internId: user._id,
        projectId: { $exists: true },
        status: 'approved',
      });

      const certificatesEarned = await Certificate.countDocuments({
        userId: user._id,
        status: 'issued',
      });

      const taskPoints = tasksCompleted * 10;
      const projectPoints = projectsCompleted * 50;
      const totalPoints = taskPoints + projectPoints;

      await Leaderboard.findOneAndUpdate(
        { userId: user._id },
        {
          tasksCompleted,
          projectsCompleted,
          certificatesEarned,
          points: totalPoints,
        },
        { upsert: true }
      );
    }

    res.json({ message: 'Leaderboard recalculated successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getLeaderboardStats = async (req, res) => {
  try {
    const total = await Leaderboard.countDocuments();
    const topPoints = await Leaderboard.findOne().sort({ points: -1 }).select('points');
    const avgPoints = await Leaderboard.aggregate([
      {
        $group: {
          _id: null,
          avgPoints: { $avg: '$points' },
        },
      },
    ]);

    const totalTasks = await Submission.countDocuments({
      taskId: { $exists: true },
      status: 'approved',
    });

    const totalProjects = await Submission.countDocuments({
      projectId: { $exists: true },
      status: 'approved',
    });

    res.json({
      totalParticipants: total,
      topScore: topPoints?.points || 0,
      averageScore: avgPoints[0]?.avgPoints || 0,
      totalTasksCompleted: totalTasks,
      totalProjectsCompleted: totalProjects,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
