"use client";

import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";
import { trendingProducts } from "../../data";
import { TrendSearchViewMode } from "../../types";
import { TrendProductCard } from "../TrendProductCard/TrendProductCard";

interface TrendSearchResultsProps {
  view: TrendSearchViewMode;
}

export function TrendSearchResults({ view }: TrendSearchResultsProps) {
  const router = useRouter();

  return (
    <div
      className={cn(
        "bg-white",
        view === "grid"
          ? "grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4"
          : "flex flex-col gap-4",
      )}
    >
      {trendingProducts.map((product) => (
        <TrendProductCard
          key={product.id}
          {...product}
          image={product.image}
          view={view}
          handleCardClick={() => router.push(`trend-search/deep-dive/${product.id}`)}
        />
      ))}
    </div>
  );
}
