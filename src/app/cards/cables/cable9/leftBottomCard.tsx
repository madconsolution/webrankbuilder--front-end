'use client';

import Image from 'next/image';
import React from 'react';

const Cable9ResolutionCardLeftBottom: React.FC = () => {
  return (
   <>
       {/* left top card start */}
       <div>
         <div className="grid grid-cols-1  gap-3 w-[660px] h-[796px] text-center bg-[#000000] text-white border-1 border-[#CD2122] rounded-[120px]">
     
 
        
 
          <div className=' mx-auto '>
 
                 <div>
      
                      <div >
             <Image
               src="/cables/psu4/resolution/left-bottom.png"
                 alt="HDMI Cable Right"
                 width={500}
                 height={500}
                 className=" bg-cover w-[500px] h-[500px] -mt-[6%] "
               />
               </div>
                 </div>
 
               
 
                  {/* Left bttom text */}
                 <div className="w-[313px] h-[240px] text-start ml-[56%]  text-[#CD2122]  font-[600] text-[40px] leading-[100%] font-['Open_Sans']">
                     <h5>
                   Durable &
Expandable 
<br />
              <span className='text-[#ffffff]'>Thermoplastic
Elastomer (TPE)
Cable</span>
                     </h5>
 
           </div>
          </div>
        
 
         
         </div>
         
       </div>
     </>
  );
};

export default Cable9ResolutionCardLeftBottom;