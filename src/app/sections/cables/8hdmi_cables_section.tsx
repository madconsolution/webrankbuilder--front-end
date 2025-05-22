'use client';

import Hdmi4ResolutionCardLeftBottom from '@/app/cards/cables/Hdmi4ResolutionCardLeftBottom';
import Hdmi4ResolutionCardLeftMid from '@/app/cards/cables/Hdmi4ResolutionCardLeftMid';
import Hdmi4ResolutionCardLeftTop from '@/app/cards/cables/Hdmi4ResolutionCardLeftTop';
import Hdmi4ResolutionCardRightBottom from '@/app/cards/cables/Hdmi4ResolutionCardRightBottom';
import Hdmi4ResolutionCardRightMid from '@/app/cards/cables/Hdmi4ResolutionCardRightMid';
import Hdmi4ResolutionCardRightTop from '@/app/cards/cables/Hdmi4ResolutionCardRightTop';
import Hdmi8ResolutionCardLeftTop from '@/app/cards/cables/Hdmi8/Hdmi8ResolutionCardLeftTop';
import Hdmi8ResolutionCardRightTop from '@/app/cards/cables/Hdmi8/Hdmi8ResolutionCardRightTop';

import React from 'react';

const Hdmi8ResolutionSection: React.FC = () => {
  return (
    <section className="bg-black px-4">
           

<div className="grid grid-cols-1 md:grid-cols-2 grid-rows-1 md:grid-rows-2 gap-y-8 mx-auto w-[92%] md:w-full">
        <Hdmi8ResolutionCardLeftTop/>
        <Hdmi8ResolutionCardRightTop/>
       <Hdmi4ResolutionCardLeftMid/>
        <Hdmi4ResolutionCardRightMid/>
        <Hdmi4ResolutionCardLeftBottom/>
        <Hdmi4ResolutionCardRightBottom/>
 
   
</div>

     
    </section>
  );
};

export default Hdmi8ResolutionSection;
