/* ========= BRAND CLARITY TOOL ========= */

const bcgForm = document.getElementById("bcg-form");

if (bcgForm) {
  const primaryMarket = document.getElementById("primaryMarket");
  const specificMarket = document.getElementById("specificMarket");
  const deliverySelect = document.getElementById("deliveryMethod");
  const platformSelect = document.getElementById("platformSelect");
  const resultsDiv = document.getElementById("results");
  const pdfSection = document.getElementById("pdfSection");
  const confirmation = document.getElementById("confirmation");

  /* DATA MAP (unchanged — keep your full object here) */
  const dataMap = { 
"Health & Fitness": {
    "Weight Loss & Fat Loss": {
      audience: "people trying to lose weight",
      problem: "inconsistent fat loss progress",
      outcome: "sustainable weight loss"
    },
    "Muscle Building & Strength Training": {
      audience: "people trying to build muscle",
      problem: "slow or no strength gains",
      outcome: "visible muscle growth"
    },
    "Nutrition & Meal Planning": {
      audience: "people trying to eat healthier",
      problem: "poor meal consistency",
      outcome: "balanced eating habits"
    },
    "Mental Health & Stress Management": {
      audience: "people trying to manage stress",
      problem: "constant mental overwhelm",
      outcome: "emotional balance"
    },
    "Home Workouts & Mobility": {
      audience: "people working out at home",
      problem: "lack of workout structure",
      outcome: "consistent home fitness"
    },
    "Chronic Pain, Posture & Rehabilitation": {
      audience: "people dealing with physical pain",
      problem: "recurring discomfort or stiffness",
      outcome: "pain-free movement"
    }
  },

  "Personal Finance": {
    "Budgeting & Money Management": {
      audience: "people trying to manage money",
      problem: "uncontrolled spending",
      outcome: "financial stability"
    },
    "Investing (Stocks, Crypto, Real Estate Basics)": {
      audience: "people trying to invest",
      problem: "fear of losing money",
      outcome: "investing confidence"
    },
    "Debt Payoff & Credit Repair": {
      audience: "people trying to get out of debt",
      problem: "growing balances",
      outcome: "debt freedom"
    },
    "Side Hustles & Extra Income": {
      audience: "people trying to earn more income",
      problem: "unreliable side income",
      outcome: "consistent extra income"
    },
    "Retirement & Long-Term Planning": {
      audience: "people planning for retirement",
      problem: "lack of long-term clarity",
      outcome: "financial security"
    },
    "Financial Independence / FIRE": {
      audience: "people pursuing financial freedom",
      problem: "slow wealth growth",
      outcome: "early financial independence"
    }
  },

  "Digital Products": {
    "Online Courses & Workshops": {
      audience: "people creating online courses",
      problem: "low student enrollment",
      outcome: "consistent course sales"
    },
    "Ebooks & Guides": {
      audience: "people selling ebooks",
      problem: "low conversions",
      outcome: "consistent ebook sales"
    },
    "Templates (Notion, Canva, Excel)": {
      audience: "people creating templates",
      problem: "unclear use cases",
      outcome: "repeat customers"
    },
    "Memberships & Communities": {
      audience: "people building communities",
      problem: "low member retention",
      outcome: "active memberships"
    },
    "Digital Tools & Software (No-Code, Apps)": {
      audience: "people launching digital tools",
      problem: "poor adoption",
      outcome: "active user base"
    },
    "Printables & Planners": {
      audience: "people selling printables",
      problem: "low perceived value",
      outcome: "consistent printable sales"
    }
  },

  "Marketing & Social Media": {
    "Content Creation (Short & Long Form)": {
      audience: "people creating content",
      problem: "inconsistent posting",
      outcome: "content consistency"
    },
    "Social Media Growth": {
      audience: "people growing social accounts",
      problem: "low reach",
      outcome: "audience growth"
    },
    "Email Marketing & Newsletters": {
      audience: "people building email lists",
      problem: "low open rates",
      outcome: "engaged subscribers"
    },
    "Paid Advertising": {
      audience: "people running ads",
      problem: "wasted ad spend",
      outcome: "profitable campaigns"
    },
    "Branding & Positioning": {
      audience: "people building brands",
      problem: "unclear messaging",
      outcome: "strong brand identity"
    },
    "Funnels & Conversions": {
      audience: "people selling online",
      problem: "low conversion rates",
      outcome: "predictable sales"
    }
  },

  "Education & Learning": {
    "Skill-Based Learning": {
      audience: "people learning new skills",
      problem: "lack of learning structure",
      outcome: "skill mastery"
    },
    "Career Advancement & Certifications": {
      audience: "professionals advancing careers",
      problem: "unclear next steps",
      outcome: "career growth"
    },
    "Language Learning": {
      audience: "people learning languages",
      problem: "slow progress",
      outcome: "conversational fluency"
    },
    "Study Skills & Productivity": {
      audience: "students improving study habits",
      problem: "poor focus",
      outcome: "improved academic performance"
    },
    "Test Prep & Exams": {
      audience: "people preparing for exams",
      problem: "exam anxiety",
      outcome: "higher scores"
    },
    "Teaching Online / Course Creation": {
      audience: "people teaching online",
      problem: "low student engagement",
      outcome: "profitable online courses"
    }
  },

  "Parenting & Family": {
    "Pregnancy & Newborn Care": {
      audience: "new parents",
      problem: "lack of confidence",
      outcome: "confidence in newborn care"
    },
    "Early Childhood Development": {
      audience: "parents of young children",
      problem: "developmental uncertainty",
      outcome: "healthy child development"
    },
    "Homeschooling & Online Education": {
      audience: "homeschooling parents",
      problem: "lack of structure",
      outcome: "effective learning at home"
    },
    "Parenting Teens": {
      audience: "parents of teenagers",
      problem: "communication breakdown",
      outcome: "stronger parent-teen relationships"
    },
    "Family Organization & Routines": {
      audience: "busy families",
      problem: "daily chaos",
      outcome: "organized family life"
    },
    "Work-Life Balance for Parents": {
      audience: "working parents",
      problem: "constant burnout",
      outcome: "healthy work-life balance"
    }
  },

  "Travel & Lifestyle": {
    "Digital Nomad Lifestyle": {
      audience: "people seeking location freedom",
      problem: "income instability",
      outcome: "sustainable remote lifestyle"
    },
    "Budget Travel & Hacks": {
      audience: "budget travelers",
      problem: "high travel costs",
      outcome: "low-cost travel lifestyle"
    },
    "Luxury Travel & Experiences": {
      audience: "luxury travelers",
      problem: "poor trip planning",
      outcome: "premium travel experiences"
    },
    "Remote Work & Location Independence": {
      audience: "remote workers",
      problem: "job limitations",
      outcome: "location independence"
    },
    "Minimalism & Intentional Living": {
      audience: "people simplifying life",
      problem: "excess clutter",
      outcome: "simplified lifestyle"
    },
    "Food, Culture & Local Experiences": {
      audience: "cultural travelers",
      problem: "shallow travel experiences",
      outcome: "authentic cultural experiences"
    }
  },

  "Technology & AI": {
    "Artificial Intelligence & Automation": {
      audience: "people using AI tools",
      problem: "technical confusion",
      outcome: "automated workflows"
    },
    "No-Code / Low-Code Tools": {
      audience: "non-technical builders",
      problem: "limited development skills",
      outcome: "functional digital products"
    },
    "Software Tutorials & Tech Skills": {
      audience: "people learning software",
      problem: "steep learning curves",
      outcome: "job-ready tech skills"
    },
    "Productivity Tools & Systems": {
      audience: "productivity seekers",
      problem: "disorganized workflows",
      outcome: "efficient systems"
    },
    "Cybersecurity & Privacy Basics": {
      audience: "people protecting data",
      problem: "security risks",
      outcome: "online safety"
    },
    "Tech Careers & Upskilling": {
      audience: "tech career seekers",
      problem: "outdated skills",
      outcome: "job readiness"
    }
  },

  "Creativity & Hobbies": {
    "Writing & Storytelling": {
      audience: "aspiring writers",
      problem: "creative blocks",
      outcome: "completed manuscripts"
    },
    "Art & Illustration": {
      audience: "artists",
      problem: "inconsistent practice",
      outcome: "finished art portfolio"
    },
    "Music & Audio Creation": {
      audience: "music creators",
      problem: "unfinished projects",
      outcome: "published music"
    },
    "Photography & Video Creation": {
      audience: "visual creators",
      problem: "lack of direction",
      outcome: "professional visual content"
    },
    "DIY, Crafts & Handmade Goods": {
      audience: "makers",
      problem: "low sales",
      outcome: "profitable handmade business"
    },
    "Gaming & Streaming": {
      audience: "content gamers",
      problem: "low audience engagement",
      outcome: "growing gaming channel"
    }
  }
 };

  /* Populate Primary Market */
  Object.keys(dataMap).forEach(m =>
    primaryMarket.add(new Option(m, m))
  );

  /* Populate Specific Market */
  primaryMarket.addEventListener("change", () => {
    specificMarket.innerHTML = '<option value="">Select a focus</option>';
    if (!dataMap[primaryMarket.value]) return;

    Object.keys(dataMap[primaryMarket.value]).forEach(s =>
      specificMarket.add(new Option(s, s))
    );
  });

  let o1 = "", o2 = "", o3 = "";

  /* Submit */
  bcgForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const market = primaryMarket.value;
    const niche = specificMarket.value;
    if (!market || !niche) return;

    const d = dataMap[market][niche];

    o1 = `You help ${d.audience} who struggle with ${d.problem}.`;
    o2 = `Create ${deliverySelect.value} on ${platformSelect.value} that moves them toward ${d.outcome}.`;
    o3 = `I help ${d.audience} overcome ${d.problem} using ${deliverySelect.value}.`;

    resultsDiv.innerHTML = `
      <div class="card"><h3>Niche</h3><p>${o1}</p></div>
      <div class="card"><h3>Content Direction</h3><p>${o2}</p></div>
      <div class="card"><h3>Brand Statement</h3><p>${o3}</p></div>
    `;

    pdfSection.classList.remove("hidden");

    confirmation.textContent =
      "Your blueprint is ready. You’ve been added to the free 5-day email course.";
  });
}