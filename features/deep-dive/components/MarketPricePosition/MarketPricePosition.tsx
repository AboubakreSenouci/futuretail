"use client";

interface MarketPricePositionProps {
  lowest?: number;
  median?: number;
  highest?: number;
  current?: number;
  currency?: string;
  positionLabel?: string;
}

export function MarketPricePosition({
  lowest = 29.99,
  median = 55,
  highest = 125,
  current = 55,
  currency = "€",
  positionLabel = "Positioned above median price",
}: MarketPricePositionProps) {
  const percent = ((current - lowest) / (highest - lowest)) * 100;
  const medianPercent = ((median - lowest) / (highest - lowest)) * 100;
  const clampedPercent = Math.min(100, Math.max(0, percent));

  return (
    <div className="bg-white border border-border rounded-[16px] p-5 flex flex-col gap-4">
      {/* Header */}
      <div className="flex items-center gap-2">
        {/* Target icon */}
        <svg
          width="22"
          height="22"
          viewBox="0 0 22 22"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="11" cy="11" r="10" stroke="#7C6FF7" strokeWidth="1.8" />
          <circle cx="11" cy="11" r="6.5" stroke="#7C6FF7" strokeWidth="1.8" />
          <circle cx="11" cy="11" r="3" fill="#7C6FF7" />
        </svg>
        <span className="text-[15px] font-semibold text-foreground">
          Market Price Position
        </span>
      </div>

      {/* Labels row */}
      <div className="flex flex-col gap-1">
        <div className="relative flex justify-between text-[12px] text-muted mb-1">
          <span>Lowest</span>
          {/* Median label centered */}
          <span
            className="absolute"
            style={{ left: `${medianPercent}%`, transform: "translateX(-50%)" }}
          >
            Median
          </span>
          <span>Highest</span>
        </div>

        {/* Gradient track */}
        <div className="relative h-[10px] rounded-full overflow-visible">
          {/* Gradient bar */}
          <div
            className="absolute inset-0 rounded-full"
            style={{
              background:
                "linear-gradient(to right, #D0FAE5, #FEF3C6, #FFE2E2)",
            }}
          />

          {/* Median tick mark */}
          <div
            className="absolute top-[-4px] bottom-[-4px] w-[2px] bg-gray-400 rounded-full"
            style={{ left: `${medianPercent}%`, transform: "translateX(-50%)" }}
          />

          {/* Current price dot */}
          <div
            className="absolute top-1/2 -translate-y-1/2 w-[18px] h-[18px] rounded-full bg-[#6B5CE7] border-[2.5px] border-white shadow-md z-10"
            style={{
              left: `${clampedPercent}%`,
              transform: "translate(-50%, -50%)",
            }}
          />
        </div>

        {/* Price labels row */}
        <div className="relative flex justify-between mt-1">
          <span className="text-[14px] font-semibold text-emerald-500">
            {currency}
            {lowest.toFixed(2)}
          </span>
          {/* Median price centered */}
          <span
            className="absolute text-[14px] font-semibold text-foreground"
            style={{ left: `${medianPercent}%`, transform: "translateX(-50%)" }}
          >
            {currency}
            {median}
          </span>
          <span className="text-[14px] font-semibold text-red-500">
            {currency}
            {highest}
          </span>
        </div>
      </div>

      {/* Position badge */}
      <div className="flex items-center gap-2 bg-emerald-50 border border-emerald-100 rounded-[10px] px-4 py-3">
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M2 11L6.5 6L9.5 9L14 4"
            stroke="#10B981"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M11 4H14V7"
            stroke="#10B981"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <span className="text-[13px] font-semibold text-emerald-600">
          {positionLabel}
        </span>
      </div>
    </div>
  );
}
