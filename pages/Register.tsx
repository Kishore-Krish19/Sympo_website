import React, { useState, useEffect, ChangeEvent, FormEvent } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { RegistrationForm } from '../types';
import { submitRegistration } from '../services/api';
import { Input } from '../components/Input';
import { Upload, ChevronDown, CreditCard } from 'lucide-react';
import { TECH_EVENTS, NON_TECH_EVENTS, WORKSHOP_INFO, BANK_DETAILS, nonTechEventOptions } from '../constants';

const Register: React.FC = () => {
    const { type } = useParams<{ type: string }>();
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [toast, setToast] = useState<{ msg: string; type: 'success' | 'error' } | null>(null);

    const [formData, setFormData] = useState<RegistrationForm>({
        teamName: '',
        eventType: '',
        eventName: '',
        nonTechEvent: '',
        teamLeaderName: '',
        collegeName: '',
        department: '',
        yearOfStudy: '',
        phoneNumber: '',
        whatsappNumber: '',
        email: '',
        teamSize: 1, // Default 1
        teamMembers: [], // Empty initially
        vegCount: 0,
        nonVegCount: 0,
        transactionId: '',
        termsAccepted: false,
        paymentScreenshot: '',
    });

    // Handle Default Event Names for single-event categories
    useEffect(() => {
        if (type === 'workshop') {
            setFormData(prev => ({ ...prev, eventName: WORKSHOP_INFO.topic }));
        } else if (type === 'ev') {
            setFormData(prev => ({ ...prev, eventName: 'Electric Go-Kart Racing' }));
        } else {
            setFormData(prev => ({ ...prev, eventName: '' }));
        }
    }, [type]);

    // Dynamic Title based on URL
    const getTitle = () => {
        switch (type) {
            case 'tech': return 'Technical Event Registration';
            case 'non-tech': return 'Non-Tech Registration';
            case 'workshop': return 'Workshop Registration';
            case 'ev': return 'EV Racing Registration';
            default: return 'Registration';
        }
    };

    // Get Options for Dropdown
    const getEventOptions = () => {
        if (type === 'tech') return TECH_EVENTS;
        if (type === 'non-tech') return NON_TECH_EVENTS;
        return [];
    };

    const eventOptions = getEventOptions();
    const showDropdown = (type === 'tech' || type === 'non-tech') && eventOptions.length > 0;

    const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value, type } = e.target;
        if (type === 'checkbox') {
            const checked = (e.target as HTMLInputElement).checked;
            setFormData(prev => ({ ...prev, [name]: checked }));
        } else {
            setFormData(prev => ({ ...prev, [name]: value }));
        }
    };

    // Handle Team Size Change
    const handleTeamSizeChange = (e: ChangeEvent<HTMLSelectElement>) => {
        const newSize = parseInt(e.target.value);
        const membersNeeded = newSize - 1; // Leader is always included

        // Adjust teamMembers array size
        let currentMembers = [...formData.teamMembers];
        if (currentMembers.length < membersNeeded) {
            // Add empty strings
            const toAdd = membersNeeded - currentMembers.length;
            for (let i = 0; i < toAdd; i++) currentMembers.push('');
        } else if (currentMembers.length > membersNeeded) {
            // Truncate
            currentMembers = currentMembers.slice(0, membersNeeded);
        }

        setFormData(prev => ({
            ...prev,
            teamSize: newSize,
            teamMembers: currentMembers
        }));
    };

    const handleMemberChange = (index: number, value: string) => {
        const updatedMembers = [...formData.teamMembers];
        updatedMembers[index] = value;
        setFormData(prev => ({ ...prev, teamMembers: updatedMembers }));
    };

    const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setFormData(prev => ({ ...prev, paymentScreenshot: reader.result as string }));
            };
            reader.readAsDataURL(file);
        }
    };

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        const eventType =
            type === "tech" || type === "workshop" || type === "ev"
                ? "Technical"
                : "Non-Technical";

        // 1. Validate Food Count
        const totalFood = Number(formData.vegCount) + Number(formData.nonVegCount);
        if (totalFood !== formData.teamSize) {
            setToast({
                msg: `Food count (${totalFood}) does not match Total Team Members (${formData.teamSize}).`,
                type: 'error'
            });
            return;
        }
        const veg = Number(formData.vegCount);
        const nonVeg = Number(formData.nonVegCount);
        const total = Number(formData.teamSize);

        if (veg + nonVeg !== total) {
            setToast({ msg: "Veg + Non-Veg count must match total team members", type: 'error' });
            return;
        }

        // 2. Validate Screenshot
        if (!formData.paymentScreenshot) {
            setToast({ msg: 'Payment Screenshot is required!', type: 'error' });
            return;
        }

        setLoading(true);
        const result = await submitRegistration(type || 'tech', {
            ...formData,
            eventType,
        });
        setLoading(false);

        if (result.success) {
            setToast({ msg: 'Registration successful!', type: 'success' });
            setTimeout(() => navigate('/'), 3000);
        } else {
            setToast({ msg: 'Registration failed. Please try again.', type: 'error' });
        }
    };

    return (
        <div className="min-h-screen pt-24 pb-20 px-4 container mx-auto">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="max-w-3xl mx-auto bg-black/60 border border-white/10 backdrop-blur-lg p-8 rounded-xl shadow-[0_0_40px_rgba(0,0,0,0.5)]"
            >
                <h1 className="text-3xl md:text-4xl font-mech text-neonBlue mb-8 text-center uppercase border-b border-white/10 pb-4">
                    {getTitle()}
                </h1>

                <form onSubmit={handleSubmit} className="space-y-6">

                    {/* Event Selection Dropdown */}
                    {showDropdown && (
                        <div className="mb-4 w-full relative">
                            <label className="block text-neonBlue text-sm font-mech tracking-wide mb-2 uppercase">
                                {type === 'tech' ? 'Technical Event Name' : 'Non-Technical Event Name'} <span className="text-red-500">*</span>
                            </label>
                            <div className="relative">
                                <select
                                    name="eventName"
                                    value={formData.eventName}
                                    onChange={handleInputChange}
                                    className="bg-black/50 border border-white/20 text-white text-sm rounded-none focus:ring-neonOrange focus:border-neonOrange block w-full p-3 transition-all duration-300 backdrop-blur-sm font-body appearance-none cursor-pointer"
                                    required
                                >
                                    <option value="" className="bg-black text-gray-500">Select an Event</option>
                                    {eventOptions.map(e => (
                                        <option key={e.id} value={e.title} className="bg-black">{e.title}</option>
                                    ))}
                                </select>
                                <ChevronDown className="absolute right-3 top-3 text-neonBlue pointer-events-none w-5 h-5" />
                            </div>
                        </div>
                    )}

                    {/* Auto-filled Event Name (Read Only) */}
                    {!showDropdown && formData.eventName && (
                        <Input name="eventName" label="Event Name" value={formData.eventName} readOnly className="bg-white/10 text-gray-400 border-none" />
                    )}
                    {/* Optional Non-Technical Event (ONLY for Tech Registration) */}
                    {type === "tech" && showDropdown && (
                        <div className="mb-4 w-full relative">
                            <label className="block text-neonBlue text-sm font-mech tracking-wide mb-2 uppercase">
                                Non-Technical Event Name <span className="text-gray-400">(Optional)</span>
                            </label>

                            <div className="relative">
                                <select
                                    name="nonTechEvent"
                                    value={formData.nonTechEvent}
                                    onChange={handleInputChange}
                                    disabled={!formData.eventName}
                                    className="bg-black/50 border border-white/20 text-white text-sm rounded-none focus:ring-neonOrange focus:border-neonOrange block w-full p-3 transition-all duration-300 backdrop-blur-sm font-body appearance-none cursor-pointer"
                                >
                                    <option value="" className="bg-black text-gray-500">
                                        Select Non-Tech Event (Free)
                                    </option>

                                    {nonTechEventOptions.map(e => (
                                        <option key={e.id} value={e.title} className="bg-black">
                                            {e.title}
                                        </option>
                                    ))}
                                </select>

                                <ChevronDown className="absolute right-3 top-3 text-neonBlue pointer-events-none w-5 h-5" />
                            </div>
                        </div>
                    )}


                    <div className="grid md:grid-cols-2 gap-6">
                        <Input name="teamName" label="Team Name" value={formData.teamName} onChange={handleInputChange} required />
                        <Input name="teamLeaderName" label="Team Leader Name" value={formData.teamLeaderName} onChange={handleInputChange} required />
                    </div>

                    <Input name="collegeName" label="College Name" value={formData.collegeName} onChange={handleInputChange} required />

                    <div className="grid md:grid-cols-3 gap-6">
                        <Input name="department" label="Department" value={formData.department} onChange={handleInputChange} required />
                        <Input name="yearOfStudy" label="Year" value={formData.yearOfStudy} onChange={handleInputChange} required placeholder="e.g. III" />

                        {/* Total Team Members Dropdown */}
                        <div className="mb-4 w-full relative">
                            <label className="block text-neonBlue text-sm font-mech tracking-wide mb-2 uppercase">
                                Total Team Members <span className="text-red-500">*</span>
                            </label>
                            <div className="relative">
                                <select
                                    name="teamSize"
                                    value={formData.teamSize}
                                    onChange={handleTeamSizeChange}
                                    className="bg-black/50 border border-white/20 text-white text-sm rounded-none focus:ring-neonOrange focus:border-neonOrange block w-full p-3 transition-all duration-300 backdrop-blur-sm font-body appearance-none cursor-pointer"
                                    required
                                >
                                    <option value="1" className="bg-black">1 (Leader Only)</option>
                                    <option value="2" className="bg-black">2 (Leader + 1)</option>
                                    <option value="3" className="bg-black">3 (Leader + 2)</option>
                                </select>
                                <ChevronDown className="absolute right-3 top-3 text-neonBlue pointer-events-none w-5 h-5" />
                            </div>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                        <Input type="tel" name="phoneNumber" label="Phone Number" value={formData.phoneNumber} onChange={handleInputChange} required pattern="[0-9]{10}" />
                        <Input type="tel" name="whatsappNumber" label="WhatsApp Number" value={formData.whatsappNumber} onChange={handleInputChange} required pattern="[0-9]{10}" />
                        <Input type="email" name="email" label="Email Address" value={formData.email} onChange={handleInputChange} required />
                    </div>

                    {/* Dynamic Members Input Fields */}
                    {formData.teamMembers.length > 0 && (
                        <div className="space-y-4 border-t border-white/10 pt-4">
                            <label className="block text-neonBlue text-sm font-mech uppercase">Additional Members</label>
                            {formData.teamMembers.map((member, index) => (
                                <Input
                                    key={index}
                                    label={`Member ${index + 2} Name`}
                                    value={member}
                                    onChange={(e) => handleMemberChange(index, e.target.value)}
                                    className="mb-0"
                                    placeholder="Full Name"
                                    required
                                />
                            ))}
                        </div>
                    )}

                    {/* Food Count Section */}
                    <div className="grid md:grid-cols-2 gap-6 border-t border-white/10 pt-4">
                        <div className="col-span-2 text-neonOrange font-mech text-sm uppercase">Food Preferences</div>
                        <p className="col-span-2 text-xs text-gray-500 -mt-2 mb-2">* Total must equal {formData.teamSize}</p>
                        <Input type="number" name="vegCount" label="Veg Count" value={formData.vegCount} onChange={handleInputChange} min="0" required />
                        <Input type="number" name="nonVegCount" label="Non-Veg Count" value={formData.nonVegCount} onChange={handleInputChange} min="0" required />
                    </div>

                    {/* Payment Details Section */}
                    <div className="border border-white/20 rounded-xl p-6 bg-white/5 space-y-6">
                        <div className="flex items-center gap-2 border-b border-white/10 pb-2">
                            <CreditCard className="text-neonBlue" />
                            <h3 className="text-xl font-mech text-white">Payment Details</h3>
                        </div>

                        <div className="grid grid-cols-2 gap-4 text-sm font-body">
                            <div>
                                <span className="block text-gray-500">Account Holder</span>
                                <span className="text-neonBlue">{BANK_DETAILS.accountHolder}</span>
                            </div>
                            <div>
                                <span className="block text-gray-500">Bank Name</span>
                                <span className="text-white">{BANK_DETAILS.bankName}</span>
                            </div>
                            <div>
                                <span className="block text-gray-500">Account Number</span>
                                <span className="text-white font-mono tracking-wider">{BANK_DETAILS.accountNumber}</span>
                            </div>
                            <div>
                                <span className="block text-gray-500">IFSC Code</span>
                                <span className="text-white font-mono">{BANK_DETAILS.ifscCode}</span>
                            </div>
                            <div className="col-span-2 border-t border-white/10 pt-2">
                                <span className="block text-gray-500">UPI ID</span>
                                <span className="text-neonOrange font-bold">{BANK_DETAILS.upiId}</span>
                            </div>
                        </div>

                        <Input
                            name="transactionId"
                            label="Transaction ID / UTR Number"
                            value={formData.transactionId}
                            onChange={handleInputChange}
                            placeholder="e.g. 1234567890"
                            required
                        />

                        {/* File Upload */}
                        <div className="border border-dashed border-white/30 rounded p-6 text-center hover:border-neonBlue transition-colors bg-black/20">
                            <Upload className="mx-auto w-8 h-8 text-gray-400 mb-2" />
                            <label className="block text-sm text-gray-300 mb-2">Upload Payment Screenshot *</label>
                            <input type="file" accept="image/png,image/jpeg,image/jpg,image/webp" onChange={handleFileChange} className="text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-neonBlue file:text-black hover:file:bg-white" required />
                        </div>
                    </div>

                    <div className="flex items-center gap-2">
                        <input type="checkbox" name="termsAccepted" checked={formData.termsAccepted} onChange={handleInputChange} className="w-4 h-4 accent-neonBlue" required />
                        <span className="text-sm text-gray-400">I agree to the terms and event rules.</span>
                    </div>

                    <button
                        type="submit"
                        disabled={!formData.termsAccepted || !formData.paymentScreenshot || loading}
                        className={`w-full py-4 font-mech font-bold text-xl uppercase tracking-widest transition-all
              ${loading ? 'bg-gray-600 cursor-not-allowed' : 'bg-neonBlue text-black hover:bg-white shadow-[0_0_20px_rgba(0,243,255,0.4)]'}
            `}
                    >
                        {loading ? 'Submitting...' : 'Confirm Registration'}
                    </button>
                </form>

                {toast && (
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        className={`fixed bottom-10 right-10 p-4 rounded shadow-lg ${toast.type === 'success' ? 'bg-green-600' : 'bg-red-600'} text-white z-50`}
                    >
                        {toast.msg}
                    </motion.div>
                )}
            </motion.div>
        </div>
    );
};
export default Register;