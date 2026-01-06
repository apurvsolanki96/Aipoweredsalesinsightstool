import { useState } from 'react';
import { X, Building2, MapPin, DollarSign, Calendar, Phone, Mail, Shield, CheckCircle2 } from 'lucide-react';
import { Dialog, DialogContent, DialogTitle, DialogDescription } from './ui/dialog';
import { Button } from './ui/button';
import { VisuallyHidden } from '@radix-ui/react-visually-hidden';

interface PostRequirementDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function PostRequirementDialog({ open, onOpenChange }: PostRequirementDialogProps) {
  const [step, setStep] = useState<'form' | 'verification' | 'success'>('form');
  const [formData, setFormData] = useState({
    propertyType: '',
    location: '',
    budget: '',
    area: '',
    possession: '',
    description: '',
    email: '',
    phone: '',
  });
  const [verificationCode, setVerificationCode] = useState('');
  const [emailOTP, setEmailOTP] = useState('');
  const [phoneOTP, setPhoneOTP] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Move to verification step
    setStep('verification');
    // Simulate sending OTP
    const mockEmailOTP = Math.floor(100000 + Math.random() * 900000).toString();
    const mockPhoneOTP = Math.floor(100000 + Math.random() * 900000).toString();
    console.log('📧 Email OTP sent to', formData.email, ':', mockEmailOTP);
    console.log('📱 Phone OTP sent to', formData.phone, ':', mockPhoneOTP);
    alert(`Verification codes sent!\n\nEmail OTP: ${mockEmailOTP}\nPhone OTP: ${mockPhoneOTP}\n\n(In production, these would be sent via email/SMS)`);
  };

  const handleVerification = (e: React.FormEvent) => {
    e.preventDefault();
    // Simple validation check
    if (emailOTP.length === 6 && phoneOTP.length === 6) {
      console.log('✅ Verification successful:', { emailOTP, phoneOTP });
      setStep('success');
    } else {
      alert('Please enter valid 6-digit codes');
    }
  };

  const handleClose = () => {
    setStep('form');
    setFormData({
      propertyType: '',
      location: '',
      budget: '',
      area: '',
      possession: '',
      description: '',
      email: '',
      phone: '',
    });
    setEmailOTP('');
    setPhoneOTP('');
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[600px] max-h-[90vh] overflow-y-auto">
        <VisuallyHidden>
          <DialogTitle>Post Property Requirement</DialogTitle>
          <DialogDescription>Submit your commercial property requirements</DialogDescription>
        </VisuallyHidden>

        {step === 'form' && (
          <div>
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-2xl font-bold text-slate-900">Post Your Requirement</h2>
                <p className="text-sm text-slate-500 mt-1">We'll match you with verified properties</p>
              </div>
              <Button variant="ghost" size="icon" onClick={handleClose}>
                <X className="w-5 h-5" />
              </Button>
            </div>

            {/* Marketplace Banner Image */}
            <div className="mb-6 rounded-xl overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1767122227285-a75dced30c8a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080" 
                alt="Commercial Property Marketplace" 
                className="w-full h-40 object-cover"
              />
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  <Building2 className="w-4 h-4 inline mr-1" />
                  Property Type *
                </label>
                <select
                  value={formData.propertyType}
                  onChange={(e) => setFormData({ ...formData, propertyType: e.target.value })}
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                  required
                >
                  <option value="">Select property type</option>
                  <option value="office">Office Space</option>
                  <option value="coworking">Co-working Space</option>
                  <option value="warehouse">Warehouse</option>
                  <option value="retail">Retail Shop</option>
                  <option value="industrial">Industrial Unit</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  <MapPin className="w-4 h-4 inline mr-1" />
                  Preferred Location *
                </label>
                <input
                  type="text"
                  value={formData.location}
                  onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                  placeholder="e.g., Whitefield, Bangalore"
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                  required
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Area (sq.ft) *
                  </label>
                  <input
                    type="number"
                    value={formData.area}
                    onChange={(e) => setFormData({ ...formData, area: e.target.value })}
                    placeholder="e.g., 5000"
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    <DollarSign className="w-4 h-4 inline mr-1" />
                    Budget (₹/month)
                  </label>
                  <input
                    type="text"
                    value={formData.budget}
                    onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                    placeholder="e.g., 50000"
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  <Calendar className="w-4 h-4 inline mr-1" />
                  Possession Timeline
                </label>
                <select
                  value={formData.possession}
                  onChange={(e) => setFormData({ ...formData, possession: e.target.value })}
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                >
                  <option value="">Select timeline</option>
                  <option value="immediate">Immediate</option>
                  <option value="1-3months">1-3 Months</option>
                  <option value="3-6months">3-6 Months</option>
                  <option value="6months+">6+ Months</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Additional Requirements
                </label>
                <textarea
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  placeholder="e.g., Need parking space, 24/7 access, cafeteria..."
                  rows={3}
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary resize-none"
                />
              </div>

              <div className="border-t border-slate-200 pt-5">
                <h3 className="text-sm font-semibold text-slate-900 mb-3 flex items-center gap-2">
                  <Shield className="w-4 h-4 text-primary" />
                  Contact Verification (Required for Verified Listing)
                </h3>
                <div className="grid grid-cols-1 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      <Mail className="w-4 h-4 inline mr-1" />
                      Email Address *
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="your.email@company.com"
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      <Phone className="w-4 h-4 inline mr-1" />
                      Phone Number *
                    </label>
                    <div className="flex gap-2">
                      <select className="px-3 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary">
                        <option>+91</option>
                        <option>+1</option>
                        <option>+44</option>
                      </select>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="98765 43210"
                        className="flex-1 px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                        required
                      />
                    </div>
                  </div>
                </div>
                <p className="text-xs text-slate-500 mt-3 bg-blue-50 p-3 rounded-lg border border-blue-100">
                  <Shield className="w-3 h-3 inline mr-1 text-blue-600" />
                  We'll send verification codes to confirm your identity and prevent fake requirements.
                </p>
              </div>

              <Button type="submit" className="w-full bg-primary hover:bg-indigo-700 text-white py-3 rounded-xl text-lg">
                Continue to Verification
              </Button>
            </form>
          </div>
        )}

        {step === 'verification' && (
          <div>
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-indigo-50 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-primary" />
              </div>
              <h2 className="text-2xl font-bold text-slate-900">Verify Your Details</h2>
              <p className="text-sm text-slate-500 mt-2">
                We've sent verification codes to your email and phone
              </p>
            </div>

            <form onSubmit={handleVerification} className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Email OTP
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                  <input
                    type="text"
                    value={emailOTP}
                    onChange={(e) => setEmailOTP(e.target.value)}
                    placeholder="Enter 6-digit code sent to email"
                    maxLength={6}
                    className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary text-center text-lg tracking-wider"
                    required
                  />
                </div>
                <p className="text-xs text-slate-500 mt-2">
                  Sent to: {formData.email}
                  <button type="button" className="text-primary ml-2 hover:underline">Resend</button>
                </p>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Phone OTP
                </label>
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                  <input
                    type="text"
                    value={phoneOTP}
                    onChange={(e) => setPhoneOTP(e.target.value)}
                    placeholder="Enter 6-digit code sent to phone"
                    maxLength={6}
                    className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary text-center text-lg tracking-wider"
                    required
                  />
                </div>
                <p className="text-xs text-slate-500 mt-2">
                  Sent to: +91 {formData.phone}
                  <button type="button" className="text-primary ml-2 hover:underline">Resend</button>
                </p>
              </div>

              <div className="flex gap-3 pt-4">
                <Button type="button" variant="outline" onClick={() => setStep('form')} className="flex-1">
                  Back
                </Button>
                <Button type="submit" className="flex-1 bg-primary hover:bg-indigo-700">
                  Verify & Submit
                </Button>
              </div>
            </form>
          </div>
        )}

        {step === 'success' && (
          <div className="text-center py-8">
            <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle2 className="w-10 h-10 text-green-600" />
            </div>
            <h2 className="text-2xl font-bold text-slate-900 mb-3">Requirement Submitted!</h2>
            <p className="text-slate-600 mb-6 max-w-md mx-auto">
              Your verified requirement has been posted. Our AI is now matching you with suitable properties. You'll receive updates via email and phone.
            </p>
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 mb-6 text-left">
              <h3 className="font-semibold text-slate-900 mb-2">Your Requirement:</h3>
              <div className="space-y-1 text-sm text-slate-600">
                <p><strong>Type:</strong> {formData.propertyType}</p>
                <p><strong>Location:</strong> {formData.location}</p>
                <p><strong>Area:</strong> {formData.area} sq.ft</p>
                {formData.budget && <p><strong>Budget:</strong> ₹{formData.budget}/month</p>}
              </div>
            </div>
            <Button onClick={handleClose} className="w-full bg-primary hover:bg-indigo-700">
              Done
            </Button>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}