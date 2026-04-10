"use client";

import { useQuery } from "@tanstack/react-query";
import { getMainProduct } from "../api/getMainProduct";

export const mainProductQueryKey = ["main-product"] as const;

export function useMainProductQuery() {
  return useQuery({
    queryKey: mainProductQueryKey,
    queryFn: getMainProduct,
    staleTime: 60_000,
  });
}
