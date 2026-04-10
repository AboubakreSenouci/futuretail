import { DashboardPlaceholderPage } from "@/components/dashboard/DashboardPlaceholderPage";

export default function DashboardsAnalyticsPage() {
  return (
    <div className="min-w-0">
      <DashboardPlaceholderPage
        eyebrow="Reporting"
        title="Dashboards Analytics"
        description="Review a deeper analytics layer with more granular performance and trend signals."
        stats={[
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
        ]}
        sections={[
          {
            title: "Analyst Queue",
            description: "Minimal starter content while the analytics modules are built.",
            items: [
              "Inspect category-level swings against baseline demand.",
              "Compare premium and value segments by sell-through.",
              "Review the latest anomaly alerts before publishing notes.",
            ],
          },
          {
            title: "Planned Modules",
            description: "The route is active and aligned with the dashboard shell.",
            items: [
              "Timeseries charts with filters.",
              "Segment tables and benchmarks.",
              "Export-ready summary panels.",
            ],
          },
        ]}
      />
    </div>
  );
}
