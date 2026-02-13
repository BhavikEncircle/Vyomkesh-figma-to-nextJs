import Image from "next/image";
import React from "react";
import { GoHeart } from "react-icons/go";
import { FaArrowRightLong } from "react-icons/fa6";

function ProductCard({ product }) {
  return (
    <section className="w-full group cursor-pointer">
      <div className="relative aspect-square w-full overflow-hidden rounded-md bg-[#F9F9F9] group ">
        <Image
          src={product.src}
          alt={product.title}
          fill
          className="object-cover group-hover:opacity-0 transition-opacity duration-300"
        />
        <Image
          src={product.hoverSrc}
          alt={product.title}
          fill
          className="object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        />

        <button className="absolute top-4 right-4 bg-white p-2 rounded-lg shadow-md cursor-pointer hover:bg-gray-50 transition-colors z-10">
          <GoHeart className="text-xl text-gray-700 cursor-pointer" />
        </button>
      </div>

      <div className="mt-4 space-y-2">
        <h4 className="font-cormorant font-extrabold text-3xl text-[#1a1a1a] leading-tight line-clamp-2">
          {product.title}
        </h4>

        <div className="flex items-center gap-2 font-medium+">
          <span className="text-lg  text-[#1a1a1a]">₹{product.price}</span>
          <span className="text-gray-400 line-through text-lg">
            ₹{product.oldPrice}
          </span>
          <span className="text-[#398211] font-semibold text-lg">
            {product.offer}
          </span>
        </div>

        <button className="w-full bg-[#45543D] text-white py-3 px-6 rounded-lg font-poppins text-lg font-bold flex items-center justify-center gap-3 mt-3 cursor-pointer hover:bg-[#35422e] transition-all duration-300">
          Add to cart <FaArrowRightLong className="text-sm" />
        </button>
      </div>
    </section>
  );
}

export default ProductCard;
