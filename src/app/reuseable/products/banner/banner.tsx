
import Image from 'next/image';
import React from 'react';

export interface BannerProps {
  bgImage: string;
  logo1: string;
  logo2: string;
  description?: string[];
}

const ProductBanner: React.FC<BannerProps> = ({
  bgImage,
  logo1,
  logo2,
  description,
}) => {
  const lines = description ?? [
    'ATX MID TOWER COMPUTER',
    'CASE',
    'THAT HAVE GREAT DESIGN',
  ];

  return (
    <div className="relative w-full mx-auto h-[500px] md:h-[787px] overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 w-full h-full bg-center bg-no-repeat bg-cover"
        style={{ backgroundImage: `url('${bgImage}')` }}
      />

      {/* Content */}
      <div className="absolute inset-0 flex flex-col items-center  text-white p-4">
        {/* Logos */}
        <div className="flex gap-2 items-center mb-6 flex-wrap justify-center -ml-[10%]">
          <Image
            src={logo1}
            alt="Product Logo 1"
            width={160}
            height={32}
            className="w-[120px] md:w-[250px] h-auto"
          />
          <Image
            src={logo2}
            alt="Product Logo 2"
            width={80}
            height={50}
            className="w-[70px] md:w-[100px] h-auto"
          />
        </div>

        {/* Text Description */}
        <div className="space-y-2 md:space-y-4 text-center">
          {lines.map((line, idx) => (
            <h1
              key={idx}
              className="text-md md:text-4xl  uppercase tracking-wide"
            >
              {line}
            </h1>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductBanner;
