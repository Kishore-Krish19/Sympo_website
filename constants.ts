import { Cpu, Camera, Settings, Zap, Brain, PenTool, Gamepad2, Trophy, Crosshair, Users } from 'lucide-react';
import { WorkshopDetails, EventDetails, Coordinator } from './types';

// Replace this with your deployed Google Apps Script Web App URL
export const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbzP0EvHzp37Aox4HXQ9jnLjjJ4ka_9YmAZL0B20yG9i/exec";

export const TECH_EVENTS: EventDetails[] = [
  { id: 'pp', title: 'Paper Presentation', description: 'Showcase your innovative ideas and research.', icon: PenTool, path: '/register/tech', category: 'tech' },
  { id: 'cad', title: 'CAD Design', description: 'Test your modeling skills in Fusion 360/SolidWorks.', icon: Settings, path: '/register/tech', category: 'tech' },
  { id: 'quiz', title: 'Technical Quiz', description: 'Battle of brains on mechanical concepts.', icon: Brain, path: '/register/tech', category: 'tech' },
  { id: 'debug', title: 'Debugging', description: 'Find the flaw in the mechanical circuits/code.', icon: Cpu, path: '/register/tech', category: 'tech' },
  { id: 'expo', title: 'Project Expo', description: 'Display your final year or hobby projects.', icon: Zap, path: '/register/tech', category: 'tech' },
];

export const NON_TECH_EVENTS: EventDetails[] = [
  { id: 'photo', title: 'Photography', description: 'Capture the moment.', icon: Camera, path: '/register/non-tech', category: 'non-tech' },
  { id: 'meme', title: 'Meme Contest', description: 'Make us laugh with engineering humor.', icon: Gamepad2, path: '/register/non-tech', category: 'non-tech' },
  { id: 'gaming', title: 'Gaming', description: 'Valorant/BGMI tournament.', icon: Crosshair, path: '/register/non-tech', category: 'non-tech' },
  { id: 'treasure', title: 'Treasure Hunt', description: 'Solve riddles to find the hidden prize.', icon: Trophy, path: '/register/non-tech', category: 'non-tech' },
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
  { name: "Alex Mercer", role: "Student Coordinator", phone: "+91 98765 43210" },
  { name: "Sarah Connor", role: "Event Head", phone: "+91 98765 12345" },
];
