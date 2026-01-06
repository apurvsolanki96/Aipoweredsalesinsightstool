import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Dashboard } from './components/Dashboard';
import { MeetingBrief } from './components/MeetingBrief';
import { SignIn } from './components/SignIn';
import { SignUp } from './components/SignUp';
import { ForgotPassword } from './components/ForgotPassword';
import { MeetingsView } from './components/MeetingsView';
import { PropertiesView } from './components/PropertiesView';
import { MarketPulseView } from './components/MarketPulseView';
import { ProfileView } from './components/ProfileView';
import { LeadsView } from './components/LeadsView';
import { PostRequirementDialog } from './components/PostRequirementDialog';

type View = 'signin' | 'signup' | 'forgot-password' | 'dashboard' | 'meeting' | 'meetings' | 'properties' | 'news' | 'profile' | 'leads';

export default function App() {
  const [currentView, setCurrentView] = useState<View>('signin');
  const [selectedMeeting, setSelectedMeeting] = useState<any>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isPostRequirementOpen, setIsPostRequirementOpen] = useState(false);

  const handleSignIn = () => {
    setIsAuthenticated(true);
    setCurrentView('dashboard');
  };

  const handleSignOut = () => {
    setIsAuthenticated(false);
    setCurrentView('signin');
  };

  const handleMeetingSelect = (meeting: any) => {
    setSelectedMeeting(meeting);
    setCurrentView('meeting');
  };

  const handleBackToDashboard = () => {
    setCurrentView('dashboard');
    setSelectedMeeting(null);
  };

  const handleNavigate = (view: View) => {
    setCurrentView(view);
    window.scrollTo(0, 0); // Scroll to top on navigation
  };

  // Auth flow
  if (!isAuthenticated) {
    if (currentView === 'forgot-password') {
      return <ForgotPassword onBack={() => setCurrentView('signin')} />;
    }
    if (currentView === 'signup') {
      return <SignUp onSignUp={handleSignIn} onBack={() => setCurrentView('signin')} />;
    }
    return (
      <SignIn 
        onSignIn={handleSignIn} 
        onForgotPassword={() => setCurrentView('forgot-password')}
        onSignUp={() => setCurrentView('signup')}
      />
    );
  }

  // Main Website Layout with Navbar
  return (
    <div className="min-h-screen bg-slate-50 font-sans">
      <Navbar 
        currentView={currentView} 
        onNavigate={handleNavigate} 
        onSignOut={handleSignOut}
        onPostRequirement={() => setIsPostRequirementOpen(true)}
      />
      
      <PostRequirementDialog 
        open={isPostRequirementOpen} 
        onOpenChange={setIsPostRequirementOpen} 
      />
      
      <main>
        {currentView === 'dashboard' && (
          <Dashboard onMeetingSelect={handleMeetingSelect} onNavigate={handleNavigate} />
        )}
        {currentView === 'meeting' && (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
             <MeetingBrief meeting={selectedMeeting} onBack={handleBackToDashboard} />
          </div>
        )}
        {currentView === 'meetings' && (
           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 h-[calc(100vh-80px)]">
             <MeetingsView onMeetingSelect={handleMeetingSelect} onNavigate={handleNavigate} />
           </div>
        )}
        {currentView === 'properties' && (
           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 h-[calc(100vh-80px)]">
             <PropertiesView onNavigate={handleNavigate} />
           </div>
        )}
        {currentView === 'leads' && (
           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 h-[calc(100vh-80px)]">
             <LeadsView onNavigate={handleNavigate} />
           </div>
        )}
        {currentView === 'news' && (
           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 h-[calc(100vh-80px)]">
             <MarketPulseView onNavigate={handleNavigate} />
           </div>
        )}
        {currentView === 'profile' && (
           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 h-[calc(100vh-80px)]">
             <ProfileView onNavigate={handleNavigate} />
           </div>
        )}
      </main>
    </div>
  );
}