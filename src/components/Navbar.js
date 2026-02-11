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

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="relative bg-white z-50">
      <div className="flex justify-between items-center px-6 md:px-34 py-6  font-poppins">
        <div className="logo">
          <Image src="/Logo.png" alt="logo" width={250} height={250} />
        </div>

        <div className="links hidden md:block">
          <ul className="flex gap-8 tracking-tight font-medium text-lg">
            <li>Home</li>
            <li className="flex items-center gap-2">
              Shop
              <IoIosArrowDown />
            </li>
            <li>Combos</li>
            <li>Contact us</li>
          </ul>
        </div>

        <div className="icons flex gap-2 items-center">
          <div className="bg-secondary p-2  text-lg rounded-full text-white cursor-pointer">
            <CiSearch />
          </div>

          <div className="bg-secondary p-2  text-lg rounded-full text-white cursor-pointer">
            <RiShoppingBagLine />
          </div>

          <div className="hidden sm:block bg-secondary p-2  text-lg rounded-full text-white cursor-pointer">
            <AiOutlineUser />
          </div>

          <div className="hidden sm:block bg-secondary p-2  text-lg rounded-full text-white cursor-pointer">
            <GoHeart />
          </div>

          <button
            className="md:hidden text-2xl text-secondary ml-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <HiX /> : <HiMenuAlt3 />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-white border-b border-gray-200 p-8 md:hidden shadow-xl">
          <ul className="flex flex-col gap-6 font-medium text-lg text-secondary">
            <li onClick={() => setIsOpen(false)}>Home</li>
            <li
              className="flex justify-between items-center"
              onClick={() => setIsOpen(false)}
            >
              Shop <IoIosArrowDown />
            </li>
            <li onClick={() => setIsOpen(false)}>Combos</li>
            <li onClick={() => setIsOpen(false)}>Contact us</li>
          </ul>
        </div>
      )}
    </section>
  );
}
export default Navbar;
