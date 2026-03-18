import { Trophy, Medal, Star, TrendingUp, Award, Crown, Zap, Target } from 'lucide-react';

export default function InternshipLeaderboard() {
  const topPerformers = [
    { rank: 1, name: 'Sarah Chen', avatar: 'SC', points: 3850, level: 5, tier: 'Corporate', streak: 45, tasksCompleted: 48 },
    { rank: 2, name: 'Mike Rodriguez', avatar: 'MR', points: 3720, level: 5, tier: 'Premium', streak: 38, tasksCompleted: 45 },
    { rank: 3, name: 'Emily Zhang', avatar: 'EZ', points: 3590, level: 4, tier: 'Corporate', streak: 42, tasksCompleted: 44 },
    { rank: 4, name: 'Alex Kumar', avatar: 'AK', points: 3420, level: 4, tier: 'Premium', streak: 30, tasksCompleted: 42 },
    { rank: 5, name: 'Lisa Wang', avatar: 'LW', points: 3280, level: 4, tier: 'Premium', streak: 35, tasksCompleted: 40 },
    { rank: 6, name: 'John Smith', avatar: 'JS', points: 3150, level: 4, tier: 'Premium', streak: 28, tasksCompleted: 38 },
    { rank: 7, name: 'Maria Garcia', avatar: 'MG', points: 2980, level: 3, tier: 'Basic', streak: 25, tasksCompleted: 36 },
    { rank: 8, name: 'David Kim', avatar: 'DK', points: 2850, level: 3, tier: 'Premium', streak: 22, tasksCompleted: 34 },
    { rank: 9, name: 'Sophie Taylor', avatar: 'ST', points: 2720, level: 3, tier: 'Premium', streak: 20, tasksCompleted: 32 },
    { rank: 10, name: 'James Wilson', avatar: 'JW', points: 2650, level: 3, tier: 'Basic', streak: 18, tasksCompleted: 30 },
  ];

  const myRank = {
    rank: 42,
    name: 'You',
    avatar: 'AD',
    points: 1850,
    level: 2,
    tier: 'Premium',
    streak: 12,
    tasksCompleted: 18,
  };

  const rewards = [
    { rank: '1st', prize: '$1,000 + Premium Tier (1 year)', icon: Trophy, color: 'yellow' },
    { rank: '2nd', prize: '$500 + Premium Tier (6 months)', icon: Medal, color: 'gray' },
    { rank: '3rd', prize: '$250 + Premium Tier (3 months)', icon: Medal, color: 'orange' },
    { rank: 'Top 10', prize: 'Premium Tier (1 month)', icon: Star, color: 'purple' },
    { rank: 'Top 50', prize: 'Exclusive Certificate', icon: Award, color: 'blue' },
  ];

  const categories = [
    { name: 'All Time', active: true },
    { name: 'This Month', active: false },
    { name: 'This Week', active: false },
    { name: 'My Tier', active: false },
  ];

  return (
    <div className="space-y-6">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-yellow-600 to-orange-600 rounded-xl p-8 text-white">
        <div className="flex items-center justify-between">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <Trophy className="w-10 h-10" />
              <h2 className="text-3xl font-bold">Leaderboard</h2>
            </div>
            <p className="text-white/90 text-lg">
              Compete with peers and climb to the top!
            </p>
          </div>
          <div className="text-center">
            <div className="w-24 h-24 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border-4 border-white/30 mb-2">
              <div className="text-center">
                <div className="text-3xl font-bold">#{myRank.rank}</div>
                <div className="text-xs text-white/80">Your Rank</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Category Tabs */}
      <div className="bg-white rounded-xl p-4 border border-gray-200">
        <div className="flex gap-2 overflow-x-auto">
          {categories.map((category, idx) => (
            <button
              key={idx}
              className={`px-4 py-2 rounded-lg font-medium whitespace-nowrap transition-colors ${
                category.active
                  ? 'bg-yellow-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>
      </div>

      {/* Your Position */}
      <div className="bg-white rounded-xl p-6 border-2 border-indigo-200">
        <h3 className="text-lg font-semibold mb-4">Your Position</h3>
        <div className="flex items-center justify-between p-4 bg-indigo-50 rounded-lg">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-indigo-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
              #{myRank.rank}
            </div>
            <div className="w-14 h-14 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-full flex items-center justify-center text-white font-semibold text-lg">
              {myRank.avatar}
            </div>
            <div>
              <h4 className="font-semibold text-lg">{myRank.name}</h4>
              <div className="flex items-center gap-3 text-sm text-gray-600">
                <span>Level {myRank.level}</span>
                <span>•</span>
                <span className={`px-2 py-0.5 rounded-full text-xs ${
                  myRank.tier === 'Corporate' ? 'bg-green-100 text-green-700' :
                  myRank.tier === 'Premium' ? 'bg-purple-100 text-purple-700' :
                  'bg-blue-100 text-blue-700'
                }`}>
                  {myRank.tier}
                </span>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-6 text-center">
            <div>
              <p className="text-2xl font-bold text-indigo-600">{myRank.points}</p>
              <p className="text-xs text-gray-600">Points</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-orange-600">{myRank.streak}</p>
              <p className="text-xs text-gray-600">Day Streak</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-green-600">{myRank.tasksCompleted}</p>
              <p className="text-xs text-gray-600">Tasks Done</p>
            </div>
          </div>
        </div>
        <div className="mt-4 p-3 bg-yellow-50 rounded-lg border border-yellow-200">
          <p className="text-sm text-yellow-900">
            🎯 <strong>{topPerformers[9].points - myRank.points} points</strong> to reach Top 10!
          </p>
        </div>
      </div>

      {/* Top 3 Podium */}
      <div className="bg-white rounded-xl p-6 border border-gray-200">
        <h3 className="text-lg font-semibold mb-6">Top Performers</h3>
        <div className="grid md:grid-cols-3 gap-4 mb-6">
          {/* 2nd Place */}
          <div className="order-1 md:order-1">
            <div className="text-center p-6 bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg border-2 border-gray-300">
              <Medal className="w-12 h-12 text-gray-600 mx-auto mb-3" />
              <div className="w-20 h-20 bg-gradient-to-br from-gray-400 to-gray-600 rounded-full flex items-center justify-center text-white font-bold text-2xl mx-auto mb-3">
                {topPerformers[1].avatar}
              </div>
              <h4 className="font-bold text-lg mb-1">{topPerformers[1].name}</h4>
              <div className="text-3xl font-bold text-gray-700 mb-1">#2</div>
              <p className="text-gray-600 font-semibold">{topPerformers[1].points} pts</p>
            </div>
          </div>

          {/* 1st Place */}
          <div className="order-0 md:order-2">
            <div className="text-center p-6 bg-gradient-to-br from-yellow-100 to-yellow-200 rounded-lg border-2 border-yellow-400 relative">
              <Crown className="w-12 h-12 text-yellow-600 mx-auto mb-3 animate-bounce" />
              <div className="w-24 h-24 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center text-white font-bold text-3xl mx-auto mb-3 border-4 border-yellow-300">
                {topPerformers[0].avatar}
              </div>
              <h4 className="font-bold text-xl mb-1">{topPerformers[0].name}</h4>
              <div className="text-4xl font-bold text-yellow-700 mb-1">#1</div>
              <p className="text-yellow-800 font-semibold text-lg">{topPerformers[0].points} pts</p>
            </div>
          </div>

          {/* 3rd Place */}
          <div className="order-2 md:order-3">
            <div className="text-center p-6 bg-gradient-to-br from-orange-100 to-orange-200 rounded-lg border-2 border-orange-300">
              <Medal className="w-12 h-12 text-orange-600 mx-auto mb-3" />
              <div className="w-20 h-20 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full flex items-center justify-center text-white font-bold text-2xl mx-auto mb-3">
                {topPerformers[2].avatar}
              </div>
              <h4 className="font-bold text-lg mb-1">{topPerformers[2].name}</h4>
              <div className="text-3xl font-bold text-orange-700 mb-1">#3</div>
              <p className="text-orange-600 font-semibold">{topPerformers[2].points} pts</p>
            </div>
          </div>
        </div>
      </div>

      {/* Full Leaderboard */}
      <div className="bg-white rounded-xl p-6 border border-gray-200">
        <h3 className="text-lg font-semibold mb-4">Full Rankings</h3>
        <div className="space-y-2">
          {topPerformers.map((user) => (
            <div 
              key={user.rank} 
              className={`flex items-center justify-between p-4 rounded-lg border-2 transition-colors ${
                user.rank <= 3 ? 'border-yellow-200 bg-yellow-50' : 'border-gray-200 hover:bg-gray-50'
              }`}
            >
              <div className="flex items-center gap-4">
                <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg ${
                  user.rank === 1 ? 'bg-yellow-500 text-white' :
                  user.rank === 2 ? 'bg-gray-400 text-white' :
                  user.rank === 3 ? 'bg-orange-500 text-white' :
                  'bg-gray-200 text-gray-700'
                }`}>
                  #{user.rank}
                </div>
                <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-full flex items-center justify-center text-white font-semibold">
                  {user.avatar}
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h4 className="font-semibold">{user.name}</h4>
                    {user.rank === 1 && <Crown className="w-4 h-4 text-yellow-600" />}
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <span>Level {user.level}</span>
                    <span>•</span>
                    <span className={`px-2 py-0.5 rounded-full text-xs ${
                      user.tier === 'Corporate' ? 'bg-green-100 text-green-700' :
                      user.tier === 'Premium' ? 'bg-purple-100 text-purple-700' :
                      'bg-blue-100 text-blue-700'
                    }`}>
                      {user.tier}
                    </span>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-6 text-center">
                <div>
                  <p className="font-bold text-lg text-indigo-600">{user.points}</p>
                  <p className="text-xs text-gray-600">Points</p>
                </div>
                <div className="flex items-center gap-1">
                  <Zap className="w-4 h-4 text-orange-500" />
                  <div>
                    <p className="font-bold text-orange-600">{user.streak}</p>
                    <p className="text-xs text-gray-600">Streak</p>
                  </div>
                </div>
                <div className="flex items-center gap-1">
                  <Target className="w-4 h-4 text-green-500" />
                  <div>
                    <p className="font-bold text-green-600">{user.tasksCompleted}</p>
                    <p className="text-xs text-gray-600">Tasks</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Rewards */}
      <div className="bg-white rounded-xl p-6 border border-gray-200">
        <h3 className="text-lg font-semibold mb-4">Monthly Rewards</h3>
        <div className="grid md:grid-cols-5 gap-4">
          {rewards.map((reward, idx) => (
            <div key={idx} className={`p-4 rounded-lg border-2 bg-gradient-to-br ${
              reward.color === 'yellow' ? 'border-yellow-300 from-yellow-50 to-yellow-100' :
              reward.color === 'gray' ? 'border-gray-300 from-gray-50 to-gray-100' :
              reward.color === 'orange' ? 'border-orange-300 from-orange-50 to-orange-100' :
              reward.color === 'purple' ? 'border-purple-300 from-purple-50 to-purple-100' :
              'border-blue-300 from-blue-50 to-blue-100'
            }`}>
              <reward.icon className={`w-8 h-8 mx-auto mb-2 ${
                reward.color === 'yellow' ? 'text-yellow-600' :
                reward.color === 'gray' ? 'text-gray-600' :
                reward.color === 'orange' ? 'text-orange-600' :
                reward.color === 'purple' ? 'text-purple-600' :
                'text-blue-600'
              }`} />
              <h4 className="font-bold text-center mb-2">{reward.rank}</h4>
              <p className="text-xs text-center text-gray-700">{reward.prize}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
