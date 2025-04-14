'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation, Autoplay } from 'swiper/modules';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { useRef} from 'react';

export default function HeroSection() {
  const videos = ['/logo_video.mp4'];
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <div className="relative w-full min-h-screen bg-[#0B1320] text-white overflow-hidden">
      {/* Video Swiper Carousel */}
      <Swiper
  modules={[Navigation, Autoplay]}
  slidesPerView={1}
  loop
  autoplay={{ delay: 5000, disableOnInteraction: false }}
  navigation={{
    prevEl: prevRef.current,
    nextEl: nextRef.current,
  }}
  onInit={(swiper) => {
    // Fix for custom navigation buttons
    // @ts-expect-error: Custom Swiper navigation ref not typed
    swiper.params.navigation.prevEl = prevRef.current;
   // @ts-expect-error: Custom Swiper navigation ref not typed
    swiper.params.navigation.nextEl = nextRef.current;
    swiper.navigation.init();
    swiper.navigation.update();
  }}
  className="h-screen"
>
  {videos.map((video, index) => (
    <SwiperSlide key={index}>
      <video
        className="w-full h-auto object-cover"
        src={video}
        autoPlay
        muted
        loop
        playsInline
      />
    </SwiperSlide>
  ))}
</Swiper>


      {/* Custom Navigation Buttons */}
      <button
        ref={prevRef}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white bg-black/30 hover:bg-black/50 p-3 rounded-full z-10"
      >
        <FaChevronLeft size={20} />
      </button>
      <button
        ref={nextRef}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white bg-black/30 hover:bg-black/50 p-3 rounded-full z-10"
      >
        <FaChevronRight size={20} />
      </button>
    </div>
  );
}
