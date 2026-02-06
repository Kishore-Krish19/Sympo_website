import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { TECH_EVENTS, NON_TECH_EVENTS } from '../constants';
import { EVENT_DESCRIPTIONS } from '../assets/data/eventDescriptions';

const EventDescription: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  const allEvents = [...TECH_EVENTS, ...NON_TECH_EVENTS];
  const event = allEvents.find((e) => e.id === id);

  if (!event || !id) {
    return (
      <div className="min-h-screen pt-24 flex items-center justify-center">
        <p className="text-white text-xl">Event not found</p>
      </div>
    );
  }

  const description = EVENT_DESCRIPTIONS[id];

  if (!description || !description.rules) {
    return (
      <div className="min-h-screen pt-24 flex items-center justify-center">
        <p className="text-white text-xl">Rules not available</p>
      </div>
    );
  }

  // Back path based on category
  const backPath =
    event.category === 'tech' ? '/tech-events' : '/non-tech-events';

  return (
    <div className="min-h-screen pt-24 px-4 container mx-auto max-w-3xl pb-20">
      {/* TITLE */}
      <h1 className="text-4xl md:text-5xl font-mech text-white mb-8 uppercase">
        {event.title}
      </h1>

      {/* RULES CARD */}
<div className="bg-white/5 border border-white/10 p-6 md:p-8 rounded-lg">
  <h2 className="text-xl font-mech text-white mb-4 uppercase">
    Event Rules & Guidelines
  </h2>

  <ul className="list-disc list-inside text-gray-300 space-y-2">
    {description.rules.map((rule, index) => (
      <li key={index}>{rule}</li>
    ))}
  </ul>

  {/* THEMES */}
  {description.themes && (
    <div className="bg-white/5 border border-white/10 p-6 md:p-8 rounded-lg mt-8">
      <h2 className="text-xl font-mech text-white mb-4 uppercase">
        Themes
      </h2>

      <ul className="list-disc list-inside text-gray-300 space-y-2">
        {description.themes.map((theme, index) => (
          <li key={index}>{theme}</li>
        ))}
      </ul>
    </div>
  )}
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
