"use client";

import { Skeleton } from "@heroui/react";
import { cn } from "@/lib/utils";
import { TrendSearchViewMode } from "../../types";

interface TrendSearchResultsSkeletonProps {
  view: TrendSearchViewMode;
  count?: number;
}

export function TrendSearchResultsSkeleton({
  view,
  count = 8,
}: TrendSearchResultsSkeletonProps) {
  const isListView = view === "list";

  return (
    <div
      className={cn(
        "bg-white",
        isListView
          ? "flex flex-col gap-4"
          : "grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4",
      )}
    >
      {Array.from({ length: count }, (_, index) => (
        <div
          key={index}
          className={cn(
            "w-full",
            isListView
              ? "flex flex-col overflow-hidden rounded-[12px] border border-border bg-white sm:flex-row"
              : "flex flex-col",
          )}
        >
          <Skeleton
            className={cn(
              "overflow-hidden rounded-[12px]",
              isListView
                ? "aspect-[4/3] rounded-t-[12px] sm:h-44 sm:w-56 sm:shrink-0 sm:rounded-l-[12px] sm:rounded-tr-none"
                : "aspect-[268/355]",
            )}
          />

          <div
            className={cn(
              "flex flex-col gap-2",
              isListView ? "flex-1 justify-center p-4 sm:p-5" : "p-3",
            )}
          >
            <Skeleton className="h-3 w-16 rounded-md" />
            <Skeleton className="h-4 w-3/4 rounded-md" />
            <Skeleton className="h-4 w-20 rounded-md" />
            <div className="mt-1 flex items-center justify-between gap-3">
              <Skeleton className="h-3 w-14 rounded-md" />
              <Skeleton className="h-3 w-20 rounded-md" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
