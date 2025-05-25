'use client';

import Image from 'next/image';
import React from 'react';

const Cable9ResolutionCardRightTop: React.FC = () => {
  return (
    <>
      {/* left top card start */}
      <div>
        <div className="grid grid-cols-1  gap-3 w-[660px] h-[796px] text-center bg-[#000000] text-white border-1 border-[#CD2122] rounded-[120px]">
    

       

         <div className='flex my-auto -ml-[9%]'>

                <div>
     
                     <div >
                             <Image
              src="/cables/psu/resolution/right-top.png"
                alt="HDMI Cable Right"
                width={500}
                height={500}
                className=" bg-cover w-[500px] h-[500px] "
              />
              </div>
                </div>

              

                                {/* Left bttom text */}
                <div className="w-[187px] h-[144px] my-auto text-[#CD2122] font-[600] text-[40px] leading-[100%] font-['Open_Sans']">
                    <h5>
                 Aesthetic
Lighting
Modes
                    </h5>

          </div>
         </div>
       

        
        </div>
        
      </div>
    </>
  );
};

export default Cable9ResolutionCardRightTop;