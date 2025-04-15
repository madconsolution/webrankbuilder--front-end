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

interface NinjaSliderProps {
  slides: SlideContent[];
}

const NinjaSlider: React.FC<NinjaSliderProps> = ({ slides }) => {
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    slideChanged: (s) => setCurrentSlide(s.track.details.rel),
  });

  const [currentSlide, setCurrentSlide] = React.useState(0);

  return (
    <div className="relative w-full max-w-6xl mx-auto py-10 px-4">
      <div ref={sliderRef} className="keen-slider">
        {slides.map((slide, idx) => (
          <div key={idx} className="keen-slider__slide flex justify-center items-center bg-[#1A1A1A] rounded-3xl text-white p-6">
            <div className="flex flex-col text-right text-sm w-1/4 space-y-4 pr-4">
              {slide.leftTexts.map((text, i) => (
                <p key={i} className="leading-snug">{text}</p>
              ))}
            </div>

            <div className="w-1/2 flex justify-center">
              <Image
                src={slide.image}
                alt={`Slide ${idx + 1}`}
                width={250}
                height={250}
                className="object-contain"
              />
            </div>

            <div className="flex flex-col text-left text-sm w-1/4 space-y-4 pl-4">
              {slide.rightTexts.map((text, i) => (
                <p key={i} className="leading-snug">{text}</p>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Pagination Dots */}
      <div className="flex justify-center mt-6 gap-2">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => instanceRef.current?.moveToIdx(idx)}
            className={`w-3 h-3 rounded-full transition-all ${
              currentSlide === idx ? 'bg-white' : 'bg-gray-500'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default NinjaSlider;
