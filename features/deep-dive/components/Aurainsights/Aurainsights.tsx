import { Typography } from "@/components/ui/Typography/Typography";
import { Sparkles } from "lucide-react";

interface InsightItem {
  dotColor: string;
  bgColor: string;
  text: React.ReactNode;
}

interface AuraInsightsProps {
  insights?: InsightItem[];
  cheaperOptions?: number;
  premiumOptions?: number;
}

function AuraInsights({ cheaperOptions, premiumOptions }: AuraInsightsProps) {
  return (
    <div className="flex flex-col rounded-[16px] border border-border p-4 gap-4 bg-white">
      {/* Header */}
      <div className="flex items-center gap-2">
        <Sparkles size={20} className="text-[#794BE7]" />
        <Typography variant="semibold_24" className="text-[#101828]">
          Aura Insights
        </Typography>
      </div>

      <div className="flex rounded-[10px] gap-3 bg-[#EFF6FF] p-3">
        <div className="flex items-center h-full ">
          <div className="bg-[#155DFC] w-1.5 h-1.5 rounded-full mt-1.5"></div>
        </div>

        <Typography variant="regular_14" className="text-[#364153]">
          Your product is
          <span className="font-bold text-[#155DFC]"> 16% more expensive </span>
          than the market <br />
          average of €61.5.
        </Typography>
      </div>

      <div className="flex rounded-[10px] gap-3 bg-[#FFFBEB] p-3">
        <div className="flex items-center h-full ">
          <div className="bg-[#BB4D00] w-1.5 h-1.5 rounded-full"></div>
        </div>

        <div className="font-bold text-[#BB4D00] flex items-center gap-1">
          10 competitors
          <Typography variant="regular_14" className="text-[#364153]">
            offer a lower price.
          </Typography>
        </div>
      </div>

      <div className="flex rounded-[10px] gap-3 bg-[#FAF5FF] p-3">
        <div className="flex items-center h-full ">
          <div className="bg-[#9810FA] w-1.5 h-1.5 rounded-full"></div>
        </div>

        <Typography variant="regular_14" className="text-[#364153]">
          Positioned in the{" "}
          <span className="text-[#9810FA] font-bold">
            upper-mid price quartile.
          </span>
        </Typography>
      </div>

      {/* Divider */}
      <div className="border-t border-border" />

      {/* Options row */}
      <div className="flex flex-row gap-3">
        <div className="flex flex-col gap-1 w-full">
          <Typography
            variant="regular_12"
            className="text-[#6A7282] uppercase tracking-widest"
          >
            Cheaper Options
          </Typography>
          <Typography
            variant="semibold_24"
            className="text-[#009966] text-[2rem] font-bold"
          >
            {cheaperOptions}
          </Typography>
        </div>

        <div className="flex flex-col gap-1 w-full">
          <Typography
            variant="regular_12"
            className="text-[#6A7282] uppercase tracking-widest"
          >
            Premium Options
          </Typography>
          <Typography
            variant="semibold_24"
            className="text-[#E7000B] text-[2rem] font-bold"
          >
            {premiumOptions}
          </Typography>
        </div>
      </div>
    </div>
  );
}

export default AuraInsights;
