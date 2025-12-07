import { useState } from 'react';
import { Dashboard } from './components/Dashboard';
import { MeetingBrief } from './components/MeetingBrief';
import { Sidebar } from './components/Sidebar';
import { SignIn } from './components/SignIn';
import { ForgotPassword } from './components/ForgotPassword';
import { MeetingsView } from './components/MeetingsView';
import { PropertiesView } from './components/PropertiesView';
import { InsightsView } from './components/InsightsView';
import { ProfileView } from './components/ProfileView';

type View = 'signin' | 'forgot-password' | 'dashboard' | 'meeting' | 'meetings' | 'properties' | 'insights' | 'profile';

export default function App() {
  const [currentView, setCurrentView] = useState<View>('signin');
  const [selectedMeeting, setSelectedMeeting] = useState<any>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleSignIn = () => {
    setIsAuthenticated(true);
    setCurrentView('dashboard');
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
  };

  // Auth flow
  if (!isAuthenticated) {
    if (currentView === 'forgot-password') {
      return <ForgotPassword onBack={() => setCurrentView('signin')} />;
    }
    return (
      <SignIn 
        onSignIn={handleSignIn} 
        onForgotPassword={() => setCurrentView('forgot-password')}
      />
    );
  }

  // Main app
  return (
    <div className="flex h-screen bg-slate-50">
      <Sidebar currentView={currentView} onNavigate={handleNavigate} />
      
      <main className="flex-1 overflow-auto">
        {currentView === 'dashboard' && (
          <Dashboard onMeetingSelect={handleMeetingSelect} onNavigate={handleNavigate} />
        )}
        {currentView === 'meeting' && (
          <MeetingBrief meeting={selectedMeeting} onBack={handleBackToDashboard} />
        )}
        {currentView === 'meetings' && (
          <MeetingsView onMeetingSelect={handleMeetingSelect} onNavigate={handleNavigate} />
        )}
        {currentView === 'properties' && (
          <PropertiesView onNavigate={handleNavigate} />
        )}
        {currentView === 'insights' && (
          <InsightsView onNavigate={handleNavigate} />
        )}
        {currentView === 'profile' && (
          <ProfileView onNavigate={handleNavigate} />
        )}
      </main>
    </div>
  );
}
