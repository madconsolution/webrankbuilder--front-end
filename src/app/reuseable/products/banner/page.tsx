'use client';

import Image from 'next/image';
import React from 'react';

interface BannerProps {
  bgImage: string;
  logo1: string;
  logo2: string;
  description: string;
}

const ProductBanner: React.FC<BannerProps> = ({ bgImage, logo1, logo2, description }) => {
  return (
    <div className="relative w-full h-[787px] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-[787px]  mx-auto bg-center bg-no-repeat" style={{ backgroundImage: `url(${bgImage})` }}></div>
      
      {/* Content Section */}
      <div className="absolute inset-0  flex items-center mt-8 flex-col text-white ">
        {/* Logo Section */}
        <div className="flex  gap-2  mb-2 items-center">
          <>
            <Image src={logo1} alt="Logo 1" width={250} height={50}  className=' object-contain' />
          </>
          <>
            <Image src={logo2} alt="Logo 2" width={235} height={70} className=" "  />
          </>
        </div>

       
        {/* Description Section */}
        <div className="leading-snug text-xl sm:text-2xl md:text-3xl font-medium tracking-widest space-y-2 text-center">
          <p>ATX MID TOWER COMPUTER</p>
          <p>CASE</p>
          <p>THAT HAVE GREAT DESIGN</p>
        </div>
      </div>

  
    </div>
  );
};

export default ProductBanner;
