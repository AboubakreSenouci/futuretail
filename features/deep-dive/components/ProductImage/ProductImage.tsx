import { Button } from "@/components/ui/Button";
import { Search } from "lucide-react";
import Image, { StaticImageData } from "next/image";

interface ProductImageProps {
  src: StaticImageData | string;
  alt?: string;
}

function ProductImage({ src, alt = "Product Image" }: ProductImageProps) {
  return (
    <div className="relative min-h-145.5 bg-black rounded-[32px] overflow-hidden group cursor-pointer">
      <Image
        src={src}
        alt={alt}
        className="object-cover w-full max-h-160 transition-transform duration-500 ease-in-out group-hover:scale-110"
      />

      <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      <div className="absolute bottom-5 right-0 -translate-x-1/2 opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 ease-out">
        <Button
          iconOnly
          className="bg-white rounded-full shadow-md w-12 h-12"
        >
          <Search size={16} className="text-text-deep" />
        </Button>
      </div>
    </div>
  );
}

export default ProductImage;
