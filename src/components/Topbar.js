import React from "react";
import { MdOutlinePhoneInTalk } from "react-icons/md";
import { AiOutlineMail } from "react-icons/ai";

function Topbar() {
  return (

    <div className="bg-[#F3F6EF] px-6 md:px-18 py-1 text-[10px] font-poppins">
      <div className="flex justify-center md:justify-between">
        <p className="uppercase font-medium py-3 text-center md:text-left">
          Free shipping on all orders over $100 - Shop now
          <span className="normal-case font-bold underline ps-1">Shop now</span>
        </p>

        <div className="hidden md:flex items-center gap-5 tracking-tighter font-medium">
          <div className="flex items-center gap-2">
            <MdOutlinePhoneInTalk className="bg-[#425339] text-xl p-1 rounded-full text-white" />
            <p className="text-[#425339]">+91 000 00 0000</p>
          </div>
          <div className="flex items-center gap-2">
            <AiOutlineMail className="bg-[#425339] text-xl p-1 rounded-full text-white" />
            <p className="text-[#425339]">vyomkeshhaircare@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Topbar;
