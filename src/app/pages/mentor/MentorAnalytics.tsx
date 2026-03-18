import { TrendingUp, Users, BookOpen, Award, Download } from 'lucide-react';
import { LineChart, Line, BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, AreaChart, Area } from 'recharts';

export default function MentorAnalytics() {
  const studentGrowth = [
    { month: 'Jan', students: 12, revenue: 3200 },
    { month: 'Feb', students: 18, revenue: 4500 },
    { month: 'Mar', students: 22, revenue: 5200 },
    { month: 'Apr', students: 28, revenue: 6800 },
    { month: 'May', students: 32, revenue: 7500 },
    { month: 'Jun', students: 38, revenue: 8500 },
  ];

  const coursePerformance = [
    { course: 'Full Stack Dev', enrolled: 24, completed: 23, avgScore: 87 },
    { course: 'React Master', enrolled: 18, completed: 16, avgScore: 85 },
    { course: 'Backend Dev', enrolled: 16, completed: 14, avgScore: 82 },
    { course: 'UI/UX Design', enrolled: 12, completed: 11, avgScore: 90 },
  ];

  const engagementData = [
    { name: 'Videos Watched', value: 45 },
    { name: 'Assignments', value: 30 },
    { name: 'Live Sessions', value: 15 },
    { name: 'Reading', value: 10 },
  ];

  const COLORS = ['#8b5cf6', '#3b82f6', '#10b981', '#f59e0b'];

  const completionTrend = [
    { week: 'Week 1', rate: 65 },
    { week: 'Week 2', rate: 70 },
    { week: 'Week 3', rate: 75 },
    { week: 'Week 4', rate: 82 },
    { week: 'Week 5', rate: 85 },
    { week: 'Week 6', rate: 88 },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-semibold mb-1">Analytics & Insights</h2>
          <p className="text-gray-600">Track your mentoring performance and student progress</p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700">
          <Download className="w-4 h-4" />
          Export Report
        </button>
      </div>

      {/* Key Metrics */}
      <div className="grid md:grid-cols-4 gap-6">
        <div className="bg-white rounded-xl p-6 border border-gray-200">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
              <Users className="w-6 h-6 text-purple-600" />
            </div>
            <div className="flex items-center gap-1 text-green-600">
              <TrendingUp className="w-4 h-4" />
              <span className="text-sm font-medium">+18%</span>
            </div>
          </div>
          <h3 className="text-2xl font-semibold mb-1">38</h3>
          <p className="text-sm text-gray-600">Total Active Students</p>
        </div>

        <div className="bg-white rounded-xl p-6 border border-gray-200">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
              <BookOpen className="w-6 h-6 text-blue-600" />
            </div>
            <div className="flex items-center gap-1 text-green-600">
              <TrendingUp className="w-4 h-4" />
              <span className="text-sm font-medium">+12%</span>
            </div>
          </div>
          <h3 className="text-2xl font-semibold mb-1">12</h3>
          <p className="text-sm text-gray-600">Active Courses</p>
        </div>

        <div className="bg-white rounded-xl p-6 border border-gray-200">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
              <Award className="w-6 h-6 text-green-600" />
            </div>
            <div className="flex items-center gap-1 text-green-600">
              <TrendingUp className="w-4 h-4" />
              <span className="text-sm font-medium">+8%</span>
            </div>
          </div>
          <h3 className="text-2xl font-semibold mb-1">88%</h3>
          <p className="text-sm text-gray-600">Completion Rate</p>
        </div>

        <div className="bg-white rounded-xl p-6 border border-gray-200">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center">
              <TrendingUp className="w-6 h-6 text-yellow-600" />
            </div>
            <div className="flex items-center gap-1 text-green-600">
              <TrendingUp className="w-4 h-4" />
              <span className="text-sm font-medium">+5%</span>
            </div>
          </div>
          <h3 className="text-2xl font-semibold mb-1">4.8/5</h3>
          <p className="text-sm text-gray-600">Average Rating</p>
        </div>
      </div>

      {/* Charts Row 1 */}
      <div className="grid lg:grid-cols-2 gap-6">
        {/* Student & Revenue Growth */}
        <div className="bg-white rounded-xl p-6 border border-gray-200">
          <h3 className="text-lg font-semibold mb-4">Student & Revenue Growth</h3>
          <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={studentGrowth}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis dataKey="month" stroke="#9ca3af" />
              <YAxis yAxisId="left" stroke="#9ca3af" />
              <YAxis yAxisId="right" orientation="right" stroke="#9ca3af" />
              <Tooltip />
              <Legend />
              <Area
                yAxisId="left"
                type="monotone"
                dataKey="students"
                stroke="#8b5cf6"
                fill="#8b5cf6"
                fillOpacity={0.6}
                name="Students"
              />
              <Area
                yAxisId="right"
                type="monotone"
                dataKey="revenue"
                stroke="#10b981"
                fill="#10b981"
                fillOpacity={0.6}
                name="Revenue ($)"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        {/* Course Performance */}
        <div className="bg-white rounded-xl p-6 border border-gray-200">
          <h3 className="text-lg font-semibold mb-4">Course Performance</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={coursePerformance}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis dataKey="course" stroke="#9ca3af" />
              <YAxis stroke="#9ca3af" />
              <Tooltip />
              <Legend />
              <Bar dataKey="enrolled" fill="#3b82f6" name="Enrolled" radius={[8, 8, 0, 0]} />
              <Bar dataKey="completed" fill="#10b981" name="Completed" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Charts Row 2 */}
      <div className="grid lg:grid-cols-2 gap-6">
        {/* Completion Rate Trend */}
        <div className="bg-white rounded-xl p-6 border border-gray-200">
          <h3 className="text-lg font-semibold mb-4">Completion Rate Trend</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={completionTrend}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis dataKey="week" stroke="#9ca3af" />
              <YAxis stroke="#9ca3af" />
              <Tooltip />
              <Line type="monotone" dataKey="rate" stroke="#8b5cf6" strokeWidth={2} name="Completion Rate %" />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Engagement Distribution */}
        <div className="bg-white rounded-xl p-6 border border-gray-200">
          <h3 className="text-lg font-semibold mb-4">Student Engagement</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={engagementData}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                outerRadius={100}
                fill="#8884d8"
                dataKey="value"
              >
                {engagementData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Detailed Course Stats */}
      <div className="bg-white rounded-xl p-6 border border-gray-200">
        <h3 className="text-lg font-semibold mb-4">Course Statistics</h3>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase">Course</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase">Enrolled</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase">Completed</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase">Completion Rate</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase">Avg Score</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {coursePerformance.map((course, index) => {
                const completionRate = Math.round((course.completed / course.enrolled) * 100);
                return (
                  <tr key={index} className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium">{course.course}</td>
                    <td className="px-6 py-4 text-gray-600">{course.enrolled}</td>
                    <td className="px-6 py-4 text-gray-600">{course.completed}</td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        <div className="w-20 bg-gray-200 rounded-full h-2">
                          <div
                            className="bg-green-500 h-2 rounded-full"
                            style={{ width: `${completionRate}%` }}
                          />
                        </div>
                        <span className="text-sm">{completionRate}%</span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className="text-sm font-medium">{course.avgScore}%</span>
                    </td>
                    <td className="px-6 py-4">
                      <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm">
                        Active
                      </span>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      {/* Insights */}
      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-gradient-to-br from-purple-600 to-purple-700 rounded-xl p-6 text-white">
          <h4 className="font-semibold mb-2">Top Performing Course</h4>
          <p className="text-2xl font-bold mb-1">UI/UX Design</p>
          <p className="text-purple-200 text-sm">90% average score · 92% completion</p>
        </div>

        <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl p-6 text-white">
          <h4 className="font-semibold mb-2">Most Engaged Students</h4>
          <p className="text-2xl font-bold mb-1">Full Stack Dev</p>
          <p className="text-blue-200 text-sm">24 active students · 95% attendance</p>
        </div>

        <div className="bg-gradient-to-br from-green-600 to-green-700 rounded-xl p-6 text-white">
          <h4 className="font-semibold mb-2">Revenue Growth</h4>
          <p className="text-2xl font-bold mb-1">+165%</p>
          <p className="text-green-200 text-sm">Compared to last quarter</p>
        </div>
      </div>
    </div>
  );
}
