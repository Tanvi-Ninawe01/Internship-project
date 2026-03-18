import mongoose from 'mongoose';

const internProfileSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
      unique: true,
    },
    education: {
      school: String,
      degree: String,
      field: String,
      startYear: Number,
      endYear: Number,
    },
    skills: [String],
    experience: String,
    links: {
      portfolio: String,
      github: String,
      linkedin: String,
    },
    location: String,
    availability: {
      type: String,
      enum: ['full-time', 'part-time', 'not-available'],
      default: 'full-time',
    },
    bio: String,
    onboardingProgress: {
      type: Number,
      default: 0,
    },
    onboardingCompleted: {
      type: Boolean,
      default: false,
    },
    currentLevel: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Level',
    },
    currentTier: {
      type: String,
      enum: ['basic', 'premium', 'corporate'],
      default: 'basic',
    },
  },
  { timestamps: true }
);

export default mongoose.model('InternProfile', internProfileSchema);
