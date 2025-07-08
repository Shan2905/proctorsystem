import React from 'react';
import { 
  Calendar, 
  Users, 
  MapPin, 
  ClipboardList, 
  BarChart3, 
  Settings,
  GraduationCap
} from 'lucide-react';

interface SidebarProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ activeTab, onTabChange }) => {
  const menuItems = [
    { id: 'dashboard', icon: BarChart3, label: 'Dashboard' },
    { id: 'exams', icon: GraduationCap, label: 'Exams' },
    { id: 'invigilators', icon: Users, label: 'Invigilators' },
    { id: 'rooms', icon: MapPin, label: 'Rooms' },
    { id: 'schedule', icon: Calendar, label: 'Schedule' },
    { id: 'assignments', icon: ClipboardList, label: 'Assignments' },
    { id: 'settings', icon: Settings, label: 'Settings' }
  ];

  return (
    <div className="w-64 bg-white shadow-lg h-full">
      <div className="p-6 border-b border-gray-200">
        <h2 className="text-2xl font-bold text-gray-800">Invigilation</h2>
        <p className="text-sm text-gray-600">Management System</p>
      </div>
      
      <nav className="mt-6">
        {menuItems.map((item) => {
          const Icon = item.icon;
          return (
            <button
              key={item.id}
              onClick={() => onTabChange(item.id)}
              className={`w-full flex items-center px-6 py-3 text-left hover:bg-blue-50 transition-colors ${
                activeTab === item.id
                  ? 'bg-blue-50 text-blue-700 border-r-3 border-blue-700'
                  : 'text-gray-700 hover:text-blue-700'
              }`}
            >
              <Icon className="w-5 h-5 mr-3" />
              {item.label}
            </button>
          );
        })}
      </nav>
    </div>
  );
};

export default Sidebar;