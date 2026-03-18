import express from 'express';
import {
  getAllProjects,
  getProjectById,
  createProject,
  updateProject,
  deleteProject,
  submitProject,
  getProjectSubmissions,
  getInternProjectProgress,
} from '../controllers/projectsController.js';
import { protect, restrictTo } from '../middleware/auth.js';

const router = express.Router();

// Public routes
router.get('/', getAllProjects);
router.get('/:id', getProjectById);

// Admin routes
router.post('/', protect, restrictTo('admin'), createProject);
router.patch('/:id', protect, restrictTo('admin'), updateProject);
router.delete('/:id', protect, restrictTo('admin'), deleteProject);
router.get('/:id/submissions', protect, restrictTo('admin', 'mentor'), getProjectSubmissions);

// Intern routes
router.post('/submit', protect, restrictTo('intern'), submitProject);
router.get('/progress/my-progress', protect, restrictTo('intern'), getInternProjectProgress);

export default router;
