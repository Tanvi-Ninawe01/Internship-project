import { Briefcase, MapPin, DollarSign, Clock, Building, Bookmark, ExternalLink } from 'lucide-react';

export default function InternCareer() {
  const opportunities = [
    {
      id: 1,
      title: 'Frontend Developer Intern',
      company: 'TechCorp Inc.',
      location: 'Remote',
      type: 'Full-time',
      salary: '$3,000 - $4,000/month',
      posted: '2 days ago',
      description: 'Looking for a passionate frontend developer to join our team.',
      requirements: ['React', 'TypeScript', 'CSS'],
      saved: false,
    },
    {
      id: 2,
      title: 'Full Stack Developer',
      company: 'StartupXYZ',
      location: 'San Francisco, CA',
      type: 'Part-time',
      salary: '$2,500 - $3,500/month',
      posted: '5 days ago',
      description: 'Join our innovative startup as a full stack developer.',
      requirements: ['Node.js', 'React', 'MongoDB'],
      saved: true,
    },
    {
      id: 3,
      title: 'UI/UX Designer',
      company: 'Design Studio',
      location: 'New York, NY',
      type: 'Contract',
      salary: '$3,500 - $5,000/month',
      posted: '1 week ago',
      description: 'Create beautiful and intuitive user experiences.',
      requirements: ['Figma', 'Adobe XD', 'User Research'],
      saved: false,
    },
    {
      id: 4,
      title: 'Backend Developer',
      company: 'CloudTech Solutions',
      location: 'Remote',
      type: 'Full-time',
      salary: '$3,200 - $4,200/month',
      posted: '3 days ago',
      description: 'Build scalable backend systems for enterprise clients.',
      requirements: ['Python', 'Django', 'AWS'],
      saved: false,
    },
    {
      id: 5,
      title: 'Mobile App Developer',
      company: 'AppWorks',
      location: 'Austin, TX',
      type: 'Full-time',
      salary: '$3,000 - $4,500/month',
      posted: '4 days ago',
      description: 'Develop cutting-edge mobile applications.',
      requirements: ['React Native', 'JavaScript', 'Mobile UI'],
      saved: true,
    },
  ];

  const savedCount = opportunities.filter(opp => opp.saved).length;

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-semibold mb-1">Career Opportunities</h2>
          <p className="text-gray-600">Discover internships and job openings</p>
        </div>
        <div className="flex items-center gap-2">
          <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
            Filters
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
            <Bookmark className="w-4 h-4" />
            Saved ({savedCount})
          </button>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid md:grid-cols-4 gap-6">
        <div className="bg-white rounded-xl p-6 border border-gray-200">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
              <Briefcase className="w-6 h-6 text-blue-600" />
            </div>
            <div>
              <h3 className="text-2xl font-semibold">{opportunities.length}</h3>
              <p className="text-sm text-gray-600">Open Positions</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 border border-gray-200">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
              <Building className="w-6 h-6 text-green-600" />
            </div>
            <div>
              <h3 className="text-2xl font-semibold">42</h3>
              <p className="text-sm text-gray-600">Companies</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 border border-gray-200">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
              <Bookmark className="w-6 h-6 text-purple-600" />
            </div>
            <div>
              <h3 className="text-2xl font-semibold">{savedCount}</h3>
              <p className="text-sm text-gray-600">Saved Jobs</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 border border-gray-200">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center">
              <Clock className="w-6 h-6 text-yellow-600" />
            </div>
            <div>
              <h3 className="text-2xl font-semibold">8</h3>
              <p className="text-sm text-gray-600">Applications</p>
            </div>
          </div>
        </div>
      </div>

      {/* Job Listings */}
      <div className="space-y-4">
        {opportunities.map((job) => (
          <div key={job.id} className="bg-white rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-shadow">
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg flex items-center justify-center text-white font-semibold text-xl">
                  {job.company.charAt(0)}
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1">{job.title}</h3>
                  <div className="flex items-center gap-4 text-sm text-gray-600">
                    <div className="flex items-center gap-1">
                      <Building className="w-4 h-4" />
                      {job.company}
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      {job.location}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {job.posted}
                    </div>
                  </div>
                </div>
              </div>
              <button className={`p-2 rounded-lg transition-colors ${
                job.saved ? 'bg-blue-100 text-blue-600' : 'hover:bg-gray-100 text-gray-600'
              }`}>
                <Bookmark className={`w-5 h-5 ${job.saved ? 'fill-current' : ''}`} />
              </button>
            </div>

            <p className="text-gray-700 mb-4">{job.description}</p>

            <div className="flex flex-wrap gap-2 mb-4">
              {job.requirements.map((req, index) => (
                <span key={index} className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full">
                  {req}
                </span>
              ))}
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-gray-200">
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-1 text-gray-700">
                  <DollarSign className="w-4 h-4" />
                  <span className="font-medium">{job.salary}</span>
                </div>
                <span className="px-3 py-1 bg-blue-100 text-blue-700 text-sm rounded-full">
                  {job.type}
                </span>
              </div>
              <div className="flex gap-2">
                <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                  Learn More
                </button>
                <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                  Apply Now
                  <ExternalLink className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Career Resources */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-6 text-white">
        <h3 className="text-xl font-semibold mb-4">Career Resources</h3>
        <div className="grid md:grid-cols-3 gap-4">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
            <h4 className="font-semibold mb-2">Resume Builder</h4>
            <p className="text-sm text-blue-100 mb-3">Create a professional resume with our templates</p>
            <button className="text-sm font-medium hover:underline">Get Started →</button>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
            <h4 className="font-semibold mb-2">Interview Prep</h4>
            <p className="text-sm text-blue-100 mb-3">Practice common interview questions</p>
            <button className="text-sm font-medium hover:underline">Start Practice →</button>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
            <h4 className="font-semibold mb-2">Career Guidance</h4>
            <p className="text-sm text-blue-100 mb-3">Get personalized career advice from mentors</p>
            <button className="text-sm font-medium hover:underline">Book Session →</button>
          </div>
        </div>
      </div>
    </div>
  );
}
