export const siteConfig = {
  name: "unlovedproductions",
  description: "Built for the ones nobody built for.",
  url: "https://unlovedproductions.com",
  links: {
    github: "https://github.com/unlovedproductions",
    twitter: "https://twitter.com/unlovedprod",
  },
};

export const products = [
  {
    id: "kdp-creator-suite",
    name: "KDP Creator Suite",
    category: "Publishing Software",
    tagline: "The all-in-one platform for Amazon KDP creators",
    description: "Flutter mobile app, Flask backend API, React web dashboard. PDF processing, KDP compliance validation, coloring book conversion, subscription management, analytics.",
    tiers: ["Free", "Pro", "Studio"],
    cta: "Go to KDP Creator Suite",
    ctaUrl: "https://kdpsuite.com",
    image: "/products/kdp-creator-suite.jpg",
    order: 1,
  },
  {
    id: "ghost-protocol",
    name: "Ghost Protocol",
    category: "Digital Privacy",
    tagline: "Audit and eliminate your personal exposure online",
    description: "Ghost Protocol walks you through auditing and eliminating your personal exposure online. 20-minute exposure audit across 47+ data broker sites. Removal checklist for every major opt-out.",
    valueLadder: [
      { title: "Data Breach Response Playbook", price: "$9" },
      { title: "Digital Ghost Protocol", price: "$17" },
      { title: "Ghost Stack Setup Guide", price: "$47" },
      { title: "Family Protection Protocol", price: "$97" },
    ],
    secondaryCta: "Take the Free Privacy Exposure Quiz",
    secondaryCtaUrl: "https://privacy-exposure-quiz.netlify.app",
    primaryCta: "Start Ghost Protocol",
    primaryCtaUrl: "https://ghostprotocollanding.netlify.app",
    image: "/products/ghost-protocol.jpg",
    order: 2,
  },
  {
    id: "revivehq",
    name: "ReviveHQ",
    category: "Deal Intelligence",
    tagline: "Find abandoned SaaS tools with real revenue",
    description: "ReviveHQ monitors GitHub commit activity, traffic signals, and revenue indicators to find SaaS tools abandoned 6-18 months ago — still sitting on real user bases, sometimes still generating revenue. Every deal scored 0-100 across 5 signal dimensions.",
    stats: [
      { label: "Products Scanned", value: "215+" },
      { label: "Deals Live", value: "79" },
      { label: "Max Revenue", value: "$50K" },
    ],
    pricing: [
      { tier: "Free", details: "3 deals/week" },
      { tier: "$9 one-time", details: "Single deal report" },
      { tier: "$29/mo Pro", details: "20+ deals/week + full database" },
    ],
    cta: "Browse Live Deals",
    ctaUrl: "https://revivehq.polsia.app",
    image: "/products/revivehq.jpg",
    order: 3,
  },
  {
    id: "kdp-fast-launch",
    name: "KDP Fast Launch System",
    category: "Free System",
    tagline: "14-day system for publishing your first KDP book",
    description: "14-day system for publishing your first KDP book with zero paid tools. Niche validation, Canva interior design, cover creation, listing optimization. Includes Niche Tracker, Keyword Swipe File, 30-task checklist.",
    cta: "Download Free",
    ctaUrl: "/contact?subject=download",
    image: "/products/kdp-fast-launch.jpg",
    order: 4,
  },
  {
    id: "puente",
    name: "Puente",
    category: "Mobile App",
    tagline: "Fully offline translator for real-world use",
    description: "Puente (PWEN-teh) — Spanish for bridge. Fully offline translator for healthcare workers, travelers, and service industry. Multiple language pairs. Speech recognition. One-time purchase.",
    features: [
      "100% Offline",
      "Speech Recognition",
      "Multiple Language Pairs",
      "One-Time Purchase",
    ],
    price: "One-time purchase — contact for current price",
    cta: "Get Puente",
    ctaUrl: "/contact?subject=puente",
    image: "/products/puente.jpg",
    order: 5,
  },
];

export const upcomingProducts = [
  { title: "Signal", description: "Deal intelligence automation for indie operators" },
  { title: "Shroud", description: "Privacy remediation workflows beyond manual opt-outs" },
  { title: "Draft", description: "Creator publishing pipeline for solo publishers" },
];

export const manifesto = `Most software gets built for the same people. Funded companies. Big teams. Obvious markets. unlovedproductions builds for everyone else — the solo publisher grinding KDP at midnight, the person who just found their address on 40 websites they never signed up for, the indie hacker who knows the best deals are the ones nobody listed, and the person who just needs to talk to someone in a different language without pulling out a credit card. We find the gaps. We build the tools. We ship.`;

export const aboutContent = {
  lede: `We build software for people mainstream vendors skip. In practice that means five shipped product lines — publishing tools for Amazon KDP creators, privacy remediation for personal data exposure, deal intelligence for abandoned SaaS, a free 14-day KDP launch system, and Puente, an offline translator we built first to talk with homeless Spanish speakers.`,
  act1: {
    title: "The Gap",
    content: `Five underserved markets demand attention:`,
    bullets: [
      "KDP creators building without proper tools",
      "Personal data breaches exposing millions",
      "Invisible SaaS deals waiting to be discovered",
      "Beginners needing systems, not subscriptions",
      "People needing real-world translation without a credit card",
    ],
  },
  act2: {
    title: "The Decision",
    content: `We started unlovedproductions because the alternatives did not exist. Puente came first — we built it to talk with homeless Spanish speakers in a way that mattered. Not inspirational-poster language. Just honest, direct impact. From that pattern we kept finding gaps and shipping tools.`,
  },
  act3: {
    title: "What This Is",
    content: `A product studio. No clients. Just systems, products, and shipping. We build for the people everyone else ignores. Corrections or factual updates: email hello@unlovedproductions.com.`,
  },
  closingLine: "If we're building something you need — or something you think we should build — we want to hear from you.",
};

export const seoConfig = {
  slugs: {
    home: "/",
    products: "/products",
    about: "/about",
    contact: "/contact",
    notFound: "/404",
  },
  productSlugs: {
    "kdp-creator-suite": "/products/kdp-creator-suite",
    "ghost-protocol": "/products/ghost-protocol",
    "revivehq": "/products/revivehq",
    "kdp-fast-launch": "/products/kdp-fast-launch",
    "puente": "/products/puente",
  },
};
