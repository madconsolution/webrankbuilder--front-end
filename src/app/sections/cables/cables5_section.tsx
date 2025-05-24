'use client';
import React from 'react';
import Minidp4HdmiResolutionCardLeft from '@/app/cards/cables/cable3/leftCard';
import Minidp4HdmiResolutionCardRight from '@/app/cards/cables/cable3/rightCard';

const Cable5ResolutionSection: React.FC = () => {
  return (
    <section className="bg-black px-4">
           

<div className="grid grid-cols-1 md:grid-cols-2 grid-rows-1  gap-y-8 mx-auto w-[92%] md:w-full">
        <Minidp4HdmiResolutionCardLeft/>
        <Minidp4HdmiResolutionCardRight/>
       
</div>

     
    </section>
  );
};

export default Cable5ResolutionSection;
