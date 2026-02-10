// ../pages/WorkshopDescription.tsx
import React from "react";
import { useParams, Link } from "react-router-dom";
import { WORKSHOP_DESCRIPTIONS, WORKSHOP_CONFIG } from "../constants";

const WorkshopDescription: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  if (!id || !WORKSHOP_DESCRIPTIONS[id as keyof typeof WORKSHOP_DESCRIPTIONS]) {
    return (
      <div className="min-h-screen pt-24 flex items-center justify-center">
        <p className="text-white text-xl">Description not available</p>
      </div>
    );
  }

  const workshop = WORKSHOP_DESCRIPTIONS[id as keyof typeof WORKSHOP_DESCRIPTIONS];
  const config = WORKSHOP_CONFIG[id as keyof typeof WORKSHOP_CONFIG];

  return (
    <div className="min-h-screen pt-24 px-4 container mx-auto max-w-3xl pb-20">
      {/* TITLE */}
      <h1 className="text-4xl md:text-5xl font-mech text-white mb-8 uppercase">
        {workshop.title}
      </h1>

      {/* DESCRIPTION CARD */}
      <div className="bg-white/5 border border-white/10 p-6 md:p-8 rounded-lg">
        <h2 className="text-xl font-mech text-white mb-4 uppercase">
          Workshop Description
        </h2>

        <ul className="list-disc list-inside text-gray-300 space-y-2">
          {workshop.description.map((point, index) => (
            <li key={index}>{point}</li>
          ))}
        </ul>
      </div>

      {/* ACTION BUTTONS */}
      <div className="flex gap-4 mt-10">
        {/* BACK */}
        <Link to={`/workshop/${id}`}>
          <button
            className="px-6 py-3 text-sm font-mech uppercase
            border border-white/30 text-white
            hover:bg-white hover:text-black transition rounded"
          >
            Back
          </button>
        </Link>

        {/* REGISTER */}
        <Link to={config.registerPath}>
          <button
            className={`px-6 py-3 text-sm font-mech uppercase
            ${config.headingColor.replace("text", "bg")}
            text-black hover:bg-white transition rounded shadow`}
          >
            Register
          </button>
        </Link>
      </div>
    </div>
  );
};

export default WorkshopDescription;
