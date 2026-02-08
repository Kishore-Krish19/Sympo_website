// ../components/Footer.tsx
import React from 'react';
import { Heart } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black border-t border-white/10 text-white py-6 mt-12">
      <div className="container mx-auto px-4 text-center">
        <p className="font-mech text-lg text-neonBlue mb-2">EFFICACY'26</p>
        <p className="font-mech text-gray-400 text-sm mb-4">Department of Mechanical Engineering</p>

        <div className="flex items-center justify-center gap-2 text-gray-500 text-xs mt-4 border-t border-white/10 pt-4">
          <span>© {new Date().getFullYear()}</span>

          <span className=" text-lg">{'</>'}</span>
          <span className="font-mech tracking-wide text-sm">
            Developed by
            {'\u00A0'}
            <a
              href="https://www.linkedin.com/in/kishore-e-241369279"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-link"
            >
              Kishore.E
            </a>,{'\u00A0'}
            <a
              href="https://www.linkedin.com/in/kanishkar-m-81026a310"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-link"
            >
              Kanishkar.M
            </a>,{'\u00A0'}
            <a
              href="https://www.linkedin.com/in/saran-s-116416303"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-link"
            >
              Saran.S
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
