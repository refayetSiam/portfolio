// Projects data
// Place thumbnail images in public/projects/ folder
// Example: thumbnail: "/projects/gordian-thumbnail.png"

export const PROJECTS = [
  // 1. AI Data Migration Engine - Gordian
  {
    id: "gordian-ai",
    title: "AI Data Migration Engine",
    company: "Gordian",
    productLabel: "Product Shipped",
    color: "#FF6B35",
    accent: "#FFE0D0",
    tag: "Enterprise AI",
    thumbnail: "/projects/gordian-ai-thumbnail.png",
    stats: [
      { label: "Cost Reduction", value: "88%" },
      { label: "New Revenue", value: "$12M" },
      { label: "Gov Clients", value: "100+" }
    ],
    description:
      "An AI-powered migration system using Azure OpenAI and vector embeddings that transformed how government clients onboard to a $60M+ enterprise platform. Reduced costs from $180K to $20K per migration.",
    highlights: [
      "Optimized token usage by 70% through prompt engineering and caching",
      "Built telemetry dashboards with KQL & Grafana for real-time monitoring",
      "Scaled QC features adopted by Google and Canadian DoD"
    ]
  },
  // 2. Gordian Enterprise Data Platform
  {
    id: "gordian-platform",
    title: "Enterprise Data Platform",
    company: "Gordian",
    productLabel: "Product Shipped",
    color: "#8B5CF6",
    accent: "#EDE9FE",
    tag: "Enterprise SaaS",
    thumbnail: "/projects/gordian-platform-thumbnail.png",
    stats: [
      { label: "Revenue", value: "$60M+" },
      { label: "Clients", value: "100+" },
      { label: "Data Points", value: "48M+" }
    ],
    description:
      "Led product strategy for Gordian's flagship construction cost data platform serving government and enterprise clients. Managed the full product lifecycle from discovery to delivery across web, API, and data products.",
    highlights: [
      "Owned product roadmap for $60M+ enterprise platform",
      "Launched new pricing module increasing deal sizes by 25%",
      "Led cross-functional team of 12 engineers and designers"
    ]
  },
  // 3. Natural Assets Platform - Novion
  {
    id: "novion",
    title: "Natural Assets Platform",
    company: "Novion (Co-founder)",
    productLabel: "Product Shipped",
    color: "#22C55E",
    accent: "#D1FAE5",
    tag: "Climate Tech",
    thumbnail: "/projects/novion-thumbnail.png",
    stats: [
      { label: "YoY Growth", value: "120%" },
      { label: "ARR", value: "$100K" },
      { label: "Uptime", value: "95%+" }
    ],
    description:
      "Satellite-based asset management for municipal governments. GIS inventory, IoT environmental monitoring with 30+ sensors, and regulatory compliance - from zero to contracted revenue across 8+ agencies.",
    highlights: [
      "Architected IoT data pipeline for 30+ sensors with 95%+ uptime",
      "Built GIS-based inventory and capital planning tools",
      "Reduced manual monitoring costs by 85%"
    ]
  },
  // 4. Data Validation Middleware - Accruent
  {
    id: "accruent-middleware",
    title: "Data Validation Middleware",
    company: "Accruent",
    productLabel: "Product Shipped",
    color: "#F59E0B",
    accent: "#FEF3C7",
    tag: "Enterprise Software",
    thumbnail: "/projects/accruent-thumbnail.png",
    stats: [
      { label: "Error Reduction", value: "95%" },
      { label: "Processing", value: "Real-time" },
      { label: "Integrations", value: "15+" }
    ],
    description:
      "Built middleware layer for real-time data validation across enterprise IWMS platform. Automated quality checks that previously required manual review, enabling faster onboarding and reducing data errors.",
    highlights: [
      "Designed validation rules engine processing 10K+ records/hour",
      "Integrated with 15+ enterprise data sources (SAP, Oracle, etc.)",
      "Reduced client onboarding time by 40%"
    ]
  },
  // 5. SpareHub - Fleet Manager
  {
    id: "sparehub",
    title: "SpareHub: Fleet Manager for Transit",
    company: "Product Concept",
    productLabel: "Product Concept",
    color: "#3B82F6",
    accent: "#DBEAFE",
    tag: "Transit Tech",
    tags: ["Transit Tech", "B2G", "Multi-Persona", "Fleet Operations"],
    thumbnail: "/case-studies/sparehub/ops_dash.png",
    loomUrl: "https://www.loom.com/share/8ff7482bef954d78bc53e13f049117e7",
    demoUrl: "https://spare-hub-fknk.vercel.app/login",
    demoCredentials: {
      username: "Demo",
      email: "account@demo.com",
      note: "Choose a persona (Operations or Maintenance)"
    },
    stats: [
      { label: "Target", value: "100%" },
      { label: "Stockouts", value: "-90%" },
      { label: "Utilization", value: "80%" }
    ],
    description:
      "Transitland Paratransit Service operates 300 buses across 2 garages serving elderly and disabled riders. Their maintenance team struggles with paper-based work orders, leading to missed preventive maintenance and unplanned breakdowns. Operations managers lack visibility into fleet availability, causing last-minute scrambles when buses fail pre-trip inspections.",
    outcome: "Designed solution targeting 100% digital work order adoption, 90% reduction in parts stockouts, and 80% fleet utilization rate.",
    process: [
      {
        type: "research",
        title: "The Challenge",
        description: "Transit authorities serve some of the most vulnerable populations - elderly and disabled riders who depend on reliable paratransit service. When buses break down unexpectedly, these riders are stranded. Transitland was struggling with fragmented workflows between Operations and Maintenance teams, leading to reactive maintenance and spiraling costs.",
      },
      {
        type: "interviews",
        title: "Understanding the Users",
        description: "The Operations Manager starts their day at 5am, checking which buses passed pre-trip inspection. When one fails, they scramble to reassign routes. Meanwhile, the Maintenance Lead juggles paper work orders, trying to prioritize repairs while keeping track of parts inventory in their head. Both teams need the same underlying data but think about it completely differently.",
      },
      {
        type: "prioritize",
        title: "Root Cause Analysis",
        description: "Through primary research and stakeholder interviews, I identified 9 distinct pain points. Paper work orders caused 30% of maintenance tasks to be missed. Parts stockouts resulted from no inventory visibility. Operations couldn't forecast which buses would be available tomorrow. P1 issues emerged clearly: Maintenance logging, component inventory tracking, and fleet availability forecasting.",
      },
      {
        type: "design",
        title: "The Solution",
        description: "I designed two separate login experiences tailored to each persona's mental model. SpareHub provides a unified platform with role-specific views. Both dashboards draw from the same data model, ensuring consistency. When Maintenance completes a work order, Operations immediately sees updated fleet availability.",
      },
    ],
    insights: [
      "300 buses across 2 garages required separate logins to reduce friction for field mechanics who work at different locations",
      "Operations thinks in daily routes and schedules, while Maintenance thinks in component lifecycles and work orders - same data, different views",
      "Real-time inventory alerts were the most requested feature in user testing, solving a critical pain point around parts stockouts"
    ],
    sections: [
      {
        title: "Operations Dashboard",
        content: "For Operations, I designed a Fleet Summary view that answers their key question: 'What's my fleet status right now, and what will it be tomorrow?' The dashboard shows work order summary, fleet health overview with utilization metrics, garage-level stats, and weekly trends.",
        imageUrl: "/case-studies/sparehub/ops_dash.png",
        caption: "Operations Dashboard: Fleet Summary with work order tracking, fleet health metrics, and weekly trends",
      },
      {
        title: "Maintenance Dashboard",
        content: "For Maintenance, I designed a view answering: 'What needs fixing and do I have the parts?' The Maintenance Summary shows pending, in-progress, and completed work orders at a glance. Component Inventory highlights out-of-stock and low-stock items. Digital work order management replaced the paper-based system that was causing 30% of maintenance tasks to be missed.",
        imageUrl: "/case-studies/sparehub/maintenance_dash.png",
        caption: "Maintenance Dashboard: Work order progress, component inventory alerts, and digital work order management",
      },
    ],
    highlights: [
      "Mapped stakeholder pain points across Operations and Maintenance teams",
      "Built a unified data model with role-specific dashboards",
      "Real-time inventory alerts solving critical parts stockout issues"
    ]
  },
  // 6. Churn Intelligence
  {
    id: "churn",
    title: "Churn Intelligence",
    company: "Product Concept",
    productLabel: "Product Concept",
    color: "#EC4899",
    accent: "#FCE7F3",
    tag: "Growth / Retention",
    thumbnail: "/projects/churn-thumbnail.png",
    stats: [
      { label: "Focus", value: "SaaS" },
      { label: "Type", value: "Analytics" },
      { label: "Approach", value: "ML-driven" }
    ],
    description:
      "Churn prediction and intervention for SaaS companies. Behavioral signals + ML models identify at-risk accounts early and trigger targeted retention playbooks automatically.",
    highlights: [
      "ML risk scoring based on product usage patterns",
      "Automated intervention workflows on churn signals",
      "Customer health dashboards with actionable insights"
    ]
  },
  // 7. PropertyIntel - Personal Project
  {
    id: "propertyintel",
    title: "PropertyIntel",
    company: "Personal Project",
    productLabel: "Personal Project",
    color: "#06B6D4",
    accent: "#CFFAFE",
    tag: "AI x Real Estate",
    thumbnail: "/projects/propertyintel-thumbnail.png",
    stats: [
      { label: "Market", value: "Canada" },
      { label: "Input", value: "Address" },
      { label: "Output", value: "Full Report" }
    ],
    description:
      "AI-powered real estate due diligence for Canadian homebuyers. Enter an address and asking price - get a comprehensive property report covering risk factors, neighborhood data, and investment analysis.",
    highlights: [
      "End-to-end product from user research to working prototype",
      "AI-generated comprehensive reports from minimal input",
      "Designed for first-time buyers in Canada's complex market"
    ]
  }
];
