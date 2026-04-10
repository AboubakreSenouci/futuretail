"use client";

import { Typography } from "@/components/ui/Typography/Typography";
import { DashboardPlaceholderPage } from "./DashboardPlaceholderPage";
import { DashboardPlaceholderPageSkeleton } from "./DashboardPlaceholderPageSkeleton";
import { useDashboardPlaceholderPageQuery } from "./hooks/useDashboardPlaceholderPageQuery";
import type { DashboardPlaceholderPageKey } from "./types";

interface DashboardPlaceholderPageClientProps {
  pageKey: DashboardPlaceholderPageKey;
}

export function DashboardPlaceholderPageClient({
  pageKey,
}: DashboardPlaceholderPageClientProps) {
  const { data, isLoading, isError } = useDashboardPlaceholderPageQuery(pageKey);

  if (isLoading) {
    return <DashboardPlaceholderPageSkeleton />;
  }

  if (isError || !data) {
    return (
      <div className="rounded-[16px] border border-border bg-white p-6">
        <Typography variant="medium_14" className="text-foreground">
          Unable to load this page
        </Typography>
        <Typography variant="regular_14" className="mt-2 text-muted">
          The simulated request failed. Try refreshing the page.
        </Typography>
      </div>
    );
  }

  return <DashboardPlaceholderPage {...data} />;
}
