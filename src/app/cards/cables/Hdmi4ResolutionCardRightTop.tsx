'use client';

import Image from 'next/image';
import React from 'react';

const Hdmi4ResolutionCardRightTop: React.FC = () => {
  return (
    <>
      {/* left top card start */}
      <div>
        <div className="grid grid-cols-1 grid-rows-3 gap-4 w-[660px] h-[796px] py-20 text-center bg-[#000000] text-white border-1 border-[#CD2122] rounded-[120px]">
         <div className="flex justify-center relative">
            <div
              className="absolute inset-0 bg-cover bg-center w-[420px] h-[241px] mx-auto "
              style={{
                backgroundImage: "url('/cables/4hdmi_cables/resolution/image-right-card-top.png')",
              }}
            >

              <div className="mt-64 flex justify-center gap-20">
  <span>FULL HD</span>
  <span>4K Ultra HD</span>
</div>
            </div>
    
          </div>
         
            <>
                <h6 className='hdmi4-card-text-red  mt-32'>Experience the Brilliance of</h6>
            </>

          {/* Bottom  of right card mid*/}
 <div className='flex justify-between'>
          
              <Image
                          
                            src="/cables/4hdmi_cables/resolution/right-mid-cable-right.png"
                            alt="HDMI Cable"
                            width={150} 
                            height={200} 
                            className="object-contain  "
                          />
              <Image
                            src="/cables/4hdmi_cables/resolution/4k.png"
                            alt="HDMI Cable"
                            width={110} 
                            height={90} 
                            className="object-contain  "
                          />
              <Image
                            src="/cables/4hdmi_cables/resolution/right-mid-cable-left.png"
                            alt="HDMI Cable"
                            width={150} 
                            height={200} 
                            className="object-contain  "
                          />
          </div>
          {/* Bottom  of right card last */}
 <div className='flex gap-x-10 justify-center'>
          
              <Image
                          
                            src="/cables/4hdmi_cables/resolution/right-1.png"
                            alt="HDMI Cable"
                            width={40} 
                            height={40} 
                            className="object-contain  "
                          />
              <Image
                           src="/cables/4hdmi_cables/resolution/right-2.png"
                            alt="HDMI Cable"
                            width={100} 
                            height={40} 
                            className="object-contain  "
                          />
              <Image
                           src="/cables/4hdmi_cables/resolution/right-3.png"
                            alt="HDMI Cable"
                            width={40} 
                            height={40} 
                            className="object-contain  "
                          />
          </div>


        </div>
       
      
      </div>
    </>
  );
};

export default Hdmi4ResolutionCardRightTop;