/* ==========================================================================
   KALZ LEARN — AI SKILL PATH ASSESSMENT
   ========================================================================== */

const assessmentOptions = {

  experience: {
    question: "Where are you right now?",
    options: [
      {
        value: "complete-beginner",
        label: "I'm completely new to AI"
      },
      {
        value: "ai-tool-user",
        label: "I've used AI tools but haven't studied AI"
      },
      {
        value: "ai-learner",
        label: "I've started learning AI"
      },
      {
        value: "some-experience",
        label: "I already have some AI experience"
      }
    ]
  },


  interest: {
    question: "What kind of AI work interests you most?",
    options: [
      {
        value: "images",
        label: "Working with images"
      },
      {
        value: "text",
        label: "Working with text"
      },
      {
        value: "audio",
        label: "Working with audio"
      },
      {
        value: "video",
        label: "Working with video"
      },
      {
        value: "evaluation",
        label: "Evaluating AI responses"
      },
      {
        value: "unsure",
        label: "I'm not sure yet"
      }
    ]
  },


  goal: {
    question: "What do you want to achieve?",
    options: [
      {
        value: "practical-skill",
        label: "Learn a practical AI skill"
      },
      {
        value: "portfolio",
        label: "Build an AI portfolio"
      },
      {
        value: "beginner-work",
        label: "Prepare for beginner AI work"
      },
      {
        value: "freelancing",
        label: "Prepare for AI-related freelancing"
      },
      {
        value: "explore",
        label: "Explore AI before choosing a direction"
      }
    ]
  },


  time: {
    question: "How much time can you realistically give it?",
    options: [
      {
        value: "few-hours",
        label: "A few hours a week"
      },
      {
        value: "one-hour-day",
        label: "About 1 hour a day"
      },
      {
        value: "two-plus-hours",
        label: "2+ hours a day"
      },
      {
        value: "unsure",
        label: "I'm not sure yet"
      }
    ]
  }

};