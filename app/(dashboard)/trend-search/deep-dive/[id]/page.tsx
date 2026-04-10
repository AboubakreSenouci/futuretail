"use client";

import image from "@/public/images/image4.png";
import DeepDiveResults from "@/features/deep-dive/components/DeepDiveResults/DeepDiveResults";
import DeepDiveHeader from "@/features/deep-dive/components/DeepDiveHeader/DeepDiveHeader";
import ProductImage from "@/features/deep-dive/components/ProductImage/ProductImage";
import ProductInfo from "@/features/deep-dive/components/ProductInfo/ProductInfo";
import ProductStats from "@/features/deep-dive/components/ProductStats/ProductStats";
import AuraInsights from "@/features/deep-dive/components/Aurainsights/Aurainsights";
import { MarketPriceDistribution } from "@/features/deep-dive/components/MarketPriceDistribution/MarketPriceDistribution";
import { PriceEvolution } from "@/features/deep-dive/components/PriceEvolution/PriceEvolution";
import { MarketPricePosition } from "@/features/deep-dive/components/MarketPricePosition/MarketPricePosition";

function DeepDive() {
  return (
    <div className="bg-white">
      <DeepDiveHeader />

      <div className="flex flex-col gap-8 px-4 py-6 sm:px-6 lg:px-8 2xl:flex-row 2xl:gap-12">
        <div className="flex min-w-0 flex-1 flex-col gap-6 2xl:max-w-[720px]">
          <ProductImage src={image} alt="Deep Dive" />

          <ProductInfo
            name="Neon Yellow Summer Dress"
            brand="ZARA"
            price="€71.23"
            status="In Stock"
            tags={["Women's Fashion", "Summer Dress"]}
            sku="ZR-SUM-2024-001"
            updatedAt="Mar 11, 2026"
          />

          <ProductStats
            popularity={68}
            matchScore={97}
            reviews={324}
            ranking={2}
            rankingTotal={12}
          />

          <MarketPricePosition
            lowest={29.99}
            median={55}
            highest={125}
            current={71.23}
            currency="€"
          />
          <AuraInsights cheaperOptions={12} premiumOptions={8} />
          <MarketPriceDistribution />
          <PriceEvolution />
        </div>

        <div className="min-w-0 flex-1">
          <DeepDiveResults />
        </div>
      </div>
    </div>
  );
}

export default DeepDive;
