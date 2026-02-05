export interface RegistrationForm {
  teamName: string;
  eventType: string;
  eventName: string;
  nonTechEvent?: string; // ✅ optional
  teamLeaderName: string;
  collegeName: string;
  department: string;
  yearOfStudy: string;
  phoneNumber: string
  whatsappNumber: string;
  email: string;
  teamSize: number; // Values: 1, 2, 3
  teamMembers: string[]; // Additional members (excluding leader)
  vegCount: number;
  nonVegCount: number;
  transactionId: string; // New mandatory field
  termsAccepted: boolean;
  paymentScreenshot: string; // Base64 string
}

export type EventType = 'tech' | 'non-tech' | 'workshop' | 'ev-racing';

export interface EventDetails {
  id: string;
  title: string;
  description: string;
  icon: any; // Lucide icon component
  path: string;
  category: EventType;
}

export interface WorkshopDetails {
  topic: string;
  trainer: string;
  date: string;
  time: string;
  benefits: string[];
}

export interface Coordinator {
  name: string;
  role: string;
  phone: string;
}