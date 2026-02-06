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
      "Presentation time: 6–8 minutes followed by Q&A",
      "Judges’ decision will be final",
    ],
  },

  cad: {
    rules: [
      "Individual participation only",
      "On-spot 3D modeling challenge",
      "Time-limited design task",
      "Judging based on accuracy and creativity",
      "Decision of judges is final",
    ],
  },

  quiz: {
    rules: [
      "Team of 2 members",
      "Prelims followed by Finals",
      "No mobile phones or electronic devices allowed",
      "Questions based on mechanical engineering fundamentals",
      "Quiz master’s decision will be final",
    ],
  },

  expo: {
    rules: [
      "Individual participation only",
      "Safety gear is mandatory",
      "Task must be completed within the given time",
      "Unsafe practices lead to immediate disqualification",
      "Judges’ decision will be final",
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
