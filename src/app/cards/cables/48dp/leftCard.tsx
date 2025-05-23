'use client';

import Image from 'next/image';
import React from 'react';

const Dp48ResolutionCardLeft: React.FC = () => {
  return (
    <>
      {/* left top card start */}
      <div>
        <div className="grid grid-cols-1  gap-3 w-[660px] h-[796px] text-center bg-[#000000] text-white border-1 border-[#CD2122] rounded-[120px]">
    

       

        <div className='pt-[16%]'>
 


            {/* bottom cable with lines */}
            <div className=''>
               <div className=''>
                 <div>
                   <span className="font-[400] text-[22px] leading-[100%] tracking-[0%] text-center align-middle font-['Open_Sans']">Gold Plated Plug</span>
                </div>
                
                {/* line flex positon is here */}
                <div className='flex justify-around mx-48 mt-10 items-center'>
                    <div>
                             <Image
                src="/cables/4minidp_cables/resolution/Line-1.png"
                alt="HDMI Cable Right"
                width={124}
                height={124}
                className=" w-[124px] h-[53px] mx-auto -rotate-50"
              />
              </div>
              <div>
                             <Image
                src="/cables/4minidp_cables/resolution/Line-2.png"
                alt="HDMI Cable Right"
                width={124}
                height={124}
                className="  w-[124px] h-[124px] mx-auto  rotate-30"
              />
              </div>
                </div>
               </div>
                  {/* bottom cable is here */}
              <div>
                             <Image
               src="/cables/4minidp_cables/resolution/left-cable.png"
                alt="HDMI Cable Right"
                width={500}
                height={500}
                className=" bg-cover w-[500px] h-[500px] mx-auto "
              />
              </div>
            </div>
        </div>
       


        </div>

      </div>
    </>
  );
};

export default Dp48ResolutionCardLeft;