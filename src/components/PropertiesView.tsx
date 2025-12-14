import { Building2, MapPin, DollarSign, TrendingUp, Search, Filter, Plus, CheckCircle2, Loader2, User, Phone, Mail, FileText, Share2, Download, Printer, Wifi, Car, Coffee, Shield } from 'lucide-react';
import { MobileNav } from './MobileNav';
import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from './ui/dialog';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Textarea } from './ui/textarea';
import { VisuallyHidden } from '@radix-ui/react-visually-hidden';

interface PropertiesViewProps {
  onNavigate: (view: any) => void;
}

export function PropertiesView({ onNavigate }: PropertiesViewProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [isRequirementOpen, setIsRequirementOpen] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [showMatches, setShowMatches] = useState(false);
  const [selectedProperty, setSelectedProperty] = useState<any>(null);
  const [showPdfModal, setShowPdfModal] = useState(false);

  // Form State
  const [requirementForm, setRequirementForm] = useState({
    companyName: '',
    repName: '',
    phone: '',
    email: '',
    location: '',
    area: '',
    budget: '',
    requirements: '',
  });

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
      image: 'https://images.unsplash.com/photo-1761589394317-64bc717ef3bf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBjb21tZXJjaWFsJTIwb2ZmaWNlJTIwYnVpbGRpbmclMjBleHRlcmlvcnxlbnwxfHx8fDE3NjU3MDYzNzN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      amenities: ['High-speed Elevators', 'Central AC', 'Power Backup', 'Cafeteria'],
      roi: '8.5% Annual Yield',
      connectivity: '0.5 km from Rapid Metro',
      description: 'A premium commercial complex offering world-class office spaces with integrated retail and dining options.',
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
      image: 'https://images.unsplash.com/photo-1700234678818-b354a49ef9de?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNoJTIwcGFyayUyMGJhbmdhbG9yZSUyMGluZGlhfGVufDF8fHx8MTc2NTcwNjM3M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      amenities: ['Gymnasium', 'Food Court', 'Auditorium', 'Creche'],
      roi: '9.2% Annual Yield',
      connectivity: 'On Outer Ring Road',
      description: 'State-of-the-art technology park housing major IT/ITES companies with extensive green cover.',
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
      image: 'https://images.unsplash.com/photo-1761602866012-ae9f888255dc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBvZmZpY2UlMjByZWNlcHRpb24lMjBhcmVhfGVufDF8fHx8MTc2NTcwNjM3M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      amenities: ['Ample Parking', '24/7 Security', 'Business Lounge'],
      roi: '7.8% Annual Yield',
      connectivity: 'Near Silk Board Junction',
      description: 'Integrated office park with excellent connectivity and lifestyle amenities for employees.',
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
      image: 'https://images.unsplash.com/photo-1703355685952-03ed19f70f51?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjBpbnRlcmlvciUyMG1lZXRpbmclMjByb29tfGVufDF8fHx8MTc2NTcwNjM3M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      amenities: ['Conference Rooms', 'Visitor Management', 'EV Charging'],
      roi: '8.0% Annual Yield',
      connectivity: 'Near Hitech City Metro',
      description: 'Modern business campus designed to foster innovation and collaboration.',
    },
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setRequirementForm(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmitRequirement = async () => {
    setIsProcessing(true);
    // Simulate AI processing
    await new Promise(resolve => setTimeout(resolve, 3000));
    setIsProcessing(false);
    setShowMatches(true);
  };

  const handleViewDetails = (property: any) => {
    setSelectedProperty(property);
    setShowPdfModal(true);
  };

  const matchedProperties = properties.slice(0, 2); // Simulate matches

  return (
    <div className="h-full flex flex-col bg-slate-50">
      {/* Header */}
      <header className="bg-white border-b border-slate-200 p-4 md:px-8 md:py-6 sticky top-0 z-10">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h2 className="text-slate-900">Properties</h2>
            <p className="text-slate-500 mt-1">Browse and track commercial properties</p>
          </div>
          <Button 
            onClick={() => setIsRequirementOpen(true)}
            className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-xl shadow-lg shadow-primary/30 transition-all"
          >
            <Plus className="w-5 h-5 mr-2" />
            Client Requirement
          </Button>
        </div>

        {/* Search */}
        <div className="relative mb-4">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search properties..."
            className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
          />
        </div>

        {/* Filter */}
        <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
          <button
            onClick={() => setSelectedFilter('all')}
            className={`px-4 py-2 rounded-lg text-sm whitespace-nowrap transition-all ${
              selectedFilter === 'all'
                ? 'bg-primary text-primary-foreground shadow-lg'
                : 'bg-white border border-slate-200 text-slate-600'
            }`}
          >
            All Properties
          </button>
          <button
            onClick={() => setSelectedFilter('sez')}
            className={`px-4 py-2 rounded-lg text-sm whitespace-nowrap transition-all ${
              selectedFilter === 'sez'
                ? 'bg-primary text-primary-foreground shadow-lg'
                : 'bg-white border border-slate-200 text-slate-600'
            }`}
          >
            SEZ
          </button>
          <button
            onClick={() => setSelectedFilter('grade-a')}
            className={`px-4 py-2 rounded-lg text-sm whitespace-nowrap transition-all ${
              selectedFilter === 'grade-a'
                ? 'bg-primary text-primary-foreground shadow-lg'
                : 'bg-white border border-slate-200 text-slate-600'
            }`}
          >
            Grade-A
          </button>
          <button
            onClick={() => setSelectedFilter('trending')}
            className={`px-4 py-2 rounded-lg text-sm whitespace-nowrap transition-all ${
              selectedFilter === 'trending'
                ? 'bg-primary text-primary-foreground shadow-lg'
                : 'bg-white border border-slate-200 text-slate-600'
            }`}
          >
            Trending
          </button>
        </div>
      </header>

      {/* Content */}
      <div className="flex-1 overflow-auto p-4 md:p-8 pb-20 md:pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {properties.map((property) => (
            <div
              key={property.id}
              className="bg-white border border-slate-200 rounded-xl overflow-hidden hover:shadow-xl transition-all flex flex-col h-full"
            >
              {/* Property Image */}
              <div className="h-48 relative overflow-hidden">
                <img 
                  src={property.image} 
                  alt={property.name}
                  className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
                />
                {property.trending && (
                  <div className="absolute top-3 right-3 flex items-center gap-1 px-2 py-1 bg-secondary text-secondary-foreground rounded-lg text-xs shadow-lg font-medium">
                    <TrendingUp className="w-3 h-3" />
                    <span>Trending</span>
                  </div>
                )}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                  <h3 className="text-white font-semibold text-lg">{property.name}</h3>
                  <p className="text-white/90 text-sm flex items-center gap-1">
                    <MapPin className="w-3 h-3" /> {property.location}
                  </p>
                </div>
              </div>

              {/* Property Info */}
              <div className="p-4 flex-1 flex flex-col">
                <div className="space-y-3 mb-4 flex-1">
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-slate-500">Type</span>
                    <span className="font-medium text-slate-900">{property.type}</span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-slate-500">Price</span>
                    <span className="font-medium text-primary">{property.price}</span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-slate-500">Available Area</span>
                    <span className="font-medium text-slate-900">{property.available}</span>
                  </div>
                  
                  {/* Features Tags */}
                  <div className="flex flex-wrap gap-2 mt-2">
                    {property.features.map((feature) => (
                      <span
                        key={feature}
                        className="text-xs px-2 py-1 bg-slate-100 text-slate-600 rounded-md border border-slate-200"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Status & Action */}
                <div className="flex items-center justify-between pt-4 border-t border-slate-100 mt-auto">
                  <span className={`text-xs px-2.5 py-1 rounded-full font-medium ${
                    property.status === 'Available' || property.status === 'Verified'
                      ? 'bg-accent/10 text-accent-foreground' 
                      : 'bg-secondary/10 text-secondary'
                  }`}>
                    {property.status}
                  </span>
                  <Button 
                    onClick={() => handleViewDetails(property)}
                    className="bg-white border-2 border-primary text-primary hover:bg-primary/5 shadow-sm"
                  >
                    View Brief / PDF
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Requirement Dialog */}
      <Dialog open={isRequirementOpen} onOpenChange={setIsRequirementOpen}>
        <DialogContent className="sm:max-w-[600px] bg-white rounded-2xl max-h-[90vh] overflow-y-auto">
          {!isProcessing && !showMatches && (
            <>
              <DialogHeader>
                <DialogTitle>New Client Requirement</DialogTitle>
                <DialogDescription>
                  Enter client details to find matching properties with AI analysis.
                </DialogDescription>
              </DialogHeader>

              <div className="grid gap-4 py-4">
                {/* Customer Details */}
                <div className="space-y-4">
                  <h3 className="text-sm font-semibold text-slate-900 uppercase tracking-wider flex items-center gap-2">
                    <User className="w-4 h-4" /> Client Details
                  </h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="col-span-2">
                      <Label htmlFor="companyName">Company Name</Label>
                      <Input 
                        id="companyName" 
                        name="companyName"
                        value={requirementForm.companyName}
                        onChange={handleInputChange}
                        placeholder="Client's Company" 
                      />
                    </div>
                    <div>
                      <Label htmlFor="repName">Representative Name</Label>
                      <Input 
                        id="repName" 
                        name="repName"
                        value={requirementForm.repName}
                        onChange={handleInputChange}
                        placeholder="John Doe" 
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input 
                        id="phone" 
                        name="phone"
                        value={requirementForm.phone}
                        onChange={handleInputChange}
                        placeholder="+91..." 
                      />
                    </div>
                    <div className="col-span-2">
                      <Label htmlFor="email">Email ID</Label>
                      <Input 
                        id="email" 
                        name="email"
                        value={requirementForm.email}
                        onChange={handleInputChange}
                        placeholder="email@company.com" 
                      />
                    </div>
                  </div>
                </div>

                {/* Property Requirement Details */}
                <div className="space-y-4">
                  <h3 className="text-sm font-semibold text-slate-900 uppercase tracking-wider flex items-center gap-2">
                    <Building2 className="w-4 h-4" /> Requirements
                  </h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="col-span-2">
                      <Label htmlFor="location">Preferred Location</Label>
                      <Input 
                        id="location" 
                        name="location"
                        value={requirementForm.location}
                        onChange={handleInputChange}
                        placeholder="e.g. South Mumbai, Cyber City" 
                      />
                    </div>
                    <div>
                      <Label htmlFor="area">Expected Area (sq ft)</Label>
                      <Input 
                        id="area" 
                        name="area"
                        value={requirementForm.area}
                        onChange={handleInputChange}
                        placeholder="e.g. 5000" 
                      />
                    </div>
                    <div>
                      <Label htmlFor="budget">Budget</Label>
                      <Input 
                        id="budget" 
                        name="budget"
                        value={requirementForm.budget}
                        onChange={handleInputChange}
                        placeholder="e.g. 2 Crores" 
                      />
                    </div>
                    <div className="col-span-2">
                      <Label htmlFor="requirements">Specific Needs</Label>
                      <Textarea 
                        id="requirements" 
                        name="requirements"
                        value={requirementForm.requirements}
                        onChange={handleInputChange}
                        placeholder="Amenities, parking, specific compliance, etc." 
                      />
                    </div>
                  </div>
                </div>
              </div>

              <DialogFooter>
                <Button variant="outline" onClick={() => setIsRequirementOpen(false)}>Cancel</Button>
                <Button 
                  onClick={handleSubmitRequirement}
                  className="bg-primary text-primary-foreground"
                >
                  Analyze & Find Matches
                </Button>
              </DialogFooter>
            </>
          )}

          {/* AI Processing State */}
          {isProcessing && (
            <div className="py-12 flex flex-col items-center justify-center text-center">
              <VisuallyHidden>
                <DialogTitle>Analyzing Requirements</DialogTitle>
                <DialogDescription>Please wait while AI processes your request.</DialogDescription>
              </VisuallyHidden>
              <div className="relative w-20 h-20 mb-6">
                <div className="absolute inset-0 border-4 border-slate-100 rounded-full"></div>
                <div className="absolute inset-0 border-4 border-primary rounded-full border-t-transparent animate-spin"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <TrendingUp className="w-8 h-8 text-primary animate-pulse" />
                </div>
              </div>
              <h3 className="text-lg font-medium text-slate-900 mb-2">AI is Analyzing Requirements...</h3>
              <p className="text-slate-500 max-w-xs mx-auto">
                Scanning location data, checking inventory availability, and matching amenities for {requirementForm.companyName || 'client'}.
              </p>
            </div>
          )}

          {/* Matched Properties State */}
          {showMatches && (
            <div className="py-4">
              <DialogHeader className="mb-4">
                <DialogTitle className="flex items-center gap-2 text-green-700">
                  <CheckCircle2 className="w-5 h-5" /> 2 Perfect Matches Found
                </DialogTitle>
                <DialogDescription>
                  Based on location analysis and budget constraints.
                </DialogDescription>
              </DialogHeader>
              
              <div className="space-y-4 max-h-[60vh] overflow-y-auto pr-2">
                {matchedProperties.map((property) => (
                  <div key={property.id} className="border border-slate-200 rounded-xl p-4 flex gap-4 hover:border-primary transition-colors cursor-pointer" onClick={() => {
                    setIsRequirementOpen(false);
                    setShowMatches(false);
                    handleViewDetails(property);
                  }}>
                    <img src={property.image} alt={property.name} className="w-24 h-24 rounded-lg object-cover" />
                    <div className="flex-1">
                      <div className="flex justify-between items-start">
                        <h4 className="font-semibold text-slate-900">{property.name}</h4>
                        <span className="bg-green-100 text-green-700 text-[10px] px-2 py-0.5 rounded-full font-bold">98% MATCH</span>
                      </div>
                      <p className="text-sm text-slate-500 mb-2">{property.location}</p>
                      <div className="flex gap-3 text-xs text-slate-600">
                        <span className="font-medium text-primary">{property.price}</span>
                        <span>•</span>
                        <span>{property.available}</span>
                      </div>
                      <p className="text-xs text-slate-400 mt-2 line-clamp-1">{property.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <DialogFooter className="mt-6">
                <Button variant="outline" onClick={() => {
                  setShowMatches(false);
                  setIsRequirementOpen(false);
                }}>Close</Button>
                <Button className="bg-primary text-primary-foreground">Save as Lead</Button>
              </DialogFooter>
            </div>
          )}
        </DialogContent>
      </Dialog>

      {/* PDF / Brief Modal */}
      <Dialog open={showPdfModal} onOpenChange={setShowPdfModal}>
        <DialogContent className="sm:max-w-[800px] bg-white rounded-none p-0 overflow-hidden h-[90vh] flex flex-col">
          {/* Accessibility Title/Description for PDF Modal */}
          <VisuallyHidden>
            <DialogTitle>Property Brief PDF Preview</DialogTitle>
            <DialogDescription>A detailed PDF preview of the selected property.</DialogDescription>
          </VisuallyHidden>

          {selectedProperty && (
            <>
              {/* PDF Toolbar */}
              <div className="bg-slate-900 text-white p-4 flex items-center justify-between shadow-md z-10">
                <div className="flex items-center gap-2">
                  <FileText className="w-5 h-5" />
                  <span className="font-medium">Property_Brief_{selectedProperty.name.replace(/\s+/g, '_')}.pdf</span>
                </div>
                <div className="flex items-center gap-2">
                  <Button variant="ghost" size="sm" className="text-white hover:bg-white/10">
                    <Printer className="w-4 h-4 mr-2" /> Print
                  </Button>
                  <Button variant="default" size="sm" className="bg-primary hover:bg-primary/90 text-white">
                    <Download className="w-4 h-4 mr-2" /> Download
                  </Button>
                </div>
              </div>

              {/* PDF Content Preview */}
              <div className="flex-1 overflow-y-auto bg-slate-100 p-8">
                <div className="bg-white shadow-xl mx-auto max-w-[210mm] min-h-[297mm] p-12 relative text-slate-900">
                  {/* Watermark/Brand */}
                  <div className="flex justify-between items-end border-b-2 border-primary pb-6 mb-8">
                    <div>
                      <h1 className="text-3xl font-bold text-slate-900 mb-1">{selectedProperty.name}</h1>
                      <p className="text-slate-500 flex items-center gap-2">
                        <MapPin className="w-4 h-4" /> {selectedProperty.location}
                      </p>
                    </div>
                    <div className="text-right">
                      <div className="flex items-center gap-2 text-primary font-bold text-xl mb-1">
                        <TrendingUp className="w-6 h-6" /> InsightAI
                      </div>
                      <p className="text-xs text-slate-400">Premium Property Report</p>
                    </div>
                  </div>

                  {/* Main Image */}
                  <div className="mb-8 rounded-xl overflow-hidden shadow-sm h-64">
                    <img src={selectedProperty.image} alt="Property" className="w-full h-full object-cover" />
                  </div>

                  {/* Key Highlights */}
                  <div className="grid grid-cols-3 gap-6 mb-8">
                    <div className="bg-slate-50 p-4 rounded-lg border border-slate-100">
                      <p className="text-xs text-slate-500 uppercase tracking-wider mb-1">Price</p>
                      <p className="text-lg font-semibold text-primary">{selectedProperty.price}</p>
                    </div>
                    <div className="bg-slate-50 p-4 rounded-lg border border-slate-100">
                      <p className="text-xs text-slate-500 uppercase tracking-wider mb-1">Available Area</p>
                      <p className="text-lg font-semibold text-slate-900">{selectedProperty.available}</p>
                    </div>
                    <div className="bg-slate-50 p-4 rounded-lg border border-slate-100">
                      <p className="text-xs text-slate-500 uppercase tracking-wider mb-1">ROI Potential</p>
                      <p className="text-lg font-semibold text-green-600">{selectedProperty.roi}</p>
                    </div>
                  </div>

                  {/* Description */}
                  <div className="mb-8">
                    <h3 className="text-lg font-bold text-slate-900 mb-3 border-l-4 border-secondary pl-3">Property Overview</h3>
                    <p className="text-slate-600 leading-relaxed">
                      {selectedProperty.description}
                      <br /><br />
                      This premium commercial asset offers exceptional value with its strategic location and modern infrastructure. Perfect for multinational corporations looking for a Grade-A office environment.
                    </p>
                  </div>

                  {/* Connectivity & Location */}
                  <div className="mb-8">
                    <h3 className="text-lg font-bold text-slate-900 mb-3 border-l-4 border-secondary pl-3">Location & Connectivity</h3>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="flex items-start gap-3">
                        <div className="bg-indigo-50 p-2 rounded-lg">
                          <Car className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                          <p className="font-medium text-slate-900">Access</p>
                          <p className="text-sm text-slate-500">{selectedProperty.connectivity}</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="bg-indigo-50 p-2 rounded-lg">
                          <MapPin className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                          <p className="font-medium text-slate-900">Landmark</p>
                          <p className="text-sm text-slate-500">Central Business District</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Amenities */}
                  <div className="mb-8">
                    <h3 className="text-lg font-bold text-slate-900 mb-3 border-l-4 border-secondary pl-3">Amenities & Facilities</h3>
                    <div className="grid grid-cols-2 gap-y-3 gap-x-6">
                      {selectedProperty.amenities?.map((amenity: string, idx: number) => (
                        <div key={idx} className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-accent rounded-full" />
                          <span className="text-slate-700">{amenity}</span>
                        </div>
                      )) || (
                        <>
                          <div className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-accent rounded-full" /><span className="text-slate-700">24/7 Power Backup</span></div>
                          <div className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-accent rounded-full" /><span className="text-slate-700">High-speed Internet</span></div>
                          <div className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-accent rounded-full" /><span className="text-slate-700">Cafeteria</span></div>
                          <div className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-accent rounded-full" /><span className="text-slate-700">Gymnasium</span></div>
                        </>
                      )}
                    </div>
                  </div>

                  {/* Footer */}
                  <div className="absolute bottom-12 left-12 right-12 border-t border-slate-200 pt-6 text-center">
                    <p className="text-sm text-slate-500">
                      Generated by InsightAI for Internal Use Only. <br />
                      Confidential &copy; 2024
                    </p>
                  </div>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>

      {/* Mobile Nav */}
      <MobileNav currentView="properties" onNavigate={onNavigate} />
    </div>
  );
}
