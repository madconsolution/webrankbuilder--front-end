"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

interface Product {
  title: string;
  description: string;
  image: string;
}

interface ProductOverviewProps {
  products: Product[];
}

const ProductOverview: React.FC<ProductOverviewProps> = ({ products }) => {
  return (
    <div className="bg-black  text-white py-10  px-4 md:px-16">
      {/* Heading */}
      <h2 className="text-3xl font-bold text-center">
        TORTOX <span className="text-red-500">IRIS</span>
      </h2>
      <p className="text-center text-gray-400 max-w-3xl mx-auto mt-2">
      Tortox Iris re-engineered designs and features to offer the best balance of performance and with honeycomb design front panel inspired open fascia that is specifically created take as much air in to your system as possible. The core of the TORTOX IRIS is its clean design, well balanced between a perfectly organised interior structure and the sleek exterior design.
      </p>

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
            <div className=" rounded-lg p-4  ">
            <p className="text-lg  mt-4 w-80">{product.title}</p>
   
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
