import Hackathon from '../models/Hackathon.js';
import Leaderboard from '../models/Leaderboard.js';

export const getAllHackathons = async (req, res) => {
  try {
    const { status } = req.query;
    let query = {};

    if (status) {
      query.status = status;
    }

    const hackathons = await Hackathon.find(query)
      .populate('participants', 'name email avatar')
      .populate('winners.userId', 'name email')
      .sort({ startDate: -1 });

    res.json(hackathons);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getHackathonById = async (req, res) => {
  try {
    const hackathon = await Hackathon.findById(req.params.id)
      .populate('participants', 'name email avatar')
      .populate('winners.userId', 'name email');

    if (!hackathon) {
      return res.status(404).json({ error: 'Hackathon not found' });
    }

    res.json(hackathon);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const createHackathon = async (req, res) => {
  try {
    const {
      name,
      theme,
      description,
      startDate,
      endDate,
      registrationDeadline,
      maxParticipants,
      prizePool,
      criteria,
      rules,
    } = req.body;

    const hackathon = await Hackathon.create({
      name,
      theme,
      description,
      startDate,
      endDate,
      registrationDeadline,
      maxParticipants,
      prizePool,
      criteria,
      rules,
      status: 'upcoming',
      participants: [],
      winners: [],
    });

    res.status(201).json(hackathon);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const updateHackathon = async (req, res) => {
  try {
    const {
      name,
      theme,
      description,
      startDate,
      endDate,
      registrationDeadline,
      maxParticipants,
      status,
      prizePool,
      criteria,
      rules,
    } = req.body;

    const hackathon = await Hackathon.findByIdAndUpdate(
      req.params.id,
      {
        name,
        theme,
        description,
        startDate,
        endDate,
        registrationDeadline,
        maxParticipants,
        status,
        prizePool,
        criteria,
        rules,
      },
      { new: true, runValidators: true }
    );

    if (!hackathon) {
      return res.status(404).json({ error: 'Hackathon not found' });
    }

    res.json(hackathon);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const deleteHackathon = async (req, res) => {
  try {
    const hackathon = await Hackathon.findByIdAndDelete(req.params.id);

    if (!hackathon) {
      return res.status(404).json({ error: 'Hackathon not found' });
    }

    res.json({ message: 'Hackathon deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const registerForHackathon = async (req, res) => {
  try {
    const hackathonId = req.params.id;
    const userId = req.userId;

    const hackathon = await Hackathon.findById(hackathonId);
    if (!hackathon) {
      return res.status(404).json({ error: 'Hackathon not found' });
    }

    // Check registration deadline
    if (hackathon.registrationDeadline && new Date() > new Date(hackathon.registrationDeadline)) {
      return res.status(400).json({ error: 'Registration deadline has passed' });
    }

    // Check if already registered
    if (hackathon.participants.includes(userId)) {
      return res.status(400).json({ error: 'Already registered for this hackathon' });
    }

    // Check max participants
    if (hackathon.participants.length >= hackathon.maxParticipants) {
      return res.status(400).json({ error: 'Hackathon is full' });
    }

    hackathon.participants.push(userId);
    await hackathon.save();

    const updatedHackathon = await Hackathon.findById(hackathonId)
      .populate('participants', 'name email avatar')
      .populate('winners.userId', 'name email');

    res.json(updatedHackathon);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const unregisterFromHackathon = async (req, res) => {
  try {
    const hackathonId = req.params.id;
    const userId = req.userId;

    const hackathon = await Hackathon.findById(hackathonId);
    if (!hackathon) {
      return res.status(404).json({ error: 'Hackathon not found' });
    }

    hackathon.participants = hackathon.participants.filter((id) => id.toString() !== userId);
    await hackathon.save();

    const updatedHackathon = await Hackathon.findById(hackathonId)
      .populate('participants', 'name email avatar')
      .populate('winners.userId', 'name email');

    res.json(updatedHackathon);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getInternHackathons = async (req, res) => {
  try {
    const userId = req.userId;

    const registered = await Hackathon.find({ participants: userId })
      .populate('participants', 'name email avatar')
      .populate('winners.userId', 'name email')
      .sort({ startDate: -1 });

    res.json(registered);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const setHackathonWinners = async (req, res) => {
  try {
    const hackathonId = req.params.id;
    const { winners } = req.body; // [{ rank: 1, userId: '...', score: 100 }, ...]

    const hackathon = await Hackathon.findById(hackathonId);
    if (!hackathon) {
      return res.status(404).json({ error: 'Hackathon not found' });
    }

    hackathon.winners = winners;
    hackathon.status = 'completed';
    await hackathon.save();

    // Update leaderboard for winners
    for (const winner of winners) {
      const pointsToAdd = winner.rank === 1 ? 100 : winner.rank === 2 ? 50 : 25;
      await Leaderboard.findOneAndUpdate(
        { userId: winner.userId },
        {
          $inc: { points: pointsToAdd },
        },
        { upsert: true }
      );
    }

    const updatedHackathon = await Hackathon.findById(hackathonId)
      .populate('participants', 'name email avatar')
      .populate('winners.userId', 'name email');

    res.json(updatedHackathon);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getHackathonWinners = async (req, res) => {
  try {
    const hackathon = await Hackathon.findById(req.params.id).populate('winners.userId', 'name email avatar');

    if (!hackathon) {
      return res.status(404).json({ error: 'Hackathon not found' });
    }

    res.json(hackathon.winners);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
