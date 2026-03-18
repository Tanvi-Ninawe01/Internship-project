import { Users, Crown, Target, TrendingUp, MessageSquare, Plus } from 'lucide-react';

export default function InternshipTeams() {
  const myTeam = {
    id: 1,
    name: 'Tech Innovators',
    members: 4,
    project: 'Team Collaboration Tool',
    progress: 72,
    rank: 3,
    points: 2450,
  };

  const teamMembers = [
    { id: 1, name: 'Sarah Johnson', role: 'Team Lead', avatar: 'SJ', points: 850, tasksCompleted: 12 },
    { id: 2, name: 'Mike Chen', role: 'Frontend Dev', avatar: 'MC', points: 720, tasksCompleted: 10 },
    { id: 3, name: 'Emily Davis', role: 'Backend Dev', avatar: 'ED', points: 680, tasksCompleted: 9 },
    { id: 4, name: 'Alex Kumar', role: 'Designer', avatar: 'AK', points: 200, tasksCompleted: 3 },
  ];

  const availableTeams = [
    {
      id: 2,
      name: 'Code Warriors',
      members: 3,
      maxMembers: 5,
      project: 'AI Content Generator',
      tier: 'Premium',
      openSpots: 2,
    },
    {
      id: 3,
      name: 'DevMasters',
      members: 4,
      maxMembers: 4,
      project: 'Real-time Analytics Dashboard',
      tier: 'Corporate',
      openSpots: 0,
    },
    {
      id: 4,
      name: 'Innovation Squad',
      members: 2,
      maxMembers: 5,
      project: 'Mobile E-learning App',
      tier: 'Premium',
      openSpots: 3,
    },
  ];

  const teamLeaderboard = [
    { rank: 1, name: 'Code Masters', members: 5, points: 3200, project: 'Completed' },
    { rank: 2, name: 'DevGenius', members: 4, points: 2890, project: 'Completed' },
    { rank: 3, name: 'Tech Innovators', members: 4, points: 2450, project: 'In Progress' },
    { rank: 4, name: 'Build Squad', members: 3, points: 2150, project: 'In Progress' },
    { rank: 5, name: 'Code Warriors', members: 3, points: 1980, project: 'In Progress' },
  ];

  return (
    <div className="space-y-6">
      {/* My Team Overview */}
      <div className="bg-gradient-to-br from-indigo-600 to-purple-600 rounded-xl p-6 text-white">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h2 className="text-2xl font-semibold mb-2">{myTeam.name}</h2>
            <p className="text-white/80">Current Project: {myTeam.project}</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border-4 border-white/30 mb-2">
              <span className="text-2xl font-bold">#{myTeam.rank}</span>
            </div>
            <p className="text-sm text-white/80">Team Rank</p>
          </div>
        </div>
        <div className="grid md:grid-cols-4 gap-4">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
            <div className="flex items-center gap-2 mb-1">
              <Users className="w-4 h-4" />
              <span className="text-sm">Members</span>
            </div>
            <p className="text-2xl font-semibold">{myTeam.members}</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
            <div className="flex items-center gap-2 mb-1">
              <Target className="w-4 h-4" />
              <span className="text-sm">Progress</span>
            </div>
            <p className="text-2xl font-semibold">{myTeam.progress}%</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
            <div className="flex items-center gap-2 mb-1">
              <TrendingUp className="w-4 h-4" />
              <span className="text-sm">Team Points</span>
            </div>
            <p className="text-2xl font-semibold">{myTeam.points}</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
            <button className="w-full h-full flex items-center justify-center gap-2 text-sm font-medium hover:bg-white/10 rounded-lg transition-colors">
              <MessageSquare className="w-4 h-4" />
              Team Chat
            </button>
          </div>
        </div>
      </div>

      {/* Team Members & Available Teams */}
      <div className="grid lg:grid-cols-3 gap-6">
        {/* Team Members */}
        <div className="lg:col-span-2 bg-white rounded-xl p-6 border border-gray-200">
          <h3 className="text-lg font-semibold mb-4">Team Members</h3>
          <div className="space-y-3">
            {teamMembers.map((member) => (
              <div key={member.id} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-full flex items-center justify-center text-white font-semibold">
                    {member.avatar}
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h4 className="font-semibold">{member.name}</h4>
                      {member.role === 'Team Lead' && (
                        <Crown className="w-4 h-4 text-yellow-500" />
                      )}
                    </div>
                    <p className="text-sm text-gray-600">{member.role}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-semibold text-indigo-600">{member.points} pts</p>
                  <p className="text-sm text-gray-600">{member.tasksCompleted} tasks</p>
                </div>
              </div>
            ))}
          </div>
          <button className="w-full mt-4 px-4 py-2 border-2 border-dashed border-gray-300 rounded-lg hover:border-indigo-400 hover:bg-indigo-50 transition-colors text-sm font-medium flex items-center justify-center gap-2">
            <Plus className="w-4 h-4" />
            Invite Team Member
          </button>
        </div>

        {/* Team Progress */}
        <div className="bg-white rounded-xl p-6 border border-gray-200">
          <h3 className="text-lg font-semibold mb-4">Project Progress</h3>
          <div className="space-y-4">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium">Overall Progress</span>
                <span className="text-sm text-gray-600">{myTeam.progress}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-3">
                <div className="bg-indigo-600 h-3 rounded-full" style={{ width: `${myTeam.progress}%` }} />
              </div>
            </div>
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium">Frontend</span>
                <span className="text-sm text-gray-600">85%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-blue-600 h-2 rounded-full" style={{ width: '85%' }} />
              </div>
            </div>
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium">Backend</span>
                <span className="text-sm text-gray-600">70%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-purple-600 h-2 rounded-full" style={{ width: '70%' }} />
              </div>
            </div>
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium">Testing</span>
                <span className="text-sm text-gray-600">60%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-green-600 h-2 rounded-full" style={{ width: '60%' }} />
              </div>
            </div>
          </div>
          <div className="mt-6 p-4 bg-indigo-50 rounded-lg border border-indigo-200">
            <p className="text-sm text-indigo-900">
              🎯 <strong>Next Milestone:</strong> Complete API integration by March 20
            </p>
          </div>
        </div>
      </div>

      {/* Available Teams */}
      <div className="bg-white rounded-xl p-6 border border-gray-200">
        <h3 className="text-lg font-semibold mb-4">Join a Team</h3>
        <div className="grid md:grid-cols-3 gap-4">
          {availableTeams.map((team) => (
            <div key={team.id} className="p-4 border border-gray-200 rounded-lg hover:border-indigo-300 hover:bg-indigo-50 transition-colors">
              <h4 className="font-semibold mb-2">{team.name}</h4>
              <p className="text-sm text-gray-600 mb-3">{team.project}</p>
              <div className="space-y-2 mb-4">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600">Members</span>
                  <span className="font-medium">{team.members}/{team.maxMembers}</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600">Open Spots</span>
                  <span className={`font-medium ${team.openSpots > 0 ? 'text-green-600' : 'text-red-600'}`}>
                    {team.openSpots}
                  </span>
                </div>
                <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${
                  team.tier === 'Corporate' ? 'bg-green-100 text-green-700' : 'bg-purple-100 text-purple-700'
                }`}>
                  {team.tier}
                </span>
              </div>
              <button 
                disabled={team.openSpots === 0}
                className={`w-full px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  team.openSpots > 0 
                    ? 'bg-indigo-600 text-white hover:bg-indigo-700' 
                    : 'bg-gray-200 text-gray-500 cursor-not-allowed'
                }`}
              >
                {team.openSpots > 0 ? 'Request to Join' : 'Team Full'}
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Team Leaderboard */}
      <div className="bg-white rounded-xl p-6 border border-gray-200">
        <h3 className="text-lg font-semibold mb-4">Team Leaderboard</h3>
        <div className="space-y-2">
          {teamLeaderboard.map((team) => (
            <div 
              key={team.rank} 
              className={`flex items-center justify-between p-4 rounded-lg border ${
                team.rank <= 3 ? 'border-yellow-200 bg-yellow-50' : 'border-gray-200'
              }`}
            >
              <div className="flex items-center gap-4">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${
                  team.rank === 1 ? 'bg-yellow-100 text-yellow-700' :
                  team.rank === 2 ? 'bg-gray-100 text-gray-700' :
                  team.rank === 3 ? 'bg-orange-100 text-orange-700' :
                  'bg-gray-100 text-gray-600'
                }`}>
                  #{team.rank}
                </div>
                <div>
                  <h4 className="font-semibold">{team.name}</h4>
                  <p className="text-sm text-gray-600">{team.members} members</p>
                </div>
              </div>
              <div className="text-right">
                <p className="font-semibold text-indigo-600">{team.points} pts</p>
                <span className={`text-xs px-2 py-1 rounded-full ${
                  team.project === 'Completed' ? 'bg-green-100 text-green-700' : 'bg-blue-100 text-blue-700'
                }`}>
                  {team.project}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
