'use client';

import Image from 'next/image';
import React from 'react';

const Cable4ResolutionCardRight: React.FC = () => {
  return (
    <>
      {/* left top card start */}
      <div>
        <div className="grid grid-cols-1  gap-3 w-[660px] h-[796px] text-center bg-[#000000] text-white border-1 border-[#CD2122] rounded-[120px]">
    

       
    <div className='pt-[16%] justify-center items-center my-auto'>
 


            {/* bottom cable with lines */}
            <div className=''>
             
                 <div className="space-y-3 font-[700] text-[34px] leading-[100%] tracking-[0%] text-center align-middle font-['Open_Sans']">
                  <h5 className='text-[#CD2122]'>
                    4K (3840*2160P) @ 60Hz
                  </h5>
               
                   <h5>
Resolution</h5>
             
                
             
               </div>
                  {/* bottom cable is here */}
              <div>
                             <Image
               src="/cables/4minidp_cables/resolution/right-cable.png"
                alt="HDMI Cable Right"
                width={500}
                height={500}
                className=" bg-cover w-[500px] h-[500px] mx-auto ml-[24%]"
              />
              </div>
            </div>
        </div>


        </div>

      </div>
    </>
  );
};

export default Cable4ResolutionCardRight;