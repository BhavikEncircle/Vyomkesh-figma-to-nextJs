import Image from "next/image";
import React from "react";

function Hero() {
  return (
    <section className="relative w-full mt-22 lg:h-[80.5vh] md:h-[79vh] sm:h-[83vh]">
      <div className="w-full">
        <Image
          src="/BG.png"
          alt="background"
          fill
          // width={2000}
          // height={1000}
          className="w-full h-auto object-cover object-right lg:object-center"
          priority
        />
      </div>

      <div className="relative bg-[#F3F6EF] lg:bg-transparent lg:absolute lg:inset-0 z-10 flex flex-col justify-center px-6 py-10 lg:py-0 lg:px-12">
        <div className="w-full lg:w-[50%] lg:ms-auto flex flex-col gap-4 lg:gap-5">
          <p className="tracking-widest text-lg lg:text-xl text-[#1a1a1a]">
            Nourish Your Hair Naturally
          </p>

          <h1 className="font-cormorant font-bold text-5xl md:text-6xl lg:text-[84px] leading-tight lg:leading-[1.1] text-[#1a1a1a]">
            Complete Care with Vyomkesh Shampoo, Oil & Conditioner.
          </h1>

          <p className="text-lg text-gray-700 lg:w-[450px]">
            Revive your scalp and strands with time-tested herbal formulations —
            100% natural, sulfate-free, and made for Indian hair textures.
          </p>

          <button className="uppercase text-lg w-44 px-4 py-3 mt-5 rounded-lg tracking-wide bg-secondary text-white cursor-pointer hover:bg-transparent hover:text-secondary font-bold border-2 border-secondary transition-all">
            Shop now →
          </button>
        </div>
      </div>
    </section>
  );
}

export default Hero;
