import { Trophy, Medal, TrendingUp, Award } from 'lucide-react';

export default function InternLeaderboard() {
  const leaderboard = [
    { rank: 1, name: 'Emily Rodriguez', score: 9850, tasks: 95, certificates: 18, change: 0, avatar: 'ER' },
    { rank: 2, name: 'Michael Chen', score: 9720, tasks: 92, certificates: 16, change: 1, avatar: 'MC' },
    { rank: 3, name: 'Jessica Taylor', score: 9680, tasks: 90, certificates: 17, change: -1, avatar: 'JT' },
    { rank: 4, name: 'David Kim', score: 9520, tasks: 88, certificates: 15, change: 2, avatar: 'DK' },
    { rank: 5, name: 'Sophie Anderson', score: 9450, tasks: 87, certificates: 14, change: 0, avatar: 'SA' },
    { rank: 6, name: 'Alex Johnson', score: 9380, tasks: 85, certificates: 16, change: -2, avatar: 'AJ' },
    { rank: 7, name: 'Maria Garcia', score: 9320, tasks: 84, certificates: 13, change: 1, avatar: 'MG' },
    { rank: 8, name: 'James Wilson', score: 9280, tasks: 83, certificates: 15, change: 0, avatar: 'JW' },
    { rank: 9, name: 'Lisa Brown', score: 9240, tasks: 82, certificates: 12, change: 3, avatar: 'LB' },
    { rank: 10, name: 'Ryan Martinez', score: 9180, tasks: 81, certificates: 14, change: -1, avatar: 'RM' },
    { rank: 11, name: 'Anna Thompson', score: 9120, tasks: 80, certificates: 11, change: 0, avatar: 'AT' },
    { rank: 12, name: 'Sarah Johnson', score: 9080, tasks: 79, certificates: 12, change: 2, avatar: 'SJ', isCurrentUser: true },
  ];

  const categories = [
    { name: 'Top Performers', icon: Trophy, color: 'blue' },
    { name: 'Most Improved', icon: TrendingUp, color: 'green' },
    { name: 'Certificates', icon: Award, color: 'purple' },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-semibold mb-1">Leaderboard</h2>
        <p className="text-gray-600">See how you rank among your peers</p>
      </div>

      {/* Your Rank Card */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-6 text-white">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center text-2xl font-semibold backdrop-blur-sm">
              #12
            </div>
            <div>
              <p className="text-blue-100 text-sm mb-1">Your Current Rank</p>
              <h3 className="text-2xl font-semibold">Sarah Johnson</h3>
              <p className="text-blue-100 text-sm mt-1">Score: 9,080 points</p>
            </div>
          </div>
          <div className="text-right">
            <div className="flex items-center gap-2 justify-end mb-2">
              <TrendingUp className="w-5 h-5" />
              <span className="text-lg font-semibold">+2 positions</span>
            </div>
            <p className="text-blue-100 text-sm">from last week</p>
          </div>
        </div>
      </div>

      {/* Category Tabs */}
      <div className="flex gap-2 overflow-x-auto pb-2">
        {categories.map((category) => (
          <button
            key={category.name}
            className="flex items-center gap-2 px-6 py-3 bg-white border border-gray-200 rounded-lg hover:shadow-md transition-shadow whitespace-nowrap"
          >
            <category.icon className={`w-5 h-5 text-${category.color}-600`} />
            <span className="font-medium">{category.name}</span>
          </button>
        ))}
      </div>

      {/* Leaderboard Table */}
      <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
        {/* Top 3 Podium */}
        <div className="grid grid-cols-3 gap-4 p-6 bg-gradient-to-b from-yellow-50 to-white border-b border-gray-200">
          {/* Second Place */}
          <div className="text-center pt-8">
            <div className="relative inline-block mb-3">
              <div className="w-16 h-16 bg-gradient-to-br from-gray-400 to-gray-500 rounded-full flex items-center justify-center text-white text-xl font-semibold">
                {leaderboard[1].avatar}
              </div>
              <div className="absolute -top-2 -right-2 w-8 h-8 bg-gray-400 rounded-full flex items-center justify-center">
                <Medal className="w-5 h-5 text-white" />
              </div>
            </div>
            <h4 className="font-semibold mb-1">{leaderboard[1].name}</h4>
            <p className="text-sm text-gray-600">{leaderboard[1].score.toLocaleString()} pts</p>
          </div>

          {/* First Place */}
          <div className="text-center">
            <div className="relative inline-block mb-3">
              <div className="w-20 h-20 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-full flex items-center justify-center text-white text-xl font-semibold">
                {leaderboard[0].avatar}
              </div>
              <div className="absolute -top-2 -right-2 w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center">
                <Trophy className="w-6 h-6 text-white" />
              </div>
            </div>
            <h4 className="font-semibold mb-1">{leaderboard[0].name}</h4>
            <p className="text-sm text-gray-600">{leaderboard[0].score.toLocaleString()} pts</p>
          </div>

          {/* Third Place */}
          <div className="text-center pt-12">
            <div className="relative inline-block mb-3">
              <div className="w-14 h-14 bg-gradient-to-br from-orange-400 to-orange-500 rounded-full flex items-center justify-center text-white text-lg font-semibold">
                {leaderboard[2].avatar}
              </div>
              <div className="absolute -top-2 -right-2 w-8 h-8 bg-orange-400 rounded-full flex items-center justify-center">
                <Medal className="w-5 h-5 text-white" />
              </div>
            </div>
            <h4 className="font-semibold mb-1">{leaderboard[2].name}</h4>
            <p className="text-sm text-gray-600">{leaderboard[2].score.toLocaleString()} pts</p>
          </div>
        </div>

        {/* Full Leaderboard */}
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase">Rank</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase">Intern</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase">Score</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase">Tasks</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase">Certificates</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase">Change</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {leaderboard.map((user) => (
                <tr
                  key={user.rank}
                  className={`transition-colors ${
                    user.isCurrentUser ? 'bg-blue-50' : 'hover:bg-gray-50'
                  }`}
                >
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      {user.rank <= 3 ? (
                        <div
                          className={`w-8 h-8 rounded-full flex items-center justify-center ${
                            user.rank === 1
                              ? 'bg-yellow-100 text-yellow-600'
                              : user.rank === 2
                              ? 'bg-gray-100 text-gray-600'
                              : 'bg-orange-100 text-orange-600'
                          }`}
                        >
                          <span className="font-semibold">{user.rank}</span>
                        </div>
                      ) : (
                        <span className="font-medium text-gray-600 w-8 text-center">
                          {user.rank}
                        </span>
                      )}
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-semibold">
                        {user.avatar}
                      </div>
                      <div>
                        <p className="font-medium">{user.name}</p>
                        {user.isCurrentUser && (
                          <span className="text-xs text-blue-600 font-medium">You</span>
                        )}
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className="font-semibold">{user.score.toLocaleString()}</span>
                  </td>
                  <td className="px-6 py-4 text-gray-600">{user.tasks}</td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-1">
                      <Award className="w-4 h-4 text-yellow-500" />
                      <span>{user.certificates}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    {user.change !== 0 && (
                      <div
                        className={`flex items-center gap-1 ${
                          user.change > 0 ? 'text-green-600' : 'text-red-600'
                        }`}
                      >
                        <TrendingUp
                          className={`w-4 h-4 ${user.change < 0 ? 'rotate-180' : ''}`}
                        />
                        <span className="text-sm font-medium">{Math.abs(user.change)}</span>
                      </div>
                    )}
                    {user.change === 0 && (
                      <span className="text-sm text-gray-400">-</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Achievements Info */}
      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-white rounded-xl p-6 border border-gray-200">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
              <Trophy className="w-6 h-6 text-blue-600" />
            </div>
            <div>
              <p className="text-sm text-gray-600">To reach Top 10</p>
              <p className="text-xl font-semibold">100 points</p>
            </div>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div className="bg-blue-600 h-2 rounded-full" style={{ width: '75%' }} />
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 border border-gray-200">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
              <TrendingUp className="w-6 h-6 text-green-600" />
            </div>
            <div>
              <p className="text-sm text-gray-600">Weekly Progress</p>
              <p className="text-xl font-semibold">+280 points</p>
            </div>
          </div>
          <p className="text-sm text-green-600">↑ 12% from last week</p>
        </div>

        <div className="bg-white rounded-xl p-6 border border-gray-200">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
              <Award className="w-6 h-6 text-purple-600" />
            </div>
            <div>
              <p className="text-sm text-gray-600">Next Milestone</p>
              <p className="text-xl font-semibold">10,000 pts</p>
            </div>
          </div>
          <p className="text-sm text-gray-600">920 points to go</p>
        </div>
      </div>
    </div>
  );
}
