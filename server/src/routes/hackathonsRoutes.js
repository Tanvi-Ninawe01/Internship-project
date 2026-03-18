import express from 'express';
import {
  getAllHackathons,
  getHackathonById,
  createHackathon,
  updateHackathon,
  deleteHackathon,
  registerForHackathon,
  unregisterFromHackathon,
  getInternHackathons,
  setHackathonWinners,
  getHackathonWinners,
} from '../controllers/hackathonsController.js';
import { protect, restrictTo } from '../middleware/auth.js';

const router = express.Router();

// Public routes
router.get('/', getAllHackathons);
router.get('/:id', getHackathonById);
router.get('/:id/winners', getHackathonWinners);

// Admin routes
router.post('/', protect, restrictTo('admin'), createHackathon);
router.patch('/:id', protect, restrictTo('admin'), updateHackathon);
router.delete('/:id', protect, restrictTo('admin'), deleteHackathon);
router.post('/:id/winners', protect, restrictTo('admin'), setHackathonWinners);

// Intern routes
router.post('/:id/register', protect, restrictTo('intern'), registerForHackathon);
router.post('/:id/unregister', protect, restrictTo('intern'), unregisterFromHackathon);
router.get('/my-hackathons', protect, restrictTo('intern'), getInternHackathons);

export default router;
