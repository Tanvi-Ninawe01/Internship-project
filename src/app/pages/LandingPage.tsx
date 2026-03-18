import { Link } from 'react-router';
import { GraduationCap, Users, Briefcase, Award, TrendingUp, BookOpen, Building, Layers } from 'lucide-react';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
              <GraduationCap className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-semibold">SyncSaS LMS & Career Platform</span>
          </div>
          <nav className="flex items-center gap-4">
            <a href="#features" className="text-gray-600 hover:text-gray-900">Features</a>
            <a href="#about" className="text-gray-600 hover:text-gray-900">About</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 py-16 text-center">
        <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Welcome to SyncSaS Platform
        </h1>
        <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
          Connect interns with mentors, manage internships, and accelerate your career journey with our comprehensive platform.
        </p>

        {/* Role Selection Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {/* Intern Card */}
          <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-shadow">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Briefcase className="w-8 h-8 text-blue-600" />
            </div>
            <h2 className="text-xl font-semibold mb-3">I'm an Intern</h2>
            <p className="text-gray-600 mb-6 text-sm">
              Start your learning journey, work on projects, and build your career.
            </p>
            <ul className="text-left space-y-2 mb-6 text-sm">
              <li className="flex items-center gap-2 text-gray-700">
                <Award className="w-4 h-4 text-blue-600" />
                Earn certificates
              </li>
              <li className="flex items-center gap-2 text-gray-700">
                <TrendingUp className="w-4 h-4 text-blue-600" />
                Track progress
              </li>
              <li className="flex items-center gap-2 text-gray-700">
                <BookOpen className="w-4 h-4 text-blue-600" />
                Access resources
              </li>
            </ul>
            <Link
              to="/intern/register"
              className="block w-full bg-blue-600 text-white py-2.5 rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium"
            >
              Get Started
            </Link>
          </div>

          {/* Mentor Card */}
          <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-shadow">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="w-8 h-8 text-purple-600" />
            </div>
            <h2 className="text-xl font-semibold mb-3">I'm a Mentor</h2>
            <p className="text-gray-600 mb-6 text-sm">
              Create courses, manage interns, evaluate projects, and earn.
            </p>
            <ul className="text-left space-y-2 mb-6 text-sm">
              <li className="flex items-center gap-2 text-gray-700">
                <Users className="w-4 h-4 text-purple-600" />
                Manage interns
              </li>
              <li className="flex items-center gap-2 text-gray-700">
                <TrendingUp className="w-4 h-4 text-purple-600" />
                Track metrics
              </li>
              <li className="flex items-center gap-2 text-gray-700">
                <Award className="w-4 h-4 text-purple-600" />
                Monetize expertise
              </li>
            </ul>
            <Link
              to="/mentor"
              className="block w-full bg-purple-600 text-white py-2.5 rounded-lg hover:bg-purple-700 transition-colors text-sm font-medium"
            >
              Get Started
            </Link>
          </div>

          {/* Internship Card */}
          <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-shadow">
            <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Layers className="w-8 h-8 text-indigo-600" />
            </div>
            <h2 className="text-xl font-semibold mb-3">Internship Hub</h2>
            <p className="text-gray-600 mb-6 text-sm">
              Manage complete internship lifecycle with levels and tasks.
            </p>
            <ul className="text-left space-y-2 mb-6 text-sm">
              <li className="flex items-center gap-2 text-gray-700">
                <Layers className="w-4 h-4 text-indigo-600" />
                Multi-level system
              </li>
              <li className="flex items-center gap-2 text-gray-700">
                <TrendingUp className="w-4 h-4 text-indigo-600" />
                Team projects
              </li>
              <li className="flex items-center gap-2 text-gray-700">
                <Award className="w-4 h-4 text-indigo-600" />
                Hackathons & rewards
              </li>
            </ul>
            <Link
              to="/internship"
              className="block w-full bg-indigo-600 text-white py-2.5 rounded-lg hover:bg-indigo-700 transition-colors text-sm font-medium"
            >
              Explore
            </Link>
          </div>

          {/* Company Card */}
          <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-shadow">
            <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Building className="w-8 h-8 text-emerald-600" />
            </div>
            <h2 className="text-xl font-semibold mb-3">I'm a Company</h2>
            <p className="text-gray-600 mb-6 text-sm">
              Post internships, hire interns, and manage recruitment.
            </p>
            <ul className="text-left space-y-2 mb-6 text-sm">
              <li className="flex items-center gap-2 text-gray-700">
                <Briefcase className="w-4 h-4 text-emerald-600" />
                Post internships
              </li>
              <li className="flex items-center gap-2 text-gray-700">
                <Users className="w-4 h-4 text-emerald-600" />
                Manage applicants
              </li>
              <li className="flex items-center gap-2 text-gray-700">
                <TrendingUp className="w-4 h-4 text-emerald-600" />
                Track analytics
              </li>
            </ul>
            <Link
              to="/company"
              className="block w-full bg-emerald-600 text-white py-2.5 rounded-lg hover:bg-emerald-700 transition-colors text-sm font-medium"
            >
              Get Started
            </Link>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-semibold text-center mb-12">Platform Features</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white rounded-xl p-6 border border-gray-100">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
              <BookOpen className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Learning Management</h3>
            <p className="text-gray-600">Comprehensive LMS with courses, assignments, and progress tracking.</p>
          </div>
          <div className="bg-white rounded-xl p-6 border border-gray-100">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
              <Users className="w-6 h-6 text-purple-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Mentorship Programs</h3>
            <p className="text-gray-600">Direct interaction between mentors and interns with feedback systems.</p>
          </div>
          <div className="bg-white rounded-xl p-6 border border-gray-100">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
              <TrendingUp className="w-6 h-6 text-green-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Career Development</h3>
            <p className="text-gray-600">Job opportunities, portfolio building, and skill development.</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-white mt-16">
        <div className="max-w-7xl mx-auto px-6 py-8 text-center text-gray-600">
          <p>&copy; 2026 SyncSaS LMS & Career Platform. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}