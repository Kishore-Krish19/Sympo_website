// ../pages/EventList.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { EventDetails } from '../types';

interface EventListProps {
  title: string;
  events: EventDetails[];
  type: 'tech' | 'non-tech';
}

const EventList: React.FC<EventListProps> = ({ title, events, type }) => {
  const isTech = type === 'tech';

  return (
    <div className="min-h-screen pt-24 px-4 container mx-auto pb-20">
      {/* HEADER */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex items-center justify-between mb-12 border-b border-[var(--border-color)] pb-6"
      >
        <h1 className="text-4xl md:text-6xl font-mech text-[var(--text-primary)] uppercase">
          {title}
        </h1>

        <div
          className={`h-2 w-24 ${isTech
            ? 'bg-[var(--color-tech)] shadow-[0_0_10px_var(--shadow-tech)]'
            : 'bg-[var(--color-nontech)] shadow-[0_0_10px_var(--shadow-nontech)]'
            } rounded-full`}
        />
      </motion.div>

      {/* EVENT LIST */}
      <div className="grid gap-6">
        {events.map((event, index) => (
          <motion.div
            key={event.id}
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            className="group relative bg-[var(--bg-card)] border border-[var(--border-color)] p-6 md:p-8 rounded-lg overflow-hidden hover:bg-[var(--bg-card-hover)] transition-colors shadow-sm hover:shadow-md"
          >
            {/* LEFT BORDER GLOW */}
            <div
              className={`absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-transparent ${isTech ? 'via-[var(--color-tech)]' : 'via-[var(--color-nontech)]'
                } to-transparent opacity-40`}
            />

            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
              {/* ICON + TEXT */}
              <div className="flex items-start gap-6">
                <div className="p-4 bg-[var(--bg-surface)] rounded-lg border border-[var(--border-color)]">
                  <event.icon
                    className={`w-8 h-8 ${isTech ? 'text-[var(--color-tech)]' : 'text-[var(--color-nontech)]'
                      }`}
                  />
                </div>

                <div>
                  <h3 className="text-2xl font-mech text-[var(--text-primary)] mt-4">
                    {event.title}
                  </h3>

                </div>
              </div>

              {/* ACTION BUTTONS */}
              <div className="flex gap-4 shrink-0">
                {/* DESCRIPTION BUTTON */}
                <Link to={`/events/${event.id}`}>
                  <button
                    className={`px-6 py-3 text-sm font-mech uppercase tracking-wider
                    border ${isTech
                        ? 'border-[var(--border-tech)] text-[var(--color-tech)] hover:bg-[var(--color-tech)] hover:text-[var(--text-inverse)]'
                        : 'border-[var(--border-nontech)] text-[var(--color-nontech)] hover:bg-[var(--color-nontech)] hover:text-[var(--text-inverse)]'
                      }
                    transition-all duration-300`}
                  >
                    Description
                  </button>
                </Link>

                {/* REGISTER BUTTON */}
                <Link to={event.path}>
                  <button
                    className={`px-6 py-3 text-sm font-mech uppercase tracking-wider font-bold
                    ${isTech
                        ? 'bg-[var(--color-tech)] text-[var(--text-inverse)] hover:bg-[var(--bg-secondary)] hover:text-[var(--color-tech)]'
                        : 'bg-[var(--color-nontech)] text-[var(--text-inverse)] hover:bg-[var(--bg-secondary)] hover:text-[var(--color-nontech)]'
                      }
                    transition-all duration-300 shadow`}
                  >
                    Register
                  </button>
                </Link>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default EventList;
