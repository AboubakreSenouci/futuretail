"use client";

import { Button } from "@/components/ui/Button";
import { Typography } from "@/components/ui/Typography/Typography";
import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";

function DeepDiveHeader() {
  const router = useRouter();

  return (
    <div className="flex flex-row py-6 gap-4 px-8 items-center border-b border-border">
      <Button
        iconOnly
        className="bg-white text-text-strong"
        onClick={() => router.back()}
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
  );
}

export default DeepDiveHeader;
