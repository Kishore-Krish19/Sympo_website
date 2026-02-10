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
          border border-[var(--accent-blue)] text-[var(--accent-blue)]
          hover:bg-[var(--accent-blue)] hover:text-[var(--text-inverse)]
          transition rounded"
        >
          Description
        </button>
      </Link>

      {/* REGISTER */}
      <Link to={registerPath}>
        <button
          className="px-5 py-2 text-sm font-mech uppercase
          bg-[var(--accent-blue)] text-[var(--text-inverse)]
          hover:bg-[var(--bg-secondary)] hover:text-[var(--accent-blue)] transition rounded
          shadow-[0_0_10px_var(--shadow-color)]"
        >
          Register
        </button>
      </Link>
    </div>
  );
};

export default EventActionButtons;
