import express from 'express';
import {
  getLeaderboard,
  getInternRank,
  updateLeaderboardEntry,
  getTopPerformers,
  getLeaderboardByCategory,
  recalculateLeaderboard,
  getLeaderboardStats,
} from '../controllers/leaderboardController.js';
import { protect, restrictTo } from '../middleware/auth.js';

const router = express.Router();

// Public routes
router.get('/', getLeaderboard);
router.get('/top-performers', getTopPerformers);
router.get('/category/:category', getLeaderboardByCategory);
router.get('/stats', getLeaderboardStats);

// Protected routes
router.get('/my-rank', protect, getInternRank);

// Admin routes
router.patch('/', protect, restrictTo('admin'), updateLeaderboardEntry);
router.post('/recalculate', protect, restrictTo('admin'), recalculateLeaderboard);

export default router;
