import mongoose from 'mongoose';

const certificateSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    credentialId: {
      type: String,
      unique: true,
    },
    tier: {
      type: String,
      enum: ['basic', 'premium', 'corporate'],
      required: true,
    },
    levelId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Level',
    },
    issueDate: {
      type: Date,
      default: Date.now,
    },
    expiryDate: Date,
    status: {
      type: String,
      enum: ['issued', 'in-progress', 'locked', 'revoked'],
      default: 'issued',
    },
    verificationUrl: String,
    pdfUrl: String,
    skills: [String],
  },
  { timestamps: true }
);

export default mongoose.model('Certificate', certificateSchema);
