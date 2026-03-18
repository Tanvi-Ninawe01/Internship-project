import { Users, BookOpen, CheckCircle, DollarSign, TrendingUp, Clock } from 'lucide-react';
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

export default function MentorDashboard() {
  const revenueData = [
    { month: 'Jan', revenue: 4200 },
    { month: 'Feb', revenue: 5100 },
    { month: 'Mar', revenue: 4800 },
    { month: 'Apr', revenue: 6200 },
    { month: 'May', revenue: 7100 },
    { month: 'Jun', revenue: 8500 },
  ];

  const enrollmentData = [
    { month: 'Jan', interns: 12 },
    { month: 'Feb', interns: 18 },
    { month: 'Mar', interns: 22 },
    { month: 'Apr', interns: 28 },
    { month: 'May', interns: 32 },
    { month: 'Jun', interns: 38 },
  ];

  const activeInterns = [
    { id: 1, name: 'Sarah Johnson', course: 'Full Stack Development', progress: 85, lastActive: '2 hours ago' },
    { id: 2, name: 'Michael Chen', course: 'React Masterclass', progress: 72, lastActive: '5 hours ago' },
    { id: 3, name: 'Emily Rodriguez', course: 'Backend Development', progress: 90, lastActive: '1 hour ago' },
    { id: 4, name: 'David Kim', course: 'Full Stack Development', progress: 65, lastActive: '3 hours ago' },
  ];

  const pendingTasks = [
    { id: 1, intern: 'Sarah Johnson', task: 'E-Commerce Project Review', dueDate: '2026-03-15', priority: 'high' },
    { id: 2, intern: 'Michael Chen', task: 'Code Review - Authentication', dueDate: '2026-03-16', priority: 'medium' },
    { id: 3, intern: 'Emily Rodriguez', task: 'Final Project Evaluation', dueDate: '2026-03-14', priority: 'high' },
  ];

  return (
    <div className="space-y-6">
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white rounded-xl p-6 border border-gray-200">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
              <Users className="w-6 h-6 text-purple-600" />
            </div>
            <span className="text-sm text-green-600 font-medium">+8</span>
          </div>
          <h3 className="text-2xl font-semibold mb-1">38</h3>
          <p className="text-sm text-gray-600">Active Interns</p>
        </div>

        <div className="bg-white rounded-xl p-6 border border-gray-200">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
              <BookOpen className="w-6 h-6 text-blue-600" />
            </div>
          </div>
          <h3 className="text-2xl font-semibold mb-1">12</h3>
          <p className="text-sm text-gray-600">Active Courses</p>
        </div>

        <div className="bg-white rounded-xl p-6 border border-gray-200">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
              <CheckCircle className="w-6 h-6 text-green-600" />
            </div>
          </div>
          <h3 className="text-2xl font-semibold mb-1">156</h3>
          <p className="text-sm text-gray-600">Tasks Completed</p>
        </div>

        <div className="bg-white rounded-xl p-6 border border-gray-200">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center">
              <DollarSign className="w-6 h-6 text-yellow-600" />
            </div>
            <span className="text-sm text-green-600 font-medium">+15%</span>
          </div>
          <h3 className="text-2xl font-semibold mb-1">$8,500</h3>
          <p className="text-sm text-gray-600">Monthly Revenue</p>
        </div>
      </div>

      {/* Charts Row */}
      <div className="grid lg:grid-cols-2 gap-6">
        {/* Revenue Trend */}
        <div className="bg-white rounded-xl p-6 border border-gray-200">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold">Revenue Trend</h3>
            <TrendingUp className="w-5 h-5 text-green-600" />
          </div>
          <ResponsiveContainer width="100%" height={250}>
            <LineChart data={revenueData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis dataKey="month" stroke="#9ca3af" />
              <YAxis stroke="#9ca3af" />
              <Tooltip />
              <Line type="monotone" dataKey="revenue" stroke="#8b5cf6" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Enrollment Growth */}
        <div className="bg-white rounded-xl p-6 border border-gray-200">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold">Enrollment Growth</h3>
            <Users className="w-5 h-5 text-blue-600" />
          </div>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={enrollmentData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis dataKey="month" stroke="#9ca3af" />
              <YAxis stroke="#9ca3af" />
              <Tooltip />
              <Bar dataKey="interns" fill="#3b82f6" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Active Interns & Pending Tasks */}
      <div className="grid lg:grid-cols-2 gap-6">
        {/* Active Interns */}
        <div className="bg-white rounded-xl p-6 border border-gray-200">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold">Active Interns</h3>
            <button className="text-sm text-purple-600 hover:text-purple-700">View All</button>
          </div>
          <div className="space-y-3">
            {activeInterns.map((intern) => (
              <div key={intern.id} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-semibold">
                    {intern.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <p className="font-medium">{intern.name}</p>
                    <p className="text-sm text-gray-500">{intern.course}</p>
                  </div>
                </div>
                <div className="text-right">
                  <div className="flex items-center gap-2 mb-1">
                    <div className="w-20 bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-purple-600 h-2 rounded-full"
                        style={{ width: `${intern.progress}%` }}
                      />
                    </div>
                    <span className="text-sm font-medium">{intern.progress}%</span>
                  </div>
                  <p className="text-xs text-gray-500 flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {intern.lastActive}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Pending Tasks */}
        <div className="bg-white rounded-xl p-6 border border-gray-200">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold">Pending Evaluations</h3>
            <span className="text-sm bg-red-100 text-red-700 px-3 py-1 rounded-full">
              {pendingTasks.length} pending
            </span>
          </div>
          <div className="space-y-3">
            {pendingTasks.map((task) => (
              <div key={task.id} className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <p className="font-medium">{task.task}</p>
                    <p className="text-sm text-gray-600">{task.intern}</p>
                  </div>
                  <span
                    className={`text-xs px-2 py-1 rounded-full ${
                      task.priority === 'high'
                        ? 'bg-red-100 text-red-700'
                        : 'bg-yellow-100 text-yellow-700'
                    }`}
                  >
                    {task.priority}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <p className="text-sm text-gray-500">Due: {task.dueDate}</p>
                  <button className="text-sm text-purple-600 hover:text-purple-700 font-medium">
                    Review →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Course Performance */}
      <div className="bg-white rounded-xl p-6 border border-gray-200">
        <h3 className="text-lg font-semibold mb-4">Top Performing Courses</h3>
        <div className="space-y-4">
          <div>
            <div className="flex items-center justify-between mb-2">
              <div>
                <p className="font-medium">Full Stack Development</p>
                <p className="text-sm text-gray-600">24 enrolled · 4.9★</p>
              </div>
              <span className="text-sm font-medium text-green-600">95% completion</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div className="bg-green-500 h-2 rounded-full" style={{ width: '95%' }} />
            </div>
          </div>
          <div>
            <div className="flex items-center justify-between mb-2">
              <div>
                <p className="font-medium">React Masterclass</p>
                <p className="text-sm text-gray-600">18 enrolled · 4.8★</p>
              </div>
              <span className="text-sm font-medium text-green-600">88% completion</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div className="bg-blue-500 h-2 rounded-full" style={{ width: '88%' }} />
            </div>
          </div>
          <div>
            <div className="flex items-center justify-between mb-2">
              <div>
                <p className="font-medium">Backend Development</p>
                <p className="text-sm text-gray-600">16 enrolled · 4.7★</p>
              </div>
              <span className="text-sm font-medium text-green-600">82% completion</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div className="bg-purple-500 h-2 rounded-full" style={{ width: '82%' }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
