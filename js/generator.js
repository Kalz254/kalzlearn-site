/* ==========================================================================
   COMPLETE DATASET 
   ========================================================================== */
const dataMap = {
  "Health & Fitness": {
    "Weight Loss & Fat Loss": { audience: "people trying to lose weight", problem: "inconsistent fat loss progress", outcome: "sustainable weight loss" },
    "Muscle Building & Strength Training": { audience: "people trying to build muscle", problem: "slow or no strength gains", outcome: "visible muscle growth" },
    "Nutrition & Meal Planning": { audience: "people trying to eat healthier", problem: "poor meal consistency", outcome: "balanced eating habits" },
    "Mental Health & Stress Management": { audience: "people trying to manage stress", problem: "constant mental overwhelm", outcome: "emotional balance" },
    "Home Workouts & Mobility": { audience: "people working out at home", problem: "lack of workout structure", outcome: "consistent home fitness" },
    "Chronic Pain, Posture & Rehabilitation": { audience: "people dealing with physical pain", problem: "recurring discomfort or stiffness", outcome: "pain-free movement" }
  },
  "Personal Finance": {
    "Budgeting & Money Management": { audience: "people trying to manage money", problem: "uncontrolled spending", outcome: "financial stability" },
    "Investing (Stocks, Crypto, Real Estate Basics)": { audience: "people trying to invest", problem: "fear of losing money", outcome: "investing confidence" },
    "Debt Payoff & Credit Repair": { audience: "people trying to get out of debt", problem: "growing balances", outcome: "debt freedom" },
    "Side Hustles & Extra Income": { audience: "people trying to earn more income", problem: "unreliable side income", outcome: "consistent extra income" },
    "Retirement & Long-Term Planning": { audience: "people planning for retirement", problem: "lack of long-term clarity", outcome: "financial security" },
    "Financial Independence / FIRE": { audience: "people pursuing financial freedom", problem: "slow wealth growth", outcome: "early financial independence" }
  },
  "Digital Products": {
    "Online Courses & Workshops": { audience: "people creating online courses", problem: "low student enrollment", outcome: "consistent course sales" },
    "Ebooks & Guides": { audience: "people selling ebooks", problem: "low conversions", outcome: "consistent ebook sales" },
    "Templates (Notion, Canva, Excel)": { audience: "people creating templates", problem: "unclear use cases", outcome: "repeat customers" },
    "Memberships & Communities": { audience: "people building communities", problem: "low member retention", outcome: "active memberships" },
    "Digital Tools & Software (No-Code, Apps)": { audience: "people launching digital tools", problem: "poor adoption", outcome: "active user base" },
    "Printables & Planners": { audience: "people selling printables", problem: "low perceived value", outcome: "consistent printable sales" }
  },
  "Marketing & Social Media": {
    "Content Creation (Short & Long Form)": { audience: "people creating content", problem: "inconsistent posting", outcome: "content consistency" },
    "Social Media Growth": { audience: "people growing social accounts", problem: "low reach", outcome: "audience growth" },
    "Email Marketing & Newsletters": { audience: "people building email lists", problem: "low open rates", outcome: "engaged subscribers" },
    "Paid Advertising": { audience: "people running ads", problem: "wasted ad spend", outcome: "profitable campaigns" },
    "Branding & Positioning": { audience: "people building brands", problem: "unclear messaging", outcome: "strong brand identity" },
    "Funnels & Conversions": { audience: "people selling online", problem: "low conversion rates", outcome: "predictable sales" }
  },
  "Education & Learning": {
    "Skill-Based Learning": { audience: "people learning new skills", problem: "lack of learning structure", outcome: "skill mastery" },
    "Career Advancement & Certifications": { audience: "professionals advancing careers", problem: "unclear next steps", outcome: "career growth" },
    "Language Learning": { audience: "people learning languages", problem: "slow progress", outcome: "conversational fluency" },
    "Study Skills & Productivity": { audience: "students improving study habits", problem: "poor focus", outcome: "improved academic performance" },
    "Test Prep & Exams": { audience: "people preparing for exams", problem: "exam anxiety", outcome: "higher scores" },
    "Teaching Online / Course Creation": { audience: "people teaching online", problem: "low student engagement", outcome: "profitable online courses" }
  },
  "Parenting & Family": {
    "Pregnancy & Newborn Care": { audience: "new parents", problem: "lack of confidence", outcome: "confidence in newborn care" },
    "Early Childhood Development": { audience: "parents of young children", problem: "developmental uncertainty", outcome: "healthy child development" },
    "Homeschooling & Online Education": { audience: "homeschooling parents", problem: "lack of structure", outcome: "effective learning at home" },
    "Parenting Teens": { audience: "parents of teenagers", problem: "communication breakdown", outcome: "stronger parent-teen relationships" },
    "Family Organization & Routines": { audience: "busy families", problem: "daily chaos", outcome: "organized family life" },
    "Work-Life Balance for Parents": { audience: "working parents", problem: "constant burnout", outcome: "healthy work-life balance" }
  },
  "Travel & Lifestyle": {
    "Digital Nomad Lifestyle": { audience: "people seeking location freedom", problem: "income instability", outcome: "sustainable remote lifestyle" },
    "Budget Travel & Hacks": { audience: "budget travelers", problem: "high travel costs", outcome: "low-cost travel lifestyle" },
    "Luxury Travel & Experiences": { audience: "luxury travelers", problem: "poor trip planning", outcome: "premium travel experiences" },
    "Remote Work & Location Independence": { audience: "remote workers", problem: "job limitations", outcome: "location independence" },
    "Minimalism & Intentional Living": { audience: "people simplifying life", problem: "excess clutter", outcome: "simplified lifestyle" },
    "Food, Culture & Local Experiences": { audience: "cultural travelers", problem: "shallow travel experiences", outcome: "authentic cultural experiences" }
  },
  "Technology & AI": {
    "Artificial Intelligence & Automation": { audience: "people using AI tools", problem: "technical confusion", outcome: "automated workflows" },
    "No-Code / Low-Code Tools": { audience: "non-technical builders", problem: "limited development skills", outcome: "functional digital products" },
    "Software Tutorials & Tech Skills": { audience: "people learning software", problem: "steep learning curves", outcome: "job-ready tech skills" },
    "Productivity Tools & Systems": { audience: "productivity seekers", problem: "disorganized workflows", outcome: "efficient systems" },
    "Cybersecurity & Privacy Basics": { audience: "people protecting data", problem: "security risks", outcome: "online safety" },
    "Tech Careers & Upskilling": { audience: "tech career seekers", problem: "outdated skills", outcome: "job readiness" }
  },
  "Creativity & Hobbies": {
    "Writing & Storytelling": { audience: "aspiring writers", problem: "creative blocks", outcome: "completed manuscripts" },
    "Art & Illustration": { audience: "artists", problem: "inconsistent practice", outcome: "finished art portfolio" },
    "Music & Audio Creation": { audience: "music creators", problem: "unfinished projects", outcome: "published music" },
    "Photography & Video Creation": { audience: "visual creators", problem: "lack of direction", outcome: "professional visual content" },
    "DIY, Crafts & Handmade Goods": { audience: "makers", problem: "low sales", outcome: "profitable handmade business" },
    "Gaming & Streaming": { audience: "content gamers", problem: "low audience engagement", outcome: "growing gaming channel" }
  }
};

