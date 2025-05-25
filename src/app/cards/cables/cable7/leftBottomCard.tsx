'use client';

import Image from 'next/image';
import React from 'react';

const Cable7ResolutionCardLeftBottom: React.FC = () => {
  return (
    <>
      {/* left top card start */}
      <div>
        <div className="grid grid-cols-1  gap-3 w-[660px] h-[796px] text-center bg-[#000000] text-white border-1 border-[#CD2122] rounded-[120px]">
    

       

         <div className='flex  '>

                <div>
                       {/* Left right text */}
                <div className=" text-[#CD2122] -mr-[48%] mt-[10%]   font-[600] text-[33px] leading-[100%] font-['Open_Sans']">
                    <h5>
                        High Speed
                    </h5>
               <span className='text-[#ffffff]'>
Connection
</span>
          </div>
                     <div className='w-[409px] -mt-[107px] '>
                             <Image
              src="/cables/cat6_ethernet/resolution/left-cable.png"
                alt="HDMI Cable Right"
                width={409}
                height={785}
                className=" bg-cover w-[409px] h-[785px] "
              />
              </div>
                </div>

              {/* Right middle text */}
                <div className="w-[166px] h-[252px]  my-auto text-start  font-[500] text-[30px] leading-[100%] font-['Open_Sans']">
               <span>Premium conductor
material supports
download speeds upto 10 GBPS</span>
          </div>
         </div>
       

        
        </div>
        
      </div>
    </>
  );
};

export default Cable7ResolutionCardLeftBottom;