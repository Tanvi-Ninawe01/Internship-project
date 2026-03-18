import Team from '../models/Team.js';
import User from '../models/User.js';

export const getAllTeams = async (req, res) => {
  try {
    const { status, tier } = req.query;
    let query = {};

    if (status) {
      query.status = status;
    }

    if (tier) {
      query.tier = tier;
    }

    const teams = await Team.find(query)
      .populate('creatorId', 'name email avatar')
      .populate('members', 'name email avatar')
      .populate('projectId', 'title')
      .sort({ points: -1 });

    res.json(teams);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getTeamById = async (req, res) => {
  try {
    const team = await Team.findById(req.params.id)
      .populate('creatorId', 'name email avatar')
      .populate('members', 'name email avatar')
      .populate('projectId');

    if (!team) {
      return res.status(404).json({ error: 'Team not found' });
    }

    res.json(team);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const createTeam = async (req, res) => {
  try {
    const { name, description, projectId, tier, maxMembers } = req.body;
    const creatorId = req.userId;

    const team = await Team.create({
      name,
      description,
      projectId,
      creatorId,
      tier,
      maxMembers,
      members: [creatorId],
    });

    const populatedTeam = await Team.findById(team._id)
      .populate('creatorId', 'name email avatar')
      .populate('members', 'name email avatar');

    res.status(201).json(populatedTeam);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const updateTeam = async (req, res) => {
  try {
    const { name, description, maxMembers, status } = req.body;

    const team = await Team.findByIdAndUpdate(
      req.params.id,
      {
        name,
        description,
        maxMembers,
        status,
      },
      { new: true, runValidators: true }
    )
      .populate('creatorId', 'name email avatar')
      .populate('members', 'name email avatar');

    if (!team) {
      return res.status(404).json({ error: 'Team not found' });
    }

    res.json(team);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const deleteTeam = async (req, res) => {
  try {
    const team = await Team.findByIdAndDelete(req.params.id);

    if (!team) {
      return res.status(404).json({ error: 'Team not found' });
    }

    res.json({ message: 'Team deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const joinTeam = async (req, res) => {
  try {
    const teamId = req.params.id;
    const userId = req.userId;

    const team = await Team.findById(teamId);
    if (!team) {
      return res.status(404).json({ error: 'Team not found' });
    }

    if (team.members.length >= team.maxMembers) {
      return res.status(400).json({ error: 'Team is full' });
    }

    if (team.members.includes(userId)) {
      return res.status(400).json({ error: 'Already a member of this team' });
    }

    // Add join request if not direct join
    if (!team.joinRequests.includes(userId)) {
      team.joinRequests.push(userId);
      await team.save();
    }

    const updatedTeam = await Team.findById(teamId)
      .populate('creatorId', 'name email avatar')
      .populate('members', 'name email avatar');

    res.json(updatedTeam);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const approveJoinRequest = async (req, res) => {
  try {
    const { teamId, userId } = req.body;
    const creatorId = req.userId;

    const team = await Team.findById(teamId);
    if (!team) {
      return res.status(404).json({ error: 'Team not found' });
    }

    if (team.creatorId.toString() !== creatorId) {
      return res.status(403).json({ error: 'Only team creator can approve requests' });
    }

    if (team.members.length >= team.maxMembers) {
      return res.status(400).json({ error: 'Team is full' });
    }

    team.members.push(userId);
    team.joinRequests = team.joinRequests.filter((id) => id.toString() !== userId);
    await team.save();

    const updatedTeam = await Team.findById(teamId)
      .populate('creatorId', 'name email avatar')
      .populate('members', 'name email avatar');

    res.json(updatedTeam);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const leaveTeam = async (req, res) => {
  try {
    const teamId = req.params.id;
    const userId = req.userId;

    const team = await Team.findById(teamId);
    if (!team) {
      return res.status(404).json({ error: 'Team not found' });
    }

    team.members = team.members.filter((id) => id.toString() !== userId);

    if (team.members.length === 0) {
      await Team.findByIdAndDelete(teamId);
      return res.json({ message: 'Team disbanded (no members left)' });
    }

    if (team.creatorId.toString() === userId) {
      team.creatorId = team.members[0];
    }

    await team.save();

    const updatedTeam = await Team.findById(teamId)
      .populate('creatorId', 'name email avatar')
      .populate('members', 'name email avatar');

    res.json(updatedTeam);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getTeamLeaderboard = async (req, res) => {
  try {
    const teams = await Team.find()
      .populate('creatorId', 'name email')
      .populate('members', 'name email')
      .sort({ points: -1 });

    const leaderboard = teams.map((team, index) => ({
      rank: index + 1,
      teamId: team._id,
      name: team.name,
      points: team.points,
      memberCount: team.members.length,
      status: team.status,
    }));

    res.json(leaderboard);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getInternTeams = async (req, res) => {
  try {
    const userId = req.userId;

    const teams = await Team.find({
      members: userId,
    })
      .populate('creatorId', 'name email avatar')
      .populate('members', 'name email avatar')
      .populate('projectId');

    res.json(teams);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
