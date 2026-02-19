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
    tags: ["Enterprise AI", "Azure OpenAI", "Data Migration", "Cost Optimization"],
    tools: ["Azure OpenAI", "Azure Application Insights", "LLM", "Vector Embeddings", "Grafana"],
    thumbnail: "/case-studies/gordian-ai/with-llm.png",
    hasAlgorithmBreakdown: true,
    team: {
      engineers: 5,
      designers: 1,
      productManagers: 1,
      timeline: "3 Month MVP → 12 Month Full Deployment"
    },
    stats: [
      { label: "Cost Reduction", value: "88%" },
      { label: "Coverage", value: "93%" },
      { label: "Gov Clients", value: "100+" }
    ],
    description:
      "AI-powered data pipeline using Azure OpenAI and vector embeddings for semantic matching. Transformed client onboarding for a $60M+ enterprise platform, reducing migration costs from $180K to $20K per client.",
    outcome: "Shipped to production serving 100+ government clients. 88% cost reduction in Professional Services hours while achieving 93% automated coverage.",
    process: [
      {
        type: "research",
        title: "The Problem",
        description: "Two problems were blocking growth. First, Professional Services was spending 3-4 months per enterprise client migrating legacy cost data into our standard format. At $180K per migration, this was killing deal margins. Second, we couldn't onboard mid-market clients at all. If a client's ARR was $60K but onboarding cost $180K, the deal math didn't work. Reducing onboarding to $20K would open up an entirely new market segment. The data challenge: clients had decades of construction cost data in proprietary formats, with thousands of line items that needed mapping to our 48M+ item database.",
      },
      {
        type: "interviews",
        title: "Getting Buy-In",
        description: "AI projects in enterprise software face heavy skepticism, especially with government clients. I proposed a limited POC: one client's dataset, one analyst, two-week timebox. Success criteria: 70% automated coverage with 95% accuracy on matched items. The POC exceeded targets, giving us the evidence to secure engineering resources and exec sponsorship for full build.",
      },
      {
        type: "research",
        title: "Customer Interviews",
        description: "Sat through sales calls with customers to understand their needs and pain points. Reviewed their sample datasets to identify patterns and edge cases. Met with Sales and Professional Services teams to identify beachhead customers who would be early adopters and provide feedback during development.",
      },
      {
        type: "design",
        title: "Architecture",
        description: "Built a tiered AI approach: vector embeddings for semantic similarity (finding similar items in our database), LLM routing for edge cases (ambiguous items routed to GPT-4 for reasoning), and human-in-the-loop QC (analysts validate AI suggestions with one-click approval). The key insight was that not every item needs the most expensive model. Routing logic determines the optimal path.",
      },
      {
        type: "prioritize",
        title: "Scaling & Optimization",
        description: "As we scaled, costs became critical. I ran benchmarks across model tiers (GPT-4 vs GPT-3.5-turbo vs embeddings-only) to find the optimal cost/accuracy tradeoff. Implemented semantic caching: if we've seen a similar item before, skip the API call. Built telemetry dashboards to track cost-per-migration and catch regressions early. Result: 70% reduction in token usage while maintaining accuracy.",
      },
    ],
    sections: [
      {
        title: "Why LLMs?",
        content: "Rule-based systems fail on messy real-world data. Construction items come with typos, abbreviations, and inconsistent naming. Traditional string matching marks 'Air Hndling Unt' as no match. LLMs understand semantic similarity and know it's the same as 'Air Handling Unit' despite the typo.",
        beforeImage: "/case-studies/gordian-ai/without-llm.png",
        afterImage: "/case-studies/gordian-ai/with-llm.png",
        beforeLabel: "Without LLM",
        afterLabel: "With LLM",
        caption: "Same input data, dramatically different results. LLMs handle variations, typos, and edge cases that break rule-based systems.",
      },
      {
        title: "Routing Logic",
        content: "Not every item needs the same treatment. High-confidence matches go through fast embedding lookups. Edge cases get routed to more expensive LLM reasoning. The multi-stage pipeline optimizes for both accuracy and cost.",
        imageUrl: "/case-studies/gordian-ai/llm-routing.png",
        caption: "Multi-stage routing: items flow through increasingly sophisticated matching until resolved.",
      },
      {
        title: "The Data Funnel",
        content: "See how items flow through the migration pipeline. Each stage filters and processes data, progressively matching items to our database.",
        carousel: [
          "/case-studies/gordian-ai/car1.png",
          "/case-studies/gordian-ai/car2.png",
          "/case-studies/gordian-ai/car3.png",
        ],
        caption: "Interactive visualization of items flowing through the multi-stage matching pipeline.",
      },
    ],
    clients: [
      { name: "Google", logo: "/case-studies/gordian-ai/logos/google.png" },
      { name: "DND Canada", logo: "/case-studies/gordian-ai/logos/dnd.png" },
      { name: "Harvard", logo: "/case-studies/gordian-ai/logos/harvard.png" },
      { name: "Johnson & Johnson", logo: "/case-studies/gordian-ai/logos/jnj.png" },
      { name: "Kenvue", logo: "/case-studies/gordian-ai/logos/kenvue.svg" },
      { name: "Mesa", logo: "/case-studies/gordian-ai/logos/mesa.png" },
      { name: "Sodexo", logo: "/case-studies/gordian-ai/logos/sodexo.svg" },
      { name: "ABM", logo: "/case-studies/gordian-ai/logos/abm.png" },
      { name: "BCME", logo: "/case-studies/gordian-ai/logos/bcme.png" },
      { name: "BSO", logo: "/case-studies/gordian-ai/logos/bso.png" },
      { name: "OEDU", logo: "/case-studies/gordian-ai/logos/oedu.png" },
      { name: "SFSD", logo: "/case-studies/gordian-ai/logos/sfsd.webp" },
      { name: "Walgreens", logo: "/case-studies/gordian-ai/logos/walgreen.png" },
    ],
    insights: [
      "Start with a constrained POC that proves value quickly. Two weeks beat six months of planning",
      "Not every AI task needs GPT-4. Smart routing between model tiers cut costs by 70% without sacrificing accuracy",
      "Human-in-the-loop isn't a fallback, it's the feature. Analysts trust the system because they stay in control"
    ],
    highlights: [
      "Owned full product lifecycle: discovery, requirements, architecture, delivery, and iteration",
      "Built telemetry dashboards with Azure Application Insights & Grafana for real-time cost monitoring",
      "QC features later adopted by Google and Canadian Department of Defence"
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
    tags: ["Enterprise SaaS", "Gov-tech", "Data Platform", "B2G"],
    tools: ["Azure Application Insights", "Grafana", "Jira", "Figma", "SQL Server"],
    thumbnail: "/projects/gordian-platform-thumbnail.png",
    team: {
      engineers: 8,
      designers: 2,
      qa: 2,
      productManagers: 1,
      timeline: "5+ Years (2022-Present)"
    },
    stats: [
      { label: "ARR Protected", value: "$48M+" },
      { label: "DAU Increase", value: "25%" },
      { label: "Experiments", value: "12+" }
    ],
    description:
      "Led product strategy for Gordian's flagship construction cost data platform serving 100+ government and enterprise clients. Ran 12+ experiments that drove a roadmap pivot, boosting DAU by 25% and protecting $48M+ in at-risk ARR through data quality features.",
    outcome: "Transformed a legacy platform into a data-driven product organization. Protected $48M+ in renewal revenue while increasing daily active usage by 25%.",
    process: [
      {
        type: "research",
        title: "The Challenge",
        description: "Gordian's RSMeans platform is the industry standard for construction cost data, serving 100+ government clients and enterprises. But after years of feature-driven development, the product had accumulated significant technical debt and UX friction. Clients were churning, and we lacked visibility into why. My mandate: transform the product organization from reactive to data-driven.",
      },
      {
        type: "interviews",
        title: "Building the Telemetry Foundation",
        description: "You cannot improve what you cannot measure. I partnered with engineering to instrument the platform with Azure Application Insights. We built dashboards tracking feature adoption, user flows, and drop-off points. For the first time, we could see which features clients actually used versus which ones we assumed they valued.",
      },
      {
        type: "research",
        title: "Discovering the Real Problems",
        description: "The telemetry revealed surprising patterns. Features we had invested heavily in had <5% adoption. Meanwhile, a basic data export function was used by 80% of clients daily. We conducted 30+ customer interviews to understand the gap between our roadmap and client needs. The core insight: clients did not need more features. They needed cleaner data and faster workflows.",
      },
      {
        type: "prioritize",
        title: "The Roadmap Pivot",
        description: "Armed with data, I proposed a controversial pivot: pause new feature development and focus entirely on data quality and core workflow optimization. I ran 12+ A/B experiments to validate hypotheses before committing engineering resources. Each experiment had clear success metrics and a two-week timebox. The experiments gave us confidence to make the pivot.",
      },
      {
        type: "design",
        title: "Data Quality as a Feature",
        description: "We built a data validation layer that caught errors before they reached clients. Implemented real-time data quality scores visible to both internal teams and clients. Created automated alerts for data anomalies. These unglamorous features became our biggest retention drivers.",
      },
    ],
    sections: [
      {
        title: "Feature Usage Tracking",
        content: "I built dashboards tracking unique feature usage across the platform. Q4 2025 data revealed clear patterns: GCP Data and VFA Data were the most-used features, while MIQ and SnapShot had minimal adoption. This data directly informed our Q1 2026 roadmap priorities.",
        charts: "usage",
        caption: "Interactive visualization: Hover over bars and pie slices to explore the data. Numbers hidden for confidentiality.",
      },
      {
        title: "Experiment-Driven Development",
        content: "Telemetry revealed a critical problem: only 40% of users completed the full workflow. Major drop-offs occurred at 'Run Algorithm' (users waited too long for processing) and 'Download Report' (large files timed out). I ran two experiments: (1) Added algorithm presets for common use cases, and (2) Moved large data processing to cloud with email notifications when complete. Result: completion rate jumped from 40% to 84%.",
        charts: "dropoff",
        caption: "Interactive before/after: Toggle to see how experiments improved workflow completion by 110%.",
      },
    ],
    insights: [
      "Telemetry is not optional for enterprise products. You cannot make good decisions without data on actual usage",
      "Sometimes the best product work is removing features, not adding them. Simplification drove our biggest adoption gains",
      "Data quality is invisible when it works and catastrophic when it fails. Investing in unglamorous infrastructure paid off in retention"
    ],
    highlights: [
      "Built telemetry infrastructure from scratch with Azure Application Insights and Grafana",
      "Ran 12+ controlled experiments to validate roadmap decisions before committing resources",
      "Protected $48M+ in at-risk ARR by prioritizing data quality over new features"
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
    title: "SpareHub: Fleet Manager",
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
