import { Award, Briefcase, Code, GraduationCap, Mail, MapPin, Phone, Globe, Github, Linkedin, Edit } from 'lucide-react';

export default function InternProfile() {
  const skills = [
    { name: 'React', level: 90 },
    { name: 'JavaScript', level: 85 },
    { name: 'TypeScript', level: 80 },
    { name: 'Node.js', level: 75 },
    { name: 'CSS/Tailwind', level: 88 },
    { name: 'Git', level: 82 },
  ];

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'Full-stack e-commerce application with cart, payments, and admin panel',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      image: '🛒',
      link: '#',
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'Collaborative task management tool with real-time updates',
      technologies: ['React', 'Firebase', 'Material-UI'],
      image: '✓',
      link: '#',
    },
    {
      id: 3,
      title: 'Weather Dashboard',
      description: 'Real-time weather dashboard with interactive maps',
      technologies: ['React', 'API Integration', 'Charts'],
      image: '🌤️',
      link: '#',
    },
  ];

  const certificates = [
    { name: 'React Fundamentals', issuer: 'SyncSaS Platform', date: '2026-02-15' },
    { name: 'Full Stack Development', issuer: 'SyncSaS Platform', date: '2026-03-01' },
    { name: 'UI/UX Design', issuer: 'SyncSaS Platform', date: '2026-02-20' },
  ];

  return (
    <div className="max-w-5xl">
      {/* Profile Header */}
      <div className="bg-white rounded-xl border border-gray-200 overflow-hidden mb-6">
        <div className="h-32 bg-gradient-to-r from-blue-600 to-purple-600"></div>
        <div className="px-8 pb-8">
          <div className="flex items-end justify-between -mt-16 mb-6">
            <div className="flex items-end gap-6">
              <div className="w-32 h-32 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full border-4 border-white flex items-center justify-center text-white text-4xl font-semibold">
                SJ
              </div>
              <div className="pb-2">
                <h1 className="text-3xl font-semibold mb-1">Sarah Johnson</h1>
                <p className="text-gray-600">Full Stack Developer Intern</p>
              </div>
            </div>
            <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 mb-2">
              <Edit className="w-4 h-4" />
              Edit Profile
            </button>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            <div className="flex items-center gap-2 text-gray-600">
              <Mail className="w-4 h-4" />
              <span className="text-sm">sarah.johnson@email.com</span>
            </div>
            <div className="flex items-center gap-2 text-gray-600">
              <Phone className="w-4 h-4" />
              <span className="text-sm">+1 (555) 123-4567</span>
            </div>
            <div className="flex items-center gap-2 text-gray-600">
              <MapPin className="w-4 h-4" />
              <span className="text-sm">San Francisco, CA</span>
            </div>
            <div className="flex items-center gap-2 text-gray-600">
              <Globe className="w-4 h-4" />
              <span className="text-sm">Available for opportunities</span>
            </div>
          </div>

          <div className="flex gap-3">
            <a href="#" className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
              <Github className="w-4 h-4" />
              GitHub
            </a>
            <a href="#" className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
              <Linkedin className="w-4 h-4" />
              LinkedIn
            </a>
            <a href="#" className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
              <Globe className="w-4 h-4" />
              Portfolio
            </a>
          </div>
        </div>
      </div>

      {/* About */}
      <div className="bg-white rounded-xl p-6 border border-gray-200 mb-6">
        <h2 className="text-xl font-semibold mb-4">About Me</h2>
        <p className="text-gray-700 leading-relaxed">
          Passionate full-stack developer with a strong foundation in modern web technologies. 
          I love building user-friendly applications and solving complex problems. Currently seeking 
          opportunities to grow my skills in a dynamic team environment. Experienced in React, Node.js, 
          and cloud technologies. Quick learner with excellent communication and collaboration skills.
        </p>
      </div>

      {/* Skills */}
      <div className="bg-white rounded-xl p-6 border border-gray-200 mb-6">
        <div className="flex items-center gap-2 mb-4">
          <Code className="w-5 h-5 text-blue-600" />
          <h2 className="text-xl font-semibold">Skills</h2>
        </div>
        <div className="space-y-4">
          {skills.map((skill) => (
            <div key={skill.name}>
              <div className="flex items-center justify-between mb-2">
                <span className="font-medium">{skill.name}</span>
                <span className="text-sm text-gray-600">{skill.level}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-blue-600 h-2 rounded-full transition-all"
                  style={{ width: `${skill.level}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Projects Portfolio */}
      <div className="bg-white rounded-xl p-6 border border-gray-200 mb-6">
        <div className="flex items-center gap-2 mb-4">
          <Briefcase className="w-5 h-5 text-blue-600" />
          <h2 className="text-xl font-semibold">Projects Portfolio</h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {projects.map((project) => (
            <div key={project.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-3">{project.image}</div>
              <h3 className="font-semibold mb-2">{project.title}</h3>
              <p className="text-sm text-gray-600 mb-3">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-3">
                {project.technologies.map((tech, index) => (
                  <span key={index} className="text-xs px-2 py-1 bg-blue-100 text-blue-700 rounded-full">
                    {tech}
                  </span>
                ))}
              </div>
              <a href={project.link} className="text-sm text-blue-600 hover:underline">
                View Project →
              </a>
            </div>
          ))}
        </div>
      </div>

      {/* Education & Certificates */}
      <div className="grid md:grid-cols-2 gap-6">
        {/* Education */}
        <div className="bg-white rounded-xl p-6 border border-gray-200">
          <div className="flex items-center gap-2 mb-4">
            <GraduationCap className="w-5 h-5 text-blue-600" />
            <h2 className="text-xl font-semibold">Education</h2>
          </div>
          <div className="space-y-4">
            <div className="border-l-2 border-blue-600 pl-4">
              <h3 className="font-semibold">Bachelor of Computer Science</h3>
              <p className="text-sm text-gray-600">Stanford University</p>
              <p className="text-sm text-gray-500">2023 - 2027 (Expected)</p>
            </div>
          </div>
        </div>

        {/* Certificates */}
        <div className="bg-white rounded-xl p-6 border border-gray-200">
          <div className="flex items-center gap-2 mb-4">
            <Award className="w-5 h-5 text-blue-600" />
            <h2 className="text-xl font-semibold">Certificates</h2>
          </div>
          <div className="space-y-3">
            {certificates.map((cert, index) => (
              <div key={index} className="flex items-start gap-3 p-3 border border-gray-200 rounded-lg">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Award className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-medium text-sm">{cert.name}</h3>
                  <p className="text-xs text-gray-600">{cert.issuer}</p>
                  <p className="text-xs text-gray-500">{cert.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