/* ==========================================================================
   WORKSHOP JOURNEY RECOMMENDATION ENGINE (FINAL CLEAN VERSION)
   ========================================================================== */

const workshopJourneyMap = {
  "unclear messaging": {
    stage: "FOUNDATION CLARITY",
    start: {
      title: "The Direction Workshop",
      url: "https://kalzlearn.com/products/direction-workshop",
      reason:
        "You need clarity before anything else. This helps you define your audience, problem, and first product idea."
    },
    next: {
      title: "The Creation Workshop",
      url: "https://kalzlearn.com/products/creation-workshop",
      reason:
        "Once your direction is clear, this helps you turn your idea into a real digital product."
    }
  },

  "low student enrollment": {
    stage: "BUILDING STAGE",
    start: {
      title: "The Creation Workshop",
      url: "https://kalzlearn.com/products/creation-workshop",
      reason:
        "Your issue is execution. This helps you build a complete digital product from start to finish."
    },
    next: {
      title: "The Pricing Workshop",
      url: "https://kalzlearn.com/products/pricing-workshop",
      reason:
        "After building your product, you need to position it correctly so people understand its value."
    }
  },

  "low conversions": {
    stage: "MONETIZATION STAGE",
    start: {
      title: "The Pricing Workshop",
      url: "https://kalzlearn.com/products/pricing-workshop",
      reason:
        "Your problem is value clarity. This helps you understand pricing and improve conversions."
    },
    next: {
      title: "The Launch Workshop",
      url: "https://kalzlearn.com/products/launch-workshop",
      reason:
        "Once pricing is clear, you need a strong product page that communicates value effectively."
    }
  },

  "low reach": {
    stage: "VISIBILITY STAGE",
    start: {
      title: "The Traffic Workshop",
      url: "https://kalzlearn.com/products/traffic-workshop",
      reason:
        "Your challenge is visibility. This builds a repeatable content system to attract attention."
    },
    next: {
      title: "The Launch Workshop",
      url: "https://kalzlearn.com/products/launch-workshop",
      reason:
        "Once you have traffic, you need a strong conversion system (your product page)."
    }
  },

  "inconsistent posting": {
    stage: "VISIBILITY STAGE",
    start: {
      title: "The Traffic Workshop",
      url: "https://kalzlearn.com/products/traffic-workshop",
      reason:
        "This helps you build a structured content system so you always know what to post."
    },
    next: {
      title: "The Launch Workshop",
      url: "https://kalzlearn.com/products/launch-workshop",
      reason:
        "After consistency, you need to convert attention into sales."
    }
  },

  "low conversion rates": {
    stage: "CONVERSION STAGE",
    start: {
      title: "The Launch Workshop",
      url: "https://kalzlearn.com/products/launch-workshop",
      reason:
        "Your issue is your product page. This helps you clearly present your offer and improve conversions."
    },
    next: {
      title: "The Traffic Workshop",
      url: "https://kalzlearn.com/products/traffic-workshop",
      reason:
        "Once conversion is fixed, you can scale by increasing traffic."
    }
  },

  "poor adoption": {
    stage: "BUILDING STAGE",
    start: {
      title: "The Creation Workshop",
      url: "https://kalzlearn.com/products/creation-workshop",
      reason:
        "Your product isn’t being used because it's unclear or weak. This helps you build something structured and valuable."
    },
    next: {
      title: "The Pricing Workshop",
      url: "https://kalzlearn.com/products/pricing-workshop",
      reason:
        "After fixing the product, you need to position its value correctly."
    }
  }
};

