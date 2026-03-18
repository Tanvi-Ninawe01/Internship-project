import express from 'express';
import {
  getDashboardMetrics,
  getEnrollmentTrends,
  getTierDistribution,
  getActiveInternships,
  getUpcomingHackathons,
  getInternProgress,
} from '../controllers/dashboardController.js';
import { protect, restrictTo } from '../middleware/auth.js';

const router = express.Router();

// Admin routes
router.get('/metrics', protect, restrictTo('admin'), getDashboardMetrics);
router.get('/enrollment-trends', protect, restrictTo('admin'), getEnrollmentTrends);
router.get('/tier-distribution', protect, restrictTo('admin'), getTierDistribution);
router.get('/active-internships', protect, restrictTo('admin'), getActiveInternships);
router.get('/upcoming-hackathons', protect, getUpcomingHackathons);

// Intern routes
router.get('/my-progress', protect, getInternProgress);

export default router;
