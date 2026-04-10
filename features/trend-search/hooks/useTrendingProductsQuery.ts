"use client";

import { useQuery } from "@tanstack/react-query";
import { getTrendingProducts } from "../api/getTrendingProducts";

export const trendingProductsQueryKey = ["trend-search", "products"] as const;

export function useTrendingProductsQuery() {
  return useQuery({
    queryKey: trendingProductsQueryKey,
    queryFn: getTrendingProducts,
    staleTime: 60_000,
  });
}
