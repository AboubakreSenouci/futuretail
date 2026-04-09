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
            <Users size={16} className="text-info" />
            <Typography variant="regular_14" className="text-muted-secondary">
              Popularity
            </Typography>
          </div>
          <div className="flex items-center gap-0.5">
            <Typography variant="semibold_24" className="text-foreground">
              {popularity}
            </Typography>
            <Typography variant="regular_14" className="text-muted-light">
              /100
            </Typography>
          </div>
        </div>

        <div className="flex flex-col rounded-[16px] border border-border gap-3 p-4">
          <div className="flex items-center gap-2">
            <Award size={16} className="text-accent-blue" />
            <Typography variant="regular_14" className="text-muted-secondary">
              Match Score
            </Typography>
          </div>
          <Typography variant="semibold_24" className="text-foreground">
            {matchScore}%
          </Typography>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3 grid-rows-[auto]">
        <div className="flex flex-col rounded-[16px] border border-border gap-3 p-4">
          <div className="flex items-center gap-2">
            <ClipboardCheck size={16} className="text-success-positive" />
            <Typography variant="regular_14" className="text-muted-secondary">
              Reviews
            </Typography>
          </div>
          <Typography variant="semibold_24" className="text-foreground">
            {reviews}
          </Typography>
        </div>

        <div className="flex flex-col rounded-[16px] border border-border gap-3 p-4">
          <div className="flex items-center gap-2">
            <TrendingUp size={16} className="text-warning-dark" />
            <Typography variant="regular_14" className="text-muted-secondary">
              Ranking
            </Typography>
          </div>
          <div className="flex items-center gap-0.5">
            <Typography variant="semibold_24" className="text-foreground">
              #{ranking}
            </Typography>
            <Typography variant="regular_14" className="text-muted-light">
              /{rankingTotal}
            </Typography>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductStats;
