'use client';

import React from 'react';
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';
import Image from 'next/image';

export interface SlideContent {
  image: string;
  leftTexts: string[]; // allow multiple bullet points
}

interface LunaSliderProps {
  slides: SlideContent[];
}

const LunaSlider: React.FC<LunaSliderProps> = ({ slides }) => {
  const [currentSlide, setCurrentSlide] = React.useState(0);
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    slideChanged: (s) => setCurrentSlide(s.track.details.rel),
  });

  return (
    <div className="relative w-full max-w-[1313px] mx-auto my-[50px] px-20 bg-gradient-to-b from-[#D9D9D91A] via-[#9a9a9a6a] to-[#D9D9D91A]  rounded-[40px] py-12">
      <div
        ref={sliderRef}
        className="keen-slider  overflow-hidden"
      >
        {slides.map((slide, idx) => (
          <div
            key={idx}
            className="keen-slider__slide flex flex-col md:flex-row items-center justify-between gap-6 text-white px-10"
          >
            {/* Left Texts */}
            <div className="flex-1 space-y-4 text-left">
              {slide.leftTexts.map((text, i) => (
                <p
                  key={i}
                  className="text-[14px] md:text-[16px] font-light"
                >
                  {text}
                </p>
              ))}
            </div>

            {/* Right Image */}
            <div className="flex-shrink-0 w-[240px] h-[240px] md:w-[300px] md:h-[300px] lg:w-[350px] lg:h-[350px] flex items-center justify-center">
              <Image
                src={slide.image}
                alt={`Slide ${idx + 1}`}
                width={350}
                height={350}
                className="object-contain"
              />
            </div>
          </div>
        ))}
      </div>

      {/* Pagination Dots */}
      <div className="absolute bottom-6 right-[15%] transform -translate-x-1/2 flex items-center gap-2 bg-[#2F2F2F] px-4 py-2 rounded-full">
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

export default LunaSlider;
