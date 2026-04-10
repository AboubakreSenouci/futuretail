"use client";

import { Typography } from "@/components/ui/Typography/Typography";
import AuraInsights from "../Aurainsights/Aurainsights";
import DeepDiveHeader from "../DeepDiveHeader/DeepDiveHeader";
import DeepDiveResults from "../DeepDiveResults/DeepDiveResults";
import { DeepDivePageSkeleton } from "../DeepDivePageSkeleton/DeepDivePageSkeleton";
import { MarketPriceDistribution } from "../MarketPriceDistribution/MarketPriceDistribution";
import { MarketPricePosition } from "../MarketPricePosition/MarketPricePosition";
import { PriceEvolution } from "../PriceEvolution/PriceEvolution";
import ProductImage from "../ProductImage/ProductImage";
import ProductInfo from "../ProductInfo/ProductInfo";
import ProductStats from "../ProductStats/ProductStats";
import { useDeepDivePageQuery } from "../../hooks/useDeepDivePageQuery";

interface DeepDivePageProps {
  id: string;
}

export function DeepDivePage({ id }: DeepDivePageProps) {
  const { data, isLoading, isError } = useDeepDivePageQuery(id);

  if (isLoading) {
    return <DeepDivePageSkeleton />;
  }

  if (isError || !data) {
    return (
      <div className="rounded-[16px] border border-border bg-white p-6">
        <Typography variant="medium_14" className="text-foreground">
          Unable to load Deep Dive
        </Typography>
        <Typography variant="regular_14" className="mt-2 text-muted">
          The simulated request failed. Try refreshing the page.
        </Typography>
      </div>
    );
  }

  return (
    <div className="bg-white">
      <DeepDiveHeader />

      <div className="flex flex-col gap-8 px-4 py-6 sm:px-6 lg:px-8 2xl:flex-row 2xl:gap-12">
        <div className="flex min-w-0 flex-1 flex-col gap-6 2xl:max-w-[720px]">
          <ProductImage src={data.image.src} alt={data.image.alt} />
          <ProductInfo {...data.productInfo} />
          <ProductStats {...data.productStats} />
          <MarketPricePosition {...data.marketPricePosition} />
          <AuraInsights {...data.auraInsights} />
          <MarketPriceDistribution {...data.marketPriceDistribution} />
          <PriceEvolution {...data.priceEvolution} />
        </div>

        <div className="min-w-0 flex-1">
          <DeepDiveResults products={data.relatedProducts} />
        </div>
      </div>
    </div>
  );
}
