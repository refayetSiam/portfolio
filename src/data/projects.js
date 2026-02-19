// Projects data
// Place thumbnail images in public/projects/ folder
// Example: thumbnail: "/projects/gordian-thumbnail.png"

export const PROJECTS = [
  // 1. AI Data Migration Engine - Gordian
  {
    id: "gordian-ai",
    title: "AI Data Migration Engine",
    company: "Gordian",
    role: "Product Manager: Enterprise Data Platform",
    companyLogo: "/logos/gordian.webp",
    productLabel: "Product Shipped",
    color: "#FF6B35",
    accent: "#FFE0D0",
    tag: "Enterprise AI",
    tags: ["Enterprise AI", "Azure OpenAI", "Data Migration", "Cost Optimization"],
    tools: ["Azure OpenAI", "Azure Application Insights", "LLM", "Vector Embeddings", "Grafana"],
    thumbnail: "/case-studies/gordian-ai/gor-ai-thumbnail.png",
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
    role: "Product Manager: Enterprise Data Platform",
    companyLogo: "/logos/gordian.webp",
    productLabel: "Product Shipped",
    color: "#8B5CF6",
    accent: "#EDE9FE",
    tag: "Enterprise SaaS",
    tags: ["Enterprise SaaS", "Gov-tech", "Data Platform", "B2G"],
    tools: ["Azure Application Insights", "Grafana", "Jira", "Figma", "SQL Server"],
    thumbnail: "/case-studies/gordian-platform/platform-thumbnail.png",
    hasMultiProductOverview: true,
    team: {
      engineers: 8,
      designers: 2,
      qa: 2,
      productManagers: 1,
      timeline: "5+ Years (2019-Present)"
    },
    stats: [
      { label: "ARR Protected", value: "$48M+" },
      { label: "DAU Increase", value: "25%" },
      { label: "Experiments", value: "12+" }
    ],
    description:
      "Owned the data layer between incoming client data and Gordian's flagship Capital Planning Software. Every data point that flows through becomes part of state, federal, and municipal budgets. Data quality is mission-critical.",
    outcome: "Protected $48M+ in at-risk ARR through data quality features while increasing daily active usage by 25%.",
    process: [
      {
        type: "research",
        title: "Context",
        description: "Gordian's Capital Planning Software is the industry standard for construction cost estimation, serving 100+ government clients and enterprises. I owned the data platform that sits between incoming client data and this flagship product. Every data point that flows through eventually becomes part of state, federal, and municipal budgets, so data quality isn't just important, it's mission-critical.",
      },
      {
        type: "design",
        title: "Products Managed: Data Validation",
        description: "Since all incoming data feeds into capital planning budgets, we need to ensure only clean, validated data enters the system. I managed the data validation product that catches errors, inconsistencies, and anomalies before they can impact downstream budget calculations. Real-time validation rules process thousands of records, flagging issues for review before they become costly mistakes.",
      },
      {
        type: "interviews",
        title: "Products Managed: Data Review Tool",
        description: "Think of it like code review, but for facilities data. The Data Review Tool gives stakeholders visibility into what data is being submitted, who submitted it, and what changed. It creates an audit trail and approval workflow that's essential for government clients who need accountability at every step. This transparency became a key differentiator in enterprise sales.",
      },
      {
        type: "prioritize",
        title: "New Product Launched: AI Data Migration",
        description: "Launched an industry-first AI-powered data migration engine that reduced client onboarding costs by 88% ($180K to $20K per migration). This opened up the mid-market segment that was previously uneconomical to serve. See the AI Data Migration Engine case study for the full breakdown of the technical approach and business impact.",
      },
    ],
    sections: [
      {
        title: "Feature Tracking & Continuous Improvement",
        content: "I built telemetry dashboards tracking unique feature usage across the platform. You can't improve what you can't measure. Q4 2025 data revealed clear patterns: some features had heavy daily usage while others sat unused. This data directly informed roadmap priorities and helped us make evidence-based decisions about where to invest engineering resources.",
        charts: "usage",
        caption: "Interactive visualization: Hover over bars and pie slices to explore the data. Numbers hidden for confidentiality.",
      },
      {
        title: "Experiment-Driven Development: An Example",
        content: "Telemetry revealed only 40% of users completed the full workflow. Major drop-offs occurred at 'Run Algorithm' (processing took too long in-browser) and 'Download Report' (large files timed out). Rather than guessing at solutions, I ran controlled experiments. Experiment 1: Added algorithm presets for common use cases. Experiment 2: Moved large data processing to cloud with email notifications when complete. The result: completion rate jumped from 40% to 84%, a 110% improvement validated by data, not intuition.",
        charts: "dropoff",
        caption: "Toggle between Before and After to see how targeted experiments improved workflow completion.",
      },
    ],
    insights: [
      "Telemetry is not optional for enterprise products. You can't make good decisions without data on actual usage",
      "When your data feeds into government budgets, quality isn't a feature. It's the product.",
      "Experiment before you commit. Two-week timeboxed tests saved us from building the wrong things"
    ],
    highlights: [
      "Owned product strategy for data validation, data review, and AI migration products",
      "Built telemetry infrastructure from scratch with Azure Application Insights and Grafana",
      "Protected $48M+ in at-risk ARR by prioritizing data quality over new features"
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
    ]
  },
  // 3. Natural Assets Platform - Novion
  {
    id: "novion",
    title: "Natural Assets Platform",
    company: "Novion (Co-founder)",
    role: "Product Lead",
    companyLogo: "/logos/novion.webp",
    productLabel: "Product Shipped",
    color: "#22C55E",
    accent: "#D1FAE5",
    tag: "Climate Tech",
    tags: ["Climate Tech", "GovTech", "Satellite Imagery", "GIS", "B2G"],
    tools: ["Satellite Imagery", "GIS", "NDVI Analysis", "Python", "PostgreSQL", "React"],
    thumbnail: "/case-studies/novion/skyvision.png",
    hasMultiProductOverview: true,
    team: {
      engineers: 3,
      designers: 1,
      sales: 1,
      productManagers: 1,
      timeline: "2022-2024"
    },
    stats: [
      { label: "Revenue", value: "$200K+" },
      { label: "Gov Agencies", value: "7" },
      { label: "Budget Influenced", value: "$190M+" }
    ],
    description:
      "Co-founded a satellite-powered natural asset management platform helping Canadian municipalities comply with new climate regulations. Conducted discovery with 40+ municipalities to shape product direction. From zero to $200K+ ARR across 7 institutional clients, influencing $190M+ in municipal budgets.",
    outcome: "Built and shipped a full lifecycle management platform for municipal natural assets. Clients can now inventory, value, and plan maintenance for forests, wetlands, and urban greenery, turning regulatory compliance into a competitive advantage.",
    process: [
      {
        type: "research",
        title: "The Regulatory Shift",
        description: "Canadian legislation is driving municipalities to account for natural assets. Ontario Regulation 588/17 mandates including natural assets in asset management plans. CSA W218:23 defines standards for natural asset inventories. The Green Municipal Fund has allocated $1.6B for climate adaptation. Cities need to comply, but most lack the tools to inventory and value their natural assets at scale."
      },
      {
        type: "interviews",
        title: "40+ Municipal Interviews",
        description: "I led discovery calls with 40+ municipalities across Canada, speaking with asset managers, city planners, and sustainability officers. The pattern was clear: cities knew they had valuable natural assets (wetlands that prevent flooding, urban trees that sequester carbon), but they had no systematic way to inventory them, assess their condition, or justify budget for maintenance. Most relied on manual surveys that were expensive and outdated the moment they were completed."
      },
      {
        type: "design",
        title: "Product: Novion SkyVision",
        description: "Built satellite-powered asset inventory and condition assessment. High-resolution satellite imagery is processed using multi-spectral bands to identify and classify natural assets (forests, wetlands, grasslands, water bodies). NDVI (Normalized Difference Vegetation Index) analysis provides condition scoring on a 1-5 scale, identifying deterioration, deforestation, or environmental stress. All without sending a single person into the field.",
        imageUrl: "/case-studies/novion/skyvision.png"
      },
      {
        type: "prioritize",
        title: "Product: Novion Land Ledger",
        description: "Created a valuation engine that aggregates city-specific natural asset data. For each asset class, we calculate service value (carbon sequestration, stormwater management, air quality improvement) and replacement costs. A wetland provides $2.02/m²/year in ecosystem services. Urban trees provide millions in economic benefit. These valuations give cities the data they need to justify budget allocation and prioritize maintenance projects."
      }
    ],
    sections: [
      {
        title: "Satellite-Powered Condition Assessment",
        content: "Traditional condition assessments require expensive field surveys. We use NDVI satellite imagery to assess vegetation health across an entire city in hours, not months. The system detects changes over time, identifying areas where vegetation is stressed, where deforestation is occurring, or where restoration efforts are succeeding. Year-over-year comparisons let cities track the health of their natural assets without leaving the office.",
        imageUrl: "/case-studies/novion/ndvi.png",
        caption: "NDVI analysis showing vegetation health. Green = healthy, Red = stressed."
      },
      {
        title: "From Data to Capital Planning",
        content: "The platform's Projects module integrates directly with SkyVision's inventory data, transforming asset conditions into actionable capital plans. Each asset has calculated service values and replacement costs. Cities can generate multi-year funding scenarios, compare investment strategies (BAU vs canopy expansion), and prioritize maintenance projects based on condition scores. Our valuations directly influenced $190M+ in municipal budget decisions.",
        charts: "capex",
        caption: "Interactive 10-year capital forecast: Compare BAU vs growth scenarios with 3-year moving averages."
      }
    ],
    insights: [
      "Regulatory tailwinds create opportunity. When governments mandate new requirements, the first compliant solution wins. We positioned early for natural asset regulations.",
      "Satellite data is a force multiplier. What used to require months of field surveys can now be done in hours with the right imagery and algorithms.",
      "B2G sales cycles are long but sticky. Government contracts take time to close, but once you're in, you're often the incumbent for years."
    ],
    highlights: [
      "Co-founded and led product strategy from concept to $200K+ ARR",
      "Conducted discovery with 40+ municipalities to shape product direction",
      "Built satellite-powered inventory system processing city-wide imagery",
      "Influenced $190M+ in municipal budget decisions across 7 institutional clients"
    ],
    clients: [
      { name: "City of Vancouver", logo: "/case-studies/novion/clients/cov.png" },
      { name: "UBC", logo: "/case-studies/novion/clients/ubc.png" },
      { name: "Town of Okotoks", logo: "/case-studies/novion/clients/okotoks.png" },
      { name: "City of Prince George", logo: "/case-studies/novion/clients/pg.png" },
      { name: "City of Burnaby", logo: "/case-studies/novion/clients/cob.jpg" },
      { name: "Conservation Foundation", logo: "/case-studies/novion/clients/cf.png" },
      { name: "Canadian Nature Works", logo: "/case-studies/novion/clients/cnw.png" },
    ]
  },
  // 4. Data Validation Middleware - Accruent
  {
    id: "accruent-middleware",
    title: "Data Validation",
    company: "Accruent",
    role: "Technical Product Manager",
    companyLogo: "/logos/accruent.png",
    productLabel: "Data Product",
    color: "#F59E0B",
    accent: "#FEF3C7",
    tag: "Enterprise Software",
    tags: ["Enterprise SaaS", "Data Quality", "Gov-tech", "B2B"],
    tools: ["SQL", "Data Pipelines", "Validation Rules", "User Research"],
    thumbnail: "/case-studies/accruent/data_issue.png",
    hasAlgorithmBreakdown: true,
    team: {
      engineers: 4,
      productManagers: 1,
      timeline: "2020-2021"
    },
    stats: [
      { label: "Error Reduction", value: "50%+" },
      { label: "Adoption", value: "~90%" },
      { label: "Products Integrated", value: "3" }
    ],
    description:
      "Owned the data quality control feature for an enterprise IWMS platform. Data pipelines from 3 products fed into our system, and the numbers we produced went directly into municipal, provincial, and federal budgets. After customer churn signaled data trust issues, I led the initiative to build validation that reduced errors by 50%+ and became an RFP differentiator.",
    outcome: "Reduced data errors by 50%+ for customers using the feature. Within two years, nearly every customer adopted it as part of their standard workflow. The feature became a competitive differentiator in RFPs, helping win new government clients.",
    process: [
      {
        type: "research",
        title: "The Problem: Garbage In, Garbage Out",
        description: "Data entered via different sources (3rd party contractors, client uploads, manual entry) introduced inconsistencies and errors. These errors propagated across the database and into features used by clients. For government customers, this was critical: inaccurate reporting affected capital planning budgets at the municipal, provincial, and federal level."
      },
      {
        type: "interviews",
        title: "Customer Discovery",
        description: "User churn signaled something was wrong. I spoke with customers to understand their pain points around data quality. The pattern was clear: they didn't trust the numbers, and when budgets are at stake, trust is everything. Some errors were on our side, but many originated from client processes before data even reached us."
      },
      {
        type: "design",
        title: "Defining the Rules",
        description: "I owned both what we should validate and how it would be implemented. That meant working with customers to define validation rules, partnering with engineering on the architecture, and designing workflows for different user types. The challenge: catch real errors without creating alert fatigue from false positives."
      },
      {
        type: "prioritize",
        title: "User Education",
        description: "Building the feature was half the battle. The other half was educating users on what the system could and couldn't catch, especially helping them understand when a process issue on their side was creating bad data before it even got to us. This reduced support tickets and improved overall data quality at the source."
      }
    ],
    sections: [
      {
        title: "The Data Flow Problem",
        content: "Manual data entry from multiple sources (contractors, clients, internal teams) introduced errors that propagated through the database and into client-facing features. For government clients, these errors could affect millions in budget decisions. We needed validation that caught errors early without disrupting existing workflows.",
        imageUrl: "/case-studies/accruent/data_issue.png",
        caption: "Pre-QC vs Post-QC: Error propagation from manual entry to inaccurate capital planning reports."
      },
      {
        title: "Engineering the Validation Engine",
        content: "I worked closely with engineering to design and test the validation middleware. We ran benchmarks across 5 production datasets, from 5K to 443K records, to ensure the system could handle enterprise scale. The engine achieved 72-89% automatic identification rates with error rates under 2%, processing even the largest datasets in under 3 minutes.",
        charts: "middleware",
        caption: "Production benchmark results across VFA and Data Integrity modules."
      }
    ],
    insights: [
      "Data quality is a trust problem. When customers don't trust your numbers, they leave, even if the underlying product is solid.",
      "Not all errors are your fault, but they're all your problem. Helping customers fix their upstream processes was as important as fixing our validation.",
      "For government clients, accuracy isn't a feature. It's table stakes. Being the only vendor with data validation at scale became our RFP advantage."
    ],
    highlights: [
      "Owned data quality control feature end-to-end: requirements, architecture, and user adoption",
      "Integrated validation across data pipelines from 3 separate products",
      "Reduced data errors by 50%+ and achieved ~90% customer adoption in 2 years",
      "Feature became RFP differentiator, helping win new government clients"
    ]
  },
  // 5. SpareHub - Fleet Manager
  {
    id: "sparehub",
    title: "SpareHub: Fleet Manager",
    company: "Product Concept",
    role: "Product Lead",
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
    isProductExercise: true,
    productExerciseNote: "This is a product exercise I completed to demonstrate end-to-end PM skills: problem discovery, user research, prioritization, and solution design. The scenario is fictional, but the process and deliverables reflect how I approach real product challenges.",
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
  }
];
