'use client';

import Hdmi4ResolutionCard from '@/app/cards/cables/Hdmi4ResolutionCard';
import Image from 'next/image';
import React from 'react';

const Hdmi4ResolutionSection: React.FC = () => {
  return (
    <section className="bg-black px-4">
           

<div className="grid grid-cols-2 grid-rows-2 gap-4">
        <Hdmi4ResolutionCard/>
    <div > <Hdmi4ResolutionCard/></div>
    <div > <Hdmi4ResolutionCard/></div>
    <div > <Hdmi4ResolutionCard/></div>
   
</div>

     
    </section>
  );
};

export default Hdmi4ResolutionSection;
