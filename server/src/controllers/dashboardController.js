import InternProfile from '../models/InternProfile.js';
import Level from '../models/Level.js';
import Task from '../models/Task.js';
import Project from '../models/Project.js';
import Submission from '../models/Submission.js';
import Certificate from '../models/Certificate.js';
import Team from '../models/Team.js';
import Hackathon from '../models/Hackathon.js';
import Leaderboard from '../models/Leaderboard.js';
import User from '../models/User.js';

export const getDashboardMetrics = async (req, res) => {
  try {
    const totalInterns = await User.countDocuments({ role: 'intern' });
    const totalLevels = await Level.countDocuments();
    const totalTasks = await Task.countDocuments();
    const totalProjects = await Project.countDocuments();
    const totalCertificates = await Certificate.countDocuments();
    const totalTeams = await Team.countDocuments();
    const totalHackathons = await Hackathon.countDocuments();

    res.json({
      totalInterns,
      totalLevels,
      totalTasks,
      totalProjects,
      totalCertificates,
      totalTeams,
      totalHackathons,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getEnrollmentTrends = async (req, res) => {
  try {
    const enrollmentData = await InternProfile.aggregate([
      {
        $group: {
          _id: {
            $dateToString: { format: '%Y-%m', date: '$createdAt' },
          },
          count: { $sum: 1 },
        },
      },
      { $sort: { _id: 1 } },
      { $limit: 12 },
    ]);

    res.json(enrollmentData);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getTierDistribution = async (req, res) => {
  try {
    const tierDistribution = await InternProfile.aggregate([
      {
        $group: {
          _id: '$currentTier',
          count: { $sum: 1 },
        },
      },
    ]);

    const formatted = tierDistribution.map((item) => ({
      name: item._id || 'Unknown',
      value: item.count,
    }));

    res.json(formatted);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getActiveInternships = async (req, res) => {
  try {
    const activeInternships = await InternProfile.find({
      onboardingCompleted: true,
    })
      .populate('userId', 'name email avatar')
      .populate('currentLevel', 'title levelNumber')
      .limit(10);

    res.json(activeInternships);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getUpcomingHackathons = async (req, res) => {
  try {
    const upcomingHackathons = await Hackathon.find({
      startDate: { $gte: new Date() },
      status: 'upcoming',
    })
      .sort({ startDate: 1 })
      .limit(5);

    res.json(upcomingHackathons);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getInternProgress = async (req, res) => {
  try {
    const internId = req.userId;

    const profile = await InternProfile.findOne({ userId: internId })
      .populate('currentLevel')
      .populate('userId', 'name email avatar');

    const submissions = await Submission.countDocuments({
      internId,
      status: 'approved',
    });

    const certificates = await Certificate.countDocuments({
      userId: internId,
      status: 'issued',
    });

    const leaderboardEntry = await Leaderboard.findOne({
      userId: internId,
    });

    res.json({
      profile,
      submissionsApproved: submissions,
      certificatesEarned: certificates,
      leaderboard: leaderboardEntry,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
