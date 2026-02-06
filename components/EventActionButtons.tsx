// ../components/EventActionButtons.tsx
import React from 'react';
import { Link } from 'react-router-dom';

interface Props {
  registerPath: string;
  descriptionPath: string;
}

const EventActionButtons: React.FC<Props> = ({
  registerPath,
  descriptionPath,
}) => {
  return (
    <div className="flex gap-4 mt-4">
      {/* DESCRIPTION */}
      <Link to={descriptionPath}>
        <button
          className="px-5 py-2 text-sm font-mech uppercase
          border border-neonBlue text-neonBlue
          hover:bg-neonBlue hover:text-black
          transition rounded"
        >
          Description
        </button>
      </Link>

      {/* REGISTER */}
      <Link to={registerPath}>
        <button
          className="px-5 py-2 text-sm font-mech uppercase
          bg-neonBlue text-black
          hover:bg-white transition rounded
          shadow-[0_0_10px_rgba(0,255,255,0.6)]"
        >
          Register
        </button>
      </Link>
    </div>
  );
};

export default EventActionButtons;
