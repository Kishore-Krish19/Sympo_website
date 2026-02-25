import React from "react";
import { Link } from "react-router-dom";
import { motion, useInView } from "framer-motion";
import {
  Zap,
  AlertTriangle,
  Route,
  IndianRupee,
  Trophy,
  Bike,
} from "lucide-react";
import rulesPdf from "../assets/CHRONX2026-RULEBOOK.pdf";

const EVRacing: React.FC = () => {
  const titleRef = React.useRef<HTMLDivElement | null>(null);
  const isInView = useInView(titleRef, { once: true, amount: 0.6 });

  return (
    <div className="w-full px-4 pt-20 md:pt-24">
      <div className="relative rounded-xl p-4 md:p-8 bg-[var(--bg-card)] overflow-hidden sm:overflow-hidden overflow-visible">
        
        {/* GREEN NEON BACKGROUND */}
        <motion.div
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute inset-0 bg-green-500/10 blur-[120px]"
        />

        {/* INNER NEON GLOW */}
        <div
          className="absolute inset-0 rounded-xl
          shadow-[inset_0_0_40px_rgba(34,197,94,0.4),_0_0_30px_rgba(34,197,94,0.3)]
          pointer-events-none"
        />

        {/* CARBON TEXTURE */}
        <div
          className="absolute inset-0
          bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]
          opacity-20 pointer-events-none"
        />

        {/* CONTENT */}
        <div className="relative z-10">

          {/* HEADER */}
          <div className="text-center mb-12 relative">

            {/* BLINK BACKGROUND */}
            <motion.div
              animate={{
                opacity: [0.2, 0.5, 0.2],
                scale: [0.95, 1.08, 0.95],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute inset-0 flex justify-center items-center pointer-events-none"
            >
              <div
                className="
                  w-[420px] h-[140px]
                  bg-gradient-to-r from-green-400 via-green-500 to-green-400
                  blur-[60px]
                  opacity-90
                "
              />
            </motion.div>

            {/* ICON */}
            <motion.div
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              className="inline-block p-4 rounded-full bg-green-500/10 mb-4 relative z-10"
            >
              <Zap className="w-16 h-16 text-green-400" />
            </motion.div>

            {/* TITLE + BIKES */}
            <div
              ref={titleRef}
              className="relative flex items-center justify-center gap-4 sm:gap-8 overflow-visible"
            >
              {/* LEFT BIKE */}
              <motion.div
                initial={{ x: -40, opacity: 0 }}
                animate={isInView ? { x: -6, opacity: 1 } : {}}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="z-0 pointer-events-none"
              >
                <Bike
                  className="
                    w-8 h-8
                    sm:w-14 sm:h-14
                    md:w-16 md:h-16
                    text-green-400
                    rotate-[-30deg]
                    drop-shadow-[0_0_14px_rgba(34,197,94,0.9)]
                  "
                />
              </motion.div>

              {/* TITLE */}
              <motion.h1
                animate={{
                  color: ["var(--text-primary)", "var(--text-primary)", "var(--text-primary)"],
                  textShadow: [
                    "0 0 12px rgba(34,197,94,0.4)",
                    "0 0 30px rgba(34,197,94,1)",
                    "0 0 12px rgba(34,197,94,0.4)",
                  ],
                }}
                transition={{
                  duration: 1.2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="
                  relative z-10 text-[var(--text-primary)] 
                  text-3xl md:text-7xl
                  font-mech italic
                  uppercase tracking-tighter
                "
              >
                EV <span className="text-green-500">RACING</span>
              </motion.h1>

              {/* RIGHT BIKE */}
              <motion.div
                initial={{ x: 40, opacity: 0 }}
                animate={isInView ? { x: 6, opacity: 1 } : {}}
                transition={{
                  duration: 0.8,
                  ease: "easeOut",
                  delay: 0.1,
                }}
                className="z-0 pointer-events-none"
              >
                <Bike
                  className="
                    w-8 h-8
                    sm:w-14 sm:h-14
                    md:w-16 md:h-16
                    text-green-400
                    scale-x-[-1]
                    rotate-[30deg]
                    drop-shadow-[0_0_14px_rgba(34,197,94,0.9)]
                  "
                />
              </motion.div>
            </div>
          </div>

          {/* INFO CARDS */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {[
              {
                icon: AlertTriangle,
                title: "Rules",
                isRules: true,
                desc: "Follow the rules and regulations",
              },
              {
                icon: Route,
                title: "Track",
                desc: "1km circuit with Off-road and on-road",
              },
              {
                icon: IndianRupee,
                title: "Entry Fees",
                desc: "₹4000 for 5 members (₹300 per additional member)",
              },
              {
                icon: Trophy,
                title: "Cash Prize",
                desc: "Total ₹30,000 prize",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -5 }}
                className="bg-[var(--bg-card)] border border-[var(--border-nontech)] p-6 rounded hover:border-green-400 transition-colors"
              >
                <div className="flex items-center justify-between mb-4">
                  <item.icon className="w-10 h-10 text-green-400" />
                  {item.isRules && (
                    <a href={rulesPdf} download="EV_Racing_Rules.pdf">
                      <button className="px-4 py-2 bg-green-500 text-black font-mech font-bold text-xs uppercase">
                        Download
                      </button>
                    </a>
                  )}
                </div>

                <h3 className="text-xl font-mech text-[var(--text-primary)] mb-2">
                  {item.title}
                </h3>

                <p className="text-[var(--text-secondary)] text-sm">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>

          {/* REGISTER BUTTON */}
          <div className="flex justify-center">
            <Link to="/register/ev">
              <button
                className="
                  px-12 py-4 bg-green-500 text-black font-mech font-bold
                  text-xl uppercase tracking-widest
                  hover:bg-green-400
                  shadow-[0_0_20px_rgba(34,197,94,0.6)]
                  skew-x-[-12deg]
                "
              >
                <span className="block skew-x-[12deg]">
                  Register Team
                </span>
              </button>
            </Link>
          </div>

        </div>
      </div>
    </div>
  );
};

export default EVRacing;
