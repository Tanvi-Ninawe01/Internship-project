import { Zap, Calendar, Users, Trophy, Clock, Target, Award, CheckCircle } from 'lucide-react';

export default function InternshipHackathon() {
  const upcomingHackathons = [
    {
      id: 1,
      name: 'AI Innovation Challenge',
      date: '2026-03-20',
      duration: '48 hours',
      prize: '$5,000',
      participants: 89,
      maxParticipants: 150,
      difficulty: 'Advanced',
      theme: 'Artificial Intelligence',
      status: 'open',
      registrationDeadline: '2026-03-18',
    },
    {
      id: 2,
      name: 'Web3 Buildathon',
      date: '2026-03-28',
      duration: '72 hours',
      prize: '$3,000',
      participants: 64,
      maxParticipants: 100,
      difficulty: 'Intermediate',
      theme: 'Blockchain & Web3',
      status: 'open',
      registrationDeadline: '2026-03-26',
    },
    {
      id: 3,
      name: 'Mobile App Sprint',
      date: '2026-04-05',
      duration: '36 hours',
      prize: '$4,000',
      participants: 102,
      maxParticipants: 120,
      difficulty: 'Beginner Friendly',
      theme: 'Mobile Development',
      status: 'open',
      registrationDeadline: '2026-04-03',
    },
  ];

  const myHackathons = [
    {
      id: 1,
      name: 'React Challenge 2026',
      date: '2026-03-05',
      status: 'completed',
      rank: 12,
      prize: null,
      submission: 'Task Management App',
      score: 85,
    },
    {
      id: 2,
      name: 'Full Stack Showdown',
      date: '2026-02-15',
      status: 'completed',
      rank: 3,
      prize: '$500',
      submission: 'Social Media Dashboard',
      score: 92,
    },
  ];

  const winners = [
    { rank: 1, name: 'Sarah Chen', project: 'AI Tutor Bot', prize: '$5,000', avatar: 'SC' },
    { rank: 2, name: 'Mike Rodriguez', project: 'Smart Analytics', prize: '$3,000', avatar: 'MR' },
    { rank: 3, name: 'Emily Zhang', project: 'Learning Platform', prize: '$2,000', avatar: 'EZ' },
  ];

  return (
    <div className="space-y-6">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-orange-600 to-red-600 rounded-xl p-8 text-white">
        <div className="flex items-center justify-between mb-4">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <Zap className="w-8 h-8" />
              <h2 className="text-3xl font-bold">Hackathons</h2>
            </div>
            <p className="text-white/90">
              Compete, build amazing projects, and win exciting prizes!
            </p>
          </div>
          <div className="text-center">
            <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border-4 border-white/30 mb-2">
              <Trophy className="w-10 h-10" />
            </div>
            <p className="text-sm text-white/80">Win Big!</p>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white rounded-xl p-6 border border-gray-200">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
              <Zap className="w-5 h-5 text-orange-600" />
            </div>
            <span className="text-sm text-gray-600">Participated</span>
          </div>
          <p className="text-2xl font-semibold">8</p>
        </div>
        <div className="bg-white rounded-xl p-6 border border-gray-200">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
              <Trophy className="w-5 h-5 text-green-600" />
            </div>
            <span className="text-sm text-gray-600">Won</span>
          </div>
          <p className="text-2xl font-semibold">2</p>
        </div>
        <div className="bg-white rounded-xl p-6 border border-gray-200">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 bg-yellow-100 rounded-lg flex items-center justify-center">
              <Award className="w-5 h-5 text-yellow-600" />
            </div>
            <span className="text-sm text-gray-600">Total Prizes</span>
          </div>
          <p className="text-2xl font-semibold">$500</p>
        </div>
        <div className="bg-white rounded-xl p-6 border border-gray-200">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
              <Target className="w-5 h-5 text-purple-600" />
            </div>
            <span className="text-sm text-gray-600">Best Rank</span>
          </div>
          <p className="text-2xl font-semibold">#3</p>
        </div>
      </div>

      {/* Upcoming Hackathons */}
      <div className="bg-white rounded-xl p-6 border border-gray-200">
        <h3 className="text-lg font-semibold mb-4">Upcoming Hackathons</h3>
        <div className="space-y-4">
          {upcomingHackathons.map((hackathon) => (
            <div key={hackathon.id} className="p-6 border-2 border-orange-200 rounded-lg bg-gradient-to-br from-orange-50 to-red-50">
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <Zap className="w-6 h-6 text-orange-600" />
                    <h4 className="text-xl font-semibold">{hackathon.name}</h4>
                  </div>
                  <p className="text-sm text-gray-600 mb-4">Theme: {hackathon.theme}</p>
                  <div className="grid md:grid-cols-4 gap-4 mb-4">
                    <div className="flex items-center gap-2 text-sm">
                      <Calendar className="w-4 h-4 text-gray-500" />
                      <span>{hackathon.date}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Clock className="w-4 h-4 text-gray-500" />
                      <span>{hackathon.duration}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Users className="w-4 h-4 text-gray-500" />
                      <span>{hackathon.participants}/{hackathon.maxParticipants}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Trophy className="w-4 h-4 text-yellow-600" />
                      <span className="font-semibold text-yellow-600">{hackathon.prize}</span>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      hackathon.difficulty === 'Advanced' ? 'bg-red-100 text-red-700' :
                      hackathon.difficulty === 'Intermediate' ? 'bg-yellow-100 text-yellow-700' :
                      'bg-green-100 text-green-700'
                    }`}>
                      {hackathon.difficulty}
                    </span>
                    <span className="px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-xs font-medium">
                      Register by {hackathon.registrationDeadline}
                    </span>
                  </div>
                </div>
                <button className="px-6 py-3 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors font-medium whitespace-nowrap ml-4">
                  Register Now
                </button>
              </div>
              <div className="pt-4 border-t border-orange-200">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium">Registration Progress</span>
                  <span className="text-sm text-gray-600">
                    {Math.round((hackathon.participants / hackathon.maxParticipants) * 100)}% Full
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-orange-600 h-2 rounded-full" 
                    style={{ width: `${(hackathon.participants / hackathon.maxParticipants) * 100}%` }} 
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* My Hackathons & Recent Winners */}
      <div className="grid lg:grid-cols-3 gap-6">
        {/* My Hackathons */}
        <div className="lg:col-span-2 bg-white rounded-xl p-6 border border-gray-200">
          <h3 className="text-lg font-semibold mb-4">My Hackathons</h3>
          <div className="space-y-3">
            {myHackathons.map((hackathon) => (
              <div key={hackathon.id} className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h4 className="font-semibold mb-1">{hackathon.name}</h4>
                    <p className="text-sm text-gray-600 mb-2">Submission: {hackathon.submission}</p>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Calendar className="w-4 h-4" />
                      <span>{hackathon.date}</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center gap-2 mb-1">
                      <Trophy className="w-5 h-5 text-yellow-600" />
                      <span className="font-bold text-lg">#{hackathon.rank}</span>
                    </div>
                    {hackathon.prize && (
                      <p className="text-sm font-semibold text-green-600">{hackathon.prize}</p>
                    )}
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs text-gray-600">Score</span>
                      <span className="text-xs font-medium">{hackathon.score}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-green-600 h-2 rounded-full" style={{ width: `${hackathon.score}%` }} />
                    </div>
                  </div>
                  <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors text-xs font-medium">
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Winners */}
        <div className="bg-white rounded-xl p-6 border border-gray-200">
          <h3 className="text-lg font-semibold mb-4">Recent Winners</h3>
          <div className="space-y-3">
            {winners.map((winner) => (
              <div 
                key={winner.rank} 
                className={`p-4 rounded-lg border-2 ${
                  winner.rank === 1 ? 'border-yellow-300 bg-yellow-50' :
                  winner.rank === 2 ? 'border-gray-300 bg-gray-50' :
                  'border-orange-300 bg-orange-50'
                }`}
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${
                    winner.rank === 1 ? 'bg-yellow-500 text-white' :
                    winner.rank === 2 ? 'bg-gray-400 text-white' :
                    'bg-orange-500 text-white'
                  }`}>
                    #{winner.rank}
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold">{winner.name}</h4>
                    <p className="text-xs text-gray-600">{winner.project}</p>
                  </div>
                </div>
                <div className="flex items-center justify-between pt-2 border-t border-gray-300">
                  <span className="text-xs text-gray-600">Prize</span>
                  <span className="text-sm font-semibold text-green-600">{winner.prize}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Hackathon Rules */}
      <div className="bg-white rounded-xl p-6 border border-gray-200">
        <h3 className="text-lg font-semibold mb-4">Hackathon Rules & Guidelines</h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-medium mb-3">Eligibility</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-green-600 mt-0.5" />
                <span>Must be enrolled in an active internship tier</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-green-600 mt-0.5" />
                <span>Can participate individually or in teams (max 4 members)</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-green-600 mt-0.5" />
                <span>Projects must be original work created during hackathon</span>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium mb-3">Judging Criteria</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-green-600 mt-0.5" />
                <span>Innovation & Creativity (30%)</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-green-600 mt-0.5" />
                <span>Technical Implementation (40%)</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-green-600 mt-0.5" />
                <span>Presentation & Demo (30%)</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
