"use client";

import { Skeleton } from "@heroui/react";

export function AuraInsightsSkeleton() {
  return (
    <div className="flex flex-col rounded-[16px] border border-border p-4 gap-4 bg-white">
      {/* Header */}
      <div className="flex items-center gap-2">
        <Skeleton className="h-5 w-5 rounded-md" />
        <Skeleton className="h-7 w-36 rounded-md" />
      </div>

      {/* 3 insight rows */}
      <Skeleton className="h-14 w-full rounded-[10px]" />
      <Skeleton className="h-14 w-full rounded-[10px]" />
      <Skeleton className="h-14 w-full rounded-[10px]" />

      {/* Divider */}
      <div className="border-t border-border" />

      {/* Options row */}
      <div className="flex flex-col gap-3 sm:flex-row">
        <div className="flex flex-col gap-1 w-full">
          <Skeleton className="h-3 w-28 rounded-md" />
          <Skeleton className="h-9 w-16 rounded-md" />
        </div>
        <div className="flex flex-col gap-1 w-full">
          <Skeleton className="h-3 w-28 rounded-md" />
          <Skeleton className="h-9 w-16 rounded-md" />
        </div>
      </div>
    </div>
  );
}
