import Image from "next/image";
import React from "react";
import FiveStars from "./ui/common/FiveStars";
import { Features } from "./data/Features";
import { RxLightningBolt } from "react-icons/rx";

function BestSeller() {
  return (
    <section className="w-full bg-[#F3F6EF] py-10 md:py-20 px-4 md:px-10 lg:px-34">
      <div className="flex flex-col justify-center items-center text-center mb-10">
        <p className="uppercase text-sm md:text-md text-[#93B178] tracking-widest">
          Our highlight
        </p>
        <h2 className="font-cormorant font-bold text-4xl md:text-6xl text-[#1a1a1a] max-w-2xl">
          Best-seller last week
        </h2>
      </div>

      <div className="flex flex-wrap justify-center overflow-hidden rounded-2xl shadow-sm">
        <div className="w-full md:w-1/3 h-[400px] md:h-[600px] relative">
          <Image
            src="/Hairmodel.png"
            alt="Hair Model"
            fill
            className="object-cover"
          />
        </div>

        <div className="w-full md:w-1/3 bg-white p-8 flex flex-col justify-center items-center relative min-h-[400px]">
          <div className="absolute top-5 left-5 flex items-center bg-black px-3 py-1 text-white rounded-full text-xs">
            <RxLightningBolt className="mr-1" />
            <span>Best Seller</span>
          </div>

          <div className="relative w-48 h-64 mb-4">
            <Image
              src="/ConditionerBottle.png"
              alt="Conditioner"
              fill
              className="object-contain"
            />
          </div>

          <h3 className="font-cormorant font-bold text-2xl md:text-3xl text-center mb-4 px-4">
            Sesame & Brahmi Nourishing Shampoo
          </h3>

          <div className="flex items-center gap-3 mb-2">
            <span className="text-xl font-bold text-[#1a1a1a]">₹225</span>
            <span className="text-gray-400 line-through">₹250</span>
            <span className="text-[#398211] font-medium">10% off</span>
          </div>

          <div className="flex items-center gap-1">
            <FiveStars />
            <span className="text-sm text-gray-600">(5)</span>
          </div>
        </div>

        <div className="w-full md:w-1/3 bg-[#3D4A35] text-white p-8 flex flex-col justify-center">
          {Features.map((feat, index) => (
            <React.Fragment key={feat.id}>
              <div className="flex gap-4 items-start">
                <div className="shrink-0 mt-1">
                  <Image
                    src={feat.src}
                    alt={feat.title}
                    width={32}
                    height={32}
                    className="brightness-0 invert"
                  />
                </div>
                <div>
                  <h4 className="font-cormorant text-xl font-bold leading-tight">
                    {feat.title}
                  </h4>
                  <p className="text-sm text-gray-300 mt-1">{feat.content}</p>
                </div>
              </div>
              {index !== Features.length - 1 && (
                <hr className="my-6 border-white/10" />
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}

export default BestSeller;
