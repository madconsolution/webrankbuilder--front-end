'use client';

import Image from 'next/image';
import React from 'react';

const Cable7ResolutionCardLeftTop: React.FC = () => {
  return (
    <>
      {/* left top card start */}
      <div>
        <div className="grid grid-cols-1  gap-3 w-[660px] h-[796px] text-center bg-[#000000] text-white border-1 border-[#CD2122] rounded-[120px]">
    

       

         <div className=' justify-center mx-auto mt-1'>

                <div>
     
                     <div className=' '>
                             <Image
              src="/cables/psu/resolution/left-top.png"
                alt="HDMI Cable Right"
                width={492}
                height={464}
                className=" bg-cover w-[492px] h-[464px] "
              />
              </div>
                </div>

              

                                {/* Left bttom text */}
                <div className=" text-[#CD2122] pt-[30%] font-[600] text-[40px] leading-[100%] font-['Open_Sans']">
                    <h5>
                   6+2 *2 PIN
                    </h5>

          </div>
         </div>
       

        
        </div>
        
      </div>
    </>
  );
};

export default Cable7ResolutionCardLeftTop;