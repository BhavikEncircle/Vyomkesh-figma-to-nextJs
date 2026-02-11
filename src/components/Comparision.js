import Image from "next/image";
import React from "react";

function Comparison() {
  return (
    <section className="flex flex-col lg:flex-row gap-10 px-6 md:px-12 lg:px-34 py-12 md:py-20 items-center">
      <div className="flex relative gap-2 w-full lg:w-1/2">
        <div className="relative flex-1">
          <Image
            src="/Before.png"
            alt="Hair before treatment"
            width={500}
            height={600}
            className="rounded-xl w-full object-cover"
          />
          <div className="absolute top-4 left-4 bg-black/30 backdrop-blur-md text-white text-sm md:text-lg px-4 md:px-6 py-1 rounded-full">
            Before
          </div>
        </div>

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 w-8 md:w-12">
          <Image
            src="/Partition.png"
            alt="divider"
            width={40}
            height={40}
            className="w-full h-auto"
          />
        </div>

        <div className="relative flex-1">
          <Image
            src="/After.png"
            alt="Hair after treatment"
            width={500}
            height={600}
            className="rounded-xl w-full object-cover"
          />
          <div className="absolute top-4 right-4 bg-black/40 backdrop-blur-md text-white text-sm md:text-lg px-4 md:px-6 py-1 rounded-full">
            After
          </div>
        </div>
      </div>

      <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left">
        <p className="uppercase text-xs md:text-sm text-[#93B178] tracking-widest mb-3 font-semibold">
          From weak & dull to healthy & radiant
        </p>

        <h2 className="font-cormorant font-bold text-4xl md:text-5xl lg:text-6xl leading-tight text-[#1a1a1a] mb-6">
          Your Hair, Reimagined
        </h2>

        <p className="text-sm md:text-base text-gray-500 leading-relaxed max-w-2xl">
          Infused with the richness of time-tested Ayurvedic ingredients, our
          nutrient-dense oils deeply nourish your scalp, strengthen hair roots,
          and restore shine from root to tip. Experience reduced hair fall,
          improved thickness, and visibly healthier strands—all with the purity
          of nature in every drop.
        </p>
      </div>
    </section>
  );
}

export default Comparison;
