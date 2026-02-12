import React from "react";
import { SocialData } from "./data/SocialData";
import Image from "next/image";
import { BsInstagram } from "react-icons/bs";

function Socials() {
  return (
    <section className="w-full bg-white flex flex-col">
      <div className="flex flex-col justify-center items-center py-10 px-6 tracking-tight">
        <p className="uppercase text-sm md:text-base text-gray-500 tracking-widest text-center">
          Instagram
        </p>
        <h2 className="font-cormorant font-bold text-4xl lg:text-6xl text-center text-[#1a1a1a] mt-2 max-w-4xl">
          Follow us on Instagram
        </h2>
      </div>

      <div className="w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 px-2">
        {SocialData.map((social) => (
          <div
            key={social.id}
            className="group relative aspect-square overflow-hidden rounded-xl cursor-pointer"
          >
            <Image
              src={social.src}
              alt="Social Image"
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />

            <div className="absolute inset-0 bg-black/40 opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex items-center justify-center">
              <div className="bg-white p-2 md:p-3 rounded-full scale-50 opacity-0 transition-all duration-300 group-hover:scale-100 group-hover:opacity-100">
                <BsInstagram className="w-5 h-5 md:w-8 md:h-8 text-black" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Socials;
