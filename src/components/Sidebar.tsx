import { Home, Calendar, Building2, User, TrendingUp, LogOut, Settings, BarChart2, Users } from 'lucide-react';
import { Button } from './ui/button';
import { ScrollArea } from './ui/scroll-area';

interface SidebarProps {
  currentView: string;
  onNavigate: (view: any) => void;
}

export function Sidebar({ currentView, onNavigate }: SidebarProps) {
  const menuItems = [
    { id: 'dashboard', icon: Home, label: 'Dashboard' },
    { id: 'meetings', icon: Calendar, label: 'Meetings' },
    { id: 'leads', icon: Users, label: 'Leads' },
    { id: 'properties', icon: Building2, label: 'Properties' },
    { id: 'insights', icon: BarChart2, label: 'Insights' },
    { id: 'profile', icon: User, label: 'Profile' },
  ];

  return (
    <aside className="hidden md:flex flex-col w-64 bg-white border-r border-slate-200 h-screen">
      {/* Logo */}
      <div className="p-6 flex items-center gap-3">
        <div className="w-10 h-10 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-xl flex items-center justify-center shadow-lg shadow-indigo-500/30">
          <TrendingUp className="w-6 h-6 text-white" />
        </div>
        <span className="font-bold text-xl text-slate-900 tracking-tight">InsightAI</span>
      </div>

      {/* Navigation */}
      <ScrollArea className="flex-1 px-4">
        <div className="space-y-1 py-4">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = currentView === item.id;

            return (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
                  isActive
                    ? 'bg-gradient-to-r from-indigo-50 to-purple-50 text-indigo-700 font-medium'
                    : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                }`}
              >
                <Icon className={`w-5 h-5 ${isActive ? 'text-indigo-600' : 'text-slate-400'}`} />
                <span>{item.label}</span>
                {isActive && (
                  <div className="ml-auto w-1.5 h-1.5 bg-indigo-600 rounded-full" />
                )}
              </button>
            );
          })}
        </div>
      </ScrollArea>

      {/* Footer */}
      <div className="p-4 border-t border-slate-100">
        <div className="bg-slate-50 rounded-xl p-4 mb-4">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center">
              <User className="w-6 h-6 text-slate-500" />
            </div>
            <div>
              <p className="text-sm font-medium text-slate-900">Rajesh Kumar</p>
              <p className="text-xs text-slate-500">Premium Agent</p>
            </div>
          </div>
          <Button variant="outline" size="sm" className="w-full text-xs h-8">
            <Settings className="w-3 h-3 mr-2" />
            Settings
          </Button>
        </div>
      </div>
    </aside>
  );
}
