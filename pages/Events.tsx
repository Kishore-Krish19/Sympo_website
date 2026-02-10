// ../pages/Events.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Cpu, Camera, Settings, Zap, Trophy } from 'lucide-react';

const Piston = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className={className}>
    <path d="M6 9v12h12V9" />
    <path d="M4 9h16" />
    <motion.path
      d="M7 5h10v4H7z"
      animate={{ y: [0, 8, 0] }}
      transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
    />
    <motion.line
      x1="12" y1="9" x2="12" y2="21"
      animate={{ y1: [9, 17, 9], y2: [21, 29, 21] }}
      transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
    />
  </svg>
);

const categories = [
  { title: 'Tech Events', path: '/tech-events', icon: Cpu, colorVar: 'var(--color-tech)', borderVar: 'var(--border-tech)', iconColor: 'text-[var(--color-tech)]', borderBase: 'border-[var(--border-tech)]', fee: '₹ 300 / person', note: 'One Non-Tech event free with Tech registration' },
  { title: 'Non-Tech Events', path: '/non-tech-events', icon: Camera, colorVar: 'var(--color-nontech)', borderVar: 'var(--border-nontech)', iconColor: 'text-[var(--color-nontech)]', borderBase: 'border-[var(--border-nontech)]', fee: '₹ 300 / person' },
  { title: 'Workshop', path: '/workshop', icon: Settings, colorVar: 'var(--color-workshop)', borderVar: 'var(--border-workshop)', iconColor: 'text-[var(--color-workshop)]', borderBase: 'border-[var(--border-workshop)]', fee: '₹ 300 / person' },
  { title: 'Shark Tank', path: '/shark-tank', icon: Trophy, colorVar: 'var(--color-skill)', borderVar: 'var(--border-skill)', iconColor: 'text-[var(--color-skill)]', borderBase: 'border-[var(--border-skill)]', fee: '₹ 300 / person' },
  { title: 'EV Racing', path: '/ev-racing', icon: Zap, colorVar: 'var(--color-ev)', borderVar: 'var(--border-ev)', iconColor: 'text-[var(--color-ev)]', borderBase: 'border-[var(--border-ev)]', fee: '₹ 4000 for 5 members ' },
];

const Events: React.FC = () => {
  return (
    <div className="min-h-screen pt-24 px-4 container mx-auto relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0 pointer-events-none opacity-10">
        <Settings className="absolute -top-10 -left-10 w-[500px] h-[500px] text-[var(--text-secondary)] animate-spin-slow" />
        <Piston className="absolute top-1/3 right-0 w-96 h-96 text-[var(--text-secondary)] opacity-50" />
      </div>
      <h1 className="text-center text-3xl md:text-5xl font-mech text-[var(--text-primary)] mb-16 uppercase tracking-widest">
        Select <span className="text-[var(--accent-blue)]">Category</span>
      </h1>

      <div className="flex flex-wrap justify-center gap-8 md:gap-10 max-w-7xl mx-auto">
        {categories.map((cat, index) => (
          <Link key={index} to={cat.path} className="w-[90%] md:w-[45%] lg:w-[29%]">
            <motion.div
              whileHover={{ y: -5, scale: 1.02 }}
              className={`relative h-64 md:h-[19rem] bg-[var(--bg-card)] backdrop-blur-md border ${cat.borderBase} rounded-xl p-6 flex flex-col items-center justify-center group overflow-hidden cursor-pointer transition-colors duration-300`}
              style={{ transformStyle: 'preserve-3d' }}
            >
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500"
                style={{ background: `linear-gradient(to bottom, transparent, ${cat.colorVar})` }}
              />

              <cat.icon className={`w-14 h-14 md:w-[4.5rem] md:h-[4.5rem] ${cat.iconColor} mb-4 md:mb-6 transition-transform duration-500 group-hover:scale-110 drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]`} />

              <h2 className={`text-lg md:text-2xl font-mech text-[var(--text-primary)] font-bold text-center z-10 group-hover:text-[var(--accent-blue)] transition-colors leading-tight`}>
                {cat.title}
              </h2>

              <p className="text-[var(--text-secondary)] font-mono mt-2 text-xs md:text-sm z-10 group-hover:text-[var(--text-primary)] transition-colors">
                {cat.fee}
              </p>
              {
                // @ts-ignore
                cat.note && (
                  <p className="text-[var(--text-primary)] text-[9px] mt-1 text-center px-1 z-10 font-mech tracking-widest leading-tight">
                    {
                      // @ts-ignore
                      cat.note}
                  </p>
                )}

              <div
                className="absolute bottom-0 w-full h-1 opacity-0 group-hover:opacity-100 transition-opacity"
                style={{ background: `linear-gradient(to right, transparent, ${cat.borderVar}, transparent)` }}
              />
            </motion.div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Events;
