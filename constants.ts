// ../constants.ts
import { Cpu, Camera, Settings, Zap, Brain, PenTool, Gamepad2, Trophy, Crosshair, Users } from 'lucide-react';
import { WorkshopDetails, EventDetails, Coordinator } from './types';

// Replace this with your deployed Google Apps Script Web App URL
export const GOOGLE_SCRIPT_URL = import.meta.env.VITE_GOOGLE_SCRIPT_URL;

export const BANK_DETAILS = {
  accountHolder: "EFFICACY SYMPOSIUM",
  bankName: "State Bank of India",
  accountNumber: "123456789012",
  ifscCode: "SBIN0001234",
  upiId: "efficacy2024@sbi"
};

export const TECH_EVENTS: EventDetails[] = [
  { id: 'pp', title: 'Paper Presentation', description: 'Showcase your innovative ideas and research.', icon: PenTool, path: '/register/tech', category: 'tech' },
  { id: 'cad', title: 'CAD Design', description: 'Test your modeling skills in Fusion 360/SolidWorks.', icon: Settings, path: '/register/tech', category: 'tech' },
  { id: 'quiz', title: 'Technical Quiz', description: 'Battle of brains on mechanical concepts.', icon: Brain, path: '/register/tech', category: 'tech' },
  { id: 'expo', title: 'Project Expo', description: 'Display your final year or hobby projects.', icon: Zap, path: '/register/tech', category: 'tech' },
];

export const NON_TECH_EVENTS: EventDetails[] = [
  { id: 'photo', title: 'Photography', description: 'Capture the moment.', icon: Camera, path: '/register/non-tech', category: 'non-tech' },
  { id: 'meme', title: 'Meme Contest', description: 'Make us laugh with engineering humor.', icon: Gamepad2, path: '/register/non-tech', category: 'non-tech' },
];

export const WORKSHOP_INFO: WorkshopDetails = {
  topic: "Advanced EV Battery Management Systems",
  trainer: "Dr. Alan Grant (Tesla Alumni)",
  date: "October 25, 2024",
  time: "10:00 AM - 4:00 PM",
  benefits: [
    "Hands-on BMS Simulation",
    "Industry Recognized Certificate",
    "Networking with EV Experts",
    "Lunch & Refreshments included"
  ]
};

export const COORDINATORS: Coordinator[] = [
  { name: "Dony Charles",  phone: "+91 78100 85410" },
  { name: "Venkataprasath", phone: "+91 70105 91904" },
  { name: "Vedheswar",  phone: "+91 93611 32882" },
  { name: "Solaivendhan", phone: "+91 70948 77363" },
];

export const nonTechEventOptions = [
  { id: 1, title: "Short Film" },
  { id: 2, title: "Photography" }
];
