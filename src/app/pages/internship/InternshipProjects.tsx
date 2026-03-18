import { Folder, Github, ExternalLink, Users, Calendar, Award } from 'lucide-react';

export default function InternshipProjects() {
  const projects = [
    {
      id: 1,
      title: 'E-commerce Shopping Cart',
      level: 'Level 1',
      type: 'Individual',
      status: 'completed',
      score: 92,
      dueDate: '2026-03-10',
      description: 'Build a fully functional shopping cart with add to cart, quantity management, and checkout flow.',
      tech: ['React', 'CSS', 'Local Storage'],
      githubUrl: 'https://github.com/example/cart',
      liveUrl: 'https://example.com/cart',
    },
    {
      id: 2,
      title: 'Social Media Dashboard',
      level: 'Level 2',
      type: 'Individual',
      status: 'in-progress',
      score: null,
      dueDate: '2026-03-20',
      description: 'Create a dashboard that displays social media analytics with charts and graphs.',
      tech: ['React', 'Recharts', 'API Integration'],
      githubUrl: null,
      liveUrl: null,
    },
    {
      id: 3,
      title: 'Team Collaboration Tool',
      level: 'Level 2',
      type: 'Team',
      status: 'in-progress',
      score: null,
      dueDate: '2026-03-28',
      description: 'Build a real-time collaboration tool for teams with chat and task management.',
      tech: ['React', 'Node.js', 'WebSocket', 'MongoDB'],
      githubUrl: null,
      liveUrl: null,
      teamSize: 4,
    },
    {
      id: 4,
      title: 'AI Content Generator',
      level: 'Level 3',
      type: 'Individual',
      status: 'locked',
      score: null,
      dueDate: '2026-04-05',
      description: 'Develop an AI-powered content generation tool using OpenAI API.',
      tech: ['React', 'Node.js', 'OpenAI API', 'TypeScript'],
      githubUrl: null,
      liveUrl: null,
    },
  ];

  return (
    <div className="space-y-6">
      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white rounded-xl p-6 border border-gray-200">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center">
              <Folder className="w-5 h-5 text-indigo-600" />
            </div>
            <span className="text-sm text-gray-600">Total Projects</span>
          </div>
          <p className="text-2xl font-semibold">15</p>
        </div>
        <div className="bg-white rounded-xl p-6 border border-gray-200">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
              <Award className="w-5 h-5 text-green-600" />
            </div>
            <span className="text-sm text-gray-600">Completed</span>
          </div>
          <p className="text-2xl font-semibold">6</p>
        </div>
        <div className="bg-white rounded-xl p-6 border border-gray-200">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 bg-yellow-100 rounded-lg flex items-center justify-center">
              <Users className="w-5 h-5 text-yellow-600" />
            </div>
            <span className="text-sm text-gray-600">Team Projects</span>
          </div>
          <p className="text-2xl font-semibold">3</p>
        </div>
        <div className="bg-white rounded-xl p-6 border border-gray-200">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
              <Award className="w-5 h-5 text-purple-600" />
            </div>
            <span className="text-sm text-gray-600">Avg. Score</span>
          </div>
          <p className="text-2xl font-semibold">87%</p>
        </div>
      </div>

      {/* Project Cards */}
      <div className="grid gap-6">
        {projects.map((project) => (
          <div 
            key={project.id} 
            className={`bg-white rounded-xl p-6 border-2 ${
              project.status === 'completed' ? 'border-green-200' :
              project.status === 'in-progress' ? 'border-yellow-200' :
              'border-gray-200 opacity-60'
            }`}
          >
            <div className="flex items-start justify-between mb-4">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="text-xl font-semibold">{project.title}</h3>
                  {project.status === 'completed' && project.score && (
                    <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">
                      Score: {project.score}%
                    </span>
                  )}
                </div>
                <p className="text-sm text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-xs font-medium">
                    {project.level}
                  </span>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    project.type === 'Team' ? 'bg-purple-100 text-purple-700' : 'bg-blue-100 text-blue-700'
                  }`}>
                    {project.type}
                    {project.teamSize && ` (${project.teamSize} members)`}
                  </span>
                  <span className="flex items-center gap-1 px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs">
                    <Calendar className="w-3 h-3" />
                    Due: {project.dueDate}
                  </span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, idx) => (
                    <span key={idx} className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <span className={`px-3 py-1 rounded-full text-xs font-medium whitespace-nowrap ml-4 ${
                project.status === 'completed' ? 'bg-green-100 text-green-700' :
                project.status === 'in-progress' ? 'bg-yellow-100 text-yellow-700' :
                'bg-gray-100 text-gray-700'
              }`}>
                {project.status === 'completed' ? 'Completed' :
                 project.status === 'in-progress' ? 'In Progress' :
                 'Locked'}
              </span>
            </div>

            {project.status !== 'locked' && (
              <div className="flex gap-3 pt-4 border-t border-gray-200">
                {project.status === 'completed' && (
                  <>
                    {project.githubUrl && (
                      <a 
                        href={project.githubUrl}
                        className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors text-sm font-medium"
                      >
                        <Github className="w-4 h-4" />
                        GitHub
                      </a>
                    )}
                    {project.liveUrl && (
                      <a 
                        href={project.liveUrl}
                        className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors text-sm font-medium"
                      >
                        <ExternalLink className="w-4 h-4" />
                        Live Demo
                      </a>
                    )}
                    <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors text-sm font-medium">
                      View Feedback
                    </button>
                  </>
                )}
                {project.status === 'in-progress' && (
                  <>
                    <button className="flex-1 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors text-sm font-medium">
                      Continue Project
                    </button>
                    <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors text-sm font-medium">
                      Submit for Review
                    </button>
                  </>
                )}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Project Guidelines */}
      <div className="bg-white rounded-xl p-6 border border-gray-200">
        <h3 className="text-lg font-semibold mb-4">Project Guidelines</h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-medium mb-3">Submission Requirements</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li className="flex items-start gap-2">
                <span className="text-indigo-600 mt-1">•</span>
                <span>Complete all project requirements as specified</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-indigo-600 mt-1">•</span>
                <span>Upload source code to GitHub repository</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-indigo-600 mt-1">•</span>
                <span>Deploy project to a live URL (Vercel, Netlify, etc.)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-indigo-600 mt-1">•</span>
                <span>Write comprehensive README documentation</span>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium mb-3">Evaluation Criteria</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li className="flex items-start gap-2">
                <span className="text-indigo-600 mt-1">•</span>
                <span>Code quality and organization (30%)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-indigo-600 mt-1">•</span>
                <span>Functionality and features (40%)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-indigo-600 mt-1">•</span>
                <span>UI/UX design and responsiveness (20%)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-indigo-600 mt-1">•</span>
                <span>Documentation and deployment (10%)</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
