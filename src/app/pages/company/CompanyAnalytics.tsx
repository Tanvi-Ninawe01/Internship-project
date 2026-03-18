import { TrendingUp, Users, Target, Award, Calendar, DollarSign } from 'lucide-react';
import { LineChart, Line, BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area } from 'recharts';

export default function CompanyAnalytics() {
  const monthlyData = [
    { month: 'Jan', applicants: 45, interviews: 28, hired: 8, cost: 3200 },
    { month: 'Feb', applicants: 62, interviews: 38, hired: 12, cost: 4800 },
    { month: 'Mar', applicants: 78, interviews: 45, hired: 15, cost: 6000 },
    { month: 'Apr', applicants: 85, interviews: 52, hired: 18, cost: 7200 },
    { month: 'May', applicants: 92, interviews: 58, hired: 20, cost: 8000 },
    { month: 'Jun', applicants: 105, interviews: 65, hired: 24, cost: 9600 },
  ];

  const sourceData = [
    { name: 'Platform Search', value: 245, color: '#3b82f6' },
    { name: 'Direct Application', value: 132, color: '#8b5cf6' },
    { name: 'Referrals', value: 58, color: '#10b981' },
    { name: 'Social Media', value: 32, color: '#f59e0b' },
  ];

  const positionData = [
    { position: 'Full Stack', applied: 145, hired: 32 },
    { position: 'UI/UX', applied: 98, hired: 24 },
    { position: 'Data Analyst', applied: 87, hired: 18 },
    { position: 'Mobile Dev', applied: 76, hired: 13 },
    { position: 'DevOps', applied: 61, hired: 10 },
  ];

  const tierPerformance = [
    { tier: 'Basic', applicants: 125, hireRate: 12, avgScore: 72 },
    { tier: 'Premium', applicants: 198, hireRate: 18, avgScore: 84 },
    { tier: 'Corporate', applicants: 144, hireRate: 25, avgScore: 91 },
  ];

  const timeToHire = [
    { week: 'Week 1', count: 12 },
    { week: 'Week 2', count: 28 },
    { week: 'Week 3', count: 35 },
    { week: 'Week 4', count: 18 },
    { week: 'Week 5+', count: 7 },
  ];

  return (
    <div className="space-y-6">
      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white rounded-xl p-6 border border-gray-200">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
              <Users className="w-6 h-6 text-blue-600" />
            </div>
            <span className="text-sm text-green-600 font-medium">+24%</span>
          </div>
          <h3 className="text-2xl font-semibold mb-1">467</h3>
          <p className="text-sm text-gray-600">Total Applicants</p>
        </div>

        <div className="bg-white rounded-xl p-6 border border-gray-200">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
              <Target className="w-6 h-6 text-purple-600" />
            </div>
            <span className="text-sm text-green-600 font-medium">+15%</span>
          </div>
          <h3 className="text-2xl font-semibold mb-1">18.6%</h3>
          <p className="text-sm text-gray-600">Hire Rate</p>
        </div>

        <div className="bg-white rounded-xl p-6 border border-gray-200">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
              <Award className="w-6 h-6 text-green-600" />
            </div>
            <span className="text-sm text-green-600 font-medium">+8</span>
          </div>
          <h3 className="text-2xl font-semibold mb-1">87</h3>
          <p className="text-sm text-gray-600">Interns Hired</p>
        </div>

        <div className="bg-white rounded-xl p-6 border border-gray-200">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center">
              <Calendar className="w-6 h-6 text-yellow-600" />
            </div>
            <span className="text-sm text-green-600 font-medium">-2 days</span>
          </div>
          <h3 className="text-2xl font-semibold mb-1">14 days</h3>
          <p className="text-sm text-gray-600">Avg. Time to Hire</p>
        </div>
      </div>

      {/* Charts Row 1 */}
      <div className="grid lg:grid-cols-2 gap-6">
        {/* Application & Hiring Trends */}
        <div className="bg-white rounded-xl p-6 border border-gray-200">
          <h3 className="text-lg font-semibold mb-4">Application & Hiring Trends</h3>
          <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={monthlyData}>
              <defs>
                <linearGradient id="colorApplicants" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3}/>
                  <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
                </linearGradient>
                <linearGradient id="colorHired" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#10b981" stopOpacity={0.3}/>
                  <stop offset="95%" stopColor="#10b981" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis dataKey="month" stroke="#9ca3af" />
              <YAxis stroke="#9ca3af" />
              <Tooltip />
              <Area type="monotone" dataKey="applicants" stroke="#3b82f6" strokeWidth={2} fillOpacity={1} fill="url(#colorApplicants)" name="Applicants" />
              <Area type="monotone" dataKey="hired" stroke="#10b981" strokeWidth={2} fillOpacity={1} fill="url(#colorHired)" name="Hired" />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        {/* Applicant Sources */}
        <div className="bg-white rounded-xl p-6 border border-gray-200">
          <h3 className="text-lg font-semibold mb-4">Applicant Sources</h3>
          <div className="flex items-center justify-center">
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={sourceData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                  outerRadius={100}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {sourceData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Charts Row 2 */}
      <div className="grid lg:grid-cols-2 gap-6">
        {/* Position Performance */}
        <div className="bg-white rounded-xl p-6 border border-gray-200">
          <h3 className="text-lg font-semibold mb-4">Performance by Position</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={positionData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis dataKey="position" stroke="#9ca3af" />
              <YAxis stroke="#9ca3af" />
              <Tooltip />
              <Bar dataKey="applied" fill="#3b82f6" name="Applied" radius={[4, 4, 0, 0]} />
              <Bar dataKey="hired" fill="#10b981" name="Hired" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Time to Hire Distribution */}
        <div className="bg-white rounded-xl p-6 border border-gray-200">
          <h3 className="text-lg font-semibold mb-4">Time to Hire Distribution</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={timeToHire}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis dataKey="week" stroke="#9ca3af" />
              <YAxis stroke="#9ca3af" />
              <Tooltip />
              <Bar dataKey="count" fill="#8b5cf6" name="Candidates" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Tier Performance Comparison */}
      <div className="bg-white rounded-xl p-6 border border-gray-200">
        <h3 className="text-lg font-semibold mb-4">Tier Performance Comparison</h3>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="text-left py-4 px-6 font-medium text-gray-700">Tier</th>
                <th className="text-left py-4 px-6 font-medium text-gray-700">Total Applicants</th>
                <th className="text-left py-4 px-6 font-medium text-gray-700">Hire Rate</th>
                <th className="text-left py-4 px-6 font-medium text-gray-700">Avg. Score</th>
                <th className="text-left py-4 px-6 font-medium text-gray-700">Performance</th>
              </tr>
            </thead>
            <tbody>
              {tierPerformance.map((tier, idx) => (
                <tr key={idx} className="border-b border-gray-100">
                  <td className="py-4 px-6">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                      tier.tier === 'Corporate' ? 'bg-green-100 text-green-700' :
                      tier.tier === 'Premium' ? 'bg-purple-100 text-purple-700' :
                      'bg-blue-100 text-blue-700'
                    }`}>
                      {tier.tier}
                    </span>
                  </td>
                  <td className="py-4 px-6 font-medium">{tier.applicants}</td>
                  <td className="py-4 px-6">
                    <span className="text-emerald-600 font-medium">{tier.hireRate}%</span>
                  </td>
                  <td className="py-4 px-6">
                    <div className="flex items-center gap-2">
                      <div className="w-20 h-2 bg-gray-200 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-emerald-600 rounded-full" 
                          style={{ width: `${tier.avgScore}%` }}
                        />
                      </div>
                      <span className="text-sm font-medium">{tier.avgScore}%</span>
                    </div>
                  </td>
                  <td className="py-4 px-6">
                    {tier.tier === 'Corporate' && <TrendingUp className="w-5 h-5 text-green-600" />}
                    {tier.tier === 'Premium' && <TrendingUp className="w-5 h-5 text-purple-600" />}
                    {tier.tier === 'Basic' && <TrendingUp className="w-5 h-5 text-blue-600" />}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Recruitment Costs */}
      <div className="grid lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-white rounded-xl p-6 border border-gray-200">
          <h3 className="text-lg font-semibold mb-4">Recruitment Costs Over Time</h3>
          <ResponsiveContainer width="100%" height={250}>
            <LineChart data={monthlyData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis dataKey="month" stroke="#9ca3af" />
              <YAxis stroke="#9ca3af" />
              <Tooltip />
              <Line type="monotone" dataKey="cost" stroke="#f59e0b" strokeWidth={3} name="Cost ($)" />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-gradient-to-br from-emerald-600 to-teal-600 rounded-xl p-6 text-white">
          <h3 className="text-lg font-semibold mb-4">Cost Summary</h3>
          <div className="space-y-4">
            <div>
              <p className="text-white/80 text-sm mb-1">Total Recruitment Cost</p>
              <p className="text-3xl font-semibold">$38,800</p>
            </div>
            <div>
              <p className="text-white/80 text-sm mb-1">Cost per Hire</p>
              <p className="text-2xl font-semibold">$446</p>
            </div>
            <div>
              <p className="text-white/80 text-sm mb-1">Monthly Avg. Cost</p>
              <p className="text-2xl font-semibold">$6,467</p>
            </div>
            <div className="pt-4 border-t border-white/20">
              <div className="flex items-center gap-2 text-sm">
                <DollarSign className="w-4 h-4" />
                <span>-12% from last quarter</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Insights & Recommendations */}
      <div className="bg-white rounded-xl p-6 border border-gray-200">
        <h3 className="text-lg font-semibold mb-4">Key Insights & Recommendations</h3>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="p-4 bg-green-50 rounded-lg border border-green-200">
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center flex-shrink-0">
                <TrendingUp className="w-5 h-5 text-white" />
              </div>
              <div>
                <h4 className="font-semibold text-green-900 mb-1">Strong Corporate Tier Performance</h4>
                <p className="text-sm text-green-800">Corporate tier candidates show 25% hire rate with 91% avg. score. Consider focusing recruitment on this tier.</p>
              </div>
            </div>
          </div>
          <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                <Target className="w-5 h-5 text-white" />
              </div>
              <div>
                <h4 className="font-semibold text-blue-900 mb-1">Optimize Time to Hire</h4>
                <p className="text-sm text-blue-800">Current avg. is 14 days. Streamlining interview process could reduce to 10-12 days and improve candidate experience.</p>
              </div>
            </div>
          </div>
          <div className="p-4 bg-purple-50 rounded-lg border border-purple-200">
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 bg-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                <Users className="w-5 h-5 text-white" />
              </div>
              <div>
                <h4 className="font-semibold text-purple-900 mb-1">Expand Platform Search</h4>
                <p className="text-sm text-purple-800">52% of applicants come from platform search. Invest in better job posting visibility to increase quality applications.</p>
              </div>
            </div>
          </div>
          <div className="p-4 bg-yellow-50 rounded-lg border border-yellow-200">
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 bg-yellow-600 rounded-lg flex items-center justify-center flex-shrink-0">
                <Award className="w-5 h-5 text-white" />
              </div>
              <div>
                <h4 className="font-semibold text-yellow-900 mb-1">Full Stack Demand High</h4>
                <p className="text-sm text-yellow-800">Full Stack Developer position receives most applications (145). Consider posting more positions in this category.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
