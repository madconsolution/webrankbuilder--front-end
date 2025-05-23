'use client';

import Image from 'next/image';
import React from 'react';

const Dp48ResolutionCardRight: React.FC = () => {
  return (
    <>
      {/* left top card start */}
      <div>
        <div className="grid grid-cols-1  gap-3 w-[660px] h-[796px] text-center bg-[#000000] text-white border-1 border-[#CD2122] rounded-[120px]">
    

       

          <div>
              <div>
                    <Image
      src="/cables/48dp_cables/resolution/right-bg.png"
      alt="HDMI Cable Right"
      width={480}
      height={270}
      className="object-contain w-full h-full  "
    />
            </div>
            <div>
                    <Image
      src="/cables/48dp_cables/resolution/right-cable.png"
      alt="HDMI Cable Right"
      width={500}
      height={510}
      className=" w-[500px] h-[510px] -mt-[44%] ml-[32%]"
    />
            </div>

            {/* bottom text  */}

            <div className='-mt-[30%] space-y-2'>
                <h5 className='hdmi4-card-text-red'>8k Ultra HD Resolution</h5>
                <span className="font-[400] text-[25px] leading-[100%] tracking-[0%] text-center align-middle font-['Open_Sans']">Supports 8k@60Hz for high quality visuals</span>
            </div>
          </div>


        </div>

      </div>
    </>
  );
};

export default Dp48ResolutionCardRight;