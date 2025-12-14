import { Search, Clock, TrendingUp, AlertCircle, Building2, Calendar, Menu, Bell } from 'lucide-react';
import { InsightCard } from './InsightCard';
import { UpcomingMeetings } from './UpcomingMeetings';
import { MobileNav } from './MobileNav';
import { useState } from 'react';

interface DashboardProps {
  onMeetingSelect: (meeting: any) => void;
  onNavigate: (view: any) => void;
}

export function Dashboard({ onMeetingSelect, onNavigate }: DashboardProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('all');

  const stats = [
    {
      label: 'Meetings',
      value: '3',
      change: 'Today',
      icon: Calendar,
      gradient: 'from-indigo-500 to-purple-500',
      onClick: () => onNavigate('meetings'),
    },
    {
      label: 'Active Leads',
      value: '12',
      change: '+3 this week',
      icon: TrendingUp,
      gradient: 'from-green-500 to-emerald-500',
      onClick: () => onNavigate('leads'),
    },
    {
      label: 'Properties',
      value: '28',
      change: '5 new',
      icon: Building2,
      gradient: 'from-blue-500 to-cyan-500',
      onClick: () => onNavigate('properties'),
    },
  ];

  const recentInsights = [
    {
      id: 1,
      company: 'Prestige Group',
      type: 'Financial Update',
      title: 'Q3 Revenue Growth of 24%',
      description: 'Prestige Group reported strong quarterly results with significant expansion in commercial segment. Gurgaon projects show 18% appreciation.',
      timestamp: '2 hours ago',
      priority: 'high',
      tags: ['Financial', 'Positive'],
      sentiment: 'positive',
      isBookmarked: false,
    },
    {
      id: 2,
      company: 'DLF Cyber City',
      type: 'News Alert',
      title: 'New SEZ Policy Benefits Announced',
      description: 'Government announces tax incentives for SEZ tenants. DLF Cyber City properties expected to see increased demand from tech companies.',
      timestamp: '4 hours ago',
      priority: 'high',
      tags: ['Policy', 'SEZ'],
      sentiment: 'positive',
      isBookmarked: false,
    },
    {
      id: 3,
      company: 'Embassy Office Parks',
      type: 'Social Media',
      title: 'Expansion Plans Discussed on LinkedIn',
      description: 'CEO hints at 2 new Grade-A office developments in Bengaluru tech corridor. Strong interest from multinational tenants.',
      timestamp: '6 hours ago',
      priority: 'medium',
      tags: ['Expansion', 'Social'],
      sentiment: 'positive',
      isBookmarked: true,
    },
    {
      id: 4,
      company: 'Mindspace REIT',
      type: 'Market Trend',
      title: 'Occupancy Rate Reaches 92%',
      description: 'Portfolio occupancy at all-time high. Rental yields improving across Hyderabad and Pune markets.',
      timestamp: '1 day ago',
      priority: 'medium',
      tags: ['Market', 'Performance'],
      sentiment: 'positive',
      isBookmarked: false,
    },
  ];

  const [insights, setInsights] = useState(recentInsights);

  const handleBookmark = (id: number) => {
    setInsights(insights.map(insight => 
      insight.id === id ? { ...insight, isBookmarked: !insight.isBookmarked } : insight
    ));
  };

  return (
    <div className="h-full flex flex-col bg-slate-50">
      {/* Mobile Header */}
      <header className="bg-white border-b border-slate-200 p-4 md:hidden sticky top-0 z-10">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center shadow-lg shadow-primary/30">
              <TrendingUp className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-slate-900">InsightAI</h1>
              <p className="text-xs text-slate-500">Hi, Rajesh</p>
            </div>
          </div>
          <button className="relative p-2">
            <Bell className="w-6 h-6 text-slate-600" />
            <span className="absolute top-1 right-1 w-2 h-2 bg-gradient-to-r from-pink-500 to-rose-500 rounded-full" />
          </button>
        </div>

        {/* Mobile Search */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search insights..."
            className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
          />
        </div>
      </header>

      {/* Desktop Header */}
      <header className="hidden md:block bg-white border-b border-slate-200 px-8 py-6">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-slate-900">Welcome back, Rajesh</h2>
            <p className="text-slate-500 mt-1">Here are your latest insights and upcoming meetings</p>
          </div>
          <div className="flex items-center gap-3">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search companies, insights..."
                className="pl-10 pr-4 py-2 border border-slate-200 rounded-lg w-80 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              />
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-4 gap-4">
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <button
                key={stat.label}
                onClick={stat.onClick}
                className={`bg-white rounded-xl p-4 border border-slate-200 shadow-sm text-left transition-all ${stat.onClick ? 'hover:shadow-md hover:scale-105 cursor-pointer' : ''}`}
              >
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${stat.gradient} flex items-center justify-center mb-3 shadow-lg`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <p className="text-2xl text-slate-900">{stat.value}</p>
                <p className="text-xs text-slate-500 mt-1">{stat.label}</p>
                <p className="text-xs text-slate-400 mt-0.5">{stat.change}</p>
              </button>
            );
          })}
        </div>
      </header>

      {/* Mobile Stats - Horizontal Scroll */}
      <div className="md:hidden px-4 py-4 overflow-x-auto">
        <div className="flex gap-3 pb-2">
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <button
                key={stat.label}
                onClick={stat.onClick}
                className="flex-shrink-0 w-32 bg-white rounded-xl p-4 shadow-sm border border-slate-100 text-left"
              >
                <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${stat.gradient} flex items-center justify-center mb-2 shadow-md`}>
                  <Icon className="w-5 h-5 text-white" />
                </div>
                <p className="text-xl text-slate-900">{stat.value}</p>
                <p className="text-xs text-slate-500 mt-0.5">{stat.label}</p>
              </button>
            );
          })}
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-auto p-4 md:p-8 pb-20 md:pb-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {/* Left Column - Recent Insights */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-slate-900">Recent Insights</h3>
              <div className="flex items-center gap-2">
                <select 
                  value={selectedFilter}
                  onChange={(e) => setSelectedFilter(e.target.value)}
                  className="px-3 py-1.5 text-sm bg-white border border-slate-200 rounded-lg text-slate-600 hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-primary"
                >
                  <option value="all">All Sources</option>
                  <option value="financial">Financial</option>
                  <option value="news">News</option>
                  <option value="social">Social Media</option>
                </select>
              </div>
            </div>

            {insights.map((insight) => (
              <InsightCard 
                key={insight.id} 
                insight={insight}
                onBookmark={() => handleBookmark(insight.id)}
              />
            ))}
          </div>

          {/* Right Column - Upcoming Meetings */}
          <div className="md:col-span-1">
            <UpcomingMeetings onMeetingSelect={onMeetingSelect} />
          </div>
        </div>
      </div>

      {/* Mobile Bottom Navigation */}
      <MobileNav currentView="dashboard" onNavigate={onNavigate} />
    </div>
  );
}
