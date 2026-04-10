import { auraInsights } from "../data";
import { AuraInsightsData } from "../types";

const SIMULATED_REQUEST_DELAY_MS = 1200;

export async function getAuraInsights(): Promise<AuraInsightsData> {
  await new Promise((resolve) =>
    setTimeout(resolve, SIMULATED_REQUEST_DELAY_MS),
  );
  return auraInsights;
}
