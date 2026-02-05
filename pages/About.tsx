// ../pages/About.tsx
import React from 'react';
import { motion } from 'framer-motion';
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from 'recharts';

const About: React.FC = () => {
  const data = [
    { name: 'Tech Events', value: 400 },
    { name: 'Non-Tech', value: 300 },
    { name: 'Workshops', value: 300 },
    { name: 'Racing', value: 200 },
  ];

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

  return (
    <div className="min-h-screen pt-24 px-4 container mx-auto text-white">
      <motion.h1 
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        className="text-4xl md:text-6xl font-mech text-neonOrange mb-12 border-b border-gray-800 pb-4"
      >
        ABOUT EFFICACY
      </motion.h1>

      <div className="grid md:grid-cols-2 gap-12">
        <div className="space-y-8 font-body text-lg text-gray-300">
          <section className="bg-white/5 p-6 rounded-xl border border-white/10 backdrop-blur-sm">
            <h2 className="text-2xl text-neonBlue font-mech mb-4">The Symposium</h2>
            <p>
              EFFICACY is a national-level technical symposium organized by the Department of Mechanical Engineering. 
              It serves as a platform for aspiring engineers to showcase their technical prowess, innovative ideas, 
              and competitive spirit.
            </p>
          </section>

          <section className="bg-white/5 p-6 rounded-xl border border-white/10 backdrop-blur-sm">
            <h2 className="text-2xl text-neonBlue font-mech mb-4">Guidelines</h2>
            <ul className="list-disc list-inside space-y-2 marker:text-neonOrange">
              <li>All participants must carry valid College ID cards.</li>
              <li>Registration fee is non-refundable.</li>
              <li>Decisions of the judges will be final.</li>
              <li>Strict discipline must be maintained within the campus.</li>
            </ul>
          </section>

          <div className="grid grid-cols-2 gap-4">
             <div className="bg-blue-900/20 p-4 border border-blue-500/30 rounded text-center">
                <h3 className="text-neonBlue font-bold">Refreshments</h3>
                <p className="text-sm">Provided for all registered teams.</p>
             </div>
             <div className="bg-orange-900/20 p-4 border border-orange-500/30 rounded text-center">
                <h3 className="text-neonOrange font-bold">Accommodation</h3>
                <p className="text-sm">Available on prior request (Charged).</p>
             </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center bg-white/5 rounded-xl border border-white/10 p-4">
          <h2 className="text-2xl text-white font-mech mb-4">Event Distribution</h2>
          <div className="w-full h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={data}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={80}
                  fill="#8884d8"
                  paddingAngle={5}
                  dataKey="value"
                  label
                >
                  {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip 
                  contentStyle={{ backgroundColor: '#111', borderColor: '#333' }}
                  itemStyle={{ color: '#fff' }}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <p className="text-center text-sm text-gray-500 mt-4 font-mech">Expected Participation Distribution</p>
        </div>
      </div>
    </div>
  );
};

export default About;
