import mongoose from 'mongoose';

const hackathonSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    theme: String,
    description: String,
    startDate: {
      type: Date,
      required: true,
    },
    endDate: {
      type: Date,
      required: true,
    },
    registrationDeadline: Date,
    maxParticipants: {
      type: Number,
      default: 100,
    },
    participants: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
      },
    ],
    prizePool: String,
    status: {
      type: String,
      enum: ['upcoming', 'ongoing', 'completed'],
      default: 'upcoming',
    },
    winners: [
      {
        rank: Number,
        userId: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'User',
        },
        score: Number,
      },
    ],
    criteria: String,
    rules: String,
  },
  { timestamps: true }
);

export default mongoose.model('Hackathon', hackathonSchema);
