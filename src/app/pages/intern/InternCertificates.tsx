import { Award, Download, Share2, Calendar, CheckCircle } from 'lucide-react';

export default function InternCertificates() {
  const certificates = [
    {
      id: 1,
      title: 'React Fundamentals',
      issuer: 'SyncSaS Platform',
      mentor: 'Dr. John Smith',
      issueDate: '2026-02-15',
      credentialId: 'SYNC-REACT-2026-001234',
      status: 'verified',
    },
    {
      id: 2,
      title: 'Full Stack Development',
      issuer: 'SyncSaS Platform',
      mentor: 'Dr. John Smith',
      issueDate: '2026-03-01',
      credentialId: 'SYNC-FULLSTACK-2026-001235',
      status: 'verified',
    },
    {
      id: 3,
      title: 'UI/UX Design',
      issuer: 'SyncSaS Platform',
      mentor: 'Sarah Johnson',
      issueDate: '2026-02-20',
      credentialId: 'SYNC-UIUX-2026-001236',
      status: 'verified',
    },
    {
      id: 4,
      title: 'Advanced JavaScript',
      issuer: 'SyncSaS Platform',
      mentor: 'Dr. John Smith',
      issueDate: '2026-01-30',
      credentialId: 'SYNC-JS-2026-001237',
      status: 'verified',
    },
  ];

  const badges = [
    { id: 1, name: 'Fast Learner', icon: '🚀', description: 'Complete 5 courses in a month', earned: true },
    { id: 2, name: 'Code Master', icon: '💻', description: 'Submit 10 perfect code reviews', earned: true },
    { id: 3, name: 'Team Player', icon: '🤝', description: 'Collaborate on 5 group projects', earned: true },
    { id: 4, name: 'Early Bird', icon: '🌅', description: 'Complete tasks before deadline 10 times', earned: true },
    { id: 5, name: 'Innovation Award', icon: '💡', description: 'Create an innovative project', earned: false },
    { id: 6, name: 'Mentor\'s Choice', icon: '⭐', description: 'Receive 5-star rating from mentor', earned: false },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-semibold mb-1">Certificates & Badges</h2>
        <p className="text-gray-600">Your achievements and earned credentials</p>
      </div>

      {/* Summary Stats */}
      <div className="grid md:grid-cols-4 gap-6">
        <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl p-6 text-white">
          <Award className="w-8 h-8 mb-3 opacity-80" />
          <h3 className="text-3xl font-semibold mb-1">{certificates.length}</h3>
          <p className="text-blue-100">Total Certificates</p>
        </div>
        <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl p-6 text-white">
          <Award className="w-8 h-8 mb-3 opacity-80" />
          <h3 className="text-3xl font-semibold mb-1">{badges.filter(b => b.earned).length}</h3>
          <p className="text-purple-100">Badges Earned</p>
        </div>
        <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-xl p-6 text-white">
          <CheckCircle className="w-8 h-8 mb-3 opacity-80" />
          <h3 className="text-3xl font-semibold mb-1">100%</h3>
          <p className="text-green-100">Verified</p>
        </div>
        <div className="bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-xl p-6 text-white">
          <Calendar className="w-8 h-8 mb-3 opacity-80" />
          <h3 className="text-3xl font-semibold mb-1">Mar 2026</h3>
          <p className="text-yellow-100">Latest Achievement</p>
        </div>
      </div>

      {/* Certificates Grid */}
      <div>
        <h3 className="text-lg font-semibold mb-4">My Certificates</h3>
        <div className="grid md:grid-cols-2 gap-6">
          {certificates.map((cert) => (
            <div key={cert.id} className="bg-white rounded-xl border-2 border-gray-200 overflow-hidden hover:shadow-lg transition-shadow">
              {/* Certificate Header */}
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-6 text-white">
                <div className="flex items-start justify-between mb-4">
                  <Award className="w-12 h-12" />
                  <span className="flex items-center gap-1 text-xs bg-white/20 px-3 py-1 rounded-full">
                    <CheckCircle className="w-3 h-3" />
                    Verified
                  </span>
                </div>
                <h4 className="text-2xl font-semibold mb-2">{cert.title}</h4>
                <p className="text-blue-100 text-sm">{cert.issuer}</p>
              </div>

              {/* Certificate Body */}
              <div className="p-6">
                <div className="space-y-3 mb-4">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Mentor:</span>
                    <span className="font-medium">{cert.mentor}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Issue Date:</span>
                    <span className="font-medium">{cert.issueDate}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Credential ID:</span>
                    <span className="font-mono text-xs">{cert.credentialId}</span>
                  </div>
                </div>

                <div className="flex gap-2">
                  <button className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                    <Download className="w-4 h-4" />
                    Download
                  </button>
                  <button className="flex items-center justify-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                    <Share2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Badges Section */}
      <div>
        <h3 className="text-lg font-semibold mb-4">Achievement Badges</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {badges.map((badge) => (
            <div
              key={badge.id}
              className={`relative bg-white rounded-xl p-6 border-2 text-center transition-all ${
                badge.earned
                  ? 'border-yellow-300 shadow-md hover:shadow-lg'
                  : 'border-gray-200 opacity-60'
              }`}
            >
              {badge.earned && (
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                  <CheckCircle className="w-4 h-4 text-white" />
                </div>
              )}
              <div className="text-4xl mb-3">{badge.icon}</div>
              <h4 className="font-semibold text-sm mb-1">{badge.name}</h4>
              <p className="text-xs text-gray-600">{badge.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Progress to Next Badge */}
      <div className="bg-white rounded-xl p-6 border border-gray-200">
        <h3 className="text-lg font-semibold mb-4">Next Achievements</h3>
        <div className="space-y-4">
          <div>
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-3">
                <span className="text-2xl">💡</span>
                <div>
                  <p className="font-medium">Innovation Award</p>
                  <p className="text-sm text-gray-600">Create an innovative project</p>
                </div>
              </div>
              <span className="text-sm font-medium text-gray-600">60%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div className="bg-blue-600 h-2 rounded-full" style={{ width: '60%' }} />
            </div>
          </div>
          <div>
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-3">
                <span className="text-2xl">⭐</span>
                <div>
                  <p className="font-medium">Mentor's Choice</p>
                  <p className="text-sm text-gray-600">Receive 5-star rating from mentor</p>
                </div>
              </div>
              <span className="text-sm font-medium text-gray-600">80%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div className="bg-purple-600 h-2 rounded-full" style={{ width: '80%' }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
