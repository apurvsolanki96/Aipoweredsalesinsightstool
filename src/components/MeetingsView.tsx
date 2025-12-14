import { Calendar, Clock, MapPin, Search, Filter, Sparkles, ChevronRight, Bell } from 'lucide-react';
import { MobileNav } from './MobileNav';
import { useState } from 'react';

interface MeetingsViewProps {
  onMeetingSelect: (meeting: any) => void;
  onNavigate: (view: any) => void;
}

export function MeetingsView({ onMeetingSelect, onNavigate }: MeetingsViewProps) {
  const [selectedTab, setSelectedTab] = useState<'daily' | 'weekly' | 'upcoming'>('daily');
  const [searchQuery, setSearchQuery] = useState('');

  const meetings = [
    {
      id: 1,
      client: 'Tech Mahindra',
      company: 'Tech Mahindra Ltd.',
      time: '2:00 PM',
      date: 'Today',
      duration: '45 min',
      location: 'DLF Cyber Hub',
      type: 'Client Meeting',
      insightsReady: true,
      priority: 'high',
      reminders: ['1h', '10m'],
    },
    {
      id: 2,
      client: 'Wipro Enterprises',
      company: 'Wipro Ltd.',
      time: '4:30 PM',
      date: 'Today',
      duration: '30 min',
      location: 'Virtual Call',
      type: 'Follow-up',
      insightsReady: true,
      priority: 'medium',
      reminders: ['1h', '10m'],
    },
    {
      id: 3,
      client: 'InMobi',
      company: 'InMobi Pte Ltd.',
      time: '11:00 AM',
      date: 'Tomorrow',
      duration: '60 min',
      location: 'Prestige Tech Park',
      type: 'Property Tour',
      insightsReady: true,
      priority: 'high',
      reminders: ['1h'],
    },
    {
      id: 4,
      client: 'Zomato',
      company: 'Zomato Ltd.',
      time: '3:00 PM',
      date: 'Tomorrow',
      duration: '45 min',
      location: 'DLF Cyber City',
      type: 'Initial Meeting',
      insightsReady: true,
      priority: 'medium',
      reminders: ['10m'],
    },
    {
      id: 5,
      client: 'Flipkart',
      company: 'Flipkart Pvt Ltd.',
      time: '10:00 AM',
      date: 'Wed, Oct 25',
      duration: '60 min',
      location: 'Embassy Tech Village',
      type: 'Property Tour',
      insightsReady: false,
      priority: 'low',
      reminders: [],
    },
  ];

  const filteredMeetings = meetings.filter((meeting) => {
    if (selectedTab === 'daily') return meeting.date === 'Today';
    if (selectedTab === 'weekly') return ['Today', 'Tomorrow', 'Wed, Oct 25'].includes(meeting.date);
    return true; // Upcoming shows all
  });

  return (
    <div className="h-full flex flex-col bg-slate-50">
      {/* Header */}
      <header className="bg-white border-b border-slate-200 p-4 md:px-8 md:py-6 sticky top-0 z-10">
        <div className="mb-4">
          <h2 className="text-slate-900">Meetings</h2>
          <p className="text-slate-500 mt-1">Manage your schedule and AI-powered meeting briefs</p>
        </div>

        {/* Search */}
        <div className="relative mb-4">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search meetings..."
            className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
          />
        </div>

        {/* Filter Pills */}
        <div className="flex gap-2 bg-slate-100 p-1 rounded-xl">
          <button
            onClick={() => setSelectedTab('daily')}
            className={`flex-1 py-2.5 rounded-lg transition-all text-sm ${
              selectedTab === 'daily'
                ? 'bg-white text-indigo-600 shadow-sm'
                : 'text-slate-600'
            }`}
          >
            Daily
          </button>
          <button
            onClick={() => setSelectedTab('weekly')}
            className={`flex-1 py-2.5 rounded-lg transition-all text-sm ${
              selectedTab === 'weekly'
                ? 'bg-white text-indigo-600 shadow-sm'
                : 'text-slate-600'
            }`}
          >
            Weekly
          </button>
          <button
            onClick={() => setSelectedTab('upcoming')}
            className={`flex-1 py-2.5 rounded-lg transition-all text-sm ${
              selectedTab === 'upcoming'
                ? 'bg-white text-indigo-600 shadow-sm'
                : 'text-slate-600'
            }`}
          >
            Upcoming
          </button>
        </div>
      </header>

      {/* Content */}
      <div className="flex-1 overflow-auto p-4 md:p-8 pb-20 md:pb-8">
        <div className="space-y-3">
          {filteredMeetings.length > 0 ? (
            filteredMeetings.map((meeting) => (
              <button
                key={meeting.id}
                onClick={() => onMeetingSelect(meeting)}
                className="w-full bg-white border border-slate-200 rounded-xl p-4 md:p-5 hover:shadow-lg transition-all text-left group"
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2 flex-wrap">
                      <h3 className="text-slate-900 font-semibold">{meeting.client}</h3>
                      {meeting.insightsReady && (
                        <div className="flex items-center gap-1 px-2 py-0.5 bg-gradient-to-r from-green-50 to-emerald-50 text-green-700 rounded-full text-xs border border-green-100">
                          <Sparkles className="w-3 h-3" />
                          <span>Brief Ready</span>
                        </div>
                      )}
                    </div>
                    <p className="text-sm text-slate-500 mb-3">{meeting.type}</p>

                    <div className="space-y-2 text-sm text-slate-600">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-slate-400" />
                        <span>{meeting.date}</span>
                        <span className="text-slate-400">•</span>
                        <Clock className="w-4 h-4 text-slate-400" />
                        <span>{meeting.time} ({meeting.duration})</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4 text-slate-400" />
                        <span>{meeting.location}</span>
                      </div>
                    </div>

                    {/* Reminders Info */}
                    {(meeting.reminders && meeting.reminders.length > 0) && (
                      <div className="mt-3 flex items-center gap-2 text-xs text-indigo-600 bg-indigo-50 w-fit px-2 py-1 rounded-lg">
                        <Bell className="w-3 h-3" />
                        <span>Auto-reminders: {meeting.reminders.join(', ')} before</span>
                      </div>
                    )}
                  </div>
                  <ChevronRight className="w-5 h-5 text-slate-400 group-hover:text-indigo-600 transition-colors flex-shrink-0" />
                </div>
              </button>
            ))
          ) : (
            <div className="text-center py-12 text-slate-500">
              <p>No meetings found for this period.</p>
            </div>
          )}
        </div>
      </div>

      {/* Mobile Nav */}
      <MobileNav currentView="meetings" onNavigate={onNavigate} />
    </div>
  );
}
