import { DollarSign, TrendingUp, CreditCard, Calendar, Download, ArrowUpRight, ArrowDownRight } from 'lucide-react';
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

export default function MentorEarnings() {
  const monthlyRevenue = [
    { month: 'Jan', revenue: 3200, expenses: 400 },
    { month: 'Feb', revenue: 4500, expenses: 450 },
    { month: 'Mar', revenue: 5200, expenses: 500 },
    { month: 'Apr', revenue: 6800, expenses: 550 },
    { month: 'May', revenue: 7500, expenses: 600 },
    { month: 'Jun', revenue: 8500, expenses: 650 },
  ];

  const courseRevenue = [
    { course: 'Full Stack Dev', revenue: 4800 },
    { course: 'React Master', revenue: 3600 },
    { course: 'Backend Dev', revenue: 2400 },
    { course: 'UI/UX Design', revenue: 1800 },
  ];

  const transactions = [
    { id: 1, type: 'payment', student: 'Sarah Johnson', course: 'Full Stack Development', amount: 299, date: '2026-03-12', status: 'completed' },
    { id: 2, type: 'payment', student: 'Michael Chen', course: 'React Masterclass', amount: 249, date: '2026-03-11', status: 'completed' },
    { id: 3, type: 'payout', description: 'Monthly Payout', amount: 8500, date: '2026-03-10', status: 'completed' },
    { id: 4, type: 'payment', student: 'Emily Rodriguez', course: 'Backend Development', amount: 279, date: '2026-03-09', status: 'completed' },
    { id: 5, type: 'refund', student: 'David Kim', course: 'Full Stack Development', amount: -299, date: '2026-03-08', status: 'processing' },
  ];

  const upcomingPayouts = [
    { date: '2026-04-01', amount: 9200, status: 'scheduled' },
    { date: '2026-05-01', amount: 'TBD', status: 'pending' },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-semibold mb-1">Earnings Dashboard</h2>
          <p className="text-gray-600">Track your revenue and manage payouts</p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700">
          <Download className="w-4 h-4" />
          Download Report
        </button>
      </div>

      {/* Stats Overview */}
      <div className="grid md:grid-cols-4 gap-6">
        <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-xl p-6 text-white">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center backdrop-blur-sm">
              <DollarSign className="w-6 h-6" />
            </div>
            <div className="flex items-center gap-1">
              <ArrowUpRight className="w-4 h-4" />
              <span className="text-sm">+15%</span>
            </div>
          </div>
          <h3 className="text-3xl font-semibold mb-1">$8,500</h3>
          <p className="text-green-100 text-sm">Current Month</p>
        </div>

        <div className="bg-white rounded-xl p-6 border border-gray-200">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
              <TrendingUp className="w-6 h-6 text-blue-600" />
            </div>
          </div>
          <h3 className="text-2xl font-semibold mb-1">$45,200</h3>
          <p className="text-sm text-gray-600">Total Earnings (6 months)</p>
        </div>

        <div className="bg-white rounded-xl p-6 border border-gray-200">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
              <CreditCard className="w-6 h-6 text-purple-600" />
            </div>
          </div>
          <h3 className="text-2xl font-semibold mb-1">$9,200</h3>
          <p className="text-sm text-gray-600">Next Payout (Apr 1)</p>
        </div>

        <div className="bg-white rounded-xl p-6 border border-gray-200">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center">
              <Calendar className="w-6 h-6 text-yellow-600" />
            </div>
          </div>
          <h3 className="text-2xl font-semibold mb-1">$285</h3>
          <p className="text-sm text-gray-600">Avg Revenue/Student</p>
        </div>
      </div>

      {/* Charts */}
      <div className="grid lg:grid-cols-2 gap-6">
        {/* Monthly Revenue Trend */}
        <div className="bg-white rounded-xl p-6 border border-gray-200">
          <h3 className="text-lg font-semibold mb-4">Revenue & Expenses</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={monthlyRevenue}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis dataKey="month" stroke="#9ca3af" />
              <YAxis stroke="#9ca3af" />
              <Tooltip />
              <Line type="monotone" dataKey="revenue" stroke="#10b981" strokeWidth={2} name="Revenue" />
              <Line type="monotone" dataKey="expenses" stroke="#ef4444" strokeWidth={2} name="Expenses" />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Course Revenue */}
        <div className="bg-white rounded-xl p-6 border border-gray-200">
          <h3 className="text-lg font-semibold mb-4">Revenue by Course</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={courseRevenue}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis dataKey="course" stroke="#9ca3af" />
              <YAxis stroke="#9ca3af" />
              <Tooltip />
              <Bar dataKey="revenue" fill="#8b5cf6" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Upcoming Payouts */}
      <div className="bg-white rounded-xl p-6 border border-gray-200">
        <h3 className="text-lg font-semibold mb-4">Upcoming Payouts</h3>
        <div className="space-y-3">
          {upcomingPayouts.map((payout, index) => (
            <div key={index} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                  <Calendar className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <p className="font-medium">{payout.date}</p>
                  <p className="text-sm text-gray-600">Scheduled Payout</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-xl font-semibold">
                  {typeof payout.amount === 'number' ? `$${payout.amount.toLocaleString()}` : payout.amount}
                </p>
                <span className={`text-xs px-2 py-1 rounded-full ${
                  payout.status === 'scheduled' ? 'bg-blue-100 text-blue-700' : 'bg-gray-100 text-gray-700'
                }`}>
                  {payout.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Transaction History */}
      <div className="bg-white rounded-xl border border-gray-200">
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold">Recent Transactions</h3>
            <button className="text-sm text-purple-600 hover:text-purple-700">View All</button>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase">Type</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase">Description</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase">Date</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase">Amount</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {transactions.map((transaction) => (
                <tr key={transaction.id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4">
                    <span className={`inline-flex items-center gap-1 text-xs px-2 py-1 rounded-full ${
                      transaction.type === 'payment' ? 'bg-green-100 text-green-700' :
                      transaction.type === 'payout' ? 'bg-blue-100 text-blue-700' :
                      'bg-red-100 text-red-700'
                    }`}>
                      {transaction.type === 'payment' && <ArrowUpRight className="w-3 h-3" />}
                      {transaction.type === 'payout' && <ArrowDownRight className="w-3 h-3" />}
                      {transaction.type === 'refund' && <ArrowDownRight className="w-3 h-3" />}
                      {transaction.type}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div>
                      <p className="font-medium text-sm">
                        {transaction.student || transaction.description}
                      </p>
                      {transaction.course && (
                        <p className="text-xs text-gray-500">{transaction.course}</p>
                      )}
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">{transaction.date}</td>
                  <td className="px-6 py-4">
                    <span className={`font-semibold ${
                      transaction.amount > 0 ? 'text-green-600' : 'text-red-600'
                    }`}>
                      {transaction.amount > 0 ? '+' : ''}${Math.abs(transaction.amount).toLocaleString()}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`text-xs px-2 py-1 rounded-full ${
                      transaction.status === 'completed' ? 'bg-green-100 text-green-700' :
                      'bg-yellow-100 text-yellow-700'
                    }`}>
                      {transaction.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Payment Methods */}
      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl p-6 border border-gray-200">
          <h3 className="text-lg font-semibold mb-4">Payment Methods</h3>
          <div className="space-y-3">
            <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <CreditCard className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <p className="font-medium">Bank Account</p>
                  <p className="text-sm text-gray-600">**** **** **** 4242</p>
                </div>
              </div>
              <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm">Primary</span>
            </div>
          </div>
          <button className="mt-4 w-full px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
            Add Payment Method
          </button>
        </div>

        <div className="bg-white rounded-xl p-6 border border-gray-200">
          <h3 className="text-lg font-semibold mb-4">Payout Settings</h3>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2">Payout Frequency</label>
              <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500">
                <option>Monthly</option>
                <option>Bi-weekly</option>
                <option>Weekly</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Minimum Payout Amount</label>
              <input
                type="number"
                value="500"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>
            <button className="w-full px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700">
              Save Settings
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
