import { Calendar, Clock, MapPin, ChevronRight, Sparkles } from 'lucide-react';

interface UpcomingMeetingsProps {
  onMeetingSelect: (meeting: any) => void;
}

export function UpcomingMeetings({ onMeetingSelect }: UpcomingMeetingsProps) {
  const meetings = [
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
  ];

  return (
    <div className="bg-white border border-slate-200 rounded-xl shadow-sm">
      <div className="p-4 md:p-5 border-b border-slate-200">
        <h3 className="text-slate-900">Upcoming Meetings</h3>
        <p className="text-sm text-slate-500 mt-1">AI briefs ready for review</p>
      </div>

      <div className="divide-y divide-slate-100">
        {meetings.map((meeting) => (
          <button
            key={meeting.id}
            onClick={() => onMeetingSelect(meeting)}
            className="w-full p-4 md:p-5 hover:bg-gradient-to-r hover:from-indigo-50 hover:to-purple-50 transition-all text-left group"
          >
            <div className="flex items-start justify-between mb-3">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1 flex-wrap">
                  <h4 className="text-slate-900 text-sm md:text-base">{meeting.client}</h4>
                  {meeting.insightsReady && (
                    <div className="flex items-center gap-1 px-2 py-0.5 bg-gradient-to-r from-green-50 to-emerald-50 text-green-700 rounded-full text-xs border border-green-100">
                      <Sparkles className="w-3 h-3" />
                      <span>Ready</span>
                    </div>
                  )}
                </div>
                <p className="text-xs md:text-sm text-slate-500">{meeting.type}</p>
              </div>
              <ChevronRight className="w-5 h-5 text-slate-400 group-hover:text-indigo-600 transition-colors" />
            </div>

            <div className="space-y-2 text-xs md:text-sm text-slate-600">
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
          </button>
        ))}
      </div>

      <div className="p-4 border-t border-slate-200">
        <button className="w-full py-2 text-sm text-blue-600 hover:text-blue-700">
          View All Meetings
        </button>
      </div>
    </div>
  );
}