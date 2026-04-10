import { DashboardPlaceholderPage } from "@/components/dashboard/DashboardPlaceholderPage";

export default function DashboardsPage() {
  return (
    <div className="min-w-0">
      <DashboardPlaceholderPage
        eyebrow="Reporting"
        title="Dashboards"
        description="Access high-level reporting views and drill into overview or analytics sections."
        stats={[
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
        ]}
        sections={[
          {
            title: "Available Paths",
            description: "Use this page as the parent entry point for dashboard routes.",
            items: [
              "Open Overview for an executive snapshot.",
              "Open Analytics for deeper metric inspection.",
              "Keep this parent page as the stable landing route.",
            ],
          },
          {
            title: "Implementation Notes",
            description: "Minimal content now, matching the current dashboard shell.",
            items: [
              "Parent route is now clickable from the sidebar.",
              "Child routes remain available under the same nav group.",
              "Active state follows the current pathname.",
            ],
          },
        ]}
      />
    </div>
  );
}
