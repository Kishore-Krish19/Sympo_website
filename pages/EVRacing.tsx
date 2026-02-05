import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Zap, AlertTriangle, BatteryCharging, Route } from 'lucide-react';

const EVRacing: React.FC = () => {
  return (
    <div className="min-h-screen pt-24 px-4 container mx-auto">
      <div className="relative border-2 border-green-500/50 rounded-xl p-8 bg-black/80 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20"></div>
        
        <div className="relative z-10 text-center mb-12">
          <motion.div 
             animate={{ opacity: [0.5, 1, 0.5] }}
             transition={{ duration: 2, repeat: Infinity }}
             className="inline-block p-4 rounded-full bg-green-500/10 mb-4"
          >
            <Zap className="w-16 h-16 text-green-400" />
          </motion.div>
          <h1 className="text-5xl md:text-7xl font-mech italic text-white uppercase tracking-tighter">
            E-KART <span className="text-green-500">RACING</span>
          </h1>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {[
            { icon: AlertTriangle, title: "Rules", desc: "Standard IEEE safety compliance mandatory." },
            { icon: Route, title: "Track", desc: "400m circuit with 3 sharp turns and 1 ramp." },
            { icon: BatteryCharging, title: "Power", desc: "Max 48V Battery packs allowed." },
            { icon: Zap, title: "Motor", desc: "Up to 1000W BLDC Motors." },
          ].map((item, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -5 }}
              className="bg-white/5 border border-white/10 p-6 rounded hover:border-green-400 transition-colors"
            >
              <item.icon className="w-10 h-10 text-green-400 mb-4" />
              <h3 className="text-xl font-mech text-white mb-2">{item.title}</h3>
              <p className="text-gray-400 font-body text-sm">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        <div className="flex justify-center">
          <Link to="/register/ev">
            <button className="px-12 py-4 bg-green-500 text-black font-mech font-bold text-xl uppercase tracking-widest hover:bg-green-400 shadow-[0_0_20px_rgba(34,197,94,0.6)] skew-x-[-12deg]">
              <span className="block skew-x-[12deg]">Register Team</span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default EVRacing;
