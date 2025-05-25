'use client';

import Image from 'next/image';
import React from 'react';

const Cable10ResolutionCardLeftTop: React.FC = () => {
  return (
   <>
       {/* left top card start */}
       <div>
         <div className="grid grid-cols-1  gap-3 w-[660px] h-[796px] text-center bg-[#000000] text-white border-1 border-[#CD2122] rounded-[120px]">
     
 
        
 
          <div >
 
                 <div>
      
                      <div >
                              <Image
               src="/cables/psu5/resolution/left-top.png"
                 alt="HDMI Cable Right"
                 width={500}
                 height={500}
                 className=" bg-cover w-[500px] h-[500px]  mx-auto"
               />
               </div>
                 </div>
 
               
 
                                 {/* Left bttom text */}
                 <div className="w-[400px] h-auto mx-auto   text-[#CD2122]  font-[600] text-[40px] leading-[100%] font-['Open_Sans']">
                     <h5>
12+4 PCI-E 5.0 12 VHPWR Pin <span className='text-[#ffffff]'>to</span> 8*3 PCI-E Pin

                     </h5>
 
           </div>
          </div>
        
 
         
         </div>
         
       </div>
     </>
  );
};

export default Cable10ResolutionCardLeftTop;