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
    productLabel: "Product Shipped",
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
  },
  // 6. Leverage-AI - Condo Due Diligence
  {
    id: "leverage-ai",
    title: "Leverage-AI",
    company: "Side Project",
    role: "Solo Builder",
    productLabel: "Shipped",
    color: "#10B981",
    accent: "#D1FAE5",
    tag: "AI Agent",
    tags: ["AI Agent", "Real Estate", "Web Scraping", "Full Stack"],
    tools: ["React", "TypeScript", "Firebase", "Tavily API", "Kimi/Moonshot LLM", "Firestore", "Tailwind"],
    thumbnail: "/case-studies/leverage-ai/Sample Report.png",
    demoUrl: "https://leverage-ai.ca/",
    team: {
      engineers: 1,
      timeline: "January 2026"
    },
    stats: [
      { label: "Report Time", value: "~40s" },
      { label: "Cost/Report", value: "$0.03" },
      { label: "Developer Profiles", value: "143" }
    ],
    description:
      "An AI agent that generates comprehensive condo due-diligence reports from just an address. Type in a unit and get comparable sales, price history, developer reputation, neighbourhood risks, fair value estimate, and negotiation strategy. The kind of research a good realtor would do, automated and transparent.",
    outcome: "Full autonomous pipeline generating investor-grade condo reports in ~40 seconds at $0.03 per report. Every search query, URL, and LLM call is logged and downloadable. No black box.",
    process: [
      {
        type: "research",
        title: "Why This Exists",
        description: "Buying a condo in Vancouver is intimidating. Most people trust their realtor blindly because they don't know what questions to ask. This tool gives you the same information a good realtor would research: what similar units sold for, whether the developer has lawsuits, whether strata fees are rising fast, whether there's a social housing project being built next door. It doesn't replace a realtor. It gives you the knowledge to have a better conversation with one."
      },
      {
        type: "design",
        title: "4-Stage Autonomous Pipeline",
        description: "This isn't a 'send address to ChatGPT' wrapper. It's a 4-stage pipeline where each stage searches the web, extracts data, validates it, and passes structured results to the next. Stage 1 (Property & Comps, ~15s): constructs search queries across 4 real estate sites, discovers MLS numbers, extracts HTML via headless rendering, runs regex parsers, then conditionally calls LLMs for gaps. Stage 2 (Developer Research, ~10s): checks a curated cache of 143 developer profiles first, skips web searches entirely on cache hit. Stage 3 (Neighbourhood & Risk, ~10s): searches for special levies, development permits, rezoning, and forum signals. Stage 4 (Synthesis, ~5s): cross-validates everything, computes fair value range, generates buy/hold/avoid signal."
      },
      {
        type: "prioritize",
        title: "Hybrid Extraction: Regex + LLM",
        description: "V1 was 100% LLM for data extraction, which was unreliable and expensive. Comp data on condos.ca appears in the same HTML structure every time, so regex is faster, cheaper, and deterministic. The LLM only gets called when regex leaves gaps. This dropped Stage 1 costs from ~$0.15 to ~$0.03 per report. Before sending content to the LLM, a custom parser strips navigation, footers, and boilerplate, cutting token usage by ~60%."
      },
      {
        type: "interviews",
        title: "Data Quality & Observability",
        description: "Every URL gets a source quality score by domain (BC Assessment = 0.9, condos.ca = 0.7, Reddit = 0.3). Scores feed into confidence calculations and determine how much weight a data point gets in synthesis. MLS cross-referencing catches bad data: if a page returns data for the wrong unit, it flags that MLS and drops all associated pages. Every search query, extraction, and LLM call is logged in a PipelineLog object. Users can download the full log as JSON."
      }
    ],
    sections: [
      {
        title: "Sample Due-Diligence Report",
        content: "The system makes its own decisions about what to search, which URLs to extract, and when to call an LLM vs. when regex is sufficient. Three parallel LLM calls analyze pages grouped by source, then a fourth merge call consolidates everything. Deterministic fields like days-on-market and relist count are computed in code, not by the LLM.",
        imageUrl: "/case-studies/leverage-ai/Sample Report.png",
        caption: "Full condo report generated in ~40 seconds from just an address."
      },
      {
        title: "Dashboard Intelligence",
        content: "Separate from the reports, the app pulls live data from Bank of Canada (interest rates) and Statistics Canada (unemployment, CPI, building permits, housing price index) APIs. 20 years of historical data, auto-refreshed hourly. Gives buyers macro context alongside the micro analysis of their specific unit.",
        imageUrl: "/case-studies/leverage-ai/DataIntelligence Dashboard.png",
        caption: "Live economic indicators from Bank of Canada and Statistics Canada APIs."
      },
      {
        title: "Step-by-Step Buyer's Guide",
        content: "A kanban-style buyer's guide that walks first-time condo buyers through every stage of the purchase process. Each column represents a phase, from initial research through closing. Practical checklists and action items at every step.",
        imageUrl: "/case-studies/leverage-ai/StepbyStep Buyers Guide.png",
        caption: "Interactive buyer's guide with phase-by-phase checklists."
      }
    ],
    insights: [
      "Regex-first extraction with LLM fallback cut costs by 80% while improving reliability. Not everything needs AI.",
      "Caching 143 developer profiles saves an entire pipeline stage per report. Small lookup tables beat expensive API calls.",
      "Full observability builds trust. Users can download every search query and LLM call as JSON. No black box."
    ],
    highlights: [
      "Built a 4-stage autonomous AI pipeline generating reports in ~40 seconds",
      "Hybrid regex + LLM extraction reduced per-report cost from $0.15 to $0.03",
      "Curated 143 developer profiles with fuzzy matching for instant cache hits",
      "Integrated Bank of Canada and Statistics Canada APIs for live economic data"
    ]
  },
  // 7. VoicePrep - Speech Coaching
  {
    id: "voiceprep",
    title: "VoicePrep",
    company: "Side Project",
    role: "Solo Builder",
    productLabel: "Shipped",
    color: "#6366F1",
    accent: "#E0E7FF",
    tag: "AI + Audio",
    tags: ["AI", "Audio Analysis", "Speech Coaching", "Full Stack"],
    tools: ["React", "TypeScript", "Firebase", "OpenAI GPT-4o", "Whisper", "Kimi K2.5", "Zustand", "Tailwind"],
    thumbnail: "/case-studies/voiceprep/thumbnail.png",
    demoUrl: "https://voiceprep-r1.web.app/",
    team: {
      engineers: 1,
      timeline: "February 2026"
    },
    stats: [
      { label: "Analysis Time", value: "<15s" },
      { label: "Scoring Dims", value: "6" },
      { label: "AI Layers", value: "3" }
    ],
    description:
      "A speech coaching app for high-stakes moments. Record yourself answering a question, and the app runs your audio through three layers of AI analysis: transcription with confidence scoring, signal extraction (pacing, clarity, filler words), and structured coaching across 6 dimensions. Built for the night before, not the long term.",
    outcome: "Multi-model analysis pipeline that processes a 2-minute recording in under 15 seconds. Provides word-level feedback on delivery mechanics, per-question coaching rules, and cross-session tracking to measure improvement between takes.",
    process: [
      {
        type: "research",
        title: "The Gameday Gap",
        description: "The speech coaching space is full of tools that help you become a better speaker over time. Yoodli, Orai, Poised, SpeakEasy. They track filler words across weeks, give long-term trends, assign exercises. That's fine if your presentation is in 3 months. But what about when it's tomorrow? There's nothing for the person who has a final-round interview in 18 hours and wants to run through their answers 3-4 times tonight with precise feedback between each take. No one owns that last-mile, rapid-iteration loop."
      },
      {
        type: "design",
        title: "3-Layer Analysis Pipeline",
        description: "Layer 1: GPT-4o Transcribe converts audio to text and returns per-token log-probabilities. Words the model struggled to recognize (logprob below -1.2) are likely words you mumbled or mispronounced. Whisper runs in parallel to provide word-level timestamps for pacing analysis. Layer 2: Three independent signal extractors run on the results. Pacing analysis calculates WPM in sliding 10-second windows and detects long pauses. Clarity analysis identifies low-confidence words and filler words with smart filtering. A struggling words tracker monitors pronunciation across sessions. Layer 3: All signals feed into Kimi K2.5 for structured coaching."
      },
      {
        type: "prioritize",
        title: "6-Dimension Coaching",
        description: "The coaching model scores you across clarity, pacing, vocal delivery, confidence, structure, and conciseness. Every piece of feedback references a specific moment. Not 'try to speak more clearly' but 'at 0:45, you rushed through infrastructure, slow down on the second syllable.' The model also returns your top 3 actions, the highest-impact things to fix before your next attempt. Coaching rules are customizable per question. Want the AI to focus on storytelling for a behavioral question? Want it ruthless about filler words for a sales pitch? You control it."
      },
      {
        type: "interviews",
        title: "Competitive Positioning",
        description: "Yoodli and Orai do general speaking improvement over time. Pramp and Interviewing.io give you live mock interviews with scheduling friction and subjective feedback. ChatGPT reviews your content but knows nothing about how you sound. Recording yourself gives you no structured feedback. VoicePrep is the warmup room, not the gym. You open it the night before, drill your specific answers, get machine-precise feedback, re-record, and watch scores climb. Everyone practices out loud before high-stakes moments, but no one had a tool that listens back and tells them exactly what to fix."
      }
    ],
    sections: [
      {
        title: "The Analysis Pipeline",
        content: "Your audio passes through parallel API calls: GPT-4o Transcribe for confidence-scored transcription, Whisper for word-level timestamps, then three signal extractors for pacing, clarity, and struggling words. All of this feeds into the coaching LLM. The pipeline runs client-side with parallel calls, keeping total analysis time under 15 seconds for a 2-minute recording.",
        imageUrl: "/case-studies/voiceprep/pipeline.png",
        caption: "Multi-model analysis pipeline: transcription, signal extraction, and AI coaching in parallel."
      },
      {
        title: "Feedback That's Actually Useful",
        content: "The annotated transcript shows color-coded highlights: red for mumbled words, orange for fillers, blue for long pauses. A WPM chart shows pacing over time with green/red zones. A radar chart gives your 6 scores at a glance. Session history lets you track improvement across attempts on the same question. The struggling words page persists across sessions with IPA pronunciation guides and mouth placement tips.",
        imageUrl: "/case-studies/voiceprep/feedback.png",
        caption: "Annotated transcript with word-level highlights, pacing chart, and radar scoring."
      }
    ],
    insights: [
      "Log-probabilities from transcription models are an underused signal. Low confidence on a word strongly correlates with mumbling or mispronunciation.",
      "Per-question coaching rules make generic AI feedback specific. A behavioral interview needs different scoring weights than a sales pitch.",
      "The rapid-iteration loop (record, fix, re-record, compare) matters more than any single analysis. Progress between takes keeps users engaged."
    ],
    highlights: [
      "Built a 3-layer analysis pipeline combining GPT-4o, Whisper, and Kimi K2.5",
      "Per-token log-probabilities detect mumbled words at the syllable level",
      "6-dimension scoring with timestamp-referenced, actionable feedback",
      "Cross-session struggling words tracker with IPA pronunciation guides"
    ]
  },
  // 8. FlowBricks - Coming Soon
  {
    id: "flowbricks",
    title: "FlowBricks",
    company: "Side Project",
    role: "Solo Builder",
    productLabel: "In Progress",
    color: "#EC4899",
    accent: "#FCE7F3",
    tag: "Coming Soon",
    tags: ["Coming Soon"],
    tools: [],
    thumbnail: "/case-studies/flowbricks/thumbnail.png",
    demoUrl: "https://flowbrick.web.app/",
    team: {
      engineers: 1,
      timeline: "March 2026"
    },
    stats: [],
    description: "Details coming soon.",
    outcome: "",
    process: [],
    sections: [],
    insights: [],
    highlights: []
  }
];