function getWorkshopJourney(problemText = "") {
  const text = problemText.toLowerCase();

  for (const key in workshopJourneyMap) {
    if (text.includes(key)) {
      return workshopJourneyMap[key];
    }
  }

  return {
    stage: "FOUNDATION CLARITY",
    start: {
      title: "The Direction Workshop",
      url: "https://kalzlearn.com/products/direction-workshop",
      reason:
        "Start here to define your audience, problem, and product direction before building anything."
    },
    next: {
      title: "The Creation Workshop",
      url: "https://kalzlearn.com/products/creation-workshop",
      reason:
        "After clarity, this helps you turn your idea into a real product."
    }
  };
}

/* ==========================================================================
   DOM ELEMENTS
   ========================================================================== */

const primaryMarket = document.getElementById("primaryMarket");
const specificMarket = document.getElementById("specificMarket");
const deliverySelect = document.getElementById("deliveryMethod");
const platformSelect = document.getElementById("platformSelect");
const resultsDiv = document.getElementById("results");
const emailInput = document.getElementById("email");
const pdfSection = document.getElementById("pdfSection");

/* STATE */
let directionText = "";
let contentPlanText = "";
let productText = "";

let recommendedWorkshop = {};
let nextWorkshop = {};

/* ==========================================================================
   INIT DROPDOWN
   ========================================================================== */

function init() {
  primaryMarket.innerHTML = '<option value="">Select your main area</option>';
  Object.keys(dataMap).forEach((market) => {
    const opt = document.createElement("option");
    opt.value = market;
    opt.textContent = market;
    primaryMarket.appendChild(opt);
  });
}

/* ==========================================================================
   EVENT: PRIMARY MARKET CHANGE
   ========================================================================== */

primaryMarket.addEventListener("change", function () {
  const selectedMarket = this.value;
  specificMarket.innerHTML = '<option value="">Select a focus</option>';

  if (selectedMarket && dataMap[selectedMarket]) {
    Object.keys(dataMap[selectedMarket]).forEach((niche) => {
      const opt = document.createElement("option");
      opt.value = niche;
      opt.textContent = niche;
      specificMarket.appendChild(opt);
    });
  }
});

/* ==========================================================================
   FORM SUBMISSION
   ========================================================================== */

