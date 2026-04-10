import { simulateRequest } from "@/lib/api/simulateRequest";
import { dashboardPlaceholderPageData } from "../dashboardPlaceholderPageData";
import type {
  DashboardPlaceholderPageData,
  DashboardPlaceholderPageKey,
} from "../types";

export async function getDashboardPlaceholderPage(
  pageKey: DashboardPlaceholderPageKey,
): Promise<DashboardPlaceholderPageData> {
  return simulateRequest(dashboardPlaceholderPageData[pageKey]);
}
