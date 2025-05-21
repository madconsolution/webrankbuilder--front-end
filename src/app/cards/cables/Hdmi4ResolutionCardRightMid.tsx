'use client';

import Image from 'next/image';
import React from 'react';

const Hdmi4ResolutionCardRightMid: React.FC = () => {
  return (
    <>
      {/* left top card start */}
      <div>
        <div className="grid grid-cols-1 grid-rows-3 gap-4 w-[660px] h-[796px] text-center bg-[#000000] text-white border-1 border-[#CD2122] rounded-[120px]">
    
<div className="relative w-[477px] h-[270px] mx-auto mt-28">
  {/* Background Image */}
  <div
    className="absolute inset-0 bg-cover bg-center z-0"
    style={{
      backgroundImage: "url('/cables/4hdmi_cables/resolution/monitor.png')",
    }}
  />

  {/* Top Left Image */}
  <Image
    src="/cables/4hdmi_cables/resolution/Group-l1.png"
    alt="Top Left"
    width={100}
    height={100}
    className="absolute -top-10 -left-10 object-contain z-10"
  />

  {/* Top Right Image */}
  <Image
    src="/cables/4hdmi_cables/resolution/Group-r1.png"
    alt="Top Right"
    width={100}
    height={100}
    className="absolute -top-10 -right-10 object-contain z-10"
  />

  {/* Bottom Left Image */}
  <Image
    src="/cables/4hdmi_cables/resolution/Group-l2.png"
    alt="Bottom Left"
    width={100}
    height={100}
    className="absolute -bottom-10 -left-10 object-contain z-10"
  />

  {/* Bottom Right Image */}
  <Image
    src="/cables/4hdmi_cables/resolution/Group-r2.png"
    alt="Bottom Right"
    width={100}
    height={100}
    className="absolute -bottom-10 -right-10 object-contain z-10"
  />
</div>



    

          {/* Bottom  of mid card */}
                           <div className="space-y-3 mt-[33%]">
            <h5 className="hdmi4-card-text">Immerse in rich, dynamic sound </h5>
         
          </div>

          {/* 
          Bottom */}
         <div>
                  <div className="flex gap-10 justify-center">
              <Image
                src="/cables/4hdmi_cables/resolution/image-left.png"
                alt="HDMI Cable Left"
                width={163}
                height={70}
                className="object-contain w-[163px] h-[70px] relative z-0 mt-16 "
              />
              <Image
                src="/cables/4hdmi_cables/resolution/image-right.png"
                alt="HDMI Cable Right"
                width={57}
                height={75}
                className="object-contain w-[57px] h-[70px] relative z-0 mt-16"
              />
            </div>
         </div>
        </div>

      </div>
    </>
  );
};

export default Hdmi4ResolutionCardRightMid;