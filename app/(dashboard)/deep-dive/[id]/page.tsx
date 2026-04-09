"use client";

import { Button } from "@/components/ui/Button";
import { Typography } from "@/components/ui/Typography/Typography";
import {
  ArrowLeft,
  Award,
  ClipboardCheck,
  TrendingUp,
  Users,
} from "lucide-react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import image from "@/public/images/image4.png";
import DeepDiveResults from "@/features/deep-dive/components/DeepDiveResults/DeepDiveResults";
import { Chip } from "@heroui/react";

function DeepDive() {
  const router = useRouter();

  const handleBackClick = () => {
    router.back();
  };

  return (
    <div className="bg-white">
      <div className="flex flex-row py-6 gap-4 px-8 items-center border-b border-border">
        <Button
          iconOnly
          className="bg-white text-[#2D2D3D]"
          onClick={handleBackClick}
        >
          <ArrowLeft size={16} />
        </Button>

        <div className="flex flex-col gap-1">
          <Typography variant="semibold_24" className="text-foreground">
            Deep Dive
          </Typography>
          <Typography variant="regular_14" className="text-muted">
            Find fashion apparel with text, object detection and reverse image
            search
          </Typography>
        </div>
      </div>
      <div className="flex flex-row pt-8 pl-8 gap-12">
        <div className="flex flex-col gap-6">
          <Image
            src={image}
            alt="Deep Dive"
            className="object-cover w-full min-h-145.5 max-h-160 rounded-[32px] transition-transform duration-500 ease-in-out group-hover:scale-110"
          />
          <div className="flex flex-col bg-white border border-border rounded-[16px] p-4 gap-4">
            <div className="flex flex-row justify-between w-full items-center">
              <div>
                <Typography variant="semibold_24" className="text-foreground">
                  Neon Yellow Summer Dress
                </Typography>
                <Typography variant="regular_14" className="text-muted">
                  ZARA
                </Typography>
              </div>
              <div>
                <Typography variant="semibold_24" className="text-foreground">
                  €71.23
                </Typography>
              </div>
            </div>
            <div>
              <Chip className="bg-[#ECFDF5] px-2.5 py-1 gap-2">
                <Typography variant="regular_14" className="text-[#007A55]">
                  In Stock
                </Typography>
              </Chip>

              <Chip className="bg-[#F3F4F6] px-2.5 py-1">
                <Typography variant="regular_14" className="text-[#364153]">
                  Women's Fashion
                </Typography>
              </Chip>

              <Chip className="bg-[#F3F4F6] px-2.5 py-1">
                <Typography variant="regular_14" className="text-[#364153]">
                  Summer Dress
                </Typography>
              </Chip>
            </div>
            <Typography variant="regular_12" className="text-muted">
              SKU: ZR-SUM-2024-001 • Updated: Mar 11, 2026
            </Typography>
          </div>
          <div className=" flex flex-col gap-3">
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
                    68
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
                  97%
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
                  324
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
                    #2
                  </Typography>
                  <Typography variant="regular_14" className="text-[#99A1AF]">
                    /12
                  </Typography>
                </div>
              </div>
            </div>
          </div>
        </div>
        <DeepDiveResults />
      </div>
    </div>
  );
}

export default DeepDive;
