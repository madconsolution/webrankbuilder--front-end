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
      const scrollAmount = 550 + 24; // Slide width + gap
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="relative w-full bg-black px-4 md:px-16 py-10 text-white">
      {/* Slider container without visible scrollbar */}
      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-scroll scroll-smooth pb-4"
        style={{ scrollbarWidth: 'none' }}
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            className="w-[550px] flex-shrink-0  rounded-lg p-6 mb-5 flex flex-col justify-between shadow-md"
          >
            {/* Text box styled to match the image */}
            <div
              style={{
                width: '411.89px',
              
                fontFamily: 'Open Sans, sans-serif',
                fontWeight: 400,
                fontSize: '18px',
                lineHeight: '24px',
                letterSpacing: '0%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
            
              }}
              className="mb-4"
            >
              <h3 className="text-lg font-bold leading-tight mb-1">
                {slide.title}{' '}
                {slide.highlight && (
                  <span className="text-red-500">{slide.highlight}</span>
                )}
              </h3>
              <p className="text-sm text-gray-300">{slide.description}</p>
            </div>

            <div className="w-[550px] h-[550px] relative rounded-md overflow-hidden">
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

      {/* Hide scrollbar (Tailwind utility override for Chrome/Edge/Safari) */}
      <style jsx>{`
        div::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
};

export default FeatureSlider;
