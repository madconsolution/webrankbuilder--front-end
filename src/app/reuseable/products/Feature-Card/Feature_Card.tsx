'use client';

import Image from 'next/image';
import React from 'react';

type FeatureCardProps = {
  image: string;

};

const FeatureCard = ({ image }: FeatureCardProps) => {
  return (
    <div className=" rounded-2xl gap-4 grid grid-cols-1 md:grid-cols-3 items-center text-center w-[1440px] mx-auto h-auto shadow-md">
      <div className="relative w-[433px] h-[590px] mb-4 rounded-lg overflow-hidden">
        <Image src={image} alt={"not found"} fill className="" />
      </div>
   
    </div>
  );
};

export default FeatureCard;
