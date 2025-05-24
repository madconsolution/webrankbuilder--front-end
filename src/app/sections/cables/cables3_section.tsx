'use client';
import React from 'react';
import Cable3ResolutionCardLeft from '@/app/cards/cables/cable3/leftCard';
import Cable3ResolutionCardRight from '@/app/cards/cables/cable3/rightCard';

const Cable3ResolutionSection: React.FC = () => {
  return (
    <section className="bg-black px-4">
           

<div className="grid grid-cols-1 md:grid-cols-2 grid-rows-1  gap-y-8 mx-auto w-[92%] md:w-full">
        < Cable3ResolutionCardLeft/>
        < Cable3ResolutionCardRight/>


       
</div>

     
    </section>
  );
};

export default Cable3ResolutionSection;
