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
        className="flex items-center justify-between mb-12 border-b border-white/10 pb-6"
      >
        <h1 className="text-4xl md:text-6xl font-mech text-white uppercase">
          {title}
        </h1>

        <div
          className={`h-2 w-24 ${isTech
            ? 'bg-neonBlue shadow-[0_0_10px_#00f3ff]'
            : 'bg-neonOrange shadow-[0_0_10px_#ffaa00]'
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
            className="group relative bg-white/5 border border-white/10 p-6 md:p-8 rounded-lg overflow-hidden hover:bg-white/10 transition-colors"
          >
            {/* LEFT BORDER GLOW */}
            <div
              className={`absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-transparent ${isTech ? 'via-neonBlue' : 'via-neonOrange'
                } to-transparent opacity-40`}
            />

            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
              {/* ICON + TEXT */}
              <div className="flex items-start gap-6">
                <div className="p-4 bg-black/50 rounded-lg border border-white/5">
                  <event.icon
                    className={`w-8 h-8 ${isTech ? 'text-neonBlue' : 'text-neonOrange'
                      }`}
                  />
                </div>

                <div>
                  <h3 className="text-2xl font-mech text-white mt-4">
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
                        ? 'border-neonBlue text-neonBlue hover:bg-neonBlue hover:text-black'
                        : 'border-neonOrange text-neonOrange hover:bg-neonOrange hover:text-black'
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
                        ? 'bg-neonBlue text-black hover:bg-white'
                        : 'bg-neonOrange text-black hover:bg-white'
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
