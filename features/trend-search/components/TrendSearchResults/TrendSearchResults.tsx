"use client";

import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";
import { TrendSearchViewMode } from "../../types";
import { TrendProductCard } from "../TrendProductCard/TrendProductCard";
import { useTrendingProductsQuery } from "../../hooks/useTrendingProductsQuery";
import { TrendSearchResultsSkeleton } from "../TrendSearchResultsSkeleton/TrendSearchResultsSkeleton";
import { Typography } from "@/components/ui/Typography/Typography";

interface TrendSearchResultsProps {
  view: TrendSearchViewMode;
}

export function TrendSearchResults({ view }: TrendSearchResultsProps) {
  const router = useRouter();
  const { data: products = [], isLoading, isError } = useTrendingProductsQuery();

  if (isLoading) {
    return <TrendSearchResultsSkeleton view={view} />;
  }

  if (isError) {
    return (
      <div className="rounded-[16px] border border-border bg-white p-6">
        <Typography variant="medium_14" className="text-foreground">
          Unable to load Trend Search results
        </Typography>
        <Typography variant="regular_14" className="mt-2 text-muted">
          The simulated request failed. Try refreshing the page.
        </Typography>
      </div>
    );
  }

  return (
    <div
      className={cn(
        "bg-white",
        view === "grid"
          ? "grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4"
          : "flex flex-col gap-4",
      )}
    >
      {products.map((product) => (
        <TrendProductCard
          key={product.id}
          {...product}
          image={product.image}
          view={view}
          handleCardClick={() =>
            router.push(`/trend-search/deep-dive/${product.id}`)
          }
        />
      ))}
    </div>
  );
}
