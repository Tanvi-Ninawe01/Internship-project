import { TrendingUp, TrendingDown, Target, Award } from 'lucide-react';
import { LineChart, Line, BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar } from 'recharts';

export default function InternAnalytics() {
  const performanceData = [
    { month: 'Jan', score: 75, tasks: 8 },
    { month: 'Feb', score: 78, tasks: 12 },
    { month: 'Mar', score: 82, tasks: 15 },
    { month: 'Apr', score: 85, tasks: 18 },
    { month: 'May', score: 88, tasks: 20 },
    { month: 'Jun', score: 92, tasks: 22 },
  ];

  const skillsRadarData = [
    { skill: 'Frontend', score: 90 },
    { skill: 'Backend', score: 75 },
    { skill: 'Database', score: 80 },
    { skill: 'DevOps', score: 65 },
    { skill: 'Testing', score: 70 },
    { skill: 'Design', score: 85 },
  ];

  const activityData = [
    { name: 'Coding', value: 40 },
    { name: 'Learning', value: 30 },
    { name: 'Meetings', value: 15 },
    { name: 'Reviews', value: 15 },
  ];

  const COLORS = ['#3b82f6', '#8b5cf6', '#10b981', '#f59e0b'];

  const weeklyProgress = [
    { day: 'Mon', hours: 6 },
    { day: 'Tue', hours: 7 },
    { day: 'Wed', hours: 5 },
    { day: 'Thu', hours: 8 },
    { day: 'Fri', hours: 6 },
    { day: 'Sat', hours: 4 },
    { day: 'Sun', hours: 3 },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-semibold mb-1">Performance Analytics</h2>
        <p className="text-gray-600">Track your progress and identify areas for improvement</p>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white rounded-xl p-6 border border-gray-200">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
              <Target className="w-6 h-6 text-blue-600" />
            </div>
            <div className="flex items-center gap-1 text-green-600">
              <TrendingUp className="w-4 h-4" />
              <span className="text-sm font-medium">+8%</span>
            </div>
          </div>
          <h3 className="text-2xl font-semibold mb-1">92/100</h3>
          <p className="text-sm text-gray-600">Performance Score</p>
        </div>

        <div className="bg-white rounded-xl p-6 border border-gray-200">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
              <Award className="w-6 h-6 text-green-600" />
            </div>
            <div className="flex items-center gap-1 text-green-600">
              <TrendingUp className="w-4 h-4" />
              <span className="text-sm font-medium">+15%</span>
            </div>
          </div>
          <h3 className="text-2xl font-semibold mb-1">95%</h3>
          <p className="text-sm text-gray-600">Task Completion Rate</p>
        </div>

        <div className="bg-white rounded-xl p-6 border border-gray-200">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
              <TrendingUp className="w-6 h-6 text-purple-600" />
            </div>
            <div className="flex items-center gap-1 text-red-600">
              <TrendingDown className="w-4 h-4" />
              <span className="text-sm font-medium">-2%</span>
            </div>
          </div>
          <h3 className="text-2xl font-semibold mb-1">39 hrs</h3>
          <p className="text-sm text-gray-600">Weekly Activity</p>
        </div>

        <div className="bg-white rounded-xl p-6 border border-gray-200">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center">
              <Award className="w-6 h-6 text-yellow-600" />
            </div>
            <div className="flex items-center gap-1 text-green-600">
              <TrendingUp className="w-4 h-4" />
              <span className="text-sm font-medium">+3</span>
            </div>
          </div>
          <h3 className="text-2xl font-semibold mb-1">Rank #12</h3>
          <p className="text-sm text-gray-600">Global Leaderboard</p>
        </div>
      </div>

      {/* Charts Row 1 */}
      <div className="grid lg:grid-cols-2 gap-6">
        {/* Performance Trend */}
        <div className="bg-white rounded-xl p-6 border border-gray-200">
          <h3 className="text-lg font-semibold mb-4">Performance Trend</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={performanceData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis dataKey="month" stroke="#9ca3af" />
              <YAxis stroke="#9ca3af" />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="score" stroke="#3b82f6" strokeWidth={2} name="Score" />
              <Line type="monotone" dataKey="tasks" stroke="#8b5cf6" strokeWidth={2} name="Tasks Completed" />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Skills Radar */}
        <div className="bg-white rounded-xl p-6 border border-gray-200">
          <h3 className="text-lg font-semibold mb-4">Skills Assessment</h3>
          <ResponsiveContainer width="100%" height={300}>
            <RadarChart data={skillsRadarData}>
              <PolarGrid stroke="#e5e7eb" />
              <PolarAngleAxis dataKey="skill" stroke="#6b7280" />
              <PolarRadiusAxis angle={90} domain={[0, 100]} stroke="#6b7280" />
              <Radar name="Skill Level" dataKey="score" stroke="#3b82f6" fill="#3b82f6" fillOpacity={0.6} />
              <Tooltip />
            </RadarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Charts Row 2 */}
      <div className="grid lg:grid-cols-2 gap-6">
        {/* Weekly Activity */}
        <div className="bg-white rounded-xl p-6 border border-gray-200">
          <h3 className="text-lg font-semibold mb-4">Weekly Activity</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={weeklyProgress}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis dataKey="day" stroke="#9ca3af" />
              <YAxis stroke="#9ca3af" />
              <Tooltip />
              <Bar dataKey="hours" fill="#10b981" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Activity Distribution */}
        <div className="bg-white rounded-xl p-6 border border-gray-200">
          <h3 className="text-lg font-semibold mb-4">Activity Distribution</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={activityData}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                outerRadius={100}
                fill="#8884d8"
                dataKey="value"
              >
                {activityData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Detailed Metrics */}
      <div className="bg-white rounded-xl p-6 border border-gray-200">
        <h3 className="text-lg font-semibold mb-4">Detailed Metrics</h3>
        <div className="grid md:grid-cols-3 gap-6">
          <div>
            <p className="text-sm text-gray-600 mb-2">Code Quality</p>
            <div className="flex items-center gap-3 mb-1">
              <div className="flex-1 bg-gray-200 rounded-full h-2">
                <div className="bg-green-500 h-2 rounded-full" style={{ width: '88%' }} />
              </div>
              <span className="text-sm font-medium">88%</span>
            </div>
          </div>
          <div>
            <p className="text-sm text-gray-600 mb-2">Communication</p>
            <div className="flex items-center gap-3 mb-1">
              <div className="flex-1 bg-gray-200 rounded-full h-2">
                <div className="bg-blue-500 h-2 rounded-full" style={{ width: '92%' }} />
              </div>
              <span className="text-sm font-medium">92%</span>
            </div>
          </div>
          <div>
            <p className="text-sm text-gray-600 mb-2">Punctuality</p>
            <div className="flex items-center gap-3 mb-1">
              <div className="flex-1 bg-gray-200 rounded-full h-2">
                <div className="bg-purple-500 h-2 rounded-full" style={{ width: '96%' }} />
              </div>
              <span className="text-sm font-medium">96%</span>
            </div>
          </div>
          <div>
            <p className="text-sm text-gray-600 mb-2">Problem Solving</p>
            <div className="flex items-center gap-3 mb-1">
              <div className="flex-1 bg-gray-200 rounded-full h-2">
                <div className="bg-yellow-500 h-2 rounded-full" style={{ width: '85%' }} />
              </div>
              <span className="text-sm font-medium">85%</span>
            </div>
          </div>
          <div>
            <p className="text-sm text-gray-600 mb-2">Collaboration</p>
            <div className="flex items-center gap-3 mb-1">
              <div className="flex-1 bg-gray-200 rounded-full h-2">
                <div className="bg-pink-500 h-2 rounded-full" style={{ width: '90%' }} />
              </div>
              <span className="text-sm font-medium">90%</span>
            </div>
          </div>
          <div>
            <p className="text-sm text-gray-600 mb-2">Learning Pace</p>
            <div className="flex items-center gap-3 mb-1">
              <div className="flex-1 bg-gray-200 rounded-full h-2">
                <div className="bg-indigo-500 h-2 rounded-full" style={{ width: '94%' }} />
              </div>
              <span className="text-sm font-medium">94%</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
