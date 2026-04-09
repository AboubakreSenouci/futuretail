import Image, { StaticImageData } from "next/image";

interface ProductImageProps {
  src: StaticImageData | string;
  alt?: string;
}

function ProductImage({ src, alt = "Product Image" }: ProductImageProps) {
  return (
    <Image
      src={src}
      alt={alt}
      className="object-cover w-full min-h-145.5 max-h-160 rounded-[32px] transition-transform duration-500 ease-in-out group-hover:scale-110"
    />
  );
}

export default ProductImage;
