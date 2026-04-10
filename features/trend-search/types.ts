import type { StaticImageData } from "next/image";

export type TrendSearchViewMode = "grid" | "list";

export type DemandLevel = "low" | "medium" | "high";

export interface TrendingProduct {
  id: number;
  brand: string;
  name: string;
  price: number;
  currency: string;
  matchPercentage: number;
  isHighDemand: boolean;
  isTrending: boolean;
  demandLabel: string;
  image: string | StaticImageData;
  demand: DemandLevel;
}
