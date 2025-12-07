import { Calendar, Clock, MapPin, Search, Filter, Sparkles, ChevronRight } from 'lucide-react';
import { MobileNav } from './MobileNav';
import { useState } from 'react';

interface MeetingsViewProps {
  onMeetingSelect: (meeting: any) => void;
  onNavigate: (view: any) => void;
}

export function MeetingsView({ onMeetingSelect, onNavigate }: MeetingsViewProps) {
  const [selectedTab, setSelectedTab] = useState<'upcoming' | 'past'>('upcoming');
  const [searchQuery, setSearchQuery] = useState('');

  const upcomingMeetings = [
    {
      id: 1,
      client: 'Tech Mahindra',
      company: 'Tech Mahindra Ltd.',
      time: 'Today, 2:00 PM',
      duration: '45 min',
      location: 'DLF Cyber Hub',
      type: 'Client Meeting',
      insightsReady: true,
      priority: 'high',
    },
    {
      id: 2,
      client: 'Wipro Enterprises',
      company: 'Wipro Ltd.',
      time: 'Today, 4:30 PM',
      duration: '30 min',
      location: 'Virtual Call',
      type: 'Follow-up',
      insightsReady: true,
      priority: 'medium',
    },
    {
      id: 3,
      client: 'InMobi',
      company: 'InMobi Pte Ltd.',
      time: 'Tomorrow, 11:00 AM',
      duration: '60 min',
      location: 'Prestige Tech Park',
      type: 'Property Tour',
      insightsReady: true,
      priority: 'high',
    },
    {
      id: 4,
      client: 'Zomato',
      company: 'Zomato Ltd.',
      time: 'Tomorrow, 3:00 PM',
      duration: '45 min',
      location: 'DLF Cyber City',
      type: 'Initial Meeting',
      insightsReady: true,
      priority: 'medium',
    },
  ];

  const pastMeetings = [
    {
      id: 5,
      client: 'Flipkart',
      company: 'Flipkart Pvt Ltd.',
      time: 'Yesterday, 2:00 PM',
      duration: '60 min',
      location: 'Embassy Tech Village',
      type: 'Property Tour',
      outcome: 'Follow-up scheduled',
    },
    {
      id: 6,
      client: 'Paytm',
      company: 'One97 Communications',
      time: '2 days ago, 11:00 AM',
      duration: '45 min',
      location: 'Virtual Call',
      type: 'Negotiation',
      outcome: 'Deal closed',
    },
  ];

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

        {/* Tabs */}
        <div className="flex gap-2 bg-slate-100 p-1 rounded-xl">
          <button
            onClick={() => setSelectedTab('upcoming')}
            className={`flex-1 py-2.5 rounded-lg transition-all text-sm ${
              selectedTab === 'upcoming'
                ? 'bg-white text-indigo-600 shadow-sm'
                : 'text-slate-600'
            }`}
          >
            Upcoming ({upcomingMeetings.length})
          </button>
          <button
            onClick={() => setSelectedTab('past')}
            className={`flex-1 py-2.5 rounded-lg transition-all text-sm ${
              selectedTab === 'past'
                ? 'bg-white text-indigo-600 shadow-sm'
                : 'text-slate-600'
            }`}
          >
            Past ({pastMeetings.length})
          </button>
        </div>
      </header>

      {/* Content */}
      <div className="flex-1 overflow-auto p-4 md:p-8 pb-20 md:pb-8">
        {selectedTab === 'upcoming' ? (
          <div className="space-y-3">
            {upcomingMeetings.map((meeting) => (
              <button
                key={meeting.id}
                onClick={() => onMeetingSelect(meeting)}
                className="w-full bg-white border border-slate-200 rounded-xl p-4 md:p-5 hover:shadow-lg transition-all text-left group"
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2 flex-wrap">
                      <h3 className="text-slate-900">{meeting.client}</h3>
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
                        <Clock className="w-4 h-4 text-slate-400" />
                        <span>{meeting.time}</span>
                        <span className="text-slate-400">•</span>
                        <span>{meeting.duration}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4 text-slate-400" />
                        <span>{meeting.location}</span>
                      </div>
                    </div>
                  </div>
                  <ChevronRight className="w-5 h-5 text-slate-400 group-hover:text-indigo-600 transition-colors flex-shrink-0" />
                </div>
              </button>
            ))}
          </div>
        ) : (
          <div className="space-y-3">
            {pastMeetings.map((meeting) => (
              <div
                key={meeting.id}
                className="bg-white border border-slate-200 rounded-xl p-4 md:p-5"
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1">
                    <h3 className="text-slate-900 mb-1">{meeting.client}</h3>
                    <p className="text-sm text-slate-500 mb-3">{meeting.type}</p>

                    <div className="space-y-2 text-sm text-slate-600 mb-3">
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4 text-slate-400" />
                        <span>{meeting.time}</span>
                        <span className="text-slate-400">•</span>
                        <span>{meeting.duration}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4 text-slate-400" />
                        <span>{meeting.location}</span>
                      </div>
                    </div>

                    <div className="inline-flex items-center gap-1 px-2 py-1 bg-green-50 text-green-700 rounded-lg text-xs">
                      <span>{meeting.outcome}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Mobile Nav */}
      <MobileNav currentView="meetings" onNavigate={onNavigate} />
    </div>
  );
}
