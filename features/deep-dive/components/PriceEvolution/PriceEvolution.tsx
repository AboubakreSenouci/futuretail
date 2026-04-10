"use client";

import { ChartSpline, TrendingDown } from "lucide-react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  type ChartData,
  type ChartOptions,
  type ScriptableContext,
  type TooltipItem,
} from "chart.js";
import { Typography } from "@/components/ui/Typography/Typography";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
);

interface PricePoint {
  label: string;
  value: number;
}

interface PriceEvolutionProps {
  dataPoints?: PricePoint[];
  change?: number;
  changePercent?: number;
  sinceLabel?: string;
  periodLabel?: string;
}

const defaultDataPoints: PricePoint[] = [
  { label: "Mar\n4", value: 6.4 },
  { label: "Mar\n5", value: 5.2 },
  { label: "Mar\n6", value: 3.8 },
  { label: "Mar\n7", value: 2.9 },
  { label: "Mar\n8", value: 1.9 },
  { label: "Mar\n9", value: 2.2 },
  { label: "Mar\n10", value: 2.64 },
];

export function PriceEvolution({
  dataPoints = defaultDataPoints,
  change = -3.76,
  changePercent = 5.0,
  sinceLabel = "Since Mar 4",
  periodLabel = "Last 7 days",
}: PriceEvolutionProps) {
  const isNegative = change < 0;

  const data: ChartData<"line", number[], string> = {
    labels: dataPoints.map((p) => p.label),
    datasets: [
      {
        data: dataPoints.map((p) => p.value),
        borderColor: "#7F77DD",
        borderWidth: 2,
        pointRadius: 0,
        pointHoverRadius: 4,
        pointHoverBackgroundColor: "#7F77DD",
        tension: 0.4,
        fill: true,
        backgroundColor: (ctx: ScriptableContext<"line">) => {
          const chart = ctx.chart;
          const { ctx: c, chartArea } = chart;
          if (!chartArea) return "transparent";
          const gradient = c.createLinearGradient(
            0,
            chartArea.top,
            0,
            chartArea.bottom,
          );
          gradient.addColorStop(0, "rgba(127,119,221,0.25)");
          gradient.addColorStop(1, "rgba(127,119,221,0.02)");
          return gradient;
        },
      },
    ],
  };

  const options: ChartOptions<"line"> = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
      tooltip: {
        callbacks: {
          label: (ctx: TooltipItem<"line">) => {
            const y = ctx.parsed.y;
            return ` €${y !== null ? y.toFixed(2) : "0.00"}`;
          },
        },
      },
    },
    scales: {
      x: {
        grid: { display: false },
        border: { display: false },
        ticks: { color: "#888780", font: { size: 11 }, maxRotation: 0 },
      },
      y: {
        ticks: { stepSize: 1, color: "#888780", font: { size: 11 } },
        grid: { color: "rgba(136,135,128,0.15)" },
        border: { display: false },
      },
    },
  };

  return (
    <div className="bg-white border border-border rounded-[12px] p-5">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <ChartSpline size={16} className="text-primary" />
          <span className="text-[15px] font-medium text-foreground">
            Price evolution
          </span>
        </div>
        <span className="text-[12px] text-muted-secondary bg-surface-muted border border-border rounded-full px-3 py-0.5">
          {periodLabel}
        </span>
      </div>

      <div className="h-[180px]">
        <Line data={data} options={options} />
      </div>

      <div className="flex items-center justify-between mt-3">
        <Typography
          variant="regular_14"
          className="flex items-center gap-1.5 text-muted-strong"
        >
          <TrendingDown size={14} color="#00BC7D" />
          {isNegative ? "−" : "+"}€{Math.abs(change).toFixed(2)} (
          {changePercent.toFixed(1)}%)
        </Typography>
        <span className="text-[12px] text-muted">{sinceLabel}</span>
      </div>
    </div>
  );
}
