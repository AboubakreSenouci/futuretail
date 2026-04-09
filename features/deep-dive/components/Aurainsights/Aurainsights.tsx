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
        <Sparkles size={20} className="text-info" />
        <Typography variant="semibold_24" className="text-foreground">
          Aura Insights
        </Typography>
      </div>

      <div className="flex rounded-[10px] gap-3 bg-info-soft p-3">
        <div className="flex items-center h-full ">
          <div className="bg-info-dark w-1.5 h-1.5 rounded-full mt-1.5"></div>
        </div>

        <Typography variant="regular_14" className="text-muted-strong">
          Your product is
          <span className="font-bold text-info-dark"> 16% more expensive </span>
          than the market <br />
          average of €61.5.
        </Typography>
      </div>

      <div className="flex rounded-[10px] gap-3 bg-danger-soft p-3">
        <div className="flex items-center h-full ">
          <div className="bg-warning-strong w-1.5 h-1.5 rounded-full"></div>
        </div>

        <div className="font-bold text-warning-strong flex items-center gap-1">
          10 competitors
          <Typography variant="regular_14" className="text-muted-strong">
            offer a lower price.
          </Typography>
        </div>
      </div>

      <div className="flex rounded-[10px] gap-3 bg-info-softer p-3">
        <div className="flex items-center h-full ">
          <div className="bg-info-alt w-1.5 h-1.5 rounded-full"></div>
        </div>

        <Typography variant="regular_14" className="text-muted-strong">
          Positioned in the{" "}
          <span className="text-info-alt font-bold">
            upper-mid price quartile.
          </span>
        </Typography>
      </div>

      {/* Divider */}
      <div className="border-t border-border" />

      {/* Options row */}
      <div className="flex flex-col gap-3 sm:flex-row">
        <div className="flex flex-col gap-1 w-full">
          <Typography
            variant="regular_12"
            className="text-muted-secondary uppercase tracking-widest"
          >
            Cheaper Options
          </Typography>
          <Typography
            variant="semibold_24"
            className="text-success-positive text-[2rem] font-bold"
          >
            {cheaperOptions}
          </Typography>
        </div>

        <div className="flex flex-col gap-1 w-full">
          <Typography
            variant="regular_12"
            className="text-muted-secondary uppercase tracking-widest"
          >
            Premium Options
          </Typography>
          <Typography
            variant="semibold_24"
            className="text-danger text-[2rem] font-bold"
          >
            {premiumOptions}
          </Typography>
        </div>
      </div>
    </div>
  );
}

export default AuraInsights;
