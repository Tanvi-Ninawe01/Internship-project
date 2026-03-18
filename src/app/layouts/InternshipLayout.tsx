import { Outlet, Link, useLocation } from 'react-router';
import { 
  LayoutDashboard, 
  Layers, 
  ClipboardList, 
  FolderKanban, 
  FileCheck, 
  Award, 
  Users,
  Zap,
  Trophy,
  Bell,
  Settings,
  LogOut,
  Briefcase
} from 'lucide-react';

export default function InternshipLayout() {
  const location = useLocation();

  const navItems = [
    { path: '/internship', label: 'Dashboard', icon: LayoutDashboard },
    { path: '/internship/levels', label: 'Levels', icon: Layers },
    { path: '/internship/tasks', label: 'Tasks', icon: ClipboardList },
    { path: '/internship/projects', label: 'Projects', icon: FolderKanban },
    { path: '/internship/evaluation', label: 'Evaluation', icon: FileCheck },
    { path: '/internship/certificates', label: 'Certificates', icon: Award },
    { path: '/internship/teams', label: 'Team Internships', icon: Users },
    { path: '/internship/hackathon', label: 'Hackathons', icon: Zap },
    { path: '/internship/leaderboard', label: 'Leaderboard', icon: Trophy },
  ];

  const isActive = (path: string) => {
    if (path === '/internship') {
      return location.pathname === path;
    }
    return location.pathname.startsWith(path);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Sidebar */}
      <aside className="fixed left-0 top-0 h-full w-64 bg-white border-r border-gray-200 flex flex-col">
        {/* Logo */}
        <div className="p-6 border-b border-gray-200">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-indigo-600 to-blue-600 rounded-lg flex items-center justify-center">
              <Briefcase className="w-6 h-6 text-white" />
            </div>
            <div>
              <div className="font-semibold">SyncSaS</div>
              <div className="text-xs text-gray-500">Internship Hub</div>
            </div>
          </Link>
        </div>

        {/* Navigation */}
        <nav className="flex-1 overflow-y-auto p-4">
          <ul className="space-y-1">
            {navItems.map((item) => (
              <li key={item.path}>
                <Link
                  to={item.path}
                  className={`flex items-center gap-3 px-4 py-2.5 rounded-lg transition-colors ${
                    isActive(item.path)
                      ? 'bg-indigo-50 text-indigo-600'
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  <item.icon className="w-5 h-5" />
                  <span className="text-sm">{item.label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Footer */}
        <div className="p-4 border-t border-gray-200 space-y-1">
          <button className="flex items-center gap-3 px-4 py-2.5 rounded-lg text-gray-700 hover:bg-gray-100 w-full transition-colors">
            <Settings className="w-5 h-5" />
            <span className="text-sm">Settings</span>
          </button>
          <Link to="/" className="flex items-center gap-3 px-4 py-2.5 rounded-lg text-gray-700 hover:bg-gray-100 w-full transition-colors">
            <LogOut className="w-5 h-5" />
            <span className="text-sm">Logout</span>
          </Link>
        </div>
      </aside>

      {/* Main Content */}
      <div className="ml-64">
        {/* Top Bar */}
        <header className="bg-white border-b border-gray-200 sticky top-0 z-10">
          <div className="px-8 py-4 flex items-center justify-between">
            <div>
              <h1 className="text-xl font-semibold">
                {navItems.find(item => isActive(item.path))?.label || 'Dashboard'}
              </h1>
              <p className="text-sm text-gray-500">Manage your internship lifecycle</p>
            </div>
            <div className="flex items-center gap-4">
              <button className="relative p-2 hover:bg-gray-100 rounded-lg transition-colors">
                <Bell className="w-5 h-5 text-gray-600" />
                <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
              </button>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-blue-500 rounded-full flex items-center justify-center text-white">
                  AD
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="p-8">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
