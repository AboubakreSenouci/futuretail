import { Typography } from "@/components/ui/Typography/Typography";
import type { DashboardPlaceholderPageData } from "./types";

export function DashboardPlaceholderPage({
  title,
  description,
  eyebrow,
  stats,
  sections,
}: DashboardPlaceholderPageData) {
  return (
    <div className="flex flex-col h-screen bg-white">
      <div className="border border-border bg-white px-4 py-6 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-3">
          {eyebrow ? (
            <Typography
              variant="medium_12"
              className="text-primary uppercase tracking-[0.12em]"
            >
              {eyebrow}
            </Typography>
          ) : null}
          <div>
            <Typography variant="semibold_24" className="text-foreground">
              {title}
            </Typography>
            <Typography variant="regular_14" className="mt-1 text-muted">
              {description}
            </Typography>
          </div>
        </div>
      </div>

      <div className="bg-white px-4 pt-6 pb-8 sm:px-6 lg:px-8 xl:pr-12">
        <div className="grid gap-4 md:grid-cols-3">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-[16px] border border-border bg-white p-4"
            >
              <Typography variant="regular_14" className="text-muted-secondary">
                {stat.label}
              </Typography>
              <Typography variant="semibold_24" className="mt-3 text-foreground">
                {stat.value}
              </Typography>
              <Typography variant="regular_12" className="mt-2 text-muted">
                {stat.note}
              </Typography>
            </div>
          ))}
        </div>

        <div className="mt-6 grid gap-4 xl:grid-cols-2">
          {sections.map((section) => (
            <section
              key={section.title}
              className="rounded-[16px] border border-border bg-white p-5"
            >
              <Typography variant="medium_14" className="text-foreground">
                {section.title}
              </Typography>
              <Typography variant="regular_14" className="mt-2 text-muted">
                {section.description}
              </Typography>
              <div className="mt-4 flex flex-col gap-3">
                {section.items.map((item) => (
                  <div
                    key={item}
                    className="rounded-[12px] bg-surface-soft px-4 py-3"
                  >
                    <Typography variant="regular_14" className="text-foreground">
                      {item}
                    </Typography>
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}
