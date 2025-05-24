'use client';

import Image from 'next/image';
import React from 'react';

const Cable5ResolutionCardRight: React.FC = () => {
  return (
    <>
      {/* left top card start */}
      <div>
        <div className="grid grid-cols-1  gap-3 w-[660px] h-[796px] text-center bg-[#000000] text-white border-1 border-[#CD2122] rounded-[120px]">
    

       

        <div className='pt-28'>
       <div className="flex justify-around items-center">
  {/* Left Progress */}
  <div className="relative w-[154px] h-[154px] rotate-90">
    <Image
      src="/cables/48dp_cables/resolution/left-progress.png"
      alt="HDMI Cable Left"
      width={154}
      height={154}
      className="object-contain w-full h-full "
    />
    <span className="absolute inset-0 flex -rotate-90 items-center justify-center font-[400] text-[16px] leading-[100%] tracking-[0%] text-center align-middle font-['Open_Sans']">
    10.8 GBPS
    </span>
  </div>

  {/* Right Progress */}
  <div className="relative w-[154px] h-[154px]">
    <Image
      src="/cables/48dp_cables/resolution/right-progress.png"
      alt="HDMI Cable Right"
      width={154}
      height={154}
      className="object-contain w-full h-full"
    />
 <span className="absolute inset-0 flex items-center justify-center font-[400] text-[16px] leading-[100%] tracking-[0%] text-center align-middle font-['Open_Sans']">
     Highly
Durable
    </span>
  </div>
</div>
          {/* Middle text */} 
          <div className="text-[#CD2122] mt-[13%] font-[700] text-[34px]  tracking-[0%] text-center align-middle font-['Open_Sans']">
            <h5>Stream High Quality Video <br /> <span className='text-[#ffffff]'>Without any picture delay</span>
</h5>
          </div>

            {/* bottom cable with lines */}
            <div className='-mt-[4%]'>
         
                  {/* bottom cable is here */}
              <div>
                             <Image
                src="/cables/4minidp_hdmicables/resolution/right-cable.png"
                alt="HDMI Cable Right"
                width={500}
                height={500}
                className=" w-[600px] h-[600px] mx-auto "
              />
              </div>
            </div>
        </div>
       


        </div>

      </div>
    </>
  );
};

export default Cable5ResolutionCardRight;