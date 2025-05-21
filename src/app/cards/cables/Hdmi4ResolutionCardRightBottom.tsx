'use client';

import Image from 'next/image';
import React from 'react';

const Hdmi4ResolutionCardRightBottom: React.FC = () => {
  return (
    <>
      {/* left top card start */}
      <div>
        <div className="grid grid-cols-1 grid-rows-3 gap-4 w-[660px] h-[796px] py-20 text-center bg-[#000000] text-white border-1 border-[#CD2122] rounded-[120px]">

                           <>
       
            <h6 className=" hdmi4-card-text">
           Engineered for <span className="hdmi4-card-text-red">Durability</span>, <br />
Stuffed with <span className="hdmi4-card-text-red">features</span>
            </h6>
             
             <div className='-mt-20 space-y-2  Hdmi4ResolutionCardLeftBottom-text'>
                <h6>Gold Plated Connectors</h6>
                <h6>Reinforced Joints</h6>
                <h6>Dynamic Colors</h6>
                <h6>Dolby True HD</h6>
                <h6>Aluminium Shell Body</h6>
                <h6>4K @ 60Hz</h6>
                <h6>18 GBPS 
</h6>
<h6>Dolby Audio Supported </h6>
             </div>
          </>

                <div className="flex gap-52 -mt-20">
              <Image
               src="/cables/4hdmi_cables/resolution/left-bottom-cable-right.png"
             
                alt="HDMI Cable Left"
                width={300}
                height={300}
                className="object-contain w-[286px] h-[248px] relative z-0 mt-28"
              />
              <Image
                  src="/cables/4hdmi_cables/resolution/left-bottom-cable-left.png"
                alt="HDMI Cable Right"
                width={300}
                height={300}
                className="object-contain w-[286px] h-[248px] relative z-0 mt-28"
              />
            </div>
        </div>

        
    
      </div>
    </>
  );
};

export default Hdmi4ResolutionCardRightBottom;