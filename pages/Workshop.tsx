import React from "react";
import { motion } from "framer-motion";
import { useParams, Link } from "react-router-dom";
import { WORKSHOP_INFO, WORKSHOP_CONFIG } from "../constants";
import {
  CheckCircle,
  Calendar,
  MapPin,
  User,
  IndianRupee,
} from "lucide-react";
import RegistrationButton from "../components/RegistrationButton";

const Workshop: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const config = WORKSHOP_CONFIG[id as keyof typeof WORKSHOP_CONFIG];

  if (!config || !id) return null;

  /* =========================
     TRAINER + FEE
  ========================= */
  const trainer =
    id === "2"
      ? "Mr. Rohith"
      : id === "3"
      ? "Mr. Lalith Kishore"
      : null;

  const entryFee = id === "1" ? "₹ 300 / person" : "₹ 200 / person";
  const isIndustryWorkshop = id === "1";

  return (
    <div className="w-full px-4 pt-20 md:pt-24">
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="w-full bg-[var(--bg-card)] border border-[var(--border-workshop)] backdrop-blur-xl
               p-8 md:p-12 rounded-2xl
               shadow-[0_0_50px_var(--shadow-workshop)]
               relative overflow-hidden"
      >
        {/* BACKGROUND ICON */}
        <div className="absolute top-0 right-0 p-4 opacity-10">
          <SettingsIcon className="w-64 h-64 text-[var(--color-workshop)] animate-spin-slow" />
        </div>

        {/* HEADERS */}
        <h1 className="text-4xl md:text-5xl font-mech text-[var(--text-primary)] mb-2">
          WORKSHOP
        </h1>
        <h2 className="text-2xl md:text-3xl font-mech text-[var(--color-workshop)] mb-8">
          {WORKSHOP_INFO.topic}
        </h2>

        {/* CONTENT */}
        <div className="grid md:grid-cols-2 gap-8 mb-10">
          {/* LEFT INFO */}
          <div className="space-y-6">
            {/* <div className="flex items-center gap-4 text-[var(--text-secondary)]">
              <User className="text-[var(--accent-blue)]" />
              <span className="font-body text-xl">
                {WORKSHOP_INFO.trainer}
              </span>
            </div> */}

            <div className="flex items-center gap-4 text-[var(--text-secondary)]">
              <Calendar className="text-[var(--accent-blue)]" />
              <span className="font-body text-xl">{WORKSHOP_INFO.date}</span>
            </div>

            {/* <div className="flex items-center gap-4 text-[var(--text-secondary)]">
              <Clock className="text-[var(--accent-blue)]" />
              <span className="font-body text-xl">
                {WORKSHOP_INFO.time}
              </span>
            </div> */}

            {/* VENUE */}
            <div className="flex items-center gap-4 text-[var(--text-secondary)]">
              <MapPin className="text-[var(--accent-blue)]" />
              <span className="font-body text-xl">
                {WORKSHOP_INFO.location}
              </span>
            </div>

            {/* FEE */}
            <div className="flex items-center gap-2 text-[var(--text-secondary)] pl-1">
              <IndianRupee
                className="text-[var(--accent-blue)] w-5 h-5"
                strokeWidth={2.5}
              />
              <span className="font-body text-xl">
                {WORKSHOP_INFO.entryFee}
              </span>
            </div>
          </div>

          {/* BENEFITS */}
          <div className="bg-[var(--bg-surface)] p-6 rounded-lg border border-[var(--border-color)]">
            <h3 className="text-[var(--text-primary)] font-mech mb-4 uppercase tracking-widest">
              Key Benefits
            </h3>
            <ul className="space-y-3">
              {WORKSHOP_INFO.benefits.map((benefit, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 text-[var(--text-secondary)] font-body"
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

          {/* <p className="mt-2 text-sm text-[var(--text-muted)]">
            Registration closes on 1 March at 11:59 PM.
          </p> */}
        </div>
      </motion.div>
    </div>
  );
};

/* ⚙️ SETTINGS ICON */
const SettingsIcon = (props: any) => (
  <svg
    {...props}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.1a2 2 0 0 1-1-1.72v-.51a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
    <circle cx="12" cy="12" r="3" />
  </svg>
);

export default Workshop;
