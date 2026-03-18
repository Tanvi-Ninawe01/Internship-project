import { MessageSquare, Video, Calendar, Star, Send } from 'lucide-react';

export default function InternMentorInteraction() {
  const mentors = [
    {
      id: 1,
      name: 'Dr. John Smith',
      role: 'Senior Software Engineer',
      expertise: ['React', 'Node.js', 'System Design'],
      rating: 4.8,
      sessions: 12,
      nextSession: '2026-03-16 10:00 AM',
      avatar: 'JS',
    },
    {
      id: 2,
      name: 'Sarah Johnson',
      role: 'UI/UX Designer',
      expertise: ['Figma', 'User Research', 'Prototyping'],
      rating: 4.9,
      sessions: 8,
      nextSession: '2026-03-18 2:00 PM',
      avatar: 'SJ',
    },
  ];

  const messages = [
    { id: 1, mentor: 'Dr. John Smith', message: 'Great work on the authentication module!', time: '10:30 AM', unread: false },
    { id: 2, mentor: 'Sarah Johnson', message: 'Can you share your design mockups?', time: '2:15 PM', unread: true },
    { id: 3, mentor: 'Dr. John Smith', message: 'Let\'s schedule a code review session', time: 'Yesterday', unread: false },
  ];

  const feedback = [
    {
      id: 1,
      mentor: 'Dr. John Smith',
      project: 'E-Commerce Website',
      rating: 4.5,
      comment: 'Excellent work on the authentication module. Consider adding more error handling.',
      date: '2026-03-10',
    },
    {
      id: 2,
      mentor: 'Sarah Johnson',
      project: 'Task Management App',
      rating: 5,
      comment: 'Outstanding UI design! Very user-friendly and intuitive.',
      date: '2026-03-05',
    },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-semibold mb-1">Mentor Interaction</h2>
        <p className="text-gray-600">Connect with your mentors and receive guidance</p>
      </div>

      {/* Mentors */}
      <div className="grid lg:grid-cols-2 gap-6">
        {mentors.map((mentor) => (
          <div key={mentor.id} className="bg-white rounded-xl p-6 border border-gray-200">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white text-xl font-semibold">
                {mentor.avatar}
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-lg">{mentor.name}</h3>
                <p className="text-sm text-gray-600">{mentor.role}</p>
                <div className="flex items-center gap-1 mt-1">
                  <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  <span className="text-sm font-medium">{mentor.rating}</span>
                  <span className="text-sm text-gray-500">({mentor.sessions} sessions)</span>
                </div>
              </div>
            </div>

            <div className="mb-4">
              <p className="text-sm text-gray-600 mb-2">Expertise:</p>
              <div className="flex flex-wrap gap-2">
                {mentor.expertise.map((skill, index) => (
                  <span key={index} className="text-xs px-3 py-1 bg-blue-100 text-blue-700 rounded-full">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="p-3 bg-blue-50 rounded-lg mb-4">
              <div className="flex items-center gap-2 text-sm">
                <Calendar className="w-4 h-4 text-blue-600" />
                <span className="text-gray-700">Next Session:</span>
                <span className="font-medium text-blue-700">{mentor.nextSession}</span>
              </div>
            </div>

            <div className="flex gap-2">
              <button className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                <MessageSquare className="w-4 h-4" />
                Message
              </button>
              <button className="flex-1 flex items-center justify-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                <Video className="w-4 h-4" />
                Schedule Call
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Messages & Feedback */}
      <div className="grid lg:grid-cols-2 gap-6">
        {/* Recent Messages */}
        <div className="bg-white rounded-xl border border-gray-200">
          <div className="p-6 border-b border-gray-200">
            <h3 className="text-lg font-semibold">Recent Messages</h3>
          </div>
          <div className="divide-y divide-gray-200">
            {messages.map((msg) => (
              <div key={msg.id} className="p-4 hover:bg-gray-50 transition-colors cursor-pointer">
                <div className="flex items-start justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-blue-500" style={{ opacity: msg.unread ? 1 : 0 }} />
                    <span className="font-medium">{msg.mentor}</span>
                  </div>
                  <span className="text-xs text-gray-500">{msg.time}</span>
                </div>
                <p className="text-sm text-gray-600 ml-4">{msg.message}</p>
              </div>
            ))}
          </div>
          <div className="p-4 border-t border-gray-200">
            <div className="flex gap-2">
              <input
                type="text"
                placeholder="Type a message..."
                className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                <Send className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Recent Feedback */}
        <div className="bg-white rounded-xl border border-gray-200">
          <div className="p-6 border-b border-gray-200">
            <h3 className="text-lg font-semibold">Recent Feedback</h3>
          </div>
          <div className="p-6 space-y-4">
            {feedback.map((item) => (
              <div key={item.id} className="p-4 border border-gray-200 rounded-lg">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <p className="font-medium">{item.mentor}</p>
                    <p className="text-sm text-gray-600">{item.project}</p>
                  </div>
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < Math.floor(item.rating)
                            ? 'fill-yellow-400 text-yellow-400'
                            : 'text-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                </div>
                <p className="text-sm text-gray-700 mb-2">{item.comment}</p>
                <p className="text-xs text-gray-500">{item.date}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scheduled Sessions */}
      <div className="bg-white rounded-xl p-6 border border-gray-200">
        <h3 className="text-lg font-semibold mb-4">Upcoming Sessions</h3>
        <div className="space-y-3">
          <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <Video className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <p className="font-medium">Code Review Session</p>
                <p className="text-sm text-gray-600">with Dr. John Smith</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-sm font-medium">March 16, 2026</p>
              <p className="text-sm text-gray-600">10:00 AM - 11:00 AM</p>
            </div>
            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
              Join
            </button>
          </div>
          <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                <MessageSquare className="w-6 h-6 text-purple-600" />
              </div>
              <div>
                <p className="font-medium">Design Review</p>
                <p className="text-sm text-gray-600">with Sarah Johnson</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-sm font-medium">March 18, 2026</p>
              <p className="text-sm text-gray-600">2:00 PM - 3:00 PM</p>
            </div>
            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
              Join
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
