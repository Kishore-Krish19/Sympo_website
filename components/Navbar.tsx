// ../components/Navbar.tsx
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import deptLogo from '../assets/Dept-logo.png';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

  React.useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
  };

  const links = [
    { name: 'Home', path: '/' },

    { name: 'Events', path: '/events' },
    { name: 'Workshop', path: '/workshop' },
    { name: 'Shark Tank', path: '/shark-tank' },
    { name: 'EV Racing', path: '/ev-racing' },

    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed w-full z-50 top-0 start-0  bg-[var(--bg-nav)] backdrop-blur-sm shadow-md shadow-[var(--shadow-color)] transition-colors duration-300">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        {/* LEFT: Gear + Title */}
        <Link to="/" className="flex items-center gap-3 outline-none focus:outline-none active:outline-none select-none">
          {/* <Settings className="w-7 h-7 text-[var(--accent-blue)] animate-spin-slow" /> */}
          <img src={deptLogo} alt="Logo" className="w-8 h-8 object-contain drop-shadow-[0_0_8px_rgba(0,243,255,0.7)]" />
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
          className="md:hidden w-10 h-10 flex items-center justify-center text-[var(--text-primary)]"
        >
          <motion.div
            className="relative w-6 h-6"
            animate={{ rotate: isOpen ? 90 : 0 }}
            transition={{ type: "spring", stiffness: 260, damping: 22 }}
          >
            {/* TOP LINE */}
            <motion.span
              className="absolute left-0 top-1/2 w-full h-[2px] bg-[var(--text-primary)] rounded origin-center"
              animate={{
                rotate: isOpen ? 45 : 0,
                y: isOpen ? 0 : -6,
              }}
              transition={{ type: "spring", stiffness: 260, damping: 22 }}
            />

            {/* MIDDLE LINE */}
            <motion.span
              className="absolute left-0 top-1/2 w-full h-[2px] bg-[var(--text-primary)] rounded origin-center"
              animate={{
                opacity: isOpen ? 0 : 1,
              }}
              transition={{ duration: 0.15 }}
            />

            {/* BOTTOM LINE */}
            <motion.span
              className="absolute left-0 top-1/2 w-full h-[2px] bg-[var(--text-primary)] rounded origin-center"
              animate={{
                rotate: isOpen ? -45 : 0,
                y: isOpen ? 0 : 6,
              }}
              transition={{ type: "spring", stiffness: 260, damping: 22 }}
            />
          </motion.div>
        </button>

        <div className={`${isOpen ? 'block' : 'hidden'} w-full md:block md:w-auto`} id="navbar-default">
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-[var(--border-color)] rounded-lg bg-[var(--bg-nav)] md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-transparent items-center">
            {links.map((link) => (
              <li key={link.name}>
                <Link
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`block py-2 px-3 rounded md:p-0 font-mech tracking-wide transition-all duration-300 relative
                    ${isActive(link.path) ? 'text-[var(--accent-blue)] shadow-[var(--shadow-color)]' : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'}
                  `}
                >
                  {link.name}
                  {isActive(link.path) && (
                    <motion.div
                      layoutId="underline"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[var(--accent-blue)] shadow-[0_0_8px_var(--accent-blue)]"
                    />
                  )}
                </Link>
              </li>
            ))}
            <li>
              <button
                onClick={toggleTheme}
                className="py-2 px-3 md:p-0 text-[var(--text-secondary)] hover:text-[var(--accent-orange)] transition-colors"
                aria-label="Toggle Theme"
              >
                {theme === 'light' ? (
                  <span className="text-xl">🌙</span>
                ) : (
                  <span className="text-xl">☀️</span>
                )}
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
