"use client";

import { Button } from "@/components/ui/Button";
import { Typography } from "@/components/ui/Typography/Typography";
import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import image from "@/public/images/image4.png";
import DeepDiveResults from "@/features/deep-dive/components/DeepDiveResults/DeepDiveResults";

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
        <div>
          <Image
            src={image}
            alt="Deep Dive"
            className="w-108.75 h-145 rounded-[32px]"
          />
        </div>
        <DeepDiveResults />
      </div>
    </div>
  );
}

export default DeepDive;
