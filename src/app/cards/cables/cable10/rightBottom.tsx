'use client';

import Image from 'next/image';
import React from 'react';

const Cable10ResolutionCardRightBottom: React.FC = () => {
  return (
   <>
       {/* left top card start */}
       <div>
         <div className="grid grid-cols-1  gap-3 w-[660px] h-[796px] text-center bg-[#000000] text-white border-1 border-[#CD2122] rounded-[120px]">
     
 
        
 
          <div className=' flex items-center   '>
 
     
 
               
 
                                 {/* Left bttom text */}
               <div className="  ml-[12%] -mt-[35%]   text-[#CD2122] font-[400] text-[40px]  font-['Open_Sans'] ">
    <h5 className="text-start">
      Flexible & <br />
      <span className=' whitespace-nowrap'>Soft Silicon Gel</span>
    </h5>
  </div>

                  <div className='-mb-[35%] mr-[10%]'>
                              <Image
               src="/cables/psu5/resolution/right-bottom.png"
                 alt="HDMI Cable Right"
                 width={472}
                 height={464}
                 className=" bg-cover w-[472px] h-[564px] rotate-[16deg] "
               />
               </div>
          </div>
        
 
         
         </div>
         
       </div>
     </>
  );
};

export default Cable10ResolutionCardRightBottom;