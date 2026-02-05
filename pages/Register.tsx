import React, { useState, ChangeEvent } from "react";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { RegistrationForm } from "../types";
import { submitRegistration } from "../services/api";
import { Input } from "../components/Input";
import { Plus, Trash2, Upload } from "lucide-react";

const Register: React.FC = () => {
  const { type } = useParams<{ type: string }>();
  const [loading, setLoading] = useState(false);
  const [paymentFile, setPaymentFile] = useState<File | null>(null);

  const [formData, setFormData] = useState<RegistrationForm>({
    teamName: "",
    teamLeaderName: "",
    collegeName: "",
    department: "",
    yearOfStudy: "",
    leaderPhone: "",
    whatsappNumber: "",
    email: "",
    teamSize: 1,
    teamMembers: [],
    vegCount: 0,
    nonVegCount: 0,
    termsAccepted: false,
    paymentScreenshot: "",
    paymentFileName: ""
  });

  /* ---------------- FILE → BASE64 ---------------- */
  const fileToBase64 = (file: File): Promise<string> =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result as string);
      reader.onerror = reject;
    });

  /* ---------------- HELPERS ---------------- */
  const getTitle = () => {
    switch (type) {
      case "tech": return "Technical Event Registration";
      case "non-tech": return "Non-Tech Registration";
      case "workshop": return "Workshop Registration";
      case "ev": return "EV Racing Registration";
      default: return "Registration";
    }
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value
    }));
  };

  /* ---------------- TEAM MEMBERS ---------------- */
  const addMember = () => {
    setFormData(prev => ({
      ...prev,
      teamSize: prev.teamSize + 1,
      teamMembers: [...prev.teamMembers, ""]
    }));
  };

  const removeMember = (index: number) => {
    const members = formData.teamMembers.filter((_, i) => i !== index);
    setFormData(prev => ({
      ...prev,
      teamSize: prev.teamSize - 1,
      teamMembers: members
    }));
  };

  const handleMemberChange = (index: number, value: string) => {
    const members = [...formData.teamMembers];
    members[index] = value;
    setFormData(prev => ({ ...prev, teamMembers: members }));
  };

  /* ---------------- FILE INPUT ---------------- */
  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files || !e.target.files[0]) return;
    const file = e.target.files[0];
    setPaymentFile(file);
    setFormData(prev => ({ ...prev, paymentFileName: file.name }));
  };

  /* ---------------- SUBMIT ---------------- */
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!paymentFile) {
      alert("Upload payment screenshot");
      return;
    }

    setLoading(true);

    try {
      const base64Image = await fileToBase64(paymentFile);

      const payload = {
        ...formData,
        paymentScreenshot: base64Image
      };

      payload.teamMembers = payload.teamMembers.filter(
        (m) => m.trim() !== ""
      );

      delete (payload as any).termsAccepted;

      const result = await submitRegistration(type || "tech", payload);


      alert(result.success ? "Registration successful!" : "Submission failed");
    } catch (err) {
      console.error(err);
      alert("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen pt-24 pb-20 px-4 container mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-3xl mx-auto bg-black/60 border border-white/10 backdrop-blur-lg p-8 rounded-xl"
      >
        <h1 className="text-3xl font-mech text-neonBlue mb-8 text-center uppercase">
          {getTitle()}
        </h1>

        <form onSubmit={handleSubmit} className="space-y-6">
          <Input name="teamName" label="Team Name" value={formData.teamName} onChange={handleInputChange} required />
          <Input name="teamLeaderName" label="Team Leader" value={formData.teamLeaderName} onChange={handleInputChange} required />
          <Input name="collegeName" label="College Name" value={formData.collegeName} onChange={handleInputChange} required />

          <div className="grid md:grid-cols-3 gap-6">
            <Input name="department" label="Department" value={formData.department} onChange={handleInputChange} required />
            <Input name="yearOfStudy" label="Year" value={formData.yearOfStudy} onChange={handleInputChange} required />
            <Input type="number" name="teamSize" label="Members" value={formData.teamSize} readOnly />
          </div>

          <div className="space-y-4">
            {formData.teamMembers.map((m, i) => (
              <div key={i} className="flex gap-2">
                <Input value={m} onChange={e => handleMemberChange(i, e.target.value)} placeholder={`Member ${i + 2}`} />
                <button type="button" onClick={() => removeMember(i)} className="text-red-500">
                  <Trash2 />
                </button>
              </div>
            ))}
            <button type="button" onClick={addMember} className="flex items-center gap-2 text-neonOrange">
              <Plus size={16} /> Add Member
            </button>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <Input type="number" name="vegCount" label="Veg Count" value={formData.vegCount} onChange={handleInputChange} />
            <Input type="number" name="nonVegCount" label="Non-Veg Count" value={formData.nonVegCount} onChange={handleInputChange} />
          </div>

          <div className="border border-dashed p-6 text-center">
            <Upload className="mx-auto mb-2" />
            <input type="file" accept="image/*" onChange={handleFileChange} required />
          </div>

          <div className="flex items-center gap-2">
            <input type="checkbox" name="termsAccepted" checked={formData.termsAccepted} onChange={handleInputChange} required />
            <span className="text-sm">I agree to the terms</span>
          </div>

          <button
            type="submit"
            disabled={loading || !formData.termsAccepted}
            className="w-full py-4 bg-neonBlue text-black font-mech"
          >
            {loading ? "Submitting..." : "Confirm Registration"}
          </button>
        </form>
      </motion.div>
    </div>
  );
};

export default Register;
