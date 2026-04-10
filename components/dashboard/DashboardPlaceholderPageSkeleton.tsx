"use client";

import { Skeleton } from "@heroui/react";

export function DashboardPlaceholderPageSkeleton() {
  return (
    <div className="flex flex-col bg-white">
      <div className="border border-border bg-white px-4 py-6 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-3">
          <Skeleton className="h-4 w-24 rounded-md" />
          <div className="space-y-2">
            <Skeleton className="h-7 w-56 rounded-md" />
            <Skeleton className="h-4 w-96 max-w-full rounded-md" />
          </div>
        </div>
      </div>

      <div className="bg-white px-4 pt-6 pb-8 sm:px-6 lg:px-8 xl:pr-12">
        <div className="grid gap-4 md:grid-cols-3">
          {Array.from({ length: 3 }, (_, index) => (
            <div
              key={index}
              className="rounded-[16px] border border-border bg-white p-4"
            >
              <Skeleton className="h-4 w-28 rounded-md" />
              <Skeleton className="mt-3 h-7 w-20 rounded-md" />
              <Skeleton className="mt-2 h-4 w-full rounded-md" />
            </div>
          ))}
        </div>

        <div className="mt-6 grid gap-4 xl:grid-cols-2">
          {Array.from({ length: 2 }, (_, index) => (
            <div
              key={index}
              className="rounded-[16px] border border-border bg-white p-5"
            >
              <Skeleton className="h-4 w-40 rounded-md" />
              <Skeleton className="mt-2 h-4 w-full rounded-md" />
              <div className="mt-4 flex flex-col gap-3">
                {Array.from({ length: 3 }, (_, itemIndex) => (
                  <Skeleton
                    key={itemIndex}
                    className="h-12 w-full rounded-[12px]"
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
