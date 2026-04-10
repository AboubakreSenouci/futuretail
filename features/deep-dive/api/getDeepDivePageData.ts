import { simulateRequest } from "@/lib/api/simulateRequest";
import { deepDivePageDataById, defaultDeepDivePageData } from "../data";
import type { DeepDivePageData } from "../types";

export async function getDeepDivePageData(
  id: string,
): Promise<DeepDivePageData> {
  return simulateRequest(deepDivePageDataById[id] ?? defaultDeepDivePageData);
}
