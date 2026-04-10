"use client";

import type { DeepDiveProduct } from "../../types";
import { DeepDiveProductCard } from "../DeepDiveProductCard/DeepDiveProductCard";

interface DeepDiveResultsProps {
  products: DeepDiveProduct[];
}

function DeepDiveResults({ products }: DeepDiveResultsProps) {
  return (
    <div className="grid grid-cols-1 items-start gap-4 self-start sm:grid-cols-2 xl:grid-cols-3">
      {products.map((product) => (
        <DeepDiveProductCard
          key={product.id}
          {...product}
          image={product.image}
        />
      ))}
    </div>
  );
}

export default DeepDiveResults;
