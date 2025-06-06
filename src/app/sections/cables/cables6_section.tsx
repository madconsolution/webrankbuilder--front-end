'use client';
import React from 'react';

import Cable6ResolutionCardLeft from '@/app/cards/cables/cable6/leftCard';
import Cable6ResolutionCardRight from '@/app/cards/cables/cable6/rightCard';

const Cable6ResolutionSection: React.FC = () => {
  return (
    <section className="bg-black px-4">
           

<div className="grid grid-cols-1 md:grid-cols-2 grid-rows-1  gap-y-8 mx-auto w-[92%] md:w-full">
        <Cable6ResolutionCardLeft/>
        <Cable6ResolutionCardRight/>
        
       
</div>

     
    </section>
  );
};

export default Cable6ResolutionSection;
