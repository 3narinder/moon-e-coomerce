import Breadcrumb from "@/components/Breadcrum";
import Filter from "@/components/Filter";
import Pagination from "@/components/Pagination";
import ProductList from "@/components/ProductList";
import { products, sortItems } from "@/constants";
import React from "react";

const Shop = () => {
  return (
    <div className="lg:px-32  py-8 items-start mb-4">
      <Breadcrumb />
      <div className="flex gap-4">
        {/* Filter Section */}
        <div className="lg:w-1/5 lg:flex lg:flex-col hidden">
          <div className="text-display-3 font-semibold text-neutral-8 pb-6 border-b border-neutral-8 w-full">
            Showing {products.length} items
          </div>
          <Filter />
        </div>

        {/* List Section */}
        <div className="lg:w-4/5 w-full lg:pl-8 lg:pr-4">
          <div className="flex items-center justify-end lg:gap-3 lg:mb-7 mb-4 lg:pr-12 pr-4 text-display-1 text-neutral-8">
            <label>Sort by:</label>
            <div className="relative">
              <select className="lg:w-32 w-28  outline-none">
                {sortItems.map((item) => (
                  <option key={item.id} className="capitalize">
                    {item.title}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <ProductList limit={12} />

          <div className="relative lg:mt-8 mt-4 flex items-center md:justify-end justify-center lg:pr-12">
            <Pagination />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
