import { DashboardPlaceholderPage } from "@/components/dashboard/DashboardPlaceholderPage";

export default function ChatHistoryPage() {
  return (
    <div className="min-w-0">
      <DashboardPlaceholderPage
        eyebrow="Conversations"
        title="Chat History"
        description="Revisit saved conversations, recover useful prompts, and reopen recent research threads."
        stats={[
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
        ]}
        sections={[
          {
            title: "Recent Themes",
            description: "This parent route is now available directly from the sidebar.",
            items: [
              "Trend discovery sessions for seasonal outerwear.",
              "Competitor pricing checks across premium basics.",
              "Creative prompts linked to studio concept development.",
            ],
          },
          {
            title: "Route Coverage",
            description: "Minimal content now, ready for future conversation tooling.",
            items: [
              "Browse all conversations from this landing page.",
              "Jump into the Recent child route for the latest threads.",
              "Keep active-state behavior consistent across the nav tree.",
            ],
          },
        ]}
      />
    </div>
  );
}
