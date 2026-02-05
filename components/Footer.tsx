import React from 'react';
import { Heart } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black border-t border-white/10 text-white py-6 mt-12">
      <div className="container mx-auto px-4 text-center">
        <p className="font-mech text-lg text-neonBlue mb-2">EFFICACY '26</p>
        <p className="text-gray-400 text-sm mb-4">Department of Mechanical Engineering</p>

      </div>
    </footer>
  );
};

export default Footer;
