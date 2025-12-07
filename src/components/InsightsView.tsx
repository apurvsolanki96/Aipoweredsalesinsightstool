import { TrendingUp, Search, Filter, Building2, DollarSign, Users } from 'lucide-react';
import { MobileNav } from './MobileNav';
import { useState } from 'react';

interface InsightsViewProps {
  onNavigate: (view: any) => void;
}

export function InsightsView({ onNavigate }: InsightsViewProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const marketInsights = [
    {
      id: 1,
      title: 'Gurgaon SEZ Occupancy Hits 5-Year High',
      category: 'Market Trend',
      description: 'Commercial SEZ properties in Gurgaon reaching 94% occupancy. Strong demand from tech companies driving rental yields up by 12%.',
      impact: 'High',
      date: '2 days ago',
      gradient: 'from-green-500 to-emerald-500',
    },
    {
      id: 2,
      title: 'New Metro Line Boosts Property Values',
      category: 'Infrastructure',
      description: 'Properties along new Cyber City metro extension see 18% appreciation. Connectivity improvements driving corporate interest.',
      impact: 'High',
      date: '3 days ago',
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      id: 3,
      title: 'Grade-A Office Rents Surge in Bengaluru',
      category: 'Market Trend',
      description: 'Tech corridor properties commanding premium rates. Average rental up 15% YoY with limited new supply.',
      impact: 'Medium',
      date: '5 days ago',
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      id: 4,
      title: 'Hybrid Work Model Reshapes Demand',
      category: 'Industry Shift',
      description: 'Companies seeking smaller, premium spaces with modern amenities. Flexible lease terms becoming standard.',
      impact: 'Medium',
      date: '1 week ago',
      gradient: 'from-orange-500 to-amber-500',
    },
  ];

  const categories = [
    { id: 'all', label: 'All Insights' },
    { id: 'market', label: 'Market Trends' },
    { id: 'infrastructure', label: 'Infrastructure' },
    { id: 'policy', label: 'Policy Updates' },
    { id: 'industry', label: 'Industry Shifts' },
  ];

  return (
    <div className="h-full flex flex-col bg-slate-50">
      {/* Header */}
      <header className="bg-white border-b border-slate-200 p-4 md:px-8 md:py-6 sticky top-0 z-10">
        <div className="mb-4">
          <h2 className="text-slate-900">Market Insights</h2>
          <p className="text-slate-500 mt-1">AI-powered market intelligence and trends</p>
        </div>

        {/* Search */}
        <div className="relative mb-4">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search insights..."
            className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
          />
        </div>

        {/* Categories */}
        <div className="flex gap-2 overflow-x-auto pb-2">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-4 py-2 rounded-lg text-sm whitespace-nowrap transition-all ${
                selectedCategory === category.id
                  ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg'
                  : 'bg-white border border-slate-200 text-slate-600'
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>
      </header>

      {/* Stats */}
      <div className="px-4 md:px-8 py-4 md:py-6 bg-white border-b border-slate-200">
        <div className="grid grid-cols-3 gap-3 md:gap-4">
          <div className="text-center">
            <div className="w-12 h-12 mx-auto mb-2 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center shadow-lg">
              <TrendingUp className="w-6 h-6 text-white" />
            </div>
            <p className="text-xl md:text-2xl text-slate-900">24</p>
            <p className="text-xs text-slate-500">New Insights</p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 mx-auto mb-2 rounded-xl bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center shadow-lg">
              <Building2 className="w-6 h-6 text-white" />
            </div>
            <p className="text-xl md:text-2xl text-slate-900">15</p>
            <p className="text-xs text-slate-500">Properties</p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 mx-auto mb-2 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center shadow-lg">
              <Users className="w-6 h-6 text-white" />
            </div>
            <p className="text-xl md:text-2xl text-slate-900">8</p>
            <p className="text-xs text-slate-500">Companies</p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-auto p-4 md:p-8 pb-20 md:pb-8">
        <div className="space-y-4">
          {marketInsights.map((insight) => (
            <div
              key={insight.id}
              className="bg-white border border-slate-200 rounded-xl p-4 md:p-5 hover:shadow-lg transition-all"
            >
              <div className="flex items-start justify-between mb-3">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2 flex-wrap">
                    <span className={`text-xs px-3 py-1 bg-gradient-to-r ${insight.gradient} text-white rounded-full shadow-md`}>
                      {insight.category}
                    </span>
                    <span className={`text-xs px-2 py-1 rounded-full ${
                      insight.impact === 'High' 
                        ? 'bg-red-50 text-red-700' 
                        : 'bg-orange-50 text-orange-700'
                    }`}>
                      {insight.impact} Impact
                    </span>
                  </div>
                  <h3 className="text-slate-900 mb-2">{insight.title}</h3>
                  <p className="text-sm text-slate-600 mb-3">{insight.description}</p>
                  <p className="text-xs text-slate-500">{insight.date}</p>
                </div>
              </div>
              <button className="w-full md:w-auto px-4 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg text-sm hover:from-indigo-700 hover:to-purple-700 shadow-md">
                Read Full Analysis
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Mobile Nav */}
      <MobileNav currentView="insights" onNavigate={onNavigate} />
    </div>
  );
}
