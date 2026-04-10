import { DashboardPlaceholderPage } from "@/components/dashboard/DashboardPlaceholderPage";

export default function MarketIntelligencePage() {
  return (
    <div className="min-w-0">
      <DashboardPlaceholderPage
        eyebrow="Insights"
        title="Market Intelligence"
        description="Monitor demand shifts, pricing signals, and category-level movement across the market."
        stats={[
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
        ]}
        sections={[
          {
            title: "What To Review",
            description: "Start with the highest-signal areas for the next iteration.",
            items: [
              "Outerwear is showing stronger sell-through than the prior two weeks.",
              "Premium basics are holding price better than trend-led categories.",
              "Footwear markdown pressure remains elevated across mass channels.",
            ],
          },
          {
            title: "Next Steps",
            description: "Minimal placeholder content until the full module is built.",
            items: [
              "Connect category snapshots to live analytics.",
              "Add competitor filters and time-range controls.",
              "Expose alert detail panels from this summary page.",
            ],
          },
        ]}
      />
    </div>
  );
}
