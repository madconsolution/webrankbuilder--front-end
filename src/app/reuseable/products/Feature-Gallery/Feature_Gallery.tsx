'use client';

import React from 'react';
import Image from 'next/image';

interface TortoxShowcaseProps {
  title: string;
  highlight: string;
  description: string;
  images: string[];
}

const TortoxShowcase: React.FC<TortoxShowcaseProps> = ({
  title,
  highlight,
  description,
  images,
}) => {
  return (
    <section className="w-full md:w-[1440px] bg-black text-white py-20  font-sans relative">
      <div className="flex flex-col gap-16">
        {/* Top Left Text */}
        <div className="max-w-xl z-10">
          <h3 className="text-4xl md:text-5xl  font-extrabold leading-tight mb-4">
            {title}{' '}
            <span className="text-red-500">
              {highlight}
            </span>
          </h3>
          <p className="text-gray-300 text-base md:text-lg leading-relaxed whitespace-pre-line">
            {description}
          </p>
        </div>

        {/* Bottom Right Images */}
        <div className="w-full flex justify-end">
          <div className="flex gap-0 items-end">
            {images.map((src, index) => (
              <div
                key={index}
                className="relative  md:w-[240px] aspect-[3/4] hover:scale-105 transition-transform duration-300"
              >
                <Image
                  src={src}
                  alt={`tortox-image-${index}`}
                  fill
                  className="object-cover "
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TortoxShowcase;
