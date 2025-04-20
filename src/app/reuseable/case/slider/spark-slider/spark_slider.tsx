'use client';

import React from 'react';
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';
import Image from 'next/image';

export interface SlideContent {
  image: string;
  leftTitle: string;
  leftDescription: string;
  rightTitle: string;
  rightDescription: string;
}

interface LunaSliderProps {
  slides: SlideContent[];
}

const SparkSlider: React.FC<LunaSliderProps> = ({ slides }) => {
  const [currentSlide, setCurrentSlide] = React.useState(0);
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    slideChanged: (s) => setCurrentSlide(s.track.details.rel),
  });

  return (
    <div className="relative w-full max-w-[1100px] mx-auto my-12 bg-gradient-to-b from-[#D9D9D91A] via-[#9a9a9a6a] to-[#D9D9D91A]  rounded-[40px] py-12 px-6">
      <div ref={sliderRef} className="keen-slider">
        {slides.map((slide, idx) => (
          <div
            key={idx}
            className="keen-slider__slide flex flex-col md:flex-row items-center justify-between text-white px-4 md:px-10 gap-10"
          >
            {/* Left Text */}
            <div className="flex-1 text-center md:text-left">
              <h1 className="text-[#FF3C3C] text-[18px] font-bold uppercase mb-2">
                {slide.leftTitle}
              </h1>
              <p className="text-sm md:text-base leading-relaxed text-white">
                {slide.leftDescription}
              </p>
            </div>

            {/* Image */}
            <div className="w-[200px] h-[200px] md:w-[250px] md:h-[250px] lg:w-[300px] lg:h-[300px] flex items-center justify-center">
              <Image
                src={slide.image}
                alt={`Slide ${idx + 1}`}
                width={300}
                height={300}
                className="object-contain"
              />
            </div>

            {/* Right Text */}
            <div className="flex-1 text-center md:text-left">
              <h1 className="text-[#FF3C3C] text-[18px] font-bold uppercase mb-2">
                {slide.rightTitle}
              </h1>
              <p className="text-sm md:text-base leading-relaxed text-white">
                {slide.rightDescription}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
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

export default SparkSlider;
