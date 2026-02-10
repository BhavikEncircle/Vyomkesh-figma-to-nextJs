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

      <div className="w-[50%] ms-auto px-8 flex flex-col justify-center gap-3 absolute inset-0 z-10">
        <p className="tracking-wider text-sm">Nourish Your Hair Naturally</p>
        <h1 className="font-cormorant font-semibold text-6xl w-140 tracking-tighter">
          Complete Care with Vyomkesh Shampoo, Oil & Conditioner.
        </h1>
        <p className="text-xs w-130 ">
          Revive your scalp and strands with time-tested herbal formulations —
          100% natural, sulfate-free, and made for Indian hair textures.
        </p>
        <button className="uppercase text-xs w-32 py-2 rounded-md tracking-wide bg-secondary text-white hover:bg-transparent hover:text-secondary font-bold">
          Shop now →
        </button>
      </div>
    </section>
  );
}

export default Hero;
