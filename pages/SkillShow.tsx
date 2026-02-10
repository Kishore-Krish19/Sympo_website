// ../pages/SkillShow.tsx
import React from 'react';
import { motion } from 'framer-motion';
import { SKILL_SHOW_INFO } from '../constants';
import {
    CheckCircle,
    Calendar,
    // Clock,
    User,
    // MapPin,
    Trophy, // Changed icon for variety
} from 'lucide-react';
import RegistrationButton from '../components/RegistrationButton';

const SkillShow: React.FC = () => {
    return (
        <div className="w-full px-4 pt-20 md:pt-24">
            <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="w-full bg-black/60 border border-neonOrange/30 backdrop-blur-xl
               p-8 md:p-12 rounded-2xl
                shadow-[0_0_50px_rgba(255,170,0,0.1)]
               relative overflow-hidden"
            >
                {/* BACKGROUND ICON */}
                <div className="absolute top-0 right-0 p-4 opacity-10">
                    <Trophy className="w-64 h-64 text-neonOrange animate-pulse" />
                </div>

                {/* HEADERS */}
                <h1 className="text-4xl md:text-5xl font-mech text-white mb-2">
                    Shark Tank
                </h1>
                <h2 className="text-2xl md:text-3xl font-mech text-neonOrange mb-8">
                    {SKILL_SHOW_INFO.topic}
                </h2>

                {/* DESCRIPTION */}
                {SKILL_SHOW_INFO.description && (
                    <div className="mb-10 text-gray-300 font-body text-lg leading-relaxed whitespace-pre-line">
                        {SKILL_SHOW_INFO.description}
                    </div>
                )}

                {/* CONTENT */}
                <div className="grid md:grid-cols-1 gap-8 mb-10">
                    {/* INFO */}
                    <div className="flex flex-wrap gap-8 justify-center md:justify-start">
                        <div className="flex items-center gap-4 text-gray-300">
                            <User className="text-neonBlue" />
                            <span className="font-body text-xl">
                                {SKILL_SHOW_INFO.trainer}
                            </span>
                        </div>

                        <div className="flex items-center gap-4 text-gray-300">
                            <Calendar className="text-neonBlue" />
                            <span className="font-body text-xl">
                                {SKILL_SHOW_INFO.date}
                            </span>
                        </div>



                        {/* VENUE */}


                        {/* FEE */}
                        <div className="flex items-center gap-4 text-gray-300">
                            <span className="text-neonBlue font-bold text-xl">₹</span>
                            <span className="font-body text-xl">
                                {SKILL_SHOW_INFO.entryFee}
                            </span>
                        </div>
                    </div>
                </div>

                {/* REGISTRATION BUTTON (REUSABLE) */}
                <div className="text-center">
                    <RegistrationButton
                        registerPath="/register/skill-show"
                        openText="REGISTER FOR SKILL SHOW"
                    />
                </div>
            </motion.div >
        </div >
    );
};

export default SkillShow;
