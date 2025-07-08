import React, { useState } from 'react';
import { Calendar, Clock, MapPin, Users, ChevronLeft, ChevronRight } from 'lucide-react';
import { mockExams } from '../data/mockData';

const ScheduleView: React.FC = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  
  const formatDate = (date: Date) => {
    return date.toLocaleDateString('en-US', { 
      weekday: 'long', 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  const getWeekDates = (date: Date) => {
    const week = [];
    const startDate = new Date(date);
    startDate.setDate(date.getDate() - date.getDay());
    
    for (let i = 0; i < 7; i++) {
      const day = new Date(startDate);
      day.setDate(startDate.getDate() + i);
      week.push(day);
    }
    return week;
  };

  const weekDates = getWeekDates(currentDate);

  const getExamsForDate = (date: Date) => {
    const dateStr = date.toISOString().split('T')[0];
    return mockExams.filter(exam => exam.date === dateStr);
  };

  const navigateWeek = (direction: 'prev' | 'next') => {
    const newDate = new Date(currentDate);
    newDate.setDate(currentDate.getDate() + (direction === 'next' ? 7 : -7));
    setCurrentDate(newDate);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'scheduled': return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'ongoing': return 'bg-green-100 text-green-800 border-green-200';
      case 'completed': return 'bg-gray-100 text-gray-800 border-gray-200';
      case 'cancelled': return 'bg-red-100 text-red-800 border-red-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Schedule View</h1>
          <p className="text-gray-600">Weekly examination schedule overview</p>
        </div>
        <div className="flex items-center gap-4">
          <button
            onClick={() => navigateWeek('prev')}
            className="p-2 rounded-lg border border-gray-300 hover:bg-gray-50 transition-colors"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <span className="text-lg font-medium text-gray-900">
            {formatDate(weekDates[0])} - {formatDate(weekDates[6])}
          </span>
          <button
            onClick={() => navigateWeek('next')}
            className="p-2 rounded-lg border border-gray-300 hover:bg-gray-50 transition-colors"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="grid grid-cols-7 gap-0 border-b border-gray-200">
          {weekDates.map((date, index) => {
            const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
            const isToday = date.toDateString() === new Date().toDateString();
            const exams = getExamsForDate(date);
            
            return (
              <div key={index} className="p-4 border-r border-gray-200 last:border-r-0">
                <div className="text-center mb-4">
                  <div className={`text-sm font-medium ${isToday ? 'text-blue-600' : 'text-gray-600'}`}>
                    {dayNames[index]}
                  </div>
                  <div className={`text-2xl font-bold ${isToday ? 'text-blue-600' : 'text-gray-900'}`}>
                    {date.getDate()}
                  </div>
                </div>
                
                <div className="space-y-2">
                  {exams.map((exam) => (
                    <div key={exam.id} className={`p-3 rounded-lg border ${getStatusColor(exam.status)}`}>
                      <div className="text-sm font-medium truncate" title={exam.title}>
                        {exam.title}
                      </div>
                      <div className="text-xs text-gray-600 mt-1">
                        <div className="flex items-center">
                          <Clock className="w-3 h-3 mr-1" />
                          {exam.startTime} - {exam.endTime}
                        </div>
                        <div className="flex items-center mt-1">
                          <MapPin className="w-3 h-3 mr-1" />
                          {exam.room}
                        </div>
                        <div className="flex items-center mt-1">
                          <Users className="w-3 h-3 mr-1" />
                          {exam.enrolled}/{exam.capacity}
                        </div>
                      </div>
                    </div>
                  ))}
                  {exams.length === 0 && (
                    <div className="text-center py-8">
                      <div className="text-gray-400 text-sm">No exams scheduled</div>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Summary Section */}
      <div className="mt-6 bg-white rounded-lg shadow-md p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Weekly Summary</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-blue-50 p-4 rounded-lg">
            <div className="text-2xl font-bold text-blue-600">
              {mockExams.filter(exam => exam.status === 'scheduled').length}
            </div>
            <div className="text-sm text-blue-600">Scheduled Exams</div>
          </div>
          <div className="bg-green-50 p-4 rounded-lg">
            <div className="text-2xl font-bold text-green-600">
              {mockExams.filter(exam => exam.status === 'ongoing').length}
            </div>
            <div className="text-sm text-green-600">Ongoing Exams</div>
          </div>
          <div className="bg-purple-50 p-4 rounded-lg">
            <div className="text-2xl font-bold text-purple-600">
              {mockExams.reduce((total, exam) => total + exam.enrolled, 0)}
            </div>
            <div className="text-sm text-purple-600">Total Students</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScheduleView;