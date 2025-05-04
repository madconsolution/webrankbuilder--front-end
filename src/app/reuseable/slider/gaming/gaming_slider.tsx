'use client';

import React from 'react';
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';
import Image from 'next/image';

export interface GamingSlideContent {
  image: string;
  leftTexts: [string, string, string];   
  rightTexts: [string, string, string]; 
}

interface NinjaSliderProps {
  slides: GamingSlideContent[];
}

const GamingSlider: React.FC<NinjaSliderProps> = ({ slides }) => {
  const [currentSlide, setCurrentSlide] = React.useState(0);
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    slideChanged: (s) => setCurrentSlide(s.track.details.rel),
  });

  // Auto-slide every 3 seconds (instead of 1s)
  React.useEffect(() => {
    const interval = setInterval(() => {
      if (instanceRef.current) {
        instanceRef.current.next();
      }
    }, 5000); 

    return () => clearInterval(interval);
  }, [instanceRef]);

  return (
    <div className="relative w-full md:max-w-[1313px]  mx-auto mt-[40px] mb-[63px] bg-gradient-to-b from-[#D9D9D91A] via-[#9a9a9a6a] to-[#D9D9D91A] rounded-[40px]">
      <div
        ref={sliderRef}
        className="keen-slider overflow-hidden w-full"
        style={{
          transition: 'transform 1s ease-in-out' 
        }}
      >
        {slides.map((slide, idx) => (
          <div
            key={idx}
            className="keen-slider__slide flex justify-between px-[90px] h-[516px] py-12"
          >
            {/* Left Section */}
            <div className="w-1/4 flex flex-col justify-between space-y-2">
              <span className="ninja-slider-text">{slide.leftTexts[0]}</span>
              <span className="ninja-slider-text">{slide.leftTexts[1]}</span>
              <span className="ninja-slider-text">{slide.leftTexts[2]}</span>
          
            </div>

            {/* Center Image */}
            <div className="flex items-center justify-center">
              <Image
                src={slide.image}
                alt={`Slide ${idx + 1}`}
                width={400}
                height={400}
                className="object-contain"
              />
            </div>

            {/* Right Section */}
            <div className="w-1/4 flex flex-col justify-between  space-y-2">
              <span className="ninja-slider-text">{slide.rightTexts[0]}</span>
              <span className="ninja-slider-text">{slide.rightTexts[1]}</span>
            
              <span className="ninja-slider-text">{slide.rightTexts[2]}</span>
            
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

export default GamingSlider;
