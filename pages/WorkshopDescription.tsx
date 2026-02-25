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

  const workshop =
    WORKSHOP_DESCRIPTIONS[id as keyof typeof WORKSHOP_DESCRIPTIONS];
  const config = WORKSHOP_CONFIG[id as keyof typeof WORKSHOP_CONFIG];

  return (
    <div className="min-h-screen pt-24 px-4 container mx-auto max-w-3xl pb-20">
      {/* TITLE */}
      <h1 className="text-4xl md:text-5xl font-mech text-[var(--text-primary)] mb-8 uppercase">
        {workshop.title}
      </h1>

      {/* DESCRIPTION CARD */}
      <div className="bg-[var(--bg-card)] border border-[var(--border-nontech)] p-6 md:p-8 rounded-lg">
        <h2 className="text-xl font-mech text-[var(--text-primary)] mb-6 uppercase">
          Workshop Description
        </h2>

        <ul className="space-y-2 text-[var(--text-secondary)]">
          {workshop.description.map((point, index) => {
            /* SECTION HEADINGS */
            if (point.endsWith(":")) {
              return (
                <li key={index} className="list-none mt-6">
                  <div className="h-px w-full bg-[var(--border-nontech)] mb-3" />
                  <span className="text-[var(--text-primary)] font-mech uppercase tracking-wider">
                    {point}
                  </span>
                </li>
              );
            }

            /* SUB-BULLETS */
            if (point.trim().startsWith("•")) {
              const content = point.replace("•", "").trim();

              // LINK DETECTION
              if (content.includes("http")) {
                const [label, url] = content.split("http");
                return (
                  <li key={index} className="ml-6 list-disc text-[var(--text-secondary)]">
                    {label}
                    <a
                      href={`http${url}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-400 hover:underline ml-1"
                    >
                      http{url}
                    </a>
                  </li>
                );
              }

              return (
                <li key={index} className="ml-6 list-disc text-[var(--text-secondary)]">
                  {content}
                </li>
              );
            }

            /* NORMAL TEXT */
            return (
              <li key={index} className="ml-4 list-disc text-[var(--text-secondary)]">
                {point}
              </li>
            );
          })}
        </ul>
      </div>

      {/* ACTION BUTTONS */}
      <div className="flex gap-4 mt-10">
        {/* BACK */}
        <Link to={`/workshop/${id}`}>
          <button
            className="px-6 py-3 text-sm font-mech uppercase
            border border-[var(--border-nontech)] text-[var(--text-primary)]
            hover:bg-[var(--bg-card)] hover:text-[var(--text-primary)] transition rounded"
          >
            Back
          </button>
        </Link>

        {/* REGISTER */}
        <Link to={config.registerPath}>
          <button
            className={`px-6 py-3 text-sm font-mech uppercase
            ${config.headingColor.replace("text", "bg")}
            text-[var(--text-primary)] hover:bg-[var(--bg-card)] hover:text-[var(--text-primary)] transition rounded shadow`}
          >
            Register
          </button>
        </Link>
      </div>
    </div>
  );
};

export default WorkshopDescription;
