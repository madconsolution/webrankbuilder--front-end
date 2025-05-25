
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
      <div className="absolute inset-0 flex flex-col items-center   text-white p-4">
        {/* Logos */}
        <div className="flex gap-2   flex-wrap justify-center ">
          <Image
            src={logo1}
            alt="Product Logo 1"
            width={250}
            height={50}
            className=" "
          />
          <Image
            src={logo2}
            alt="Product Logo 2"
            width={235}
            height={70}
            className="[235px] h-[70px]"
          />
        </div>

        {/* Text Description */}
        <div>
          {lines.map((line, idx) => (
            <h4
              key={idx}
              className="font-[400] text-[34px] leading-[40px] tracking-[0%] text-center align-middle "
            >
              {line}
            </h4>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductBanner;
