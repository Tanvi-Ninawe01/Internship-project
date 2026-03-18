import mongoose from 'mongoose';

const badgeSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    description: String,
    icon: String,
    category: {
      type: String,
      enum: ['achievement', 'milestone', 'skill', 'social'],
      default: 'achievement',
    },
    points: {
      type: Number,
      default: 0,
    },
    earnedAt: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true }
);

export default mongoose.model('Badge', badgeSchema);
