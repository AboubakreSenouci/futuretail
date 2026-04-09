import { Typography } from "@/components/ui/Typography/Typography";
import { Chip } from "@heroui/react";

interface ProductInfoProps {
  name: string;
  brand: string;
  price: string;
  status: string;
  tags: string[];
  sku: string;
  updatedAt: string;
}

function ProductInfo({
  name,
  brand,
  price,
  status,
  tags,
  sku,
  updatedAt,
}: ProductInfoProps) {
  return (
    <div className="flex flex-col bg-white border border-border rounded-[16px] p-4 gap-4">
      <div className="flex flex-row justify-between w-full items-center">
        <div>
          <Typography variant="semibold_24" className="text-foreground">
            {name}
          </Typography>
          <Typography variant="regular_14" className="text-muted">
            {brand}
          </Typography>
        </div>
        <div>
          <Typography variant="semibold_24" className="text-foreground">
            {price}
          </Typography>
        </div>
      </div>

      <div className="flex flex-wrap gap-2">
        <Chip className="bg-success-soft px-2.5 py-1 gap-2">
          <Typography variant="regular_14" className="text-success-dark">
            {status}
          </Typography>
        </Chip>
        {tags.map((tag) => (
          <Chip key={tag} className="bg-surface-muted px-2.5 py-1">
            <Typography variant="regular_14" className="text-muted-strong">
              {tag}
            </Typography>
          </Chip>
        ))}
      </div>

      <Typography variant="regular_12" className="text-muted">
        SKU: {sku} • Updated: {updatedAt}
      </Typography>
    </div>
  );
}

export default ProductInfo;
