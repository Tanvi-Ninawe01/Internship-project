import mongoose from 'mongoose';

const submissionSchema = new mongoose.Schema(
  {
    internId: {
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
    attachments: [String],
    description: String,
    submittedDate: {
      type: Date,
      default: Date.now,
    },
    status: {
      type: String,
      enum: ['submitted', 'under-review', 'approved', 'rejected'],
      default: 'submitted',
    },
    evaluation: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Evaluation',
    },
    evaluatedDate: Date,
  },
  { timestamps: true }
);

export default mongoose.model('Submission', submissionSchema);
