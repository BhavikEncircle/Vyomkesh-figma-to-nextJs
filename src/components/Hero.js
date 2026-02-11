import Image from "next/image";
import React from "react";

function Hero() {
  return (
    <section className="relative">
      <div>
        <Image
          src="/BG.png"
          alt="background"
          width={2000}
          height={1000}
          className="object cover"
        />
      </div>

      <div className="w-[50%] ms-auto px-12 flex flex-col justify-center gap-5 absolute inset-0 z-10">
        <p className="tracking-widest text-xl">Nourish Your Hair Naturally</p>
        <h1 className="font-cormorant font-bold text-[84px] leading-20">
          Complete Care with Vyomkesh Shampoo, Oil & Conditioner.
        </h1>
        <p className="text-lg w-200">
          Revive your scalp and strands with time-tested herbal formulations —
          100% natural, sulfate-free, and made for Indian hair textures.
        </p>
        <button className="uppercase text-lg w-44 px-4 py-3 mt-5 rounded-lg tracking-wide bg-secondary text-white hover:bg-transparent hover:text-secondary font-bold">
          Shop now →
        </button>
      </div>
    </section>
  );
}

export default Hero;
