import { Check, Circle, Lock } from 'lucide-react';

export default function InternJourney() {
  const journeySteps = [
    {
      id: 1,
      title: 'Getting Started',
      description: 'Complete your profile and orientation',
      status: 'completed',
      date: '2026-01-10',
      tasks: [
        { name: 'Complete Profile', completed: true },
        { name: 'Watch Orientation Video', completed: true },
        { name: 'Read Handbook', completed: true },
      ],
    },
    {
      id: 2,
      title: 'Foundation Phase',
      description: 'Learn the basics and fundamental concepts',
      status: 'completed',
      date: '2026-01-25',
      tasks: [
        { name: 'HTML & CSS Basics', completed: true },
        { name: 'JavaScript Fundamentals', completed: true },
        { name: 'Git & Version Control', completed: true },
      ],
    },
    {
      id: 3,
      title: 'Development Phase',
      description: 'Build real-world projects',
      status: 'in-progress',
      date: 'In Progress',
      tasks: [
        { name: 'React Basics', completed: true },
        { name: 'State Management', completed: true },
        { name: 'API Integration', completed: false },
        { name: 'Build Portfolio Project', completed: false },
      ],
    },
    {
      id: 4,
      title: 'Advanced Phase',
      description: 'Master advanced concepts and patterns',
      status: 'locked',
      date: 'Locked',
      tasks: [
        { name: 'Advanced React Patterns', completed: false },
        { name: 'Testing & Deployment', completed: false },
        { name: 'Performance Optimization', completed: false },
      ],
    },
    {
      id: 5,
      title: 'Final Project',
      description: 'Complete capstone project',
      status: 'locked',
      date: 'Locked',
      tasks: [
        { name: 'Project Planning', completed: false },
        { name: 'Development', completed: false },
        { name: 'Presentation', completed: false },
      ],
    },
  ];

  return (
    <div className="max-w-4xl">
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">My Internship Journey</h2>
        <p className="text-gray-600">Track your progress through your learning path</p>
      </div>

      {/* Journey Timeline */}
      <div className="relative">
        {/* Timeline Line */}
        <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-200" />

        {/* Journey Steps */}
        <div className="space-y-8">
          {journeySteps.map((step, index) => (
            <div key={step.id} className="relative">
              {/* Timeline Icon */}
              <div className="absolute left-0 w-16 h-16 flex items-center justify-center">
                <div
                  className={`w-16 h-16 rounded-full flex items-center justify-center border-4 border-white ${
                    step.status === 'completed'
                      ? 'bg-green-500'
                      : step.status === 'in-progress'
                      ? 'bg-blue-500'
                      : 'bg-gray-300'
                  }`}
                >
                  {step.status === 'completed' ? (
                    <Check className="w-8 h-8 text-white" />
                  ) : step.status === 'in-progress' ? (
                    <Circle className="w-8 h-8 text-white" />
                  ) : (
                    <Lock className="w-8 h-8 text-white" />
                  )}
                </div>
              </div>

              {/* Content Card */}
              <div className="ml-24">
                <div
                  className={`bg-white rounded-xl p-6 border-2 transition-all ${
                    step.status === 'completed'
                      ? 'border-green-200'
                      : step.status === 'in-progress'
                      ? 'border-blue-300 shadow-lg'
                      : 'border-gray-200 opacity-60'
                  }`}
                >
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="text-xl font-semibold mb-1">{step.title}</h3>
                      <p className="text-gray-600">{step.description}</p>
                    </div>
                    <span
                      className={`text-xs px-3 py-1 rounded-full ${
                        step.status === 'completed'
                          ? 'bg-green-100 text-green-700'
                          : step.status === 'in-progress'
                          ? 'bg-blue-100 text-blue-700'
                          : 'bg-gray-100 text-gray-700'
                      }`}
                    >
                      {step.date}
                    </span>
                  </div>

                  {/* Task List */}
                  <div className="space-y-2 mt-4">
                    {step.tasks.map((task, taskIndex) => (
                      <div
                        key={taskIndex}
                        className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors"
                      >
                        <div
                          className={`w-5 h-5 rounded-full flex items-center justify-center ${
                            task.completed
                              ? 'bg-green-500'
                              : step.status === 'locked'
                              ? 'bg-gray-300'
                              : 'border-2 border-gray-300'
                          }`}
                        >
                          {task.completed && <Check className="w-3 h-3 text-white" />}
                        </div>
                        <span
                          className={`text-sm ${
                            task.completed ? 'text-gray-900' : 'text-gray-600'
                          }`}
                        >
                          {task.name}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Progress Bar */}
                  {step.status !== 'locked' && (
                    <div className="mt-4">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm text-gray-600">Progress</span>
                        <span className="text-sm font-medium">
                          {Math.round(
                            (step.tasks.filter((t) => t.completed).length /
                              step.tasks.length) *
                              100
                          )}
                          %
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className={`h-2 rounded-full ${
                            step.status === 'completed' ? 'bg-green-500' : 'bg-blue-500'
                          }`}
                          style={{
                            width: `${
                              (step.tasks.filter((t) => t.completed).length /
                                step.tasks.length) *
                              100
                            }%`,
                          }}
                        />
                      </div>
                    </div>
                  )}

                  {/* Action Button */}
                  {step.status === 'in-progress' && (
                    <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors">
                      Continue Learning
                    </button>
                  )}
                  {step.status === 'completed' && (
                    <button className="mt-4 w-full border border-gray-300 text-gray-700 py-2 rounded-lg hover:bg-gray-50 transition-colors">
                      Review Materials
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Summary Card */}
      <div className="mt-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-6 text-white">
        <h3 className="text-xl font-semibold mb-2">Journey Summary</h3>
        <div className="grid grid-cols-3 gap-4 mt-4">
          <div>
            <p className="text-blue-100 text-sm">Completed</p>
            <p className="text-2xl font-semibold">2/5</p>
          </div>
          <div>
            <p className="text-blue-100 text-sm">In Progress</p>
            <p className="text-2xl font-semibold">1/5</p>
          </div>
          <div>
            <p className="text-blue-100 text-sm">Total Tasks</p>
            <p className="text-2xl font-semibold">
              {journeySteps.reduce((acc, step) => acc + step.tasks.filter(t => t.completed).length, 0)}/
              {journeySteps.reduce((acc, step) => acc + step.tasks.length, 0)}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
