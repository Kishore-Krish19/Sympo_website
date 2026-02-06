// ../pages/Home.tsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronRight, Settings } from 'lucide-react';

const Countdown = () => {
  const calculateTimeLeft = () => {
    const targetDate = new Date('2026-03-01T23:59:59');
    const now = new Date();
    const difference = targetDate.getTime() - now.getTime();

    if (difference > 0) {
      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex gap-4 md:gap-8 mt-12 text-center">
      {Object.entries(timeLeft).map(([unit, value]) => (
        <div key={unit} className="flex flex-col items-center">
          <div className="bg-black/50 border border-neonBlue/30 rounded-lg p-3 md:p-4 w-16 md:w-24 backdrop-blur-sm shadow-[0_0_10px_rgba(0,243,255,0.1)]">
            <span className="text-2xl md:text-4xl font-mech text-neonOrange block">
              {String(value).padStart(2, '0')}
            </span>
            <span className="text-xs md:text-sm text-gray-400 uppercase tracking-wider font-body mt-1">
              {unit}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};



const GearCluster = () => (
  <div className="relative w-16 h-16 md:w-32 md:h-32">
    <Settings className="absolute top-0 right-0 w-8 h-8 md:w-16 md:h-16 text-neonBlue/80 animate-spin-slow" />
    <Settings className="absolute bottom-0 left-1 md:left-2 w-7 h-7 md:w-14 md:h-14 text-neonOrange/80 animate-spin-slow" style={{ animationDirection: 'reverse', animationDuration: '4s' }} />
    <Settings className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 md:w-12 md:h-12 text-gray-400/80 animate-spin-slow" style={{ animationDuration: '3s' }} />
  </div>
);

const Home: React.FC = () => {
  return (
    <div className="relative w-full min-h-screen overflow-hidden bg-carbon-fiber flex flex-col items-center justify-center pt-24 md:pt-32">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-neonBlue/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-neonOrange/10 rounded-full blur-[100px]" />

        {/* Rotating Gears BG */}
        <Settings className="absolute top-20 left-10 w-64 h-64 text-white/5 animate-spin-slow" />
        <Settings className="absolute bottom-20 right-10 w-96 h-96 text-white/5 animate-spin-slow" style={{ animationDirection: 'reverse' }} />
      </div>

      <div className="relative z-10 text-center px-4 max-w-7xl mx-auto">
        {/* Header Section: Logos flanking Text */}
        <div className="flex flex-row flex-wrap md:flex-nowrap items-center justify-center gap-4 md:gap-12 mb-8 md:mb-12 w-full">
          {/* College Logo (Left) */}
          <div className="order-1 w-16 h-16 md:w-24 md:h-24 flex items-center justify-center shrink-0">
            <img src="/college-logo.png" alt="Government College of Engineering, Erode Logo" className="w-full h-full object-cover rounded-full filter drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]" />
          </div>

          {/* Dept Logo (Right - Order 2 on mobile to sit next to College Logo) */}
          <div className="order-2 md:order-3 w-16 h-16 md:w-24 md:h-24 flex items-center justify-center shrink-0">
            <span className="text-[10px] md:text-xs text-center font-mech bg-white/10 rounded-full w-full h-full flex items-center justify-center border border-white/20 backdrop-blur-sm shadow-[0_0_15px_rgba(255,170,0,0.3)]">DEPT LOGO</span>
          </div>

          {/* Center Text (Order 3 on mobile to sit below logos) */}
          <div className="order-3 md:order-2 w-full md:w-auto flex flex-col items-center mt-2 md:mt-0">
            <motion.h3
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-lg md:text-4xl text-neonBlue font-mech tracking-wider mb-1 md:mb-2 text-center drop-shadow-[0_0_10px_rgba(0,243,255,0.3)]"
            >
              GOVERNMENT COLLEGE OF ENGINEERING, ERODE-638 316
            </motion.h3>
            <h2 className="text-sm md:text-2xl text-gray-300 font-mech tracking-[0.2em] text-center drop-shadow-[0_0_5px_rgba(255,255,255,0.2)]">
              DEPARTMENT OF MECHANICAL ENGINEERING
            </h2>
          </div>
        </div>

        {/* EFFICACY Title Section */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, type: 'spring' }}
          className="flex items-center justify-center gap-4 md:gap-8 mb-8"
        >
          {/* Gear Cluster (Left) */}
          <GearCluster />

          <h1 className="text-4xl sm:text-6xl md:text-9xl font-black font-mech text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-600 drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]">
            EFFICACY'26
          </h1>

        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="space-y-4 mb-12"
        >
          
          <div className="h-1 w-24 bg-neonOrange mx-auto rounded-full shadow-[0_0_10px_#ffaa00]"></div>
        </motion.div>

        <div className="flex flex-col items-center gap-12">
          <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
            <Link to="/register/tech">
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(0,243,255,0.5)" }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-transparent rounded-3xl border-2 border-neonBlue text-neonBlue font-mech font-bold text-lg uppercase tracking-wider relative overflow-hidden group"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Register Now <ChevronRight />
                </span>
                <div className="absolute inset-0 bg-neonBlue/20 transform -skew-x-12 translate-x-full group-hover:translate-x-0 transition-transform duration-300" />
              </motion.button>
            </Link>

            <Link to="/events">
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(255,170,0,0.5)" }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-neonOrange rounded-3xl text-black font-mech font-bold text-lg uppercase tracking-wider shadow-[0_0_15px_#ffaa00]"
              >
                View Events
              </motion.button>
            </Link>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
          >
            <h3 className="text-neonBlue font-mech text-xl mb-4 tracking-widest text-center">REGISTRATION ENDS IN</h3>
            <Countdown />
          </motion.div>
        </div>
      </div >

      {/* 3D Car Placeholder / Image */}
      {/* <motion.div 
        animate={{ y: [0, -20, 0] }}
        transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
        className="absolute bottom-0 md:-bottom-20 right-0 md:right-20 opacity-30 md:opacity-50 pointer-events-none"
      >
        <img src="https://picsum.photos/800/400" alt="Mechanical Art" className="w-[400px] md:w-[800px] mix-blend-screen" style={{maskImage: 'linear-gradient(to bottom, black, transparent)'}} />
      </motion.div> */}
    </div >
  );
};

export default Home;
