import React from 'react';
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';
import { COORDINATORS } from '../constants';

const Contact: React.FC = () => {
  return (
    <div className="min-h-screen pt-24 px-4 container mx-auto">
      <h1 className="text-5xl font-mech text-center text-white mb-16">CONTACT <span className="text-neonBlue">US</span></h1>

      <div className="grid md:grid-cols-2 gap-12">
        <div className="space-y-8">
          <div className="bg-white/5 border border-white/10 p-8 rounded-lg backdrop-blur-sm">
            <h2 className="text-2xl font-mech text-neonOrange mb-6">Get In Touch</h2>
            <div className="space-y-4">
              {COORDINATORS.map((coord, idx) => (
                <div key={idx} className="flex items-center justify-between border-b border-white/5 pb-2">
                  <div>
                    <p className="font-bold text-white">{coord.name}</p>
                    <p className="text-sm text-gray-500">{coord.role}</p>
                  </div>
                  <a href={`tel:${coord.phone}`} className="flex items-center gap-2 text-neonBlue hover:text-white transition-colors">
                    <Phone size={16} /> {coord.phone}
                  </a>
                </div>
              ))}
            </div>
            
            <div className="mt-8 pt-4 border-t border-white/10 flex items-center gap-4 text-gray-300">
              <Mail className="text-neonOrange" />
              <a href="mailto:efficacy2024@college.edu" className="hover:text-neonOrange transition-colors">efficacy2024@college.edu</a>
            </div>
          </div>

          <div className="flex justify-center gap-8">
            <a href="#" className="p-4 bg-white/5 rounded-full hover:bg-neonBlue hover:text-black transition-colors"><Facebook /></a>
            <a href="#" className="p-4 bg-white/5 rounded-full hover:bg-neonOrange hover:text-black transition-colors"><Instagram /></a>
            <a href="#" className="p-4 bg-white/5 rounded-full hover:bg-white hover:text-black transition-colors"><Twitter /></a>
          </div>
        </div>

        <div className="bg-white/5 border border-white/10 p-2 rounded-lg h-[400px]">
           <iframe 
             src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.001696423076!2d80.20929127507644!3d12.971742987343477!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525d6d2459c6b7%3A0x7d6a7156e507760!2sAnna%20University!5e0!3m2!1sen!2sin!4v1714567890123!5m2!1sen!2sin" 
             width="100%" 
             height="100%" 
             style={{border:0, filter: 'invert(90%) hue-rotate(180deg)'}} 
             allowFullScreen 
             loading="lazy" 
             referrerPolicy="no-referrer-when-downgrade">
           </iframe>
        </div>
      </div>
    </div>
  );
};

export default Contact;
