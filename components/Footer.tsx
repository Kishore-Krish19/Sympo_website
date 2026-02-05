// ../components/Footer.tsx
import React from 'react';
import { Heart } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black border-t border-white/10 text-white py-6 mt-12">
      <div className="container mx-auto px-4 text-center">
        <p className="font-mech text-lg text-neonBlue mb-2">EFFICACY 2024</p>
        <p className="text-gray-400 text-sm mb-4">Department of Mechanical Engineering</p>
        <div className="flex items-center justify-center gap-2 text-xs text-gray-500">
          <span>Built for Innovation</span>
          <Heart className="w-3 h-3 text-red-500" />
          <span>by Tech Team</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
