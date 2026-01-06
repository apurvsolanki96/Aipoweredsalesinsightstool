import { Search, Building2, TrendingUp, MapPin, ArrowRight, CheckCircle2 } from 'lucide-react';
import { UpcomingMeetings } from './UpcomingMeetings';
import { Button } from './ui/button';

interface DashboardProps {
  onMeetingSelect: (meeting: any) => void;
  onNavigate: (view: any) => void;
}

export function Dashboard({ onMeetingSelect, onNavigate }: DashboardProps) {
  return (
    <div className="min-h-screen bg-slate-50 pb-20">
      {/* Hero Section */}
      <div className="relative bg-[#001529] py-20 px-4">
        <div className="absolute inset-0 opacity-20">
          <img 
            src="https://images.unsplash.com/photo-1595282009135-5ea437efe076?q=80&w=2070&auto=format&fit=crop" 
            alt="Hero Background" 
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="relative z-10 max-w-5xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Find Your Perfect <span className="text-emerald-400">Commercial Space</span>
          </h1>
          <p className="text-indigo-100 text-lg mb-10 max-w-2xl mx-auto">
            Access India's largest B2B inventory of Grade-A offices, warehouses, and retail spaces powered by AI intelligence.
          </p>

          {/* Search Bar */}
          <div className="bg-white p-4 rounded-2xl shadow-xl max-w-4xl mx-auto flex flex-col md:flex-row gap-4 items-center">
            <div className="flex-1 w-full md:border-r border-slate-200 pr-4">
              <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1 text-left">Location</label>
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-primary" />
                <input type="text" placeholder="Enter City or Locality" className="w-full outline-none text-slate-900 font-medium" />
              </div>
            </div>
            <div className="flex-1 w-full md:border-r border-slate-200 px-4">
              <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1 text-left">Property Type</label>
              <div className="flex items-center gap-2">
                <Building2 className="w-5 h-5 text-primary" />
                <select className="w-full outline-none text-slate-900 font-medium bg-transparent">
                  <option>Office Space</option>
                  <option>Co-working</option>
                  <option>Warehouse</option>
                  <option>Retail Shop</option>
                </select>
              </div>
            </div>
            <div className="flex-1 w-full px-4">
               <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1 text-left">Budget</label>
               <input type="text" placeholder="Max Price" className="w-full outline-none text-slate-900 font-medium" />
            </div>
            <Button className="w-full md:w-auto h-12 px-8 bg-primary hover:bg-indigo-700 text-lg shadow-lg">
              Search
            </Button>
          </div>
        </div>
      </div>

      {/* Quick Access Dashboard (Agent View) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-xl shadow-lg border border-slate-100 hover:border-primary/50 transition-all cursor-pointer group" onClick={() => onNavigate('leads')}>
             <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center group-hover:bg-blue-100 transition-colors">
                   <TrendingUp className="w-6 h-6 text-blue-600" />
                </div>
                <span className="text-2xl font-bold text-slate-900">12</span>
             </div>
             <h3 className="font-semibold text-slate-900 mb-1">Active Leads</h3>
             <p className="text-sm text-slate-500">3 urgent follow-ups today</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg border border-slate-100 hover:border-primary/50 transition-all cursor-pointer group" onClick={() => onNavigate('properties')}>
             <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-full bg-emerald-50 flex items-center justify-center group-hover:bg-emerald-100 transition-colors">
                   <Building2 className="w-6 h-6 text-emerald-600" />
                </div>
                <span className="text-2xl font-bold text-slate-900">28</span>
             </div>
             <h3 className="font-semibold text-slate-900 mb-1">Verified Properties</h3>
             <p className="text-sm text-slate-500">5 new additions this week</p>
          </div>

          <div className="bg-gradient-to-br from-indigo-600 to-purple-600 p-6 rounded-xl shadow-lg text-white">
             <h3 className="font-bold text-lg mb-2">Upcoming Schedule</h3>
             <div className="space-y-3">
               <div className="bg-white/10 p-3 rounded-lg backdrop-blur-sm flex items-center justify-between">
                  <div>
                    <p className="font-medium text-sm">Client Meeting @ Tech Park</p>
                    <p className="text-xs text-indigo-200">2:00 PM • Today</p>
                  </div>
                  <Button size="sm" variant="secondary" className="h-8 text-xs bg-white text-primary hover:bg-white/90" onClick={() => onNavigate('meetings')}>View</Button>
               </div>
             </div>
          </div>
        </div>
      </div>

      {/* Featured Commercial Categories */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-2xl font-bold text-slate-900 mb-8">Explore by Category</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { label: 'Grade-A Offices', count: '150+ Listings', img: 'https://images.unsplash.com/photo-1758691736933-bb0f88fe2e0c?q=80&w=1000&auto=format&fit=crop' },
            { label: 'Warehousing', count: '80+ Listings', img: 'https://images.unsplash.com/photo-1621384843923-f1a2d8b7eb3e?q=80&w=1000&auto=format&fit=crop' },
            { label: 'Retail Spaces', count: '45+ Listings', img: 'https://images.unsplash.com/photo-1759153820384-12c9ddf8bd8d?q=80&w=1000&auto=format&fit=crop' },
            { label: 'Co-working', count: '120+ Seats', img: 'https://images.unsplash.com/photo-1626187777040-ffb7cb2c5450?q=80&w=1000&auto=format&fit=crop' },
          ].map((cat, idx) => (
            <div key={idx} className="group relative h-48 rounded-2xl overflow-hidden cursor-pointer" onClick={() => onNavigate('properties')}>
               <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors z-10" />
               <img src={cat.img} alt={cat.label} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
               <div className="absolute bottom-4 left-4 z-20 text-white">
                  <h3 className="font-bold text-lg">{cat.label}</h3>
                  <p className="text-xs text-white/80">{cat.count}</p>
               </div>
            </div>
          ))}
        </div>
      </div>

      {/* Why Choose PropIntelix */}
      <div className="bg-white py-16 border-y border-slate-200">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
               <h2 className="text-3xl font-bold text-slate-900">Why PropIntelix?</h2>
               <p className="text-slate-500 mt-2">The trusted platform for modern commercial real estate.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
               <div className="p-6 text-center">
                  <div className="w-16 h-16 bg-indigo-50 rounded-2xl flex items-center justify-center mx-auto mb-4">
                     <CheckCircle2 className="w-8 h-8 text-indigo-600" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">100% Verified Listings</h3>
                  <p className="text-slate-500">Every property is physically verified by our ground team to ensure authenticity.</p>
               </div>
               <div className="p-6 text-center">
                  <div className="w-16 h-16 bg-emerald-50 rounded-2xl flex items-center justify-center mx-auto mb-4">
                     <TrendingUp className="w-8 h-8 text-emerald-600" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">AI Market Insights</h3>
                  <p className="text-slate-500">Make data-driven decisions with real-time price trends and demand analysis.</p>
               </div>
               <div className="p-6 text-center">
                  <div className="w-16 h-16 bg-orange-50 rounded-2xl flex items-center justify-center mx-auto mb-4">
                     <Building2 className="w-8 h-8 text-orange-600" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">End-to-End Support</h3>
                  <p className="text-slate-500">From discovery to documentation, our B2B experts guide you at every step.</p>
               </div>
            </div>
         </div>
      </div>

      {/* Featured Projects Carousel (Static Mock) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
         <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-slate-900">Featured Projects</h2>
            <Button variant="outline" onClick={() => onNavigate('properties')}>View All <ArrowRight className="w-4 h-4 ml-2" /></Button>
         </div>
         
         <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
               { name: 'Prestige Tech Cloud', location: 'Whitefield, Bangalore', price: '85', possession: 'Dec 2024', img: 'https://images.unsplash.com/photo-1758691736933-bb0f88fe2e0c?q=80&w=800&auto=format&fit=crop' },
               { name: 'DLF Cyber Park', location: 'Gurgaon, Delhi NCR', price: '120', possession: 'Ready to Move', img: 'https://images.unsplash.com/photo-1595282009135-5ea437efe076?q=80&w=800&auto=format&fit=crop' },
               { name: 'Embassy Tech Village', location: 'ORR, Bangalore', price: '95', possession: 'Mar 2025', img: 'https://images.unsplash.com/photo-1626187777040-ffb7cb2c5450?q=80&w=800&auto=format&fit=crop' },
            ].map((project, i) => (
               <div key={i} className="border border-slate-200 rounded-xl overflow-hidden hover:shadow-lg transition-all cursor-pointer" onClick={() => onNavigate('properties')}>
                  <div className="h-48 bg-slate-200 relative">
                     <img 
                        src={project.img} 
                        alt={project.name} 
                        className="w-full h-full object-cover"
                     />
                     <div className="absolute top-4 right-4 bg-primary text-white text-xs font-bold px-2 py-1 rounded">Pre-Leased</div>
                  </div>
                  <div className="p-4">
                     <h3 className="font-bold text-lg text-slate-900 mb-1">{project.name}</h3>
                     <p className="text-sm text-slate-500 mb-3">{project.location}</p>
                     <div className="flex justify-between items-center pt-3 border-t border-slate-100">
                        <span className="font-semibold text-primary">₹{project.price}/sq.ft</span>
                        <span className="text-xs text-slate-400">Possession: {project.possession}</span>
                     </div>
                  </div>
               </div>
            ))}
         </div>
      </div>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-300 py-12">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
               <h3 className="text-white text-xl font-bold mb-4">PropIntelix</h3>
               <p className="text-sm text-slate-400">
                  India's leading B2B commercial real estate intelligence platform.
               </p>
            </div>
            <div>
               <h4 className="text-white font-semibold mb-4">Quick Links</h4>
               <ul className="space-y-2 text-sm">
                  <li><button onClick={() => onNavigate('dashboard')} className="hover:text-white">Home</button></li>
                  <li><button onClick={() => onNavigate('properties')} className="hover:text-white">Properties</button></li>
                  <li><button onClick={() => onNavigate('news')} className="hover:text-white">Market Pulse</button></li>
               </ul>
            </div>
            <div>
               <h4 className="text-white font-semibold mb-4">Services</h4>
               <ul className="space-y-2 text-sm">
                  <li>Tenant Representation</li>
                  <li>Landlord Representation</li>
                  <li>Investment Advisory</li>
                  <li>Market Research</li>
               </ul>
            </div>
            <div>
               <h4 className="text-white font-semibold mb-4">Contact</h4>
               <ul className="space-y-2 text-sm">
                  <li>support@propintelix.com</li>
                  <li>+91 1800-123-4567</li>
                  <li>Bangalore, India</li>
               </ul>
            </div>
         </div>
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 pt-8 border-t border-slate-800 text-center text-xs text-slate-500">
            &copy; 2024 PropIntelix. All rights reserved.
         </div>
      </footer>
    </div>
  );
}