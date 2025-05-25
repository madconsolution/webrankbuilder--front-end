'use client';

import Image from 'next/image';
import React from 'react';

const Cable6ResolutionCardRight: React.FC = () => {
  return (
    <>
      {/* left top card start */}
      <div>
        <div className="grid grid-cols-1  gap-3 w-[660px] h-[796px] text-center bg-[#000000] text-white border-1 border-[#CD2122] rounded-[120px]">
    

       

         <div >

                <div>
                       {/* Top text */}
                <div className=" mt-[30%]">
                    <h5 className=" text-[#CD2122] mt-[30%]   font-[700] text-[34px]  font-['Open_Sans']">
                        Rigid Standards Backed
                  
                    </h5>
               <span className="text-[#ffffff]  font-[600] text-[24px] font-['Open_Sans']">
 Waterproof prevents pulling anti interference
</span>
          </div>

               {/* Bottom image */}
                     <div className='-mt-[85px] '>
                             <Image
              src="/cables/cat6_ethernet/resolution/right-cable.png"
                alt="HDMI Cable Right"
                width={563}
                height={592}
                className=" bg-cover w-[563px] h-[592px] "
              />
              </div>
                </div>

         
         </div>
       

        
        </div>
        
      </div>
    </>
  );
};

export default Cable6ResolutionCardRight;