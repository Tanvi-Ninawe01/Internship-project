import { Users, ArrowRight, CheckCircle, Clock, XCircle, Mail, Calendar } from 'lucide-react';

export default function CompanyHiring() {
  const pipeline = {
    applied: {
      count: 156,
      candidates: [
        { id: 1, name: 'Sarah Chen', position: 'Full Stack Developer', tier: 'Premium', appliedDate: '2026-03-12' },
        { id: 2, name: 'Mike Rodriguez', position: 'UI/UX Designer', tier: 'Corporate', appliedDate: '2026-03-12' },
        { id: 3, name: 'Emily Zhang', position: 'Data Analyst', tier: 'Premium', appliedDate: '2026-03-13' },
      ],
    },
    screening: {
      count: 89,
      candidates: [
        { id: 4, name: 'Alex Kumar', position: 'Mobile Developer', tier: 'Basic', appliedDate: '2026-03-10' },
        { id: 5, name: 'Jessica Lee', position: 'Full Stack Developer', tier: 'Corporate', appliedDate: '2026-03-09' },
      ],
    },
    interview: {
      count: 45,
      candidates: [
        { id: 6, name: 'David Park', position: 'Data Analyst', tier: 'Premium', appliedDate: '2026-03-08' },
        { id: 7, name: 'Lisa Wang', position: 'UI/UX Designer', tier: 'Corporate', appliedDate: '2026-03-07' },
      ],
    },
    assessment: {
      count: 28,
      candidates: [
        { id: 8, name: 'Tom Wilson', position: 'Full Stack Developer', tier: 'Premium', appliedDate: '2026-03-05' },
      ],
    },
    offer: {
      count: 12,
      candidates: [
        { id: 9, name: 'Rachel Green', position: 'Mobile Developer', tier: 'Corporate', appliedDate: '2026-03-03' },
      ],
    },
    hired: {
      count: 87,
      candidates: [
        { id: 10, name: 'Chris Martinez', position: 'Full Stack Developer', tier: 'Premium', appliedDate: '2026-02-28' },
        { id: 11, name: 'Nina Patel', position: 'Data Analyst', tier: 'Corporate', appliedDate: '2026-02-25' },
      ],
    },
  };

  const recentActivity = [
    { id: 1, type: 'interview', candidate: 'Sarah Chen', position: 'Full Stack Developer', action: 'Interview scheduled', time: '2 hours ago' },
    { id: 2, type: 'offer', candidate: 'Mike Rodriguez', position: 'UI/UX Designer', action: 'Offer sent', time: '4 hours ago' },
    { id: 3, type: 'hired', candidate: 'Emily Zhang', position: 'Data Analyst', action: 'Offer accepted', time: '1 day ago' },
    { id: 4, type: 'rejected', candidate: 'Alex Kumar', position: 'Mobile Developer', action: 'Application rejected', time: '1 day ago' },
    { id: 5, type: 'screening', candidate: 'Jessica Lee', position: 'Full Stack Developer', action: 'Moved to screening', time: '2 days ago' },
  ];

  return (
    <div className="space-y-6">
      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-xl p-6 border border-gray-200">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
              <Users className="w-5 h-5 text-blue-600" />
            </div>
            <span className="text-sm text-gray-600">In Pipeline</span>
          </div>
          <p className="text-2xl font-semibold">330</p>
          <p className="text-xs text-gray-600 mt-1">Candidates being processed</p>
        </div>
        <div className="bg-white rounded-xl p-6 border border-gray-200">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
              <CheckCircle className="w-5 h-5 text-green-600" />
            </div>
            <span className="text-sm text-gray-600">Total Hired</span>
          </div>
          <p className="text-2xl font-semibold">87</p>
          <p className="text-xs text-gray-600 mt-1">This month: +12</p>
        </div>
        <div className="bg-white rounded-xl p-6 border border-gray-200">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
              <Clock className="w-5 h-5 text-purple-600" />
            </div>
            <span className="text-sm text-gray-600">Avg. Time to Hire</span>
          </div>
          <p className="text-2xl font-semibold">14 days</p>
          <p className="text-xs text-gray-600 mt-1">-2 days from last month</p>
        </div>
      </div>

      {/* Hiring Pipeline */}
      <div className="bg-white rounded-xl p-6 border border-gray-200">
        <h3 className="text-lg font-semibold mb-6">Hiring Pipeline</h3>
        
        {/* Pipeline Stages */}
        <div className="grid grid-cols-6 gap-4 mb-8">
          <div className="relative">
            <div className="bg-blue-50 border-2 border-blue-300 rounded-lg p-4 text-center">
              <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-2 text-white font-semibold">
                {pipeline.applied.count}
              </div>
              <p className="text-sm font-medium">Applied</p>
            </div>
            <ArrowRight className="absolute -right-5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          </div>
          
          <div className="relative">
            <div className="bg-yellow-50 border-2 border-yellow-300 rounded-lg p-4 text-center">
              <div className="w-10 h-10 bg-yellow-600 rounded-full flex items-center justify-center mx-auto mb-2 text-white font-semibold">
                {pipeline.screening.count}
              </div>
              <p className="text-sm font-medium">Screening</p>
            </div>
            <ArrowRight className="absolute -right-5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          </div>
          
          <div className="relative">
            <div className="bg-purple-50 border-2 border-purple-300 rounded-lg p-4 text-center">
              <div className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-2 text-white font-semibold">
                {pipeline.interview.count}
              </div>
              <p className="text-sm font-medium">Interview</p>
            </div>
            <ArrowRight className="absolute -right-5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          </div>
          
          <div className="relative">
            <div className="bg-orange-50 border-2 border-orange-300 rounded-lg p-4 text-center">
              <div className="w-10 h-10 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-2 text-white font-semibold">
                {pipeline.assessment.count}
              </div>
              <p className="text-sm font-medium">Assessment</p>
            </div>
            <ArrowRight className="absolute -right-5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          </div>
          
          <div className="relative">
            <div className="bg-emerald-50 border-2 border-emerald-300 rounded-lg p-4 text-center">
              <div className="w-10 h-10 bg-emerald-600 rounded-full flex items-center justify-center mx-auto mb-2 text-white font-semibold">
                {pipeline.offer.count}
              </div>
              <p className="text-sm font-medium">Offer</p>
            </div>
            <ArrowRight className="absolute -right-5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          </div>
          
          <div>
            <div className="bg-green-50 border-2 border-green-300 rounded-lg p-4 text-center">
              <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-2 text-white font-semibold">
                {pipeline.hired.count}
              </div>
              <p className="text-sm font-medium">Hired</p>
            </div>
          </div>
        </div>

        {/* Pipeline Details */}
        <div className="grid md:grid-cols-3 gap-6">
          {/* Applied */}
          <div className="border border-gray-200 rounded-lg p-4">
            <h4 className="font-medium mb-3 flex items-center justify-between">
              <span>Applied ({pipeline.applied.count})</span>
              <span className="text-xs text-gray-500">Latest</span>
            </h4>
            <div className="space-y-2">
              {pipeline.applied.candidates.map((candidate) => (
                <div key={candidate.id} className="p-3 bg-blue-50 rounded-lg border border-blue-200">
                  <p className="text-sm font-medium">{candidate.name}</p>
                  <p className="text-xs text-gray-600">{candidate.position}</p>
                  <div className="flex items-center justify-between mt-2">
                    <span className={`px-2 py-1 rounded-full text-xs ${
                      candidate.tier === 'Corporate' ? 'bg-green-100 text-green-700' :
                      candidate.tier === 'Premium' ? 'bg-purple-100 text-purple-700' :
                      'bg-blue-100 text-blue-700'
                    }`}>
                      {candidate.tier}
                    </span>
                    <button className="text-xs text-blue-600 hover:text-blue-700 font-medium">
                      Review →
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Interview */}
          <div className="border border-gray-200 rounded-lg p-4">
            <h4 className="font-medium mb-3 flex items-center justify-between">
              <span>Interview ({pipeline.interview.count})</span>
              <button className="text-xs text-purple-600 hover:text-purple-700 font-medium">View all</button>
            </h4>
            <div className="space-y-2">
              {pipeline.interview.candidates.map((candidate) => (
                <div key={candidate.id} className="p-3 bg-purple-50 rounded-lg border border-purple-200">
                  <p className="text-sm font-medium">{candidate.name}</p>
                  <p className="text-xs text-gray-600">{candidate.position}</p>
                  <div className="flex items-center gap-2 mt-2">
                    <button className="flex-1 text-xs px-2 py-1 bg-purple-600 text-white rounded hover:bg-purple-700">
                      <Calendar className="w-3 h-3 inline mr-1" />
                      Schedule
                    </button>
                    <button className="text-xs px-2 py-1 border border-gray-300 rounded hover:bg-gray-50">
                      Details
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Hired */}
          <div className="border border-gray-200 rounded-lg p-4">
            <h4 className="font-medium mb-3 flex items-center justify-between">
              <span>Hired ({pipeline.hired.count})</span>
              <button className="text-xs text-green-600 hover:text-green-700 font-medium">View all</button>
            </h4>
            <div className="space-y-2">
              {pipeline.hired.candidates.map((candidate) => (
                <div key={candidate.id} className="p-3 bg-green-50 rounded-lg border border-green-200">
                  <div className="flex items-center gap-2 mb-1">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <p className="text-sm font-medium">{candidate.name}</p>
                  </div>
                  <p className="text-xs text-gray-600">{candidate.position}</p>
                  <div className="flex items-center justify-between mt-2">
                    <span className={`px-2 py-1 rounded-full text-xs ${
                      candidate.tier === 'Corporate' ? 'bg-green-100 text-green-700' :
                      candidate.tier === 'Premium' ? 'bg-purple-100 text-purple-700' :
                      'bg-blue-100 text-blue-700'
                    }`}>
                      {candidate.tier}
                    </span>
                    <span className="text-xs text-gray-500">{candidate.appliedDate}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="bg-white rounded-xl p-6 border border-gray-200">
        <h3 className="text-lg font-semibold mb-4">Recent Activity</h3>
        <div className="space-y-3">
          {recentActivity.map((activity) => (
            <div key={activity.id} className="flex items-start gap-4 p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                activity.type === 'hired' ? 'bg-green-100' :
                activity.type === 'offer' ? 'bg-emerald-100' :
                activity.type === 'interview' ? 'bg-purple-100' :
                activity.type === 'rejected' ? 'bg-red-100' :
                'bg-yellow-100'
              }`}>
                {activity.type === 'hired' ? <CheckCircle className="w-5 h-5 text-green-600" /> :
                 activity.type === 'offer' ? <Mail className="w-5 h-5 text-emerald-600" /> :
                 activity.type === 'interview' ? <Calendar className="w-5 h-5 text-purple-600" /> :
                 activity.type === 'rejected' ? <XCircle className="w-5 h-5 text-red-600" /> :
                 <Clock className="w-5 h-5 text-yellow-600" />}
              </div>
              <div className="flex-1">
                <p className="font-medium">{activity.candidate}</p>
                <p className="text-sm text-gray-600">{activity.position}</p>
                <p className="text-sm text-gray-700 mt-1">{activity.action}</p>
              </div>
              <span className="text-xs text-gray-500 whitespace-nowrap">{activity.time}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Quick Actions */}
      <div className="bg-white rounded-xl p-6 border border-gray-200">
        <h3 className="text-lg font-semibold mb-4">Quick Actions</h3>
        <div className="grid md:grid-cols-4 gap-4">
          <button className="p-4 border-2 border-dashed border-gray-300 rounded-lg hover:border-emerald-400 hover:bg-emerald-50 transition-colors text-center">
            <Mail className="w-6 h-6 text-emerald-600 mx-auto mb-2" />
            <p className="text-sm font-medium">Send Bulk Emails</p>
          </button>
          <button className="p-4 border-2 border-dashed border-gray-300 rounded-lg hover:border-purple-400 hover:bg-purple-50 transition-colors text-center">
            <Calendar className="w-6 h-6 text-purple-600 mx-auto mb-2" />
            <p className="text-sm font-medium">Schedule Interviews</p>
          </button>
          <button className="p-4 border-2 border-dashed border-gray-300 rounded-lg hover:border-green-400 hover:bg-green-50 transition-colors text-center">
            <CheckCircle className="w-6 h-6 text-green-600 mx-auto mb-2" />
            <p className="text-sm font-medium">Send Offers</p>
          </button>
          <button className="p-4 border-2 border-dashed border-gray-300 rounded-lg hover:border-blue-400 hover:bg-blue-50 transition-colors text-center">
            <Users className="w-6 h-6 text-blue-600 mx-auto mb-2" />
            <p className="text-sm font-medium">Move to Next Stage</p>
          </button>
        </div>
      </div>
    </div>
  );
}
