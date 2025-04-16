'use client'; 

import React from 'react';
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';
import Image from 'next/image';

export interface SlideContent {
  image: string;
  leftTexts: [string, string];   // Top & bottom left
  rightTexts: [string, string];  // Top & bottom right
}

interface NinjaSliderProps {
  slides: SlideContent[];
}

const NinjaSlider: React.FC<NinjaSliderProps> = ({ slides }) => {
  const [currentSlide, setCurrentSlide] = React.useState(0);
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    slideChanged: (s) => setCurrentSlide(s.track.details.rel),
  });

  return (
    <div className="relative w-full max-w-[1313px] mx-auto py-10 px-4 bg-[#D9D9D91A] rounded-[40px]">
      <div
        ref={sliderRef}
        className="keen-slider  overflow-hidden  py-12"
      >
        {slides.map((slide, idx) => (
          <div
            key={idx}
            className="keen-slider__slide flex justify-between  text-white relative"
          >
            {/* Left Section */}
            <div className="w-1/6 flex flex-col justify-between text-center ">
              <p className="text-[14px] leading-snug font-light">{slide.leftTexts[0]}</p>
              <p className="text-[14px] leading-snug font-light">{slide.leftTexts[1]}</p>
            </div>

            {/* Center Image */}
            <div className="w-[413px] h-[411px] flex items-center justify-center">
              <Image
                src={slide.image}
                alt={`Slide ${idx + 1}`}
                width={300}
                height={300}
                className="object-contain"
              />
            </div>

            {/* Right Section */}
            <div className="w-1/6 flex flex-col justify-between text-center ">
              <p className="text-[14px] leading-snug font-light">{slide.rightTexts[0]}</p>
              <p className="text-[14px] leading-snug font-light">{slide.rightTexts[1]}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination Dots */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-2">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => instanceRef.current?.moveToIdx(idx)}
            className={`w-4 h-2 rounded-full transition-all duration-300 ${
              currentSlide === idx ? 'bg-white w-6' : 'bg-gray-500'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default NinjaSlider;  