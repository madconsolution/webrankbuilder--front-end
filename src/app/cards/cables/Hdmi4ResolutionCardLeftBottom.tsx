'use client';

import Image from 'next/image';
import React from 'react';

const Hdmi4ResolutionCardLeftBottom: React.FC = () => {
  return (
    <>
      {/* left top card start */}
      <div>
        <div className="grid grid-cols-1 grid-rows-3 gap-4 w-[660px] h-[796px] py-20 text-center bg-[#000000] text-white border-1 border-[#CD2122] rounded-[120px]">

                           <>
       
            <h6 className="hdmi4-card-text-red">
            Specifications
            </h6>
             
             <div className='-mt-32 space-y-5  Hdmi4ResolutionCardLeftBottom-text'>
                <h6>Model : HDMI 2.0</h6>
                <h6>Transfer Speed : 18 GBPS</h6>
                <h6>Plug : Gold Plated</h6>
                <h6>Body : Aluminium</h6>
                <h6>Max Resolution : 4K</h6>
                <h6>Audio Support : DTS, Dolby, ARC Audio</h6>
                <h6>Compatibility : HDTV/TV, Monitor, Projector, 
</h6>
<h6>Laptop, PS5 </h6>
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

export default Hdmi4ResolutionCardLeftBottom;