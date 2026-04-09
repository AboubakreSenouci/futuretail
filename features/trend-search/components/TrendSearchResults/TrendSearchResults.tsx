import { trendingProducts } from "../../data";
import { TrendProductCard } from "../TrendProductCard/TrendProductCard";

export function TrendSearchResults() {
  return (
    <div className="grid grid-cols-4 w-fit gap-x-4 gap-y-2 bg-white">
      {trendingProducts.map((product) => (
        <TrendProductCard key={product.id} {...product} image={product.image} />
      ))}
    </div>
  );
}
