import { CheckCircle, Clock, AlertCircle, Filter, Search, Calendar } from 'lucide-react';

export default function InternshipTasks() {
  const tasks = [
    {
      id: 1,
      title: 'Build a Responsive Navigation Bar',
      level: 'Level 1',
      difficulty: 'Easy',
      points: 10,
      status: 'completed',
      dueDate: '2026-03-05',
      description: 'Create a mobile-responsive navigation bar using HTML, CSS, and JavaScript',
    },
    {
      id: 2,
      title: 'Implement User Authentication',
      level: 'Level 2',
      difficulty: 'Medium',
      points: 25,
      status: 'in-progress',
      dueDate: '2026-03-18',
      description: 'Build login and registration forms with form validation',
    },
    {
      id: 3,
      title: 'Create REST API Endpoints',
      level: 'Level 2',
      difficulty: 'Medium',
      points: 30,
      status: 'pending',
      dueDate: '2026-03-22',
      description: 'Develop CRUD API endpoints using Node.js and Express',
    },
    {
      id: 4,
      title: 'Design Database Schema',
      level: 'Level 2',
      difficulty: 'Hard',
      points: 35,
      status: 'pending',
      dueDate: '2026-03-25',
      description: 'Design and implement a normalized database schema',
    },
    {
      id: 5,
      title: 'Build Real-time Chat Feature',
      level: 'Level 3',
      difficulty: 'Hard',
      points: 50,
      status: 'locked',
      dueDate: '2026-04-01',
      description: 'Implement real-time messaging using WebSockets',
    },
  ];

  const stats = [
    { label: 'Total Tasks', value: '45', color: 'blue' },
    { label: 'Completed', value: '18', color: 'green' },
    { label: 'In Progress', value: '3', color: 'yellow' },
    { label: 'Pending', value: '24', color: 'gray' },
  ];

  return (
    <div className="space-y-6">
      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {stats.map((stat, idx) => (
          <div key={idx} className="bg-white rounded-xl p-6 border border-gray-200">
            <p className="text-sm text-gray-600 mb-1">{stat.label}</p>
            <p className={`text-2xl font-semibold text-${stat.color}-600`}>{stat.value}</p>
          </div>
        ))}
      </div>

      {/* Filters */}
      <div className="bg-white rounded-xl p-4 border border-gray-200">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search tasks..."
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
          <select className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500">
            <option>All Levels</option>
            <option>Level 1</option>
            <option>Level 2</option>
            <option>Level 3</option>
          </select>
          <select className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500">
            <option>All Status</option>
            <option>Completed</option>
            <option>In Progress</option>
            <option>Pending</option>
          </select>
          <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
            <Filter className="w-5 h-5" />
            <span>More Filters</span>
          </button>
        </div>
      </div>

      {/* Tasks List */}
      <div className="space-y-4">
        {tasks.map((task) => (
          <div 
            key={task.id} 
            className={`bg-white rounded-xl p-6 border-2 ${
              task.status === 'completed' ? 'border-green-200' :
              task.status === 'in-progress' ? 'border-yellow-200' :
              task.status === 'locked' ? 'border-gray-200 opacity-60' :
              'border-gray-200'
            }`}
          >
            <div className="flex items-start justify-between mb-3">
              <div className="flex items-start gap-4 flex-1">
                <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                  task.status === 'completed' ? 'bg-green-100' :
                  task.status === 'in-progress' ? 'bg-yellow-100' :
                  task.status === 'locked' ? 'bg-gray-100' :
                  'bg-blue-100'
                }`}>
                  {task.status === 'completed' ? (
                    <CheckCircle className="w-6 h-6 text-green-600" />
                  ) : task.status === 'in-progress' ? (
                    <Clock className="w-6 h-6 text-yellow-600" />
                  ) : (
                    <AlertCircle className="w-6 h-6 text-blue-600" />
                  )}
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold mb-1">{task.title}</h3>
                  <p className="text-sm text-gray-600 mb-3">{task.description}</p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-xs font-medium">
                      {task.level}
                    </span>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      task.difficulty === 'Easy' ? 'bg-green-100 text-green-700' :
                      task.difficulty === 'Medium' ? 'bg-yellow-100 text-yellow-700' :
                      'bg-red-100 text-red-700'
                    }`}>
                      {task.difficulty}
                    </span>
                    <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-xs font-medium">
                      {task.points} points
                    </span>
                    <span className="flex items-center gap-1 px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs">
                      <Calendar className="w-3 h-3" />
                      Due: {task.dueDate}
                    </span>
                  </div>
                </div>
              </div>
              <span className={`px-3 py-1 rounded-full text-xs font-medium whitespace-nowrap ml-4 ${
                task.status === 'completed' ? 'bg-green-100 text-green-700' :
                task.status === 'in-progress' ? 'bg-yellow-100 text-yellow-700' :
                task.status === 'locked' ? 'bg-gray-100 text-gray-700' :
                'bg-blue-100 text-blue-700'
              }`}>
                {task.status === 'completed' ? 'Completed' :
                 task.status === 'in-progress' ? 'In Progress' :
                 task.status === 'locked' ? 'Locked' :
                 'Pending'}
              </span>
            </div>

            {task.status !== 'locked' && task.status !== 'completed' && (
              <div className="flex gap-3 mt-4 pt-4 border-t border-gray-200">
                <button className="flex-1 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors text-sm font-medium">
                  {task.status === 'in-progress' ? 'Continue Task' : 'Start Task'}
                </button>
                <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors text-sm font-medium">
                  View Details
                </button>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Task Summary */}
      <div className="bg-gradient-to-br from-indigo-600 to-blue-600 rounded-xl p-6 text-white">
        <h3 className="text-lg font-semibold mb-4">Task Progress Summary</h3>
        <div className="grid md:grid-cols-3 gap-4">
          <div>
            <p className="text-white/80 text-sm mb-1">Completion Rate</p>
            <p className="text-2xl font-semibold">40%</p>
            <div className="mt-2 w-full bg-white/20 rounded-full h-2">
              <div className="bg-white h-2 rounded-full" style={{ width: '40%' }} />
            </div>
          </div>
          <div>
            <p className="text-white/80 text-sm mb-1">Total Points Earned</p>
            <p className="text-2xl font-semibold">180 / 450</p>
          </div>
          <div>
            <p className="text-white/80 text-sm mb-1">Average Task Score</p>
            <p className="text-2xl font-semibold">87%</p>
          </div>
        </div>
      </div>
    </div>
  );
}
