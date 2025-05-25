
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
    <section className="bg-black text-white ">
      <div className="w-full md:w-[1400px]">
        <div className="max-w-[1044px] px-8">
          <h3 className="mt-4">
            {title} <span className="text-[#CD2122] font-[700] text-[31px] leading-[30px] tracking-[0%] text-center align-middle font-['Open_Sans']">{highlight}</span>
          </h3>
          <p className="mt-4 text-sm font-[700] md:text-[18px] leading-[24px] tracking-[0%] align-middle font-['Open_Sans'] ">
            {description}
          </p>
        </div>

        <div className="relative mt-10 overflow-hidden ">
          <div
            className="flex transition-transform duration-500 gap-6"
            style={{ transform: `translateX(-${current * (100 / 2.5)}%)` }}
          >
            {images.map((img, idx) => (
              <div
                key={idx}
                className="rounded-xl overflow-hidden shadow-md shrink-0 bg-black"
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  width={454}
                  height={435}
                  className="w-[454px] h-[435px] object-cover"
                />
              </div>
            ))}
          </div>

          <div className=" flex gap-4 justify-end mr-32">
            <button
              onClick={prevSlide}
              disabled={current === 0}
              className="bg-[#424245B8] text-[#929296b8] p-2 rounded-full hover:bg-red-500 hover:text-white disabled:opacity-50"
            >
              <FaChevronLeft />
            </button>
            <button
              onClick={nextSlide}
              disabled={current === images.length - 1}
              className="bg-[#424245B8] text-white p-2 rounded-full hover:bg-red-500 hover:text-white disabled:opacity-50"
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