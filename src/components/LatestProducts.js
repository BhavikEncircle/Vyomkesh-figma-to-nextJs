import React from "react";
import ProductCard from "./ui/common/ProductCard";
import { LatestProd } from "@/components/data/LatestProd";

function LatestProducts() {
  return (
    <section className="px-6 md:px-24 py-16 bg-white">
      <div className="flex flex-col justify-center items-center tracking-tight mb-8">
        <p className="uppercase text-[10px] text-secondary font-medium tracking-widest mb-1">
          Nature&apos;s best for strong, healthy hair
        </p>
        <h2 className="font-cormorant font-semibold text-4xl text-center text-[#1a1a1a]">
          View Our Latest Products
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-10 max-w-[1200px] mx-auto">
        {LatestProd.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}

export default LatestProducts;
