'use client';

import Hdmi4ResolutionCardLeftBottom from '@/app/cards/cables/Hdmi4ResolutionCardLeftBottom';
import Hdmi4ResolutionCardLeftMid from '@/app/cards/cables/Hdmi4ResolutionCardLeftMid';
import Hdmi4ResolutionCardLeftTop from '@/app/cards/cables/Hdmi4ResolutionCardLeftTop';
import Hdmi4ResolutionCardRightBottom from '@/app/cards/cables/Hdmi4ResolutionCardRightBottom';
import Hdmi4ResolutionCardRightMid from '@/app/cards/cables/Hdmi4ResolutionCardRightMid';
import Hdmi4ResolutionCardRightTop from '@/app/cards/cables/Hdmi4ResolutionCardRightTop';

import React from 'react';

const Hdmi4ResolutionSection: React.FC = () => {
  return (
    <section className="bg-black px-4">
           

<div className="grid grid-cols-2 grid-rows-2 gap-4">
        <Hdmi4ResolutionCardLeftTop/>
        <Hdmi4ResolutionCardRightTop/>
       <Hdmi4ResolutionCardLeftMid/>
        <Hdmi4ResolutionCardRightMid/>
        <Hdmi4ResolutionCardLeftBottom/>
        <Hdmi4ResolutionCardRightBottom/>
 
   
</div>

     
    </section>
  );
};

export default Hdmi4ResolutionSection;
