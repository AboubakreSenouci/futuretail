"use client";

import Image, { StaticImageData } from "next/image";
import { Typography } from "@/components/ui/Typography/Typography";
import { Chip } from "@heroui/react";

interface DeepDiveProductCardProps {
  image: string | StaticImageData;
  brand: string;
  name: string;
  price: number;
  currency?: string;
  matchPercentage?: number;
  discount?: number;
  handleCardClick?: () => void;
}

export function DeepDiveProductCard({
  image,
  brand,
  name,
  price,
  currency = "€",
  matchPercentage,
  handleCardClick,
  discount,
}: DeepDiveProductCardProps) {
  return (
    <div
      className=" min-w-51 flex flex-col group cursor-pointer max-w-[250px] h-fit"
      onClick={handleCardClick}
    >
      {/* Image */}
      <div className="h-64 relative overflow-hidden rounded-[12px]">
        <Image
          src={image}
          className="object-cover w-full h-full transition-transform duration-500 ease-in-out group-hover:scale-110"
          alt={`${brand} - ${name}`}
          fill
        />
      </div>

      {/* Footer */}
      <div className="flex flex-col gap-1 p-3">
        <Typography variant="regular_10" className="text-muted">
          {brand}
        </Typography>
        <Typography variant="medium_12" className="text-foreground">
          {name}
        </Typography>
        <div className="flex items-center justify-between">
          <Typography variant="bold_12" className="text-primary-dark">
            {currency}
            {price.toFixed(2)}
          </Typography>
          {discount !== undefined && (
            <Chip className="bg-success py-0.5 px-1">
              <Typography variant="medium_12" className="text-white">
                -€{discount.toFixed(2)}
              </Typography>
            </Chip>
          )}
        </div>
        <div className="flex items-center justify-between">
          {matchPercentage !== undefined && (
            <div className="flex items-center justify-between w-full">
              <Typography variant="medium_8" className="text-muted">
                Match: {matchPercentage}%
              </Typography>
              <Typography variant="medium_8" className="text-success">
                5% Cheaper than main product
              </Typography>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
