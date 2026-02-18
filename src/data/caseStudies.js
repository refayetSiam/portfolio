export const CASE_STUDIES = [
  {
    id: "sparehub-fleet-manager",
    title: "SpareHub: Fleet Manager for Transit",
    company: "Product Concept",
    color: "#3B82F6",
    accent: "#DBEAFE",
    problem: "Transitland Paratransit Service operates 300 buses across 2 garages serving elderly and disabled riders. Their maintenance team struggles with paper-based work orders, leading to missed preventive maintenance and unplanned breakdowns. Operations managers lack visibility into fleet availability, causing last-minute scrambles when buses fail pre-trip inspections.",
    approach: "Mapped stakeholder pain points across Operations and Maintenance teams. Built a unified platform with role-specific views - Operations sees fleet availability forecasts, Maintenance sees work orders and parts inventory.",
    outcome: "Designed solution targeting 100% digital work order adoption, 90% reduction in parts stockouts, and 80% fleet utilization rate.",
    tags: ["Transit Tech", "B2G", "Multi-Persona", "Fleet Operations"],
    personas: ["Operations Manager", "Maintenance Team"],
    loomUrl: "https://www.loom.com/share/8ff7482bef954d78bc53e13f049117e7",
    demoUrl: "https://spare-hub-fknk.vercel.app/login",
    demoCredentials: {
      username: "Demo",
      email: "account@demo.com",
      note: "Choose a persona (Operations or Maintenance)"
    },
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
    // Narrative sections with images
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
    ]
  },
  {
    id: "fleet-manager-design",
    title: "Fleet Manager: UX Deep Dive",
    company: "Product Concept",
    color: "#8B5CF6",
    accent: "#EDE9FE",
    problem: "How do you design one platform that serves two user groups with fundamentally different mental models? Operations managers think in routes and schedules. Maintenance teams think in components and work orders. Their data needs overlap but their workflows don't.",
    approach: "Led discovery to map both personas' workflows. Created a unified data model with role-specific views. Tested prototypes with actual transit authority staff.",
    outcome: "Validated product-market fit through user testing. Both personas rated the prototype 4.5/5 for workflow alignment.",
    tags: ["User Research", "Stakeholder Management", "Prototyping"],
    personas: ["Operations Manager", "Maintenance Team"],
    loomUrl: "https://www.loom.com/share/8ff7482bef954d78bc53e13f049117e7",
    demoUrl: "https://spare-hub-fknk.vercel.app/login",
    demoCredentials: {
      username: "Demo",
      email: "account@demo.com",
      note: "Choose a persona (Operations or Maintenance)"
    },
    process: [
      {
        type: "research",
        title: "The Research Question",
        description: "Before writing a line of code, I needed to answer a fundamental design question: can one product serve two user groups with conflicting priorities? Operations wants maximum fleet availability. Maintenance wants adequate time for proper repairs. These goals often conflict.",
      },
      {
        type: "prioritize",
        title: "Feature Prioritization",
        description: "I ranked all 9 identified features by impact and implementation feasibility. I cut predictive maintenance (P5) despite being 'cool tech' - there wasn't enough historical data to make predictions valuable yet. Instead, I focused on digitizing paper workflows first, solving immediate pain before adding intelligence.",
      },
      {
        type: "design",
        title: "Information Architecture",
        description: "I designed the IA around a shared data model with persona-specific views. The same 'bus' entity appears in both experiences, but Operations sees it as part of a route while Maintenance sees it as a collection of components with maintenance histories. This approach kept the system simple while respecting each persona's mental model.",
      },
    ],
    insights: [
      "Two personas need the same data presented in fundamentally different ways - Operations sees fleet-level views, Maintenance sees component-level details",
      "Mobile-first for field mechanics working in garages, desktop-first for office managers running reports",
      "Compliance reporting was the 'must-have' feature for procurement sign-off - solving user pain is necessary but not sufficient for B2G sales"
    ],
    sections: [
      {
        title: "Role-Based Access Control",
        content: "The sidebar navigation changes completely based on user role. Operations users see Fleet Summary, Fleet Inventory, and Reporting. Maintenance users see Maintenance Summary, Work Orders, Components, and Fleet Inventory. Same underlying system, but each persona only sees what's relevant to their job.",
        imageUrl: "/case-studies/sparehub/ops_dash.png",
        caption: "Operations view: Fleet Summary, Fleet Inventory, Reporting navigation",
      },
      {
        title: "Component-Level Thinking",
        content: "The Maintenance view surfaces component inventory status prominently - out-of-stock items (3 types depleted) and low-stock items (14 running low) get visual alerts. This directly addresses the pain point of running out of brake pads. The 'Manage Inventory' CTA drives immediate action.",
        imageUrl: "/case-studies/sparehub/maintenance_dash.png",
        caption: "Maintenance view: Component Inventory with out-of-stock and low-stock alerts",
      },
    ]
  }
];
