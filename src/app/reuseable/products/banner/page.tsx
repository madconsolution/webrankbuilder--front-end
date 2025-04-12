'use client';

import Image from 'next/image';
import React from 'react';

export interface BannerProps {
  bgImage: string;  // e.g., '/images/bg.jpg'
  logo1: string;    // e.g., '/images/logo1.png'
  logo2: string;    // e.g., '/images/logo2.png'
  description?: string[];
}

const ProductBanner: React.FC<BannerProps> = ({ bgImage, logo1, logo2, description }) => {
  const lines = description ?? [
    'ATX MID TOWER COMPUTER',
    'CASE',
    'THAT HAVE GREAT DESIGN',
  ];

  return (
    <div className="relative w-full h-[787px] overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 w-full h-full bg-center bg-no-repeat bg-cover"
        style={{ backgroundImage: `url('${bgImage}')` }}
      />

      {/* Content Overlay */}
      <div className="absolute max-w-xl mx-auto inset-0 flex flex-col items-center  text-white mt-8 px-4 text-center">
        {/* Logos */}
        <div className="flex gap-2 mb-4 items-center">
          <Image src={logo1} alt="Product Logo 1" width={250} height={50} />
          <Image src={logo2} alt="Product Logo 2" width={100} height={70} />
        </div>

        {/* Description */}
        <div className="text-xl sm:text-2xl md:text-3xl font-medium tracking-widest leading-snug space-y-2">
          {lines.map((line, idx) => (
            <p key={idx}>{line}</p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductBanner;
