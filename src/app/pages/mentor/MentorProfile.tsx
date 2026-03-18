import { Award, BookOpen, Star, Users, Mail, MapPin, Phone, Globe, Linkedin, Edit, Plus } from 'lucide-react';

export default function MentorProfile() {
  const stats = [
    { label: 'Total Interns', value: '158', icon: Users },
    { label: 'Courses Created', value: '24', icon: BookOpen },
    { label: 'Average Rating', value: '4.9', icon: Star },
    { label: 'Certifications Issued', value: '142', icon: Award },
  ];

  const expertise = ['React', 'Node.js', 'Python', 'System Design', 'Database Design', 'Cloud Architecture', 'DevOps', 'Agile'];

  const courses = [
    { id: 1, title: 'Full Stack Development', enrolled: 24, rating: 4.9, completed: 95 },
    { id: 2, title: 'React Masterclass', enrolled: 18, rating: 4.8, completed: 88 },
    { id: 3, title: 'Backend Development', enrolled: 16, rating: 4.7, completed: 82 },
  ];

  const reviews = [
    { id: 1, student: 'Sarah Johnson', rating: 5, comment: 'Excellent mentor! Very patient and knowledgeable.', date: '2026-03-10' },
    { id: 2, student: 'Michael Chen', rating: 5, comment: 'Best course I\'ve taken. Clear explanations and great support.', date: '2026-03-08' },
    { id: 3, student: 'Emily Rodriguez', rating: 4, comment: 'Great content and practical examples. Highly recommended!', date: '2026-03-05' },
  ];

  return (
    <div className="max-w-6xl">
      {/* Profile Header */}
      <div className="bg-white rounded-xl border border-gray-200 overflow-hidden mb-6">
        <div className="h-32 bg-gradient-to-r from-purple-600 to-pink-600"></div>
        <div className="px-8 pb-8">
          <div className="flex items-end justify-between -mt-16 mb-6">
            <div className="flex items-end gap-6">
              <div className="w-32 h-32 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full border-4 border-white flex items-center justify-center text-white text-4xl font-semibold">
                JS
              </div>
              <div className="pb-2">
                <h1 className="text-3xl font-semibold mb-1">Dr. John Smith</h1>
                <p className="text-gray-600">Senior Software Engineer & Mentor</p>
                <div className="flex items-center gap-2 mt-2">
                  <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  <span className="font-semibold">4.9</span>
                  <span className="text-gray-500">(158 reviews)</span>
                </div>
              </div>
            </div>
            <button className="flex items-center gap-2 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 mb-2">
              <Edit className="w-4 h-4" />
              Edit Profile
            </button>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            <div className="flex items-center gap-2 text-gray-600">
              <Mail className="w-4 h-4" />
              <span className="text-sm">john.smith@email.com</span>
            </div>
            <div className="flex items-center gap-2 text-gray-600">
              <Phone className="w-4 h-4" />
              <span className="text-sm">+1 (555) 987-6543</span>
            </div>
            <div className="flex items-center gap-2 text-gray-600">
              <MapPin className="w-4 h-4" />
              <span className="text-sm">San Francisco, CA</span>
            </div>
            <div className="flex items-center gap-2 text-gray-600">
              <Users className="w-4 h-4" />
              <span className="text-sm">158 Total Interns</span>
            </div>
          </div>

          <div className="flex gap-3">
            <a href="#" className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
              <Linkedin className="w-4 h-4" />
              LinkedIn
            </a>
            <a href="#" className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
              <Globe className="w-4 h-4" />
              Website
            </a>
          </div>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid md:grid-cols-4 gap-6 mb-6">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white rounded-xl p-6 border border-gray-200">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-3">
              <stat.icon className="w-6 h-6 text-purple-600" />
            </div>
            <h3 className="text-2xl font-semibold mb-1">{stat.value}</h3>
            <p className="text-sm text-gray-600">{stat.label}</p>
          </div>
        ))}
      </div>

      {/* About & Expertise */}
      <div className="grid lg:grid-cols-3 gap-6 mb-6">
        {/* About */}
        <div className="lg:col-span-2 bg-white rounded-xl p-6 border border-gray-200">
          <h2 className="text-xl font-semibold mb-4">About</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Experienced software engineer with 12+ years in the industry. Passionate about teaching and 
            helping aspiring developers reach their full potential. Specialized in full-stack development, 
            system design, and cloud architecture.
          </p>
          <p className="text-gray-700 leading-relaxed">
            I've worked with Fortune 500 companies and startups, leading engineering teams and building 
            scalable applications. Now dedicating my time to mentoring the next generation of developers 
            through practical, hands-on learning experiences.
          </p>
        </div>

        {/* Expertise */}
        <div className="bg-white rounded-xl p-6 border border-gray-200">
          <h2 className="text-xl font-semibold mb-4">Areas of Expertise</h2>
          <div className="flex flex-wrap gap-2">
            {expertise.map((skill, index) => (
              <span key={index} className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm">
                {skill}
              </span>
            ))}
          </div>
          <button className="mt-4 w-full flex items-center justify-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
            <Plus className="w-4 h-4" />
            Add Skill
          </button>
        </div>
      </div>

      {/* My Courses */}
      <div className="bg-white rounded-xl p-6 border border-gray-200 mb-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold">My Courses</h2>
          <button className="text-sm text-purple-600 hover:text-purple-700">View All</button>
        </div>
        <div className="grid md:grid-cols-3 gap-4">
          {courses.map((course) => (
            <div key={course.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-lg transition-shadow">
              <h3 className="font-semibold mb-2">{course.title}</h3>
              <div className="space-y-2 mb-4">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600">Enrolled:</span>
                  <span className="font-medium">{course.enrolled} interns</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600">Rating:</span>
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span className="font-medium">{course.rating}</span>
                  </div>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600">Completion:</span>
                  <span className="font-medium">{course.completed}%</span>
                </div>
              </div>
              <button className="w-full px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700">
                Manage Course
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Recent Reviews */}
      <div className="bg-white rounded-xl p-6 border border-gray-200">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold">Recent Reviews</h2>
          <button className="text-sm text-purple-600 hover:text-purple-700">View All</button>
        </div>
        <div className="space-y-4">
          {reviews.map((review) => (
            <div key={review.id} className="p-4 border border-gray-200 rounded-lg">
              <div className="flex items-start justify-between mb-2">
                <div>
                  <p className="font-medium">{review.student}</p>
                  <div className="flex items-center gap-1 mt-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < review.rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                </div>
                <span className="text-sm text-gray-500">{review.date}</span>
              </div>
              <p className="text-gray-700">{review.comment}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
