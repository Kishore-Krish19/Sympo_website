// ../constants.ts
import { Cpu, Camera, Settings, Zap, Brain, PenTool, Gamepad2, Trophy, Crosshair, Users,Video, Wrench } from 'lucide-react';
import { WorkshopDetails, EventDetails, Coordinator } from './types';
import { video } from 'framer-motion/client';

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
  { id: 'cad', title: '3D CAD Modeling (Design Challenge)', description: 'Test your modeling skills in Fusion 360/SolidWorks.', icon: Settings, path: '/register/tech', category: 'tech' },
  { id: 'quiz', title: 'Mech Core Quiz', description: 'Battle of brains on mechanical concepts.', icon: Brain, path: '/register/tech', category: 'tech' },
  { id: 'expo', title: 'Legend in Lathe (Machining)', description: 'Display your final year or hobby projects.', icon: Wrench, path: '/register/tech', category: 'tech' },
];

export const NON_TECH_EVENTS: EventDetails[] = [
  { id: 'photo', title: 'Photography', description: 'Capture the moment.', icon: Camera, path: '/register/non-tech', category: 'non-tech' },
  { id: 'meme', title: 'Short Film', description: 'Make us laugh with engineering humor.', icon: Video, path: '/register/non-tech', category: 'non-tech' },
];

export const WORKSHOP_INFO: WorkshopDetails = {
  topic: "Drone / UAV ( Unmanned Aerial Vehicle ) ",
  trainer: "Dr. Alan Grant (Tesla Alumni)",
  date: "March 4, 2026",
  time: "11:00 AM - 1:00 PM",
  location: "Mechanical department, GCE Erode",
  benefits: [
    "Basics of Drone & UAV Systems",
    "Drone Components & Flight Control",
    "Industrial and Commercial Applications",
    "Safety, Regulations & Ethics",
    "Career and Future Trends in Drones"
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
// 🔒 Common registration closing date for all events
// Closes on 1st March at 11:59 PM
export const REGISTRATION_CLOSE_DATE = new Date(2026, 2, 1, 23, 59, 0);

// 🔒 Common closed text
export const REGISTRATION_CLOSED_TEXT = 'REGISTRATION CLOSED';
