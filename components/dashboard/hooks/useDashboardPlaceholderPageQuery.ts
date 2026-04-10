"use client";

import { useQuery } from "@tanstack/react-query";
import { getDashboardPlaceholderPage } from "../api/getDashboardPlaceholderPage";
import type { DashboardPlaceholderPageKey } from "../types";

export function useDashboardPlaceholderPageQuery(
  pageKey: DashboardPlaceholderPageKey,
) {
  return useQuery({
    queryKey: ["dashboard-placeholder-page", pageKey],
    queryFn: () => getDashboardPlaceholderPage(pageKey),
    staleTime: 60_000,
  });
}
