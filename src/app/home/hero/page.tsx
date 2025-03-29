'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation, Autoplay } from 'swiper/modules';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

export default function HeroSection() {
  const videos = ['/logo_video.mp4'];

  return (
    <div className="flex flex-col items-center justify-center w-full min-h-screen bg-[#0B1320] text-white">
   
      
      {/* Video Carousel */}
      <div className="relative w-full">
        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }}
          autoplay={{ delay: 5000 }}
          loop
          className="rounded-lg overflow-hidden"
        >
          {videos.map((video, index) => (
            <SwiperSlide key={index}>
              <video className="w-full h-[100vh] object-cover" autoPlay muted loop>
                <source src={video} type="video/mp4" />
          browser does not support the video tag.
              </video>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Navigation Arrows */}
        <button className="swiper-button-prev absolute left-4 top-1/2 transform -translate-y-1/2  rounded-full p-3 transition">
          <FaChevronLeft size={24} />
        </button>
        <button className="swiper-button-next absolute right-4 top-1/2 transform -translate-y-1/2  rounded-full p-3 transition">
          <FaChevronRight size={24} />
        </button>
      </div>
    </div>
  );
}
