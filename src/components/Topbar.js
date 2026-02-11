import React from "react";
import { MdOutlinePhoneInTalk } from "react-icons/md";
import { AiOutlineMail } from "react-icons/ai";

function Topbar() {
  return (
    <div className="bg-[#F3F6EF] px-6 md:px-30 py-3 text-sm font-poppins">
      <div className="flex justify-center md:justify-between">
        <p className="uppercase font-medium py-3 text-center md:text-left">
          Free shipping on all orders over $100 - Shop now
          <span className="normal-case font-bold underline ps-3">Shop now</span>
        </p>

        <div className="hidden md:flex items-center gap-5 tracking-tighter font-medium">
          <div className="flex items-center gap-2">
            <div className="bg-secondary p-1 rounded-full">
              <MdOutlinePhoneInTalk className=" text-xl text-white" />
            </div>
            <p className="text-secondary">+91 000 00 0000</p>
          </div>
          <div className="flex items-center gap-2">
            <div className="bg-secondary p-1 rounded-full">
              <AiOutlineMail className=" text-xl text-white" />
            </div>

            <p className="text-secondary">vyomkeshhaircare@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Topbar;
