/* COMPLETE DATASET */
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

/* ELEMENTS */
const primaryMarket = document.getElementById("primaryMarket");
const specificMarket = document.getElementById("specificMarket");
const deliverySelect = document.getElementById("deliveryMethod");
const platformSelect = document.getElementById("platformSelect");
const resultsDiv = document.getElementById("results");
const emailInput = document.getElementById("email");
const pdfSection = document.getElementById("pdfSection");

let o1 = "", o2 = "", o3 = "";

/* 1. INITIALIZE PRIMARY DROPDOWN */
function init() {
  // Clear existing options except the first one
  primaryMarket.innerHTML = '<option value="">Select your main area</option>';
  Object.keys(dataMap).forEach(market => {
    const opt = document.createElement("option");
    opt.value = market;
    opt.textContent = market;
    primaryMarket.appendChild(opt);
  });
}

/* 2. UPDATE SPECIFIC MARKET BASED ON PRIMARY */
primaryMarket.addEventListener("change", function() {
  const selectedMarket = this.value;
  
  // Reset Specific Market dropdown
  specificMarket.innerHTML = '<option value="">Select a focus</option>';
  
  if (selectedMarket && dataMap[selectedMarket]) {
    const niches = Object.keys(dataMap[selectedMarket]);
    niches.forEach(niche => {
      const opt = document.createElement("option");
      opt.value = niche;
      opt.textContent = niche;
      specificMarket.appendChild(opt);
    });
  }
});

/* 3. FORM SUBMISSION */
document.getElementById("bcg-form").addEventListener("submit", function(e) {
  e.preventDefault();
  
  const marketVal = primaryMarket.value;
  const nicheVal = specificMarket.value;
  
  if (!marketVal || !nicheVal) {
    alert("Please select both markets.");
    return;
  }

  const d = dataMap[marketVal][nicheVal];
  
  o1 = `You help ${d.audience} who struggle with ${d.problem}.`;
  o2 = `Create ${deliverySelect.value} on ${platformSelect.value} that moves them toward ${d.outcome}.`;
  o3 = `I help ${d.audience} overcome ${d.problem} using ${deliverySelect.value}.`;

  resultsDiv.innerHTML = `
    <div class="card"><h3>Niche</h3><p>${o1}</p></div>
    <div class="card"><h3>Content Direction</h3><p>${o2}</p></div>
    <div class="card"><h3>Brand Statement</h3><p>${o3}</p></div>
  `;

  pdfSection.style.display = "block";
  resultsDiv.scrollIntoView({ behavior: "smooth", block: "start" });

  // MailerLite Integration
  fetch("https://assets.mailerlite.com/jsonp/1835111/forms/177644935893222841/subscribe", {
    method: "POST",
    body: new URLSearchParams({ "fields[email]": emailInput.value })
  });
});

