import { Search, Filter, Calendar, CheckCircle, Clock, AlertCircle, Plus } from 'lucide-react';
import { useState } from 'react';

export default function InternTasks() {
  const [activeTab, setActiveTab] = useState<'all' | 'pending' | 'in-progress' | 'completed'>('all');

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Website',
      description: 'Build a full-stack e-commerce platform with shopping cart',
      status: 'in-progress',
      progress: 65,
      dueDate: '2026-04-15',
      mentor: 'Dr. John Smith',
      tasks: 12,
      completedTasks: 8,
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'Create a React-based task management application',
      status: 'completed',
      progress: 100,
      dueDate: '2026-03-01',
      mentor: 'Sarah Johnson',
      tasks: 10,
      completedTasks: 10,
    },
    {
      id: 3,
      title: 'Blog Platform',
      description: 'Design and develop a blogging platform with CMS',
      status: 'pending',
      progress: 0,
      dueDate: '2026-05-20',
      mentor: 'Dr. John Smith',
      tasks: 15,
      completedTasks: 0,
    },
  ];

  const tasks = [
    { id: 1, title: 'Setup project repository', project: 'E-Commerce Website', status: 'completed', priority: 'high', dueDate: '2026-03-05' },
    { id: 2, title: 'Design database schema', project: 'E-Commerce Website', status: 'completed', priority: 'high', dueDate: '2026-03-08' },
    { id: 3, title: 'Implement user authentication', project: 'E-Commerce Website', status: 'in-progress', priority: 'high', dueDate: '2026-03-15' },
    { id: 4, title: 'Build product catalog', project: 'E-Commerce Website', status: 'in-progress', priority: 'medium', dueDate: '2026-03-18' },
    { id: 5, title: 'Create shopping cart functionality', project: 'E-Commerce Website', status: 'pending', priority: 'high', dueDate: '2026-03-25' },
    { id: 6, title: 'Implement payment gateway', project: 'E-Commerce Website', status: 'pending', priority: 'high', dueDate: '2026-04-01' },
    { id: 7, title: 'Write API documentation', project: 'Blog Platform', status: 'pending', priority: 'low', dueDate: '2026-05-10' },
  ];

  const filteredTasks = activeTab === 'all' ? tasks : tasks.filter(task => task.status === activeTab);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-semibold mb-1">Tasks & Projects</h2>
          <p className="text-gray-600">Manage your assignments and track progress</p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
          <Plus className="w-4 h-4" />
          New Task
        </button>
      </div>

      {/* Projects Overview */}
      <div className="grid lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <div key={project.id} className="bg-white rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-shadow">
            <div className="flex items-start justify-between mb-3">
              <h3 className="font-semibold">{project.title}</h3>
              <span
                className={`text-xs px-2 py-1 rounded-full ${
                  project.status === 'completed'
                    ? 'bg-green-100 text-green-700'
                    : project.status === 'in-progress'
                    ? 'bg-blue-100 text-blue-700'
                    : 'bg-gray-100 text-gray-700'
                }`}
              >
                {project.status.replace('-', ' ')}
              </span>
            </div>
            <p className="text-sm text-gray-600 mb-4">{project.description}</p>
            
            <div className="space-y-3">
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-600">Progress</span>
                <span className="font-medium">{project.progress}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className={`h-2 rounded-full ${
                    project.status === 'completed' ? 'bg-green-500' : 'bg-blue-500'
                  }`}
                  style={{ width: `${project.progress}%` }}
                />
              </div>

              <div className="pt-3 border-t border-gray-200 space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600">Tasks</span>
                  <span>{project.completedTasks}/{project.tasks}</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600">Due Date</span>
                  <span>{project.dueDate}</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600">Mentor</span>
                  <span>{project.mentor}</span>
                </div>
              </div>
            </div>

            <button className="mt-4 w-full border border-gray-300 text-gray-700 py-2 rounded-lg hover:bg-gray-50 transition-colors">
              View Details
            </button>
          </div>
        ))}
      </div>

      {/* Task List */}
      <div className="bg-white rounded-xl border border-gray-200">
        {/* Filters */}
        <div className="p-6 border-b border-gray-200">
          <div className="flex flex-wrap gap-4 items-center justify-between mb-4">
            <div className="flex gap-2">
              <button
                onClick={() => setActiveTab('all')}
                className={`px-4 py-2 rounded-lg transition-colors ${
                  activeTab === 'all'
                    ? 'bg-blue-100 text-blue-700'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                All Tasks
              </button>
              <button
                onClick={() => setActiveTab('pending')}
                className={`px-4 py-2 rounded-lg transition-colors ${
                  activeTab === 'pending'
                    ? 'bg-blue-100 text-blue-700'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                Pending
              </button>
              <button
                onClick={() => setActiveTab('in-progress')}
                className={`px-4 py-2 rounded-lg transition-colors ${
                  activeTab === 'in-progress'
                    ? 'bg-blue-100 text-blue-700'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                In Progress
              </button>
              <button
                onClick={() => setActiveTab('completed')}
                className={`px-4 py-2 rounded-lg transition-colors ${
                  activeTab === 'completed'
                    ? 'bg-blue-100 text-blue-700'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                Completed
              </button>
            </div>

            <div className="flex gap-2">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search tasks..."
                  className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                <Filter className="w-4 h-4" />
                Filter
              </button>
            </div>
          </div>
        </div>

        {/* Task Table */}
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase">Task</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase">Project</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase">Priority</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase">Due Date</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {filteredTasks.map((task) => (
                <tr key={task.id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className={`w-2 h-2 rounded-full ${
                        task.status === 'completed' ? 'bg-green-500' :
                        task.status === 'in-progress' ? 'bg-blue-500' :
                        'bg-gray-300'
                      }`} />
                      <span className="font-medium">{task.title}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">{task.project}</td>
                  <td className="px-6 py-4">
                    <span className={`inline-flex items-center gap-1 text-xs px-2 py-1 rounded-full ${
                      task.status === 'completed' ? 'bg-green-100 text-green-700' :
                      task.status === 'in-progress' ? 'bg-blue-100 text-blue-700' :
                      'bg-gray-100 text-gray-700'
                    }`}>
                      {task.status === 'completed' && <CheckCircle className="w-3 h-3" />}
                      {task.status === 'in-progress' && <Clock className="w-3 h-3" />}
                      {task.status === 'pending' && <AlertCircle className="w-3 h-3" />}
                      {task.status.replace('-', ' ')}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`text-xs px-2 py-1 rounded-full ${
                      task.priority === 'high' ? 'bg-red-100 text-red-700' :
                      task.priority === 'medium' ? 'bg-yellow-100 text-yellow-700' :
                      'bg-gray-100 text-gray-700'
                    }`}>
                      {task.priority}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {task.dueDate}
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <button className="text-sm text-blue-600 hover:text-blue-700">View</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
