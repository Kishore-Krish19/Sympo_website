// ../pages/EVRacing.tsx
import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Zap, AlertTriangle, Route, IndianRupee, Trophy } from "lucide-react";
import rulesPdf from "../assets/Mess fees Jan 2026.pdf";

const EVRacing: React.FC = () => {
  return (
    <div className="min-h-screen pt-24 px-4 container mx-auto">
      <div className="relative rounded-xl p-8 bg-black overflow-hidden">
        {/* GREEN NEON BACKGROUND */}
        <motion.div
          animate={{ opacity: [0.6, 0.9, 0.6] }}
          transition={{ duration: 3, repeat: Infinity }}
          className="absolute inset-0 bg-green-500/30 blur-[120px]"
        />

        {/* INNER NEON GLOW */}
        <div
          className="absolute inset-0 rounded-xl
          shadow-[inset_0_0_80px_rgba(34,197,94,0.8),_0_0_60px_rgba(34,197,94,0.6)]
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
          <div className="text-center mb-12">
            <motion.div
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="inline-block p-4 rounded-full bg-green-500/10 mb-4"
            >
              <Zap className="w-16 h-16 text-green-400" />
            </motion.div>

            <h1 className="text-5xl md:text-7xl font-mech italic text-white uppercase tracking-tighter">
              EV <span className="text-green-500">RACING</span>
            </h1>
          </div>

          {/* INFO CARDS */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {[
              {
                icon: AlertTriangle,
                title: "Rules",
                desc: "Standard IEEE safety compliance mandatory.",
                isRules: true,
              },
              {
                icon: Route,
                title: "Track",
                desc: "400m circuit with 3 sharp turns and 1 ramp.",
              },
              {
                icon: IndianRupee,
                title: "Entry Fees",
                desc: "₹1600 per team.",
              },
              {
                icon: Trophy,
                title: "Cash Prize",
                desc: "Cash prize awarded to the winning team.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -5 }}
                className="bg-white/5 border border-white/10 p-6 rounded hover:border-green-400 transition-colors"
              >
                {/* ICON + DOWNLOAD */}
                <div className="flex items-center justify-between mb-4">
                  <item.icon className="w-10 h-10 text-green-400 drop-shadow-[0_0_6px_rgba(34,197,94,0.7)]" />

                  {item.isRules && (
                    <a href={rulesPdf} download="EV_Racing_Rules.pdf">
                      <button
                        className="px-4 py-2 bg-green-500 text-black font-mech font-bold
                        text-xs uppercase tracking-widest
                        hover:bg-green-400
                        shadow-[0_0_15px_rgba(34,197,94,0.6)]
                        skew-x-[-12deg]"
                      >
                        <span className="block skew-x-[12deg]">Download</span>
                      </button>
                    </a>
                  )}
                </div>

                <h3 className="text-xl font-mech text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-400 font-body text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* REGISTER BUTTON */}
          <div className="flex justify-center">
            <Link to="/register/ev">
              <button
                className="px-12 py-4 bg-green-500 text-black font-mech font-bold
                text-xl uppercase tracking-widest
                hover:bg-green-400
                shadow-[0_0_20px_rgba(34,197,94,0.6)]
                skew-x-[-12deg]"
              >
                <span className="block skew-x-[12deg]">Register Team</span>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EVRacing;
