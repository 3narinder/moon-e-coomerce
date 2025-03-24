import React from "react";
import ProductCard from "./custom/ProductCard";
import { products } from "@/constants";

interface ProductListProps {
  limit?: number;
}

const ProductList: React.FC<ProductListProps> = ({ limit = 8 }) => {
  return (
    <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 lg:gap-12 md:gap-8 gap-6 lg:px-0 px-4">
      {products.slice(0, limit).map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
