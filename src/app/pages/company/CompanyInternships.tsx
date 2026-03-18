import { Plus, Edit, Trash2, Eye, Calendar, MapPin, DollarSign, Users } from 'lucide-react';

export default function CompanyInternships() {
  const internshipPosts = [
    {
      id: 1,
      title: 'Full Stack Developer Intern',
      location: 'Remote',
      duration: '3 months',
      stipend: '$800/month',
      applicants: 45,
      views: 234,
      posted: '2026-02-28',
      deadline: '2026-03-25',
      status: 'active',
      tier: 'Premium',
      requirements: ['React', 'Node.js', 'MongoDB'],
    },
    {
      id: 2,
      title: 'UI/UX Designer Intern',
      location: 'San Francisco, CA',
      duration: '6 months',
      stipend: '$1000/month',
      applicants: 32,
      views: 189,
      posted: '2026-03-01',
      deadline: '2026-03-28',
      status: 'active',
      tier: 'Corporate',
      requirements: ['Figma', 'Adobe XD', 'Design Systems'],
    },
    {
      id: 3,
      title: 'Data Analyst Intern',
      location: 'Hybrid',
      duration: '4 months',
      stipend: '$900/month',
      applicants: 28,
      views: 156,
      posted: '2026-03-05',
      deadline: '2026-04-05',
      status: 'active',
      tier: 'Basic',
      requirements: ['Python', 'SQL', 'Excel'],
    },
    {
      id: 4,
      title: 'Mobile Developer Intern',
      location: 'Remote',
      duration: '3 months',
      stipend: '$850/month',
      applicants: 51,
      views: 298,
      posted: '2026-02-20',
      deadline: '2026-03-20',
      status: 'closed',
      tier: 'Premium',
      requirements: ['React Native', 'iOS', 'Android'],
    },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-semibold mb-1">Post Internships</h2>
          <p className="text-gray-600">Create and manage your internship postings</p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors font-medium">
          <Plus className="w-5 h-5" />
          Post New Internship
        </button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white rounded-xl p-6 border border-gray-200">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center">
              <Users className="w-5 h-5 text-emerald-600" />
            </div>
            <span className="text-sm text-gray-600">Active Posts</span>
          </div>
          <p className="text-2xl font-semibold">8</p>
        </div>
        <div className="bg-white rounded-xl p-6 border border-gray-200">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
              <Eye className="w-5 h-5 text-blue-600" />
            </div>
            <span className="text-sm text-gray-600">Total Views</span>
          </div>
          <p className="text-2xl font-semibold">2,847</p>
        </div>
        <div className="bg-white rounded-xl p-6 border border-gray-200">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
              <Users className="w-5 h-5 text-purple-600" />
            </div>
            <span className="text-sm text-gray-600">Applications</span>
          </div>
          <p className="text-2xl font-semibold">467</p>
        </div>
        <div className="bg-white rounded-xl p-6 border border-gray-200">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 bg-yellow-100 rounded-lg flex items-center justify-center">
              <Calendar className="w-5 h-5 text-yellow-600" />
            </div>
            <span className="text-sm text-gray-600">Avg. Response</span>
          </div>
          <p className="text-2xl font-semibold">2.3 days</p>
        </div>
      </div>

      {/* Create New Posting Form */}
      <div className="bg-white rounded-xl p-6 border border-gray-200">
        <h3 className="text-lg font-semibold mb-4">Create New Internship Posting</h3>
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Job Title</label>
            <input
              type="text"
              placeholder="e.g., Frontend Developer Intern"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Internship Tier</label>
            <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500">
              <option>Basic Tier</option>
              <option>Premium Tier</option>
              <option>Corporate Tier</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Location</label>
            <input
              type="text"
              placeholder="e.g., Remote or San Francisco, CA"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Duration</label>
            <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500">
              <option>3 months</option>
              <option>6 months</option>
              <option>12 months</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Stipend</label>
            <input
              type="text"
              placeholder="e.g., $800/month"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Application Deadline</label>
            <input
              type="date"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
          </div>
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-2">Job Description</label>
            <textarea
              rows={4}
              placeholder="Describe the role, responsibilities, and what the intern will learn..."
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
          </div>
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-2">Requirements (comma separated)</label>
            <input
              type="text"
              placeholder="e.g., React, TypeScript, Git"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
          </div>
        </div>
        <div className="flex gap-3 mt-6">
          <button className="px-6 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors font-medium">
            Publish Posting
          </button>
          <button className="px-6 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors font-medium">
            Save as Draft
          </button>
        </div>
      </div>

      {/* Active Internship Posts */}
      <div className="bg-white rounded-xl p-6 border border-gray-200">
        <h3 className="text-lg font-semibold mb-4">Your Internship Postings</h3>
        <div className="space-y-4">
          {internshipPosts.map((post) => (
            <div 
              key={post.id} 
              className={`p-5 border-2 rounded-lg ${
                post.status === 'active' ? 'border-green-200 bg-green-50/30' : 'border-gray-200 bg-gray-50'
              }`}
            >
              <div className="flex items-start justify-between mb-3">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h4 className="text-lg font-semibold">{post.title}</h4>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      post.tier === 'Corporate' ? 'bg-green-100 text-green-700' :
                      post.tier === 'Premium' ? 'bg-purple-100 text-purple-700' :
                      'bg-blue-100 text-blue-700'
                    }`}>
                      {post.tier}
                    </span>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      post.status === 'active' ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-700'
                    }`}>
                      {post.status === 'active' ? 'Active' : 'Closed'}
                    </span>
                  </div>
                  <div className="grid md:grid-cols-4 gap-3 text-sm text-gray-600 mb-3">
                    <div className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      <span>{post.location}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>{post.duration}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <DollarSign className="w-4 h-4" />
                      <span>{post.stipend}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>Deadline: {post.deadline}</span>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-3">
                    {post.requirements.map((req, idx) => (
                      <span key={idx} className="px-2 py-1 bg-white border border-gray-300 rounded text-xs">
                        {req}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center gap-4 text-sm">
                    <span className="flex items-center gap-1 text-emerald-600 font-medium">
                      <Users className="w-4 h-4" />
                      {post.applicants} applicants
                    </span>
                    <span className="flex items-center gap-1 text-gray-600">
                      <Eye className="w-4 h-4" />
                      {post.views} views
                    </span>
                    <span className="text-gray-600">Posted: {post.posted}</span>
                  </div>
                </div>
                <div className="flex gap-2 ml-4">
                  <button className="p-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                    <Edit className="w-4 h-4 text-gray-600" />
                  </button>
                  <button className="p-2 border border-gray-300 rounded-lg hover:bg-red-50 transition-colors">
                    <Trash2 className="w-4 h-4 text-red-600" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
