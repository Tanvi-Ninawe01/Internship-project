import express from 'express';
import {
  getAllEvaluations,
  getEvaluationById,
  createEvaluation,
  updateEvaluation,
  deleteEvaluation,
  getPendingEvaluations,
  getInternEvaluations,
} from '../controllers/evaluationsController.js';
import { protect, restrictTo } from '../middleware/auth.js';

const router = express.Router();

// Admin routes
router.get('/', protect, restrictTo('admin'), getAllEvaluations);
router.get('/:id', protect, restrictTo('admin'), getEvaluationById);
router.delete('/:id', protect, restrictTo('admin'), deleteEvaluation);

// Mentor routes
router.post('/', protect, restrictTo('mentor'), createEvaluation);
router.patch('/:id', protect, restrictTo('mentor'), updateEvaluation);
router.get('/pending', protect, restrictTo('mentor'), getPendingEvaluations);

// Intern routes
router.get('/my-evaluations', protect, restrictTo('intern'), getInternEvaluations);

export default router;
