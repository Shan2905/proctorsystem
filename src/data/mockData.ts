import { Exam, Invigilator, Room } from '../types';

export const mockExams: Exam[] = [
  {
    id: '1',
    title: 'Data Structures & Algorithms',
    subject: 'Computer Science',
    date: '2025-01-15',
    startTime: '09:00',
    endTime: '12:00',
    room: 'A101',
    capacity: 60,
    enrolled: 45,
    invigilators: ['inv1', 'inv2'],
    status: 'scheduled'
  },
  {
    id: '2',
    title: 'Database Management Systems',
    subject: 'Computer Science',
    date: '2025-01-16',
    startTime: '14:00',
    endTime: '17:00',
    room: 'B205',
    capacity: 40,
    enrolled: 38,
    invigilators: ['inv3'],
    status: 'scheduled'
  },
  {
    id: '3',
    title: 'Operating Systems',
    subject: 'Computer Science',
    date: '2025-01-14',
    startTime: '10:00',
    endTime: '13:00',
    room: 'C301',
    capacity: 50,
    enrolled: 42,
    invigilators: ['inv1', 'inv4'],
    status: 'ongoing'
  }
];

export const mockInvigilators: Invigilator[] = [
  {
    id: 'inv1',
    name: 'Dr. Sarah Johnson',
    email: 'sarah.johnson@university.edu',
    department: 'Computer Science',
    phone: '+1-555-0123',
    availability: ['2025-01-15', '2025-01-16', '2025-01-17'],
    assignedExams: ['1', '3'],
    status: 'busy'
  },
  {
    id: 'inv2',
    name: 'Prof. Michael Chen',
    email: 'michael.chen@university.edu',
    department: 'Mathematics',
    phone: '+1-555-0124',
    availability: ['2025-01-15', '2025-01-18'],
    assignedExams: ['1'],
    status: 'available'
  },
  {
    id: 'inv3',
    name: 'Dr. Emily Rodriguez',
    email: 'emily.rodriguez@university.edu',
    department: 'Computer Science',
    phone: '+1-555-0125',
    availability: ['2025-01-16', '2025-01-17'],
    assignedExams: ['2'],
    status: 'busy'
  },
  {
    id: 'inv4',
    name: 'Prof. David Wilson',
    email: 'david.wilson@university.edu',
    department: 'Engineering',
    phone: '+1-555-0126',
    availability: ['2025-01-14', '2025-01-15'],
    assignedExams: ['3'],
    status: 'available'
  }
];

export const mockRooms: Room[] = [
  {
    id: 'room1',
    name: 'A101',
    building: 'Academic Block A',
    floor: 1,
    capacity: 60,
    facilities: ['Projector', 'Whiteboard', 'AC', 'CCTV'],
    status: 'available'
  },
  {
    id: 'room2',
    name: 'B205',
    building: 'Academic Block B',
    floor: 2,
    capacity: 40,
    facilities: ['Projector', 'Whiteboard', 'AC'],
    status: 'available'
  },
  {
    id: 'room3',
    name: 'C301',
    building: 'Academic Block C',
    floor: 3,
    capacity: 50,
    facilities: ['Projector', 'Whiteboard', 'AC', 'CCTV', 'Sound System'],
    status: 'occupied'
  }
];