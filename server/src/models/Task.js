import mongoose from 'mongoose';

const taskSchema = new mongoose.Schema(
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
    difficulty: {
      type: String,
      enum: ['easy', 'medium', 'hard'],
      default: 'medium',
    },
    dueDate: Date,
    points: {
      type: Number,
      default: 10,
    },
    status: {
      type: String,
      enum: ['draft', 'published', 'archived'],
      default: 'published',
    },
    attachments: [String],
    skillsTaught: [String],
    submissions: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Submission',
      },
    ],
  },
  { timestamps: true }
);

export default mongoose.model('Task', taskSchema);
