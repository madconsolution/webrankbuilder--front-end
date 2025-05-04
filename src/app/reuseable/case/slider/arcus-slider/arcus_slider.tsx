'use client';

import React from 'react';
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';
import Image from 'next/image';

export interface SlideContent {
  image: string;
  leftTexts: string[];
  rightTexts: string[];
}

interface ArcusSliderProps {
  slides: SlideContent[];
}

const ArcusSlider: React.FC<ArcusSliderProps> = ({ slides }) => {
  const [currentSlide, setCurrentSlide] = React.useState(0);
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    slideChanged: (s) => setCurrentSlide(s.track.details.rel),
  });

  return (
    <div className="relative w-full max-w-[1313px] mx-auto mb-[50px] px-6 md:px-20 bg-gradient-to-b from-[#D9D9D91A] via-[#9a9a9a6a] to-[#D9D9D91A]  rounded-[40px] ">
      <div ref={sliderRef} className="keen-slider overflow-hidden">
        {slides.map((slide, idx) => (
          <div
            key={idx}
            className="keen-slider__slide h-[516px] flex flex-col md:flex-row items-center justify-between  text-white"
          >
            {/* Left Texts */}
            <div className="flex-1 space-y-4 text-left px-4 md:px-0">
              {slide.leftTexts.map((text, i) => (
                <p key={i} className="text-[14px] md:text-[16px] font-light">
                  {text}
                </p>
              ))}
            </div>

            {/* Center Image */}
            <div className="flex-shrink-0 w-[240px] h-[240px] md:w-[300px] md:h-[300px] lg:w-[413px] lg:h-[411px] flex items-center -mt-24 justify-center">
              <Image
                src={slide.image}
                alt={`Slide ${idx + 1}`}
                width={400}
                height={400}
                className="object-contain"
              />
            </div>

            {/* Right Texts */}
            <div className="flex-1 space-y-4 text-right px-4 md:px-0">
              {slide.rightTexts.map((text, i) => (
                <p key={i} className="text-[14px] md:text-[16px] font-light">
                  {text}
                </p>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Pagination Dots */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex items-center gap-2 bg-[#2F2F2F] px-4 py-2 rounded-full">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => instanceRef.current?.moveToIdx(idx)}
            className={`h-2 rounded-full transition-all duration-300 ${
              currentSlide === idx ? 'bg-white w-6' : 'bg-gray-500 w-2'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default ArcusSlider;
