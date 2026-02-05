import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronRight, Settings } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <div className="relative w-full min-h-screen overflow-hidden bg-carbon-fiber flex flex-col items-center justify-center">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-neonBlue/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-neonOrange/10 rounded-full blur-[100px]" />
        
        {/* Rotating Gears BG */}
        <Settings className="absolute top-20 left-10 w-64 h-64 text-white/5 animate-spin-slow" />
        <Settings className="absolute bottom-20 right-10 w-96 h-96 text-white/5 animate-spin-slow" style={{ animationDirection: 'reverse' }} />
      </div>

      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        {/* Logos */}
        <div className="flex justify-center items-center gap-8 mb-8">
          <div className="w-16 h-16 md:w-24 md:h-24 bg-white/10 rounded-full flex items-center justify-center border border-white/20 backdrop-blur-sm shadow-[0_0_15px_rgba(0,243,255,0.3)]">
            <span className="text-xs text-center font-mech">COLLEGE LOGO</span>
          </div>
          <div className="w-16 h-16 md:w-24 md:h-24 bg-white/10 rounded-full flex items-center justify-center border border-white/20 backdrop-blur-sm shadow-[0_0_15px_rgba(255,170,0,0.3)]">
             <span className="text-xs text-center font-mech">DEPT LOGO</span>
          </div>
        </div>

        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-xl md:text-2xl text-neonBlue font-mech tracking-[0.2em] mb-2"
        >
          INSTITUTE OF TECHNOLOGY
        </motion.h2>
        
        <motion.h1 
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, type: 'spring' }}
          className="text-6xl md:text-9xl font-black font-mech text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-600 drop-shadow-[0_0_10px_rgba(255,255,255,0.5)] mb-6"
        >
          EFFICACY'26
        </motion.h1>

        <motion.div
           initial={{ opacity: 0 }}
           animate={{ opacity: 1 }}
           transition={{ delay: 0.5, duration: 1 }}
           className="space-y-2 mb-12"
        >
          <p className="text-lg md:text-2xl font-body text-gray-300">Igniting Innovation. Engineering the Future.</p>
          <div className="h-1 w-24 bg-neonOrange mx-auto rounded-full shadow-[0_0_10px_#ffaa00]"></div>
        </motion.div>

        <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
          <Link to="/register/tech">
            <motion.button 
              whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(0,243,255,0.5)" }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-transparent border-2 border-neonBlue text-neonBlue font-mech font-bold text-lg uppercase tracking-wider relative overflow-hidden group"
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
              className="px-8 py-4 bg-neonOrange text-black font-mech font-bold text-lg uppercase tracking-wider shadow-[0_0_15px_#ffaa00]"
            >
              View Events
            </motion.button>
          </Link>
        </div>
      </div>

      {/* 3D Car Placeholder / Image */}
      {/* <motion.div 
        animate={{ y: [0, -20, 0] }}
        transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
        className="absolute bottom-0 md:-bottom-20 right-0 md:right-20 opacity-30 md:opacity-50 pointer-events-none"
      >
        <img src="https://picsum.photos/800/400" alt="Mechanical Art" className="w-[400px] md:w-[800px] mix-blend-screen" style={{maskImage: 'linear-gradient(to bottom, black, transparent)'}} />
      </motion.div> */}
    </div>
  );
};

export default Home;
