"use client";

import { Skeleton } from "@heroui/react";

export function DeepDivePageSkeleton() {
  return (
    <div className="bg-white">
      <div className="flex flex-row items-center gap-4 border-b border-border px-4 py-6 sm:px-6 lg:px-8">
        <Skeleton className="h-10 w-10 rounded-[8px]" />
        <div className="space-y-2">
          <Skeleton className="h-7 w-40 rounded-md" />
          <Skeleton className="h-4 w-80 max-w-full rounded-md" />
        </div>
      </div>

      <div className="flex flex-col gap-8 px-4 py-6 sm:px-6 lg:px-8 2xl:flex-row 2xl:gap-12">
        <div className="flex min-w-0 flex-1 flex-col gap-6 2xl:max-w-[720px]">
          <Skeleton className="aspect-[640/880] w-full rounded-[24px] sm:rounded-[32px]" />
          <Skeleton className="h-52 w-full rounded-[16px]" />
          <Skeleton className="h-56 w-full rounded-[16px]" />
          <Skeleton className="h-52 w-full rounded-[16px]" />
          <Skeleton className="h-80 w-full rounded-[16px]" />
          <Skeleton className="h-72 w-full rounded-[12px]" />
          <Skeleton className="h-72 w-full rounded-[12px]" />
        </div>

        <div className="min-w-0 flex-1">
          <Skeleton className="h-[860px] w-full rounded-[16px]" />
        </div>
      </div>
    </div>
  );
}
