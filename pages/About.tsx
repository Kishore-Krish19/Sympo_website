// ../pages/About.tsx
import React from 'react';
import { motion } from 'framer-motion';
import { Settings } from 'lucide-react';

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

const About: React.FC = () => {

  return (
    <div className="w-full py-12 md:py-20 px-4 text-[var(--text-primary)] relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0 pointer-events-none opacity-10">
        <Settings className="absolute top-20 -left-10 w-96 h-96 text-[var(--text-secondary)] animate-spin-slow" />
        <Piston className="absolute top-1/4 right-20 w-64 h-64 text-[var(--text-secondary)] opacity-50" />
        <Piston className="absolute bottom-1/4 left-20 w-64 h-64 text-[var(--text-secondary)] opacity-50" />
      </div>
      <motion.h1
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        className="text-3xl md:text-6xl font-mech text-[var(--accent-orange)] mb-8 md:mb-12 border-b border-[var(--border-color)] pb-4"
      >
        ABOUT EFFICACY
      </motion.h1>

      <div className="grid md:grid-cols-2 gap-8 md:gap-12 text-left">
        <div className="font-body text-sm md:text-xl text-[var(--text-secondary)] leading-relaxed text-justify">
          <section className="bg-[var(--bg-card)] p-6 md:p-8 rounded-2xl border border-[var(--border-color)] backdrop-blur-sm h-full shadow-lg">
            <h2 className="text-2xl md:text-3xl text-[var(--accent-blue)] font-mech mb-4 md:mb-6 drop-shadow-sm">The Symposium</h2>
            <p className="mb-6 text-[var(--text-primary)] font-medium leading-relaxed">
              EFFICACY is a National Level Technical Symposium organized by the Department of Mechanical Engineering to provide a platform for young engineers to showcase technical knowledge and innovation. Inspired by engineering mechanics, EFFICACY emphasizes analytical thinking and practical problem-solving.
            </p>
            <p className="text-[var(--text-primary)] font-medium leading-relaxed">
              The event bridges theoretical learning with real-world applications, encouraging precision and scientific reasoning. Through technical competitions, EFFICACY nurtures innovation and professional excellence among aspiring mechanical engineers.
            </p>
          </section>
        </div>

        <div className="space-y-8 font-body text-base md:text-lg text-[var(--text-secondary)] flex flex-col">
          <section className="bg-[var(--bg-card)] p-6 md:p-8 rounded-2xl border border-[var(--border-color)] backdrop-blur-sm shadow-lg">
            <h2 className="text-2xl md:text-3xl text-[var(--accent-blue)] font-mech mb-4 md:mb-6 drop-shadow-sm">Guidelines</h2>
            <ul className="list-disc list-outside pl-5 md:pl-6 text-left space-y-2 md:space-y-3 marker:text-[var(--accent-orange)] text-sm md:text-xl text-[var(--text-primary)] font-medium leading-relaxed">
              <li>College ID card is mandatary.</li>
              <li>Maintain discipline and professional behaviour.</li>
              <li>Malpractice leads to immediate disqualification.</li>
              <li>Organizers reserve the right to modify rules.</li>
              <li>Judges’ decisions are final.</li>
              <li>Formal dress code is encouraged.</li>
              <li>Participate 30 mins before the event.</li>
            </ul>
          </section>

          <div>
            <div className="bg-[var(--bg-surface)] p-6 border-2 border-[var(--accent-blue)] rounded-xl text-center shadow-[0_0_15px_var(--shadow-color)] hover:shadow-[0_0_25px_var(--shadow-color)] transition-all duration-300">
              <h3 className="text-xl md:text-3xl text-[var(--accent-blue)] font-mech font-bold mb-2 drop-shadow-sm">Refreshments & Lunch</h3>
              <p className="text-sm md:text-lg text-[var(--text-primary)] font-medium leading-relaxed">Provided for all registered teams and participants.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
