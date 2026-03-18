import { Search, Filter, MoreVertical, Mail, Video, User, TrendingUp, Clock } from 'lucide-react';
import { useState } from 'react';

export default function MentorInterns() {
  const [viewMode, setViewMode] = useState<'grid' | 'table'>('table');

  const interns = [
    {
      id: 1,
      name: 'Sarah Johnson',
      email: 'sarah.j@email.com',
      course: 'Full Stack Development',
      progress: 85,
      tasksCompleted: 24,
      totalTasks: 30,
      rating: 4.8,
      joinedDate: '2026-01-15',
      lastActive: '2 hours ago',
      status: 'active',
    },
    {
      id: 2,
      name: 'Michael Chen',
      email: 'michael.c@email.com',
      course: 'React Masterclass',
      progress: 72,
      tasksCompleted: 18,
      totalTasks: 25,
      rating: 4.5,
      joinedDate: '2026-02-01',
      lastActive: '5 hours ago',
      status: 'active',
    },
    {
      id: 3,
      name: 'Emily Rodriguez',
      email: 'emily.r@email.com',
      course: 'Backend Development',
      progress: 90,
      tasksCompleted: 27,
      totalTasks: 30,
      rating: 4.9,
      joinedDate: '2026-01-20',
      lastActive: '1 hour ago',
      status: 'active',
    },
    {
      id: 4,
      name: 'David Kim',
      email: 'david.k@email.com',
      course: 'Full Stack Development',
      progress: 65,
      tasksCompleted: 19,
      totalTasks: 30,
      rating: 4.3,
      joinedDate: '2026-02-10',
      lastActive: '1 day ago',
      status: 'active',
    },
    {
      id: 5,
      name: 'Lisa Brown',
      email: 'lisa.b@email.com',
      course: 'React Masterclass',
      progress: 45,
      tasksCompleted: 11,
      totalTasks: 25,
      rating: 4.1,
      joinedDate: '2026-02-20',
      lastActive: '3 hours ago',
      status: 'inactive',
    },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-semibold mb-1">Intern Management</h2>
          <p className="text-gray-600">Manage and track your intern's progress</p>
        </div>
      </div>

      {/* Stats */}
      <div className="grid md:grid-cols-4 gap-6">
        <div className="bg-white rounded-xl p-6 border border-gray-200">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
              <User className="w-6 h-6 text-purple-600" />
            </div>
            <div>
              <h3 className="text-2xl font-semibold">{interns.filter(i => i.status === 'active').length}</h3>
              <p className="text-sm text-gray-600">Active Interns</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 border border-gray-200">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
              <TrendingUp className="w-6 h-6 text-blue-600" />
            </div>
            <div>
              <h3 className="text-2xl font-semibold">78%</h3>
              <p className="text-sm text-gray-600">Avg Progress</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 border border-gray-200">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
              <Clock className="w-6 h-6 text-green-600" />
            </div>
            <div>
              <h3 className="text-2xl font-semibold">4.6</h3>
              <p className="text-sm text-gray-600">Avg Rating</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 border border-gray-200">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center">
              <User className="w-6 h-6 text-yellow-600" />
            </div>
            <div>
              <h3 className="text-2xl font-semibold">{interns.length}</h3>
              <p className="text-sm text-gray-600">Total Interns</p>
            </div>
          </div>
        </div>
      </div>

      {/* Filters and Search */}
      <div className="bg-white rounded-xl p-6 border border-gray-200">
        <div className="flex flex-wrap gap-4 items-center justify-between">
          <div className="flex gap-2 flex-1 min-w-[300px]">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search interns..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>
            <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
              <Filter className="w-4 h-4" />
              Filter
            </button>
          </div>

          <div className="flex gap-2">
            <button
              onClick={() => setViewMode('table')}
              className={`px-4 py-2 rounded-lg transition-colors ${
                viewMode === 'table' ? 'bg-purple-100 text-purple-600' : 'bg-gray-100 text-gray-600'
              }`}
            >
              Table
            </button>
            <button
              onClick={() => setViewMode('grid')}
              className={`px-4 py-2 rounded-lg transition-colors ${
                viewMode === 'grid' ? 'bg-purple-100 text-purple-600' : 'bg-gray-100 text-gray-600'
              }`}
            >
              Grid
            </button>
          </div>
        </div>
      </div>

      {/* Interns Display */}
      {viewMode === 'table' ? (
        <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase">Intern</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase">Course</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase">Progress</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase">Tasks</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase">Rating</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase">Last Active</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {interns.map((intern) => (
                  <tr key={intern.id} className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-semibold">
                          {intern.name.split(' ').map(n => n[0]).join('')}
                        </div>
                        <div>
                          <p className="font-medium">{intern.name}</p>
                          <p className="text-sm text-gray-500">{intern.email}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-600">{intern.course}</td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        <div className="w-24 bg-gray-200 rounded-full h-2">
                          <div
                            className="bg-purple-600 h-2 rounded-full"
                            style={{ width: `${intern.progress}%` }}
                          />
                        </div>
                        <span className="text-sm font-medium">{intern.progress}%</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-600">
                      {intern.tasksCompleted}/{intern.totalTasks}
                    </td>
                    <td className="px-6 py-4">
                      <span className="text-sm font-medium">{intern.rating}/5</span>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-600">{intern.lastActive}</td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                          <Mail className="w-4 h-4 text-gray-600" />
                        </button>
                        <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                          <Video className="w-4 h-4 text-gray-600" />
                        </button>
                        <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                          <MoreVertical className="w-4 h-4 text-gray-600" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {interns.map((intern) => (
            <div key={intern.id} className="bg-white rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-semibold">
                    {intern.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <p className="font-semibold">{intern.name}</p>
                    <p className="text-sm text-gray-500">{intern.email}</p>
                  </div>
                </div>
                <button>
                  <MoreVertical className="w-5 h-5 text-gray-400" />
                </button>
              </div>

              <div className="space-y-3 mb-4">
                <div>
                  <p className="text-sm text-gray-600 mb-1">Course</p>
                  <p className="font-medium">{intern.course}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600 mb-2">Progress: {intern.progress}%</p>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-purple-600 h-2 rounded-full"
                      style={{ width: `${intern.progress}%` }}
                    />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <div>
                    <p className="text-gray-600">Tasks</p>
                    <p className="font-medium">{intern.tasksCompleted}/{intern.totalTasks}</p>
                  </div>
                  <div>
                    <p className="text-gray-600">Rating</p>
                    <p className="font-medium">{intern.rating}/5</p>
                  </div>
                </div>
                <div>
                  <p className="text-xs text-gray-500">Last active: {intern.lastActive}</p>
                </div>
              </div>

              <div className="flex gap-2 pt-4 border-t border-gray-200">
                <button className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700">
                  <Mail className="w-4 h-4" />
                  Message
                </button>
                <button className="flex items-center justify-center px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                  <Video className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