document.getElementById("bcg-form").addEventListener("submit", function (e) {
  e.preventDefault();

  const marketVal = primaryMarket.value;
  const nicheVal = specificMarket.value;

  if (!marketVal || !nicheVal) {
    alert("Please select both markets.");
    return;
  }

  const d = dataMap[marketVal][nicheVal];

  directionText = `You help ${d.audience} move from ${d.problem} to ${d.outcome}.`;

  contentPlanText = `Create ${deliverySelect.value} on ${platformSelect.value} to help your audience achieve ${d.outcome}.`;

  productText = `Build a simple digital product that helps ${d.audience} move from ${d.problem} to ${d.outcome}.`;

  const journey = getWorkshopJourney(d.problem);
  recommendedWorkshop = journey.start;
  nextWorkshop = journey.next;

  /* DATA CAPTURE */
  fetch("https://script.google.com/macros/s/AKfycby8k6GHgLi_uNn2vqmdrEEW2Bnt7SFCKxgWUE69UkqrrDreENhE6VaN3hw_mBD_5VaT/exec", {
    method: "POST",
  body: new URLSearchParams({
  email: emailInput.value,
  primaryMarket: marketVal,
  specificMarket: nicheVal,
  deliveryMethod: deliverySelect.value,
  platform: platformSelect.value,
  direction: directionText,
  contentPlan: contentPlanText,
  firstProduct: productText,
  recommendedWorkshop: recommendedWorkshop.title
  })
  });

  /* UI RENDER */
resultsDiv.innerHTML = `
  <div class="card">
    <h3>Your Direction</h3>
    <p>${directionText}</p>
  </div>

  <div class="card">
    <h3>Your Content Plan</h3>
    <p>${contentPlanText}</p>
  </div>

  <div class="card">
    <h3>Your First Product</h3>
    <p>${productText}</p>
  </div>

  <div class="card recommended-card">
    <span class="recommended-label">Recommended Next Step</span>

    <h3>${recommendedWorkshop.title}</h3>

    <p>${recommendedWorkshop.reason}</p>

    <a
      href="${recommendedWorkshop.url}"
      class="btn primary workshop-btn"
      target="_blank"
    >
      View Workshop
    </a>
  </div>

  <div class="card">
    <h3>Your Learning Path</h3>

    <div class="journey-steps">
      <div>
        <strong>STEP 1</strong><br>
        ${recommendedWorkshop.title}
      </div>

      <div style="font-size:24px; margin:15px 0;">
        ↓
      </div>

      <div>
        <strong>STEP 2</strong><br>
        ${nextWorkshop.title}
      </div>
    </div>
  </div>
`;

  pdfSection.style.display = "block";
  resultsDiv.scrollIntoView({ behavior: "smooth" });

  /* MAILERLITE */
  fetch("https://assets.mailerlite.com/jsonp/1835111/forms/177644935893222841/subscribe", {
    method: "POST",
    body: new URLSearchParams({ "fields[email]": emailInput.value })
  });
});

/* ==========================================================================
   PDF GENERATION
   ========================================================================= */

