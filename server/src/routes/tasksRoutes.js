import express from 'express';
import {
  getAllTasks,
  getTaskById,
  createTask,
  updateTask,
  deleteTask,
  submitTask,
  getTaskSubmissions,
  getInternTaskProgress,
} from '../controllers/tasksController.js';
import { protect, restrictTo } from '../middleware/auth.js';

const router = express.Router();

// Public routes
router.get('/', getAllTasks);
router.get('/:id', getTaskById);

// Admin routes
router.post('/', protect, restrictTo('admin'), createTask);
router.patch('/:id', protect, restrictTo('admin'), updateTask);
router.delete('/:id', protect, restrictTo('admin'), deleteTask);
router.get('/:id/submissions', protect, restrictTo('admin', 'mentor'), getTaskSubmissions);

// Intern routes
router.post('/submit', protect, restrictTo('intern'), submitTask);
router.get('/progress/my-progress', protect, restrictTo('intern'), getInternTaskProgress);

export default router;
