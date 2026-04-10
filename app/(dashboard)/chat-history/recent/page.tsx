import { DashboardPlaceholderPage } from "@/components/dashboard/DashboardPlaceholderPage";

export default function ChatHistoryRecentPage() {
  return (
    <div className="min-w-0">
      <DashboardPlaceholderPage
        eyebrow="Conversations"
        title="Recent Chat History"
        description="Surface the latest discussions so users can quickly continue where they left off."
        stats={[
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
        ]}
        sections={[
          {
            title: "Latest Sessions",
            description: "A simple recent-history screen until the full experience is implemented.",
            items: [
              "Trend Search feedback and result triage.",
              "Dashboard KPI review and summary drafting.",
              "Gallery asset curation for the next design sprint.",
            ],
          },
          {
            title: "Planned Experience",
            description: "This route now exists and activates from the sidebar.",
            items: [
              "Chronological thread list with timestamps.",
              "Search and pin controls.",
              "One-click reopen into the original workspace.",
            ],
          },
        ]}
      />
    </div>
  );
}
