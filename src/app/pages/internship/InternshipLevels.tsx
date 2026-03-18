import { Lock, CheckCircle, Clock, Target, Star, Award, TrendingUp } from 'lucide-react';

export default function InternshipLevels() {
  const levels = [
    {
      id: 1,
      name: 'Level 1: Foundation',
      status: 'completed',
      progress: 100,
      tasks: 5,
      completedTasks: 5,
      projects: 1,
      completedProjects: 1,
      skills: ['HTML', 'CSS', 'JavaScript Basics'],
      unlocked: true,
    },
    {
      id: 2,
      name: 'Level 2: Intermediate',
      status: 'in-progress',
      progress: 65,
      tasks: 8,
      completedTasks: 5,
      projects: 2,
      completedProjects: 1,
      skills: ['React', 'State Management', 'API Integration'],
      unlocked: true,
    },
    {
      id: 3,
      name: 'Level 3: Advanced',
      status: 'locked',
      progress: 0,
      tasks: 10,
      completedTasks: 0,
      projects: 3,
      completedProjects: 0,
      skills: ['Advanced React', 'TypeScript', 'Testing'],
      unlocked: false,
    },
    {
      id: 4,
      name: 'Level 4: Expert',
      status: 'locked',
      progress: 0,
      tasks: 12,
      completedTasks: 0,
      projects: 4,
      completedProjects: 0,
      skills: ['System Design', 'Performance', 'Security'],
      unlocked: false,
    },
    {
      id: 5,
      name: 'Level 5: Master',
      status: 'locked',
      progress: 0,
      tasks: 15,
      completedTasks: 0,
      projects: 5,
      completedProjects: 0,
      skills: ['Architecture', 'Leadership', 'Mentoring'],
      unlocked: false,
    },
  ];

  const tierComparison = [
    { feature: 'Total Levels', basic: '3', premium: '5', corporate: '7' },
    { feature: 'Tasks per Level', basic: '5', premium: '6', corporate: '7+' },
    { feature: 'Projects per Level', basic: '1', premium: '1-2', corporate: '2-3' },
    { feature: 'Mentor Support', basic: 'Community', premium: '1-on-1', corporate: 'Dedicated' },
    { feature: 'Certificate', basic: 'Digital', premium: 'Digital + PDF', corporate: 'Premium + LinkedIn' },
  ];

  return (
    <div className="space-y-6">
      {/* Progress Overview */}
      <div className="bg-gradient-to-br from-indigo-600 to-blue-600 rounded-xl p-6 text-white">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h2 className="text-2xl font-semibold mb-2">Your Level Progress</h2>
            <p className="text-white/80">Currently on Level 2 - Keep going!</p>
          </div>
          <div className="text-center">
            <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border-4 border-white/30 mb-2">
              <span className="text-2xl font-bold">2</span>
            </div>
            <p className="text-sm text-white/80">Current Level</p>
          </div>
        </div>
        <div className="grid md:grid-cols-3 gap-4">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
            <div className="flex items-center gap-2 mb-1">
              <CheckCircle className="w-4 h-4" />
              <span className="text-sm">Completed</span>
            </div>
            <p className="text-2xl font-semibold">1 Level</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
            <div className="flex items-center gap-2 mb-1">
              <Clock className="w-4 h-4" />
              <span className="text-sm">In Progress</span>
            </div>
            <p className="text-2xl font-semibold">65%</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
            <div className="flex items-center gap-2 mb-1">
              <Target className="w-4 h-4" />
              <span className="text-sm">Remaining</span>
            </div>
            <p className="text-2xl font-semibold">3 Levels</p>
          </div>
        </div>
      </div>

      {/* Level Cards */}
      <div className="space-y-4">
        {levels.map((level) => (
          <div 
            key={level.id} 
            className={`bg-white rounded-xl p-6 border-2 ${
              level.status === 'completed' ? 'border-green-200' :
              level.status === 'in-progress' ? 'border-indigo-300' :
              'border-gray-200'
            } ${!level.unlocked && 'opacity-60'}`}
          >
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-start gap-4">
                <div className={`w-14 h-14 rounded-lg flex items-center justify-center ${
                  level.status === 'completed' ? 'bg-green-100' :
                  level.status === 'in-progress' ? 'bg-indigo-100' :
                  'bg-gray-100'
                }`}>
                  {level.status === 'completed' ? (
                    <CheckCircle className="w-7 h-7 text-green-600" />
                  ) : level.status === 'in-progress' ? (
                    <TrendingUp className="w-7 h-7 text-indigo-600" />
                  ) : (
                    <Lock className="w-7 h-7 text-gray-400" />
                  )}
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1">{level.name}</h3>
                  <div className="flex items-center gap-4 text-sm text-gray-600">
                    <span>{level.completedTasks}/{level.tasks} Tasks</span>
                    <span>•</span>
                    <span>{level.completedProjects}/{level.projects} Projects</span>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-3">
                    {level.skills.map((skill, idx) => (
                      <span 
                        key={idx} 
                        className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                level.status === 'completed' ? 'bg-green-100 text-green-700' :
                level.status === 'in-progress' ? 'bg-indigo-100 text-indigo-700' :
                'bg-gray-100 text-gray-700'
              }`}>
                {level.status === 'completed' ? 'Completed' :
                 level.status === 'in-progress' ? 'In Progress' :
                 'Locked'}
              </span>
            </div>

            {level.unlocked && (
              <div className="mt-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium">Progress</span>
                  <span className="text-sm text-gray-600">{level.progress}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div 
                    className={`h-3 rounded-full ${
                      level.status === 'completed' ? 'bg-green-600' : 'bg-indigo-600'
                    }`}
                    style={{ width: `${level.progress}%` }} 
                  />
                </div>
              </div>
            )}

            {level.unlocked && level.status !== 'locked' && (
              <button className="mt-4 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors text-sm font-medium">
                {level.status === 'completed' ? 'Review Level' : 'Continue Learning'}
              </button>
            )}
          </div>
        ))}
      </div>

      {/* Tier Comparison */}
      <div className="bg-white rounded-xl p-6 border border-gray-200">
        <h3 className="text-lg font-semibold mb-4">Tier Comparison</h3>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-3 px-4 font-medium text-gray-700">Feature</th>
                <th className="text-center py-3 px-4">
                  <div className="flex items-center justify-center gap-2">
                    <Star className="w-4 h-4 text-blue-600" />
                    <span className="font-medium text-gray-700">Basic</span>
                  </div>
                </th>
                <th className="text-center py-3 px-4">
                  <div className="flex items-center justify-center gap-2">
                    <Award className="w-4 h-4 text-purple-600" />
                    <span className="font-medium text-gray-700">Premium</span>
                  </div>
                </th>
                <th className="text-center py-3 px-4">
                  <div className="flex items-center justify-center gap-2">
                    <Target className="w-4 h-4 text-green-600" />
                    <span className="font-medium text-gray-700">Corporate</span>
                  </div>
                </th>
              </tr>
            </thead>
            <tbody>
              {tierComparison.map((row, idx) => (
                <tr key={idx} className="border-b border-gray-100">
                  <td className="py-3 px-4 text-sm">{row.feature}</td>
                  <td className="py-3 px-4 text-sm text-center text-gray-600">{row.basic}</td>
                  <td className="py-3 px-4 text-sm text-center text-gray-600">{row.premium}</td>
                  <td className="py-3 px-4 text-sm text-center text-gray-600">{row.corporate}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="mt-4 p-4 bg-indigo-50 rounded-lg border border-indigo-200">
          <p className="text-sm text-indigo-900">
            💡 <strong>Tip:</strong> Upgrade to Premium or Corporate tier to unlock more levels and advanced features!
          </p>
        </div>
      </div>
    </div>
  );
}
