import { TrendingUp, Award, Users, Target, CheckCircle, Clock, Star, Trophy, Zap } from 'lucide-react';
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';

export default function InternshipDashboard() {
  const enrollmentData = [
    { month: 'Jan', basic: 45, premium: 30, corporate: 12 },
    { month: 'Feb', basic: 52, premium: 38, corporate: 15 },
    { month: 'Mar', basic: 61, premium: 45, corporate: 18 },
    { month: 'Apr', basic: 58, premium: 52, corporate: 22 },
    { month: 'May', basic: 70, premium: 60, corporate: 25 },
    { month: 'Jun', basic: 85, premium: 72, corporate: 30 },
  ];

  const tierDistribution = [
    { name: 'Basic', value: 420, color: '#3b82f6' },
    { name: 'Premium', value: 315, color: '#8b5cf6' },
    { name: 'Corporate', value: 142, color: '#10b981' },
  ];

  const activeInternships = [
    { id: 1, title: 'Full Stack Web Development', tier: 'Premium', participants: 145, completion: 68, status: 'active' },
    { id: 2, title: 'Data Science & ML', tier: 'Corporate', participants: 89, completion: 72, status: 'active' },
    { id: 3, title: 'Mobile App Development', tier: 'Basic', participants: 203, completion: 55, status: 'active' },
    { id: 4, title: 'UI/UX Design Bootcamp', tier: 'Premium', participants: 167, completion: 81, status: 'active' },
  ];

  const upcomingHackathons = [
    { id: 1, name: 'AI Innovation Challenge', date: '2026-03-20', participants: 89, prize: '$5,000' },
    { id: 2, name: 'Web3 Buildathon', date: '2026-03-28', participants: 64, prize: '$3,000' },
    { id: 3, name: 'Mobile App Sprint', date: '2026-04-05', participants: 102, prize: '$4,000' },
  ];

  return (
    <div className="space-y-6">
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white rounded-xl p-6 border border-gray-200">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
              <Users className="w-6 h-6 text-blue-600" />
            </div>
            <span className="text-sm text-green-600 font-medium">+15%</span>
          </div>
          <h3 className="text-2xl font-semibold mb-1">877</h3>
          <p className="text-sm text-gray-600">Total Enrollments</p>
        </div>

        <div className="bg-white rounded-xl p-6 border border-gray-200">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
              <Target className="w-6 h-6 text-purple-600" />
            </div>
            <span className="text-sm text-green-600 font-medium">+8%</span>
          </div>
          <h3 className="text-2xl font-semibold mb-1">24</h3>
          <p className="text-sm text-gray-600">Active Internships</p>
        </div>

        <div className="bg-white rounded-xl p-6 border border-gray-200">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
              <CheckCircle className="w-6 h-6 text-green-600" />
            </div>
          </div>
          <h3 className="text-2xl font-semibold mb-1">67%</h3>
          <p className="text-sm text-gray-600">Avg. Completion Rate</p>
        </div>

        <div className="bg-white rounded-xl p-6 border border-gray-200">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center">
              <Award className="w-6 h-6 text-yellow-600" />
            </div>
          </div>
          <h3 className="text-2xl font-semibold mb-1">542</h3>
          <p className="text-sm text-gray-600">Certificates Issued</p>
        </div>
      </div>

      {/* Internship Tiers Overview */}
      <div className="bg-gradient-to-br from-indigo-600 to-blue-600 rounded-xl p-6 text-white">
        <h3 className="text-lg font-semibold mb-4">Internship Tiers</h3>
        <div className="grid md:grid-cols-3 gap-4">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
            <div className="flex items-center gap-2 mb-2">
              <Star className="w-5 h-5" />
              <h4 className="font-medium">Basic Tier</h4>
            </div>
            <p className="text-2xl font-semibold mb-1">420</p>
            <p className="text-sm text-white/80">Active Students</p>
            <div className="mt-3 pt-3 border-t border-white/20">
              <p className="text-xs text-white/70">3 Levels • 15 Tasks • 3 Projects</p>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
            <div className="flex items-center gap-2 mb-2">
              <Trophy className="w-5 h-5" />
              <h4 className="font-medium">Premium Tier</h4>
            </div>
            <p className="text-2xl font-semibold mb-1">315</p>
            <p className="text-sm text-white/80">Active Students</p>
            <div className="mt-3 pt-3 border-t border-white/20">
              <p className="text-xs text-white/70">5 Levels • 30 Tasks • 8 Projects</p>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
            <div className="flex items-center gap-2 mb-2">
              <Zap className="w-5 h-5" />
              <h4 className="font-medium">Corporate Tier</h4>
            </div>
            <p className="text-2xl font-semibold mb-1">142</p>
            <p className="text-sm text-white/80">Active Students</p>
            <div className="mt-3 pt-3 border-t border-white/20">
              <p className="text-xs text-white/70">7 Levels • 50 Tasks • 15 Projects</p>
            </div>
          </div>
        </div>
      </div>

      {/* Charts Row */}
      <div className="grid lg:grid-cols-2 gap-6">
        {/* Enrollment Trends */}
        <div className="bg-white rounded-xl p-6 border border-gray-200">
          <h3 className="text-lg font-semibold mb-4">Enrollment Trends</h3>
          <ResponsiveContainer width="100%" height={280}>
            <LineChart data={enrollmentData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis dataKey="month" stroke="#9ca3af" />
              <YAxis stroke="#9ca3af" />
              <Tooltip />
              <Line type="monotone" dataKey="basic" stroke="#3b82f6" strokeWidth={2} name="Basic" />
              <Line type="monotone" dataKey="premium" stroke="#8b5cf6" strokeWidth={2} name="Premium" />
              <Line type="monotone" dataKey="corporate" stroke="#10b981" strokeWidth={2} name="Corporate" />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Tier Distribution */}
        <div className="bg-white rounded-xl p-6 border border-gray-200">
          <h3 className="text-lg font-semibold mb-4">Tier Distribution</h3>
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

      {/* Active Internships & Upcoming Hackathons */}
      <div className="grid lg:grid-cols-3 gap-6">
        {/* Active Internships */}
        <div className="lg:col-span-2 bg-white rounded-xl p-6 border border-gray-200">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold">Active Internships</h3>
            <button className="text-sm text-indigo-600 hover:text-indigo-700">View All</button>
          </div>
          <div className="space-y-3">
            {activeInternships.map((internship) => (
              <div key={internship.id} className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h4 className="font-medium mb-1">{internship.title}</h4>
                    <div className="flex items-center gap-2">
                      <span className={`text-xs px-2 py-1 rounded-full ${
                        internship.tier === 'Corporate' ? 'bg-green-100 text-green-700' :
                        internship.tier === 'Premium' ? 'bg-purple-100 text-purple-700' :
                        'bg-blue-100 text-blue-700'
                      }`}>
                        {internship.tier}
                      </span>
                      <span className="text-sm text-gray-500">{internship.participants} participants</span>
                    </div>
                  </div>
                  <span className="text-sm font-medium text-green-600">{internship.completion}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-indigo-600 h-2 rounded-full" 
                    style={{ width: `${internship.completion}%` }} 
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Upcoming Hackathons */}
        <div className="bg-white rounded-xl p-6 border border-gray-200">
          <h3 className="text-lg font-semibold mb-4">Upcoming Hackathons</h3>
          <div className="space-y-4">
            {upcomingHackathons.map((hackathon) => (
              <div key={hackathon.id} className="p-3 bg-gradient-to-br from-orange-50 to-yellow-50 rounded-lg border border-orange-200">
                <div className="flex items-start gap-2 mb-2">
                  <Zap className="w-4 h-4 text-orange-600 mt-0.5" />
                  <div className="flex-1">
                    <h4 className="text-sm font-medium text-gray-900">{hackathon.name}</h4>
                    <p className="text-xs text-gray-600 mt-1">{hackathon.date}</p>
                  </div>
                </div>
                <div className="flex items-center justify-between mt-2 pt-2 border-t border-orange-200">
                  <span className="text-xs text-gray-600">{hackathon.participants} registered</span>
                  <span className="text-xs font-medium text-orange-600">{hackathon.prize}</span>
                </div>
              </div>
            ))}
          </div>

          <button className="w-full mt-4 px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors text-sm font-medium">
            View All Hackathons
          </button>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="bg-white rounded-xl p-6 border border-gray-200">
        <h3 className="text-lg font-semibold mb-4">Quick Actions</h3>
        <div className="grid md:grid-cols-4 gap-4">
          <button className="p-4 border-2 border-dashed border-gray-300 rounded-lg hover:border-indigo-400 hover:bg-indigo-50 transition-colors text-center">
            <Target className="w-6 h-6 text-indigo-600 mx-auto mb-2" />
            <p className="text-sm font-medium">Create Internship</p>
          </button>
          <button className="p-4 border-2 border-dashed border-gray-300 rounded-lg hover:border-purple-400 hover:bg-purple-50 transition-colors text-center">
            <Clock className="w-6 h-6 text-purple-600 mx-auto mb-2" />
            <p className="text-sm font-medium">Schedule Evaluation</p>
          </button>
          <button className="p-4 border-2 border-dashed border-gray-300 rounded-lg hover:border-green-400 hover:bg-green-50 transition-colors text-center">
            <Award className="w-6 h-6 text-green-600 mx-auto mb-2" />
            <p className="text-sm font-medium">Issue Certificate</p>
          </button>
          <button className="p-4 border-2 border-dashed border-gray-300 rounded-lg hover:border-orange-400 hover:bg-orange-50 transition-colors text-center">
            <Zap className="w-6 h-6 text-orange-600 mx-auto mb-2" />
            <p className="text-sm font-medium">Create Hackathon</p>
          </button>
        </div>
      </div>
    </div>
  );
}
