// ../components/Navbar.tsx
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Settings } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const links = [
    { name: 'Home', path: '/' },

    { name: 'Events', path: '/events' },
    { name: 'Workshop', path: '/workshop' },
    { name: 'Shark Tank', path: '/shark-tank' },
    { name: 'EV Racing', path: '/ev-racing' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed w-full z-50 top-0 start-0  bg-black/50 backdrop-blur-sm shadow-md shadow-black/40">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        {/* LEFT: Gear + Title */}
        <Link to="/" className="flex items-center gap-3 outline-none focus:outline-none active:outline-none select-none">
          <Settings className="w-7 h-7 text-neonBlue animate-spin-slow" />
          <span
            className="
              text-xl sm:text-2xl md:text-2xl
              font-black font-mech
              tracking-widest
              whitespace-nowrap
              text-transparent bg-clip-text
              bg-gradient-to-b from-yellow-300 via-yellow-500 to-yellow-700
              drop-shadow-[0_0_12px_rgba(255,215,0,0.7)]
            "
          >
            EFFICACY'26
          </span>
        </Link>

        {/* RIGHT: Hamburger (MOBILE) */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden w-10 h-10 flex items-center justify-center"
        >
          <motion.div
            className="relative w-6 h-6"
            animate={{ rotate: isOpen ? 90 : 0 }}
            transition={{ type: "spring", stiffness: 260, damping: 22 }}
          >
            {/* TOP LINE */}
            <motion.span
              className="absolute left-0 top-1/2 w-full h-[2px] bg-white rounded origin-center"
              animate={{
                rotate: isOpen ? 45 : 0,
                y: isOpen ? 0 : -6,
              }}
              transition={{ type: "spring", stiffness: 260, damping: 22 }}
            />

            {/* MIDDLE LINE */}
            <motion.span
              className="absolute left-0 top-1/2 w-full h-[2px] bg-white rounded origin-center"
              animate={{
                opacity: isOpen ? 0 : 1,
              }}
              transition={{ duration: 0.15 }}
            />

            {/* BOTTOM LINE */}
            <motion.span
              className="absolute left-0 top-1/2 w-full h-[2px] bg-white rounded origin-center"
              animate={{
                rotate: isOpen ? -45 : 0,
                y: isOpen ? 0 : 6,
              }}
              transition={{ type: "spring", stiffness: 260, damping: 22 }}
            />
          </motion.div>
        </button>

        <div className={`${isOpen ? 'block' : 'hidden'} w-full md:block md:w-auto`} id="navbar-default">
          <ul className="
  font-medium flex flex-col md:flex-row
  px-4 py-4 md:py-0
  mt-4 md:mt-0
  gap-2 md:gap-8
  rounded-lg
  bg-gray-900 md:bg-transparent
  md:border-0
">

            {links.map((link) => (
              <li key={link.name}>
                <Link
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`block py-2 px-2 rounded md:py-0.5 md:px-0.5 font-mech tracking-wide transition-all duration-300 relative
                    ${isActive(link.path) ? 'text-neonBlue shadow-[0_0_10px_#00f3ff]' : 'text-gray-300 hover:text-white'}
                  `}
                >
                  {link.name}
                  {isActive(link.path) && (
                    <motion.div
                      layoutId="underline"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-neonBlue shadow-[0_0_8px_#00f3ff]"
                    />
                  )}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
