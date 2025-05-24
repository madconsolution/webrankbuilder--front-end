'use client';


import Hdmi8ResolutionCardLeftBottom from '@/app/cards/cables/cable2/Hdmi8ResolutionCardLeftBottom';
import Hdmi8ResolutionCardLeftTop from '@/app/cards/cables/cable2/Hdmi8ResolutionCardLeftTop';
import Hdmi8ResolutionCardRightBottom from '@/app/cards/cables/cable2/Hdmi8ResolutionCardRightBottom';

import Hdmi8ResolutionCardRightTop from '@/app/cards/cables/cable2/Hdmi8ResolutionCardRightTop';

import React from 'react';

const Cable2ResolutionSection: React.FC = () => {
  return (
    <section className="bg-black px-4">
           

<div className="grid grid-cols-1 md:grid-cols-2 grid-rows-1 md:grid-rows-2 gap-y-8 mx-auto w-[92%] md:w-full">
        <Hdmi8ResolutionCardLeftTop/>
        <Hdmi8ResolutionCardRightTop/>
     
        <Hdmi8ResolutionCardLeftBottom/>
       <Hdmi8ResolutionCardRightBottom/>
 
   
</div>

     
    </section>
  );
};

export default Cable2ResolutionSection;
