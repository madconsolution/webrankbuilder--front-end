'use client';

import Image from 'next/image';
import React from 'react';

const Hdmi4ResolutionCardLeftTop: React.FC = () => {
  return (
    <>
      {/* left top card start */}
      <div>
        <div className="grid grid-cols-1 grid-rows-3 gap-4 w-[660px] h-[796px] pt-20 text-center bg-[#000000] text-white border-1 border-[#CD2122] rounded-[120px]">
          <div className="space-y-4">
            <h5 className="hdmi4-card-text-red">Faster than ever Before</h5>
            <span className="hdmi4-card-text">
              Elevate your entertainment <br />
              with uninterrupted
            </span>
            <h5 className="hdmi4-card-text-red">18 GBPS</h5>
            <span className="hdmi4-card-text">Bandwidth</span>
          </div>

          {/* Flex image of first card */}
          <div className="grid grid-cols-2 grid-rows-1 gap-4 justify-center">
            {/* Flex-left progress */}
            <div>
              <div>
                <p>HDMI 1.4 10.2GBPS</p>
              </div>
              <div className="w-[166px] h-[20px] mx-auto rounded-[60px] border border-[#FFFFFF]">
                <div
                  className="bg-red-600 h-full rounded-[60px]"
                  style={{ width: '70%' }}
                ></div>
              </div>
            </div>

            {/* Flex-right progress */}
            <div>
              <div>
                <p>HDMI 2.0 18GBPS</p>
              </div>
              <div className="w-[166px] h-[20px] mx-auto rounded-[60px] border border-[#FFFFFF]">
                <div
                  className="bg-red-600 h-full rounded-[60px]"
                  style={{ width: '100%' }}
                ></div>
              </div>
            </div>
          </div>

          {/* Bottom image of first card */}
    <div className="flex justify-center  relative -mt-36 ">
            <div
              className="absolute inset-0 bg-cover bg-center w-[520px] h-[367px]"
              style={{
                backgroundImage: "url('/cables/4hdmi_cables/resolution/bg.png')",
              }}
            ></div>
            <Image
              src="/cables/4hdmi_cables/resolution/image.png"
              alt="HDMI Cable"
              width={300} 
              height={300} 
              className="object-contain w-[286px] h-[248px] relative z-10 mt-28 "
            />
          </div>
        </div>
        {/* left top card end */}
      </div>
    </>
  );
};

export default Hdmi4ResolutionCardLeftTop;