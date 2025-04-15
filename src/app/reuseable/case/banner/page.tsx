'use client';

import Image from 'next/image';
import React from 'react';

export interface BannerProps {
  bgImage: string;  
  logo1: string;
  logo2: string;    
  description?: string[];
}

const CaseBanner: React.FC<BannerProps> = ({ bgImage, logo1, logo2, description }) => {
  const lines = description ?? [
    'Engineered for Durability',
  
    ' Stuffed with Features',
  ];

  return (
    <div className="relative w-full md:w-[1440px] mx-auto h-[787px] overflow-hidden">
      <div
        className="absolute inset-0 w-full h-full bg-center bg-no-repeat bg-cover"
        style={{ backgroundImage: `url('${bgImage}')` }}
      />
      <div className="absolute max-w-xl mx-auto inset-0 flex flex-col items-center text-white mt-8 px-4 text-center">
        <div className="flex gap-2 mb-4">
          <Image src={logo1} alt="Product Logo 1" width={250} height={50} />
          <Image src={logo2} alt="Product Logo 2" width={100} height={70} />
        </div>
        <div className="text-xl sm:text-2xl md:text-3xl font-medium tracking-widest leading-snug space-y-2">
          {lines.map((line, idx) => (
            <p key={idx}>{line}</p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CaseBanner;
