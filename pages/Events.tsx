// ../pages/Events.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Cpu, Camera, Settings, Zap } from 'lucide-react';

const categories = [
  { title: 'Tech Events', path: '/tech-events', icon: Cpu, color: 'text-blue-400', border: 'border-blue-500', shadow: 'shadow-blue-500/50' },
  { title: 'Non-Tech Events', path: '/non-tech-events', icon: Camera, color: 'text-purple-400', border: 'border-purple-500', shadow: 'shadow-purple-500/50' },
  { title: 'Workshop', path: '/workshop', icon: Settings, color: 'text-orange-400', border: 'border-orange-500', shadow: 'shadow-orange-500/50' },
  { title: 'EV Racing', path: '/ev-racing', icon: Zap, color: 'text-green-400', border: 'border-green-500', shadow: 'shadow-green-500/50' },
];

const Events: React.FC = () => {
  return (
    <div className="min-h-screen pt-24 px-4 container mx-auto">
      <h1 className="text-center text-5xl font-mech text-white mb-16 uppercase tracking-widest">
        Select <span className="text-neonBlue">Category</span>
      </h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {categories.map((cat, index) => (
          <Link key={index} to={cat.path}>
            <motion.div
              whileHover={{ y: -10, rotateX: 10, scale: 1.02 }}
              className={`relative h-80 bg-black/40 backdrop-blur-md border ${cat.border} rounded-xl p-6 flex flex-col items-center justify-center group overflow-hidden cursor-pointer`}
              style={{ transformStyle: 'preserve-3d' }}
            >
              <div className={`absolute inset-0 bg-gradient-to-b from-transparent to-${cat.color.split('-')[1]}-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              
              <cat.icon className={`w-20 h-20 ${cat.color} mb-6 transition-transform duration-500 group-hover:scale-110 drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]`} />
              
              <h2 className="text-2xl font-mech text-white font-bold text-center z-10 group-hover:text-neonBlue transition-colors">
                {cat.title}
              </h2>
              
              <div className={`absolute bottom-0 w-full h-1 bg-gradient-to-r from-transparent via-${cat.color.split('-')[1]}-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity`} />
            </motion.div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Events;
