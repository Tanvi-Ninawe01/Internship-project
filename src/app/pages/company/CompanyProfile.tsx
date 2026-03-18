import { Building2, Mail, Phone, Globe, MapPin, Users, Briefcase, Award, CheckCircle, Star } from 'lucide-react';

export default function CompanyProfile() {
  const companyInfo = {
    name: 'TechCorp Solutions',
    logo: 'TC',
    industry: 'Technology & Software',
    size: '500-1000 employees',
    founded: '2015',
    website: 'www.techcorp.com',
    email: 'hr@techcorp.com',
    phone: '+1 (555) 123-4567',
    location: 'San Francisco, CA',
    tier: 'Enterprise',
    verified: true,
    description: 'Leading technology company specializing in AI and cloud solutions. We empower businesses through innovative software and cutting-edge technology.',
  };

  const stats = [
    { label: 'Total Interns Hired', value: '287', icon: Users },
    { label: 'Active Internships', value: '12', icon: Briefcase },
    { label: 'Success Rate', value: '94%', icon: Award },
    { label: 'Average Rating', value: '4.8', icon: Star },
  ];

  const benefits = [
    'Competitive stipend',
    'Flexible work hours',
    'Remote work options',
    'Learning & development budget',
    'Mentorship program',
    'Health insurance',
    'Team events & outings',
    'Certificate of completion',
  ];

  const culture = [
    { aspect: 'Innovation', rating: 95 },
    { aspect: 'Work-Life Balance', rating: 88 },
    { aspect: 'Career Growth', rating: 92 },
    { aspect: 'Team Collaboration', rating: 90 },
    { aspect: 'Learning Environment', rating: 94 },
  ];

  return (
    <div className="space-y-6">
      {/* Company Header */}
      <div className="bg-gradient-to-br from-emerald-600 to-teal-600 rounded-xl p-8 text-white">
        <div className="flex items-start gap-6">
          <div className="w-24 h-24 bg-white rounded-xl flex items-center justify-center">
            <span className="text-4xl font-bold text-emerald-600">{companyInfo.logo}</span>
          </div>
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-2">
              <h2 className="text-3xl font-bold">{companyInfo.name}</h2>
              {companyInfo.verified && (
                <div className="flex items-center gap-1 px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full border border-white/30">
                  <CheckCircle className="w-4 h-4" />
                  <span className="text-sm">Verified</span>
                </div>
              )}
              <div className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full border border-white/30">
                <span className="text-sm font-medium">{companyInfo.tier} Partner</span>
              </div>
            </div>
            <p className="text-white/90 mb-4">{companyInfo.description}</p>
            <div className="grid md:grid-cols-2 gap-3">
              <div className="flex items-center gap-2">
                <Building2 className="w-4 h-4" />
                <span className="text-sm">{companyInfo.industry}</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4" />
                <span className="text-sm">{companyInfo.size}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span className="text-sm">{companyInfo.location}</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="w-4 h-4" />
                <span className="text-sm">Founded {companyInfo.founded}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {stats.map((stat, idx) => (
          <div key={idx} className="bg-white rounded-xl p-6 border border-gray-200">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center">
                <stat.icon className="w-5 h-5 text-emerald-600" />
              </div>
              <span className="text-sm text-gray-600">{stat.label}</span>
            </div>
            <p className="text-2xl font-semibold">{stat.value}</p>
          </div>
        ))}
      </div>

      {/* Company Information & Contact */}
      <div className="grid lg:grid-cols-3 gap-6">
        {/* Company Details */}
        <div className="lg:col-span-2 bg-white rounded-xl p-6 border border-gray-200">
          <h3 className="text-lg font-semibold mb-4">Company Information</h3>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Company Name</label>
              <input
                type="text"
                value={companyInfo.name}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Industry</label>
              <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500">
                <option>{companyInfo.industry}</option>
                <option>Finance & Banking</option>
                <option>Healthcare</option>
                <option>E-commerce</option>
                <option>Education</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Company Size</label>
              <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500">
                <option>{companyInfo.size}</option>
                <option>1-50 employees</option>
                <option>51-200 employees</option>
                <option>201-500 employees</option>
                <option>1000+ employees</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">About Company</label>
              <textarea
                rows={4}
                value={companyInfo.description}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
            </div>
            <button className="px-6 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors font-medium">
              Save Changes
            </button>
          </div>
        </div>

        {/* Contact Information */}
        <div className="bg-white rounded-xl p-6 border border-gray-200">
          <h3 className="text-lg font-semibold mb-4">Contact Information</h3>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Website</label>
              <div className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg">
                <Globe className="w-4 h-4 text-gray-400" />
                <input
                  type="text"
                  value={companyInfo.website}
                  className="flex-1 focus:outline-none"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
              <div className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg">
                <Mail className="w-4 h-4 text-gray-400" />
                <input
                  type="email"
                  value={companyInfo.email}
                  className="flex-1 focus:outline-none"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
              <div className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg">
                <Phone className="w-4 h-4 text-gray-400" />
                <input
                  type="tel"
                  value={companyInfo.phone}
                  className="flex-1 focus:outline-none"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Location</label>
              <div className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg">
                <MapPin className="w-4 h-4 text-gray-400" />
                <input
                  type="text"
                  value={companyInfo.location}
                  className="flex-1 focus:outline-none"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Benefits & Culture */}
      <div className="grid lg:grid-cols-2 gap-6">
        {/* Benefits */}
        <div className="bg-white rounded-xl p-6 border border-gray-200">
          <h3 className="text-lg font-semibold mb-4">Internship Benefits</h3>
          <div className="grid grid-cols-2 gap-3">
            {benefits.map((benefit, idx) => (
              <div key={idx} className="flex items-start gap-2 p-3 bg-emerald-50 rounded-lg border border-emerald-200">
                <CheckCircle className="w-4 h-4 text-emerald-600 mt-0.5" />
                <span className="text-sm text-gray-700">{benefit}</span>
              </div>
            ))}
          </div>
          <button className="w-full mt-4 px-4 py-2 border-2 border-dashed border-gray-300 rounded-lg hover:border-emerald-400 hover:bg-emerald-50 transition-colors text-sm font-medium">
            + Add More Benefits
          </button>
        </div>

        {/* Company Culture */}
        <div className="bg-white rounded-xl p-6 border border-gray-200">
          <h3 className="text-lg font-semibold mb-4">Company Culture</h3>
          <div className="space-y-4">
            {culture.map((item, idx) => (
              <div key={idx}>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium">{item.aspect}</span>
                  <span className="text-sm text-gray-600">{item.rating}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-emerald-600 h-2 rounded-full" 
                    style={{ width: `${item.rating}%` }} 
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Verification Badge */}
      <div className="bg-white rounded-xl p-6 border border-gray-200">
        <h3 className="text-lg font-semibold mb-4">Verification & Tier Status</h3>
        <div className="grid md:grid-cols-3 gap-4">
          <div className="p-4 bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg border-2 border-blue-300">
            <CheckCircle className="w-8 h-8 text-blue-600 mb-2" />
            <h4 className="font-semibold mb-1">Verified Company</h4>
            <p className="text-sm text-gray-600">Identity verified by SyncSaS</p>
          </div>
          <div className="p-4 bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg border-2 border-purple-300">
            <Award className="w-8 h-8 text-purple-600 mb-2" />
            <h4 className="font-semibold mb-1">Partner Company</h4>
            <p className="text-sm text-gray-600">Trusted hiring partner</p>
          </div>
          <div className="p-4 bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-lg border-2 border-emerald-300">
            <Star className="w-8 h-8 text-emerald-600 mb-2" />
            <h4 className="font-semibold mb-1">Enterprise Tier</h4>
            <p className="text-sm text-gray-600">Premium access & features</p>
          </div>
        </div>
      </div>
    </div>
  );
}