/* 4. PDF GENERATION */
document.getElementById("downloadPdf").onclick = () => {
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF();
  let y = 20;

  // Colors
  const colBlack = [0, 0, 0];
  const colRed = [192, 0, 0];
  const colDarkGray = [68, 68, 68];
  const colBgGray = [248, 248, 248];
  const colLinkBlue = [0, 0, 139];

  const checkPageBreak = (needed) => {
    if (y + needed > 275) {
      doc.addPage();
      y = 20;
    }
  };

  // 1. HEADER TITLE
  doc.setFont("helvetica", "bold");
  doc.setFontSize(22);
  doc.setTextColor(...colBlack);
  doc.text("Your Brand Clarity Blueprint", 20, y);

  // 2. YOUR RESULTS SECTION (Gray Boxes)
  y += 12;
  doc.setFontSize(15);
  doc.setTextColor(...colRed);
  doc.text("Your Results", 20, y);
  y += 8;

  const addResultBox = (title, content) => {
    // Label
    doc.setFont("helvetica", "bold");
    doc.setFontSize(11);
    doc.setTextColor(...colBlack);
    doc.text(title, 20, y);
    y += 4;
    
    // Gray Background Box
    const lines = doc.splitTextToSize(content, 160);
    const boxHeight = (lines.length * 7) + 6;
    doc.setFillColor(...colBgGray);
    doc.rect(20, y, 170, boxHeight, 'F');
    
    // Box Content
    doc.setFont("helvetica", "normal");
    doc.setFontSize(11);
    doc.setTextColor(...colDarkGray);
    doc.text(lines, 25, y + 7);
    y += boxHeight + 10;
  };

  addResultBox("Niche", o1);
  addResultBox("Content Direction", o2);
  addResultBox("Brand Statement", o3);

  // 3. HOW TO USE (Starting Today)
  y += 5;
  doc.setFont("helvetica", "bold");
  doc.setFontSize(15);
  doc.setTextColor(...colRed);
  doc.text("How to use your Blueprint (starting today)", 20, y);
  y += 10;

  const usageSteps = [
    { t: "1. Niche - Focus on your audience.", b: "Your niche defines who you help. Use it to make sure every piece of content or product idea speaks directly to them. If it doesn't, skip it." },
    { t: "2. Content Direction - Decide what to create and where.", b: "Your content direction tells you the formats and channels that will reach your audience most effectively. Start small and consistent — one newsletter, one Instagram post, one guide — but stay aligned with this direction." },
    { t: "3. Brand Statement - Clarify your message.", b: "Your brand statement is your promise in one sentence. Let it guide headlines, social posts, product copy and even emails. Every touchpoint should reflect it." }
  ];

  usageSteps.forEach(step => {
    doc.setFont("helvetica", "bold");
    doc.setFontSize(11);
    doc.setTextColor(...colBlack);
    doc.text(step.t, 20, y);
    y += 6;
    doc.setFont("helvetica", "normal");
    doc.setTextColor(...colDarkGray);
    const bLines = doc.splitTextToSize(step.b, 170);
    doc.text(bLines, 20, y);
    y += (bLines.length * 6) + 10;
  });

  // 4. RECOMMENDED NEXT STEPS
  checkPageBreak(80);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(15);
  doc.setTextColor(...colRed);
  doc.text("Recommended Next Steps", 20, y);
  y += 10;

  const addOffer = (title, description, linkText, url) => {
    checkPageBreak(40);
    doc.setFontSize(11);
    doc.setFont("helvetica", "bold");
    doc.setTextColor(...colBlack);
    doc.text(title, 20, y);
    y += 6;
    doc.setFont("helvetica", "normal");
    doc.setTextColor(...colDarkGray);
    const descLines = doc.splitTextToSize(description, 170);
    doc.text(descLines, 20, y);
    y += (descLines.length * 6) + 6;
    
    // Link Styling (Fixing the "Wired" look)
    doc.setTextColor(...colLinkBlue);
    doc.text(linkText, 20, y, { charSpace: 0 });
    doc.link(20, y - 4, doc.getTextWidth(linkText), 6, { url: url });
    
    // Thin Underline
    doc.setDrawColor(...colLinkBlue);
    doc.setLineWidth(0.2);
    doc.line(20, y + 1, 20 + doc.getTextWidth(linkText), y + 1);
    y += 15;
  };

  addOffer("1. You're clear on your niche — but not what to sell yet", "Clarity removes confusion, but it doesn't automatically generate product ideas. This guide helps you stop guessing and choose a beginner-friendly digital product.", "40 Fast Digital Product Ideas Playbook", "https://store.kalzlearn.com/b/ideas");
  addOffer("2. You want to act while this clarity is still fresh", "Momentum matters. This guide shows you how to turn your blueprint into a simple digital product and launch it in one focused day.", "The 24-Hour Digital Product Launch Guide", "https://store.kalzlearn.com/b/24h");
  addOffer("3. You want validation before you build anything", "Remove doubt and pressure. Test your niche, message or problem before creating a product.", "Brand Clarity & Niche Validation Workbook", "https://store.kalzlearn.com/b/clarity");

  // 5. CONCLUSION
  checkPageBreak(50);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(15);
  doc.setTextColor(...colRed);
  doc.text("Conclusion: Your Clarity is the Starting Line", 20, y);
  y += 8;
  doc.setFont("helvetica", "normal");
  doc.setTextColor(...colDarkGray);
  const concl = "Clarity doesn't mean you have everything figured out. It means you now know what matters, who you're serving, and what direction makes sense for you. From here, progress comes from small, intentional action — not overthinking.";
  doc.text(doc.splitTextToSize(concl, 170), 20, y);
  
  y += 30;
  doc.setFontSize(9);
  doc.setTextColor(150, 150, 150);
  doc.text("© 2026 Kalz Learn | Focused Clarity for Modern Creators", 105, 285, { align: "center" });

  doc.save("Brand-Clarity-Blueprint.pdf");
};
// Run init on load
init();