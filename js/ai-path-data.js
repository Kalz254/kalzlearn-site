/* ==========================================================================
   KALZ LEARN — AI PATH MAP
   ==========================================================================
   This file contains the knowledge base used by the AI Skill Path Finder.

   IMPORTANT:
   - This is NOT the user's profile.
   - It contains the possible learning paths.
   - calculateProfile() will later decide which path is appropriate.
   ========================================================================== */

const aiPathMap = {

  /* ==========================================================================
     1. VISUAL AI DATA
     ========================================================================== */

  "visual-ai-data": {
    id: "visual-ai-data",

    identity: "Visual Data Practitioner",

    name: "Visual AI Data",
    shortName: "Visual Data",

    description:
      "Learn how images are labeled and prepared as training data for AI systems.",

    bestFor:
      "Learners who enjoy working with images, visual information and structured labeling tasks.",

    entrySkill: "Image Classification",

    skills: [
      {
        id: "image-classification",
        name: "Image Classification",
        level: "beginner",
        prerequisite: null,
        description:
          "Learn how to assign meaningful categories or labels to images.",
        portfolioProject:
          "Create a small image classification dataset and document the labels and rules you used.",
        workshop: "Classification Workshop"
      },

      {
        id: "object-detection",
        name: "Object Detection",
        level: "beginner",
        prerequisite: "image-classification",
        description:
          "Learn how to locate objects in images using bounding boxes.",
        portfolioProject:
          "Annotate a small dataset using bounding boxes and document your annotation guidelines.",
        workshop: "Object Detection Workshop"
      },

      {
        id: "image-segmentation",
        name: "Image Segmentation",
        level: "intermediate",
        prerequisite: "object-detection",
        description:
          "Learn how to identify precise regions or objects within an image.",
        portfolioProject:
          "Create a segmentation sample showing how individual objects or regions were separated.",
        workshop: "Segmentation Workshop"
      },

      {
        id: "visual-quality-control",
        name: "Visual Annotation Quality Control",
        level: "intermediate",
        prerequisite: "image-segmentation",
        description:
          "Learn how to identify annotation errors and check dataset consistency.",
        portfolioProject:
          "Create a visual annotation QA report showing common errors and how they were corrected.",
        workshop: "AI Data Quality Workshop"
      }
    ],

    progression: [
      "image-classification",
      "object-detection",
      "image-segmentation",
      "visual-quality-control"
    ]
  },


  /* ==========================================================================
     2. LANGUAGE AI DATA
     ========================================================================== */

  "language-ai-data": {
    id: "language-ai-data",

    identity: "Language Data Practitioner",

    name: "Language AI Data",
    shortName: "Language Data",

    description:
      "Learn how text is labeled and structured to help AI systems understand language.",

    bestFor:
      "Learners who enjoy reading, writing, categorizing information and working with language.",

    entrySkill: "Text Classification",

    skills: [
      {
        id: "text-classification",
        name: "Text Classification",
        level: "beginner",
        prerequisite: null,
        description:
          "Learn how to categorize text according to predefined labels or intents.",
        portfolioProject:
          "Create a small text classification dataset using clear categories and annotation rules.",
        workshop: "Text Classification Workshop"
      },

      {
        id: "sentiment-analysis",
        name: "Sentiment Annotation",
        level: "beginner",
        prerequisite: "text-classification",
        description:
          "Learn how to label text according to sentiment or emotional tone.",
        portfolioProject:
          "Annotate a small collection of text examples and document your sentiment guidelines.",
        workshop: "Sentiment Annotation Workshop"
      },

      {
        id: "entity-tagging",
        name: "Entity Tagging",
        level: "intermediate",
        prerequisite: "text-classification",
        description:
          "Learn how to identify and label entities such as people, places, organizations and products.",
        portfolioProject:
          "Create a named-entity annotation sample with clearly documented labeling rules.",
        workshop: "Entity Tagging Workshop"
      },

      {
        id: "language-quality-control",
        name: "Language Data Quality Control",
        level: "intermediate",
        prerequisite: "entity-tagging",
        description:
          "Learn how to review text annotations for consistency, accuracy and guideline compliance.",
        portfolioProject:
          "Create a language annotation QA report identifying and correcting common labeling errors.",
        workshop: "AI Data Quality Workshop"
      }
    ],

    progression: [
      "text-classification",
      "sentiment-analysis",
      "entity-tagging",
      "language-quality-control"
    ]
  },


  /* ==========================================================================
     3. AUDIO AI DATA
     ========================================================================== */

  "audio-ai-data": {
    id: "audio-ai-data",

    identity: "Audio Data Practitioner",

    name: "Audio AI Data",
    shortName: "Audio Data",

    description:
      "Learn how spoken language and other audio signals are converted into structured data for AI.",

    bestFor:
      "Learners who are comfortable listening carefully, transcribing speech and working with audio.",

    entrySkill: "Audio Transcription",

    skills: [
      {
        id: "audio-transcription",
        name: "Audio Transcription",
        level: "beginner",
        prerequisite: null,
        description:
          "Learn how spoken audio is converted into accurate written text.",
        portfolioProject:
          "Create a short transcription sample and document the transcription conventions you followed.",
        workshop: "Transcription Workshop"
      },

      {
        id: "speaker-identification",
        name: "Speaker Identification",
        level: "beginner",
        prerequisite: "audio-transcription",
        description:
          "Learn how to distinguish and label different speakers in an audio recording.",
        portfolioProject:
          "Create a multi-speaker transcription sample with clear speaker labels.",
        workshop: "Speaker Identification Workshop"
      },

      {
        id: "audio-classification",
        name: "Audio Classification",
        level: "intermediate",
        prerequisite: "audio-transcription",
        description:
          "Learn how to categorize audio according to predefined sound classes.",
        portfolioProject:
          "Create a small audio classification dataset with documented labeling rules.",
        workshop: "Audio Classification Workshop"
      },

      {
        id: "audio-quality-control",
        name: "Audio Data Quality Control",
        level: "intermediate",
        prerequisite: "audio-classification",
        description:
          "Learn how to review transcription and audio labels for consistency and accuracy.",
        portfolioProject:
          "Create an audio QA report showing transcription and labeling issues and their corrections.",
        workshop: "AI Data Quality Workshop"
      }
    ],

    progression: [
      "audio-transcription",
      "speaker-identification",
      "audio-classification",
      "audio-quality-control"
    ]
  },


  /* ==========================================================================
     4. VIDEO AI DATA
     ========================================================================== */

  "video-ai-data": {
    id: "video-ai-data",

    identity: "Video Data Practitioner",

    name: "Video AI Data",
    shortName: "Video Data",

    description:
      "Learn how objects and events are labeled across video frames to create training data for AI.",

    bestFor:
      "Learners who enjoy visual content and are comfortable working with sequences of images or video.",

    entrySkill: "Video Annotation",

    skills: [
      {
        id: "video-annotation",
        name: "Video Annotation",
        level: "beginner",
        prerequisite: null,
        description:
          "Learn how objects and relevant events are identified and labeled in video.",
        portfolioProject:
          "Create a short video annotation sample and document the objects and labeling rules used.",
        workshop: "Video Annotation Workshop"
      },

      {
        id: "object-tracking",
        name: "Object Tracking",
        level: "intermediate",
        prerequisite: "video-annotation",
        description:
          "Learn how to maintain object identities as they move across video frames.",
        portfolioProject:
          "Create an object-tracking sample showing consistent object identities across several frames.",
        workshop: "Object Tracking Workshop"
      },

      {
        id: "temporal-annotation",
        name: "Temporal Annotation",
        level: "intermediate",
        prerequisite: "object-tracking",
        description:
          "Learn how to identify events or actions occurring over specific periods of a video.",
        portfolioProject:
          "Create a temporal annotation sample identifying defined events and their start/end points.",
        workshop: "Video Annotation Workshop"
      },

      {
        id: "video-quality-control",
        name: "Video Data Quality Control",
        level: "intermediate",
        prerequisite: "temporal-annotation",
        description:
          "Learn how to review video annotations for consistency across frames and events.",
        portfolioProject:
          "Create a video annotation QA report showing common tracking and labeling errors.",
        workshop: "AI Data Quality Workshop"
      }
    ],

    progression: [
      "video-annotation",
      "object-tracking",
      "temporal-annotation",
      "video-quality-control"
    ]
  },


  /* ==========================================================================
     5. AI EVALUATION
     ========================================================================== */

  "ai-evaluation": {
    id: "ai-evaluation",

    identity: "AI Evaluation Practitioner",

    name: "AI Evaluation",
    shortName: "AI Evaluation",

    description:
      "Learn how AI outputs can be reviewed, compared and evaluated using clear criteria.",

    bestFor:
      "Learners who enjoy critical thinking, comparing responses and identifying quality or accuracy issues.",

    entrySkill: "AI Response Evaluation",

    skills: [
      {
        id: "response-evaluation",
        name: "AI Response Evaluation",
        level: "beginner",
        prerequisite: null,
        description:
          "Learn how to assess AI-generated responses against defined criteria.",
        portfolioProject:
          "Create an evaluation sample comparing AI responses using a documented scoring rubric.",
        workshop: "AI Evaluation Workshop"
      },

      {
        id: "evaluation-rubrics",
        name: "Evaluation Rubrics",
        level: "beginner",
        prerequisite: "response-evaluation",
        description:
          "Learn how structured criteria can be used to evaluate AI outputs consistently.",
        portfolioProject:
          "Create a simple evaluation rubric and apply it to a set of AI responses.",
        workshop: "AI Evaluation Workshop"
      },

      {
        id: "error-identification",
        name: "AI Error Identification",
        level: "intermediate",
        prerequisite: "evaluation-rubrics",
        description:
          "Learn how to identify different types of problems in AI-generated outputs.",
        portfolioProject:
          "Create an AI evaluation case study documenting response errors and the reasoning behind each judgment.",
        workshop: "AI Evaluation Workshop"
      },

      {
        id: "evaluation-quality-control",
        name: "Evaluation Quality Control",
        level: "intermediate",
        prerequisite: "error-identification",
        description:
          "Learn how to improve consistency when evaluating AI outputs.",
        portfolioProject:
          "Create an evaluation QA report showing inconsistent judgments and how they can be resolved.",
        workshop: "AI Data Quality Workshop"
      }
    ],

    progression: [
      "response-evaluation",
      "evaluation-rubrics",
      "error-identification",
      "evaluation-quality-control"
    ]
  },


  /* ==========================================================================
     6. AI EXPLORER
     ========================================================================== */

  "ai-explorer": {
    id: "ai-explorer",

    identity: "AI Explorer",

    name: "AI Foundations",
    shortName: "AI Foundations",

    description:
      "Build a broad understanding of practical AI work before choosing a specialization.",

    bestFor:
      "Learners who are curious about AI but don't yet know which practical direction suits them.",

    entrySkill: "AI Data Fundamentals",

    skills: [
      {
        id: "ai-data-fundamentals",
        name: "AI Data Fundamentals",
        level: "beginner",
        prerequisite: null,
        description:
          "Understand how data is collected, labeled, reviewed and used in AI development.",
        portfolioProject:
          "Create a beginner AI data case study explaining an annotation workflow from raw data to quality control.",
        workshop: "AI Data Fundamentals Workshop"
      },

      {
        id: "annotation-overview",
        name: "Annotation Methods Overview",
        level: "beginner",
        prerequisite: "ai-data-fundamentals",
        description:
          "Understand the major types of image, text, audio and video annotation.",
        portfolioProject:
          "Create a comparison project showing four different annotation methods and when each is used.",
        workshop: "AI Annotation Fundamentals Workshop"
      },

      {
        id: "path-selection",
        name: "AI Path Selection",
        level: "beginner",
        prerequisite: "annotation-overview",
        description:
          "Use practical experience to identify the AI data specialization that fits you best.",
        portfolioProject:
          "Create a personal AI skills roadmap based on your strongest interests and demonstrated skills.",
        workshop: "AI Beginner Roadmap Workshop"
      }
    ],

    progression: [
      "ai-data-fundamentals",
      "annotation-overview",
      "path-selection"
    ]
  }

};


