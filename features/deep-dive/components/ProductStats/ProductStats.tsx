import { Typography } from "@/components/ui/Typography/Typography";
import { Award, ClipboardCheck, TrendingUp, Users } from "lucide-react";

interface ProductStatsProps {
  popularity: number;
  matchScore: number;
  reviews: number;
  ranking: number;
  rankingTotal: number;
}

function ProductStats({
  popularity,
  matchScore,
  reviews,
  ranking,
  rankingTotal,
}: ProductStatsProps) {
  return (
    <div className="flex flex-col gap-3">
      <div className="grid grid-cols-2 gap-3 grid-rows-[auto]">
        <div className="flex flex-col rounded-[16px] border border-border gap-3 p-4">
          <div className="flex items-center gap-2">
            <Users size={16} className="text-[#794BE7]" />
            <Typography variant="regular_14" className="text-[#6A7282]">
              Popularity
            </Typography>
          </div>
          <div className="flex items-center gap-0.5">
            <Typography variant="semibold_24" className="text-[#101828]">
              {popularity}
            </Typography>
            <Typography variant="regular_14" className="text-[#99A1AF]">
              /100
            </Typography>
          </div>
        </div>

        <div className="flex flex-col rounded-[16px] border border-border gap-3 p-4">
          <div className="flex items-center gap-2">
            <Award size={16} className="text-[#2B7FFF]" />
            <Typography variant="regular_14" className="text-[#6A7282]">
              Match Score
            </Typography>
          </div>
          <Typography variant="semibold_24" className="text-[#101828]">
            {matchScore}%
          </Typography>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3 grid-rows-[auto]">
        <div className="flex flex-col rounded-[16px] border border-border gap-3 p-4">
          <div className="flex items-center gap-2">
            <ClipboardCheck size={16} className="text-[#00BC7D]" />
            <Typography variant="regular_14" className="text-[#6A7282]">
              Reviews
            </Typography>
          </div>
          <Typography variant="semibold_24" className="text-[#101828]">
            {reviews}
          </Typography>
        </div>

        <div className="flex flex-col rounded-[16px] border border-border gap-3 p-4">
          <div className="flex items-center gap-2">
            <TrendingUp size={16} className="text-[#FE9A00]" />
            <Typography variant="regular_14" className="text-[#6A7282]">
              Ranking
            </Typography>
          </div>
          <div className="flex items-center gap-0.5">
            <Typography variant="semibold_24" className="text-[#101828]">
              #{ranking}
            </Typography>
            <Typography variant="regular_14" className="text-[#99A1AF]">
              /{rankingTotal}
            </Typography>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductStats;
