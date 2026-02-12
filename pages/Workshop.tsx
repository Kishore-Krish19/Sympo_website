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

  const entryFee = id === "1" ? "₹ 500 / person" : "₹ 300 / person";
  const isIndustryWorkshop = id === "1";

  return (
    <div className="w-full px-4 pt-20 md:pt-24">
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className={`relative w-full max-w-6xl mx-auto
        p-8 md:p-12 rounded-2xl
        bg-[var(--bg-card)] backdrop-blur-xl ${config.shadow} border border-[var(--border-color)]`}
      >
        {/* 🌈 SOFT GLOW */}
        {config.glow && (
          <div
            className={`absolute -inset-2 rounded-3xl blur-xl
            ${config.glow} opacity-20 pointer-events-none`}
          />
        )}

        {/* ✨ INNER GLASS - Optional in light mode, simpler border in dark */}
        <div
          className="absolute inset-[1.5px] rounded-2xl
          bg-gradient-to-b from-white/20 to-transparent
          pointer-events-none opacity-50"
        />

        {/* ⚙️ GEAR */}
        <div className="absolute top-1/2 right-16 -translate-y-1/2 opacity-10 hidden md:block">
          <SettingsIcon
            className={`w-72 h-72 ${config.iconColor} animate-spin-slow`}
          />
        </div>

        {/* CONTENT */}
        <div className="relative z-10">
          {/* HEADERS */}
          <h1 className="text-4xl md:text-5xl font-mech text-[var(--text-primary)] mb-2">
            WORKSHOP
          </h1>

          <h2
            className={`text-2xl md:text-3xl font-mech ${config.headingColor} mb-8`}
          >
            {config.topic}
          </h2>

          <div className="grid md:grid-cols-2 gap-8 mb-10">
            {/* LEFT INFO */}
            <div className="space-y-6 text-center md:text-left">
              {trainer && (
                <div className="flex items-center gap-4 text-[var(--text-secondary)]">
                  <User className={config.iconColor} />
                  <span className="text-lg">{trainer}</span>
                </div>
              )}

              <div className="flex items-center gap-4 text-[var(--text-secondary)]">
                <Calendar className={config.iconColor} />
                <span className="text-lg">{WORKSHOP_INFO.date}</span>
              </div>

              <div className="flex items-center gap-4 text-[var(--text-secondary)]">
                <MapPin className={config.iconColor} />
                <span className="text-lg">{WORKSHOP_INFO.location}</span>
              </div>

              <div className="flex items-center gap-4 text-[var(--text-secondary)]">
                <IndianRupee className={config.iconColor} />
                <span className="text-lg">{entryFee}</span>
              </div>

              {/* ✅ VIEW DESCRIPTION — BELOW LEFT */}
              {!isIndustryWorkshop && (
                <div className="pt-4">
                  <Link to={`/workshop/${id}/description`}>
                    <button
                      className={`
                        px-4 py-2 text-xs font-mech uppercase tracking-widest
                        border ${config.headingColor}
                        ${config.headingColor}
                        hover:bg-[var(--text-primary)] hover:text-[var(--bg-primary)]
                        transition-all duration-300
                        rounded-md
                      `}
                    >
                      View Description
                    </button>
                  </Link>
                </div>
              )}
            </div>

            {/* RIGHT SIDE – KEY BENEFITS ONLY FOR WORKSHOP 1 */}
            {isIndustryWorkshop && (
              <div className="bg-[var(--bg-surface)] rounded-xl p-6 backdrop-blur-md border border-[var(--border-color)]">
                <h3 className="text-[var(--text-primary)] font-mech mb-4 uppercase tracking-widest">
                  Key Benefits
                </h3>
                <ul className="space-y-3">
                  {WORKSHOP_INFO.benefits.map((benefit, i) => (
                    <li key={i} className="flex gap-3 text-[var(--text-secondary)]">
                      <CheckCircle
                        className={`w-5 h-5 ${config.iconColor}`}
                      />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* REGISTER */}
          <div className="text-center">
            <RegistrationButton
              registerPath={config.registerPath}
              openText="REGISTER FOR WORKSHOP"
            />
          </div>
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
