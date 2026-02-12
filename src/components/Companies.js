import Image from "next/image";
import React from "react";
import { CompData } from "./data/CompData";
function Companies() {
  return (
    <div className="flex animate-marquee w-max gap-5 items-center py-4 rounded-xl hover:[animation-play-state:paused] ">
      {CompData.map((comp) => (
        <div key={comp.id} className=" bg-[#F3F6EF] shrink-0">
          <Image
            src={comp.src}
            alt={comp.src}
            width={180}
            height={150}
            className="h-45 flex items-center"
          />
        </div>
      ))}
      {CompData.map((comp) => (
        <div key={comp.id} className=" bg-[#F3F6EF] shrink-0">
          <Image
            src={comp.src}
            alt={comp.src}
            width={180}
            height={150}
            className="h-45 flex items-center"
          />
        </div>
      ))}
      {CompData.map((comp) => (
        <div key={comp.id} className=" bg-[#F3F6EF] shrink-0">
          <Image
            src={comp.src}
            alt={comp.src}
            width={180}
            height={150}
            className="h-45 flex items-center"
          />
        </div>
      ))}
    </div>
  );
}

export default Companies;
