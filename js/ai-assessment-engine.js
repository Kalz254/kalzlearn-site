/* ==========================================================================
   KALZ LEARN — DATA ANNOTATION ASSESSMENT ENGINE
   ========================================================================== */

/**
 * Gets the active question data for step 0 (Q1) or step 1 (Q2).
 */
function getQuestionData(stepIndex, selectedBranch = null) {
  if (stepIndex === 0) {
    return assessmentData.q1;
  }
  
  if (stepIndex === 1 && selectedBranch && assessmentData.q2_branches[selectedBranch]) {
    return assessmentData.q2_branches[selectedBranch];
  }

  return null;
}

/**
 * Resolves the assessment outcome matching the exact user option from Q2.
 */
function runAssessment(userAnswers = {}) {
  // Read the specific targetPath resolved from Q2
  const selectedTargetPath = userAnswers.q2_targetPath || defaultAIPath;
  const categoryData = aiPathMap[selectedTargetPath] || aiPathMap[defaultAIPath];

  return {
    profile: {
      broadCategory: userAnswers.q1_branch || "image-annotation",
      specificPath: selectedTargetPath,
      q1Answer: userAnswers.q1_option || null,
      q2Answer: userAnswers.q2_option || null
    },
    details: categoryData
  };
}