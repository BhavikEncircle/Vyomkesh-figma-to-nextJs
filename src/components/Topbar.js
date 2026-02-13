import React from "react";
import { MdOutlinePhoneInTalk } from "react-icons/md";
import { AiOutlineMail } from "react-icons/ai";

function Topbar() {
  return (
    <div className="bg-[#F3F6EF] px-6 lg:px-24 py-2 text-[10px] md:text-sm font-poppins ">
      <div className="flex flex-col md:flex-row justify-center md:justify-between items-center gap-2">
        <p className="uppercase font-medium text-center md:text-left">
          Free shipping on all orders over $100
          <span className="normal-case font-bold underline ps-2 cursor-pointer">
            Shop now
          </span>
        </p>

        <div className="hidden lg:flex items-center gap-5 tracking-tighter font-medium">
          <div className="flex items-center gap-2">
            <div className="bg-secondary p-1 rounded-full text-white">
              <MdOutlinePhoneInTalk />
            </div>
            <p className="text-secondary">+91 000 00 0000</p>
          </div>
          <div className="flex items-center gap-2">
            <div className="bg-secondary p-1 rounded-full text-white">
              <AiOutlineMail />
            </div>
            <p className="text-secondary">vyomkeshhaircare@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Topbar;
