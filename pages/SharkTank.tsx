// ../pages/SharkTank.tsx
import React from 'react';
import { motion } from 'framer-motion';
import { SHARK_TANK_INFO } from '../constants';
import {
    CheckCircle,
    Calendar,
    // Clock,
    User,
    // MapPin,
    Trophy, // Changed icon for variety
} from 'lucide-react';
import RegistrationButton from '../components/RegistrationButton';

const SharkTank: React.FC = () => {
    return (
        <div className="w-full px-4 pt-20 md:pt-24">
            <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="w-full bg-[var(--bg-card)] border border-[var(--border-skill)] backdrop-blur-xl
               p-8 md:p-12 rounded-2xl
                shadow-[0_0_50px_var(--shadow-skill)]
               relative overflow-hidden"
            >
                {/* BACKGROUND ICON */}
                <div className="absolute top-0 right-0 p-4 opacity-10">
                    <Trophy className="w-64 h-64 text-[var(--color-skill)] animate-pulse" />
                </div>

                {/* HEADERS */}
                <h1 className="text-4xl md:text-5xl font-mech text-[var(--text-primary)] mb-2">
                    SHARK TANK
                </h1>
                <h2 className="text-2xl md:text-3xl font-mech text-[var(--color-skill)] mb-8">
                    {SHARK_TANK_INFO.topic}
                </h2>

                {/* DESCRIPTION */}
                {SHARK_TANK_INFO.description && (
                    <div className="mb-10 text-[var(--text-secondary)] font-medium text-lg leading-relaxed whitespace-pre-line">
                        {SHARK_TANK_INFO.description}
                    </div>
                )}

                {/* CONTENT */}
                <div className="grid md:grid-cols-1 gap-8 mb-10">
                    {/* INFO */}
                    <div className="flex flex-wrap gap-8 justify-center md:justify-start">
                        <div className="flex items-center gap-4 text-[var(--text-secondary)]">
                            <User className="text-[var(--accent-blue)]" />
                            <span className="font-body text-xl">
                                {SHARK_TANK_INFO.trainer}
                            </span>
                        </div>

                        <div className="flex items-center gap-4 text-[var(--text-secondary)]">
                            <Calendar className="text-[var(--accent-blue)]" />
                            <span className="font-body text-xl">
                                {SHARK_TANK_INFO.date}
                            </span>
                        </div>



                        {/* VENUE */}


                        {/* FEE */}
                        <div className="flex items-center gap-4 text-[var(--text-secondary)]">
                            <span className="text-[var(--accent-blue)] font-bold text-xl">₹</span>
                            <span className="font-medium text-xl">
                                {SHARK_TANK_INFO.entryFee}
                            </span>
                        </div>
                    </div>
                </div>

                {/* REGISTRATION BUTTON (REUSABLE) */}
                <div className="text-center">
                    <RegistrationButton
                        registerPath="/register/shark-tank"
                        openText="REGISTER FOR SHARK TANK"
                    />
                </div>
            </motion.div >
        </div >
    );
};

export default SharkTank;


