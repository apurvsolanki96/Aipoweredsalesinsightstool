import { Search, Filter, TrendingUp, AlertCircle, User, Phone, Mail, Calendar, Clock, MoreHorizontal } from 'lucide-react';
import { MobileNav } from './MobileNav';
import { useState } from 'react';

interface LeadsViewProps {
  onNavigate: (view: any) => void;
}

export function LeadsView({ onNavigate }: LeadsViewProps) {
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const leads = [
    {
      id: 1,
      name: 'Aditya Birla Group',
      contact: 'Rajesh Kumar',
      type: 'Commercial Lease',
      status: 'Urgent',
      budget: '₹20L/month',
      location: 'South Mumbai',
      added: '2 hours ago',
    },
    {
      id: 2,
      name: 'Tata Consultancy Services',
      contact: 'Priya Sharma',
      type: 'Office Space',
      status: 'New',
      budget: '₹50L/month',
      location: 'Pune',
      added: '5 hours ago',
    },
    {
      id: 3,
      name: 'Infosys',
      contact: 'Amit Patel',
      type: 'Tech Park',
      status: 'Follow-up',
      budget: '₹45L/month',
      location: 'Bengaluru',
      added: '1 day ago',
    },
    {
      id: 4,
      name: 'HDFC Bank',
      contact: 'Suresh Raina',
      type: 'Branch Office',
      status: 'Urgent',
      budget: '₹15L/month',
      location: 'Delhi',
      added: '2 days ago',
    },
    {
      id: 5,
      name: 'Zomato',
      contact: 'Deepinder Goyal',
      type: 'Corporate HQ',
      status: 'New',
      budget: '₹80L/month',
      location: 'Gurgaon',
      added: '3 days ago',
    },
  ];

  const filteredLeads = leads.filter(lead => {
    if (selectedFilter === 'all') return true;
    return lead.status.toLowerCase() === selectedFilter;
  });

  return (
    <div className="h-full flex flex-col bg-slate-50">
      {/* Header */}
      <header className="bg-white border-b border-slate-200 p-4 md:px-8 md:py-6 sticky top-0 z-10">
        <div className="mb-4">
          <h2 className="text-slate-900">Leads</h2>
          <p className="text-slate-500 mt-1">Manage and track your potential clients</p>
        </div>

        {/* Search */}
        <div className="relative mb-4">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search leads..."
            className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
          />
        </div>

        {/* Filter Pills */}
        <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
          <button
            onClick={() => setSelectedFilter('all')}
            className={`px-4 py-2 rounded-lg text-sm whitespace-nowrap transition-all ${
              selectedFilter === 'all'
                ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg'
                : 'bg-white border border-slate-200 text-slate-600'
            }`}
          >
            All Leads
          </button>
          <button
            onClick={() => setSelectedFilter('urgent')}
            className={`px-4 py-2 rounded-lg text-sm whitespace-nowrap transition-all ${
              selectedFilter === 'urgent'
                ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg'
                : 'bg-white border border-slate-200 text-slate-600'
            }`}
          >
            Urgent Lead
          </button>
          <button
            onClick={() => setSelectedFilter('new')}
            className={`px-4 py-2 rounded-lg text-sm whitespace-nowrap transition-all ${
              selectedFilter === 'new'
                ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg'
                : 'bg-white border border-slate-200 text-slate-600'
            }`}
          >
            New Lead
          </button>
          <button
            onClick={() => setSelectedFilter('follow-up')}
            className={`px-4 py-2 rounded-lg text-sm whitespace-nowrap transition-all ${
              selectedFilter === 'follow-up'
                ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg'
                : 'bg-white border border-slate-200 text-slate-600'
            }`}
          >
            Follow-up
          </button>
        </div>
      </header>

      {/* Content */}
      <div className="flex-1 overflow-auto p-4 md:p-8 pb-20 md:pb-8">
        <div className="space-y-4">
          {filteredLeads.map((lead) => (
            <div
              key={lead.id}
              className="bg-white border border-slate-200 rounded-xl p-4 md:p-6 hover:shadow-lg transition-all group"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-indigo-50 rounded-full flex items-center justify-center">
                    <Building2 className="w-6 h-6 text-indigo-600" />
                  </div>
                  <div>
                    <h3 className="text-slate-900 font-semibold">{lead.name}</h3>
                    <p className="text-sm text-slate-500">{lead.type}</p>
                  </div>
                </div>
                <div className={`px-3 py-1 rounded-full text-xs font-medium border ${
                  lead.status === 'Urgent' 
                    ? 'bg-red-50 text-red-700 border-red-100' 
                    : lead.status === 'New'
                    ? 'bg-blue-50 text-blue-700 border-blue-100'
                    : 'bg-slate-50 text-slate-700 border-slate-100'
                }`}>
                  {lead.status}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="flex items-center gap-2 text-sm text-slate-600">
                  <User className="w-4 h-4 text-slate-400" />
                  <span>{lead.contact}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-600">
                  <TrendingUp className="w-4 h-4 text-slate-400" />
                  <span>{lead.budget}</span>
                </div>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                <p className="text-xs text-slate-400">Added {lead.added}</p>
                <div className="flex gap-2">
                  <button className="p-2 text-indigo-600 hover:bg-indigo-50 rounded-lg transition-colors">
                    <Phone className="w-4 h-4" />
                  </button>
                  <button className="p-2 text-indigo-600 hover:bg-indigo-50 rounded-lg transition-colors">
                    <Mail className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Mobile Nav */}
      <MobileNav currentView="leads" onNavigate={onNavigate} />
    </div>
  );
}

// Helper icon
function Building2(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z" />
      <path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2" />
      <path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2" />
      <path d="M10 6h4" />
      <path d="M10 10h4" />
      <path d="M10 14h4" />
      <path d="M10 18h4" />
    </svg>
  );
}
