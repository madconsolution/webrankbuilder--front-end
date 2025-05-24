'use client';
import React from 'react';
import Dp48ResolutionCardLeft from '../../cards/cables/cable4/leftCard';
import Dp48ResolutionCardRight from '@/app/cards/cables/cable4/rightCard';

const Cable4ResolutionSection: React.FC = () => {
  return (
    <section className="bg-black px-4">
           

<div className="grid grid-cols-1 md:grid-cols-2 grid-rows-1  gap-y-8 mx-auto w-[92%] md:w-full">
        <Dp48ResolutionCardLeft/>
        <Dp48ResolutionCardRight></Dp48ResolutionCardRight>
</div>

     
    </section>
  );
};

export default Cable4ResolutionSection;
