/* ==========================================================================
   KALZ LEARN — DATA ANNOTATION ASSESSMENT QUESTIONS (BRANCHING)
   ========================================================================== */

const assessmentData = {
  // Question 1: Identifies the broad data domain
  q1: {
    id: "q1",
    questionNumber: "Question 1 of 2",
    title: "What type of data would you most like to work with?",
    options: [
      {
        id: "image",
        label: "Images and photographs",
        branch: "image-annotation"
      },
      {
        id: "text",
        label: "Written text, documents, or messages",
        branch: "text-annotation"
      },
      {
        id: "audio",
        label: "Speech, recordings, and sound events",
        branch: "audio-annotation"
      },
      {
        id: "video",
        label: "Video recordings and temporal movement",
        branch: "video-annotation"
      },
      {
        id: "geospatial",
        label: "Maps, satellite imagery, or geographic data",
        branch: "geospatial-annotation"
      }
    ]
  },

  // Question 2: Branch-specific follow-ups with exact target sub-paths
  q2_branches: {
    "image-annotation": {
      id: "q2_image",
      questionNumber: "Question 2 of 2",
      title: "What would you most like to do with images?",
      options: [
        { id: "img_cls", label: "Identify and classify what an image contains", targetPath: "image-classification" },
        { id: "img_bbox", label: "Draw boxes around key objects", targetPath: "image-bounding-boxes" },
        { id: "img_seg", label: "Outline the exact shape of complex objects", targetPath: "image-segmentation" },
        { id: "img_key", label: "Mark important structural points on an object", targetPath: "image-keypoints" }
      ]
    },

    "text-annotation": {
      id: "q2_text",
      questionNumber: "Question 2 of 2",
      title: "What would you most like to identify in text?",
      options: [
        { id: "txt_ner", label: "Extract entities like people, places, or dates (NER)", targetPath: "text-ner" },
        { id: "txt_sent", label: "Analyze positive or negative opinions", targetPath: "text-sentiment" },
        { id: "txt_intent", label: "Determine the intention or goal behind a message", targetPath: "text-intent" },
        { id: "txt_cls", label: "Categorize documents or articles into topics", targetPath: "text-classification" }
      ]
    },

    "audio-annotation": {
      id: "q2_audio",
      questionNumber: "Question 2 of 2",
      title: "What type of audio task interests you most?",
      options: [
        { id: "aud_trans", label: "Converting spoken speech into written text", targetPath: "audio-transcription" },
        { id: "aud_diar", label: "Identifying who is speaking across multiple speakers", targetPath: "audio-diarization" },
        { id: "aud_evt", label: "Detecting specific sounds or audio events", targetPath: "audio-events" }
      ]
    },

    "video-annotation": {
      id: "q2_video",
      questionNumber: "Question 2 of 2",
      title: "What type of video task interests you most?",
      options: [
        { id: "vid_track", label: "Tracking moving objects frame-by-frame with bounding boxes", targetPath: "video-tracking" },
        { id: "vid_act", label: "Tagging human actions and behaviors across timestamps", targetPath: "video-action-recognition" },
        { id: "vid_seg", label: "Segmenting objects continuously through dynamic footage", targetPath: "video-segmentation" }
      ]
    },

    "geospatial-annotation": {
      id: "q2_geospatial",
      questionNumber: "Question 2 of 2",
      title: "What would you most like to map on geographic imagery?",
      options: [
        { id: "geo_cover", label: "Classify land cover and environment types", targetPath: "geospatial-landcover" },
        { id: "geo_footprint", label: "Trace precise building footprints and infrastructure", targetPath: "geospatial-footprints" },
        { id: "geo_farm", label: "Outline farm plots and agricultural boundaries", targetPath: "geospatial-agriculture" }
      ]
    }
  }
};