// ../constants.ts
import { Cpu, Camera, Settings, Zap, Brain, PenTool, Gamepad2, Trophy, Crosshair, Users, Video, Wrench, Target, Rocket } from 'lucide-react';
import { WorkshopDetails, EventDetails, Coordinator } from './types';
import { video } from 'framer-motion/client';

// Replace this with your deployed Google Apps Script Web App URL
export const GOOGLE_SCRIPT_URL = import.meta.env.VITE_GOOGLE_SCRIPT_URL;

export const BANK_DETAILS = {
  accountHolder: "Anand S",
  bankName: "State Bank of India",
  accountNumber: "43568031557",
  ifscCode: "SBIN0000928",
  upiId: "anand2386s@oksbi"
};

export const TECH_EVENTS: EventDetails[] = [
  { id: 'pp', title: 'Paper Presentation', description: 'Showcase your innovative ideas and research.', icon: PenTool, path: '/register/tech', category: 'tech', entryFee: '₹ 249 / person' },
  { id: 'cad', title: '3D CAD Modeling (Design Challenge)', description: 'Test your modeling skills in Fusion 360/SolidWorks.', icon: Settings, path: '/register/tech', category: 'tech', entryFee: '₹ 249 / person' },
  { id: 'quiz', title: 'Mech Core Quiz', description: 'Battle of brains on mechanical concepts.', icon: Brain, path: '/register/tech', category: 'tech', entryFee: '₹ 249 / person' },
  { id: 'expo', title: 'Legend in Lathe (Machining)', description: 'Display your final year or hobby projects.', icon: Wrench, path: '/register/tech', category: 'tech', entryFee: '₹ 249 / person' },
];

export const NON_TECH_EVENTS: EventDetails[] = [
  {
    id: 'photo',
    title: 'Photography',
    description: 'Capture the moment.',
    icon: Camera,
    path: '/register/non-tech',
    category: 'non-tech',
    entryFee: '₹ 249 / person',
  },
  {
    id: 'meme',
    title: 'Short Film',
    description: 'Show your storytelling and creativity.',
    icon: Video,
    path: '/register/non-tech',
    category: 'non-tech',
    entryFee: '₹ 249 / person',
  },
  {
    id: 'water_rocketry',
    title: 'Water Rocketry',
    description: 'Design and launch a water-powered rocket for maximum height and stability.',
    icon: Rocket,
    path: '/register/water-rocketry',
    category: 'non-tech',
    entryFee: '₹ 249 / team',
  },
  {
    id: 'trebuchet',
    title: 'Trebuchet',
    description: 'Build a gravity-powered trebuchet to test accuracy and range.',
    icon: Target,
    path: '/register/trebuchet',
    category: 'non-tech',
    entryFee: '₹ 249 / team',
  },
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
  ],
  entryFee: "399 / person"
};

export const COORDINATORS: Coordinator[] = [
  { name: "Mr. Dony Charles", phone: "+91 78100 85410" },
  { name: "Mr. Venkataprasath", phone: "+91 70105 91904" },
  { name: "Mr. Vedheswar", phone: "+91 93611 32882" },
  { name: "Mr. Solaivendhan", phone: "+91 70948 77363" },
];

export const nonTechEventOptions = [
  { id: 1, title: "Short Film" },
  { id: 2, title: "Photography" },
  { id: 3, title: "Water Rocketry" },
  { id: 4, title: "Trebuchet" },
];
// 🔒 Common registration closing date for all events
// Closes on 1st March at 11:59 PM
export const REGISTRATION_CLOSE_DATE = new Date(2026, 2, 1, 23, 59, 0);

// 🔒 Common closed text
export const REGISTRATION_CLOSED_TEXT = 'REGISTRATION CLOSED';

export const WORKSHOP_CONFIG = {
  "1": {
    topic: "DRONE & UAV ( UNMANNED AERIAL VEHICLE )",
    price: "399",
    headingColor: "text-orange-400",
    iconColor: "text-orange-400",
    border: "border-orange-500",
    shadow: "shadow-[0_0_70px_rgba(251,146,60,0.18)]",
    glow: "bg-orange-0",
    registerPath: "/register/workshop1",
  },
  "2": {
    topic: "GAME DEVELOPMENT",
    price: "299",
    headingColor: "text-blue-400",
    iconColor: "text-blue-400",
    border: "border-blue-500",
    shadow: "shadow-[0_0_70px_rgba(96,165,250,0.18)]",
    glow: "bg-blue-0",
    registerPath: "/register/workshop2",
  },
  "3": {
    topic: "ECU (ELECTRONIC CONTROL UNIT)",
    price: "299",
    headingColor: "text-purple-400",
    iconColor: "text-purple-400",
    border: "border-purple-500",
    shadow: "shadow-[0_0_70px_rgba(192,132,252,0.18)]",
    glow: "bg-purple-0",
    registerPath: "/register/workshop3",
  },
} as const;

export const WORKSHOP_DESCRIPTIONS = {
  "2": {
    title: "Game Development",
    description: [
      "Participants will develop a simple 2D game using pre-built game assets.",
      "The workshop helps participants understand core game development concepts presented in the PPT through hands-on implementation.",
      "Each participant will build their own playable prototype during the session.",

      "Additional Session (Based on Available Time):",
      "• Open discussion on individual game development experiences.",
      "• Peer-to-peer feedback and rating of games developed during the workshop.",
      "• Live demonstration of how the discussed concepts are implemented in popular AAA and indie games currently used in the industry (30–60 minutes).",

      "Total Duration: 2.5 Hours",

      "Requirements for Participants:",
      "• Laptop with mouse",
      "• GODOT Game Engine installed (Open Source)",
      "• Mobile phone for internet and communication",
      "• WhatsApp group for sharing game assets and updates",

      "Developer & Learning Resources:",
      "• YouTube Channel: DARKLIGHT",
      "• Channel Link: https://www.youtube.com/@DARKLIGHT-R11",

      "Developed Games:",
      "• Dino Runner – Remake",
      "• Top Down Shooter – Demo",
      "• Nari Game – 2D Platformer",
      "• 3D Horror Game – Demo",

      "Participants can download and explore some of the above games from:",
      "• itch.io Profile: https://itch.io/profile/darklight-studios"
    ],
  },

  "3": {
    title: "ECU (Electronic Control Unit)",
    description: [
      "Automobile Electronics & Engine Management Systems",
      "We provide clear and practical knowledge on modern automobile systems, including Engine Control Modules (ECM), sensors and actuators, and their real-time working principles. Our content also covers DEF (Diesel Exhaust Fluid) emission systems, car tuning and ECU optimization, and the working of automobile meters and damping mechanisms.",
      "Designed for students, technicians, and automotive enthusiasts, our explanations focus on accuracy, simplicity, and real-world application.",

      "Areas Covered:",
      "Engine control module (explanation)",
      "What is sensor and How sensors works",
      "What is actuator and How actuator works",
      "Explaination of DEF system",
      "Car tunning",
      "Meter dampering and detailed explanation of automobile"
    ],
  },
} as const;

export const OPTIONAL_WORKSHOPS = [
  { id: "workshop2", title: "Game Development (Workshop)" },
  { id: "workshop3", title: "ECU (Workshop)" },
];