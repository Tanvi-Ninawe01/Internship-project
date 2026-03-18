import mongoose from 'mongoose';

const evaluationSchema = new mongoose.Schema(
  {
    submissionId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Submission',
      required: true,
    },
    internId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    mentorId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    taskId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Task',
    },
    projectId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Project',
    },
    score: {
      type: Number,
      min: 0,
      max: 100,
    },
    rating: {
      type: Number,
      min: 0,
      max: 5,
    },
    feedback: String,
    strengths: [String],
    areasForImprovement: [String],
    status: {
      type: String,
      enum: ['pending', 'completed'],
      default: 'completed',
    },
    submittedAt: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true }
);

export default mongoose.model('Evaluation', evaluationSchema);
