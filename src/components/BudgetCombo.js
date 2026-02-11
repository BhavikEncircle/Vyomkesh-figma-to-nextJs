import React from "react";
import ProductCard from "./ui/common/ProductCard";
import { BudgetProdData } from "./data/BudgetProdData";
function BudgetCombo() {
  return (
    <section className="px-6 md:px-24 py-22 bg-white">
      <div className="flex flex-col justify-center items-center tracking-tight mb-8">
        <p className="uppercase text-md text-secondary tracking-widest mb-1">
          Complete Hair Care under Budget
        </p>
        <h2 className="font-cormorant font-bold text-6xl text-center text-[#1a1a1a]">
          Budget Beauty Combos
        </h2>
      </div>

      <div className="mx-auto max-w-screen2xl px-6 md:px-10 lg:px-10 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-8">
          {BudgetProdData.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default BudgetCombo;
