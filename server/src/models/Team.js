import mongoose from 'mongoose';

const teamSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: String,
    projectId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Project',
    },
    creatorId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    members: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
      },
    ],
    maxMembers: {
      type: Number,
      default: 5,
    },
    status: {
      type: String,
      enum: ['active', 'inactive', 'completed'],
      default: 'active',
    },
    joinRequests: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
      },
    ],
    points: {
      type: Number,
      default: 0,
    },
    rank: Number,
    tier: {
      type: String,
      enum: ['basic', 'premium', 'corporate'],
      default: 'basic',
    },
  },
  { timestamps: true }
);

export default mongoose.model('Team', teamSchema);
