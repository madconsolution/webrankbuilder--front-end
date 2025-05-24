'use client';

import Image from 'next/image';
import React from 'react';

const Cable5ResolutionCardLeft: React.FC = () => {
  return (
    <>
      {/* left top card start */}
      <div>
        <div className="grid grid-cols-1  gap-3 w-[660px] h-[796px] text-center bg-[#000000] text-white border-1 border-[#CD2122] rounded-[120px]">
    

       

        <div>
                             <Image
              src="/cables/4minidp_hdmicables/resolution/left-cable.png"
                alt="HDMI Cable Right"
                width={318}
                height={252}
                className=" bg-cover w-[318px] h-[252px] mx-auto "
              />
              </div>
       
        <div>
                             <Image
               src="/cables/4minidp_hdmicables/resolution/bg.png"
                alt="HDMI Cable Right"
                width={518}
                height={326}
                className=" bg-cover w-[518px] h-[326px] mx-auto -mt-[15%] "
              />
              </div>
       

          <div className=" mb-[16%] text-[#CD2122]  font-[600] text-[33px]  tracking-[0%] text-center align-middle font-['Open_Sans']">
            <h5><span className='text-[#ffffff] '>Supports</span> 4K Resolution </h5>
          </div>
        </div>

      </div>
    </>
  );
};

export default Cable5ResolutionCardLeft;