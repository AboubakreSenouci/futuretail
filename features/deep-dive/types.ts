import type { StaticImageData } from "next/image";

export interface DeepDiveProduct {
  id: string;
  brand: string;
  name: string;
  price: number;
  currency: string;
  matchPercentage: number;
  discount: number;
  image: string | StaticImageData;
}

export interface MainProduct {
  id: number;
  src: string | StaticImageData;
  alt?: string;
}

export interface DeepDivePageData {
  image: {
    src: string | StaticImageData;
    alt: string;
  };
  productInfo: {
    name: string;
    brand: string;
    price: string;
    status: string;
    tags: string[];
    sku: string;
    updatedAt: string;
  };
  productStats: {
    popularity: number;
    matchScore: number;
    reviews: number;
    ranking: number;
    rankingTotal: number;
  };
  marketPricePosition: {
    lowest: number;
    median: number;
    highest: number;
    current: number;
    currency: string;
    positionLabel: string;
  };
  auraInsights: {
    cheaperOptions: number;
    premiumOptions: number;
  };
  marketPriceDistribution: {
    buckets: { label: string; count: number; isHighlighted?: boolean }[];
    subtitle: string;
  };
  priceEvolution: {
    dataPoints: { label: string; value: number }[];
    change: number;
    changePercent: number;
    sinceLabel: string;
    periodLabel: string;
  };
  relatedProducts: DeepDiveProduct[];
}

export interface AuraInsightsData {
  id: number;
  expensivePercentage: number;
  marketAverage: number;
  competitorsWithLowerPrice: number;
  priceQuartile: string;
  cheaperOptions: number;
  premiumOptions: number;
}
