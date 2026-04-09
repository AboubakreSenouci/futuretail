"use client";

import image from "@/public/images/image4.png";
import DeepDiveResults from "@/features/deep-dive/components/DeepDiveResults/DeepDiveResults";
import DeepDiveHeader from "@/features/deep-dive/components/DeepDiveHeader/DeepDiveHeader";
import ProductImage from "@/features/deep-dive/components/ProductImage/ProductImage";
import ProductInfo from "@/features/deep-dive/components/ProductInfo/ProductInfo";
import ProductStats from "@/features/deep-dive/components/ProductStats/ProductStats";
import MarketPricePosition from "@/features/deep-dive/components/MarketPricePosition/MarketPricePosition";
import AuraInsights from "@/features/deep-dive/Aurainsights/Aurainsights";
import { MarketPriceDistribution } from "@/features/deep-dive/MarketPriceDistribution/MarketPriceDistribution";
import { PriceEvolution } from "@/features/deep-dive/components/PriceEvolution/PriceEvolution";

function DeepDive() {
  return (
    <div className="bg-white">
      <DeepDiveHeader />

      <div className="flex flex-row pt-8 pl-8 gap-12">
        <div className="flex flex-col gap-6">
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
          <AuraInsights
            insights={[
              {
                dotColor: "#007A55",
                bgColor: "#ECFDF5",
                text: "This product is priced below the market average.",
              },
              {
                dotColor: "#EF4444",
                bgColor: "#FEE2E2",
                text: "There are several premium options available in the market.",
              },
            ]}
            cheaperOptions={12}
            premiumOptions={8}
          />
          <MarketPriceDistribution />
          <PriceEvolution />
        </div>

        <DeepDiveResults />
      </div>
    </div>
  );
}

export default DeepDive;
