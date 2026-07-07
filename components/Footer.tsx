// ../components/Footer.tsx
import React from 'react';
import { Heart } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[var(--bg-nav)] border-t border-[var(--border-color)] text-[var(--text-primary)] py-6 mt-12 transition-colors duration-300">
      <div className="container mx-auto px-4 text-center">
        <p className="font-mech text-lg text-[var(--accent-blue)] mb-2">Sympo'26</p>
        <p className="font-mech text-[var(--text-secondary)] text-sm mb-4">Department of Computer Science Engineering</p>

        {/* <div className="flex items-center justify-center gap-2 text-[var(--text-muted)] text-xs mt-4 border-t border-[var(--border-color)] pt-4">
          <span>© {new Date().getFullYear()}</span>

          <span className=" text-lg">{'</>'}</span>
          <span className="font-mech tracking-wide text-sm">
            Developed by
            {'\u00A0'}
            <a
              href="https://www.linkedin.com/in/kishore-e-241369279"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-link hover:text-[var(--text-primary)]"
            >
              Kishore.E
            </a>,{'\u00A0'}
            <a
              href="https://www.linkedin.com/in/kanishkar-m-81026a310"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-link hover:text-[var(--text-primary)]"
            >
              Kanishkar.M
            </a>,{'\u00A0'}
            <a
              href="https://www.linkedin.com/in/saran-s-116416303"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-link hover:text-[var(--text-primary)]"
            >
              Saran.S
            </a>
          </span>
        </div> */}
      </div>
    </footer>
  );
};

export default Footer;