/* ==========================================================================
   HELPER FUNCTIONS
   ========================================================================== */

/**
 * Get a complete learning path.
 */
function getAIPath(pathId) {
  return aiPathMap[pathId] || aiPathMap["ai-explorer"];
}


/**
 * Get a specific skill from a learning path.
 */
function getAISkill(pathId, skillId) {

  const path = getAIPath(pathId);

  return path.skills.find(skill => skill.id === skillId) || path.skills[0];
}


/**
 * Get the first skill in a learning path.
 */
function getEntrySkill(pathId) {

  const path = getAIPath(pathId);

  return path.skills[0];
}


/**
 * Get the next skill after the current skill.
 */
function getNextSkill(pathId, currentSkillId) {

  const path = getAIPath(pathId);

  const currentIndex =
    path.progression.indexOf(currentSkillId);

  if (
    currentIndex === -1 ||
    currentIndex >= path.progression.length - 1
  ) {
    return null;
  }

  const nextSkillId =
    path.progression[currentIndex + 1];

  return getAISkill(pathId, nextSkillId);
}


/**
 * Get the recommended portfolio project.
 */
function getPortfolioProject(pathId, skillId) {

  const skill = getAISkill(pathId, skillId);

  return skill.portfolioProject;
}


/**
 * Get the recommended workshop.
 */
function getRecommendedWorkshop(pathId, skillId) {

  const skill = getAISkill(pathId, skillId);

  return {
    title: skill.workshop,
    skill: skill.name
  };
}