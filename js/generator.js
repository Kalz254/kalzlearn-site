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
      url: "products/direction-workshop.html",
      reason:
        "You need clarity before anything else. This helps you define your audience, problem, and first product idea."
    },
    next: {
      title: "The Creation Workshop",
      url: "products/creation-workshop.html",
      reason:
        "Once your direction is clear, this helps you turn your idea into a real digital product."
    }
  },

  "low student enrollment": {
    stage: "BUILDING STAGE",
    start: {
      title: "The Creation Workshop",
      url: "products/creation-workshop.html",
      reason:
        "Your issue is execution. This helps you build a complete digital product from start to finish."
    },
    next: {
      title: "The Pricing Workshop",
      url: "products/pricing-workshop.html",
      reason:
        "After building your product, you need to position it correctly so people understand its value."
    }
  },

  "low conversions": {
    stage: "MONETIZATION STAGE",
    start: {
      title: "The Pricing Workshop",
      url: "products/pricing-workshop.html",
      reason:
        "Your problem is value clarity. This helps you understand pricing and improve conversions."
    },
    next: {
      title: "The Launch Workshop",
      url: "products/launch-workshop.html",
      reason:
        "Once pricing is clear, you need a strong product page that communicates value effectively."
    }
  },

  "low reach": {
    stage: "VISIBILITY STAGE",
    start: {
      title: "The Traffic Workshop",
      url: "products/traffic-workshop.html",
      reason:
        "Your challenge is visibility. This builds a repeatable content system to attract attention."
    },
    next: {
      title: "The Launch Workshop",
      url: "products/launch-workshop.html",
      reason:
        "Once you have traffic, you need a strong conversion system (your product page)."
    }
  },

  "inconsistent posting": {
    stage: "VISIBILITY STAGE",
    start: {
      title: "The Traffic Workshop",
      url: "products/traffic-workshop.html",
      reason:
        "This helps you build a structured content system so you always know what to post."
    },
    next: {
      title: "The Launch Workshop",
      url: "products/launch-workshop.html",
      reason:
        "After consistency, you need to convert attention into sales."
    }
  },

  "low conversion rates": {
    stage: "CONVERSION STAGE",
    start: {
      title: "The Launch Workshop",
      url: "products/launch-workshop.html",
      reason:
        "Your issue is your product page. This helps you clearly present your offer and improve conversions."
    },
    next: {
      title: "The Traffic Workshop",
      url: "products/traffic-workshop.html",
      reason:
        "Once conversion is fixed, you can scale by increasing traffic."
    }
  },

  "poor adoption": {
    stage: "BUILDING STAGE",
    start: {
      title: "The Creation Workshop",
      url: "products/creation-workshop.html",
      reason:
        "Your product isn’t being used because it's unclear or weak. This helps you build something structured and valuable."
    },
    next: {
      title: "The Pricing Workshop",
      url: "products/pricing-workshop.html",
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
      url: "products/direction-workshop.html",
      reason:
        "Start here to define your audience, problem, and product direction before building anything."
    },
    next: {
      title: "The Creation Workshop",
      url: "products/creation-workshop.html",
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
let identity = "";
let strategy = "";
let monetization = "";
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

  identity = `Right now, you're not just choosing a niche. You're stepping into the role of a creator who helps ${d.audience} move from ${d.problem} to ${d.outcome}.`;

  strategy = `Your best strategy is to create ${deliverySelect.value} on ${platformSelect.value} that gives your audience small wins, practical clarity and visible progress.`;

  monetization = `Your first digital product should solve ${d.problem}. Start with something simple and outcome-focused that helps people achieve ${d.outcome}.`;

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
      identity,
      strategy,
      monetization,
      recommendedWorkshop: recommendedWorkshop.title
    })
  });

  /* UI RENDER */
  resultsDiv.innerHTML = `
    <div class="card">
      <h3>Identity Shift</h3>
      <p>${identity}</p>
    </div>

    <div class="card">
      <h3>Content Strategy</h3>
      <p>${strategy}</p>
    </div>

    <div class="card">
      <h3>Monetization Path</h3>
      <p>${monetization}</p>
    </div>

    <div class="card recommended-card">
      <span class="recommended-label">Recommended Workshop</span>
      <h3>${recommendedWorkshop.title}</h3>
      <p>${recommendedWorkshop.reason}</p>
      <a href="${recommendedWorkshop.url}" class="btn primary workshop-btn">
        View Workshop
      </a>
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
   INIT
   ========================================================================== */

init();