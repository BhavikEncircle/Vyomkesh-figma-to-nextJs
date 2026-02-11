import React from "react";
import Companies from "./Companies";

function Certifications() {
  return (
    <section className="w-full pb-12">
      <div className="px-6 md:px-24bg-white">
        <div className="flex flex-col justify-center items-center tracking-tight mb-8">
          <h2 className="font-cormorant font-bold text-6xl text-center text-[#1a1a1a]">
            Trusted & Certified
          </h2>
        </div>
      </div>
      <div className="w-full flex gap-5 overflow-hidden">
        <Companies />
      </div>
    </section>
  );
}

export default Certifications;
