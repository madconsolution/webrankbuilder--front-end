'use client';

import Image from 'next/image';
import React from 'react';

const Cable7ResolutionCardRightBottom: React.FC = () => {
  return (
   <>
       {/* left top card start */}
       <div>
         <div className="grid grid-cols-1  gap-3 w-[660px] h-[796px] text-center bg-[#000000] text-white border-1 border-[#CD2122] rounded-[120px]">
     
 
        
 <div className="flex my-auto">
  {/* Left bottom text */}
  <div className="  ml-[10%]  text-[#CD2122] font-[400] text-[40px]  font-['Open_Sans'] p-4">
    <h5 className="text-start">
      Flexible &
      <span className=' whitespace-nowrap'>Soft Silicon Gel</span>
    </h5>
  </div>

  {/* Image */}
  <div className="w-[600px] -ml-[20%] -mb-[25%]">
    <Image
      src="/cables/psu/resolution/right-bottom.png"
      alt="HDMI Cable Right"
      width={500}
      height={500}
      className="w-full h-[500px] object-cover "
    />
  </div>
</div>

        
 
         
         </div>
         
       </div>
     </>
  );
};

export default Cable7ResolutionCardRightBottom;