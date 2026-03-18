import mongoose from 'mongoose';

const leaderboardSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
      unique: true,
    },
    rank: Number,
    points: {
      type: Number,
      default: 0,
    },
    level: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Level',
    },
    tier: {
      type: String,
      enum: ['basic', 'premium', 'corporate'],
      default: 'basic',
    },
    streak: {
      type: Number,
      default: 0,
    },
    tasksCompleted: {
      type: Number,
      default: 0,
    },
    projectsCompleted: {
      type: Number,
      default: 0,
    },
    certificatesEarned: {
      type: Number,
      default: 0,
    },
    totalSkills: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
);

// Index for sorting by points and rank
leaderboardSchema.index({ points: -1, createdAt: 1 });

export default mongoose.model('Leaderboard', leaderboardSchema);
