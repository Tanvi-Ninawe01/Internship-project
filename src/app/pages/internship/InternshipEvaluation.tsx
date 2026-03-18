import { FileCheck, Clock, CheckCircle, Award, TrendingUp, Star } from 'lucide-react';
import { BarChart, Bar, RadarChart, Radar, PolarGrid, PolarAngleAxis, PolarRadiusAxis, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

export default function InternshipEvaluation() {
  const skillsData = [
    { skill: 'Technical Skills', score: 85 },
    { skill: 'Problem Solving', score: 78 },
    { skill: 'Communication', score: 92 },
    { skill: 'Teamwork', score: 88 },
    { skill: 'Time Management', score: 75 },
  ];

  const radarData = [
    { subject: 'Frontend', score: 90, fullMark: 100 },
    { subject: 'Backend', score: 75, fullMark: 100 },
    { subject: 'Database', score: 80, fullMark: 100 },
    { subject: 'DevOps', score: 65, fullMark: 100 },
    { subject: 'Testing', score: 70, fullMark: 100 },
  ];

  const evaluations = [
    {
      id: 1,
      type: 'Level Completion',
      evaluator: 'Dr. Sarah Johnson',
      date: '2026-03-08',
      level: 'Level 1',
      status: 'completed',
      score: 92,
      feedback: 'Excellent understanding of fundamentals. Great code organization.',
    },
    {
      id: 2,
      type: 'Project Review',
      evaluator: 'John Smith',
      date: '2026-03-12',
      project: 'E-commerce Cart',
      status: 'completed',
      score: 88,
      feedback: 'Well-implemented features. Could improve error handling.',
    },
    {
      id: 3,
      type: 'Mid-term Assessment',
      evaluator: 'Emily Davis',
      date: '2026-03-15',
      status: 'pending',
      score: null,
      feedback: null,
    },
  ];

  return (
    <div className="space-y-6">
      {/* Overall Performance */}
      <div className="bg-gradient-to-br from-indigo-600 to-blue-600 rounded-xl p-6 text-white">
        <h2 className="text-xl font-semibold mb-4">Overall Performance</h2>
        <div className="grid md:grid-cols-4 gap-4">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
            <div className="flex items-center gap-2 mb-2">
              <Award className="w-5 h-5" />
              <span className="text-sm">Overall Score</span>
            </div>
            <p className="text-3xl font-bold">87%</p>
            <p className="text-xs text-white/70 mt-1">Above Average</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
            <div className="flex items-center gap-2 mb-2">
              <CheckCircle className="w-5 h-5" />
              <span className="text-sm">Completed</span>
            </div>
            <p className="text-3xl font-bold">12</p>
            <p className="text-xs text-white/70 mt-1">Evaluations</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
            <div className="flex items-center gap-2 mb-2">
              <Clock className="w-5 h-5" />
              <span className="text-sm">Pending</span>
            </div>
            <p className="text-3xl font-bold">3</p>
            <p className="text-xs text-white/70 mt-1">Reviews</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
            <div className="flex items-center gap-2 mb-2">
              <TrendingUp className="w-5 h-5" />
              <span className="text-sm">Trend</span>
            </div>
            <p className="text-3xl font-bold">+5%</p>
            <p className="text-xs text-white/70 mt-1">This month</p>
          </div>
        </div>
      </div>

      {/* Charts */}
      <div className="grid lg:grid-cols-2 gap-6">
        {/* Skill Scores */}
        <div className="bg-white rounded-xl p-6 border border-gray-200">
          <h3 className="text-lg font-semibold mb-4">Skill Assessment</h3>
          <ResponsiveContainer width="100%" height={280}>
            <BarChart data={skillsData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis dataKey="skill" stroke="#9ca3af" angle={-15} textAnchor="end" height={80} />
              <YAxis stroke="#9ca3af" />
              <Tooltip />
              <Bar dataKey="score" fill="#6366f1" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Technical Competency */}
        <div className="bg-white rounded-xl p-6 border border-gray-200">
          <h3 className="text-lg font-semibold mb-4">Technical Competency</h3>
          <ResponsiveContainer width="100%" height={280}>
            <RadarChart data={radarData}>
              <PolarGrid />
              <PolarAngleAxis dataKey="subject" />
              <PolarRadiusAxis angle={90} domain={[0, 100]} />
              <Radar name="Score" dataKey="score" stroke="#6366f1" fill="#6366f1" fillOpacity={0.6} />
              <Tooltip />
            </RadarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Evaluation History */}
      <div className="bg-white rounded-xl p-6 border border-gray-200">
        <h3 className="text-lg font-semibold mb-4">Evaluation History</h3>
        <div className="space-y-4">
          {evaluations.map((evaluation) => (
            <div 
              key={evaluation.id} 
              className={`p-4 border-2 rounded-lg ${
                evaluation.status === 'completed' ? 'border-green-200 bg-green-50' : 'border-yellow-200 bg-yellow-50'
              }`}
            >
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-start gap-3">
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                    evaluation.status === 'completed' ? 'bg-green-100' : 'bg-yellow-100'
                  }`}>
                    {evaluation.status === 'completed' ? (
                      <CheckCircle className="w-5 h-5 text-green-600" />
                    ) : (
                      <Clock className="w-5 h-5 text-yellow-600" />
                    )}
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">{evaluation.type}</h4>
                    <div className="flex flex-wrap gap-2 text-sm text-gray-600">
                      <span>Evaluator: {evaluation.evaluator}</span>
                      <span>•</span>
                      <span>Date: {evaluation.date}</span>
                    </div>
                    {evaluation.level && (
                      <span className="inline-block mt-2 px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-xs font-medium">
                        {evaluation.level}
                      </span>
                    )}
                    {evaluation.project && (
                      <span className="inline-block mt-2 px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-xs font-medium">
                        {evaluation.project}
                      </span>
                    )}
                  </div>
                </div>
                {evaluation.score && (
                  <div className="text-right">
                    <div className="flex items-center gap-1 text-2xl font-bold text-green-600">
                      <Star className="w-6 h-6 fill-green-600" />
                      {evaluation.score}
                    </div>
                    <p className="text-xs text-gray-600">Score</p>
                  </div>
                )}
              </div>
              {evaluation.feedback && (
                <div className="mt-3 pt-3 border-t border-gray-300">
                  <p className="text-sm text-gray-700">
                    <span className="font-medium">Feedback:</span> {evaluation.feedback}
                  </p>
                </div>
              )}
              {evaluation.status === 'pending' && (
                <div className="mt-3 pt-3 border-t border-yellow-300">
                  <p className="text-sm text-yellow-700">⏳ Evaluation in progress. Results will be available soon.</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Performance Insights */}
      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl p-6 border border-gray-200">
          <h3 className="text-lg font-semibold mb-4">Strengths</h3>
          <div className="space-y-3">
            <div className="flex items-start gap-3 p-3 bg-green-50 rounded-lg border border-green-200">
              <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
              <div>
                <p className="font-medium text-green-900">Excellent Communication</p>
                <p className="text-sm text-green-700">Consistently clear in documentation and team collaboration</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-3 bg-green-50 rounded-lg border border-green-200">
              <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
              <div>
                <p className="font-medium text-green-900">Strong Frontend Skills</p>
                <p className="text-sm text-green-700">Proficient in React and modern CSS frameworks</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 border border-gray-200">
          <h3 className="text-lg font-semibold mb-4">Areas for Improvement</h3>
          <div className="space-y-3">
            <div className="flex items-start gap-3 p-3 bg-yellow-50 rounded-lg border border-yellow-200">
              <FileCheck className="w-5 h-5 text-yellow-600 mt-0.5" />
              <div>
                <p className="font-medium text-yellow-900">DevOps Knowledge</p>
                <p className="text-sm text-yellow-700">Consider learning more about CI/CD and deployment</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-3 bg-yellow-50 rounded-lg border border-yellow-200">
              <FileCheck className="w-5 h-5 text-yellow-600 mt-0.5" />
              <div>
                <p className="font-medium text-yellow-900">Time Management</p>
                <p className="text-sm text-yellow-700">Work on meeting deadlines more consistently</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
