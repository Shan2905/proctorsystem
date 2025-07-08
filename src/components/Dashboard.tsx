import React from 'react';
import { Calendar, Users, MapPin, Clock, AlertCircle, CheckCircle } from 'lucide-react';
import { mockExams, mockInvigilators, mockRooms } from '../data/mockData';

const Dashboard: React.FC = () => {
  const totalExams = mockExams.length;
  const ongoingExams = mockExams.filter(exam => exam.status === 'ongoing').length;
  const totalInvigilators = mockInvigilators.length;
  const availableInvigilators = mockInvigilators.filter(inv => inv.status === 'available').length;
  const totalRooms = mockRooms.length;
  const availableRooms = mockRooms.filter(room => room.status === 'available').length;

  const upcomingExams = mockExams
    .filter(exam => exam.status === 'scheduled')
    .sort((a, b) => new Date(a.date + ' ' + a.startTime).getTime() - new Date(b.date + ' ' + b.startTime).getTime())
    .slice(0, 3);

  const stats = [
    {
      title: 'Total Exams',
      value: totalExams,
      icon: Calendar,
      color: 'bg-blue-500',
      textColor: 'text-blue-600'
    },
    {
      title: 'Ongoing Exams',
      value: ongoingExams,
      icon: Clock,
      color: 'bg-green-500',
      textColor: 'text-green-600'
    },
    {
      title: 'Available Invigilators',
      value: `${availableInvigilators}/${totalInvigilators}`,
      icon: Users,
      color: 'bg-purple-500',
      textColor: 'text-purple-600'
    },
    {
      title: 'Available Rooms',
      value: `${availableRooms}/${totalRooms}`,
      icon: MapPin,
      color: 'bg-orange-500',
      textColor: 'text-orange-600'
    }
  ];

  return (
    <div className="p-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Dashboard</h1>
        <p className="text-gray-600">Overview of your invigilation management system</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div key={index} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                  <p className={`text-2xl font-bold ${stat.textColor}`}>{stat.value}</p>
                </div>
                <div className={`${stat.color} rounded-full p-3`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Upcoming Exams */}
      <div className="bg-white rounded-lg shadow-md mb-8">
        <div className="p-6 border-b border-gray-200">
          <h2 className="text-xl font-semibold text-gray-900">Upcoming Exams</h2>
        </div>
        <div className="p-6">
          {upcomingExams.length > 0 ? (
            <div className="space-y-4">
              {upcomingExams.map((exam) => (
                <div key={exam.id} className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50 transition-colors">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="font-semibold text-gray-900">{exam.title}</h3>
                      <p className="text-sm text-gray-600 mt-1">{exam.subject}</p>
                      <div className="flex items-center mt-2 text-sm text-gray-500">
                        <Calendar className="w-4 h-4 mr-1" />
                        {exam.date} • {exam.startTime} - {exam.endTime}
                        <MapPin className="w-4 h-4 ml-4 mr-1" />
                        {exam.room}
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="flex items-center text-sm text-gray-500">
                        <Users className="w-4 h-4 mr-1" />
                        {exam.enrolled}/{exam.capacity}
                      </div>
                      <div className="mt-2">
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                          {exam.status}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-8">
              <AlertCircle className="w-12 h-12 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-600">No upcoming exams scheduled</p>
            </div>
          )}
        </div>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
          <div className="space-y-3">
            <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors">
              Schedule New Exam
            </button>
            <button className="w-full bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition-colors">
              Assign Invigilator
            </button>
            <button className="w-full bg-purple-600 text-white py-2 px-4 rounded-lg hover:bg-purple-700 transition-colors">
              Check Room Availability
            </button>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">System Status</h3>
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">System Health</span>
              <div className="flex items-center">
                <CheckCircle className="w-4 h-4 text-green-500 mr-1" />
                <span className="text-sm font-medium text-green-600">Healthy</span>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">Database</span>
              <div className="flex items-center">
                <CheckCircle className="w-4 h-4 text-green-500 mr-1" />
                <span className="text-sm font-medium text-green-600">Connected</span>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">Notifications</span>
              <div className="flex items-center">
                <CheckCircle className="w-4 h-4 text-green-500 mr-1" />
                <span className="text-sm font-medium text-green-600">Active</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;