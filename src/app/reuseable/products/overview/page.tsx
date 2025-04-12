'use client';

import React, { useRef, useEffect } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

interface Product {
  title: string;
  description: string;
  image: string;
}

interface ProductOverviewProps {
  products: Product[];
  mainTitle: string;
  subTitle: string;
  content: string;
}

const ProductOverview: React.FC<ProductOverviewProps> = ({
  products,
}) => {
  const paginationRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // force re-render if needed
  }, []);

  return (
    <div className="bg-black text-white py-10 px-4 md:px-16">
      <Swiper
        modules={[Pagination, Autoplay]}
        pagination={{
          clickable: true,
          el: paginationRef.current!,
        }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        spaceBetween={20}
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
        }}
        onSwiper={(swiper) => {
          if (swiper.params.pagination && typeof swiper.params.pagination !== 'boolean') {
            swiper.params.pagination.el = paginationRef.current!;
            swiper.pagination.init();
            swiper.pagination.render();
            swiper.pagination.update();
          }
        }}
      >
        {products.map((product, index) => (
          <SwiperSlide key={index}>
            <div className="bg-[#111] rounded-lg p-4 flex flex-col items-center text-center h-full shadow-md">
              <p className="text-sm mb-4 max-w-xs">{product.title}</p>
              <Image
                src={product.image}
                alt={product.title}
                width={300}
                height={300}
                className="object-contain"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Pagination Bullets inside a Pill Background */}
      <div className="flex w-28 mx-auto  justify-center mt-6">
        <div
          ref={paginationRef}
          className="flex items-center gap-2 px-8 py-3 rounded-full bg-[#2b2b2b]"
        />
      </div>

      {/* Style the bullets to match the image */}
      <style jsx global>{`
        .swiper-pagination-bullet {
          width: 8px;
          height: 8px;
          background-color: #888;
          border-radius: 9999px;
          opacity: 1;
          transition: all 0.3s ease;
        }

        .swiper-pagination-bullet-active {
          width: 24px;
          background-color: #fff;
        }
      `}</style>
    </div>
  );
};

export default ProductOverview;
