import Image from "next/image";
import React from "react";
import { MdOutlinePhoneInTalk } from "react-icons/md";
import { AiOutlineMail } from "react-icons/ai";

function Footer() {
  return (
    <section className="bg-[#F3F7ED] w-full flex flex-col relative overflow-hidden">
      <Image
        src="/FooterDes1.png"
        alt="Footer Design"
        width={350}
        height={350}
        className="absolute opacity-40 lg:opacity-100 hidden sm:block"
      />

      <Image
        src="/FooterDes2.png"
        alt="Footer Design"
        width={350}
        height={350}
        className="absolute bottom-0 right-0 opacity-40 lg:opacity-100 hidden sm:block"
      />

      <Image
        src="/FooterDes3.png"
        alt="Combos"
        width={400}
        height={400}
        className="absolute -bottom-5 -translate-x-18 object-cover hidden lg:block"
      />

      <div className="max-w-7xl px-6 pt-10 mx-auto w-full z-10">
        <div className="flex flex-col lg:flex-row py-12 justify-between items-start lg:items-center gap-8">
          <h1 className="font-cormorant font-bold text-4xl md:text-6xl">
            Get 25% Discount Now
          </h1>

          <div className="relative w-full lg:w-auto">
            <input
              type="text"
              className="border-b bg-transparent border-gray-400 text-gray-500 text-xl w-full lg:w-[450px] pb-2 outline-none"
              placeholder="Your email"
            />
            <button className="absolute right-0 bottom-2 font-bold uppercase text-lg cursor-pointer">
              Subscribe →
            </button>
          </div>
        </div>

        <hr className="py-8 text-gray-300" />

        <div className="flex flex-col lg:flex-row justify-between gap-12">
          <div className="flex flex-col gap-5">
            <h4 className="font-cormorant font-bold text-2xl">Get In Touch</h4>
            <p className="max-w-[300px]">
              50 Porana Place, West Casuarinas, Western Australia, Australia.
            </p>

            <div className="flex flex-col sm:flex-row gap-5">
              <div className="flex items-center gap-3 cursor-pointer">
                <div className="bg-secondary p-3 rounded-full">
                  <MdOutlinePhoneInTalk className="text-xl text-white" />
                </div>
                <div className="text-secondary">
                  <p className="font-cormorant font-bold">Call Us</p>
                  <p>000-123-456789</p>
                </div>
              </div>

              <div className="flex items-center gap-3 cursor-pointer">
                <div className="bg-secondary p-3 rounded-full">
                  <AiOutlineMail className="text-xl text-white" />
                </div>
                <div className="text-secondary">
                  <p className="font-cormorant font-bold">Email Us</p>
                  <p>info@example.com</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-between w-full lg:w-[400px] pb-10">
            <div className="flex flex-col gap-5">
              <h4 className="font-cormorant text-2xl font-bold">Information</h4>
              <ul className="flex flex-col gap-2 cursor-pointer">
                <li>About us</li>
                <li>Privacy Policy</li>
                <li>Return Policy</li>
                <li>Shipping Policy</li>
                <li>Terms & Conditions</li>
              </ul>
            </div>

            <div className="flex flex-col gap-5">
              <h4 className="font-cormorant text-2xl font-bold">Quick Links</h4>
              <ul className="flex flex-col gap-2 cursor-pointer">
                <li>My Account</li>
                <li>My Cart</li>
                <li>Size Chart</li>
                <li>Wishlist</li>
                <li>Gift Card</li>
              </ul>
            </div>
          </div>
        </div>

        <hr className="pb-4 border-gray-300" />

        <div className="text-center pb-8">
          <p className="text-base md:text-lg">
            &copy; 2025 Vyomkesh Hair Care.com All rights reserved.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Footer;
