export interface Exam {
  id: string;
  title: string;
  subject: string;
  date: string;
  startTime: string;
  endTime: string;
  room: string;
  capacity: number;
  enrolled: number;
  invigilators: string[];
  status: 'scheduled' | 'ongoing' | 'completed' | 'cancelled';
}

export interface Invigilator {
  id: string;
  name: string;
  email: string;
  department: string;
  phone: string;
  availability: string[];
  assignedExams: string[];
  status: 'available' | 'busy' | 'unavailable';
}

export interface Room {
  id: string;
  name: string;
  building: string;
  floor: number;
  capacity: number;
  facilities: string[];
  status: 'available' | 'occupied' | 'maintenance';
}

export interface Assignment {
  id: string;
  examId: string;
  invigilatorId: string;
  role: 'chief' | 'assistant';
  status: 'confirmed' | 'pending' | 'declined';
}