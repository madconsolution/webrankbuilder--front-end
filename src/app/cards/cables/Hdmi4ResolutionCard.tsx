'use client';

import Image from 'next/image';
import React from 'react';


const Hdmi4ResolutionCard: React.FC = () => {
  return (
  
    
<>
        {/* left top card start */}
        <div >
           <div className="grid grid-cols-1 grid-rows-3 gap-4 text-center bg-gray-700 text-white">
        <div >
          <h3>Faster than ever Before</h3>
          <p>Elevate your entertainment
with uninterrupted</p>
         <h3>18 GBPS</h3>
         <p>Bandwidth</p>
         
         {/* Flex image of first card*/}
        </div>
          <div className="grid grid-cols-2 grid-rows-1 gap-4 justify-center">
             {/* Here is flex-left progrees */}
        <div >
            <div>
                <p>HDMI 1.4 10.2GBPS</p>
            </div>
<div className="w-[166px] h-[20px] mx-auto rounded-[60px] border border-[#FFFFFF]">
  <div
    className="bg-red-600 h-full rounded-[60px]"
    style={{ width: '70%' }}
  ></div>
</div>


       
        </div>

        {/* Here is flex-right progrees */}
    <div >
            <div>
                <p>HDMI 1.4 10.2GBPS</p>
            </div>
<div className="w-[166px] h-[20px] mx-auto rounded-[60px] border border-[#FFFFFF]">
  <div
    className="bg-red-600 h-full rounded-[60px]"
    style={{ width: '100%' }}
  ></div>
</div>


       
        </div>
</div>
{/*  Bottom image of first card */}
    <div >image</div>
</div>
            {/* left top card end */}
     
        </div>



          {/* left bottom card end */}



</>
    

  );
};

export default Hdmi4ResolutionCard;
