'use client';

import React, { useRef, useState, useEffect } from 'react';
import Image from 'next/image';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

interface ProductSliderProps {
  title: string;
  products: { image: string }[];
}

const ProductSlider: React.FC<ProductSliderProps> = ({ title, products }) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [currentPage, setCurrentPage] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(2); // Default for medium/large

  const updateItemsPerPage = () => {
    if (window.innerWidth < 640) {
      setItemsPerPage(1);
    } else {
      setItemsPerPage(2);
    }
  };

  useEffect(() => {
    updateItemsPerPage();
    window.addEventListener('resize', updateItemsPerPage);
    return () => window.removeEventListener('resize', updateItemsPerPage);
  }, []);

  const totalPages = Math.ceil(products.length / itemsPerPage);

  const handleScroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const cardWidth = scrollRef.current.offsetWidth / itemsPerPage;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -cardWidth * itemsPerPage : cardWidth * itemsPerPage,
        behavior: 'smooth',
      });

      setCurrentPage((prev) =>
        direction === 'left'
          ? Math.max(prev - 1, 0)
          : Math.min(prev + 1, totalPages - 1)
      );
    }
  };

  return (
    <div className="w-full bg-black py-10 px-4 md:px-16 text-white relative overflow-hidden">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold">{title}</h2>
        <div className="hidden md:flex gap-2">
          <button
            onClick={() => handleScroll('left')}
            className="bg-[#1e1e1e] hover:bg-white hover:text-black transition p-2 rounded-full"
          >
            <FaChevronLeft />
          </button>
          <button
            onClick={() => handleScroll('right')}
            className="bg-[#1e1e1e] hover:bg-white hover:text-black transition p-2 rounded-full"
          >
            <FaChevronRight />
          </button>
        </div>
      </div>

      {/* Scrollable cards */}
      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-scroll scroll-smooth pb-4 hide-scrollbar"
      >
        {products.map((product, index) => (
          <div
            key={index}
            className="w-[550px] h-[550px] flex-shrink-0 bg-[#0e0e0e] rounded-2xl overflow-hidden border border-[#222]"
          >
            <div className="relative  w-[550px] h-[550px]">
              <Image
                src={product.image}
                alt={`Product ${index + 1}`}
                fill
                className="object-cover"
              />
            </div>
          </div>
        ))}
      </div>

      {/* Pagination Dots */}
      <div className="flex justify-center mt-6 gap-2">
        {Array.from({ length: totalPages }).map((_, idx) => (
          <div
            key={idx}
            className={`w-10 h-2 rounded-full ${
              idx === currentPage ? 'bg-gray-300' : 'bg-gray-600'
            }`}
          ></div>
        ))}
      </div>

      {/* Hide Scrollbar CSS */}
      <style jsx>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
};

export default ProductSlider;
