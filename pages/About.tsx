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
    <div className="min-h-screen pt-24 px-4 container mx-auto text-[var(--text-primary)] relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0 pointer-events-none opacity-10">
        <Settings className="absolute top-20 -left-10 w-96 h-96 text-[var(--text-secondary)] animate-spin-slow" />
        <Settings className="absolute bottom-40 -right-10 w-80 h-80 text-[var(--text-secondary)] animate-spin-slow" style={{ animationDirection: 'reverse' }} />
        <Piston className="absolute top-1/4 right-20 w-64 h-64 text-[var(--text-secondary)] opacity-50" />
        <Piston className="absolute bottom-1/4 left-20 w-64 h-64 text-[var(--text-secondary)] opacity-50" />
      </div>
      <motion.h1
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        className="text-4xl md:text-6xl font-mech text-[var(--accent-orange)] mb-12 border-b border-[var(--border-color)] pb-4"
      >
        ABOUT EFFICACY
      </motion.h1>

      <div className="grid md:grid-cols-2 gap-12">
        <div className="font-body text-base md:text-2xl text-[var(--text-secondary)] leading-relaxed">
          <section className="bg-[var(--bg-card)] p-8 rounded-2xl border border-[var(--border-color)] backdrop-blur-sm h-full shadow-lg">
            <h2 className="text-3xl text-[var(--accent-blue)] font-mech mb-6 drop-shadow-[0_0_5px_var(--shadow-color)]">The Symposium</h2>
            <p className="mb-6">
              EFFICACY is a National Level Technical Symposium organized by the Department of Mechanical Engineering to provide a dynamic platform for young engineers to showcase their technical knowledge, creativity, and innovation. Inspired by the principles of engineering mechanics and foundational concepts such as continuum mechanics, EFFICACY emphasizes analytical thinking, structural understanding, and practical problem-solving.
            </p>
            <p>
              The event is designed to bridge theoretical learning with real-world applications, encouraging participants to approach engineering challenges with precision, efficiency, and scientific reasoning. Through a variety of technical competitions and interactive activities, EFFICACY nurtures innovation, teamwork, and professional excellence among aspiring mechanical engineers.
            </p>
          </section>
        </div>

        <div className="space-y-8 font-body text-lg text-[var(--text-secondary)] flex flex-col justify-between">
          <section className="bg-[var(--bg-card)] p-8 rounded-2xl border border-[var(--border-color)] backdrop-blur-sm">
            <h2 className="text-3xl text-[var(--accent-blue)] font-mech mb-6 drop-shadow-[0_0_5px_var(--shadow-color)]">Guidelines</h2>
            <ul className="list-disc list-inside space-y-3 marker:text-[var(--accent-orange)] text-base md:text-xl">
              <li>College ID card is mandatary.</li>
              <li>Maintain discipline and professional behaviour.</li>
              <li>Malpractice leads to immediate disqualification.</li>
              <li>Organizers reserve the right to modify rules if necessary.</li>
              <li>Judges’ decisions are final.</li>
            </ul>
          </section>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-auto">
            <div className="bg-[var(--bg-card)] p-6 border-2 border-[var(--border-tech)] rounded-xl text-center shadow-[0_0_15px_var(--shadow-tech)] hover:shadow-[0_0_25px_var(--shadow-tech)] transition-all duration-300">
              <h3 className="text-2xl md:text-3xl text-[var(--accent-blue)] font-mech font-bold mb-2 drop-shadow-[0_0_10px_var(--shadow-color)]">Refreshments</h3>
              <p className="text-base md:text-lg text-[var(--text-secondary)]">Provided for all registered teams.</p>
            </div>
            <div className="bg-[var(--bg-card)] p-6 border-2 border-[var(--border-tech)] rounded-xl text-center shadow-[0_0_15px_var(--shadow-tech)] hover:shadow-[0_0_25px_var(--shadow-tech)] transition-all duration-300">
              <h3 className="text-2xl md:text-3xl text-[var(--accent-blue)] font-mech font-bold mb-2 drop-shadow-[0_0_10px_var(--shadow-color)]">Lunch</h3>
              <p className="text-base md:text-lg text-[var(--text-secondary)]">Provided for all registered participants.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
