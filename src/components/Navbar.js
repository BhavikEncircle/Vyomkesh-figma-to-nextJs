"use client";
import Image from "next/image";
import React from "react";
import { IoIosArrowDown } from "react-icons/io";
import { CiSearch } from "react-icons/ci";
import { RiShoppingBagLine } from "react-icons/ri";
import { AiOutlineUser } from "react-icons/ai";
import { GoHeart } from "react-icons/go";
import { useState } from "react";
import { HiMenuAlt3, HiX } from "react-icons/hi";

export default Navbar;
function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="relative bg-white z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4 md:py-6 font-poppins">
        <div className="w-40 md:w-56">
          <Image
            src="/Logo.png"
            alt="logo"
            width={250}
            height={100}
            className="object-contain"
          />
        </div>

        <ul className="hidden lg:flex gap-8 tracking-tight font-medium text-lg">
          <li className="hover:text-secondary cursor-pointer">Home</li>
          <li className="flex items-center gap-2 hover:text-secondary cursor-pointer">
            Shop <IoIosArrowDown />
          </li>
          <li className="hover:text-secondary cursor-pointer">Combos</li>
          <li className="hover:text-secondary cursor-pointer">Contact us</li>
        </ul>

        <div className="flex gap-2 items-center">
          <div className="bg-secondary p-2 rounded-full text-white cursor-pointer hover:scale-110 transition">
            <CiSearch />
          </div>
          <div className="bg-secondary p-2 rounded-full text-white cursor-pointer hover:scale-110 transition">
            <RiShoppingBagLine />
          </div>
          <div className="hidden sm:block bg-secondary p-2 rounded-full text-white cursor-pointer hover:scale-110 transition">
            <AiOutlineUser />
          </div>

          <button
            className="lg:hidden text-3xl text-secondary ml-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <HiX /> : <HiMenuAlt3 />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-white p-8 lg:hidden shadow-2xl border-t animate-in fade-in slide-in-from-top-4">
          <ul className="flex flex-col gap-6 font-medium text-xl text-secondary">
            <li onClick={() => setIsOpen(false)}>Home</li>
            <li
              className="flex justify-between items-center"
              onClick={() => setIsOpen(false)}
            >
              Shop <IoIosArrowDown />
            </li>
            <li>Combos</li>
            <li>Contact us</li>
          </ul>
        </div>
      )}
    </nav>
  );
}
