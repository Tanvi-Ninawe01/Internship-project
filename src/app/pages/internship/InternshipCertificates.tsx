import { Award, Download, Share2, ExternalLink, Calendar, CheckCircle, Lock } from 'lucide-react';

export default function InternshipCertificates() {
  const certificates = [
    {
      id: 1,
      title: 'Full Stack Web Development - Level 1',
      tier: 'Premium',
      issueDate: '2026-03-10',
      certificateId: 'CERT-2026-001234',
      status: 'issued',
      score: 92,
      verificationUrl: 'https://verify.syncsas.com/cert-001234',
    },
    {
      id: 2,
      title: 'React Advanced Patterns',
      tier: 'Premium',
      issueDate: '2026-03-15',
      certificateId: 'CERT-2026-001567',
      status: 'issued',
      score: 88,
      verificationUrl: 'https://verify.syncsas.com/cert-001567',
    },
    {
      id: 3,
      title: 'Full Stack Web Development - Level 2',
      tier: 'Premium',
      issueDate: null,
      certificateId: null,
      status: 'in-progress',
      progress: 65,
      verificationUrl: null,
    },
    {
      id: 4,
      title: 'Corporate Internship Completion',
      tier: 'Corporate',
      issueDate: null,
      certificateId: null,
      status: 'locked',
      progress: 0,
      verificationUrl: null,
    },
  ];

  const achievements = [
    { icon: '🏆', title: 'Top Performer', desc: 'Ranked in top 10%', unlocked: true },
    { icon: '⚡', title: 'Quick Learner', desc: 'Completed level in record time', unlocked: true },
    { icon: '🎯', title: 'Perfect Score', desc: 'Achieved 100% in evaluation', unlocked: true },
    { icon: '👥', title: 'Team Player', desc: 'Contributed to 5 team projects', unlocked: false },
    { icon: '🔥', title: 'Streak Master', desc: '30-day learning streak', unlocked: false },
    { icon: '💡', title: 'Innovator', desc: 'Created unique project solution', unlocked: false },
  ];

  return (
    <div className="space-y-6">
      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white rounded-xl p-6 border border-gray-200">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
              <Award className="w-5 h-5 text-green-600" />
            </div>
            <span className="text-sm text-gray-600">Earned</span>
          </div>
          <p className="text-2xl font-semibold">6</p>
        </div>
        <div className="bg-white rounded-xl p-6 border border-gray-200">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 bg-yellow-100 rounded-lg flex items-center justify-center">
              <CheckCircle className="w-5 h-5 text-yellow-600" />
            </div>
            <span className="text-sm text-gray-600">In Progress</span>
          </div>
          <p className="text-2xl font-semibold">2</p>
        </div>
        <div className="bg-white rounded-xl p-6 border border-gray-200">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
              <Lock className="w-5 h-5 text-blue-600" />
            </div>
            <span className="text-sm text-gray-600">Locked</span>
          </div>
          <p className="text-2xl font-semibold">4</p>
        </div>
        <div className="bg-white rounded-xl p-6 border border-gray-200">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
              <Award className="w-5 h-5 text-purple-600" />
            </div>
            <span className="text-sm text-gray-600">Avg. Score</span>
          </div>
          <p className="text-2xl font-semibold">90%</p>
        </div>
      </div>

      {/* Certificate Cards */}
      <div className="space-y-4">
        {certificates.map((cert) => (
          <div 
            key={cert.id} 
            className={`bg-white rounded-xl p-6 border-2 ${
              cert.status === 'issued' ? 'border-green-200' :
              cert.status === 'in-progress' ? 'border-yellow-200' :
              'border-gray-200 opacity-60'
            }`}
          >
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-start gap-4 flex-1">
                <div className={`w-16 h-16 rounded-lg flex items-center justify-center ${
                  cert.status === 'issued' ? 'bg-gradient-to-br from-green-500 to-emerald-600' :
                  cert.status === 'in-progress' ? 'bg-gradient-to-br from-yellow-500 to-orange-500' :
                  'bg-gray-300'
                }`}>
                  <Award className="w-8 h-8 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold mb-2">{cert.title}</h3>
                  {cert.certificateId && (
                    <p className="text-sm text-gray-600 mb-2">
                      Certificate ID: <span className="font-mono">{cert.certificateId}</span>
                    </p>
                  )}
                  <div className="flex flex-wrap gap-2 mb-3">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      cert.tier === 'Corporate' ? 'bg-green-100 text-green-700' :
                      cert.tier === 'Premium' ? 'bg-purple-100 text-purple-700' :
                      'bg-blue-100 text-blue-700'
                    }`}>
                      {cert.tier} Tier
                    </span>
                    {cert.issueDate && (
                      <span className="flex items-center gap-1 px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs">
                        <Calendar className="w-3 h-3" />
                        Issued: {cert.issueDate}
                      </span>
                    )}
                    {cert.score && (
                      <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-medium">
                        Score: {cert.score}%
                      </span>
                    )}
                  </div>
                  {cert.status === 'in-progress' && cert.progress !== undefined && (
                    <div>
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-sm font-medium">Progress</span>
                        <span className="text-sm text-gray-600">{cert.progress}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-yellow-600 h-2 rounded-full" 
                          style={{ width: `${cert.progress}%` }} 
                        />
                      </div>
                    </div>
                  )}
                </div>
              </div>
              <span className={`px-3 py-1 rounded-full text-xs font-medium whitespace-nowrap ml-4 ${
                cert.status === 'issued' ? 'bg-green-100 text-green-700' :
                cert.status === 'in-progress' ? 'bg-yellow-100 text-yellow-700' :
                'bg-gray-100 text-gray-700'
              }`}>
                {cert.status === 'issued' ? 'Issued' :
                 cert.status === 'in-progress' ? 'In Progress' :
                 'Locked'}
              </span>
            </div>

            {cert.status === 'issued' && (
              <div className="flex gap-3 pt-4 border-t border-gray-200">
                <button className="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors text-sm font-medium">
                  <Download className="w-4 h-4" />
                  Download PDF
                </button>
                <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors text-sm font-medium">
                  <Share2 className="w-4 h-4" />
                  Share on LinkedIn
                </button>
                {cert.verificationUrl && (
                  <a 
                    href={cert.verificationUrl}
                    className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors text-sm font-medium"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Verify
                  </a>
                )}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Achievements */}
      <div className="bg-white rounded-xl p-6 border border-gray-200">
        <h3 className="text-lg font-semibold mb-4">Achievements & Badges</h3>
        <div className="grid md:grid-cols-3 gap-4">
          {achievements.map((achievement, idx) => (
            <div 
              key={idx} 
              className={`p-4 rounded-lg border-2 ${
                achievement.unlocked 
                  ? 'border-purple-200 bg-gradient-to-br from-purple-50 to-pink-50' 
                  : 'border-gray-200 bg-gray-50 opacity-60'
              }`}
            >
              <div className="text-4xl mb-2 text-center">{achievement.icon}</div>
              <h4 className="font-semibold text-center mb-1">{achievement.title}</h4>
              <p className="text-xs text-gray-600 text-center">{achievement.desc}</p>
              {achievement.unlocked && (
                <div className="mt-3 text-center">
                  <span className="inline-flex items-center gap-1 px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-xs font-medium">
                    <CheckCircle className="w-3 h-3" />
                    Unlocked
                  </span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Certificate Preview */}
      <div className="bg-gradient-to-br from-indigo-600 to-purple-600 rounded-xl p-8 text-white">
        <div className="max-w-3xl mx-auto text-center">
          <Award className="w-16 h-16 mx-auto mb-4" />
          <h2 className="text-2xl font-bold mb-2">Certificate Preview</h2>
          <p className="text-white/80 mb-6">
            All certificates are blockchain-verified and can be shared on LinkedIn, added to your resume, or verified by employers.
          </p>
          <div className="bg-white text-gray-900 rounded-lg p-8 border-8 border-white/20">
            <div className="text-sm text-gray-500 mb-2">SyncSaS LMS & Career Platform</div>
            <div className="text-2xl font-bold mb-4">CERTIFICATE OF COMPLETION</div>
            <div className="text-sm mb-4">This is to certify that</div>
            <div className="text-xl font-semibold mb-4">Your Name</div>
            <div className="text-sm mb-2">has successfully completed</div>
            <div className="text-lg font-semibold mb-4">Full Stack Web Development - Level 1</div>
            <div className="text-sm text-gray-600">March 10, 2026</div>
          </div>
        </div>
      </div>
    </div>
  );
}
