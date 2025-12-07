import { ArrowLeft, Calendar, Clock, MapPin, Building2, TrendingUp, Users, DollarSign, FileText, Sparkles, Download, Share2 } from 'lucide-react';

interface MeetingBriefProps {
  meeting: any;
  onBack: () => void;
}

export function MeetingBrief({ meeting, onBack }: MeetingBriefProps) {
  const briefSections = [
    {
      id: 'company',
      title: 'Company Overview',
      icon: Building2,
      items: [
        { label: 'Industry', value: 'Technology & IT Services' },
        { label: 'Employees', value: '~52,000 globally' },
        { label: 'Headquarters', value: 'Pune, Maharashtra' },
        { label: 'Key Markets', value: 'India, USA, Europe, APAC' },
      ],
    },
    {
      id: 'financial',
      title: 'Financial Highlights',
      icon: DollarSign,
      items: [
        { label: 'Revenue (FY23)', value: '₹52,000 Cr', trend: '+12.4%' },
        { label: 'Net Profit', value: '₹6,800 Cr', trend: '+8.2%' },
        { label: 'Market Cap', value: '₹2.1 Lakh Cr', trend: '+15.3%' },
        { label: 'Credit Rating', value: 'AAA (Stable)' },
      ],
    },
  ];

  const keyInsights = [
    {
      type: 'Financial',
      title: 'Strong Q3 Performance',
      description: 'Tech Mahindra reported 18% YoY revenue growth in Q3. Digital transformation services segment grew 24%, indicating strong demand.',
      source: 'Economic Times',
      time: '3 hours ago',
      sentiment: 'positive',
    },
    {
      type: 'Expansion',
      title: 'New Office Space Requirements',
      description: 'LinkedIn posts indicate hiring 2,500+ employees in Gurgaon region. Likely seeking 150,000-200,000 sq ft Grade-A office space.',
      source: 'LinkedIn',
      time: '1 day ago',
      sentiment: 'positive',
    },
    {
      type: 'News',
      title: 'Leadership on Hybrid Work Model',
      description: 'CEO mentioned preference for SEZ properties with modern amenities. Focus on locations with metro connectivity and tech ecosystem.',
      source: 'Business Standard',
      time: '2 days ago',
      sentiment: 'neutral',
    },
  ];

  const talkingPoints = [
    'Highlight DLF Cyber Hub\'s proximity to existing Tech Mahindra offices',
    'Emphasize SEZ tax benefits and Grade-A certification',
    'Mention 24% growth in digital services - aligns with modern workspace needs',
    'Reference their preference for metro-connected properties',
    'Discuss flexible lease terms for 150,000+ sq ft requirements',
  ];

  return (
    <div className="h-full bg-slate-50 flex flex-col">
      {/* Header */}
      <header className="bg-white border-b border-slate-200 px-4 md:px-8 py-4 md:py-6">
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-slate-600 hover:text-slate-900 mb-4"
        >
          <ArrowLeft className="w-5 h-5" />
          <span>Back to Dashboard</span>
        </button>

        <div className="flex items-start justify-between flex-col md:flex-row gap-4">
          <div className="flex-1">
            <div className="flex items-center gap-2 md:gap-3 mb-2 flex-wrap">
              <h2 className="text-slate-900">{meeting.client}</h2>
              <div className="flex items-center gap-1.5 px-3 py-1 bg-gradient-to-r from-green-50 to-emerald-50 text-green-700 rounded-lg border border-green-100">
                <Sparkles className="w-4 h-4" />
                <span className="text-sm">AI Brief Generated</span>
              </div>
            </div>
            <p className="text-slate-500 mb-4">{meeting.company}</p>

            <div className="flex items-center gap-4 md:gap-6 text-sm text-slate-600 flex-wrap">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-slate-400" />
                <span>{meeting.time}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-slate-400" />
                <span>{meeting.duration}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-slate-400" />
                <span>{meeting.location}</span>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3 w-full md:w-auto">
            <button className="flex-1 md:flex-none px-4 py-2 border border-slate-200 rounded-lg text-slate-600 hover:bg-slate-50 flex items-center justify-center gap-2">
              <Share2 className="w-4 h-4" />
              <span>Share</span>
            </button>
            <button className="flex-1 md:flex-none px-4 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg hover:from-indigo-700 hover:to-purple-700 shadow-lg shadow-indigo-500/30 flex items-center justify-center gap-2">
              <Download className="w-4 h-4" />
              <span>Export</span>
            </button>
          </div>
        </div>
      </header>

      {/* Content */}
      <div className="flex-1 overflow-auto p-4 md:p-8 pb-20 md:pb-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {/* Left Column - Company & Financial Info */}
          <div className="md:col-span-2 space-y-4 md:space-y-6">
            {/* Quick Stats */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {briefSections.map((section) => {
                const Icon = section.icon;
                return (
                  <div key={section.id} className="bg-white border border-slate-200 rounded-xl p-4 md:p-5 shadow-sm">
                    <div className="flex items-center gap-2 mb-4">
                      <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-lg flex items-center justify-center shadow-md">
                        <Icon className="w-5 h-5 text-white" />
                      </div>
                      <h3 className="text-slate-900">{section.title}</h3>
                    </div>
                    <div className="space-y-3">
                      {section.items.map((item, idx) => (
                        <div key={idx} className="flex items-center justify-between">
                          <span className="text-sm text-slate-500">{item.label}</span>
                          <div className="flex items-center gap-2">
                            <span className="text-sm text-slate-900">{item.value}</span>
                            {item.trend && (
                              <span className="text-xs text-green-600">{item.trend}</span>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Key Insights */}
            <div className="bg-white border border-slate-200 rounded-xl p-4 md:p-6 shadow-sm">
              <div className="flex items-center gap-2 mb-5">
                <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-lg flex items-center justify-center shadow-md">
                  <TrendingUp className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-slate-900">Key Insights from AI Analysis</h3>
              </div>

              <div className="space-y-4">
                {keyInsights.map((insight, idx) => (
                  <div key={idx} className="p-4 bg-gradient-to-br from-slate-50 to-slate-50 rounded-lg border border-slate-100">
                    <div className="flex items-start justify-between mb-2 flex-wrap gap-2">
                      <div className="flex items-center gap-2">
                        <span className="text-xs px-2 py-1 bg-gradient-to-r from-indigo-100 to-purple-100 text-indigo-700 rounded-full">
                          {insight.type}
                        </span>
                        <h4 className="text-slate-900 text-sm md:text-base">{insight.title}</h4>
                      </div>
                      <span className="text-xs text-slate-500">{insight.time}</span>
                    </div>
                    <p className="text-sm text-slate-600 mb-2">{insight.description}</p>
                    <div className="flex items-center gap-2 text-xs text-slate-500">
                      <FileText className="w-3.5 h-3.5" />
                      <span>Source: {insight.source}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Talking Points */}
          <div className="md:col-span-1">
            <div className="bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 text-white rounded-xl p-5 md:p-6 mb-4 md:mb-6 shadow-xl">
              <div className="flex items-center gap-2 mb-4">
                <Users className="w-5 h-5" />
                <h3>Suggested Talking Points</h3>
              </div>
              <p className="text-sm text-indigo-100 mb-6">
                AI-curated conversation starters based on latest insights
              </p>

              <div className="space-y-3">
                {talkingPoints.map((point, idx) => (
                  <div key={idx} className="flex gap-3 p-3 bg-white/10 rounded-lg backdrop-blur-sm hover:bg-white/20 transition-colors">
                    <div className="flex-shrink-0 w-6 h-6 bg-white/20 rounded-full flex items-center justify-center text-sm">
                      {idx + 1}
                    </div>
                    <p className="text-sm text-white">{point}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Recent Activity */}
            <div className="bg-white border border-slate-200 rounded-xl p-4 md:p-5 shadow-sm">
              <h3 className="text-slate-900 mb-4">Recent Activity</h3>
              <div className="space-y-3 text-sm">
                <div className="pb-3 border-b border-slate-100">
                  <p className="text-slate-900 mb-1">Last Interaction</p>
                  <p className="text-slate-500">Site visit - 3 weeks ago</p>
                </div>
                <div className="pb-3 border-b border-slate-100">
                  <p className="text-slate-900 mb-1">Properties Shared</p>
                  <p className="text-slate-500">DLF Cyber Hub, Prestige Tech Park</p>
                </div>
                <div>
                  <p className="text-slate-900 mb-1">Status</p>
                  <span className="inline-block px-2 py-1 bg-green-50 text-green-700 rounded text-xs">
                    Hot Lead
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}