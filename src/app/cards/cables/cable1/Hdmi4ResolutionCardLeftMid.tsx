'use client';

import Image from 'next/image';
import React from 'react';

const Cable1ResolutionCardLeftMid: React.FC = () => {
  return (
    <>
      {/* left top card start */}
      <div>
        <div className="grid grid-cols-1 grid-rows-3 gap-4 w-[660px] h-[796px] pt-20 text-center bg-[#000000] text-white border-1 border-[#CD2122] rounded-[120px]">
         <div className="flex justify-center relative">
            <div
              className="absolute inset-0 bg-cover bg-center w-[520px] h-[414px] mx-auto z-5"
              style={{
                backgroundImage: "url('/cables/4hdmi_cables/resolution/bg-left-mid.png')",
              }}
            ></div>
            <div className="flex gap-40">
              <Image
                src="/cables/4hdmi_cables/resolution/left-mid-cable-left.png"
                alt="HDMI Cable Left"
                width={300}
                height={300}
                className="object-contain w-[286px] h-[248px] relative z-0 mt-28"
              />
              <Image
                src="/cables/4hdmi_cables/resolution/left-mid-cable-right.png"
                alt="HDMI Cable Right"
                width={300}
                height={300}
                className="object-contain w-[286px] h-[248px] relative z-0 mt-28"
              />
            </div>
          </div>

    

          {/* Bottom  of mid card */}
                           <div className="space-y-3 mt-[35%]">
            <h5 className="hdmi4-card-text">Immerse yourself in a stunning </h5>
            <h6 className="hdmi4-card-text-red">
            3D Experience
            </h6>
             <p>
                Enjoy 3D games and Movies <br />
with tortox HDMI cables
             </p>
          </div>
        </div>
        {/* left top card end */}
      </div>
    </>
  );
};

export default Cable1ResolutionCardLeftMid;