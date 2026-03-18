import { User, Mail, Phone, FileText, Download, Filter, Search, Star, CheckCircle, XCircle } from 'lucide-react';

export default function CompanyApplicants() {
  const applicants = [
    {
      id: 1,
      name: 'Sarah Chen',
      email: 'sarah.chen@email.com',
      phone: '+1 (555) 123-4567',
      position: 'Full Stack Developer',
      tier: 'Premium',
      score: 92,
      appliedDate: '2026-03-12',
      status: 'under-review',
      skills: ['React', 'Node.js', 'TypeScript', 'MongoDB'],
      experience: '2 projects completed',
      resumeUrl: '#',
    },
    {
      id: 2,
      name: 'Mike Rodriguez',
      email: 'mike.rodriguez@email.com',
      phone: '+1 (555) 234-5678',
      position: 'UI/UX Designer',
      tier: 'Corporate',
      score: 88,
      appliedDate: '2026-03-12',
      status: 'shortlisted',
      skills: ['Figma', 'Adobe XD', 'Prototyping', 'User Research'],
      experience: '3 projects completed',
      resumeUrl: '#',
    },
    {
      id: 3,
      name: 'Emily Zhang',
      email: 'emily.zhang@email.com',
      phone: '+1 (555) 345-6789',
      position: 'Data Analyst',
      tier: 'Premium',
      score: 85,
      appliedDate: '2026-03-13',
      status: 'under-review',
      skills: ['Python', 'SQL', 'Excel', 'Data Visualization'],
      experience: '1 project completed',
      resumeUrl: '#',
    },
    {
      id: 4,
      name: 'Alex Kumar',
      email: 'alex.kumar@email.com',
      phone: '+1 (555) 456-7890',
      position: 'Mobile Developer',
      tier: 'Basic',
      score: 78,
      appliedDate: '2026-03-13',
      status: 'new',
      skills: ['React Native', 'iOS', 'Android', 'Firebase'],
      experience: '2 projects completed',
      resumeUrl: '#',
    },
    {
      id: 5,
      name: 'Jessica Lee',
      email: 'jessica.lee@email.com',
      phone: '+1 (555) 567-8901',
      position: 'Full Stack Developer',
      tier: 'Corporate',
      score: 95,
      appliedDate: '2026-03-11',
      status: 'interview-scheduled',
      skills: ['React', 'Python', 'PostgreSQL', 'AWS'],
      experience: '4 projects completed',
      resumeUrl: '#',
    },
    {
      id: 6,
      name: 'David Park',
      email: 'david.park@email.com',
      phone: '+1 (555) 678-9012',
      position: 'Data Analyst',
      tier: 'Premium',
      score: 82,
      appliedDate: '2026-03-10',
      status: 'rejected',
      skills: ['Python', 'Tableau', 'Statistics'],
      experience: '1 project completed',
      resumeUrl: '#',
    },
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'shortlisted':
        return 'bg-green-100 text-green-700';
      case 'interview-scheduled':
        return 'bg-blue-100 text-blue-700';
      case 'under-review':
        return 'bg-yellow-100 text-yellow-700';
      case 'rejected':
        return 'bg-red-100 text-red-700';
      default:
        return 'bg-gray-100 text-gray-700';
    }
  };

  const getStatusLabel = (status: string) => {
    switch (status) {
      case 'shortlisted':
        return 'Shortlisted';
      case 'interview-scheduled':
        return 'Interview Scheduled';
      case 'under-review':
        return 'Under Review';
      case 'rejected':
        return 'Rejected';
      default:
        return 'New';
    }
  };

  return (
    <div className="space-y-6">
      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white rounded-xl p-6 border border-gray-200">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
              <User className="w-5 h-5 text-blue-600" />
            </div>
            <span className="text-sm text-gray-600">Total Applicants</span>
          </div>
          <p className="text-2xl font-semibold">467</p>
        </div>
        <div className="bg-white rounded-xl p-6 border border-gray-200">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 bg-yellow-100 rounded-lg flex items-center justify-center">
              <FileText className="w-5 h-5 text-yellow-600" />
            </div>
            <span className="text-sm text-gray-600">Under Review</span>
          </div>
          <p className="text-2xl font-semibold">124</p>
        </div>
        <div className="bg-white rounded-xl p-6 border border-gray-200">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
              <CheckCircle className="w-5 h-5 text-green-600" />
            </div>
            <span className="text-sm text-gray-600">Shortlisted</span>
          </div>
          <p className="text-2xl font-semibold">68</p>
        </div>
        <div className="bg-white rounded-xl p-6 border border-gray-200">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
              <Star className="w-5 h-5 text-purple-600" />
            </div>
            <span className="text-sm text-gray-600">Avg. Score</span>
          </div>
          <p className="text-2xl font-semibold">84%</p>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-white rounded-xl p-4 border border-gray-200">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search applicants..."
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
          </div>
          <select className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500">
            <option>All Positions</option>
            <option>Full Stack Developer</option>
            <option>UI/UX Designer</option>
            <option>Data Analyst</option>
            <option>Mobile Developer</option>
          </select>
          <select className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500">
            <option>All Status</option>
            <option>New</option>
            <option>Under Review</option>
            <option>Shortlisted</option>
            <option>Interview Scheduled</option>
            <option>Rejected</option>
          </select>
          <select className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500">
            <option>All Tiers</option>
            <option>Basic</option>
            <option>Premium</option>
            <option>Corporate</option>
          </select>
          <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
            <Filter className="w-5 h-5" />
            <span>More Filters</span>
          </button>
        </div>
      </div>

      {/* Applicants List */}
      <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="text-left py-4 px-6 font-medium text-gray-700">Applicant</th>
                <th className="text-left py-4 px-6 font-medium text-gray-700">Position</th>
                <th className="text-left py-4 px-6 font-medium text-gray-700">Tier</th>
                <th className="text-left py-4 px-6 font-medium text-gray-700">Score</th>
                <th className="text-left py-4 px-6 font-medium text-gray-700">Applied Date</th>
                <th className="text-left py-4 px-6 font-medium text-gray-700">Status</th>
                <th className="text-left py-4 px-6 font-medium text-gray-700">Actions</th>
              </tr>
            </thead>
            <tbody>
              {applicants.map((applicant) => (
                <tr key={applicant.id} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                  <td className="py-4 px-6">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-full flex items-center justify-center text-white font-semibold text-sm">
                        {applicant.name.split(' ').map(n => n[0]).join('')}
                      </div>
                      <div>
                        <p className="font-medium">{applicant.name}</p>
                        <p className="text-xs text-gray-600">{applicant.email}</p>
                      </div>
                    </div>
                  </td>
                  <td className="py-4 px-6">
                    <p className="text-sm">{applicant.position}</p>
                    <p className="text-xs text-gray-600">{applicant.experience}</p>
                  </td>
                  <td className="py-4 px-6">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      applicant.tier === 'Corporate' ? 'bg-green-100 text-green-700' :
                      applicant.tier === 'Premium' ? 'bg-purple-100 text-purple-700' :
                      'bg-blue-100 text-blue-700'
                    }`}>
                      {applicant.tier}
                    </span>
                  </td>
                  <td className="py-4 px-6">
                    <div className="flex items-center gap-2">
                      <div className="w-12 h-2 bg-gray-200 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-emerald-600 rounded-full" 
                          style={{ width: `${applicant.score}%` }}
                        />
                      </div>
                      <span className="text-sm font-medium text-emerald-600">{applicant.score}%</span>
                    </div>
                  </td>
                  <td className="py-4 px-6 text-sm text-gray-600">{applicant.appliedDate}</td>
                  <td className="py-4 px-6">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusBadge(applicant.status)}`}>
                      {getStatusLabel(applicant.status)}
                    </span>
                  </td>
                  <td className="py-4 px-6">
                    <div className="flex items-center gap-2">
                      <button className="p-2 hover:bg-emerald-50 rounded-lg transition-colors">
                        <FileText className="w-4 h-4 text-emerald-600" />
                      </button>
                      <button className="p-2 hover:bg-green-50 rounded-lg transition-colors">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                      </button>
                      <button className="p-2 hover:bg-red-50 rounded-lg transition-colors">
                        <XCircle className="w-4 h-4 text-red-600" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Bulk Actions */}
      <div className="bg-white rounded-xl p-6 border border-gray-200">
        <h3 className="text-lg font-semibold mb-4">Bulk Actions</h3>
        <div className="flex gap-3">
          <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors text-sm font-medium">
            Shortlist Selected
          </button>
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium">
            Schedule Interviews
          </button>
          <button className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors text-sm font-medium">
            Reject Selected
          </button>
          <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors text-sm font-medium">
            <Download className="w-4 h-4 inline mr-2" />
            Export CSV
          </button>
        </div>
      </div>
    </div>
  );
}
