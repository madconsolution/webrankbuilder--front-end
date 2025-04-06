'use client';

import { FaFacebookF } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function IntroductionSection() {
  return (
    <div className="text-center p-6 bg-[#F5F5F5] min-h-[200px] flex flex-col items-center justify-center">
      <h3 className="font-bold text-lg md:text-xl">
        WELCOME TO <span className="text-[#CC0000]">TORTOX</span>
      </h3>
      <p className="w-11/12 md:w-3/5 mx-auto mt-2 text-sm md:text-base text-gray-700">
        TORTOX offers a complete range of products to equip gamers, enthusiasts, and e-sports athletes, including mechanical keyboards, precision gaming mice, wireless headsets, high-performance components that gamers use to build gaming PCs, and the TORTOX ONE fully-integrated gaming PC.
      </p>

      {/* Social Buttons */}
      <div className="flex space-x-1 mt-4">
        <button className="bg-white  text-[#CC0000] rounded-sm p-2 flex items-center justify-center hover:bg-[#FAFAFA] transition">
          ❤️ 91
        </button>
        <button className="bg-white  text-[#CC0000] rounded-sm p-2 flex items-center justify-center hover:bg-[#FAFAFA] transition">
          ⏺
        </button>
        <button className="bg-white   text-[#CC0000] rounded-sm p-2 flex items-center justify-center hover:bg-[#FAFAFA]  transition">
          <FaFacebookF className="text-lg" />
        </button>
        <button className="bg-white   text-[#CC0000] rounded-sm p-2 flex items-center justify-center hover:bg-[#FAFAFA]  transition">
          <MdEmail className="text-lg" />
        </button>
      </div>
    </div>
  );
}
