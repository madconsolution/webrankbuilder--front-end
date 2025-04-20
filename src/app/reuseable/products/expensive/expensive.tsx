'use client';

import React from 'react';

interface ExpensiveProps {
  bgImage: string;
  title: string;
  description: string;
}

const Expensive: React.FC<ExpensiveProps> = ({ bgImage, title, description }) => {
  return (
    <div
      className="relative  w-full h-[766px] bg-cover bg-center flex items-center justify-center "
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* Text Content */}
      <div className="text-center max-w-3xl px-4">
        <h3 className="text-3xl md:text-4xl font-bold text-[#CD2122] mb-4">{title}</h3>
        <p className="text-base md:text-lg leading-relaxed text-white">{description}</p>
      </div>
    </div>
  );
};

export default Expensive;
