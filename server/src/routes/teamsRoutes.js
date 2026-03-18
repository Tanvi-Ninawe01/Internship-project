import express from 'express';
import {
  getAllTeams,
  getTeamById,
  createTeam,
  updateTeam,
  deleteTeam,
  joinTeam,
  approveJoinRequest,
  leaveTeam,
  getTeamLeaderboard,
  getInternTeams,
} from '../controllers/teamsController.js';
import { protect, restrictTo } from '../middleware/auth.js';

const router = express.Router();

// Public routes
router.get('/', getAllTeams);
router.get('/leaderboard', getTeamLeaderboard);
router.get('/:id', getTeamById);

// Admin routes
router.delete('/:id', protect, restrictTo('admin'), deleteTeam);

// Intern routes
router.post('/', protect, restrictTo('intern'), createTeam);
router.patch('/:id', protect, restrictTo('intern'), updateTeam);
router.post('/:id/join', protect, restrictTo('intern'), joinTeam);
router.post('/join/approve', protect, restrictTo('intern'), approveJoinRequest);
router.post('/:id/leave', protect, restrictTo('intern'), leaveTeam);
router.get('/my-teams', protect, restrictTo('intern'), getInternTeams);

export default router;
