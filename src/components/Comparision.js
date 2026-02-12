"use client";

import { useState } from "react";
import Image from "next/image";

const HairComparison = () => {
  const [sliderPosition, setSliderPosition] = useState(50);

  const handleSliderChange = (e) => {
    setSliderPosition(e.target.value);
  };  

  return (
    <div className="flex flex-col lg:flex-row items-center gap-10 px-6 py-12 bg-white">
      <div className="relative w-full lg:w-1/2 aspect-[4/3] overflow-hidden rounded-2xl ">
        <Image
          src="/After.png"
          alt="After hair treatment"
          fill
          className="object-contain"
        />

        <div
          className="absolute inset-0 w-full h-full overflow-hidden"
          style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
        >
          <Image
            src="/Before.png"
            alt="Before hair treatment"
            fill
            className="object-contain"
          />
        </div>

        <div
          className="absolute top-0 bottom-0 w-1 bg-white shadow-xl z-20"
          style={{ left: `${sliderPosition}%` }}
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center border-2 border-gray-200 ">
            <span className="text-gray-400 font-bold text-xs ">|||</span>
          </div>
        </div>

        <input
          type="range"
          min="0"
          max="100"
          value={sliderPosition}
          onChange={handleSliderChange}
          className="absolute inset-0 w-full h-full opacity-0  z-30"
        />

        <div className="absolute top-4 left-4 bg-black/40 text-white px-3 py-1 rounded-md text-sm z-10">
          Before
        </div>
        <div className="absolute top-4 right-4 bg-black/40 text-white px-3 py-1 rounded-md text-sm z-10">
          After
        </div>
      </div>

      <div className="w-full lg:w-1/2 text-left">
        <p className="uppercase text-sm text-green-700 tracking-widest mb-2 font-semibold">
          From Weak & Dull to Healthy & Radiant
        </p>
        <h2 className="font-cormorant font-bold text-5xl lg:text-6xl mb-6 text-[#1a1a1a]">
          Your Hair, Reimagined
        </h2>
        <p className="text-gray-600 leading-relaxed text-lg">
          Infused with the richness of time-tested Ayurvedic ingredients, our
          nutrient-dense oils deeply nourish your scalp, strengthen hair roots,
          and restore shine from root to tip.
        </p>
      </div>
    </div>
  );
};

export default HairComparison;
