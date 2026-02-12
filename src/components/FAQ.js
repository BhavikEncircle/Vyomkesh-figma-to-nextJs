import Image from "next/image";
import React from "react";
import { QnA } from "./data/QnAData";

function FAQ() {
  return (
    <section className="flex flex-col lg:flex-row gap-10 px-6 md:px-12 lg:px-34 py-12 md:py-20 bg-[#F3F6EF] items-center lg:items-start">
      <div className="relative w-full lg:w-1/2 aspect-square max-w-2xl overflow-hidden rounded-2xl shadow-sm">
        <Image
          src="/HairProducts.png"
          alt="Hair products"
          fill
          className="object-cover"
        />
      </div>

      <div className="w-full lg:w-1/2 flex flex-col">
        <div className="text-center lg:text-left mb-8">
          <p className="uppercase text-xs md:text-sm text-ternary tracking-widest mb-2 font-semibold">
            Answers to your most common questions
          </p>
          <h2 className="font-cormorant font-bold text-4xl md:text-5xl lg:text-6xl leading-tight text-[#1a1a1a]">
            Your Hair Oil Guide
          </h2>
        </div>

        <div className="flex flex-col w-full">
          {QnA.map((item, index) => (
            <div
              key={index}
              className="border-t border-black/10 py-5 last:border-b"
            >
              <div className="flex justify-between items-center gap-4">
                <h3 className="text-base md:text-lg font-medium text-[#1a1a1a]">
                  {item.que}
                </h3>
                <span className="text-xl text-gray-400 shrink-0">
                  {item.isOpen ? "—" : "+"}
                </span>
              </div>

              {item.isOpen && (
                <p className="text-gray-500 text-sm leading-relaxed mt-3 max-w-[95%]">
                  {item.ans}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FAQ;
