'use client';

import Image from 'next/image';
import React from 'react';

const Hdmi8ResolutionCardRightTop: React.FC = () => {
  return (
    <>
      {/* left top card start */}
      <div>
        <div className="grid grid-cols-1 grid-rows-3 gap-4 w-[660px] h-[796px] pt-28 text-center bg-[#000000] text-white border-1 border-[#CD2122] rounded-[120px]">
      <div className="flex items-center">
  {/* Left Text Side */}
  <div className="w-7/12 ml-4">
    <div className="whitespace-nowrap">
      <h5 className="inline-block hdmi4-card-text-red ">Get Ready For 3D Magic</h5>
      <h5 className="-ml-[22%] hdmi4-card-text mt-2">Supports 3D Games</h5>
    </div>
  </div>

  {/* Right Image Side */}
  <div className="w-1/2 -ml-5">
    <Image
      src="/cables/8hdmi_cables/resolution/right-top-image.png"
      alt="HDMI Cable"
      width={303}
      height={231}
      className="w-[303px] h-[231px]"
    />
  </div>
</div>


      
<div className="flex w-[90%] mt-12 mx-auto items-center gap-x-6">
  {/* Right Image Side */}
  <div className="w-1/2 relative  inset-0 ">
    {/* Main image */}
    <Image
      src="/cables/8hdmi_cables/resolution/right-bottom-image.png"
      alt="Main HDMI Display"
      width={303}
      height={231}
      className="w-[303px] h-[231px]"
    />

    {/* Positioned cable images */}
    <div className="absolute -mt-10  flex gap-x-2 ">
      <Image
        src="/cables/8hdmi_cables/resolution/right-cable-2.png"
        alt="HDMI Cable 2"
        width={220}
        height={220}
        className="w-[222px] h-[222px] "
      />
      <Image
        src="/cables/8hdmi_cables/resolution/right-cable-1.png"
        alt="HDMI Cable 1"
        width={220}
        height={220}
        className="w-[222px] h-[222px] -rotate-[10deg] -ml-9 -mt-10"
      />
    </div>
  </div>

  {/* Left Text Side */}
  <div className="w-7/12">
    <h5 className="hdmi4-card-text-red">Enriched with true colors</h5>
    <h5 className="hdmi4-card-text mt-2">
      Experience true colors with Dynamic HDR
    </h5>
  </div>
</div>



          {/* Bottom image of first card */}

        </div>
        
        {/* left top card end */}
      </div>
    </>
  );
};

export default Hdmi8ResolutionCardRightTop;