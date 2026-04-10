import type {
  DashboardPlaceholderPageData,
  DashboardPlaceholderPageKey,
} from "./types";

export const dashboardPlaceholderPageData: Record<
  DashboardPlaceholderPageKey,
  DashboardPlaceholderPageData
> = {
  "market-intelligence": {
    eyebrow: "Insights",
    title: "Market Intelligence",
    description:
      "Monitor demand shifts, pricing signals, and category-level movement across the market.",
    stats: [
      {
        label: "Tracked Categories",
        value: "24",
        note: "Updated from the latest ingestion cycle.",
      },
      {
        label: "Weekly Movers",
        value: "08",
        note: "Categories with the strongest acceleration this week.",
      },
      {
        label: "Pricing Alerts",
        value: "13",
        note: "Potential pricing gaps worth reviewing.",
      },
    ],
    sections: [
      {
        title: "What To Review",
        description:
          "Start with the highest-signal areas for the next iteration.",
        items: [
          "Outerwear is showing stronger sell-through than the prior two weeks.",
          "Premium basics are holding price better than trend-led categories.",
          "Footwear markdown pressure remains elevated across mass channels.",
        ],
      },
      {
        title: "Next Steps",
        description:
          "Minimal placeholder content until the full module is built.",
        items: [
          "Connect category snapshots to live analytics.",
          "Add competitor filters and time-range controls.",
          "Expose alert detail panels from this summary page.",
        ],
      },
    ],
  },
  studio: {
    eyebrow: "Workspace",
    title: "The Studio",
    description:
      "Organize concept development, working directions, and creative notes in one place.",
    stats: [
      {
        label: "Concept Boards",
        value: "06",
        note: "Boards currently pinned for the active season.",
      },
      {
        label: "Draft Looks",
        value: "19",
        note: "Looks saved for internal review.",
      },
      {
        label: "Open Tasks",
        value: "11",
        note: "Items waiting for feedback or enrichment.",
      },
    ],
    sections: [
      {
        title: "Current Focus",
        description:
          "A compact placeholder view for the upcoming studio workflow.",
        items: [
          "Refine color and silhouette direction for the resort capsule.",
          "Collect references tied to the strongest demand signals.",
          "Prepare annotated look sets for cross-team review.",
        ],
      },
      {
        title: "Planned Enhancements",
        description: "These are the pieces this screen will eventually host.",
        items: [
          "Editable moodboards and saved references.",
          "Shared comments and approval checkpoints.",
          "Direct links from insights into creative boards.",
        ],
      },
    ],
  },
  gallery: {
    eyebrow: "Assets",
    title: "Gallery",
    description:
      "Browse saved visuals, references, and generated outputs for ongoing workstreams.",
    stats: [
      {
        label: "Saved Images",
        value: "148",
        note: "Combined references, crops, and selected outputs.",
      },
      {
        label: "Collections",
        value: "12",
        note: "Curated sets grouped by theme or campaign.",
      },
      {
        label: "Ready To Review",
        value: "27",
        note: "Assets that still need tagging or approval.",
      },
    ],
    sections: [
      {
        title: "Recent Collections",
        description: "Placeholder content for the future gallery browser.",
        items: [
          "Summer neutrals and resort references.",
          "Utility-inspired trims and hardware details.",
          "High-contrast styling cues from premium competitors.",
        ],
      },
      {
        title: "Upcoming Capabilities",
        description:
          "The page is routed and active, with minimal content for now.",
        items: [
          "Grid and masonry browsing modes.",
          "Tagging by product family and palette.",
          "Quick handoff into Trend Search and Studio.",
        ],
      },
    ],
  },
  dashboards: {
    eyebrow: "Reporting",
    title: "Dashboards",
    description:
      "Access high-level reporting views and drill into overview or analytics sections.",
    stats: [
      {
        label: "Active Views",
        value: "02",
        note: "Overview and analytics are available from the sidebar.",
      },
      {
        label: "Tracked KPIs",
        value: "15",
        note: "Core metrics planned for the reporting layer.",
      },
      {
        label: "Scheduled Exports",
        value: "04",
        note: "Recurring reports configured for stakeholders.",
      },
    ],
    sections: [
      {
        title: "Available Paths",
        description:
          "Use this page as the parent entry point for dashboard routes.",
        items: [
          "Open Overview for an executive snapshot.",
          "Open Analytics for deeper metric inspection.",
          "Keep this parent page as the stable landing route.",
        ],
      },
      {
        title: "Implementation Notes",
        description:
          "Minimal content now, matching the current dashboard shell.",
        items: [
          "Parent route is now clickable from the sidebar.",
          "Child routes remain available under the same nav group.",
          "Active state follows the current pathname.",
        ],
      },
    ],
  },
  "dashboards-overview": {
    eyebrow: "Reporting",
    title: "Dashboards Overview",
    description:
      "A compact executive summary for performance, pipeline health, and near-term opportunities.",
    stats: [
      {
        label: "Revenue Signal",
        value: "+12%",
        note: "Illustrative placeholder growth versus prior period.",
      },
      {
        label: "Conversion Trend",
        value: "3.8%",
        note: "Represents the top-line conversion snapshot.",
      },
      {
        label: "Open Opportunities",
        value: "09",
        note: "High-priority follow-ups identified in reporting.",
      },
    ],
    sections: [
      {
        title: "Executive Summary",
        description: "This screen is ready as a route and sidebar destination.",
        items: [
          "Demand is strongest in core apparel and premium essentials.",
          "Margin quality remains stable despite selective markdowns.",
          "Top opportunities are concentrated in a small set of categories.",
        ],
      },
      {
        title: "What Comes Next",
        description:
          "Placeholder modules that can be replaced with live widgets.",
        items: [
          "KPI tiles with period comparison.",
          "Narrative summaries from data changes.",
          "Quick links into deeper dashboard tabs.",
        ],
      },
    ],
  },
  "dashboards-analytics": {
    eyebrow: "Reporting",
    title: "Dashboards Analytics",
    description:
      "Review a deeper analytics layer with more granular performance and trend signals.",
    stats: [
      {
        label: "Segments Compared",
        value: "07",
        note: "Core slices planned for the analytics workspace.",
      },
      {
        label: "Tracked Events",
        value: "126K",
        note: "Illustrative placeholder volume for event analysis.",
      },
      {
        label: "Alerts Triggered",
        value: "05",
        note: "Signals that need analyst review.",
      },
    ],
    sections: [
      {
        title: "Analyst Queue",
        description:
          "Minimal starter content while the analytics modules are built.",
        items: [
          "Inspect category-level swings against baseline demand.",
          "Compare premium and value segments by sell-through.",
          "Review the latest anomaly alerts before publishing notes.",
        ],
      },
      {
        title: "Planned Modules",
        description:
          "The route is active and aligned with the dashboard shell.",
        items: [
          "Timeseries charts with filters.",
          "Segment tables and benchmarks.",
          "Export-ready summary panels.",
        ],
      },
    ],
  },
  "chat-history": {
    eyebrow: "Conversations",
    title: "Chat History",
    description:
      "Revisit saved conversations, recover useful prompts, and reopen recent research threads.",
    stats: [
      {
        label: "Saved Threads",
        value: "42",
        note: "Conversations currently retained in history.",
      },
      {
        label: "This Week",
        value: "10",
        note: "Recent sessions started in the last seven days.",
      },
      {
        label: "Pinned Chats",
        value: "03",
        note: "Frequently referenced discussions kept within reach.",
      },
    ],
    sections: [
      {
        title: "Recent Themes",
        description:
          "This parent route is now available directly from the sidebar.",
        items: [
          "Trend discovery sessions for seasonal outerwear.",
          "Competitor pricing checks across premium basics.",
          "Creative prompts linked to studio concept development.",
        ],
      },
      {
        title: "Route Coverage",
        description:
          "Minimal content now, ready for future conversation tooling.",
        items: [
          "Browse all conversations from this landing page.",
          "Jump into the Recent child route for the latest threads.",
          "Keep active-state behavior consistent across the nav tree.",
        ],
      },
    ],
  },
  "chat-history-recent": {
    eyebrow: "Conversations",
    title: "Recent Chat History",
    description:
      "Surface the latest discussions so users can quickly continue where they left off.",
    stats: [
      {
        label: "Recent Threads",
        value: "10",
        note: "Placeholder count for the latest saved sessions.",
      },
      {
        label: "Resumed Today",
        value: "04",
        note: "Threads reopened for follow-up work.",
      },
      {
        label: "Shared Notes",
        value: "07",
        note: "Conversation outputs handed off to teammates.",
      },
    ],
    sections: [
      {
        title: "Latest Sessions",
        description:
          "A simple recent-history screen until the full experience is implemented.",
        items: [
          "Trend Search feedback and result triage.",
          "Dashboard KPI review and summary drafting.",
          "Gallery asset curation for the next design sprint.",
        ],
      },
      {
        title: "Planned Experience",
        description:
          "This route now exists and activates from the sidebar.",
        items: [
          "Chronological thread list with timestamps.",
          "Search and pin controls.",
          "One-click reopen into the original workspace.",
        ],
      },
    ],
  },
};
