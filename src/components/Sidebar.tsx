import { LayoutDashboard, Calendar, Building2, TrendingUp, Settings, Bell, LogOut } from 'lucide-react';

interface SidebarProps {
  currentView: string;
  onNavigate: (view: any) => void;
}

export function Sidebar({ currentView, onNavigate }: SidebarProps) {
  const menuItems = [
    { id: 'dashboard', icon: LayoutDashboard, label: 'Dashboard' },
    { id: 'meetings', icon: Calendar, label: 'Meetings' },
    { id: 'properties', icon: Building2, label: 'Properties' },
    { id: 'insights', icon: TrendingUp, label: 'Market Insights' },
  ];

  return (
    <aside className="hidden md:flex w-64 bg-white border-r border-slate-200 flex-col">
      {/* Logo & Brand */}
      <div className="p-6 border-b border-slate-200">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-xl flex items-center justify-center shadow-lg shadow-indigo-500/30">
            <TrendingUp className="w-6 h-6 text-white" />
          </div>
          <div>
            <h1 className="text-slate-900">InsightAI</h1>
            <p className="text-xs text-slate-500">Sales Intelligence</p>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4">
        <ul className="space-y-1">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = item.id === currentView;
            
            return (
              <li key={item.id}>
                <button
                  onClick={() => onNavigate(item.id)}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                    isActive
                      ? 'bg-gradient-to-r from-indigo-50 to-purple-50 text-indigo-700'
                      : 'text-slate-600 hover:bg-slate-50'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  <span>{item.label}</span>
                </button>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Bottom Actions */}
      <div className="p-4 border-t border-slate-200 space-y-1">
        <button className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-slate-600 hover:bg-slate-50 transition-colors">
          <Bell className="w-5 h-5" />
          <span>Notifications</span>
          <span className="ml-auto w-5 h-5 bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-xs rounded-full flex items-center justify-center">
            3
          </span>
        </button>
        <button 
          onClick={() => onNavigate('profile')}
          className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-slate-600 hover:bg-slate-50 transition-colors"
        >
          <Settings className="w-5 h-5" />
          <span>Settings</span>
        </button>
      </div>

      {/* User Profile */}
      <div className="p-4 border-t border-slate-200">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-full flex items-center justify-center">
            <span className="text-white">RS</span>
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm text-slate-900 truncate">Rajesh Sharma</p>
            <p className="text-xs text-slate-500 truncate">Senior Agent</p>
          </div>
        </div>
      </div>
    </aside>
  );
}