document.getElementById("downloadPdf").addEventListener("click", () => {

  if (!directionText) {
  alert("Generate your blueprint first.");
  return;
  }

  const { jsPDF } = window.jspdf;
  const doc = new jsPDF();

  const PAGE_HEIGHT = 280;
  let y = 60;

  function checkPageSpace(spaceNeeded = 30) {
    if (y > PAGE_HEIGHT - spaceNeeded) {
      doc.addPage();
      y = 20;
    }
  }

  /* =====================================================
     HEADER
  ===================================================== */

  doc.setFillColor(220, 0, 0);
  doc.rect(0, 0, 210, 45, "F");

  doc.setTextColor(255, 255, 255);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(24);

  doc.text("DIGITAL PRODUCT", 20, 18);
  doc.text("CLARITY MAP", 20, 30);

  doc.setFontSize(9);
  doc.setFont("helvetica", "normal");
  doc.text("Generated by Kalz Learn", 20, 39);

  doc.setTextColor(0, 0, 0);

  const BODY_FONT_SIZE = 12;

  /* =====================================================
     YOUR DIRECTION
  ===================================================== */

  doc.setFont("helvetica", "bold");
  doc.setFontSize(15);
  doc.text("Your Direction", 20, y);

  y += 10;

  doc.setFont("helvetica", "normal");
  doc.setFontSize(BODY_FONT_SIZE);

  const directionLines = doc.splitTextToSize(directionText, 170);
  doc.text(directionLines, 20, y);

  y += directionLines.length * 7 + 15;

  /* =====================================================
     YOUR CONTENT PLAN
  ===================================================== */

  checkPageSpace();

  doc.setFont("helvetica", "bold");
  doc.setFontSize(15);
  doc.text("Your Content Plan", 20, y);

  y += 10;

  doc.setFont("helvetica", "normal");
  doc.setFontSize(BODY_FONT_SIZE);

  const contentLines = doc.splitTextToSize(contentPlanText, 170);
  doc.text(contentLines, 20, y);

  y += contentLines.length * 7 + 15;

  /* =====================================================
     YOUR FIRST PRODUCT
  ===================================================== */

  checkPageSpace();

  doc.setFont("helvetica", "bold");
  doc.setFontSize(15);
  doc.text("Your First Product", 20, y);

  y += 10;

  doc.setFont("helvetica", "normal");
  doc.setFontSize(BODY_FONT_SIZE);

  const productLines = doc.splitTextToSize(productText, 170);
  doc.text(productLines, 20, y);

  y += productLines.length * 7 + 15;

  /* =====================================================
     RECOMMENDED WORKSHOP
  ===================================================== */

  checkPageSpace();

  doc.setFont("helvetica", "bold");
  doc.setFontSize(15);
  doc.text("Recommended Next Step", 20, y);

  y += 10;

  doc.setFontSize(12);
  doc.text(recommendedWorkshop.title, 20, y);

  y += 8;

  doc.setFont("helvetica", "normal");

  const reasonLines = doc.splitTextToSize(
    recommendedWorkshop.reason,
    170
  );

  doc.text(reasonLines, 20, y);

  y += reasonLines.length * 6 + 15;

  /* =====================================================
   WORKSHOP LINK
===================================================== */

checkPageSpace();

doc.setFont("helvetica", "bold");
doc.setFontSize(13);

doc.setTextColor(192, 0, 0); // #C00000

doc.textWithLink(
  "View Workshop",
  20,
  y,
  {
    url: recommendedWorkshop.url
  }
);

doc.setTextColor(0, 0, 0);

y += 18;

  /* =====================================================
   JOURNEY
===================================================== */

doc.setFont(undefined, "bold");
doc.setFontSize(16);
doc.text("Your Learning Path", 20, y);

y += 12;

/* STEP 1 */

doc.setFontSize(12);
doc.setFont(undefined, "bold");
doc.text("STEP 1", 20, y);

y += 8;

doc.setTextColor(192, 0, 0);

doc.textWithLink(
  recommendedWorkshop.title,
  20,
  y,
  {
    url: recommendedWorkshop.url
  }
);

doc.setTextColor(0, 0, 0);

y += 14;

/* STEP 2 */

doc.setFont(undefined, "bold");
doc.text("STEP 2", 20, y);

y += 8;

doc.setTextColor(192, 0, 0);

doc.textWithLink(
  nextWorkshop.title,
  20,
  y,
  {
    url: nextWorkshop.url
  }
);

doc.setTextColor(0, 0, 0);

y += 18;

  /* =====================================================
     ACTION PLAN
  ===================================================== */

  checkPageSpace(60);

  doc.setFont("helvetica", "bold");
  doc.setFontSize(15);

  doc.text("Your Next 3 Actions", 20, y);

  y += 12;

  doc.setFont("helvetica", "normal");
  doc.setFontSize(BODY_FONT_SIZE);

  doc.text(
    "1. Save this Digital Product Clarity Map.",
    20,
    y
  );

  y += 8;

  doc.text(
    "2. Commit to one audience and one problem.",
    20,
    y
  );

  y += 8;

  /* Action 3 with clickable workshop link */

doc.text(
  "3. Complete ",
  20,
  y
);

const actionWidth = doc.getTextWidth(
  "3. Complete "
);

doc.setTextColor(192, 0, 0); // #C00000

doc.textWithLink(
  recommendedWorkshop.title,
  20 + actionWidth,
  y,
  {
    url: recommendedWorkshop.url
  }
);

doc.setTextColor(0, 0, 0);

y += 18;

  /* =====================================================
     FOOTER
  ===================================================== */

  checkPageSpace();

  doc.setFontSize(11);

  doc.text(
    "Clarity creates momentum. Momentum creates results.",
    20,
    y
  );

  y += 6;

  doc.text(
    "Take the next step and keep moving forward.",
    20,
    y
  );

  y += 10;

  doc.setFont("helvetica", "bold");
  doc.text(
    "Kalz Learn",
    20,
    y
  );

  /* =====================================================
     SAVE
  ===================================================== */

  doc.save("Digital-Product-Clarity-Map.pdf");

});

/* ==========================================================================
   INIT
   ========================================================================== */

init();