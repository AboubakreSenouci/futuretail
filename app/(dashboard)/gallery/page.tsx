import { DashboardPlaceholderPage } from "@/components/dashboard/DashboardPlaceholderPage";

export default function GalleryPage() {
  return (
    <div className="min-w-0">
      <DashboardPlaceholderPage
        eyebrow="Assets"
        title="Gallery"
        description="Browse saved visuals, references, and generated outputs for ongoing workstreams."
        stats={[
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
        ]}
        sections={[
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
            description: "The page is routed and active, with minimal content for now.",
            items: [
              "Grid and masonry browsing modes.",
              "Tagging by product family and palette.",
              "Quick handoff into Trend Search and Studio.",
            ],
          },
        ]}
      />
    </div>
  );
}
