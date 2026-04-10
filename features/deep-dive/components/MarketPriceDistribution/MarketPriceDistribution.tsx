"use client";

import { DollarSign } from "lucide-react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  type ChartData,
  type ChartOptions,
  type TooltipItem,
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip);

interface PriceBucket {
  label: string;
  count: number;
  isHighlighted?: boolean;
}

interface MarketPriceDistributionProps {
  buckets?: PriceBucket[];
  subtitle?: string;
}

const defaultBuckets: PriceBucket[] = [
  { label: "€25", count: 2 },
  { label: "€35", count: 3 },
  { label: "€45", count: 4 },
  { label: "€60", count: 2, isHighlighted: true },
  { label: "€75", count: 1 },
  { label: "€90+", count: 2 },
];

export function MarketPriceDistribution({
  buckets = defaultBuckets,
  subtitle = "Most competitors cluster in the €45–60 range",
}: MarketPriceDistributionProps) {
  const data: ChartData<"bar", number[], string> = {
    labels: buckets.map((b) => b.label),
    datasets: [
      {
        data: buckets.map((b) => b.count),
        backgroundColor: buckets.map((b) =>
          b.isHighlighted ? "#794BE7" : "#E0D4F7",
        ),
        borderRadius: 4,
        borderSkipped: false,
      },
    ],
  };

  const options: ChartOptions<"bar"> = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
      tooltip: {
        callbacks: {
          label: (ctx: TooltipItem<"bar">) => ` ${ctx.parsed.y} products`,
        },
      },
    },
    scales: {
      x: {
        grid: { display: false },
        border: { display: false },
        ticks: { color: "#888780", font: { size: 11 } },
      },
      y: {
        min: 0,
        ticks: { stepSize: 1, color: "#888780", font: { size: 11 } },
        grid: { color: "rgba(136,135,128,0.15)" },
        border: { display: false },
      },
    },
  };

  return (
    <div className="bg-white border border-border rounded-[12px] p-5">
      <div className="flex items-center gap-2 mb-4">
        <DollarSign size={16} className="text-primary" />
        <span className="text-[15px] font-medium text-foreground">
          Market price distribution
        </span>
      </div>
      <div className="h-[220px]">
        <Bar data={data} options={options} />
      </div>
      <p className="text-[12px] text-muted text-center mt-3">{subtitle}</p>
    </div>
  );
}
