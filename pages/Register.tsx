// ../pages/Register.tsx
import React, { useState, useEffect, ChangeEvent, FormEvent } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { RegistrationForm } from "../types";
import { submitRegistration } from "../services/api";
import { Input } from "../components/Input";
import { Upload, ChevronDown, CreditCard } from "lucide-react";
import { AnimatePresence } from "framer-motion";

import {
  TECH_EVENTS,
  NON_TECH_EVENTS,
  WORKSHOP_INFO,
  BANK_DETAILS,
  nonTechEventOptions,
} from "../constants";
// const [topAlert, setTopAlert] = useState<string | null>(null);

// ===============================
// 📲 WhatsApp Group Links (by Event Type)
// ===============================
const whatsappLinksByType: Record<string, string> = {
  tech: "https://chat.whatsapp.com/B6QRLt0JFJqEyg76ScTXY6?mode=gi_t",
  "non-tech": "https://chat.whatsapp.com/HKLWX6wkgzuI8ysfjXZxqC?mode=gi_t",
  workshop: "https://chat.whatsapp.com/JjMrbwpieT1CjqyA77yyhU?mode=gi_t",
  ev: "https://chat.whatsapp.com/EIOBzWU7fXV0KCBeYfoVP2?mode=gi_t",
};

const Register: React.FC = () => {
  const { type } = useParams<{ type: string }>();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState<{
    msg: string;
    type: "success" | "error";
  } | null>(null);

  const [formData, setFormData] = useState<RegistrationForm>({
    teamName: "",
    eventType: "",
    eventName: "",
    nonTechEvent: "",
    teamLeaderName: "",
    collegeName: "",
    department: "",
    yearOfStudy: "",
    phoneNumber: "",
    whatsappNumber: "",
    email: "",
    teamSize: 1, // Default 1
    teamMembers: [], // Empty initially
    vegCount: 0,
    nonVegCount: 0,
    transactionId: "",
    termsAccepted: false,
    paymentScreenshot: "",
    type: type || "tech", // Default to 'tech' if type is undefined
    amount: 300,
  });
  const [registrationSuccess, setRegistrationSuccess] = useState(false);
  const [whatsappLink, setWhatsappLink] = useState("");
  const isWorkshop = type === "workshop";
  const isEVRacing = type === "ev";
  useEffect(() => {
    if (toast) {
      const t = setTimeout(() => setToast(null), 1500);
      return () => clearTimeout(t);
    }
  }, [toast]);

  useEffect(() => {
    if (isWorkshop) {
      setFormData((prev) => ({
        ...prev,
        teamSize: 1,
        teamMembers: [],
      }));
      return;
    }

    if (isEVRacing) {
      setFormData((prev) => {
        if (prev.teamSize > 6) {
          return {
            ...prev,
            teamSize: 6,
            teamMembers: prev.teamMembers.slice(0, 5),
          };
        }
        return prev;
      });
    }
  }, [isWorkshop, isEVRacing]);
  // ===============================
  // 💰 Registration Amount Calculation
  // ===============================
  useEffect(() => {
    setFormData((prev) => ({
      ...prev,
      amount: type === "ev" ? 1600 : prev.teamSize * 300,
    }));
  }, [type, formData.teamSize]);

  // Handle Default Event Names for single-event categories
  useEffect(() => {
    if (type === "workshop") {
      setFormData((prev) => ({ ...prev, eventName: WORKSHOP_INFO.topic }));
    } else if (type === "ev") {
      setFormData((prev) => ({
        ...prev,
        eventName: "Electric Vehicle Racing",
      }));
    } else {
      setFormData((prev) => ({ ...prev, eventName: "" }));
    }
  }, [type]);

  // Dynamic Title based on URL
  const getTitle = () => {
    switch (type) {
      case "tech":
        return "Technical Event Registration";
      case "non-tech":
        return "Non-Tech Registration";
      case "workshop":
        return "Workshop Registration";
      case "ev":
        return "EV Racing Registration";
      default:
        return "Registration";
    }
  };

  // Get Options for Dropdown
  const getEventOptions = () => {
    if (type === "tech") return TECH_EVENTS;
    if (type === "non-tech") return NON_TECH_EVENTS;
    return [];
  };

  const eventOptions = getEventOptions();
  const showDropdown =
    (type === "tech" || type === "non-tech") && eventOptions.length > 0;

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value, type } = e.target;
    if (type === "checkbox") {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData((prev) => ({ ...prev, [name]: checked }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
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
      for (let i = 0; i < toAdd; i++) currentMembers.push("");
    } else if (currentMembers.length > membersNeeded) {
      // Truncate
      currentMembers = currentMembers.slice(0, membersNeeded);
    }

    setFormData((prev) => ({
      ...prev,
      teamSize: newSize,
      teamMembers: currentMembers,
    }));
  };

  const handleMemberChange = (index: number, value: string) => {
    const updatedMembers = [...formData.teamMembers];
    updatedMembers[index] = value;
    setFormData((prev) => ({ ...prev, teamMembers: updatedMembers }));
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData((prev) => ({
          ...prev,
          paymentScreenshot: reader.result as string,
        }));
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
        type: "error",
      });
      return;
    }
    const veg = Number(formData.vegCount);
    const nonVeg = Number(formData.nonVegCount);
    const total = Number(formData.teamSize);

    if (veg + nonVeg !== total) {
      setToast({
        msg: "Veg + Non-Veg count must match total team members",
        type: "error",
      });
      return;
    }

    // 2. Validate Screenshot
    if (!formData.paymentScreenshot) {
      setToast({ msg: "Payment Screenshot is required!", type: "error" });
      return;
    }

    setLoading(true);
    const result = await submitRegistration(type || "tech", {
      ...formData,
      eventType,
    });
    setLoading(false);

    if (result.success === true) {
      setToast({ msg: "Registration successful!", type: "success" });
      setRegistrationSuccess(true);
      const link = whatsappLinksByType[type || "tech"];
      setWhatsappLink(link);

      // setTimeout(() => navigate('/'), 3000);
    } else {
      setToast({
        msg: "Registration failed. Please try again.",
        type: "error",
      });
    }
  };

  return (
    <div className="min-h-screen pt-24 pb-20 px-4 container mx-auto">
      {/* 🔔 AGGRESSIVE POP TOAST */}
      <AnimatePresence>
        {toast && toast.type !== "success" && (
          <motion.div
            key={toast.id}
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: [0.7, 1.12, 1] }}
            exit={{ opacity: 0, scale: 0.85 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="
        fixed top-24 left-0 right-0
        z-50
        flex justify-center
        pointer-events-none
      "
          >
            <div
              className="
          pointer-events-auto
          w-full max-w-3xl
          mx-4
          bg-red-600 text-white
          px-6 py-4
          rounded-b-lg
          shadow-[0_12px_45px_rgba(0,0,0,0.7)]
          font-mech
          text-center
          text-lg
        "
            >
              {toast.msg}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

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
                {type === "tech"
                  ? "Technical Event Name"
                  : "Non-Technical Event Name"}{" "}
                <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <select
                  name="eventName"
                  value={formData.eventName}
                  onChange={handleInputChange}
                  className="bg-black/50 border border-white/20 text-white text-sm rounded-none focus:ring-neonOrange focus:border-neonOrange block w-full p-3 transition-all duration-300 backdrop-blur-sm font-body appearance-none cursor-pointer"
                  required
                >
                  <option value="" className="bg-black text-gray-500">
                    Select an Event
                  </option>
                  {eventOptions.map((e) => (
                    <option key={e.id} value={e.title} className="bg-black">
                      {e.title}
                    </option>
                  ))}
                </select>
                <ChevronDown className="absolute right-3 top-3 text-neonBlue pointer-events-none w-5 h-5" />
              </div>
            </div>
          )}

          {/* Auto-filled Event Name (Read Only) */}
          {!showDropdown && formData.eventName && (
            <Input
              name="eventName"
              label="Event Name"
              value={formData.eventName}
              readOnly
              className="bg-white/10 text-gray-400 border-none"
            />
          )}
          {/* Optional Non-Technical Event (ONLY for Tech Registration) */}
          {type === "tech" && showDropdown && (
            <div className="mb-4 w-full relative">
              <label className="block text-neonBlue text-sm font-mech tracking-wide mb-2 uppercase">
                Non-Technical Event Name{" "}
                <span className="text-gray-400">(Optional)</span>
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

                  {nonTechEventOptions.map((e) => (
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
            <Input
              name="teamName"
              label="Team Name"
              value={formData.teamName}
              onChange={handleInputChange}
              required
            />
            <Input
              name="teamLeaderName"
              label="Team Leader Name"
              value={formData.teamLeaderName}
              onChange={handleInputChange}
              required
            />
          </div>

          <Input
            name="collegeName"
            label="College Name"
            value={formData.collegeName}
            onChange={handleInputChange}
            required
          />

          <div className="grid md:grid-cols-3 gap-6">
            <Input
              name="department"
              label="Department"
              value={formData.department}
              onChange={handleInputChange}
              required
            />
            <Input
              name="yearOfStudy"
              label="Year"
              value={formData.yearOfStudy}
              onChange={handleInputChange}
              required
              placeholder="e.g. III"
            />

            {/* Total Team Members Dropdown */}
            {isWorkshop ? (
              <Input
                name="teamSize"
                label="Total Team Members"
                value="1 (Solo Participant)"
                readOnly
                className="bg-white/10 text-gray-400 cursor-not-allowed"
              />
            ) : (
              <div className="mb-4 w-full relative">
                <label className="block text-neonBlue text-sm font-mech tracking-wide mb-2 uppercase">
                  Total Team Members <span className="text-red-500">*</span>
                </label>

                <div className="relative">
                  <select
                    name="teamSize"
                    value={formData.teamSize}
                    onChange={handleTeamSizeChange}
                    className="bg-black/100 border border-white/20 text-white text-sm rounded-none focus:ring-neonOrange focus:border-neonOrange block w-full p-3 cursor-pointer appearance-none"
                    required
                  >
                    <option value="1">1 (Leader Only)</option>
                    <option value="2">2 (Leader + 1)</option>
                    <option value="3">3 (Leader + 2)</option>

                    {isEVRacing && (
                      <>
                        <option value="4">4 (Leader + 3)</option>
                        <option value="5">5 (Leader + 4)</option>
                        <option value="6">6 (Leader + 5)</option>
                      </>
                    )}
                  </select>

                  <ChevronDown className="absolute right-3 top-3 text-neonBlue w-5 h-5 pointer-events-none" />
                </div>
              </div>
            )}
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <Input
              type="tel"
              name="phoneNumber"
              label="Phone Number"
              value={formData.phoneNumber}
              onChange={handleInputChange}
              required
              pattern="[0-9]{10}"
            />
            <Input
              type="tel"
              name="whatsappNumber"
              label="WhatsApp Number"
              value={formData.whatsappNumber}
              onChange={handleInputChange}
              required
              pattern="[0-9]{10}"
            />
            <Input
              type="email"
              name="email"
              label="Email Address"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
          </div>

          {/* Dynamic Members Input Fields */}
          {!isWorkshop && formData.teamMembers.length > 0 && (
            <div className="space-y-4 border-t border-white/10 pt-4">
              <label className="block text-neonBlue text-sm font-mech uppercase">
                Additional Members
              </label>

              {formData.teamMembers.map((member, index) => (
                <Input
                  key={index}
                  label={`Member ${index + 2} Name`}
                  value={member}
                  onChange={(e) => handleMemberChange(index, e.target.value)}
                  placeholder="Full Name"
                  required
                />
              ))}
            </div>
          )}

          {/* Food Count Section */}
          <div className="grid md:grid-cols-2 gap-6 border-t border-white/10 pt-4">
            <div className="col-span-2 text-neonOrange font-mech text-sm uppercase">
              Food Preferences
            </div>
            <p className="col-span-2 text-xs text-gray-500 -mt-2 mb-2">
              * Total must equal {formData.teamSize}
            </p>
            <Input
              type="number"
              name="vegCount"
              label="Veg Count"
              value={formData.vegCount}
              onChange={handleInputChange}
              min="0"
              required
            />
            <Input
              type="number"
              name="nonVegCount"
              label="Non-Veg Count"
              value={formData.nonVegCount}
              onChange={handleInputChange}
              min="0"
              required
            />
          </div>
          {/* 💰 Registration Amount */}
          <div className="border-t border-white/10 pt-4">
            <Input
              name="amount"
              label="Registration Amount (₹)"
              value={`₹ ${formData.amount}`}
              readOnly
              className="bg-white/10 text-neonOrange font-bold cursor-not-allowed"
            />
            <p className="text-xs text-gray-400 mt-1">
              {type === "ev"
                ? "EV Racing: ₹1600 per team"
                : "₹300 per participant"}
            </p>
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
                <span className="text-neonBlue">
                  {BANK_DETAILS.accountHolder}
                </span>
              </div>
              <div>
                <span className="block text-gray-500">Bank Name</span>
                <span className="text-white">{BANK_DETAILS.bankName}</span>
              </div>
              <div>
                <span className="block text-gray-500">Account Number</span>
                <span className="text-white font-mono tracking-wider">
                  {BANK_DETAILS.accountNumber}
                </span>
              </div>
              <div>
                <span className="block text-gray-500">IFSC Code</span>
                <span className="text-white font-mono">
                  {BANK_DETAILS.ifscCode}
                </span>
              </div>
              {/* <div className="col-span-2 border-t border-white/10 pt-2">
                                <span className="block text-gray-500">UPI ID</span>
                                <span className="text-neonOrange font-bold">{BANK_DETAILS.upiId}</span>
                            </div> */}
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
              <label className="block text-sm text-gray-300 mb-2">
                Upload Payment Screenshot *
              </label>
              <input
                type="file"
                accept="image/png,image/jpeg,image/jpg,image/webp"
                onChange={handleFileChange}
                className="text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-neonBlue file:text-black hover:file:bg-white"
                required
              />
            </div>
          </div>

          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              name="termsAccepted"
              checked={formData.termsAccepted}
              onChange={handleInputChange}
              className="w-4 h-4 accent-neonBlue"
              required
            />
            <span className="text-sm text-gray-400">
              I agree to the terms and event rules.
            </span>
          </div>

          <button
            type="submit"
            disabled={
              !formData.termsAccepted ||
              !formData.paymentScreenshot ||
              registrationSuccess ||
              loading
            }
            className={`w-full py-4 font-mech font-bold text-xl uppercase tracking-widest transition-all
              ${loading ? "bg-gray-600 cursor-not-allowed" : "bg-neonBlue text-black hover:bg-white shadow-[0_0_20px_rgba(0,243,255,0.4)]"}
            `}
          >
            {/* {loading ? 'Submitting...' : 'Confirm Registration'} */}
            {registrationSuccess
              ? "Registered"
              : loading
                ? "Submitting..."
                : "Submit"}
          </button>
        </form>
        {/* {toast && toast.type !== "success" && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            className={`fixed bottom-10 right-10 p-4 rounded shadow-lg bg-red-600 text-white z-50`}
          >
            {toast.msg}
          </motion.div>
        )} */}

        {registrationSuccess && (
          <div className="mt-6 p-5 border border-green-500 bg-green-500/10 text-center">
            <p className="text-green-400 font-bold mb-3 whitespace-pre-line">
              🎉 Registration Successful! {"\n"} Check the email for
              confirmation mail
            </p>

            {whatsappLink && (
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 py-3 bg-green-600 text-white font-bold hover:bg-green-700 transition"
              >
                👉 Join WhatsApp Group
              </a>
            )}
          </div>
        )}
      </motion.div>
    </div>
  );
};
export default Register;
