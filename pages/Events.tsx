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
  { title: 'Tech Events', path: '/tech-events', icon: Cpu, color: 'text-blue-400', border: 'border-blue-500', shadow: 'shadow-blue-500/50', fee: '₹ 300 / person', note: 'One Non-Tech event free with Tech registration' },
  { title: 'Non-Tech Events', path: '/non-tech-events', icon: Camera, color: 'text-purple-400', border: 'border-purple-500', shadow: 'shadow-purple-500/50', fee: '₹ 300 / person' },
  { title: 'Workshop', path: '/workshop', icon: Settings, color: 'text-orange-400', border: 'border-orange-500', shadow: 'shadow-orange-500/50', fee: '₹ 300 / person' },
  { title: 'Skill Show', path: '/skill-show', icon: Trophy, color: 'text-yellow-400', border: 'border-yellow-500', shadow: 'shadow-yellow-500/50', fee: '₹ 300 / person' },
  { title: 'EV Racing', path: '/ev-racing', icon: Zap, color: 'text-green-400', border: 'border-green-500', shadow: 'shadow-green-500/50', fee: '₹ 4000 for 5 members ' },
];

const Events: React.FC = () => {
  return (
    <div className="min-h-screen pt-24 px-4 container mx-auto relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0 pointer-events-none opacity-10">
        <Settings className="absolute -top-10 -left-10 w-[500px] h-[500px] text-gray-500 animate-spin-slow" />
        <Piston className="absolute top-1/3 right-0 w-96 h-96 text-gray-500 opacity-50" />
      </div>
      <h1 className="text-center text-3xl md:text-5xl font-mech text-white mb-16 uppercase tracking-widest">
        Select <span className="text-neonBlue">Category</span>
      </h1>

      <div className="flex flex-wrap justify-center gap-8 md:gap-10 max-w-7xl mx-auto">
        {categories.map((cat, index) => (
          <Link key={index} to={cat.path} className="w-[90%] md:w-[45%] lg:w-[29%]">
            <motion.div
              whileHover={{ y: -5, scale: 1.02 }}
              className={`relative h-64 md:h-[19rem] bg-black/40 backdrop-blur-md border ${cat.border} rounded-xl p-6 flex flex-col items-center justify-center group overflow-hidden cursor-pointer`}
              style={{ transformStyle: 'preserve-3d' }}
            >
              <div className={`absolute inset-0 bg-gradient-to-b from-transparent to-${cat.color.split('-')[1]}-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

              <cat.icon className={`w-14 h-14 md:w-[4.5rem] md:h-[4.5rem] ${cat.color} mb-4 md:mb-6 transition-transform duration-500 group-hover:scale-110 drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]`} />

              <h2 className="text-lg md:text-2xl font-mech text-white font-bold text-center z-10 group-hover:text-neonBlue transition-colors leading-tight">
                {cat.title}
              </h2>

              <p className="text-gray-400 font-mono mt-2 text-lg md:text-lg z-10 group-hover:text-white transition-colors">
                {cat.fee}
              </p>
              {
                // @ts-ignore
                cat.note && (
                  <p className="text-white text-[9px] mt-1 text-center px-1 z-10 font-mech tracking-widest leading-tight">
                    {
                      // @ts-ignore
                      cat.note}
                  </p>
                )}

              <div className={`absolute bottom-0 w-full h-1 bg-gradient-to-r from-transparent via-${cat.color.split('-')[1]}-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity`} />
            </motion.div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Events;
