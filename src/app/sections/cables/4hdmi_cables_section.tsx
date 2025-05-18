'use client';

import Hdmi4ResolutionCardLeftMid from '@/app/cards/cables/Hdmi4ResolutionCardLeftMid';
import Hdmi4ResolutionCardLeftTop from '@/app/cards/cables/Hdmi4ResolutionCardLeftTop';
import Hdmi4ResolutionCard from '@/app/cards/cables/Hdmi4ResolutionCardLeftTop';

import React from 'react';

const Hdmi4ResolutionSection: React.FC = () => {
  return (
    <section className="bg-black px-4">
           

<div className="grid grid-cols-2 grid-rows-2 gap-4">
        <Hdmi4ResolutionCardLeftTop/>
        <Hdmi4ResolutionCardLeftMid/>
       <Hdmi4ResolutionCardLeftMid/>
        <Hdmi4ResolutionCardLeftTop/>
 
   
</div>

     
    </section>
  );
};

export default Hdmi4ResolutionSection;
