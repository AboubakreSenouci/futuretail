import { DashboardPlaceholderPage } from "@/components/dashboard/DashboardPlaceholderPage";

export default function DashboardsOverviewPage() {
  return (
    <div className="min-w-0">
      <DashboardPlaceholderPage
        eyebrow="Reporting"
        title="Dashboards Overview"
        description="A compact executive summary for performance, pipeline health, and near-term opportunities."
        stats={[
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
        ]}
        sections={[
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
            description: "Placeholder modules that can be replaced with live widgets.",
            items: [
              "KPI tiles with period comparison.",
              "Narrative summaries from data changes.",
              "Quick links into deeper dashboard tabs.",
            ],
          },
        ]}
      />
    </div>
  );
}
