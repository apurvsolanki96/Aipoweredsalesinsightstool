import { Search, Filter, TrendingUp, AlertCircle, User, Phone, Mail, Calendar, Clock, MoreHorizontal, MessageSquare, History, Mic, Play, ChevronRight, X, Briefcase, MapPin, DollarSign, Users, Eye, Building2, Bot, Send } from 'lucide-react';
import { MobileNav } from './MobileNav';
import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from './ui/dialog';
import { Button } from './ui/button';
import { ScrollArea } from './ui/scroll-area';
import { VisuallyHidden } from '@radix-ui/react-visually-hidden';

interface LeadsViewProps {
  onNavigate: (view: any) => void;
}

export function LeadsView({ onNavigate }: LeadsViewProps) {
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedLead, setSelectedLead] = useState<any>(null);
  const [isDetailOpen, setIsDetailOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<'details' | 'history'>('details');

  const leads = [
    {
      id: 1,
      name: 'Aditya Birla Group',
      contact: 'Rajesh Kumar',
      role: 'VP Operations',
      type: 'Commercial Lease',
      status: 'Urgent',
      budget: '₹20L/month',
      location: 'South Mumbai',
      added: '2 hours ago',
      email: 'rajesh.k@adityabirla.com',
      phone: '+91 98765 43210',
      requirements: 'Need 10,000 sqft furnished office space. Proximity to Nariman Point preferred. 24/7 access required.',
      demand: 12, // People looking for similar
      history: [
        { type: 'meeting', date: 'Yesterday', summary: 'Initial discussion regarding requirements. Client stressed on parking space.' },
        { type: 'call', date: '2 days ago', summary: 'Brief intro call. Shared company portfolio.' }
      ]
    },
    {
      id: 2,
      name: 'Tata Consultancy Services',
      contact: 'Priya Sharma',
      role: 'Facilities Manager',
      type: 'Office Space',
      status: 'New',
      budget: '₹50L/month',
      location: 'Pune',
      added: '5 hours ago',
      email: 'priya.s@tcs.com',
      phone: '+91 98765 12345',
      requirements: 'Looking for 25,000 sqft bare shell. Hinjewadi Phase 1. Possession within 3 months.',
      demand: 8,
      history: []
    },
    {
      id: 3,
      name: 'Infosys',
      contact: 'Amit Patel',
      role: 'Admin Head',
      type: 'Tech Park',
      status: 'Follow-up',
      budget: '₹45L/month',
      location: 'Bengaluru',
      added: '1 day ago',
      email: 'amit.p@infosys.com',
      phone: '+91 91234 56789',
      requirements: 'Expansion plan for 500 seats. Electronic City Phase 2.',
      demand: 24,
      history: [
        { type: 'meeting', date: 'Last Week', summary: 'Site visit to Campus A. Client liked the cafeteria.' },
        { type: 'chat', date: '3 days ago', summary: 'Sent floor plans via email.' }
      ]
    },
    {
      id: 4,
      name: 'HDFC Bank',
      contact: 'Suresh Raina',
      role: 'Branch Expansion Lead',
      type: 'Branch Office',
      status: 'Urgent',
      budget: '₹15L/month',
      location: 'Delhi',
      added: '2 days ago',
      email: 'suresh.r@hdfcbank.com',
      phone: '+91 88888 99999',
      requirements: 'Ground floor retail space suitable for banking operations. High visibility needed.',
      demand: 5,
      history: []
    },
    {
      id: 5,
      name: 'Zomato',
      contact: 'Deepinder Goyal',
      role: 'Founder',
      type: 'Corporate HQ',
      status: 'Paused',
      budget: '₹80L/month',
      location: 'Gurgaon',
      added: '3 days ago',
      email: 'deepinder@zomato.com',
      phone: '+91 77777 66666',
      requirements: 'Looking for a quirky, open-plan office space. 50,000 sqft. Golf Course Road.',
      demand: 18,
      history: [
        { type: 'call', date: 'Yesterday', summary: 'Client requested to hold for 2 weeks due to internal restructuring.' }
      ]
    },
  ];

  const filteredLeads = leads.filter(lead => {
    if (selectedFilter === 'all') return true;
    return lead.status.toLowerCase() === selectedFilter;
  });

  const handleLeadClick = (lead: any) => {
    setSelectedLead(lead);
    setIsDetailOpen(true);
    setActiveTab('details');
  };

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
            className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
          />
        </div>

        {/* Filter Pills */}
        <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
          <button
            onClick={() => setSelectedFilter('all')}
            className={`px-4 py-2 rounded-lg text-sm whitespace-nowrap transition-all ${
              selectedFilter === 'all'
                ? 'bg-primary text-primary-foreground shadow-lg'
                : 'bg-white border border-slate-200 text-slate-600'
            }`}
          >
            All Leads
          </button>
          <button
            onClick={() => setSelectedFilter('urgent')}
            className={`px-4 py-2 rounded-lg text-sm whitespace-nowrap transition-all ${
              selectedFilter === 'urgent'
                ? 'bg-primary text-primary-foreground shadow-lg'
                : 'bg-white border border-slate-200 text-slate-600'
            }`}
          >
            Urgent Lead
          </button>
          <button
            onClick={() => setSelectedFilter('new')}
            className={`px-4 py-2 rounded-lg text-sm whitespace-nowrap transition-all ${
              selectedFilter === 'new'
                ? 'bg-primary text-primary-foreground shadow-lg'
                : 'bg-white border border-slate-200 text-slate-600'
            }`}
          >
            New Lead
          </button>
          <button
            onClick={() => setSelectedFilter('follow-up')}
            className={`px-4 py-2 rounded-lg text-sm whitespace-nowrap transition-all ${
              selectedFilter === 'follow-up'
                ? 'bg-primary text-primary-foreground shadow-lg'
                : 'bg-white border border-slate-200 text-slate-600'
            }`}
          >
            Follow-up
          </button>
          <button
            onClick={() => setSelectedFilter('paused')}
            className={`px-4 py-2 rounded-lg text-sm whitespace-nowrap transition-all ${
              selectedFilter === 'paused'
                ? 'bg-primary text-primary-foreground shadow-lg'
                : 'bg-white border border-slate-200 text-slate-600'
            }`}
          >
            Paused
          </button>
        </div>
      </header>

      {/* Content */}
      <div className="flex-1 overflow-auto p-4 md:p-8 pb-20 md:pb-8">
        <div className="space-y-4">
          {filteredLeads.map((lead) => (
            <div
              key={lead.id}
              onClick={() => handleLeadClick(lead)}
              className="bg-white border border-slate-200 rounded-xl p-4 md:p-6 hover:shadow-lg transition-all group cursor-pointer"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-indigo-50 rounded-full flex items-center justify-center">
                    <Building2 className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-slate-900 font-semibold group-hover:text-primary transition-colors">{lead.name}</h3>
                    <p className="text-sm text-slate-500">{lead.type}</p>
                  </div>
                </div>
                <div className={`px-3 py-1 rounded-full text-xs font-medium border ${
                  lead.status === 'Urgent' 
                    ? 'bg-red-50 text-red-700 border-red-100' 
                    : lead.status === 'New'
                    ? 'bg-blue-50 text-blue-700 border-blue-100'
                    : lead.status === 'Paused'
                    ? 'bg-gray-100 text-gray-600 border-gray-200'
                    : 'bg-orange-50 text-orange-700 border-orange-100'
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

              {/* Demand Indicator */}
              <div className="mb-4 bg-slate-50 rounded-lg p-2 flex items-center gap-2 text-xs text-slate-600">
                <Users className="w-4 h-4 text-primary" />
                <span className="font-medium text-slate-900">{lead.demand} people</span>
                <span>are looking for similar properties</span>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                <p className="text-xs text-slate-400">Added {lead.added}</p>
                <div className="flex gap-2">
                  <button className="p-2 text-primary hover:bg-indigo-50 rounded-lg transition-colors">
                    <Phone className="w-4 h-4" />
                  </button>
                  <button className="p-2 text-primary hover:bg-indigo-50 rounded-lg transition-colors">
                    <Mail className="w-4 h-4" />
                  </button>
                  <ChevronRight className="w-4 h-4 text-slate-300 ml-2" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lead Detail Dialog */}
      <Dialog open={isDetailOpen} onOpenChange={setIsDetailOpen}>
        <DialogContent className="sm:max-w-[800px] h-[90vh] md:h-[80vh] flex flex-col p-0 gap-0 overflow-hidden rounded-2xl">
          <VisuallyHidden>
            <DialogTitle>Lead Details</DialogTitle>
            <DialogDescription>View and manage lead information and history</DialogDescription>
          </VisuallyHidden>
          
          {selectedLead && (
            <div className="flex flex-col h-full">
              {/* Header */}
              <div className="bg-slate-900 text-white p-6 shrink-0">
                <div className="flex justify-between items-start">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 bg-white/10 rounded-xl flex items-center justify-center backdrop-blur-sm">
                      <Building2 className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold">{selectedLead.name}</h2>
                      <div className="flex items-center gap-2 text-indigo-200 text-sm">
                        <Briefcase className="w-4 h-4" />
                        <span>{selectedLead.type}</span>
                        <span>•</span>
                        <MapPin className="w-4 h-4" />
                        <span>{selectedLead.location}</span>
                      </div>
                    </div>
                  </div>
                  <Button variant="ghost" size="icon" onClick={() => setIsDetailOpen(false)} className="text-white hover:bg-white/10">
                    <X className="w-5 h-5" />
                  </Button>
                </div>

                <div className="flex gap-4 mt-6">
                  <button 
                    onClick={() => setActiveTab('details')}
                    className={`pb-2 text-sm font-medium transition-colors border-b-2 ${activeTab === 'details' ? 'border-white text-white' : 'border-transparent text-indigo-200 hover:text-white'}`}
                  >
                    Requirement Details
                  </button>
                  <button 
                    onClick={() => setActiveTab('history')}
                    className={`pb-2 text-sm font-medium transition-colors border-b-2 ${activeTab === 'history' ? 'border-white text-white' : 'border-transparent text-indigo-200 hover:text-white'}`}
                  >
                    History & Handoff
                  </button>
                </div>
              </div>

              {/* Body */}
              <div className="flex-1 bg-slate-50 overflow-hidden">
                {activeTab === 'details' ? (
                  <ScrollArea className="h-full">
                    <div className="p-6 space-y-6">
                      {/* Key Stats */}
                      <div className="grid grid-cols-3 gap-4">
                        <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
                          <p className="text-xs text-slate-500 uppercase tracking-wider mb-1">Budget</p>
                          <p className="text-lg font-bold text-primary">{selectedLead.budget}</p>
                        </div>
                        <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
                          <p className="text-xs text-slate-500 uppercase tracking-wider mb-1">Status</p>
                          <p className="text-lg font-bold text-slate-900">{selectedLead.status}</p>
                        </div>
                        <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
                          <p className="text-xs text-slate-500 uppercase tracking-wider mb-1">Added</p>
                          <p className="text-lg font-bold text-slate-900">{selectedLead.added}</p>
                        </div>
                      </div>

                      {/* Client Info */}
                      <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm">
                        <h3 className="text-lg font-semibold text-slate-900 mb-4 flex items-center gap-2">
                          <User className="w-5 h-5 text-primary" /> Client Contact
                        </h3>
                        <div className="grid grid-cols-2 gap-6">
                          <div>
                            <p className="text-sm text-slate-500 mb-1">Name</p>
                            <p className="text-base font-medium text-slate-900">{selectedLead.contact}</p>
                          </div>
                          <div>
                            <p className="text-sm text-slate-500 mb-1">Role</p>
                            <p className="text-base font-medium text-slate-900">{selectedLead.role}</p>
                          </div>
                          <div>
                            <p className="text-sm text-slate-500 mb-1">Email</p>
                            <a href={`mailto:${selectedLead.email}`} className="text-base font-medium text-primary hover:underline">{selectedLead.email}</a>
                          </div>
                          <div>
                            <p className="text-sm text-slate-500 mb-1">Phone</p>
                            <a href={`tel:${selectedLead.phone}`} className="text-base font-medium text-primary hover:underline">{selectedLead.phone}</a>
                          </div>
                        </div>
                      </div>

                      {/* Requirements */}
                      <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm">
                        <h3 className="text-lg font-semibold text-slate-900 mb-4 flex items-center gap-2">
                          <Briefcase className="w-5 h-5 text-primary" /> Specific Requirements
                        </h3>
                        <p className="text-slate-600 leading-relaxed bg-slate-50 p-4 rounded-lg border border-slate-100">
                          {selectedLead.requirements}
                        </p>
                      </div>

                       {/* Demand Insight */}
                       <div className="bg-indigo-50 rounded-xl p-4 border border-indigo-100 flex items-start gap-4">
                        <div className="bg-white p-2 rounded-lg shadow-sm">
                          <Users className="w-6 h-6 text-indigo-600" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-indigo-900">Market Demand Insight</h4>
                          <p className="text-sm text-indigo-700 mt-1">
                            There are <span className="font-bold">{selectedLead.demand} other leads</span> currently looking for similar properties in {selectedLead.location}. Consider prioritizing this client.
                          </p>
                        </div>
                      </div>
                    </div>
                  </ScrollArea>
                ) : (
                  <div className="flex flex-col h-full">
                    {/* Chat Header */}
                    <div className="bg-white p-4 border-b border-slate-200 flex items-center gap-3 shadow-sm z-10">
                      <div className="w-10 h-10 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full flex items-center justify-center text-white">
                        <Bot className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-slate-900">PropIntelix AI Assistant</h3>
                        <p className="text-xs text-slate-500">Helping you catch up on this lead's history</p>
                      </div>
                    </div>

                    {/* Chat Area */}
                    <ScrollArea className="flex-1 p-4">
                      <div className="space-y-4 max-w-3xl mx-auto">
                        {/* AI Intro */}
                        <div className="flex gap-3">
                          <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center shrink-0">
                            <Bot className="w-5 h-5 text-emerald-600" />
                          </div>
                          <div className="bg-white border border-slate-200 p-3 rounded-2xl rounded-tl-none shadow-sm max-w-[80%]">
                            <p className="text-sm text-slate-700">
                              Hello! I've aggregated all the history for <strong>{selectedLead.name}</strong>. This is a secure handover log. Feel free to ask about past meetings, recordings, or specific agreements.
                            </p>
                          </div>
                        </div>

                        {/* History Timeline Mock */}
                        <div className="relative py-4">
                           <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-slate-200"></div>
                           
                           {selectedLead.history.length > 0 ? selectedLead.history.map((event: any, idx: number) => (
                             <div key={idx} className="relative pl-10 mb-6 last:mb-0">
                               <div className="absolute left-[11px] top-1 w-3 h-3 bg-slate-400 rounded-full border-2 border-slate-50"></div>
                               <div className="bg-white p-3 rounded-lg border border-slate-200 shadow-sm">
                                 <div className="flex justify-between items-center mb-1">
                                    <span className="text-xs font-bold uppercase text-slate-500">{event.type}</span>
                                    <span className="text-xs text-slate-400">{event.date}</span>
                                 </div>
                                 <p className="text-sm text-slate-700">{event.summary}</p>
                                 {event.type === 'meeting' && (
                                   <div className="mt-2 flex gap-2">
                                     <button className="text-xs flex items-center gap-1 bg-slate-100 px-2 py-1 rounded hover:bg-slate-200 transition-colors">
                                       <Play className="w-3 h-3" /> Play Recording
                                     </button>
                                     <button className="text-xs flex items-center gap-1 bg-slate-100 px-2 py-1 rounded hover:bg-slate-200 transition-colors">
                                       <MessageSquare className="w-3 h-3" /> View Transcript
                                     </button>
                                   </div>
                                 )}
                               </div>
                             </div>
                           )) : (
                             <div className="pl-10 text-sm text-slate-500 italic">No past history recorded yet.</div>
                           )}
                        </div>

                        {/* AI Suggestion */}
                        <div className="flex gap-3">
                          <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center shrink-0">
                            <Bot className="w-5 h-5 text-emerald-600" />
                          </div>
                          <div className="bg-white border border-slate-200 p-3 rounded-2xl rounded-tl-none shadow-sm max-w-[80%]">
                            <p className="text-sm text-slate-700">
                              <strong>Suggestion:</strong> Based on the last interaction, you should schedule a follow-up regarding the site visit feedback. Would you like me to draft an email?
                            </p>
                          </div>
                        </div>
                      </div>
                    </ScrollArea>

                    {/* Chat Input */}
                    <div className="p-4 bg-white border-t border-slate-200">
                      <div className="relative max-w-3xl mx-auto">
                        <input 
                          type="text" 
                          placeholder="Ask about this lead (e.g., 'What was their budget concern?')" 
                          className="w-full pl-4 pr-12 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                        />
                        <div className="absolute right-2 top-1/2 -translate-y-1/2 flex gap-1">
                          <button className="p-2 text-slate-400 hover:text-primary transition-colors">
                            <Mic className="w-4 h-4" />
                          </button>
                          <button className="p-2 text-primary hover:bg-indigo-50 rounded-lg transition-colors">
                            <Send className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>

      {/* Mobile Nav */}
      <MobileNav currentView="leads" onNavigate={onNavigate} />
    </div>
  );
}