'use client';

import Cable10ResolutionCardLeftBottom from '@/app/cards/cables/cable10/leftBottomCard';
import Cable10ResolutionCardLeftTop from '@/app/cards/cables/cable10/leftTopCard';
import Cable10ResolutionCardRightBottom from '@/app/cards/cables/cable10/rightBottom';
import Cable10ResolutionCardRightTop from '@/app/cards/cables/cable10/rightTopCard';
import React from 'react';



const Cable10ResolutionSection: React.FC = () => {
  return (
    <section className="bg-black px-4">
           

<div className="grid grid-cols-1 md:grid-cols-2 grid-rows-1  gap-y-8 mx-auto w-[92%] md:w-full">
            <Cable10ResolutionCardLeftTop/>
            <Cable10ResolutionCardRightTop/>
            <Cable10ResolutionCardLeftBottom/>
               <Cable10ResolutionCardRightBottom/>
</div>

     
    </section>
  );
};

export default Cable10ResolutionSection;
