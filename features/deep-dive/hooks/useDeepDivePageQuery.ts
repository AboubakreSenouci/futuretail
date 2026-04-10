"use client";

import { useQuery } from "@tanstack/react-query";
import { getDeepDivePageData } from "../api/getDeepDivePageData";

export function useDeepDivePageQuery(id: string) {
  return useQuery({
    queryKey: ["deep-dive-page", id],
    queryFn: () => getDeepDivePageData(id),
    staleTime: 60_000,
  });
}
