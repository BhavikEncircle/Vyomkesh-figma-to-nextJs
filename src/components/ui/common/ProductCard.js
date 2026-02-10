import Image from "next/image";
import React from "react";
import { GoHeart } from "react-icons/go";
import { FaArrowRightLong } from "react-icons/fa6";

function ProductCard({ product }) {
  return (
    <div className="w-full group cursor-pointer">
      {" "}
      <div className="relative aspect-[1.2/1] w-full overflow-hidden rounded-lg bg-[#F9F9F9]">
        <Image
          src={product.src}
          alt={product.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />

        <button className="absolute top-3 right-3 bg-white p-1.5 rounded-md shadow-sm hover:bg-gray-50 transition-colors z-10">
          <GoHeart className="text-lg text-gray-600" />
        </button>
      </div>
      <div className="mt-3 space-y-1">
        <h4 className="font-cormorant font-bold text-lg text-[#1a1a1a] leading-tight line-clamp-1">
          {product.title}
        </h4>

        <div className="flex items-center gap-2 font-poppins">
          <span className="text-sm font-bold text-[#1a1a1a]">
            ₹{product.price}
          </span>
          <span className="text-gray-400 line-through text-[10px]">
            ₹{product.oldPrice}
          </span>
          <span className="text-green-800 font-bold text-[10px]">12% off</span>
        </div>

        <button className="w-full bg-secondary text-white py-2 px-4 rounded-md font-poppins text-[11px] font-semibold flex items-center justify-center gap-2 mt-2 hover:bg-[#35422e] transition-colors">
          Add to cart <FaArrowRightLong className="text-sm" />
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
