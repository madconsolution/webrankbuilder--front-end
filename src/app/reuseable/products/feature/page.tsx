'use client';

import Image from 'next/image';
import React from 'react';

interface FeatureHighlightSectionProps {
  image: string;
  title: string;
  highlightText: string;
  position?: 'left' | 'right';
}

const FeatureHighlightSection: React.FC<FeatureHighlightSectionProps> = ({
  image,
  title,
  highlightText,
  position = 'right',
}) => {
  const isRight = position === 'right';

  return (
    <div className="w-full bg-black text-white py-10 px-4 md:px-16 overflow-hidden">
      <div className="max-w-[1440px]  mx-auto flex flex-col md:flex-row items-center justify-between relative">
        {/* Image Section */}
        <div
          className={`relative w-full md:w-[100%] bg-red-200 p-3 ${
            isRight ? 'order-1' : 'order-2'
          } z-10 ${isRight ? 'md:mr-[-10%]' : 'md:ml-[-10%]'}`}
        >
          <Image
            src={image}
            alt="Feature Image"
            width={700}
            height={500}
            className="object-contain w-full h-auto"
          />
        </div>

        {/* Text Box */}
        <div
          className={`relative w-full md:w-[40%] ${
            isRight ? 'order-2' : 'order-1'
          } z-20 ${isRight ? 'md:ml-[-30%] md:mb-[12%]' : 'md:mr-[-10%]'} `}
        >
          <h2 className="text-3xl font-bold mb-4 leading-snug">
            {title.split(' ').map((word, index) => (
              <span
                key={index}
                className={
                  word.toLowerCase() === 'front' || word.toLowerCase() === 'panel'
                    ? 'text-red-500'
                    : ''
                }
              >
                {word}{' '}
              </span>
            ))}
          </h2>
          <div className="mt-6 border border-red-500 p-4">
            <p className="text-gray-200">{highlightText}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureHighlightSection;
