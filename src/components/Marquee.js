import React from "react";
import MarqueeItems from "./MarqueeItems";

function Marquee() {
  return (
    <div className="bg-secondary overflow-hidden whitespace-nowrap py-3 md:py-4 group cursor-default">
      <div className="flex w-max animate-marquee items-center gap-10 md:gap-20 text-sm md:text-base lg:text-lg text-white font-poppins group-hover:[animation-play-state:paused]">
        <div className="flex gap-10 md:gap-20 items-center">
          <MarqueeItems />
        </div>

        <div className="flex gap-10 md:gap-20 items-center" aria-hidden="true">
          <MarqueeItems />
        </div>
      </div>
    </div>
  );
}

export default Marquee;
