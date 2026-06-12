/* ONSET — site content */

const SITE = {
  name: "ONSET",
  tagline: "Personal Branding & LinkedIn Authority",
  phone: "+923223226243",
};

const NAV = [
  { label: "Home", href: "index.html", id: "home" },
  { label: "About", href: "about.html", id: "about" },
  { label: "Services", href: "services.html", id: "services" },
  { label: "Work", href: "work.html", id: "work" },
  { label: "Contact", href: "contact.html", id: "contact" },
];

const STATS = [
  { value: "50+", label: "Profiles Transformed" },
  { value: "3x", label: "Avg. Engagement Lift" },
  { value: "90", label: "Days to First Leads" },
  { value: "100%", label: "Positioning-Led" },
];

const SERVICES = [
  {
    id: "positioning",
    title: "LinkedIn Positioning",
    tagline: "We refine how you're perceived online.",
    description:
      "Your profile is your storefront. We rebuild it so the right people instantly understand your value, credibility, and why they should reach out.",
    gradient: "grad-positioning",
    icon: "◎",
    includes: [
      "Profile Optimization",
      "Banner Design",
      "Headline Creation",
      "About Section Writing",
      "Featured Section Setup",
      "Authority Positioning",
    ],
  },
  {
    id: "strategy",
    title: "Content Strategy",
    tagline: "We create content with purpose.",
    description:
      "Every post maps back to your positioning. We build a content system — pillars, calendar, and topics — designed to attract your ideal audience.",
    gradient: "grad-strategy",
    icon: "◈",
    includes: [
      "Content Calendar",
      "Topic Research",
      "Content Pillars",
      "Audience Mapping",
      "Engagement Strategy",
    ],
  },
  {
    id: "ghostwriting",
    title: "Ghostwriting",
    tagline: "Thought leadership content written in your voice.",
    description:
      "You stay focused on your business. We write LinkedIn content that sounds like you, builds authority, and creates conversations that convert.",
    gradient: "grad-ghostwriting",
    icon: "◇",
    includes: [
      "LinkedIn Posts",
      "Story Posts",
      "Educational Posts",
      "Authority Posts",
      "Opinion Content",
    ],
  },
  {
    id: "visual",
    title: "Visual Content Design",
    tagline: "Professional content deserves professional presentation.",
    description:
      "Carousels, infographics, and branded visuals that stop the scroll and make your expertise look as good as it actually is.",
    gradient: "grad-visual",
    icon: "◆",
    includes: [
      "Carousel Design",
      "Single Post Design",
      "Infographics",
      "Personal Branding Graphics",
      "Custom Visual Systems",
    ],
  },
  {
    id: "leads",
    title: "Lead Generation",
    tagline: "Visibility is only useful if it creates opportunities.",
    description:
      "We turn profile views into booked calls — with funnel optimization, lead magnets, and outreach frameworks built around your positioning.",
    gradient: "grad-leads",
    icon: "✦",
    includes: [
      "Profile Funnel Optimization",
      "Lead Magnets",
      "Call Booking Systems",
      "Audience Targeting",
      "Outreach Frameworks",
    ],
  },
];

const PORTFOLIO = [
  { title: "Founder Personal Brand", category: "positioning", label: "LinkedIn Positioning", gradient: "pf-1", result: "340% profile view increase" },
  { title: "Consultant Authority System", category: "strategy", label: "Content Strategy", gradient: "pf-2", result: "12 inbound leads in 60 days" },
  { title: "Educator Carousel Series", category: "visual", label: "Visual Design", gradient: "pf-3", result: "50K+ impressions per post" },
  { title: "Agency Owner Rebrand", category: "positioning", label: "Profile Optimization", gradient: "pf-4", result: "2x connection acceptance rate" },
  { title: "B2B Thought Leadership", category: "ghostwriting", label: "Ghostwriting", gradient: "pf-5", result: "8 speaking invitations" },
  { title: "Lead Gen Funnel", category: "leads", label: "Lead Generation", gradient: "pf-6", result: "25 booked calls in Q1" },
];

const TESTIMONIALS = [
  {
    quote: "ONSET completely reframed how I show up on LinkedIn. My profile finally reflects the authority I've built offline.",
    author: "Founder, B2B SaaS",
    role: "CEO",
  },
  {
    quote: "I was posting daily with zero results. Their positioning work changed everything — inbound leads within 90 days.",
    author: "Management Consultant",
    role: "Independent Consultant",
  },
  {
    quote: "The combination of strategy, ghostwriting, and design under one roof is what sold me. No more fragmented agency experience.",
    author: "Agency Owner",
    role: "Marketing Agency",
  },
];

const FAQS = [
  {
    q: "How long before I see results?",
    a: "Most clients begin seeing stronger profile engagement and visibility within the first few months.",
  },
  {
    q: "Do you write the content?",
    a: "Yes. We create content in your voice and around your expertise.",
  },
  {
    q: "Do I need to provide content ideas?",
    a: "No. We handle research, planning, and content development.",
  },
  {
    q: "Can you redesign my LinkedIn profile?",
    a: "Absolutely. Profile optimization is a core part of our service.",
  },
  {
    q: "Do you only work with LinkedIn?",
    a: "LinkedIn is our primary focus, but we can support broader personal branding initiatives when needed.",
  },
  {
    q: "What types of clients do you work with?",
    a: "Founders, consultants, agency owners, coaches, and senior professionals who want to build authority and attract inbound opportunities.",
  },
];

const MARQUEE = [
  "Build a LinkedIn presence that attracts opportunities.",
  "Stop posting. Start positioning.",
  "Turn your expertise into authority.",
  "Get noticed by the people who matter.",
  "Content that builds trust, visibility, and inbound opportunities.",
  "You don't have a content problem. You have a positioning problem.",
];

const PROCESS = [
  { num: "01", title: "Research", description: "We analyze your audience, goals, competitors, and existing content." },
  { num: "02", title: "Position", description: "We define your unique market position and messaging." },
  { num: "03", title: "Create", description: "We develop content and visuals around that positioning." },
  { num: "04", title: "Publish", description: "Content is scheduled and distributed consistently." },
  { num: "05", title: "Optimize", description: "Monthly reviews ensure continued growth and improvement." },
];

const WHO_WE_HELP = [
  { title: "Founders & CEOs", desc: "Build authority that attracts investors, partners, and top talent." },
  { title: "Consultants", desc: "Turn expertise into a pipeline of inbound opportunities." },
  { title: "Agency Owners", desc: "Stand out in a crowded market with a clear, credible brand." },
  { title: "Senior Professionals", desc: "Get noticed by decision-makers in your industry." },
];
