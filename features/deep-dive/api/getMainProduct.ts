import { mainProduct } from "../data";
import { MainProduct } from "../types";

const SIMULATED_REQUEST_DELAY_MS = 1200;

export async function getMainProduct(): Promise<MainProduct> {
  await new Promise((resolve) =>
    setTimeout(resolve, SIMULATED_REQUEST_DELAY_MS),
  );
  return mainProduct;
}
