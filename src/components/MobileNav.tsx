import { Home, Calendar, Building2, User, TrendingUp, Menu, Users, Newspaper } from 'lucide-react';

interface MobileNavProps {
  currentView: string;
  onNavigate: (view: any) => void;
}

export function MobileNav({ currentView, onNavigate }: MobileNavProps) {
  const navItems = [
    { id: 'dashboard', icon: Home, label: 'Home' },
    { id: 'meetings', icon: Calendar, label: 'Meetings' },
    { id: 'leads', icon: Users, label: 'Leads' },
    { id: 'properties', icon: Building2, label: 'Properties' },
    { id: 'news', icon: Newspaper, label: 'News' },
  ];

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-slate-200 px-6 py-3 flex justify-between items-center z-50">
      {navItems.map((item) => {
        const Icon = item.icon;
        const isActive = currentView === item.id;
        
        return (
          <button
            key={item.id}
            onClick={() => onNavigate(item.id)}
            className={`flex flex-col items-center gap-1 ${
              isActive ? 'text-indigo-600' : 'text-slate-400'
            }`}
          >
            <Icon className={`w-6 h-6 ${isActive ? 'fill-current' : ''}`} />
            <span className="text-[10px] font-medium">{item.label}</span>
          </button>
        );
      })}
    </div>
  );
}
