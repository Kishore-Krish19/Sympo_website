// ../assets/data/eventDescriptions.ts
export const EVENT_DESCRIPTIONS: Record<
  string,
  {
    rules: string[];
  }
> = {
  pp: {
    rules: [
      "Individual or team participation (maximum 3 members)",
      "Paper must be original; plagiarism is strictly prohibited",
      "PPT format only",
      "Presentation time: 10-15 minutes followed by Q&A",
      "Judges’ decision will be final",
    ],
  },

  cad: {
    rules: [
      "Individual participation only",
      "Participants may use any CAD software such as Creo,SolidWorks",
      "On-spot 3D modeling challenge",
      "Time-limited design task",
      "Internet access, external files or pre-made models are not allowed",
      "All designs must be created during the competition time only",
      "Judging based on accuracy and creativity",
      "Decision of judges is final",
      
    ],
  },

  quiz: {
  rules: [
    "Each team must consist of 3 maximum  members",
    "The quiz will be conducted in multiple rounds including MCQ, Rapid Fire, Visual, and Buzzer rounds",
    "Use of mobile phones, electronic devices, or any unfair means is strictly prohibited",
    "Participants must answer within the stipulated time limit for each round",
    "Negative marking may be applicable in certain rounds",
    "A tie-breaker round will be conducted in case of a tie",
    "The quiz master’s decision will be final and binding",
    "Questions will be based on mechanical engineering fundamentals",
  ],
},


  expo: {
  rules: [
    "Individual participation only",
    "Participants must strictly follow all safety instructions; safety gear is mandatory",
    "Only the tools and materials provided by the organizers may be used",
    "The given component must be fabricated with accurate dimensions",
    "The task must be completed within the stipulated time limit (60–90 minutes)",
    "Any unsafe practice will result in immediate disqualification",
    "Judges’ decision will be final and binding",
  ],
},


  photo: {
    rules: [
      "Individual participation only",
      "Photographs must be original",
      "Theme will be announced on the spot",
      "Basic editing allowed; no manipulation",
      "Plagiarism will result in disqualification",
    ],
  },

  meme: {
    rules: [
      "Language of the short film must be Tamil only",
      "Duration: 3 to 6 minutes (including title and credits)",
      "Team size: Maximum 3 members",
      "Submission format: MP4, 1080p (Full HD recommended)",
      "Story, script, and footage must be completely original",
      "No copyrighted music, videos, or images without permission",
      "Political, religious, or inappropriate content is strictly prohibited",
      "Title card and end credits are mandatory",
      "The film must clearly convey the selected theme and message",

      "Themes:",
      "Beyond the Screen – Life and reality outside mobile phones and social media",
      "The Last Chance – A moment of hope, change, or redemption",
      "Breaking the Cycle – Ending harmful habits or negative mindsets",
      "Marks Don’t Measure Me – A low-scoring student proving true potential",
    ],
  },
};
