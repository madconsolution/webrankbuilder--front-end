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
    <div className="relative w-full md:w-[1150px] mx-auto py-[50px]  text-white">
      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-scroll scroll-smooth pb-4"
        style={{ scrollbarWidth: 'none' }}
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            className="w-[550px] h-[700px] flex-shrink-0 rounded-lg p-2 mb-5 flex flex-col relative"
          >
            {/* Text Section */}
            <div className="py-2 w-9/12 md:w-[411px] ">
              <h4 className="font-[700] text-[22px] leading-[40px] tracking-[0%]  align-middle font-montserrat">
                {slide.title}{' '}
                {slide.highlight && (
                  <span className="text-red-500">{slide.highlight}</span>
                )}
              </h4>
              <span className=" text-[#FFFFFF] font-[400] text-[18px] leading-[24px] tracking-[0%]  align-middle font-['Open_Sans']">
                {slide.description}
              </span>
            </div>

          {/* Image Section at Bottom */}
<div
  className="absolute bottom-0 w-full h-[500px] px-4 flex pt-10"
>
  <div className="relative w-[500px] h-full rounded-lg overflow-hidden">
    <Image
      src={slide.image}
      alt="feature"
      fill
      className="object-cover rounded-lg"
      
    />
  </div>
</div>

          </div>
        ))}
      </div>

      {/* Arrows */}
      <div className="absolute bottom-6 right-10 flex gap-3">
        <button
          onClick={() => handleScroll('left')}
          className="bg-[#424245B8] p-2 rounded-full hover:bg-red-500 transition"
        >
          <FaChevronLeft size={18} />
        </button>
        <button
          onClick={() => handleScroll('right')}
          className="bg-[#424245B8] p-2 rounded-full hover:bg-red-500 transition"
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
