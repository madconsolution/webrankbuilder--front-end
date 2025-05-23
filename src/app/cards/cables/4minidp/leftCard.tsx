'use client';

import Image from 'next/image';
import React from 'react';

const Minidp4ResolutionCardLeft: React.FC = () => {
  return (
    <>
      {/* left top card start */}
      <div>
        <div className="grid grid-cols-1  gap-3 w-[660px] h-[796px] text-center bg-[#000000] text-white border-1 border-[#CD2122] rounded-[120px]">
    

       

        <div className='pt-28'>
       <div className="flex justify-around items-center">
  {/* Left Progress */}
  <div className="relative w-[154px] h-[154px]">
    <Image
      src="/cables/48dp_cables/resolution/left-progress.png"
      alt="HDMI Cable Left"
      width={154}
      height={154}
      className="object-contain w-full h-full"
    />
    <span className="absolute inset-0 flex items-center justify-center font-[400] text-[16px] leading-[100%] tracking-[0%] text-center align-middle font-['Open_Sans']">
      32.4 GBPS
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
      32.4 GBPS
    </span>
  </div>
</div>


            {/* bottom cable with lines */}
            <div className='mt-[11%]'>
               <div className='-mb-[33%]'>
                 <div>
                   <span className="font-[400] text-[16px] leading-[100%] tracking-[0%] text-center align-middle font-['Open_Sans']">24K Gold Plating</span>
                </div>
                {/* line flex positon is here */}
                <div className='flex justify-around mx-32'>
                    <div>
                             <Image
                src="/cables/48dp_cables/resolution/Line-1.png"
                alt="HDMI Cable Right"
                width={53}
                height={53}
                className=" bg-cover w-[53px] h-[53px] mx-auto "
              />
              </div>
              <div>
                             <Image
                src="/cables/48dp_cables/resolution/Line-2.png"
                alt="HDMI Cable Right"
                width={28}
                height={28}
                className=" bg-cover w-[28px] h-[28px] mx-auto "
              />
              </div>
                </div>
               </div>
                  {/* bottom cable is here */}
              <div>
                             <Image
                src="/cables/48dp_cables/resolution/left-cable.png"
                alt="HDMI Cable Right"
                width={600}
                height={600}
                className=" bg-cover w-[600px] h-[600px] mx-auto "
              />
              </div>
            </div>
        </div>
       


        </div>

      </div>
    </>
  );
};

export default Minidp4ResolutionCardLeft;