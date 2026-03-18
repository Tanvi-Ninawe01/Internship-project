import { useState } from 'react';
import { useNavigate } from 'react-router';
import { User, GraduationCap, Code, Briefcase, CheckCircle, ArrowRight, ArrowLeft } from 'lucide-react';

export default function InternRegistration() {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 5;

  const steps = [
    { number: 1, title: 'Personal Details', icon: User },
    { number: 2, title: 'Education', icon: GraduationCap },
    { number: 3, title: 'Skills', icon: Code },
    { number: 4, title: 'Experience', icon: Briefcase },
    { number: 5, title: 'Verification', icon: CheckCircle },
  ];

  const handleNext = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    } else {
      navigate('/intern');
    }
  };

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-semibold mb-2">Intern Registration</h1>
          <p className="text-gray-600">Complete your profile to get started</p>
        </div>

        {/* Progress Steps */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
          <div className="flex items-center justify-between mb-8">
            {steps.map((step, index) => (
              <div key={step.number} className="flex items-center flex-1">
                <div className="flex flex-col items-center flex-1">
                  <div
                    className={`w-12 h-12 rounded-full flex items-center justify-center mb-2 transition-colors ${
                      currentStep >= step.number
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-200 text-gray-500'
                    }`}
                  >
                    <step.icon className="w-6 h-6" />
                  </div>
                  <span className={`text-sm ${currentStep >= step.number ? 'text-blue-600' : 'text-gray-500'}`}>
                    {step.title}
                  </span>
                </div>
                {index < steps.length - 1 && (
                  <div
                    className={`h-1 flex-1 mx-2 mb-8 transition-colors ${
                      currentStep > step.number ? 'bg-blue-600' : 'bg-gray-200'
                    }`}
                  />
                )}
              </div>
            ))}
          </div>

          {/* Form Content */}
          <div className="max-w-2xl mx-auto">
            {currentStep === 1 && (
              <div className="space-y-4">
                <h2 className="text-xl font-semibold mb-4">Personal Details</h2>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">First Name</label>
                    <input type="text" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Last Name</label>
                    <input type="text" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <input type="email" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Phone Number</label>
                  <input type="tel" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Location</label>
                  <input type="text" placeholder="City, Country" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
                </div>
              </div>
            )}

            {currentStep === 2 && (
              <div className="space-y-4">
                <h2 className="text-xl font-semibold mb-4">Education</h2>
                <div>
                  <label className="block text-sm font-medium mb-2">Degree</label>
                  <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                    <option>Select Degree</option>
                    <option>High School</option>
                    <option>Bachelor's</option>
                    <option>Master's</option>
                    <option>PhD</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Field of Study</label>
                  <input type="text" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Institution</label>
                  <input type="text" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Start Year</label>
                    <input type="number" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">End Year</label>
                    <input type="number" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
                  </div>
                </div>
              </div>
            )}

            {currentStep === 3 && (
              <div className="space-y-4">
                <h2 className="text-xl font-semibold mb-4">Skills</h2>
                <div>
                  <label className="block text-sm font-medium mb-2">Technical Skills</label>
                  <input type="text" placeholder="e.g., JavaScript, Python, React" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
                  <p className="text-sm text-gray-500 mt-1">Separate skills with commas</p>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Soft Skills</label>
                  <input type="text" placeholder="e.g., Communication, Teamwork" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Languages</label>
                  <input type="text" placeholder="e.g., English, Spanish" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Certifications (Optional)</label>
                  <textarea rows={3} placeholder="List any relevant certifications" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
                </div>
              </div>
            )}

            {currentStep === 4 && (
              <div className="space-y-4">
                <h2 className="text-xl font-semibold mb-4">Experience</h2>
                <div>
                  <label className="block text-sm font-medium mb-2">Previous Internships/Projects</label>
                  <textarea rows={4} placeholder="Describe your previous experience" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Portfolio/GitHub URL (Optional)</label>
                  <input type="url" placeholder="https://github.com/username" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">LinkedIn URL (Optional)</label>
                  <input type="url" placeholder="https://linkedin.com/in/username" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
                </div>
              </div>
            )}

            {currentStep === 5 && (
              <div className="space-y-4">
                <h2 className="text-xl font-semibold mb-4">Verification</h2>
                <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
                  <CheckCircle className="w-16 h-16 text-green-600 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold mb-2">Profile Complete!</h3>
                  <p className="text-gray-600 mb-4">
                    Review your information and submit to complete registration.
                  </p>
                </div>
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <p className="text-sm text-blue-800">
                    By completing registration, you agree to our Terms of Service and Privacy Policy.
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-between">
          <button
            onClick={handlePrevious}
            disabled={currentStep === 1}
            className="flex items-center gap-2 px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <ArrowLeft className="w-4 h-4" />
            Previous
          </button>
          <button
            onClick={handleNext}
            className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            {currentStep === totalSteps ? 'Complete Registration' : 'Next'}
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
