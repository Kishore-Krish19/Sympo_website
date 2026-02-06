// ../pages/EventDescription.tsx
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { TECH_EVENTS, NON_TECH_EVENTS } from '../constants';

const EventDescription: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  const allEvents = [...TECH_EVENTS, ...NON_TECH_EVENTS];
  const event = allEvents.find((e) => e.id === id);

  if (!event) {
    return (
      <div className="min-h-screen pt-24 flex items-center justify-center">
        <p className="text-white text-xl">Event not found</p>
      </div>
    );
  }

  // ✅ Back path based on event type
  const backPath =
    event.category === 'tech' ? '/tech-events' : '/non-tech-events';

  return (
    <div className="min-h-screen pt-24 px-4 container mx-auto max-w-3xl pb-20">
      {/* TITLE */}
      <h1 className="text-4xl md:text-5xl font-mech text-white mb-6 uppercase">
        {event.title}
      </h1>

      {/* TEMP DESCRIPTION */}
      <div className="bg-white/5 border border-white/10 p-6 rounded-lg">
        <p className="text-gray-300 leading-relaxed">
          Detailed description for this event will be updated soon.
        </p>
      </div>

      {/* ACTION BUTTONS */}
      <div className="flex gap-4 mt-10">
        {/* BACK */}
        <Link to={backPath}>
          <button
            className="px-6 py-3 text-sm font-mech uppercase
            border border-white/30 text-white
            hover:bg-white hover:text-black transition rounded"
          >
            Back
          </button>
        </Link>

        {/* REGISTER */}
        <Link to={event.path}>
          <button
            className="px-6 py-3 text-sm font-mech uppercase
            bg-neonBlue text-black
            hover:bg-white transition rounded
            shadow-[0_0_10px_rgba(0,255,255,0.6)]"
          >
            Register
          </button>
        </Link>
      </div>
    </div>
  );
};

export default EventDescription;
