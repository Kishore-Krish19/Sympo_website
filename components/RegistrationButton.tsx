// ../components/RegistrationButton.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import {
  REGISTRATION_CLOSE_DATE,
  REGISTRATION_CLOSED_TEXT,
} from '../constants';

interface RegistrationButtonProps {
  registerPath: string;
  openText: string;
  className?: string;
}

const RegistrationButton: React.FC<RegistrationButtonProps> = ({
  registerPath,
  openText,
  className = "bg-neonOrange text-black hover:bg-white shadow-[0_0_20px_#ffaa00]"
}) => {
  const now = new Date();
  const isOpen = now <= REGISTRATION_CLOSE_DATE;

  if (!isOpen) {
    return (
      <button
        disabled
        className="w-full md:w-auto px-12 py-4
        bg-gray-600/60 text-gray-300
        font-mech font-bold text-xl
        rounded cursor-not-allowed
        border border-white/10"
      >
        {REGISTRATION_CLOSED_TEXT}
      </button>
    );
  }

  return (
    <Link to={registerPath}>
      <button
        className={`w-full md:w-auto px-12 py-4
        font-mech font-bold text-xl
        rounded transition-colors
        ${className}`}
      >
        {openText}
      </button>
    </Link>
  );
};

export default RegistrationButton;
