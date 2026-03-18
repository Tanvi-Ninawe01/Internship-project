import mongoose from 'mongoose';

const projectSchema = new mongoose.Schema(
  {
    levelId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Level',
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    description: String,
    type: {
      type: String,
      enum: ['individual', 'team'],
      default: 'individual',
    },
    techStack: [String],
    repositoryUrl: String,
    liveUrl: String,
    difficulty: {
      type: String,
      enum: ['easy', 'medium', 'hard'],
      default: 'medium',
    },
    points: {
      type: Number,
      default: 50,
    },
    status: {
      type: String,
      enum: ['draft', 'published', 'archived'],
      default: 'published',
    },
    evaluationGuidelines: String,
    skills: [String],
    submissions: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Submission',
      },
    ],
  },
  { timestamps: true }
);

export default mongoose.model('Project', projectSchema);
