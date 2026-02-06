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
}

const RegistrationButton: React.FC<RegistrationButtonProps> = ({
  registerPath,
  openText,
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
        className="w-full md:w-auto px-12 py-4
        bg-neonOrange text-black
        font-mech font-bold text-xl
        rounded hover:bg-white
        transition-colors
        shadow-[0_0_20px_#ffaa00]"
      >
        {openText}
      </button>
    </Link>
  );
};

export default RegistrationButton;
