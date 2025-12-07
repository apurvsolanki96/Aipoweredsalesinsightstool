import { LayoutDashboard, Calendar, Building2, TrendingUp, User } from 'lucide-react';

interface MobileNavProps {
  currentView: string;
  onNavigate: (view: string) => void;
}

export function MobileNav({ currentView, onNavigate }: MobileNavProps) {
  const navItems = [
    { id: 'dashboard', icon: LayoutDashboard, label: 'Home' },
    { id: 'meetings', icon: Calendar, label: 'Meetings' },
    { id: 'properties', icon: Building2, label: 'Properties' },
    { id: 'insights', icon: TrendingUp, label: 'Insights' },
    { id: 'profile', icon: User, label: 'Profile' },
  ];

  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-slate-200 px-2 py-2 z-20 shadow-lg">
      <div className="flex items-center justify-around">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = item.id === currentView;
          
          return (
            <button
              key={item.id}
              onClick={() => onNavigate(item.id)}
              className={`flex flex-col items-center gap-1 px-3 py-2 rounded-lg transition-all relative ${
                isActive
                  ? 'text-indigo-600'
                  : 'text-slate-400'
              }`}
            >
              {isActive && (
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 rounded-lg" />
              )}
              <Icon className={`w-5 h-5 ${isActive ? 'scale-110' : ''} transition-transform relative z-10`} />
              <span className="text-xs relative z-10">{item.label}</span>
            </button>
          );
        })}
      </div>
    </nav>
  );
}
