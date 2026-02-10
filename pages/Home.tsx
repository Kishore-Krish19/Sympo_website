// ../pages/Home.tsx
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ChevronRight, Settings } from "lucide-react";
import collegeLogo from "../assets/college-logo.png";
import deptLogo from "../assets/Dept-logo.png";

const Countdown = () => {
  const calculateTimeLeft = () => {
    const targetDate = new Date("2026-03-01T23:59:59");
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
          <div className="bg-[var(--bg-card)] border border-[var(--border-color)] rounded-lg p-3 md:p-4 w-16 md:w-24 backdrop-blur-sm shadow-[0_0_10px_var(--shadow-color)]">
            <span className="text-2xl md:text-4xl font-mech text-[var(--accent-orange)] block">
              {String(value).padStart(2, "0")}
            </span>
            <span className="text-xs md:text-sm text-[var(--text-muted)] uppercase tracking-wider font-body mt-1">
              {unit}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};
/* =======================
   PISTON ANIMATION
======================= */
const Piston = ({
  color,
  delay,
  size,
}: {
  color: string;
  delay: number;
  size: number;
}) => (
  <motion.svg
    width={size}
    height={size}
    viewBox="0 0 100 100"
    animate={{ y: [0, -18, 0] }}
    transition={{
      duration: 0.8,
      repeat: Infinity,
      ease: "easeInOut",
      delay,
    }}
    className={color}
  >
    <rect x="20" y="10" width="60" height="25" rx="6" />
    <rect x="45" y="35" width="10" height="40" rx="4" />
    <rect x="30" y="75" width="40" height="12" rx="6" />
  </motion.svg>
);

const PistonCluster = () => (
  <div className="relative w-16 h-16 md:w-32 md:h-32">
    <div className="absolute top-0 right-0">
      <Piston
        size={64}
        delay={0}
        color="fill-[var(--accent-blue)] drop-shadow-[0_0_8px_var(--shadow-color)]"
      />
    </div>

    <div className="absolute bottom-0 left-1 md:left-2">
      <Piston
        size={56}
        delay={0.2}
        color="fill-[var(--accent-orange)] drop-shadow-[0_0_8px_var(--shadow-color)]"
      />
    </div>

    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
      <Piston
        size={48}
        delay={0.4}
        color="fill-[var(--text-muted)] drop-shadow-[0_0_6px_var(--shadow-color)]"
      />
    </div>
  </div>
);
/* =======================
   HOME PAGE
======================= */
const Home: React.FC = () => {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

  /* Update body class for Tailwind dark mode support if configured, or general CSS */
  React.useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  // Toggle removed as it is in Navbar now, but keeping state for local logic if needed, 
  // though strictly speaking we should probably depend on a global context or just the class.
  // Since the Navbar handles the toggle, this component just reflects the current theme via CSS variables.

  return (
    <div className="relative min-h-screen w-full bg-[var(--bg-primary)]
                flex flex-col items-center justify-center
                pt-20 md:pt-24 transition-colors duration-300">

      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] rounded-full blur-[100px]"
          style={{ backgroundColor: 'var(--accent-blue)', opacity: 'var(--blob-opacity)' }} />
        <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] rounded-full blur-[100px]"
          style={{ backgroundColor: 'var(--accent-orange)', opacity: 'var(--blob-opacity)' }} />

        <Settings className="absolute top-20 left-10 w-64 h-64 text-[var(--text-secondary)] opacity-10 animate-spin-slow" />
        <Settings
          className="absolute bottom-20 right-10 w-96 h-96 text-[var(--text-secondary)] opacity-10 animate-spin-slow"
          style={{ animationDirection: "reverse" }}
        />
      </div>

      <div className="relative z-10 text-center px-4 max-w-7xl mx-auto">
        {/* Header */}
        <div
          className="flex flex-row flex-wrap md:flex-nowrap items-center justify-center
                gap-4 md:gap-12
                mb-5 md:mb-4 lg:mb-8
                w-full"
        >
          <div
            className="
    relative flex items-center justify-center shrink-0
     w-44 h-40
    sm:w-40 sm:h-40
    md:w-44 md:h-44
    lg:w-48 lg:h-48
    overflow-visible
  "
          >
            <img
              src={collegeLogo}
              alt="College Logo"
              className="
    w-full h-full
    object-contain
    invert
    brightness-200
    contrast-200
    drop-shadow-[0_0_22px_var(--shadow-color)]
  "
            />
          </div>

          <div className="order-2 md:order-3 w-36 h-36 md:w-44 md:h-44 flex items-center justify-center shrink-0">
            <img
              src={deptLogo}
              alt="Department Logo"
              className="
      w-full h-full
      object-contain
      invert
      brightness-200
      contrast-200
      drop-shadow-[0_0_18px_var(--shadow-color)]
    "
            />
          </div>

          <div className="order-3 md:order-2 w-full md:w-auto flex flex-col items-center">
            <motion.h3
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-lg sm:text-2xl md:text-3xl lg:text-4xl
             text-[var(--accent-blue)] font-mech text-center leading-tight"
            >
              {/* Mobile + Desktop → single line */}
              <span className="block md:hidden lg:block">
                GOVERNMENT COLLEGE OF ENGINEERING, ERODE-638 316
              </span>

              {/* Tablet only → two lines */}
              <span className="hidden md:block lg:hidden">
                GOVERNMENT COLLEGE OF ENGINEERING,
                <br />
                ERODE-638 316
              </span>
            </motion.h3>

            <h2 className="text-sm md:text-2xl text-[var(--text-secondary)] font-mech tracking-[0.2em]">
              DEPARTMENT OF MECHANICAL ENGINEERING
            </h2>
          </div>
        </div>

        {/* EFFICACY */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, type: "spring" }}
          className="flex items-center justify-center gap-4 md:gap-8 mb-8"
        >
          {/* 🔥 PISTON CLUSTER
          <PistonCluster /> */}

          <h1 className="text-5xl sm:text-8xl md:text-12xl font-black font-mech text-transparent bg-clip-text bg-gradient-to-b from-yellow-300 via-yellow-500 to-yellow-700 drop-shadow-[0_0_12px_rgba(255,215,0,0.7)]">
            EFFICACY'26
          </h1>
        </motion.div>

        <div className="h-1 w-24 bg-[var(--accent-orange)] mx-auto rounded-full shadow-[0_0_10px_var(--accent-orange)] mb-12" />

        <div className="flex flex-col items-center gap-12">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 w-full">
            <Link to="/register/tech">
              <motion.button
                whileHover="hover"
                initial="rest"
                animate="rest"
                variants={{
                  rest: { scale: 1 },
                  hover: { scale: 1.08 },
                }}
                transition={{ type: "spring", stiffness: 300, damping: 18 }}
                className="
      px-8 py-4
      border-2 border-[var(--accent-blue)]
      text-[var(--accent-blue)]
      font-mech
      rounded-3xl
      inline-flex items-center justify-center
      gap-2
      whitespace-nowrap
      shadow-[0_0_12px_var(--shadow-color)]
    "
              >
                <span className="leading-none">Register Now</span>

                <motion.span
                  variants={{
                    rest: { x: 0 },
                    hover: { x: 6 },
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="flex items-center leading-none"
                >
                  <ChevronRight className="w-5 h-5" />
                </motion.span>
              </motion.button>
            </Link>

            <Link to="/events">
              <motion.button
                whileHover="hover"
                initial="rest"
                animate="rest"
                variants={{
                  rest: { scale: 1 },
                  hover: { scale: 1.08 },
                }}
                transition={{ type: "spring", stiffness: 300, damping: 18 }}
                className="
      px-8 py-4
      bg-[var(--accent-orange)]
      text-[var(--text-inverse)]
      font-mech
      rounded-3xl
      inline-flex items-center justify-center
      gap-2
      whitespace-nowrap
      shadow-[0_0_14px_rgba(255,170,0,0.35)]
    "
              >
                <span className="leading-none">View Events</span>

                <motion.span
                  variants={{
                    rest: { x: 0 },
                    hover: { x: 6 },
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="flex items-center leading-none"
                >
                  <ChevronRight className="w-5 h-5" />
                </motion.span>
              </motion.button>
            </Link>
          </div>

          <div>
            <h3 className="text-[var(--accent-blue)] font-mech text-xl mb-4">
              REGISTRATION ENDS IN
            </h3>
            <Countdown />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
