import { Search, Star, CheckCircle, XCircle, Clock, MessageSquare } from 'lucide-react';
import { useState } from 'react';

export default function MentorEvaluation() {
  const [selectedTask, setSelectedTask] = useState<number | null>(null);

  const pendingTasks = [
    {
      id: 1,
      intern: 'Sarah Johnson',
      task: 'E-Commerce Project - Final Submission',
      course: 'Full Stack Development',
      submittedDate: '2026-03-12',
      dueDate: '2026-03-15',
      status: 'pending',
      description: 'Complete e-commerce platform with shopping cart, payment integration, and admin panel.',
      attachments: ['project-demo.mp4', 'source-code.zip', 'documentation.pdf'],
    },
    {
      id: 2,
      intern: 'Michael Chen',
      task: 'Authentication Module Code Review',
      course: 'React Masterclass',
      submittedDate: '2026-03-13',
      dueDate: '2026-03-16',
      status: 'pending',
      description: 'Implemented JWT authentication with refresh tokens and role-based access control.',
      attachments: ['code-review.pdf', 'demo-video.mp4'],
    },
    {
      id: 3,
      intern: 'Emily Rodriguez',
      task: 'Backend API Development',
      course: 'Backend Development',
      submittedDate: '2026-03-10',
      dueDate: '2026-03-14',
      status: 'pending',
      description: 'RESTful API with Node.js, Express, and MongoDB integration.',
      attachments: ['api-docs.pdf', 'postman-collection.json'],
    },
  ];

  const evaluatedTasks = [
    {
      id: 4,
      intern: 'David Kim',
      task: 'Database Design Assignment',
      course: 'Full Stack Development',
      evaluatedDate: '2026-03-11',
      score: 85,
      status: 'passed',
      feedback: 'Good work on the schema design. Consider adding indexes for better performance.',
    },
    {
      id: 5,
      intern: 'Lisa Brown',
      task: 'React Component Library',
      course: 'React Masterclass',
      evaluatedDate: '2026-03-09',
      score: 72,
      status: 'passed',
      feedback: 'Components are functional but could use better documentation and error handling.',
    },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-semibold mb-1">Task Evaluation</h2>
        <p className="text-gray-600">Review and grade intern submissions</p>
      </div>

      {/* Stats */}
      <div className="grid md:grid-cols-4 gap-6">
        <div className="bg-white rounded-xl p-6 border border-gray-200">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center">
              <Clock className="w-6 h-6 text-yellow-600" />
            </div>
            <div>
              <h3 className="text-2xl font-semibold">{pendingTasks.length}</h3>
              <p className="text-sm text-gray-600">Pending Reviews</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 border border-gray-200">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
              <CheckCircle className="w-6 h-6 text-green-600" />
            </div>
            <div>
              <h3 className="text-2xl font-semibold">142</h3>
              <p className="text-sm text-gray-600">Evaluated</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 border border-gray-200">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
              <Star className="w-6 h-6 text-purple-600" />
            </div>
            <div>
              <h3 className="text-2xl font-semibold">85.4</h3>
              <p className="text-sm text-gray-600">Avg Score</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 border border-gray-200">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
              <MessageSquare className="w-6 h-6 text-blue-600" />
            </div>
            <div>
              <h3 className="text-2xl font-semibold">28</h3>
              <p className="text-sm text-gray-600">Feedback Given</p>
            </div>
          </div>
        </div>
      </div>

      {/* Search and Filter */}
      <div className="bg-white rounded-xl p-4 border border-gray-200">
        <div className="flex gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search submissions..."
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>
          <select className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500">
            <option>All Courses</option>
            <option>Full Stack Development</option>
            <option>React Masterclass</option>
            <option>Backend Development</option>
          </select>
        </div>
      </div>

      {/* Main Content */}
      <div className="grid lg:grid-cols-3 gap-6">
        {/* Task List */}
        <div className="lg:col-span-1 space-y-4">
          <h3 className="font-semibold">Pending Submissions ({pendingTasks.length})</h3>
          <div className="space-y-3">
            {pendingTasks.map((task) => (
              <div
                key={task.id}
                onClick={() => setSelectedTask(task.id)}
                className={`p-4 border rounded-lg cursor-pointer transition-all ${
                  selectedTask === task.id
                    ? 'border-purple-500 bg-purple-50'
                    : 'border-gray-200 hover:border-purple-300 bg-white'
                }`}
              >
                <div className="flex items-start justify-between mb-2">
                  <div className="flex-1">
                    <p className="font-medium text-sm">{task.task}</p>
                    <p className="text-xs text-gray-600 mt-1">{task.intern}</p>
                  </div>
                  <Clock className="w-4 h-4 text-yellow-600" />
                </div>
                <div className="flex items-center justify-between text-xs text-gray-500 mt-2">
                  <span>Due: {task.dueDate}</span>
                  <span className="px-2 py-1 bg-yellow-100 text-yellow-700 rounded-full">Pending</span>
                </div>
              </div>
            ))}
          </div>

          <h3 className="font-semibold mt-8">Recently Evaluated</h3>
          <div className="space-y-3">
            {evaluatedTasks.map((task) => (
              <div
                key={task.id}
                className="p-4 border border-gray-200 rounded-lg bg-white cursor-pointer hover:border-gray-300"
              >
                <div className="flex items-start justify-between mb-2">
                  <div className="flex-1">
                    <p className="font-medium text-sm">{task.task}</p>
                    <p className="text-xs text-gray-600 mt-1">{task.intern}</p>
                  </div>
                  <CheckCircle className="w-4 h-4 text-green-600" />
                </div>
                <div className="flex items-center justify-between text-xs text-gray-500 mt-2">
                  <span>Score: {task.score}/100</span>
                  <span className="px-2 py-1 bg-green-100 text-green-700 rounded-full">Passed</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Evaluation Panel */}
        <div className="lg:col-span-2">
          {selectedTask ? (
            <div className="bg-white rounded-xl p-6 border border-gray-200">
              {(() => {
                const task = pendingTasks.find(t => t.id === selectedTask);
                if (!task) return null;

                return (
                  <>
                    <div className="mb-6">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h2 className="text-xl font-semibold mb-1">{task.task}</h2>
                          <p className="text-sm text-gray-600">{task.course}</p>
                        </div>
                        <span className="px-3 py-1 bg-yellow-100 text-yellow-700 rounded-full text-sm">
                          Pending Review
                        </span>
                      </div>

                      <div className="grid md:grid-cols-2 gap-4 p-4 bg-gray-50 rounded-lg">
                        <div>
                          <p className="text-sm text-gray-600">Intern</p>
                          <p className="font-medium">{task.intern}</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-600">Submitted</p>
                          <p className="font-medium">{task.submittedDate}</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-600">Due Date</p>
                          <p className="font-medium">{task.dueDate}</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-600">Status</p>
                          <p className="font-medium capitalize">{task.status}</p>
                        </div>
                      </div>
                    </div>

                    <div className="mb-6">
                      <h3 className="font-semibold mb-2">Task Description</h3>
                      <p className="text-gray-700">{task.description}</p>
                    </div>

                    <div className="mb-6">
                      <h3 className="font-semibold mb-3">Attachments</h3>
                      <div className="space-y-2">
                        {task.attachments.map((file, index) => (
                          <div key={index} className="flex items-center justify-between p-3 border border-gray-200 rounded-lg hover:bg-gray-50">
                            <span className="text-sm">{file}</span>
                            <button className="text-sm text-purple-600 hover:text-purple-700">Download</button>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="mb-6">
                      <h3 className="font-semibold mb-3">Evaluation</h3>
                      <div className="space-y-4">
                        <div>
                          <label className="block text-sm font-medium mb-2">Score (0-100)</label>
                          <input
                            type="number"
                            min="0"
                            max="100"
                            placeholder="85"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium mb-2">Rating</label>
                          <div className="flex gap-2">
                            {[1, 2, 3, 4, 5].map((rating) => (
                              <button
                                key={rating}
                                className="p-2 border border-gray-300 rounded-lg hover:border-yellow-400 hover:bg-yellow-50 transition-colors"
                              >
                                <Star className="w-6 h-6 text-gray-400 hover:text-yellow-400" />
                              </button>
                            ))}
                          </div>
                        </div>
                        <div>
                          <label className="block text-sm font-medium mb-2">Feedback</label>
                          <textarea
                            rows={4}
                            placeholder="Provide detailed feedback for the intern..."
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="flex gap-3">
                      <button className="flex items-center gap-2 px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700">
                        <CheckCircle className="w-4 h-4" />
                        Approve & Submit
                      </button>
                      <button className="flex items-center gap-2 px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700">
                        <XCircle className="w-4 h-4" />
                        Request Revision
                      </button>
                      <button className="px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-50">
                        Save Draft
                      </button>
                    </div>
                  </>
                );
              })()}
            </div>
          ) : (
            <div className="bg-white rounded-xl p-12 border border-gray-200 text-center">
              <MessageSquare className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">No Task Selected</h3>
              <p className="text-gray-600">Select a submission from the list to start evaluation</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
