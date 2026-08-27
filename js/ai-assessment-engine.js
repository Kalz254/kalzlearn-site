/* ==========================================================================
   KALZ LEARN — AI ASSESSMENT ENGINE
   ========================================================================== */


/* ==========================================================================
   PATH TRANSLATION
   ========================================================================== */

const interestToPath = {
  images: "visual-ai-data",
  text: "language-ai-data",
  audio: "audio-ai-data",
  video: "video-ai-data",
  evaluation: "ai-evaluation"
};


/* ==========================================================================
   EXPERIENCE WEIGHTS
   ========================================================================== */

const experienceWeights = {
  "complete-beginner": 0,
  "ai-tool-user": 1,
  "ai-learner": 2,
  "some-experience": 3
};


/* ==========================================================================
   GOAL WEIGHTS
   ========================================================================== */

const goalWeights = {
  "practical-skill": 1,
  "portfolio": 2,
  "beginner-work": 3,
  "freelancing": 3,
  "explore": 0
};


/* ==========================================================================
   TIME WEIGHTS
   ========================================================================== */

const timeWeights = {
  "few-hours": 0,
  "one-hour-day": 1,
  "two-plus-hours": 2,
  "unsure": 0
};


/* ==========================================================================
   CALCULATE USER PROFILE
   ========================================================================== */

function calculateProfile(answers) {

  const experienceScore =
    experienceWeights[answers.experience] ?? 0;

  const goalScore =
    goalWeights[answers.goal] ?? 0;

  const timeScore =
    timeWeights[answers.time] ?? 0;


  /* ----------------------------------------------------
     READINESS
  ---------------------------------------------------- */

  let readinessScore =
    (experienceScore * 3) +
    (goalScore * 2) +
    timeScore;


  /* ----------------------------------------------------
     CAP READINESS
  ---------------------------------------------------- */

  readinessScore = Math.min(readinessScore, 16);


  /* ----------------------------------------------------
     DETERMINE CAREER / LEARNING STAGE
  ---------------------------------------------------- */

  let stage;

  if (answers.goal === "explore") {

    stage = "explorer";

  } else if (readinessScore <= 3) {

    stage = "foundation";

  } else if (readinessScore <= 7) {

    stage = "learner";

  } else if (readinessScore <= 11) {

    stage = "practitioner";

  } else {

    stage = "portfolio-builder";

  }


  /* ----------------------------------------------------
     DETERMINE PATH
  ---------------------------------------------------- */

  let pathId;

  if (answers.interest === "unsure") {

    pathId = "ai-explorer";

  } else {

    pathId =
      interestToPath[answers.interest] ||
      "ai-explorer";

  }


  /* ----------------------------------------------------
     GET PATH
  ---------------------------------------------------- */

  const path = getAIPath(pathId);


  /* ----------------------------------------------------
     DETERMINE STARTING SKILL
  ---------------------------------------------------- */

  let startingSkill =
    getEntrySkill(pathId);


  /*
     More experienced learners can skip the absolute
     first step in certain paths.
  */

  if (
    experienceScore >= 2 &&
    answers.goal !== "explore" &&
    path.skills.length > 1
  ) {

    startingSkill = path.skills[1];

  }


  /* ----------------------------------------------------
     PORTFOLIO PRIORITY
  ---------------------------------------------------- */

  const portfolioPriority =
    (
      answers.goal === "portfolio" ||
      answers.goal === "beginner-work" ||
      answers.goal === "freelancing"
    )
      ? "high"
      : "normal";


  /* ----------------------------------------------------
     LEARNING PACE
  ---------------------------------------------------- */

  let pace;

  switch (answers.time) {

    case "few-hours":
      pace = "steady";
      break;

    case "one-hour-day":
      pace = "consistent";
      break;

    case "two-plus-hours":
      pace = "accelerated";
      break;

    default:
      pace = "flexible";

  }


  /* ----------------------------------------------------
     RECOMMENDED NEXT SKILL
  ---------------------------------------------------- */

  const nextSkill =
    getNextSkill(
      pathId,
      startingSkill.id
    );


  /* ----------------------------------------------------
     FINAL PROFILE
     ----------------------------------------------------

     IMPORTANT:

     This object is internal.

     We do NOT print it directly to the user.

  ---------------------------------------------------- */

  return {

    experienceScore,
    goalScore,
    timeScore,
    readinessScore,

    stage,

    pathId,

    pathName: path.name,

    identity: path.identity,

    startingSkillId: startingSkill.id,

    startingSkillName: startingSkill.name,

    startingSkillLevel: startingSkill.level,

    nextSkillId: nextSkill
      ? nextSkill.id
      : null,

    nextSkillName: nextSkill
      ? nextSkill.name
      : null,

    portfolioPriority,

    pace,

    portfolioProject:
      startingSkill.portfolioProject,

    recommendedWorkshop:
      startingSkill.workshop

  };

}