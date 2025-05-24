'use client';

import Image from 'next/image';
import React from 'react';

const Cable3ResolutionCardRight: React.FC = () => {
  return (
    <>
      {/* left top card start */}
      <div>
        <div className="grid grid-cols-1  gap-3 w-[660px] h-[796px] text-center bg-[#000000] text-white border-1 border-[#CD2122] rounded-[120px]">
    

       
<>
      <Image
      src="/cables/48dp_cables/resolution/right-bg.png"
      alt="HDMI Cable Left"
      width={600}
      height={270}
      className="-ml-[4%] w-auto h-auto"
    />
</>
<div>
      <Image
      src="/cables/48dp_cables/resolution/right-cable.png"
      alt="HDMI Cable Left"
      width={500}
      height={510}
      className="object-contain w-[500px] h-[510px] -mt-[44%] ml-[32%]"
    />
</div>
       
       <div className='-mt-[30%]'>
        <h5 className="text-[#CD2122] font-[700] text-[34px] leading-[100%] tracking-[0%] text-center align-middle font-['Open_Sans']">8k Ultra HD Resolution <br /> <span className="text-[#FFFFFF] font-[400] text-[25px] leading-[100%] tracking-[0%] text-center align-middle font-['Open_Sans']">Supports 8k@60Hz for high quality visuals</span></h5>
       </div>

        </div>

      </div>
    </>
  );
};

export default Cable3ResolutionCardRight;