'use client';

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Title from "../title/page";

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
  mainTitle,
  subTitle,
  content,
}) => {
  return (
    <div className="bg-black text-white py-10 px-4 md:px-16">
      <div>
        <Title 
          mainTitle={mainTitle} 
          subTitle={subTitle} 
          content={content} 
        />
      </div>

      {/* Slider Section */}
      <Swiper
        modules={[Pagination]}
        pagination={{ clickable: true }}
        spaceBetween={20}
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
        }}
        className="mt-6"
      >
        {products.map((product, index) => (
          <SwiperSlide key={index}>
            <div className="rounded-lg p-4">
              <p className="text-lg mt-4 w-80">{product.title}</p>

              <Image
                src={product.image}
                alt={product.title}
                width={300}
                height={300}
                className="mx-auto"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ProductOverview;
