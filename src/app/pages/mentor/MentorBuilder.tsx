import { useState } from 'react';
import { Plus, Save, Eye, BookOpen, Video, FileText, CheckCircle } from 'lucide-react';

export default function MentorBuilder() {
  const [activeTab, setActiveTab] = useState<'create' | 'manage'>('create');

  const myCourses = [
    { id: 1, title: 'Full Stack Development', modules: 12, students: 24, status: 'published' },
    { id: 2, title: 'React Masterclass', modules: 8, students: 18, status: 'published' },
    { id: 3, title: 'Backend Development', modules: 10, students: 16, status: 'draft' },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-semibold mb-1">Course & Internship Builder</h2>
          <p className="text-gray-600">Create and manage your courses and internship programs</p>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex gap-2 border-b border-gray-200">
        <button
          onClick={() => setActiveTab('create')}
          className={`px-6 py-3 font-medium transition-colors ${
            activeTab === 'create'
              ? 'border-b-2 border-purple-600 text-purple-600'
              : 'text-gray-600 hover:text-gray-900'
          }`}
        >
          Create New
        </button>
        <button
          onClick={() => setActiveTab('manage')}
          className={`px-6 py-3 font-medium transition-colors ${
            activeTab === 'manage'
              ? 'border-b-2 border-purple-600 text-purple-600'
              : 'text-gray-600 hover:text-gray-900'
          }`}
        >
          Manage Courses
        </button>
      </div>

      {activeTab === 'create' ? (
        <div className="max-w-4xl">
          {/* Course Basic Info */}
          <div className="bg-white rounded-xl p-6 border border-gray-200 mb-6">
            <h3 className="text-lg font-semibold mb-4">Basic Information</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">Course Title</label>
                <input
                  type="text"
                  placeholder="e.g., Advanced React Development"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Category</label>
                  <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500">
                    <option>Select Category</option>
                    <option>Web Development</option>
                    <option>Mobile Development</option>
                    <option>Data Science</option>
                    <option>DevOps</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Difficulty Level</label>
                  <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500">
                    <option>Beginner</option>
                    <option>Intermediate</option>
                    <option>Advanced</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Description</label>
                <textarea
                  rows={4}
                  placeholder="Describe what students will learn in this course..."
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>
              <div className="grid md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Duration (weeks)</label>
                  <input
                    type="number"
                    placeholder="8"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Price ($)</label>
                  <input
                    type="number"
                    placeholder="299"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Max Students</label>
                  <input
                    type="number"
                    placeholder="30"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Course Curriculum */}
          <div className="bg-white rounded-xl p-6 border border-gray-200 mb-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold">Curriculum</h3>
              <button className="flex items-center gap-2 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700">
                <Plus className="w-4 h-4" />
                Add Module
              </button>
            </div>

            <div className="space-y-4">
              {/* Module 1 */}
              <div className="border border-gray-200 rounded-lg p-4">
                <div className="flex items-center justify-between mb-3">
                  <h4 className="font-semibold">Module 1: Introduction to React</h4>
                  <button className="text-sm text-purple-600">Edit</button>
                </div>
                <div className="space-y-2 ml-4">
                  <div className="flex items-center gap-2 text-sm">
                    <Video className="w-4 h-4 text-gray-400" />
                    <span>Video: Getting Started with React</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <FileText className="w-4 h-4 text-gray-400" />
                    <span>Reading: React Documentation</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle className="w-4 h-4 text-gray-400" />
                    <span>Assignment: Build Your First Component</span>
                  </div>
                </div>
                <button className="mt-3 text-sm text-purple-600 hover:text-purple-700">
                  + Add Lesson
                </button>
              </div>

              {/* Module 2 */}
              <div className="border border-gray-200 rounded-lg p-4">
                <div className="flex items-center justify-between mb-3">
                  <h4 className="font-semibold">Module 2: State Management</h4>
                  <button className="text-sm text-purple-600">Edit</button>
                </div>
                <div className="space-y-2 ml-4">
                  <div className="flex items-center gap-2 text-sm">
                    <Video className="w-4 h-4 text-gray-400" />
                    <span>Video: Understanding State and Props</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <FileText className="w-4 h-4 text-gray-400" />
                    <span>Reading: React Hooks Guide</span>
                  </div>
                </div>
                <button className="mt-3 text-sm text-purple-600 hover:text-purple-700">
                  + Add Lesson
                </button>
              </div>

              <button className="w-full py-3 border-2 border-dashed border-gray-300 rounded-lg text-gray-600 hover:border-purple-400 hover:text-purple-600 transition-colors">
                + Add New Module
              </button>
            </div>
          </div>

          {/* Requirements & Outcomes */}
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <h3 className="text-lg font-semibold mb-4">Prerequisites</h3>
              <div className="space-y-2 mb-4">
                <div className="flex items-center gap-2 p-2 bg-gray-50 rounded">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  <span className="text-sm">Basic JavaScript knowledge</span>
                </div>
                <div className="flex items-center gap-2 p-2 bg-gray-50 rounded">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  <span className="text-sm">HTML & CSS fundamentals</span>
                </div>
              </div>
              <button className="text-sm text-purple-600 hover:text-purple-700">+ Add Prerequisite</button>
            </div>

            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <h3 className="text-lg font-semibold mb-4">Learning Outcomes</h3>
              <div className="space-y-2 mb-4">
                <div className="flex items-center gap-2 p-2 bg-gray-50 rounded">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  <span className="text-sm">Build production-ready React apps</span>
                </div>
                <div className="flex items-center gap-2 p-2 bg-gray-50 rounded">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  <span className="text-sm">Master state management</span>
                </div>
              </div>
              <button className="text-sm text-purple-600 hover:text-purple-700">+ Add Outcome</button>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-4">
            <button className="flex items-center gap-2 px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700">
              <Save className="w-4 h-4" />
              Save as Draft
            </button>
            <button className="flex items-center gap-2 px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-50">
              <Eye className="w-4 h-4" />
              Preview
            </button>
            <button className="flex items-center gap-2 px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700">
              <BookOpen className="w-4 h-4" />
              Publish Course
            </button>
          </div>
        </div>
      ) : (
        <div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {myCourses.map((course) => (
              <div key={course.id} className="bg-white rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-shadow">
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                    <BookOpen className="w-6 h-6 text-purple-600" />
                  </div>
                  <span
                    className={`text-xs px-3 py-1 rounded-full ${
                      course.status === 'published'
                        ? 'bg-green-100 text-green-700'
                        : 'bg-gray-100 text-gray-700'
                    }`}
                  >
                    {course.status}
                  </span>
                </div>
                <h3 className="font-semibold mb-2">{course.title}</h3>
                <div className="space-y-2 mb-4 text-sm text-gray-600">
                  <p>{course.modules} modules</p>
                  <p>{course.students} enrolled students</p>
                </div>
                <div className="flex gap-2">
                  <button className="flex-1 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 text-sm">
                    Edit
                  </button>
                  <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 text-sm">
                    Analytics
                  </button>
                </div>
              </div>
            ))}

            {/* Add New Course Card */}
            <div className="border-2 border-dashed border-gray-300 rounded-xl p-6 flex flex-col items-center justify-center hover:border-purple-400 transition-colors cursor-pointer">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-3">
                <Plus className="w-6 h-6 text-purple-600" />
              </div>
              <p className="font-medium text-gray-900 mb-1">Create New Course</p>
              <p className="text-sm text-gray-500 text-center">
                Start building your next course
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
