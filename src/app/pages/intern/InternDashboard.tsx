import { TrendingUp, Award, Target, Clock, CheckCircle, AlertCircle } from 'lucide-react';
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

export default function InternDashboard() {
  const progressData = [
    { month: 'Jan', hours: 20 },
    { month: 'Feb', hours: 35 },
    { month: 'Mar', hours: 45 },
    { month: 'Apr', hours: 60 },
    { month: 'May', hours: 52 },
    { month: 'Jun', hours: 70 },
  ];

  const skillData = [
    { skill: 'React', score: 85 },
    { skill: 'Node.js', score: 70 },
    { skill: 'Python', score: 90 },
    { skill: 'SQL', score: 65 },
    { skill: 'Design', score: 75 },
  ];

  const recentTasks = [
    { id: 1, title: 'Build Authentication Module', status: 'completed', dueDate: '2026-03-10' },
    { id: 2, title: 'Design Database Schema', status: 'in-progress', dueDate: '2026-03-15' },
    { id: 3, title: 'Write API Documentation', status: 'pending', dueDate: '2026-03-20' },
    { id: 4, title: 'Code Review Session', status: 'completed', dueDate: '2026-03-12' },
  ];

  return (
    <div className="space-y-6">
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white rounded-xl p-6 border border-gray-200">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
              <TrendingUp className="w-6 h-6 text-blue-600" />
            </div>
            <span className="text-sm text-green-600 font-medium">+12%</span>
          </div>
          <h3 className="text-2xl font-semibold mb-1">85%</h3>
          <p className="text-sm text-gray-600">Overall Progress</p>
        </div>

        <div className="bg-white rounded-xl p-6 border border-gray-200">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
              <CheckCircle className="w-6 h-6 text-green-600" />
            </div>
          </div>
          <h3 className="text-2xl font-semibold mb-1">24/30</h3>
          <p className="text-sm text-gray-600">Tasks Completed</p>
        </div>

        <div className="bg-white rounded-xl p-6 border border-gray-200">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
              <Clock className="w-6 h-6 text-purple-600" />
            </div>
          </div>
          <h3 className="text-2xl font-semibold mb-1">282 hrs</h3>
          <p className="text-sm text-gray-600">Learning Time</p>
        </div>

        <div className="bg-white rounded-xl p-6 border border-gray-200">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center">
              <Award className="w-6 h-6 text-yellow-600" />
            </div>
          </div>
          <h3 className="text-2xl font-semibold mb-1">12</h3>
          <p className="text-sm text-gray-600">Certificates Earned</p>
        </div>
      </div>

      {/* Charts Row */}
      <div className="grid lg:grid-cols-2 gap-6">
        {/* Learning Progress */}
        <div className="bg-white rounded-xl p-6 border border-gray-200">
          <h3 className="text-lg font-semibold mb-4">Learning Progress</h3>
          <ResponsiveContainer width="100%" height={250}>
            <LineChart data={progressData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis dataKey="month" stroke="#9ca3af" />
              <YAxis stroke="#9ca3af" />
              <Tooltip />
              <Line type="monotone" dataKey="hours" stroke="#3b82f6" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Skill Assessment */}
        <div className="bg-white rounded-xl p-6 border border-gray-200">
          <h3 className="text-lg font-semibold mb-4">Skill Assessment</h3>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={skillData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis dataKey="skill" stroke="#9ca3af" />
              <YAxis stroke="#9ca3af" />
              <Tooltip />
              <Bar dataKey="score" fill="#8b5cf6" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Recent Tasks & Current Goals */}
      <div className="grid lg:grid-cols-3 gap-6">
        {/* Recent Tasks */}
        <div className="lg:col-span-2 bg-white rounded-xl p-6 border border-gray-200">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold">Recent Tasks</h3>
            <button className="text-sm text-blue-600 hover:text-blue-700">View All</button>
          </div>
          <div className="space-y-3">
            {recentTasks.map((task) => (
              <div key={task.id} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                <div className="flex items-center gap-3">
                  <div className={`w-2 h-2 rounded-full ${
                    task.status === 'completed' ? 'bg-green-500' : 
                    task.status === 'in-progress' ? 'bg-blue-500' : 
                    'bg-gray-300'
                  }`} />
                  <div>
                    <p className="font-medium">{task.title}</p>
                    <p className="text-sm text-gray-500">Due: {task.dueDate}</p>
                  </div>
                </div>
                <span className={`text-xs px-3 py-1 rounded-full ${
                  task.status === 'completed' ? 'bg-green-100 text-green-700' :
                  task.status === 'in-progress' ? 'bg-blue-100 text-blue-700' :
                  'bg-gray-100 text-gray-700'
                }`}>
                  {task.status.replace('-', ' ')}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Current Goals */}
        <div className="bg-white rounded-xl p-6 border border-gray-200">
          <h3 className="text-lg font-semibold mb-4">Current Goals</h3>
          <div className="space-y-4">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium">Complete React Course</span>
                <span className="text-sm text-gray-600">90%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-blue-600 h-2 rounded-full" style={{ width: '90%' }} />
              </div>
            </div>
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium">Build 3 Projects</span>
                <span className="text-sm text-gray-600">67%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-purple-600 h-2 rounded-full" style={{ width: '67%' }} />
              </div>
            </div>
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium">Earn 5 Certificates</span>
                <span className="text-sm text-gray-600">40%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-green-600 h-2 rounded-full" style={{ width: '40%' }} />
              </div>
            </div>
          </div>

          <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
            <div className="flex items-start gap-2">
              <Target className="w-5 h-5 text-blue-600 mt-0.5" />
              <div>
                <p className="text-sm font-medium text-blue-900">Weekly Goal</p>
                <p className="text-sm text-blue-700">Complete 2 more tasks to reach your weekly target!</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Announcements */}
      <div className="bg-white rounded-xl p-6 border border-gray-200">
        <h3 className="text-lg font-semibold mb-4">Announcements</h3>
        <div className="space-y-3">
          <div className="flex items-start gap-3 p-4 bg-yellow-50 rounded-lg border border-yellow-200">
            <AlertCircle className="w-5 h-5 text-yellow-600 mt-0.5" />
            <div>
              <p className="font-medium text-yellow-900">New Course Available</p>
              <p className="text-sm text-yellow-700">Advanced JavaScript patterns course is now available. Enroll now!</p>
            </div>
          </div>
          <div className="flex items-start gap-3 p-4 bg-green-50 rounded-lg border border-green-200">
            <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
            <div>
              <p className="font-medium text-green-900">Webinar Scheduled</p>
              <p className="text-sm text-green-700">Join us for a career development webinar on March 18th at 3 PM.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
