// ../assets/data/eventDescriptions.ts
export const EVENT_DESCRIPTIONS: Record<
  string,
  {
    overview: string;
    rules?: string[];
    eligibility?: string;
    format?: string;
  }
> = {
  pp: {
    overview:
      "Paper Presentation is a technical event where participants present innovative ideas, research findings, or technical solutions before a panel of judges.",
    rules: [
      "Individual or team participation (maximum 3 members)",
      "Paper must be original; plagiarism is strictly prohibited.",
      "PPT format only",
    ],
    eligibility: "Open to all engineering students",
    format: "Offline presentation",
  },

  cad: {
    overview:
      "3D Modeling challenges participants to design mechanical components using CAD tools like Fusion 360 or SolidWorks.",
    rules: [
      "Individual participation",
      "Time-limited design challenge",
      "Judging based on accuracy and creativity",
    ],
    format: "On-spot design task",
  },

  quiz: {
    overview:
      "Mech Core Quiz tests your knowledge in mechanical engineering fundamentals through multiple rounds.",
    rules: [
      "Team of 2 members",
      "Prelims + Finals",
      "No mobile phones allowed",
    ],
  },

  expo: {
    overview:
      "Legend in a Lathe is a machining-based event where participants showcase hands-on skills using conventional machines.",
    rules: [
      "Individual participation",
      "Safety gear mandatory",
      "Time-bound machining task",
    ],
  },

  photo: {
    overview:
      "Photography contest challenges participants to capture creative moments based on given themes.",
  },

  meme: {
    overview:
      "Short Film event encourages storytelling through short videos with creativity and originality.",
  },
};
