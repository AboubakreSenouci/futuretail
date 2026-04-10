import { DashboardPlaceholderPage } from "@/components/dashboard/DashboardPlaceholderPage";

export default function StudioPage() {
  return (
    <div className="min-w-0">
      <DashboardPlaceholderPage
        eyebrow="Workspace"
        title="The Studio"
        description="Organize concept development, working directions, and creative notes in one place."
        stats={[
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
        ]}
        sections={[
          {
            title: "Current Focus",
            description: "A compact placeholder view for the upcoming studio workflow.",
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
        ]}
      />
    </div>
  );
}
