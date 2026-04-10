export async function simulateRequest<T>(
  data: T,
  delayMs = 1200,
): Promise<T> {
  await new Promise((resolve) => setTimeout(resolve, delayMs));

  return data;
}
