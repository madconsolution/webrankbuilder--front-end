'use client';

import Image from 'next/image';
import React from 'react';

const Hdmi8ResolutionCardLeftBottom: React.FC = () => {
  return (
    <>
      {/* left top card start */}
      <div>
        <div className="grid grid-cols-1 grid-rows-3 gap-3 w-[660px] h-[796px] text-center bg-[#000000] text-white border-1 border-[#CD2122] rounded-[120px]">
    



   <div className='ml-[25%]'>
           <Image
                src="/cables/8hdmi_cables/resolution/image.png"
                alt="HDMI Cable Right"
                width={544}
                height={740}
                className="object-contain w-[544px] h-[740px] -mr-20 "
              />
      </div>

                   <div className="mt-[50%]">
            <h5 className="hdmi4-card-text-red">Built To Last </h5>
         
          </div>


        </div>

      </div>
    </>
  );
};

export default Hdmi8ResolutionCardLeftBottom;