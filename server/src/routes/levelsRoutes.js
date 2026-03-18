import express from 'express';
import {
  getAllLevels,
  getLevelById,
  createLevel,
  updateLevel,
  deleteLevel,
  getInternLevelProgress,
  unlockLevel,
} from '../controllers/levelsController.js';
import { protect, restrictTo } from '../middleware/auth.js';

const router = express.Router();

// Public routes
router.get('/', getAllLevels);
router.get('/:id', getLevelById);

// Admin routes
router.post('/', protect, restrictTo('admin'), createLevel);
router.patch('/:id', protect, restrictTo('admin'), updateLevel);
router.delete('/:id', protect, restrictTo('admin'), deleteLevel);
router.patch('/:id/unlock', protect, restrictTo('admin'), unlockLevel);

// Intern routes
router.get('/progress/my-progress', protect, getInternLevelProgress);

export default router;
