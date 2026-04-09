"use client";

import { useRouter } from "next/navigation";
import { trendingProducts } from "../../data";
import { TrendProductCard } from "../TrendProductCard/TrendProductCard";

export function TrendSearchResults() {
  const router = useRouter();

  return (
    <div className="grid grid-cols-1 gap-4 bg-white sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
      {trendingProducts.map((product) => (
        <TrendProductCard
          key={product.id}
          {...product}
          image={product.image}
          handleCardClick={() => router.push(`trend-search/deep-dive/${product.id}`)}
        />
      ))}
    </div>
  );
}
