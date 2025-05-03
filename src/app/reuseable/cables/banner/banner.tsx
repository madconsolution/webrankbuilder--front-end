'use client';

import Image from 'next/image';
import React from 'react';

 interface BannerProps {
  bgImage: string;  
  logo1: string;
  logo2: string;    
  description?: string[];
}

const CablesBanner: React.FC<BannerProps> = ({ bgImage, logo1,  description }) => {
  const lines = description ?? [
    'ATX MID TOWER COMPUTER',
    'CASE',
    'THAT HAVE GREAT DESIGN',
  ];

  return (
    <div className="relative w-full md:w-[1440px] mx-auto h-[787px]  overflow-hidden">
      <div
        className="absolute inset-0 w-full h-full bg-center   bg-no-repeat bg-cover"
        style={{ backgroundImage: `url('${bgImage}')` }}
      />
      <div className="absolute max-w-xl  mx-auto inset-0 flex flex-col items-center justify-center text-white mt-8 px-4 text-center">
      
          <Image src={logo1} alt="Product Logo 1" width={250} height={50} className='mb-3' />

        <div className="text-xl sm:text-2xl md:text-3xl font-medium tracking-widest leading-snug space-y-3">
          {lines.map((line, idx) => (
            <h5 key={idx}>{line}</h5>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CablesBanner;
