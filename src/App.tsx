import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import ExamManagement from './components/ExamManagement';
import InvigilatorManagement from './components/InvigilatorManagement';
import ScheduleView from './components/ScheduleView';

function App() {
  const [activeTab, setActiveTab] = useState('dashboard');

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return <Dashboard />;
      case 'exams':
        return <ExamManagement />;
      case 'invigilators':
        return <InvigilatorManagement />;
      case 'schedule':
        return <ScheduleView />;
      case 'rooms':
        return <div className="p-6"><h1 className="text-2xl font-bold">Room Management</h1><p className="text-gray-600">Coming soon...</p></div>;
      case 'assignments':
        return <div className="p-6"><h1 className="text-2xl font-bold">Assignment Management</h1><p className="text-gray-600">Coming soon...</p></div>;
      case 'settings':
        return <div className="p-6"><h1 className="text-2xl font-bold">Settings</h1><p className="text-gray-600">Coming soon...</p></div>;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex">
      <Sidebar activeTab={activeTab} onTabChange={setActiveTab} />
      <div className="flex-1 overflow-hidden">
        <div className="h-full overflow-y-auto">
          {renderContent()}
        </div>
      </div>
    </div>
  );
}

export default App;