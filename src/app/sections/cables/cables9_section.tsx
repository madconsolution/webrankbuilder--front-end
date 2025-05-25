'use client';
import Cable9ResolutionCardLeftBottom from '@/app/cards/cables/cable9/leftBottomCard';
import Cable9ResolutionCardLeftTop from '@/app/cards/cables/cable9/leftTopCard';
import Cable9ResolutionCardRightTop from '@/app/cards/cables/cable9/rightTopCard';
import React from 'react';



const Cable9ResolutionSection: React.FC = () => {
  return (
    <section className="bg-black px-4">
           

<div className="grid grid-cols-1 md:grid-cols-2 grid-rows-1  gap-y-8 mx-auto w-[92%] md:w-full">
            <Cable9ResolutionCardLeftTop/>
            <Cable9ResolutionCardRightTop/>
            <Cable9ResolutionCardLeftBottom/>
           
</div>

     
    </section>
  );
};

export default Cable9ResolutionSection;
