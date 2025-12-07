import { User, Mail, Phone, MapPin, Building2, Award, Settings, LogOut, Bell, Shield } from 'lucide-react';
import { MobileNav } from './MobileNav';

interface ProfileViewProps {
  onNavigate: (view: any) => void;
}

export function ProfileView({ onNavigate }: ProfileViewProps) {
  return (
    <div className="h-full flex flex-col bg-slate-50">
      {/* Header */}
      <header className="bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 p-4 md:p-8 text-white">
        <div className="flex items-center gap-4 mb-6">
          <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border-4 border-white/30">
            <span className="text-3xl text-white">RS</span>
          </div>
          <div>
            <h2 className="text-white mb-1">Rajesh Sharma</h2>
            <p className="text-indigo-100">Senior Commercial Real Estate Agent</p>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-3 gap-3">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3 text-center border border-white/20">
            <p className="text-2xl text-white">127</p>
            <p className="text-xs text-indigo-100 mt-1">Deals Closed</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3 text-center border border-white/20">
            <p className="text-2xl text-white">₹45Cr</p>
            <p className="text-xs text-indigo-100 mt-1">Total Value</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3 text-center border border-white/20">
            <p className="text-2xl text-white">10+</p>
            <p className="text-xs text-indigo-100 mt-1">Years Exp</p>
          </div>
        </div>
      </header>

      {/* Content */}
      <div className="flex-1 overflow-auto p-4 md:p-8 pb-20 md:pb-8">
        {/* Personal Information */}
        <div className="bg-white border border-slate-200 rounded-xl p-5 mb-4">
          <h3 className="text-slate-900 mb-4">Personal Information</h3>
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-indigo-100 to-purple-100 rounded-lg flex items-center justify-center">
                <Mail className="w-5 h-5 text-indigo-600" />
              </div>
              <div className="flex-1">
                <p className="text-xs text-slate-500">Email</p>
                <p className="text-slate-900">rajesh.sharma@company.com</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-indigo-100 to-purple-100 rounded-lg flex items-center justify-center">
                <Phone className="w-5 h-5 text-indigo-600" />
              </div>
              <div className="flex-1">
                <p className="text-xs text-slate-500">Phone</p>
                <p className="text-slate-900">+91 98765 43210</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-indigo-100 to-purple-100 rounded-lg flex items-center justify-center">
                <MapPin className="w-5 h-5 text-indigo-600" />
              </div>
              <div className="flex-1">
                <p className="text-xs text-slate-500">Location</p>
                <p className="text-slate-900">Gurgaon, Haryana</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-indigo-100 to-purple-100 rounded-lg flex items-center justify-center">
                <Building2 className="w-5 h-5 text-indigo-600" />
              </div>
              <div className="flex-1">
                <p className="text-xs text-slate-500">Company</p>
                <p className="text-slate-900">Premium Properties Group</p>
              </div>
            </div>
          </div>
        </div>

        {/* Achievements */}
        <div className="bg-white border border-slate-200 rounded-xl p-5 mb-4">
          <h3 className="text-slate-900 mb-4">Achievements</h3>
          <div className="space-y-3">
            <div className="flex items-center gap-3 p-3 bg-gradient-to-r from-yellow-50 to-amber-50 rounded-lg border border-yellow-100">
              <Award className="w-8 h-8 text-yellow-600" />
              <div>
                <p className="text-sm text-slate-900">Top Performer 2024</p>
                <p className="text-xs text-slate-500">Highest sales in Q3</p>
              </div>
            </div>
            <div className="flex items-center gap-3 p-3 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-lg border border-blue-100">
              <Award className="w-8 h-8 text-blue-600" />
              <div>
                <p className="text-sm text-slate-900">Client Satisfaction Award</p>
                <p className="text-xs text-slate-500">98% satisfaction rate</p>
              </div>
            </div>
          </div>
        </div>

        {/* Settings */}
        <div className="bg-white border border-slate-200 rounded-xl overflow-hidden">
          <button className="w-full flex items-center gap-3 p-4 hover:bg-slate-50 transition-colors border-b border-slate-100">
            <div className="w-10 h-10 bg-gradient-to-br from-indigo-100 to-purple-100 rounded-lg flex items-center justify-center">
              <Bell className="w-5 h-5 text-indigo-600" />
            </div>
            <div className="flex-1 text-left">
              <p className="text-slate-900">Notifications</p>
              <p className="text-xs text-slate-500">Manage your alerts</p>
            </div>
          </button>
          <button className="w-full flex items-center gap-3 p-4 hover:bg-slate-50 transition-colors border-b border-slate-100">
            <div className="w-10 h-10 bg-gradient-to-br from-indigo-100 to-purple-100 rounded-lg flex items-center justify-center">
              <Shield className="w-5 h-5 text-indigo-600" />
            </div>
            <div className="flex-1 text-left">
              <p className="text-slate-900">Privacy & Security</p>
              <p className="text-xs text-slate-500">Password, 2FA settings</p>
            </div>
          </button>
          <button className="w-full flex items-center gap-3 p-4 hover:bg-slate-50 transition-colors border-b border-slate-100">
            <div className="w-10 h-10 bg-gradient-to-br from-indigo-100 to-purple-100 rounded-lg flex items-center justify-center">
              <Settings className="w-5 h-5 text-indigo-600" />
            </div>
            <div className="flex-1 text-left">
              <p className="text-slate-900">App Settings</p>
              <p className="text-xs text-slate-500">Theme, language, preferences</p>
            </div>
          </button>
          <button className="w-full flex items-center gap-3 p-4 hover:bg-red-50 transition-colors text-red-600">
            <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center">
              <LogOut className="w-5 h-5 text-red-600" />
            </div>
            <div className="flex-1 text-left">
              <p className="text-red-600">Sign Out</p>
              <p className="text-xs text-red-400">Log out of your account</p>
            </div>
          </button>
        </div>

        <p className="text-center text-xs text-slate-400 mt-6">
          InsightAI v1.0.0 • Made for Commercial Real Estate Agents
        </p>
      </div>

      {/* Mobile Nav */}
      <MobileNav currentView="profile" onNavigate={onNavigate} />
    </div>
  );
}
