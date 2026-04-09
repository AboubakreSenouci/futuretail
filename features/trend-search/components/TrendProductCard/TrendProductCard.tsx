"use client";

import { Chip } from "@heroui/react";
import { Search, Heart, Spool, MessageCirclePlus } from "lucide-react";
import Image from "next/image";
import { Typography } from "@/components/ui/Typography/Typography";
import { Button } from "@/components/ui/Button";

interface TrendProductCardProps {
  image: string;
  brand: string;
  name: string;
  price: number;
  currency?: string;
  matchPercentage?: number;
  isHighDemand?: boolean;
  isTrending?: boolean;
  onSearch?: () => void;
  onLike?: () => void;
  onSpool?: () => void;
  onComment?: () => void;
}

export function TrendProductCard({
  image,
  brand,
  name,
  price,
  currency = "€",
  matchPercentage,
  isHighDemand = false,
  isTrending = false,
  onSearch,
  onLike,
  onSpool,
  onComment,
}: TrendProductCardProps) {
  return (
    <div className="w-67 flex flex-col group cursor-pointer">
      <div className="h-88.75 relative overflow-hidden rounded-[12px]">
        <Image
          src={image}
          className="rounded-[12px] object-cover w-full h-full transition-transform duration-500 ease-in-out group-hover:scale-110"
          alt={`${brand} - ${name}`}
          fill
        />

        {isTrending && (
          <Chip className="absolute top-2 left-2 bg-primary-dark">
            <Typography variant="bold_12" className="text-white py-1 px-2">
              Trending
            </Typography>
          </Chip>
        )}

        <div className="absolute top-2 left-[230px] flex flex-col gap-2 opacity-0 translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 ease-out">
          <Button
            iconOnly
            size="sm"
            className="rounded-full bg-white text-primary p-1.25"
            onClick={onSearch}
          >
            <Search size={16} />
          </Button>
          <Button
            iconOnly
            size="sm"
            className="rounded-full bg-white text-primary p-1.25"
            onClick={onLike}
          >
            <Heart size={16} />
          </Button>
          <Button
            iconOnly
            size="sm"
            className="rounded-full bg-white text-primary p-1.25"
            onClick={onSpool}
          >
            <Spool size={16} />
          </Button>
          <Button
            iconOnly
            size="sm"
            className="rounded-full bg-white text-primary"
            onClick={onComment}
          >
            <MessageCirclePlus size={16} />
          </Button>
        </div>
      </div>

      <div className="flex flex-col gap-2 p-3">
        <Typography variant="regular_10" className="text-muted">
          {brand}
        </Typography>
        <Typography variant="medium_12" className="text-foreground">
          {name}
        </Typography>
        <Typography variant="bold_12" className="text-primary-dark">
          {currency}
          {price.toFixed(2)}
        </Typography>
        <div className="flex items-center justify-between">
          {matchPercentage !== undefined && (
            <Typography variant="medium_8" className="text-muted">
              Match: {matchPercentage}%
            </Typography>
          )}
          {isHighDemand && (
            <Typography variant="medium_8" className="text-[#34C759]">
              High Demand
            </Typography>
          )}
        </div>
      </div>
    </div>
  );
}
