'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface Product {
  title: string;
  description: string;
  image: string;
}

interface AutoSliderProps {
  products: Product[];
  mainTitle: string;
  subTitle: string;
  content: string;
}

const AutoSlider: React.FC<AutoSliderProps> = ({ products }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    slides: {
      perView: 1,
      spacing: 20,
    },
    breakpoints: {
      '(min-width: 768px)': {
        slides: { perView: 2, spacing: 20 },
      },
    },
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
  });

  const handlePrev = () => {
    instanceRef.current?.prev();
  };

  const handleNext = () => {
    instanceRef.current?.next();
  };

  return (
    <div className="bg-black text-white w-full md:w-[1440px] p-[20px]">
      {/* Slider */}
      <div ref={sliderRef} className="keen-slider">
        {products.map((product, index) => (
          <div className="keen-slider__slide" key={index}>
            <div className="bg-[#111] rounded-lg p-4 flex flex-col items-center text-center h-full shadow-md">
              <p className="text-sm mb-4 max-w-[335px] h-[60px]">{product.title}</p>
              <Image
                src={product.image}
                alt={product.title}
                width={400}
                height={530}
                className="object-contain"
              />
            </div>
          </div>
        ))}
      </div>

      {/* Bullets + Arrows Container */}

   {/* Bullets + Arrows Container */}
<div className="relative mt-6 flex justify-center">
  {/* Bullets */}
  <div className="flex items-center bg-[#2b2b2b] px-4 py-3 rounded-full">
    {products.map((_, idx) => (
      <button
        key={idx}
        onClick={() => instanceRef.current?.moveToIdx(idx)}
        className={`mx-1 h-2 rounded-full transition-all duration-300 ${
          currentSlide === idx ? 'bg-white w-6' : 'bg-gray-500 w-2'
        }`}
      />
    ))}
  </div>

  {/* Arrows (positioned to the right side of the parent) */}
  <div className="absolute right-2 top-1/2 -translate-y-1/2 flex items-center gap-2">
    <button
      onClick={handlePrev}
      className="w-8 h-8 flex items-center justify-center bg-[#2b2b2b] rounded-full hover:bg-white hover:text-black transition"
    >
      <ChevronLeft size={20} />
    </button>
    <button
      onClick={handleNext}
      className="w-8 h-8 flex items-center justify-center bg-[#2b2b2b] rounded-full hover:bg-white hover:text-black transition"
    >
      <ChevronRight size={20} />
    </button>
  </div>
</div>

    </div>
    
  );
};

export default AutoSlider;
