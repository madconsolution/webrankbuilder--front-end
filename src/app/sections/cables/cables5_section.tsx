'use client';
import React from 'react';
import Cable5ResolutionCardLeft from '@/app/cards/cables/cable5/leftCard';
import Cable5ResolutionCardRight from '@/app/cards/cables/cable5/rightCard';

const Cable5ResolutionSection: React.FC = () => {
  return (
    <section className="bg-black px-4">
           

<div className="grid grid-cols-1 md:grid-cols-2 grid-rows-1  gap-y-8 mx-auto w-[92%] md:w-full">
        <Cable5ResolutionCardLeft/>
        <Cable5ResolutionCardRight/>
        
       
</div>

     
    </section>
  );
};

export default Cable5ResolutionSection;
