'use client';

import Image from 'next/image';
import React from 'react';

const Hdmi8ResolutionCardLeftTop: React.FC = () => {
  return (
    <>
      {/* left top card start */}
      <div>
        <div className="grid grid-cols-1 grid-rows-3 gap-4 w-[660px] h-[796px] pt-28 text-center bg-[#000000] text-white border-1 border-[#CD2122] rounded-[120px]">
          <div className="space-y-4">
            <h5 className="hdmi4-card-text-red">Delivering Breathtaking</h5>
            <p>
              8k Visuals @48GBPS 

            </p>
     
            <p className='text-[#FFFFFF99] w-[63%] mx-auto'>Supports 8k@60Hz, 4k@120Hz, 1080k@120Hz for
a seamless visual experience</p>
          </div>

          {/* Flex image of first card */}
          <div className="grid grid-cols-2 grid-rows-1 gap-4 justify-center">
            {/* Flex-left progress */}
            <div>
              <div>
                <p>HDMI 2.0</p>
              </div>
              <div className="w-[166px] h-[20px] mx-auto rounded-[60px] border border-[#FFFFFF]">
                <div
                  className="bg-[#CD2122] h-full rounded-[60px]"
                  style={{ width: '70%' }}
                ></div>
                     <div>
                <span className='text-[#CD2122] text-sm'>18 GBPS</span>
              </div>
              </div>
            </div>

            {/* Flex-right progress */}
            <div>
              <div>
                <p>HDMI 2.1</p>
              </div>
              <div className="w-[166px] h-[20px] mx-auto rounded-[60px] border border-[#FFFFFF]">
                <div
                  className="bg-[#CD2122] h-full rounded-[60px]"
                  style={{ width: '100%' }}
                ></div>
                  <div>
                <span className='text-[#CD2122] text-sm'>48 GBPS</span>
              </div>
              </div>
            </div>
          </div>

          {/* Bottom image of first card */}
    <div className="flex justify-center  relative -mt-[16%]  ">
            <div
              className="absolute inset-0 bg-cover bg-center mx-auto w-[350px] h-[322px]"
              style={{
                backgroundImage: "url('/cables/8hdmi_cables/resolution/bg.png')",
              }}
            ></div>
          <div className='flex'>
            <>
                  <Image
              src="/cables/8hdmi_cables/resolution/front-cable-l.png"
              alt="HDMI Cable"
              width={222} 
              height={222} 
              className=" h-[222px] relative z-10 mt-[39%] -mx-12  "
            />
            </>
            <>
                  <Image
              src="/cables/8hdmi_cables/resolution/front-cable-r.png"
              alt="HDMI Cable"
              width={222} 
              height={222} 
              className=" h-[222px] relative z-10 mt-[39%] -mx-12 "
            />
            </>
          </div>
          </div>
        </div>
        {/* left top card end */}
      </div>
    </>
  );
};

export default Hdmi8ResolutionCardLeftTop;