import { Search, Send, Paperclip, Video, Phone, MoreVertical, Users } from 'lucide-react';
import { useState } from 'react';

export default function MentorCommunication() {
  const [selectedChat, setSelectedChat] = useState<number>(1);

  const conversations = [
    {
      id: 1,
      name: 'Sarah Johnson',
      lastMessage: 'Thank you for the feedback!',
      time: '10:30 AM',
      unread: 2,
      online: true,
    },
    {
      id: 2,
      name: 'Michael Chen',
      lastMessage: 'Can we schedule a code review?',
      time: 'Yesterday',
      unread: 0,
      online: false,
    },
    {
      id: 3,
      name: 'Emily Rodriguez',
      lastMessage: 'I submitted the final project',
      time: '2 days ago',
      unread: 1,
      online: true,
    },
    {
      id: 4,
      name: 'Full Stack Dev - Group',
      lastMessage: 'David: When is the next session?',
      time: '3 days ago',
      unread: 0,
      online: false,
      isGroup: true,
    },
  ];

  const messages = [
    { id: 1, sender: 'Sarah Johnson', text: 'Hi! I have a question about the authentication module.', time: '10:15 AM', isOwn: false },
    { id: 2, sender: 'You', text: 'Sure! What would you like to know?', time: '10:18 AM', isOwn: true },
    { id: 3, sender: 'Sarah Johnson', text: 'I\'m having trouble implementing JWT refresh tokens.', time: '10:20 AM', isOwn: false },
    { id: 4, sender: 'You', text: 'Let me share a code example with you. I\'ll also schedule a quick call to walk through it.', time: '10:25 AM', isOwn: true },
    { id: 5, sender: 'Sarah Johnson', text: 'Thank you for the feedback!', time: '10:30 AM', isOwn: false },
  ];

  const announcements = [
    { id: 1, title: 'New Course Module Released', date: '2026-03-13', recipients: 'All Students' },
    { id: 2, title: 'Weekly Webinar - System Design', date: '2026-03-12', recipients: 'Full Stack Dev Group' },
    { id: 3, title: 'Project Submission Reminder', date: '2026-03-10', recipients: 'React Masterclass' },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-semibold mb-1">Communication Hub</h2>
        <p className="text-gray-600">Message interns and manage communications</p>
      </div>

      {/* Tabs */}
      <div className="flex gap-2 border-b border-gray-200">
        <button className="px-6 py-3 font-medium border-b-2 border-purple-600 text-purple-600">
          Messages
        </button>
        <button className="px-6 py-3 font-medium text-gray-600 hover:text-gray-900">
          Announcements
        </button>
        <button className="px-6 py-3 font-medium text-gray-600 hover:text-gray-900">
          Scheduled Calls
        </button>
      </div>

      {/* Messages Layout */}
      <div className="grid lg:grid-cols-3 gap-6 h-[600px]">
        {/* Conversations List */}
        <div className="bg-white rounded-xl border border-gray-200 overflow-hidden flex flex-col">
          <div className="p-4 border-b border-gray-200">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search conversations..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>
          </div>

          <div className="flex-1 overflow-y-auto">
            {conversations.map((conv) => (
              <div
                key={conv.id}
                onClick={() => setSelectedChat(conv.id)}
                className={`p-4 border-b border-gray-200 cursor-pointer transition-colors ${
                  selectedChat === conv.id ? 'bg-purple-50' : 'hover:bg-gray-50'
                }`}
              >
                <div className="flex items-start gap-3">
                  <div className="relative">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-semibold">
                      {conv.isGroup ? <Users className="w-6 h-6" /> : conv.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    {conv.online && !conv.isGroup && (
                      <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></div>
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between mb-1">
                      <p className="font-medium truncate">{conv.name}</p>
                      <span className="text-xs text-gray-500">{conv.time}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <p className="text-sm text-gray-600 truncate">{conv.lastMessage}</p>
                      {conv.unread > 0 && (
                        <span className="ml-2 px-2 py-0.5 bg-purple-600 text-white text-xs rounded-full">
                          {conv.unread}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Chat Area */}
        <div className="lg:col-span-2 bg-white rounded-xl border border-gray-200 flex flex-col">
          {/* Chat Header */}
          <div className="p-4 border-b border-gray-200 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-semibold">
                  SJ
                </div>
                <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></div>
              </div>
              <div>
                <p className="font-semibold">Sarah Johnson</p>
                <p className="text-sm text-green-600">Online</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                <Phone className="w-5 h-5 text-gray-600" />
              </button>
              <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                <Video className="w-5 h-5 text-gray-600" />
              </button>
              <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                <MoreVertical className="w-5 h-5 text-gray-600" />
              </button>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.isOwn ? 'justify-end' : 'justify-start'}`}
              >
                <div className={`max-w-[70%] ${message.isOwn ? 'order-2' : 'order-1'}`}>
                  {!message.isOwn && (
                    <p className="text-xs text-gray-500 mb-1">{message.sender}</p>
                  )}
                  <div
                    className={`px-4 py-2 rounded-lg ${
                      message.isOwn
                        ? 'bg-purple-600 text-white'
                        : 'bg-gray-100 text-gray-900'
                    }`}
                  >
                    <p>{message.text}</p>
                  </div>
                  <p className="text-xs text-gray-500 mt-1">{message.time}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Message Input */}
          <div className="p-4 border-t border-gray-200">
            <div className="flex items-center gap-2">
              <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                <Paperclip className="w-5 h-5 text-gray-600" />
              </button>
              <input
                type="text"
                placeholder="Type a message..."
                className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
              <button className="p-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors">
                <Send className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Announcements Section */}
      <div className="bg-white rounded-xl p-6 border border-gray-200">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold">Recent Announcements</h3>
          <button className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700">
            New Announcement
          </button>
        </div>
        <div className="space-y-3">
          {announcements.map((announcement) => (
            <div key={announcement.id} className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
              <div className="flex items-start justify-between">
                <div>
                  <h4 className="font-medium mb-1">{announcement.title}</h4>
                  <div className="flex items-center gap-3 text-sm text-gray-600">
                    <span>To: {announcement.recipients}</span>
                    <span>•</span>
                    <span>{announcement.date}</span>
                  </div>
                </div>
                <button className="text-sm text-purple-600 hover:text-purple-700">Edit</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
