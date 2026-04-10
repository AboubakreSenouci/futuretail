import { simulateRequest } from "@/lib/api/simulateRequest";
import { trendingProducts } from "../data";
import type { TrendingProduct } from "../types";

export async function getTrendingProducts(): Promise<TrendingProduct[]> {
  return simulateRequest(trendingProducts);
}
