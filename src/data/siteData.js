import {
  Activity,
  Blocks,
  Cloud,
  Gauge,
  LayoutGrid,
  Lightbulb,
  LineChart,
  ShieldCheck,
  Wrench
} from "lucide-react";

export const navLinks = [
  { label: "Home", to: "/" },
  { label: "Products", to: "/products" },
  { label: "Services", to: "/services" },
  { label: "Case Studies", to: "/case-studies" },
  { label: "About", to: "/about" },
  { label: "Insights", to: "/insights" },
  { label: "Contact", to: "/contact" }
];

export const footerLinks = {
  company: [
    { label: "About", to: "/about" },
    { label: "Case Studies", to: "/case-studies" },
    { label: "Insights", to: "/insights" },
    { label: "Contact", to: "/contact" }
  ],
  products: [
    { label: "Products", to: "/products" },
    { label: "ChandaNest", to: "/products/chandanest" },
    { label: "Ash Integrity", to: "/products/ash-integrity" }
  ],
  legal: [
    { label: "Privacy", to: "/privacy" },
    { label: "Terms", to: "/terms" }
  ]
};

export const products = [
  {
    slug: "chandanest",
    name: "ChandaNest.in",
    status: "Coming Soon - Early Access",
    statusTone: "warning",
    descriptor: "For Tier-2 and Tier-3 city real estate ecosystems.",
    description:
      "A real estate tech platform with verified listings workflows and transparent property discovery.",
    highlights: [
      "Verified listing workflows",
      "Broker and builder onboarding",
      "Location-first discovery",
      "Lead routing and response tracking"
    ],
    image: "/placeholders/product-chandanest.svg",
    cta: "Request Early Access"
  },
  {
    slug: "ash-integrity",
    name: "Ash Disposal Pipeline Integrity",
    status: "Pilot-ready demo - manual data input",
    statusTone: "info",
    descriptor: "For thermal power plants with slurry and ash pipelines.",
    description:
      "Integrity management for ash disposal pipelines with manual inspection inputs, analytics, alerts, and history.",
    highlights: [
      "Manual inspection inputs",
      "Thickness survey history",
      "Risk scoring and alerts",
      "Decision-ready dashboards"
    ],
    image: "/placeholders/product-ash.svg",
    cta: "Request a Demo"
  }
];

export const services = [
  {
    title: "Discovery and Roadmap",
    description: "Align on goals, constraints, and delivery milestones.",
    example: "For example: audits, workflows, scope-to-MVP plans, sprint roadmap",
    icon: Lightbulb
  },
  {
    title: "UI/UX and Product Design",
    description: "Design systems, prototypes, and flows that ship.",
    example: "For example: premium UI, design system, clickable prototypes",
    icon: LayoutGrid
  },
  {
    title: "Web Apps and Dashboards",
    description: "Operational dashboards and web platforms built to scale.",
    example: "For example: operations dashboards, review boards, alert consoles",
    icon: Gauge
  },
  {
    title: "Backend APIs and Integrations",
    description: "Secure APIs and data integrations across your stack.",
    example: "For example: secure APIs, role-based access, data ingestion, exports",
    icon: Blocks
  },
  {
    title: "Data and AI",
    description: "LLMs, extraction, analytics, and decision support.",
    example: "For example: LLM extraction from inspection PDFs, analytics, anomaly signals",
    icon: LineChart
  },
  {
    title: "Cloud and DevOps",
    description: "GCP, Firebase, and Cloud Run delivery pipelines.",
    example: "For example: GCP/Firebase/Cloud Run, CI/CD, monitoring, secure deployments",
    icon: Cloud
  }
];

export const processSteps = [
  {
    title: "Define",
    description: "Clarify outcomes, scope, and success metrics."
  },
  {
    title: "Design",
    description: "Craft the product experience and technical plan."
  },
  {
    title: "Build",
    description: "Deliver in sprints with steady demos and reviews."
  },
  {
    title: "Deploy",
    description: "Secure releases with observability and handover."
  },
  {
    title: "Support",
    description: "Continuous improvements and roadmap expansion."
  }
];

export const caseStudies = [
  {
    title: "Operations Reliability Command Center",
    label: "Prototype",
    problem:
      "Fragmented KPI reviews with inconsistent data and delayed decision cycles.",
    solution:
      "Unified dashboards for KPI tracking, incidents, and inspection history.",
    outcome: "Clearer weekly reviews and more reliable decision-making."
  },
  {
    title: "Ash Pipeline Integrity Pilot",
    label: "Pilot",
    problem:
      "Manual inspection data was hard to track across time and assets.",
    solution:
      "Manual inspection logging, thickness trend analysis, and alert rules.",
    outcome: "Better visibility into risk trends and maintenance timing."
  },
  {
    title: "Real Estate Listing Workflow",
    label: "Prototype",
    problem:
      "Low trust listings and inconsistent onboarding across local brokers.",
    solution:
      "Verification and onboarding flows to improve listing quality signals.",
    outcome: "Early access workflows ready for partner testing."
  }
];

export const highlights = [
  {
    title: "Production-ready delivery",
    description: "We ship software that is ready for real operations."
  },
  {
    title: "AI with real constraints",
    description: "Practical AI that fits day-to-day workflows."
  },
  {
    title: "Senior-led teams",
    description: "Small teams with deep product and engineering focus."
  }
];

export const capabilities = [
  {
    title: "Operational dashboards",
    description: "Live KPIs, reliability views, and decision-ready reporting.",
    icon: Activity
  },
  {
    title: "Industrial workflows",
    description: "Inspection, compliance, and maintenance workflows.",
    icon: Wrench
  },
  {
    title: "Secure by default",
    description: "Access control, audit trails, and safety-first architecture.",
    icon: ShieldCheck
  }
];
