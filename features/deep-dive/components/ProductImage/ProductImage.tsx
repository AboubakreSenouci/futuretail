"use client";

import { Button } from "@/components/ui/Button";
import { Search } from "lucide-react";
import Image, { StaticImageData } from "next/image";
import { useMainProductQuery } from "../../hooks/useMainProductQuery";
import { ProductImageSkeleton } from "../ProductImageSkeleton/ProductImageSkeleton";

interface ProductImageProps {
  src?: StaticImageData | string;
  alt?: string;
}

function ProductImage({ src: srcProp, alt: altProp }: ProductImageProps) {
  const { data, isLoading } = useMainProductQuery();

  const src = srcProp ?? data?.src;
  const alt = altProp ?? data?.alt ?? "Product Image";

  if (isLoading) {
    return <ProductImageSkeleton />;
  }

  if (!src) return null;

  return (
    <div className="group relative aspect-[640/880] overflow-hidden rounded-[24px] bg-black sm:rounded-[32px] cursor-pointer">
      <Image
        src={src}
        alt={alt}
        className="h-full w-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
      />

      <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      <div className="absolute bottom-5 right-0 -translate-x-1/2 opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 ease-out">
        <Button iconOnly className="bg-white rounded-full shadow-md w-12 h-12">
          <Search size={16} className="text-text-deep" />
        </Button>
      </div>
    </div>
  );
}

export default ProductImage;
