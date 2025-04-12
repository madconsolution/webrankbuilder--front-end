'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

interface FeatureSlide {
  title: string;
  highlight?: string;
  description: string;
  image: string;
}

interface FeatureSliderProps {
  slides: FeatureSlide[];
}

const FeatureSlider: React.FC<FeatureSliderProps> = ({ slides }) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const handleScroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 550 + 24;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="relative w-full md:w-[1440px] mx-auto my-auto  items-center px-4 md:px-16 py-10 text-white font-sans">
      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-scroll scroll-smooth pb-4 items-center"
        style={{ scrollbarWidth: 'none' }}
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            className="w-[550px] flex-shrink-0 rounded-lg p-2 mb-5 flex flex-col "
          >
            {/* Text Section */}
            <div className="px-4 mb-4 w-[70%]">
              <h3 className="text-[16px] font-bold text-white mb-2 leading-snug">
                {slide.title}{' '}
                {slide.highlight && (
                  <span className="text-red-500">{slide.highlight}</span>
                )}
              </h3>
              <p className="text-[14px] text-gray-300 leading-[22px]">
                {slide.description}
              </p>
            </div>

            {/* Image Section */}
            <div className="w-[100%] h-[400px] relative rounded-lg overflow-hidden items-center">
              <Image
                src={slide.image}
                alt="feature"
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>
          </div>
        ))}
      </div>

      {/* Arrows */}
      <div className="absolute bottom-6 right-10 flex gap-3">
        <button
          onClick={() => handleScroll('left')}
          className="bg-gray-700 p-2 rounded-full hover:bg-red-500 transition"
        >
          <FaChevronLeft size={18} />
        </button>
        <button
          onClick={() => handleScroll('right')}
          className="bg-gray-700 p-2 rounded-full hover:bg-red-500 transition"
        >
          <FaChevronRight size={18} />
        </button>
      </div>

      {/* Hide scrollbar for Webkit */}
      <style jsx>{`
        div::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
};

export default FeatureSlider;
