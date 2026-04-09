import React from "react";
import { deepDiveProducts } from "../../data";
import { DeepDiveProductCard } from "../DeepDiveProductCard/DeepDiveProductCard";

function DeepDiveResults() {
  return (
    <div className="grid grid-cols-3 gap-2.5 w-fit">
      {deepDiveProducts.map((product) => (
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
