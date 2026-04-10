"use client";

import { useQuery } from "@tanstack/react-query";
import { getAuraInsights } from "../api/getAuraInsights";

export const auraInsightsQueryKey = ["deep-dive", "aura-insights"] as const;

export function useAuraInsightsQuery() {
  return useQuery({
    queryKey: auraInsightsQueryKey,
    queryFn: getAuraInsights,
    staleTime: 60_000,
  });
}
