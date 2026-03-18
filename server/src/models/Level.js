import mongoose from 'mongoose';

const levelSchema = new mongoose.Schema(
  {
    levelNumber: {
      type: Number,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    description: String,
    tier: {
      type: String,
      enum: ['basic', 'premium', 'corporate'],
      required: true,
    },
    requiredTasks: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Task',
      },
    ],
    requiredProjects: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Project',
      },
    ],
    skills: [String],
    unlockDate: Date,
    isLocked: {
      type: Boolean,
      default: false,
    },
    totalPoints: {
      type: Number,
      default: 0,
    },
    status: {
      type: String,
      enum: ['draft', 'published', 'archived'],
      default: 'published',
    },
  },
  { timestamps: true }
);

export default mongoose.model('Level', levelSchema);
