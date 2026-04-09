import { Typography } from "@/components/ui/Typography/Typography";
import { Target, TrendingUp } from "lucide-react";

interface MarketPricePositionProps {
  lowest: number;
  median: number;
  highest: number;
  current: number;
  currency?: string;
}

function MarketPricePosition({
  lowest,
  median,
  highest,
  current,
  currency = "€",
}: MarketPricePositionProps) {
  const toPercent = (value: number) =>
    ((value - lowest) / (highest - lowest)) * 100;

  const currentPercent = toPercent(current);
  const medianPercent = toPercent(median);
  const isAboveMedian = current > median;

  return (
    <div className="flex flex-col rounded-[16px] border border-border p-4 gap-4 bg-white">
      {/* Header */}
      <div className="flex items-center gap-2">
        <Target size={20} className="text-[#794BE7]" />
        <Typography variant="semibold_24" className="text-foreground">
          Market Price Position
        </Typography>
      </div>

      <div className="flex flex-col gap-1 w-full">
        {/* ── Labels row: Lowest | Median (absolute) | Highest ── */}
        <div className="relative h-4 w-full">
          <span className="absolute left-0">
            <Typography variant="regular_12" className="text-[#6A7282]">
              Lowest
            </Typography>
          </span>

          {/* Median label centred on its % position, clamped so it never overlaps edges */}
          <span
            className="absolute -translate-x-1/2 whitespace-nowrap"
            style={{
              left: `clamp(2rem, ${medianPercent}%, calc(100% - 2rem))`,
            }}
          >
            <Typography variant="regular_12" className="text-[#6A7282]">
              Median
            </Typography>
          </span>

          <span className="absolute right-0">
            <Typography variant="regular_12" className="text-[#6A7282]">
              Highest
            </Typography>
          </span>
        </div>

        {/* ── Gradient track ── */}
        <div className="relative h-3 w-full">
          {/* Gradient bar */}
          <div
            className="absolute inset-0 rounded-full"
            style={{
              background:
                "linear-gradient(to right, #86EFAC, #FDE68A, #FCA5A5)",
            }}
          />

          {/* Median divider — taller than the track, centred vertically */}
          <div
            className="absolute w-[2px] bg-[#6B7280] z-10"
            style={{
              left: `${medianPercent}%`,
              top: "50%",
              transform: "translate(-50%, -50%)",
              height: "20px",
            }}
          />

          {/* Current price dot */}
          <div
            className="absolute w-[18px] h-[18px] rounded-full bg-[#794BE7] border-[3px] border-white shadow-md z-20"
            style={{
              left: `${currentPercent}%`,
              top: "50%",
              transform: "translate(-50%, -50%)",
            }}
          />
        </div>

        {/* ── Price labels row ── */}
        <div className="relative h-7 w-full mt-0.5">
          <span className="absolute left-0">
            <Typography variant="semibold_24" className="text-[#007A55]">
              {currency}{lowest}
            </Typography>
          </span>

          {/* Median price centred on its %, clamped away from edges */}
          <span
            className="absolute -translate-x-1/2 whitespace-nowrap"
            style={{
              left: `clamp(3rem, ${medianPercent}%, calc(100% - 3rem))`,
            }}
          >
            <Typography variant="semibold_24" className="text-[#101828]">
              {currency}{median}
            </Typography>
          </span>

          <span className="absolute right-0">
            <Typography variant="semibold_24" className="text-[#EF4444]">
              {currency}{highest}
            </Typography>
          </span>
        </div>
      </div>

      {/* Status badge */}
      <div className="flex items-center gap-2 bg-[#ECFDF5] rounded-[12px] px-4 py-3">
        <TrendingUp size={16} className="text-[#007A55]" />
        <Typography variant="regular_14" className="text-[#007A55]">
          {isAboveMedian
            ? "Positioned above median price"
            : "Positioned below median price"}
        </Typography>
      </div>
    </div>
  );
}

export default MarketPricePosition;