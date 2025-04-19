'use client';

import Image from 'next/image';
import React from 'react';

export interface BannerProps {
  bgImage: string;  
  logo1: string;
  logo2: string;    
  description?: string[];
}

const ProductBanner: React.FC<BannerProps> = ({ bgImage, logo1, logo2, description }) => {
  const lines = description ?? [
    'ATX MID TOWER COMPUTER',
    'CASE',
    'THAT HAVE GREAT DESIGN',
  ];

  return (
    <div className="relative w-full md:w-[1440px] mx-auto h-[787px] overflow-hidden">
      <div
        className="absolute inset-0 w-full h-full bg-center bg-no-repeat bg-cover"
        style={{ backgroundImage: `url('${bgImage}')` }}
      />
      <div className="absolute max-w-xl mx-auto inset-0 flex flex-col items-center text-white mt-8 px-4 ">
        <div className="flex gap-2  items-center md:-ml-36 my-2">
          <Image src={logo1} alt="Product Logo 1" width={250} height={50} />
          <Image src={logo2} alt="Product Logo 2" width={100} height={70} />
        </div>
        <div className=" space-y-4">
          {lines.map((line, idx) => (
            <h2 key={idx}>{line}</h2>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductBanner;
