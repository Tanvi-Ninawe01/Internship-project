import { Briefcase, Users, TrendingUp, CheckCircle, Eye, UserPlus, Calendar, Target } from 'lucide-react';
import { LineChart, Line, BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

export default function CompanyDashboard() {
  const applicantTrends = [
    { month: 'Jan', applicants: 45, hired: 8 },
    { month: 'Feb', applicants: 62, hired: 12 },
    { month: 'Mar', applicants: 78, hired: 15 },
    { month: 'Apr', applicants: 85, hired: 18 },
    { month: 'May', applicants: 92, hired: 20 },
    { month: 'Jun', applicants: 105, hired: 24 },
  ];

  const tierDistribution = [
    { name: 'Basic', value: 125, color: '#3b82f6' },
    { name: 'Premium', value: 198, color: '#8b5cf6' },
    { name: 'Corporate', value: 144, color: '#10b981' },
  ];

  const activeInternships = [
    { id: 1, title: 'Full Stack Developer', applicants: 45, hired: 3, views: 234, status: 'active', deadline: '2026-03-25' },
    { id: 2, title: 'UI/UX Designer', applicants: 32, hired: 2, views: 189, status: 'active', deadline: '2026-03-28' },
    { id: 3, title: 'Data Analyst', applicants: 28, hired: 1, views: 156, status: 'active', deadline: '2026-04-05' },
    { id: 4, title: 'Mobile Developer', applicants: 51, hired: 4, views: 298, status: 'active', deadline: '2026-04-10' },
  ];

  const recentApplicants = [
    { id: 1, name: 'Sarah Chen', position: 'Full Stack Developer', tier: 'Premium', score: 92, status: 'under-review', appliedDate: '2026-03-12' },
    { id: 2, name: 'Mike Rodriguez', position: 'UI/UX Designer', tier: 'Corporate', score: 88, status: 'shortlisted', appliedDate: '2026-03-12' },
    { id: 3, name: 'Emily Zhang', position: 'Data Analyst', tier: 'Premium', score: 85, status: 'under-review', appliedDate: '2026-03-13' },
    { id: 4, name: 'Alex Kumar', position: 'Mobile Developer', tier: 'Basic', score: 78, status: 'new', appliedDate: '2026-03-13' },
  ];

  return (
    <div className="space-y-6">
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white rounded-xl p-6 border border-gray-200">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center">
              <Briefcase className="w-6 h-6 text-emerald-600" />
            </div>
            <span className="text-sm text-green-600 font-medium">+3</span>
          </div>
          <h3 className="text-2xl font-semibold mb-1">12</h3>
          <p className="text-sm text-gray-600">Active Internships</p>
        </div>

        <div className="bg-white rounded-xl p-6 border border-gray-200">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
              <Users className="w-6 h-6 text-blue-600" />
            </div>
            <span className="text-sm text-green-600 font-medium">+24</span>
          </div>
          <h3 className="text-2xl font-semibold mb-1">467</h3>
          <p className="text-sm text-gray-600">Total Applicants</p>
        </div>

        <div className="bg-white rounded-xl p-6 border border-gray-200">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
              <CheckCircle className="w-6 h-6 text-purple-600" />
            </div>
          </div>
          <h3 className="text-2xl font-semibold mb-1">87</h3>
          <p className="text-sm text-gray-600">Interns Hired</p>
        </div>

        <div className="bg-white rounded-xl p-6 border border-gray-200">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center">
              <TrendingUp className="w-6 h-6 text-yellow-600" />
            </div>
            <span className="text-sm text-green-600 font-medium">+12%</span>
          </div>
          <h3 className="text-2xl font-semibold mb-1">18.6%</h3>
          <p className="text-sm text-gray-600">Hire Rate</p>
        </div>
      </div>

      {/* Company Tier Badge */}
      <div className="bg-gradient-to-br from-emerald-600 to-teal-600 rounded-xl p-6 text-white">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-lg font-semibold mb-2">Company Status</h3>
            <div className="flex items-center gap-3 mb-4">
              <span className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-lg border border-white/30 font-medium">
                ✓ Verified Partner
              </span>
              <span className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-lg border border-white/30 font-medium">
                Enterprise Tier
              </span>
            </div>
            <p className="text-white/80">Access to premium features and unlimited internship postings</p>
          </div>
          <div className="text-6xl">🏢</div>
        </div>
      </div>

      {/* Charts Row */}
      <div className="grid lg:grid-cols-2 gap-6">
        {/* Applicant Trends */}
        <div className="bg-white rounded-xl p-6 border border-gray-200">
          <h3 className="text-lg font-semibold mb-4">Applicant & Hiring Trends</h3>
          <ResponsiveContainer width="100%" height={280}>
            <LineChart data={applicantTrends}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis dataKey="month" stroke="#9ca3af" />
              <YAxis stroke="#9ca3af" />
              <Tooltip />
              <Line type="monotone" dataKey="applicants" stroke="#3b82f6" strokeWidth={2} name="Applicants" />
              <Line type="monotone" dataKey="hired" stroke="#10b981" strokeWidth={2} name="Hired" />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Applicant Tier Distribution */}
        <div className="bg-white rounded-xl p-6 border border-gray-200">
          <h3 className="text-lg font-semibold mb-4">Applicant Tier Distribution</h3>
          <div className="flex items-center justify-center">
            <ResponsiveContainer width="100%" height={280}>
              <PieChart>
                <Pie
                  data={tierDistribution}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                  outerRadius={90}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {tierDistribution.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Active Internships & Recent Applicants */}
      <div className="grid lg:grid-cols-3 gap-6">
        {/* Active Internships */}
        <div className="lg:col-span-2 bg-white rounded-xl p-6 border border-gray-200">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold">Active Internship Postings</h3>
            <button className="text-sm text-emerald-600 hover:text-emerald-700 font-medium">View All</button>
          </div>
          <div className="space-y-3">
            {activeInternships.map((internship) => (
              <div key={internship.id} className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h4 className="font-semibold mb-2">{internship.title}</h4>
                    <div className="flex items-center gap-4 text-sm text-gray-600">
                      <span className="flex items-center gap-1">
                        <Users className="w-4 h-4" />
                        {internship.applicants} applicants
                      </span>
                      <span className="flex items-center gap-1">
                        <Eye className="w-4 h-4" />
                        {internship.views} views
                      </span>
                      <span className="flex items-center gap-1">
                        <CheckCircle className="w-4 h-4" />
                        {internship.hired} hired
                      </span>
                    </div>
                  </div>
                  <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-medium whitespace-nowrap">
                    Active
                  </span>
                </div>
                <div className="flex items-center justify-between pt-3 border-t border-gray-200">
                  <span className="text-sm text-gray-600 flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    Deadline: {internship.deadline}
                  </span>
                  <button className="text-sm text-emerald-600 hover:text-emerald-700 font-medium">
                    View Details →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Applicants */}
        <div className="bg-white rounded-xl p-6 border border-gray-200">
          <h3 className="text-lg font-semibold mb-4">Recent Applicants</h3>
          <div className="space-y-3">
            {recentApplicants.map((applicant) => (
              <div key={applicant.id} className="p-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                <div className="flex items-start gap-2 mb-2">
                  <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-full flex items-center justify-center text-white font-semibold text-sm">
                    {applicant.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div className="flex-1">
                    <h4 className="font-medium text-sm">{applicant.name}</h4>
                    <p className="text-xs text-gray-600">{applicant.position}</p>
                  </div>
                </div>
                <div className="flex items-center justify-between text-xs mb-2">
                  <span className={`px-2 py-1 rounded-full ${
                    applicant.tier === 'Corporate' ? 'bg-green-100 text-green-700' :
                    applicant.tier === 'Premium' ? 'bg-purple-100 text-purple-700' :
                    'bg-blue-100 text-blue-700'
                  }`}>
                    {applicant.tier}
                  </span>
                  <span className="font-medium text-emerald-600">{applicant.score}%</span>
                </div>
                <span className={`inline-block px-2 py-1 rounded-full text-xs ${
                  applicant.status === 'shortlisted' ? 'bg-green-100 text-green-700' :
                  applicant.status === 'under-review' ? 'bg-yellow-100 text-yellow-700' :
                  'bg-blue-100 text-blue-700'
                }`}>
                  {applicant.status === 'shortlisted' ? 'Shortlisted' :
                   applicant.status === 'under-review' ? 'Under Review' :
                   'New'}
                </span>
              </div>
            ))}
          </div>
          <button className="w-full mt-4 px-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors text-sm font-medium">
            View All Applicants
          </button>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="bg-white rounded-xl p-6 border border-gray-200">
        <h3 className="text-lg font-semibold mb-4">Quick Actions</h3>
        <div className="grid md:grid-cols-4 gap-4">
          <button className="p-4 border-2 border-dashed border-gray-300 rounded-lg hover:border-emerald-400 hover:bg-emerald-50 transition-colors text-center">
            <Briefcase className="w-6 h-6 text-emerald-600 mx-auto mb-2" />
            <p className="text-sm font-medium">Post Internship</p>
          </button>
          <button className="p-4 border-2 border-dashed border-gray-300 rounded-lg hover:border-blue-400 hover:bg-blue-50 transition-colors text-center">
            <Users className="w-6 h-6 text-blue-600 mx-auto mb-2" />
            <p className="text-sm font-medium">Review Applicants</p>
          </button>
          <button className="p-4 border-2 border-dashed border-gray-300 rounded-lg hover:border-purple-400 hover:bg-purple-50 transition-colors text-center">
            <UserPlus className="w-6 h-6 text-purple-600 mx-auto mb-2" />
            <p className="text-sm font-medium">Send Offers</p>
          </button>
          <button className="p-4 border-2 border-dashed border-gray-300 rounded-lg hover:border-yellow-400 hover:bg-yellow-50 transition-colors text-center">
            <Target className="w-6 h-6 text-yellow-600 mx-auto mb-2" />
            <p className="text-sm font-medium">View Analytics</p>
          </button>
        </div>
      </div>
    </div>
  );
}
