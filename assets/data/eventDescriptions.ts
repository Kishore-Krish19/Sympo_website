// ../assets/data/eventDescriptions.ts
export const EVENT_DESCRIPTIONS: Record<
  string,
  {
    rules: string[];
    themes?: string[];
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
      "Bring yours laptop if possible",
      "Participants can use  CAD software such as Creo,SolidWorks",
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
    "Each team consist of  maximum 3 members",
    "Questions will be based on Computer Science engineering fundamentals",
    "The quiz will be conducted in multiple rounds including MCQ, Rapid Fire, Visual, and Buzzer rounds",
    "Use of mobile phones, electronic devices, or any unfair means is strictly prohibited",
    "Participants must answer within the stipulated time limit for each round",
    "Negative marking may be applicable in certain rounds",
    "A tie-breaker round will be conducted in case of a tie",
    "The quiz master’s decision will be final and binding",
  ],
},


  expo: {
  rules: [
    "Individual participation only",
    "Participants must strictly follow all safety instructions; safety gear is mandatory",
    "Only the tools and materials provided by the organizers must be used",
    "The given component must be fabricated with accurate dimensions",
    "The task must be completed within the stipulated time limit ",
    "Any unsafe practice will result in immediate disqualification",
    "Judges’ decision will be final and binding",
  ],
},


 photo: {
  rules: [
    "Individual participation only",
    "Participants must capture photographs only during the event time",
    "All photographs must be original and taken by the participant",
    "The theme will be announced on the spot and photos must strictly relate to the theme, event activities, or emotions",
    "Mobile phones and DSLR cameras are permitted",
    "Each participant must submit a minimum of 3 and a maximum of 5 photographs",
    "Candid and creative shots are encouraged",
    "Images must be clear, sharp, and properly focused",
    "Basic color correction is allowed; heavy editing or image manipulation is strictly prohibited",
    "Adding text, graphics, or watermarks to images is not allowed",
    "Photographs must be submitted in high-resolution JPEG format",
    "File names must include the participant’s name and photo number",
    "Any copied, downloaded, or plagiarized images will result in immediate disqualification",
    "Judges’ decision will be final and binding",
  ],
},

meme: {
  rules: [
    "The language of the short film must be Tamil only",
    "Duration of the short film must be between 3 to 6 minutes, including title and end credits",
    "Team participation is allowed with a maximum of 3 members",
    "The short film must be submitted in MP4 format (1080p / Full HD recommended)",
    "The story, script, and footage must be completely original",
    "Use of copyrighted music, videos, or images without proper permission is strictly prohibited",
    "Political, religious, or any inappropriate content is strictly prohibited",
    "Title card and end credits are mandatory",
    "The short film must clearly convey the selected theme and its message",
    "Judges’ decision will be final and binding",
  ],
  themes: [
    "Beyond the Screen – Life and reality outside mobile phones and social media",
    "The Last Chance – A moment of hope, change, or redemption",
    "Breaking the Cycle – Ending harmful habits or negative mindsets",
    "Marks Don’t Measure Me – A low-scoring student proving true potential",
  ],
},

// ✅ NOW AT ROOT LEVEL
water_rocketry: {
  rules: [
    "Team size: Maximum 3 members",
    "Build a rocket using plastic bottles, water, and compressed air only",
    "No chemicals, explosives, or sharp objects are allowed",
    "Maximum water level will be specified by the coordinators",
    "Rocket must be launched only from the given launch pad",
    "Design creativity (fins, nose cone, balance) is encouraged",
    "Objective is to achieve maximum height and stable flight",
    "Safety rules must be strictly followed",
    "Judges’ decision will be final",
  ],
},

trebuchet: {
  rules: [
    "Team size: Maximum 3 members",
    "Design and operate a trebuchet (catapult) to launch a projectile",
    "Only provided or approved materials are allowed",
    "Projectile type and weight will be standardized",
    "Focus on accuracy, range, and stability",
    "Each team will be given limited launch attempts",
    "Trebuchet size must be within specified limits",
    "No manual force allowed during launch (gravity-based only)",
    "Unsafe or unstable designs will be disqualified",
    "Judges’ decision will be final",
  ],
},
};