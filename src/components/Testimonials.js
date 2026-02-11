import React from "react";
import ReviewCard from "./ReviewCard";

function Testimonials() {
  return (
    <section className="w-full my-10 bg-white flex flex-col gap-10 py-10 md:py-20 px-6">
      <div className="flex flex-col justify-center items-center tracking-tight">
        <p className="uppercase text-sm md:text-md text-[#93B178] tracking-widest text-center">
          Real results, Happy hair!
        </p>

        <h2 className="font-cormorant font-bold text-4xl lg:text-6xl w-full lg:w-260 text-center text-[#1a1a1a] mt-2">
          What Our Customers Say
        </h2>
      </div>

      <div className="w-full overflow-hidden">
        <ReviewCard />

        <div className="flex justify-center items-center gap-2 mt-10">
          <span className="h-2.5 w-2.5 rounded-full bg-secondary"></span>
          <span className="h-2.5 w-2.5 rounded-full bg-[#B4C4A9]"></span>
          <span className="h-2.5 w-2.5 rounded-full bg-[#B4C4A9]"></span>
          <span className="h-2.5 w-2.5 rounded-full bg-[#B4C4A9]"></span>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
