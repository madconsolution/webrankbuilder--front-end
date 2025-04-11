
"use client"
import Image from 'next/image';
import { FC, useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

interface HighlightsSliderProps {
  title: string;
  highlight: string;
  description: string;
  images: { src: string; alt: string }[];
}

const HighlightsSlider: FC<HighlightsSliderProps> = ({
  title,
  highlight,
  description,
  images,
}) => {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    if (current < images.length - 1) setCurrent(current + 1);
  };

  const prevSlide = () => {
    if (current > 0) setCurrent(current - 1);
  };

  return (
    <section className="bg-black text-white py-16">
      <div className="w-full">
        <div className="">
          <h2 className="mt-4 pr-0 md:pr-[8%] text-sm md:text-base text-gray-300 max-w-[1044px] font-bold">
            {title} <span className="text-red-500">{highlight}</span>
          </h2>
          <p className="mt-4 pl-4 md:pl-[10%] text-sm md:text-base text-gray-300 max-w-[1044px]">
            {description}
          </p>
        </div>

        <div className="relative mt-10 overflow-hidden pl-[10%]">
          <div
            className="flex transition-transform duration-500 gap-6"
            style={{ transform: `translateX(-${current * (100 / 2.5)}%)` }}
          >
            {images.map((img, idx) => (
              <div
                key={idx}
                className="rounded-xl overflow-hidden shadow-md shrink-0 w-[85%] md:w-[45%] lg:w-[33%] aspect-[3/4] bg-black"
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  width={454}
                  height={435}
                  className="w-full h-[435px] object-cover"
                />
              </div>
            ))}
          </div>

          <div className="absolute right-10 bottom-6 flex gap-4">
            <button
              onClick={prevSlide}
              disabled={current === 0}
              className="bg-white text-black p-2 rounded-full hover:bg-red-500 hover:text-white disabled:opacity-50"
            >
              <FaChevronLeft />
            </button>
            <button
              onClick={nextSlide}
              disabled={current === images.length - 1}
              className="bg-[#424245B8] text-black p-2 rounded-full hover:bg-red-500 hover:text-white disabled:opacity-50"
            >
              <FaChevronRight />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HighlightsSlider;