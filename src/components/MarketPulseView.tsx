import { useState } from 'react';
import { Sparkles, Send, Bot, Newspaper, Search, Filter, Globe, TrendingUp, Share2, Bookmark } from 'lucide-react';
import { MobileNav } from './MobileNav';
import { Button } from './ui/button';
import { Input } from './ui/input';

interface MarketPulseViewProps {
  onNavigate: (view: any) => void;
}

export function MarketPulseView({ onNavigate }: MarketPulseViewProps) {
  const [prompt, setPrompt] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [activeTab, setActiveTab] = useState('latest');
  
  const [news, setNews] = useState([
    {
      id: 1,
      title: "Global Commercial Real Estate Outlook 2024",
      summary: "Despite economic headwinds, the APAC region shows resilience with India leading the demand for Grade-A office spaces. Vacancy levels in Bangalore and Hyderabad are dropping faster than anticipated.",
      source: "Global Property Index",
      timestamp: "Today, 9:00 AM",
      category: "Market Trends",
      image: "https://images.unsplash.com/photo-1705955875963-095eee2caefb?q=80&w=1000&auto=format&fit=crop",
      sentiment: "Positive"
    },
    {
      id: 2,
      title: "Green Building Certifications Impact on Valuation",
      summary: "Properties with LEED Platinum or Gold certifications are commanding a 12-15% rental premium in metro cities. Tenants are prioritizing sustainability goals in their leasing decisions.",
      source: "Sustainability Watch",
      timestamp: "Yesterday, 4:30 PM",
      category: "Sustainability",
      image: "https://images.unsplash.com/photo-1758691736933-bb0f88fe2e0c?q=80&w=1000&auto=format&fit=crop",
      sentiment: "Neutral"
    },
    {
      id: 3,
      title: "Co-working Spaces Evolution: Enterprise Adoption Surge",
      summary: "Enterprise clients are increasingly adopting managed office solutions. Flex spaces are expected to contribute to 25% of total office absorption by 2025.",
      source: "Workplace Futures",
      timestamp: "2 days ago",
      category: "Future of Work",
      image: "https://images.unsplash.com/photo-1626187777040-ffb7cb2c5450?q=80&w=1000&auto=format&fit=crop",
      sentiment: "Positive"
    },
    {
      id: 4,
      title: "Bangalore Tech Parks Witness 40% YoY Rental Growth",
      summary: "Premium tech parks in Outer Ring Road and Whitefield are experiencing unprecedented demand from global capability centers. Pre-leasing activity at an all-time high.",
      source: "PropIndex Bangalore",
      timestamp: "3 days ago",
      category: "Regional Spotlight",
      image: "https://images.unsplash.com/photo-1700234678818-b354a49ef9de?q=80&w=1000&auto=format&fit=crop",
      sentiment: "Positive"
    },
    {
      id: 5,
      title: "Warehousing & Logistics Real Estate Boom Continues",
      summary: "E-commerce giants are securing Grade-A warehouses across tier-2 cities. Demand for temperature-controlled and automated facilities is outpacing supply in key industrial corridors.",
      source: "Logistics Realty Report",
      timestamp: "4 days ago",
      category: "Industrial & Logistics",
      image: "https://images.unsplash.com/photo-1726866492047-7f9516558c6e?q=80&w=1000&auto=format&fit=crop",
      sentiment: "Positive"
    },
    {
      id: 6,
      title: "Mumbai's BKC Emerges as India's Most Expensive Office Market",
      summary: "Bandra-Kurla Complex overtakes Connaught Place with rents touching ₹350/sq.ft/month. Limited supply and strong corporate presence drive valuations.",
      source: "Metro Realty Insights",
      timestamp: "5 days ago",
      category: "Premium Markets",
      image: "https://images.unsplash.com/photo-1705955875963-095eee2caefb?q=80&w=1000&auto=format&fit=crop",
      sentiment: "Neutral"
    },
    {
      id: 7,
      title: "REITs Post Strong Q4 Performance: Office Assets Lead",
      summary: "Embassy Office Parks and Mindspace REIT report robust occupancy levels above 90%. Institutional investors are increasing allocations to Indian commercial REITs.",
      source: "Financial Markets Daily",
      timestamp: "1 week ago",
      category: "Investment & Finance",
      image: "https://images.unsplash.com/photo-1764223531702-1614efb82e40?q=80&w=1000&auto=format&fit=crop",
      sentiment: "Positive"
    },
    {
      id: 8,
      title: "Gurgaon's Golf Course Road: The New Corporate Hub",
      summary: "With over 15 million sq.ft under development, Golf Course Road is attracting Fortune 500 companies. Average rental asking rates have risen 18% year-on-year.",
      source: "NCR Realty Watch",
      timestamp: "1 week ago",
      category: "Emerging Markets",
      image: "https://images.unsplash.com/photo-1688306141976-0a8ef8c3f585?q=80&w=1000&auto=format&fit=crop",
      sentiment: "Positive"
    },
    {
      id: 9,
      title: "Retail Renaissance: High-Street Properties Bounce Back",
      summary: "Post-pandemic recovery is complete with footfalls exceeding 2019 levels. Premium retail corridors in Delhi, Mumbai, and Bangalore seeing renewed leasing interest.",
      source: "Retail Realty News",
      timestamp: "1 week ago",
      category: "Retail Sector",
      image: "https://images.unsplash.com/photo-1708750477543-54fcdda099d5?q=80&w=1000&auto=format&fit=crop",
      sentiment: "Positive"
    },
    {
      id: 10,
      title: "Government Proposes 10-Year Tax Holiday for Data Centers",
      summary: "New policy aims to position India as a global data hub. Expected to trigger $50B investment in data center infrastructure across tier-1 and tier-2 cities.",
      source: "Policy & Regulation Daily",
      timestamp: "2 weeks ago",
      category: "Policy Updates",
      image: "https://images.unsplash.com/photo-1693661391267-ad955aeeb564?q=80&w=1000&auto=format&fit=crop",
      sentiment: "Positive"
    },
    {
      id: 11,
      title: "Hyderabad's HITEC City Maintains Strong Occupancy at 92%",
      summary: "Financial district continues to be a preferred destination for global IT firms. New supply of 8 million sq.ft expected to be absorbed within 18 months.",
      source: "South India Realty Digest",
      timestamp: "2 weeks ago",
      category: "Regional Spotlight",
      image: "https://images.unsplash.com/photo-1595282009135-5ea437efe076?q=80&w=1000&auto=format&fit=crop",
      sentiment: "Positive"
    },
    {
      id: 12,
      title: "PropTech Startups Revolutionize Commercial Leasing",
      summary: "AI-powered platforms are reducing deal closure time by 60%. Digital documentation and virtual site visits become industry standard.",
      source: "Tech & Innovation Wire",
      timestamp: "2 weeks ago",
      category: "Technology",
      image: "https://images.unsplash.com/photo-1767122227285-a75dced30c8a?q=80&w=1000&auto=format&fit=crop",
      sentiment: "Insightful"
    }
  ]);

  const handleGenerate = async () => {
    if (!prompt) return;
    setIsGenerating(true);
    // Simulate AI generation
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Add a mock generated news item
    const newItem = {
      id: Date.now(),
      title: `AI Analysis: ${prompt}`,
      summary: "Based on current market data, this specific sector is witnessing a transformation driven by policy changes and foreign direct investment patterns...",
      source: "PropIntelix AI Agent",
      timestamp: "Just now",
      category: "AI Report",
      image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1000&auto=format&fit=crop",
      sentiment: "Insightful"
    };
    
    setNews([newItem, ...news]);
    setIsGenerating(false);
    setPrompt('');
  };

  return (
    <div className="h-full flex flex-col bg-slate-50">
      {/* Header */}
      <header className="bg-white border-b border-slate-200 p-4 md:px-8 md:py-6 sticky top-0 z-10">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <Newspaper className="w-6 h-6 text-primary" />
              <h2 className="text-xl font-bold text-slate-900">Market Pulse</h2>
            </div>
            <p className="text-slate-500 text-sm">Curated news & AI-driven market intelligence</p>
          </div>
          
          {/* AI Agent Input */}
          <div className="flex-1 max-w-2xl w-full">
            <div className="relative flex items-center bg-slate-50 border border-slate-200 rounded-xl p-1 focus-within:ring-2 focus-within:ring-primary/20 focus-within:border-primary transition-all">
              <div className="pl-3 pr-2">
                <Bot className="w-5 h-5 text-primary" />
              </div>
              <input 
                type="text" 
                placeholder="Ask AI for specific market updates (e.g., 'Commercial rental trends in Pune')" 
                className="flex-1 bg-transparent border-none focus:outline-none text-sm py-2"
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleGenerate()}
              />
              <Button 
                size="sm" 
                onClick={handleGenerate} 
                disabled={isGenerating || !prompt}
                className={`rounded-lg transition-all ${isGenerating ? 'opacity-80' : ''}`}
              >
                {isGenerating ? <Sparkles className="w-4 h-4 animate-spin" /> : <Send className="w-4 h-4" />}
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Content */}
      <div className="flex-1 overflow-auto p-4 md:p-8 pb-20 md:pb-8">
        {/* Tabs */}
        <div className="flex gap-2 mb-6 overflow-x-auto pb-2 scrollbar-hide">
          {['latest', 'trending', 'policy', 'global'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all whitespace-nowrap capitalize ${
                activeTab === tab 
                  ? 'bg-slate-900 text-white shadow-md' 
                  : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50'
              }`}
            >
              {tab} News
            </button>
          ))}
        </div>

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {news.map((item) => (
            <div key={item.id} className="bg-white rounded-xl border border-slate-200 overflow-hidden hover:shadow-xl transition-all group flex flex-col">
              <div className="h-48 overflow-hidden relative">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                />
                <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-slate-800 shadow-sm">
                  {item.category}
                </div>
              </div>
              
              <div className="p-5 flex-1 flex flex-col">
                <div className="flex items-center justify-between mb-3 text-xs text-slate-500">
                  <div className="flex items-center gap-1">
                    <Globe className="w-3 h-3" />
                    <span>{item.source}</span>
                  </div>
                  <span>{item.timestamp}</span>
                </div>
                
                <h3 className="text-lg font-bold text-slate-900 mb-2 line-clamp-2 leading-tight group-hover:text-primary transition-colors">
                  {item.title}
                </h3>
                
                <p className="text-sm text-slate-600 mb-4 line-clamp-3 flex-1">
                  {item.summary}
                </p>
                
                <div className="flex items-center justify-between pt-4 border-t border-slate-100 mt-auto">
                  <div className="flex gap-2">
                    <button className="text-slate-400 hover:text-primary transition-colors">
                      <Share2 className="w-4 h-4" />
                    </button>
                    <button className="text-slate-400 hover:text-primary transition-colors">
                      <Bookmark className="w-4 h-4" />
                    </button>
                  </div>
                  <button className="text-sm font-medium text-primary hover:underline flex items-center gap-1">
                    Read Analysis <TrendingUp className="w-3 h-3" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <MobileNav currentView="news" onNavigate={onNavigate} />
    </div>
  );
}