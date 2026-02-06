// ../pages/Workshop.tsx
import React from 'react';
import { motion } from 'framer-motion';
import { WORKSHOP_INFO } from '../constants';
import {
  CheckCircle,
  Calendar,
  Clock,
  User,
  MapPin,
} from 'lucide-react';
import RegistrationButton from '../components/RegistrationButton';

const Workshop: React.FC = () => {
  return (
    <div className="min-h-screen pt-24 px-4 container mx-auto flex items-center justify-center">
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="w-full max-w-4xl bg-black/60 border border-neonOrange/30 backdrop-blur-xl p-8 md:p-12 rounded-2xl shadow-[0_0_50px_rgba(255,170,0,0.1)] relative overflow-hidden"
      >
        {/* BACKGROUND ICON */}
        <div className="absolute top-0 right-0 p-4 opacity-10">
          <SettingsIcon className="w-64 h-64 text-neonOrange animate-spin-slow" />
        </div>

        {/* HEADERS */}
        <h1 className="text-4xl md:text-5xl font-mech text-white mb-2">
          WORKSHOP
        </h1>
        <h2 className="text-2xl md:text-3xl font-mech text-neonOrange mb-8">
          {WORKSHOP_INFO.topic}
        </h2>

        {/* CONTENT */}
        <div className="grid md:grid-cols-2 gap-8 mb-10">
          {/* LEFT INFO */}
          <div className="space-y-6">
            <div className="flex items-center gap-4 text-gray-300">
              <User className="text-neonBlue" />
              <span className="font-body text-xl">
                {WORKSHOP_INFO.trainer}
              </span>
            </div>

            <div className="flex items-center gap-4 text-gray-300">
              <Calendar className="text-neonBlue" />
              <span className="font-body text-xl">
                {WORKSHOP_INFO.date}
              </span>
            </div>

            {/* <div className="flex items-center gap-4 text-gray-300">
              <Clock className="text-neonBlue" />
              <span className="font-body text-xl">
                {WORKSHOP_INFO.time}
              </span>
            </div> */}

            {/* VENUE */}
            <div className="flex items-center gap-4 text-gray-300">
              <MapPin className="text-neonBlue" />
              <span className="font-body text-xl">
               {WORKSHOP_INFO.location}
              </span>
            </div>
          </div>

          {/* BENEFITS */}
          <div className="bg-white/5 p-6 rounded-lg border border-white/10">
            <h3 className="text-white font-mech mb-4 uppercase tracking-widest">
              Key Benefits
            </h3>
            <ul className="space-y-3">
              {WORKSHOP_INFO.benefits.map((benefit, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 text-gray-400 font-body"
                >
                  <CheckCircle className="w-5 h-5 text-green-500 shrink-0" />
                  {benefit}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* REGISTRATION BUTTON (REUSABLE) */}
        <div className="text-center">
          <RegistrationButton
            registerPath="/register/workshop"
            openText="REGISTER FOR WORKSHOP"
          />

          <p className="mt-2 text-sm text-gray-400">
            Registration closes on 1 March at 11:59 PM
          </p>
        </div>
      </motion.div>
    </div>
  );
};

const SettingsIcon = (props: any) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.1a2 2 0 0 1-1-1.72v-.51a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
    <circle cx="12" cy="12" r="3" />
  </svg>
);

export default Workshop;
