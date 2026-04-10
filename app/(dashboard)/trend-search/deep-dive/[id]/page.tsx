import { DeepDivePage } from "@/features/deep-dive/components/DeepDivePage/DeepDivePage";

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  return <DeepDivePage id={id} />;
}
