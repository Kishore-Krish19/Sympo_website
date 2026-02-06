// ../pages/Contact.tsx
import React from 'react';
import { Phone, Mail, Instagram } from 'lucide-react';
import { COORDINATORS } from '../constants';

const Contact: React.FC = () => {
  return (
    <div className="min-h-screen pt-24 px-4 container mx-auto">
      <h1 className="text-5xl font-mech text-center text-white mb-12">
        CONTACT <span className="text-neonBlue">US</span>
      </h1>

      {/* MOBILE-FIRST WRAPPER */}
      <div className="max-w-3xl mx-auto space-y-12">

        {/* CONTACT CARD */}
        <div className="bg-white/5 border border-white/10 p-6 rounded-lg backdrop-blur-sm">
          <h2 className="text-2xl font-mech text-neonOrange mb-6">
            Get In Touch
          </h2>

          <div className="space-y-4">
            {COORDINATORS.map((coord, idx) => (
              <div
                key={idx}
                className="flex items-center justify-between border-b border-white/5 pb-2"
              >
                <p className="font-bold text-white">{coord.name}</p>

                <a
                  href={`tel:${coord.phone}`}
                  className="flex items-center gap-2 text-neonBlue hover:text-white transition-colors"
                >
                  <Phone size={16} /> {coord.phone}
                </a>
              </div>
            ))}
          </div>

          {/* SOCIAL ICONS */}
          <div className="mt-8 flex justify-center gap-8">
            <a
              href="https://www.instagram.com/efficacy2k26?igsh=ZnI0ZWYxdHNrbW5m"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 bg-white/5 rounded-full
              hover:bg-neonOrange hover:text-black transition-colors"
            >
              <Instagram />
            </a>

            <a
              href="mailto:efficacy2026.gcee@gmail.com"
              className="p-4 bg-white/5 rounded-full
              hover:bg-neonOrange hover:text-black transition-colors"
            >
              <Mail />
            </a>
          </div>
        </div>

        {/* LOCATION */}
        <div>
          <h2 className="text-2xl font-mech text-neonOrange mb-4 text-center">
            Location
          </h2>

          {/* CLICKABLE MAP */}
          <a
            href="https://maps.app.goo.gl/41gHoKwX5LP27nCBA"
            target="_blank"
            rel="noopener noreferrer"
            className="block"
          >
            <div className="bg-white/5 border border-white/10 rounded-lg overflow-hidden h-[240px] md:h-[350px] relative cursor-pointer group">

              {/* EXACT LOCATION MAP PREVIEW */}
              <iframe
                src="https://www.google.com/maps?q=Government+College+of+Engineering+Erode&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg)' }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="pointer-events-none"
              />

              {/* OVERLAY HINT */}
              <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
                <span className="px-4 py-2 bg-neonOrange text-black font-mech text-sm rounded shadow">
                  Open in Google Maps
                </span>
              </div>

            </div>
          </a>
        </div>

      </div>
    </div>
  );
};

export default Contact;
