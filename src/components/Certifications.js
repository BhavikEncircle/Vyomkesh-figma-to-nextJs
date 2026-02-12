import React from "react";
import Companies from "./Companies";

function Certifications() {
  return (
    <section className="w-full pb-12 overflow-hidden">
      <div className="px-6 md:px-12 lg:px-24 bg-white">
        <div className="flex flex-col justify-center items-center tracking-tight mb-8 md:mb-12">
          <h2 className="font-cormorant font-bold text-4xl md:text-5xl lg:text-6xl text-center text-[#1a1a1a]">
            Trusted & Certified
          </h2>
        </div>
      </div>

      <div className="w-full flex overflow-hidden  transition-opacity">
        <Companies />
      </div>
    </section>
  );
}

export default Certifications;
