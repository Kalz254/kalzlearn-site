/* ==========================================================================
   KALZ LEARN — DATA ANNOTATION DETAILED PATH MAP
   ========================================================================== */

const aiPathMap = {

  // --- IMAGE SUB-PATHS ---
  "image-bounding-boxes": {
    title: "Bounding Box Image Annotation",
    summary: "Your ideal path is learning object detection through precise 2D and 3D bounding boxes.",
    explanation: "Bounding box annotation is fundamental for computer vision systems like autonomous vehicles and retail AI. You'll master labeling target objects, handling occlusions, and maintaining tight bounding margins.",
    currentStepIndex: 0,
    skills: [
      "2D Bounding Box Placement",
      "Handling Object Occlusion & Overlaps",
      "Class Label Assignment",
      "Tight Edge Alignment Guidelines",
      "Quality Assurance & Intersection over Union (IoU)"
    ],
    recommendedResource: {
      title: "Bounding Box & Object Detection Hub",
      reason: "Learn hands-on bounding box techniques, labeling guidelines, and best practices for computer vision.",
      url: "path/image-annotation.html#bounding-boxes",
      buttonText: "Explore Bounding Box Path →"
    }
  },

  "image-classification": {
    title: "Image Classification Annotation",
    summary: "Your starting point is single and multi-label image categorization.",
    explanation: "Image classification forms the baseline of computer vision, training models to identify the primary subject, scene context, or visual properties of an entire image.",
    currentStepIndex: 0,
    skills: [
      "Single-label & Multi-label Classification",
      "Taxonomy & Label Hierarchy Creation",
      "Scene Context Tagging",
      "Edge-case & Ambiguity Resolution"
    ],
    recommendedResource: {
      title: "Image Classification Hub",
      reason: "Master image categorization, dataset organization, and taxonomy structuring.",
      url: "path/image-annotation.html#classification",
      buttonText: "Explore Classification Path →"
    }
  },

  "image-segmentation": {
    title: "Semantic & Instance Image Segmentation",
    summary: "Your ideal path is pixel-level precision labeling for advanced AI models.",
    explanation: "Segmentation goes beyond boxes to outline exact object boundaries pixel-by-pixel. It is essential for medical imaging, satellite analysis, and robotics.",
    currentStepIndex: 0,
    skills: [
      "Polygon Tracing",
      "Semantic vs. Instance Segmentation",
      "Pixel-level Mask Creation",
      "Boundary Smoothness Rules"
    ],
    recommendedResource: {
      title: "Image Segmentation Hub",
      reason: "Master pixel-level segmentation techniques for complex computer vision datasets.",
      url: "path/image-annotation.html#segmentation",
      buttonText: "Explore Segmentation Path →"
    }
  },

  "image-keypoints": {
    title: "Keypoint & Landmark Annotation",
    summary: "Your path focuses on structural point estimation for pose and facial tracking.",
    explanation: "Keypoint annotation marks precise structural coordinates on objects, human bodies, or faces to train motion tracking and facial recognition models.",
    currentStepIndex: 0,
    skills: [
      "Skeletal Landmark Placement",
      "Facial Keypoint Mapping",
      "Pose Estimation Modeling Concepts",
      "Visibility & Occlusion Flagging"
    ],
    recommendedResource: {
      title: "Keypoint Estimation Hub",
      reason: "Learn pose tracking, facial landmarking, and structural coordinate labeling.",
      url: "path/image-annotation.html#keypoints",
      buttonText: "Explore Keypoint Path →"
    }
  },

  // --- TEXT SUB-PATHS ---
  "text-ner": {
    title: "Named Entity Recognition (NER) Annotation",
    summary: "Your starting point is extracting key entities from unstructured text.",
    explanation: "NER annotation teaches AI to recognize people, locations, organizations, dates, and custom entities inside sentences and documents.",
    currentStepIndex: 0,
    skills: [
      "Entity Span Selection",
      "Nested Entity Labeling",
      "Taxonomy Rule Application",
      "Contextual Disambiguation"
    ],
    recommendedResource: {
      title: "NER & Text Extraction Hub",
      reason: "Master entity extraction, text parsing, and NLP labeling workflows.",
      url: "path/text-annotation.html#ner",
      buttonText: "Explore NER Path →"
    }
  },

  "text-sentiment": {
    title: "Sentiment & Opinion Annotation",
    summary: "Your starting point is evaluating emotional tone and intent in language.",
    explanation: "Sentiment annotation labels human emotions, opinions, and review tone to help AI understand customer feedback and conversational sentiment.",
    currentStepIndex: 0,
    skills: [
      "Positive/Negative/Neutral Scoring",
      "Aspect-Based Sentiment Labeling",
      "Sarcasm & Nuance Detection",
      "Subjectivity Guidelines"
    ],
    recommendedResource: {
      title: "Sentiment Analysis Hub",
      reason: "Learn sentiment evaluation, tone classification, and subjective text labeling.",
      url: "path/text-annotation.html#sentiment-intent",
      buttonText: "Explore Sentiment Path →"
    }
  },

  "text-intent": {
    title: "Intent & Utterance Annotation",
    summary: "Your path focuses on conversational AI and chatbot training data.",
    explanation: "Intent classification maps human statements to actionable goals, powering virtual assistants, customer service bots, and AI agents.",
    currentStepIndex: 0,
    skills: [
      "Utterance Categorization",
      "Intent Mapping",
      "Slot Filling & Parameter Tagging",
      "Dialogue Flow Structuring"
    ],
    recommendedResource: {
      title: "Intent & Conversational AI Hub",
      reason: "Explore chatbot data preparation, utterance labeling, and intent taxonomies.",
      url: "path/text-annotation.html#sentiment-intent",
      buttonText: "Explore Intent Path →"
    }
  },

  "text-classification": {
    title: "Text & Document Classification",
    summary: "Your path focuses on categorizing large-scale documents and articles.",
    explanation: "Document classification organizes text into structured topics, legal categories, or spam filters for search and retrieval engines.",
    currentStepIndex: 0,
    skills: [
      "Hierarchical Topic Categorization",
      "Document Keyword Tagging",
      "Spam & Moderation Labeling",
      "Multi-label Document Tagging"
    ],
    recommendedResource: {
      title: "Text Classification Hub",
      reason: "Learn document taxonomy setup, topic categorization, and dataset curation.",
      url: "path/text-annotation.html#sentiment-intent",
      buttonText: "Explore Document Path →"
    }
  },

  // --- AUDIO SUB-PATHS ---
  "audio-transcription": {
    title: "Speech-to-Text Audio Annotation",
    summary: "Your starting point is verbatim audio transcription and acoustic alignment.",
    explanation: "Speech-to-text annotation converts spoken audio into accurate transcripts, complete with punctuation, filler word handling, and phonetic correctness.",
    currentStepIndex: 0,
    skills: [
      "Verbatim Transcription Rules",
      "Phonetic & Dialect Handling",
      "Audio Noise & Overlap Tagging",
      "Audio Timestamping"
    ],
    recommendedResource: {
      title: "Speech & Audio Transcription Hub",
      reason: "Master verbatim audio transcription, acoustic formatting, and speech dataset guidelines.",
      url: "path/audio-annotation.html#transcription",
      buttonText: "Explore Speech Path →"
    }
  },

  "audio-diarization": {
    title: "Speaker Diarization Annotation",
    summary: "Your path focuses on identifying who spoke when across multi-speaker audio.",
    explanation: "Speaker diarization partitions audio into turns by individual speakers. It is key for meeting transcripts, podcast indexing, and call center logs.",
    currentStepIndex: 0,
    skills: [
      "Speaker Boundary Segmenting",
      "Multi-Speaker Overlap Flagging",
      "Voice Profile Tagging",
      "Time-aligned Speaker Attribution"
    ],
    recommendedResource: {
      title: "Speaker Diarization Hub",
      reason: "Learn multi-speaker segmentation and turn-taking audio annotation.",
      url: "path/audio-annotation.html#diarization",
      buttonText: "Explore Diarization Path →"
    }
  },

  "audio-events": {
    title: "Sound Event Classification",
    summary: "Your path focuses on identifying environmental sounds and acoustic events.",
    explanation: "Sound event detection tags non-speech acoustic occurrences—like glass breaking, vehicle horns, or machinery noise—for security and industrial AI.",
    currentStepIndex: 0,
    skills: [
      "Acoustic Event Timestamping",
      "Background Noise Categorization",
      "Sound Duration Boundary Bounding",
      "Frequency & Spectrogram Tagging"
    ],
    recommendedResource: {
      title: "Sound Event Detection Hub",
      reason: "Explore environmental audio labeling, noise classification, and event tracking.",
      url: "path/audio-annotation.html#event-detection",
      buttonText: "Explore Sound Events Path →"
    }
  },

  // --- VIDEO SUB-PATHS ---
  "video-tracking": {
    title: "Video Object Tracking Annotation",
    summary: "Your starting point is tracking objects consistently across sequential frames.",
    explanation: "Video tracking maintains persistent object IDs and bounding boxes across consecutive video frames, taking into account movement, speed, and temporary occlusions.",
    currentStepIndex: 0,
    skills: [
      "Frame-by-Frame Bounding Box Interpolation",
      "Persistent Object ID Assignment",
      "Occlusion & Re-entry Handling",
      "Trajectory & Vector Verification"
    ],
    recommendedResource: {
      title: "Video Object Tracking Hub",
      reason: "Master temporal frame tracking, object ID consistency, and interpolation tools.",
      url: "path/video-annotation.html#object-tracking",
      buttonText: "Explore Video Tracking Path →"
    }
  },

  "video-action-recognition": {
    title: "Video Action & Event Annotation",
    summary: "Your path focuses on labeling temporal actions and human behaviors.",
    explanation: "Action recognition identifies when an event starts and ends in dynamic video footage, such as sports highlights, surveillance alerts, or human activity tracking.",
    currentStepIndex: 0,
    skills: [
      "Temporal Action Boundary Marking",
      "Multi-action Sequence Tagging",
      "Human Behavior Categorization",
      "Timestamp Precision Rule Sets"
    ],
    recommendedResource: {
      title: "Video Action Recognition Hub",
      reason: "Learn temporal video segmentation, timestamp tagging, and action categorization.",
      url: "path/video-annotation.html#action-tagging",
      buttonText: "Explore Action Tracking Path →"
    }
  },

  "video-segmentation": {
    title: "Video Instance Segmentation",
    summary: "Your path focuses on pixel-level dynamic mask tracking across frames.",
    explanation: "Video segmentation applies precise pixel masks to moving targets frame-by-frame, combining high spatial accuracy with temporal continuity.",
    currentStepIndex: 0,
    skills: [
      "Dynamic Mask Interpolation",
      "Pixel-level Edge Tracking",
      "Temporal Mask Consistency",
      "Complex Motion Boundary Handling"
    ],
    recommendedResource: {
      title: "Video Segmentation Hub",
      reason: "Learn dynamic pixel mask tracking and advanced video labeling tools.",
      url: "path/video-annotation.html#video-segmentation",
      buttonText: "Explore Video Segmentation Path →"
    }
  },

  // --- GEOSPATIAL SUB-PATHS ---
  "geospatial-landcover": {
    title: "Geospatial Land Cover Annotation",
    summary: "Your path focuses on classifying satellite imagery and terrain types.",
    explanation: "Land cover labeling categorizes environmental terrain into forests, urban zones, agricultural land, and water bodies using satellite imagery.",
    currentStepIndex: 0,
    skills: [
      "Satellite Image Classification",
      "Multispectral Band Interpretation",
      "Terrain Polygon Mapping",
      "GIS Layer Compatibility"
    ],
    recommendedResource: {
      title: "Geospatial Land Cover Hub",
      reason: "Explore land cover taxonomy, multispectral imaging, and GIS mapping.",
      url: "path/satelite-annotation.html#lulc-segmentation",
      buttonText: "Explore Land Cover Path →"
    }
  },

  "geospatial-footprints": {
    title: "Building Footprint & GIS Annotation",
    summary: "Your path focuses on tracing urban structures and infrastructure boundaries.",
    explanation: "Building footprint annotation uses aerial and satellite imagery to vectorize buildings and roads for urban planning and disaster mapping.",
    currentStepIndex: 0,
    skills: [
      "Building Footprint Polygon Tracing",
      "Orthorectified Imagery Handling",
      "Road Network Vectorization",
      "GIS Coordinate Alignment"
    ],
    recommendedResource: {
      title: "Building Footprint & GIS Hub",
      reason: "Master structural tracing and vector mapping on high-resolution satellite imagery.",
      url: "path/satelite-annotation.html#vector-mapping",
      buttonText: "Explore Footprint Path →"
    }
  },

  "geospatial-agriculture": {
    title: "Agricultural & Farm Plot Annotation",
    summary: "Your path focuses on mapping crops, field boundaries, and farm plots.",
    explanation: "Agricultural geospatial labeling tracks field boundaries, crop health, and irrigation features to power precision agriculture AI models.",
    currentStepIndex: 0,
    skills: [
      "Farm Plot Boundary Polygon Tracing",
      "Crop Type & Health Tagging",
      "Water Resource Identification",
      "Temporal Drone Image Analysis"
    ],
    recommendedResource: {
      title: "Precision Agriculture GIS Hub",
      reason: "Learn agricultural mapping, crop monitoring, and farm plot polygon creation.",
      url: "path/satelite-annotation.html#multispectral-sar",
      buttonText: "Explore Agriculture GIS Path →"
    }
  }

};

/* Fallback default path */
const defaultAIPath = "image-bounding-boxes";