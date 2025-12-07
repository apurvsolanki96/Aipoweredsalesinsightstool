import { Building2, MapPin, DollarSign, TrendingUp, Search, Filter } from 'lucide-react';
import { MobileNav } from './MobileNav';
import { useState } from 'react';

interface PropertiesViewProps {
  onNavigate: (view: any) => void;
}

export function PropertiesView({ onNavigate }: PropertiesViewProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('all');

  const properties = [
    {
      id: 1,
      name: 'DLF Cyber Hub',
      location: 'Gurgaon, Haryana',
      type: 'Grade-A Office',
      available: '25,000 sq ft',
      price: '₹125/sq ft',
      status: 'Available',
      trending: true,
      features: ['SEZ', 'Metro Connected', 'Grade-A'],
    },
    {
      id: 2,
      name: 'Prestige Tech Park',
      location: 'Bengaluru, Karnataka',
      type: 'Tech Park',
      available: '50,000 sq ft',
      price: '₹95/sq ft',
      status: 'Available',
      trending: true,
      features: ['SEZ', 'Modern Amenities'],
    },
    {
      id: 3,
      name: 'Embassy Tech Village',
      location: 'Bengaluru, Karnataka',
      type: 'Grade-A Office',
      available: '15,000 sq ft',
      price: '₹110/sq ft',
      status: 'Limited',
      trending: false,
      features: ['Grade-A', 'Prime Location'],
    },
    {
      id: 4,
      name: 'Mindspace Business Park',
      location: 'Hyderabad, Telangana',
      type: 'Business Park',
      available: '30,000 sq ft',
      price: '₹85/sq ft',
      status: 'Available',
      trending: false,
      features: ['SEZ', 'Parking'],
    },
  ];

  return (
    <div className="h-full flex flex-col bg-slate-50">
      {/* Header */}
      <header className="bg-white border-b border-slate-200 p-4 md:px-8 md:py-6 sticky top-0 z-10">
        <div className="mb-4">
          <h2 className="text-slate-900">Properties</h2>
          <p className="text-slate-500 mt-1">Browse and track commercial properties</p>
        </div>

        {/* Search */}
        <div className="relative mb-4">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search properties..."
            className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
          />
        </div>

        {/* Filter */}
        <div className="flex gap-2 overflow-x-auto pb-2">
          <button
            onClick={() => setSelectedFilter('all')}
            className={`px-4 py-2 rounded-lg text-sm whitespace-nowrap transition-all ${
              selectedFilter === 'all'
                ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg'
                : 'bg-white border border-slate-200 text-slate-600'
            }`}
          >
            All Properties
          </button>
          <button
            onClick={() => setSelectedFilter('sez')}
            className={`px-4 py-2 rounded-lg text-sm whitespace-nowrap transition-all ${
              selectedFilter === 'sez'
                ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg'
                : 'bg-white border border-slate-200 text-slate-600'
            }`}
          >
            SEZ
          </button>
          <button
            onClick={() => setSelectedFilter('grade-a')}
            className={`px-4 py-2 rounded-lg text-sm whitespace-nowrap transition-all ${
              selectedFilter === 'grade-a'
                ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg'
                : 'bg-white border border-slate-200 text-slate-600'
            }`}
          >
            Grade-A
          </button>
          <button
            onClick={() => setSelectedFilter('trending')}
            className={`px-4 py-2 rounded-lg text-sm whitespace-nowrap transition-all ${
              selectedFilter === 'trending'
                ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg'
                : 'bg-white border border-slate-200 text-slate-600'
            }`}
          >
            Trending
          </button>
        </div>
      </header>

      {/* Content */}
      <div className="flex-1 overflow-auto p-4 md:p-8 pb-20 md:pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {properties.map((property) => (
            <div
              key={property.id}
              className="bg-white border border-slate-200 rounded-xl overflow-hidden hover:shadow-lg transition-all"
            >
              {/* Property Image Placeholder */}
              <div className="h-40 bg-gradient-to-br from-indigo-100 to-purple-100 flex items-center justify-center relative">
                <Building2 className="w-16 h-16 text-indigo-300" />
                {property.trending && (
                  <div className="absolute top-3 right-3 flex items-center gap-1 px-2 py-1 bg-gradient-to-r from-orange-500 to-amber-500 text-white rounded-lg text-xs shadow-lg">
                    <TrendingUp className="w-3 h-3" />
                    <span>Trending</span>
                  </div>
                )}
              </div>

              {/* Property Info */}
              <div className="p-4">
                <h3 className="text-slate-900 mb-2">{property.name}</h3>
                
                <div className="space-y-2 mb-3">
                  <div className="flex items-center gap-2 text-sm text-slate-600">
                    <MapPin className="w-4 h-4 text-slate-400" />
                    <span>{property.location}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-slate-600">
                    <Building2 className="w-4 h-4 text-slate-400" />
                    <span>{property.type}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-slate-600">
                    <DollarSign className="w-4 h-4 text-slate-400" />
                    <span>{property.price}</span>
                  </div>
                </div>

                {/* Features */}
                <div className="flex items-center gap-2 mb-3 flex-wrap">
                  {property.features.map((feature) => (
                    <span
                      key={feature}
                      className="text-xs px-2 py-1 bg-gradient-to-r from-indigo-50 to-purple-50 text-indigo-700 rounded-full border border-indigo-100"
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                {/* Status & Action */}
                <div className="flex items-center justify-between pt-3 border-t border-slate-100">
                  <div className="flex items-center gap-2">
                    <span className={`text-xs px-2 py-1 rounded-full ${
                      property.status === 'Available' 
                        ? 'bg-green-50 text-green-700' 
                        : 'bg-orange-50 text-orange-700'
                    }`}>
                      {property.status}
                    </span>
                    <span className="text-sm text-slate-600">{property.available}</span>
                  </div>
                  <button className="px-4 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg text-sm hover:from-indigo-700 hover:to-purple-700 shadow-md">
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Mobile Nav */}
      <MobileNav currentView="properties" onNavigate={onNavigate} />
    </div>
  );
}
