import Image from "next/image";
import React from "react";

function GrowthFormula() {
  return (
    <section className="w-full overflow-hidden my-10 bg-[#F3F6EF] flex flex-col lg:flex-row justify-between items-center py-20 px-6 lg:px-0">
      <div className="hidden lg:block lg:w-1/4">
        <Image
          src="/SideImage1.png"
          alt="Shampoo"
          width={400}
          height={400}
          className="rotate-[23deg] -translate-x-24 translate-y-10 object-contain"
        />
      </div>

      <div className="flex flex-col flex-1 max-w-4xl justify-center gap-6 items-center tracking-tight text-center">
        <p className="uppercase text-sm md:text-md text-[#93B178] tracking-[0.2em] font-semibold">
          Growth Formula
        </p>

        <h2 className="font-cormorant font-bold text-3xl md:text-5xl lg:text-6xl leading-tight text-[#1a1a1a]">
          Our natural oils provide intense hydration and repair, leaving your
          hair soft.
        </h2>

        <p className="text-sm md:text-lg text-gray-500 max-w-xl">
          Enriched with powerful botanicals, our oils deeply nourish your scalp.
        </p>

        <button className="uppercase text-sm md:text-lg w-fit px-8 py-3 mt-4 rounded-lg tracking-widest bg-[#3D4A35] text-white border-2 border-[#3D4A35] transition-all hover:bg-transparent hover:text-[#3D4A35] font-bold">
          Shop now →
        </button>
      </div>

      <div className="hidden lg:block lg:w-1/4">
        <Image
          src="/SideImage2.png"
          alt="Conditioner"
          width={500}
          height={500}
          className="translate-x-20 translate-y-10 object-contain"
        />
      </div>
    </section>
  );
}

export default GrowthFormula;
