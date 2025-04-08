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
      <div className="absolute inset-0  flex items-center mt-8 flex-col text-white">
        {/* Logo Section */}
        <div className="flex  gap-2 -ml-62 ">
          <>
            <Image src={logo1} alt="Logo 1" width={100} height={100}  className=' products_banner_left_logo' />
          </>
          <>
            <Image src={logo2} alt="Logo 2" width={100} height={100} className="products_banner_right_logo "  />
          </>
        </div>

        {/* Description Section */}
        <h3 className="text-lg font-semibold max-w-lg">{description}</h3>
      </div>

  
    </div>
  );
};

export default ProductBanner;
