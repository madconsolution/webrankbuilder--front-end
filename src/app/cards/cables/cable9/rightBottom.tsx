'use client';

import Image from 'next/image';
import React from 'react';

const Cable9ResolutionCardRightBottom: React.FC = () => {
  return (
   <>
       {/* left top card start */}
       <div>
         <div className="grid grid-cols-1  gap-3 w-[660px] h-[796px] text-center bg-[#000000] text-white border-1 border-[#CD2122] rounded-[120px]">
     
 
        
 
          <div className=' flex items-center   '>
 
     
 
               
 
                                 {/* Left bttom text */}
               <div className="  ml-[10%] mt-[5%]  text-[#CD2122] font-[400] text-[40px]  font-['Open_Sans'] p-4">
    <h5 className="text-start">
      Flexible & <br />
      <span className=' whitespace-nowrap'>Soft Silicon Gel</span>
    </h5>
  </div>

                  <div className='mt-[51%]'>
                              <Image
               src="/cables/psu4/resolution/right-top.png"
                 alt="HDMI Cable Right"
                 width={472}
                 height={500}
                 className=" bg-cover w-[472px] h-[500px] -rotate-[8deg]"
               />
               </div>
          </div>
        
 
         
         </div>
         
       </div>
     </>
  );
};

export default Cable9ResolutionCardRightBottom;