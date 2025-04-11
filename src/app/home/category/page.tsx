'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import {Image as Gallery } from 'lucide-react';
import Image from 'next/image';

const categories = [
  'ALL',
  'COMPUTER CASE',
  'CASE FAN',
  'POWER SUPPLY',
  'LIQUID COOLER',
  'AIR COOLER',
];

const products = [
  { id: 1, title: 'Gaming Case', category: 'COMPUTER CASE', img: '/category-1.png', desc: 'Fan have a beautiful LED cooling system with various RGB color effect and you can adjust the LED visual effect and color with the controller.' },
  { id: 2, title: 'RGB Fan', category: 'CASE FAN', img: '/category-1.png', desc: 'Build awesome LED visual effect just by a 3-button controller, which allow you adjust effect speed and mode , the only limitation is your imagination.' },
  { id: 3, title: '750W PSU', category: 'POWER SUPPLY', img: '/category-1.png', desc: 'SPARK X offers full colour control and stunning visual effects. Speed can be turned down to 500 RPM.' },
  { id: 4, title: 'AIO Liquid Cooler', category: 'LIQUID COOLER', img: '/category-1.png', desc: 'The RGB sychronization via 4-pin RGB header is compatible with motherboards using Asus Aura Sync, ASRock RGB LED etc.' },
  { id: 5, title: 'Air Cooler', category: 'AIR COOLER', img: '/category-1.png', desc: 'Arcus have no need an extra controller for rainbow effect, Unified luminous effect of water block and fan, forming a beautiful color.' },
];

export default function CategoryTabs() {
  const [selectedTab, setSelectedTab] = useState('ALL');

  const filteredProducts = selectedTab === 'ALL' ? products : products.filter(p => p.category === selectedTab);

  return (
    <div className="w-full md:w-[1140px] mx-auto p-4">
    <div className="flex flex-wrap md:flex space-x-2 md:space-x-4 mb-6 p-2 text-sm">
  {categories.map(category => (
    <button
      key={category}
      onClick={() => setSelectedTab(category)}
      className={`px-3 py-4 text-sm sm:text-base text-black hover:bg-red-500 ${selectedTab === category ? 'bg-red-500 text-white' : ''}`}
    >
      {category}
    </button>
  ))}
</div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-6 ">
        {filteredProducts.map(product => (
          <div key={product.id} className=" shadow-md rounded-lg overflow-hidden ">
            <motion.div whileHover={{ scale: 1.05 }} className="relative group hover:bg-gray-100">
              <Image src={product.img} alt={product.title} width={366} height={300} className="rounded-lg" />
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                whileHover={{ opacity: 1, y: 0 }}
                className="absolute bottom-4 left-1/2 -translate-x-1/2 px-4 py-2 bg-[#CC0029] text-white rounded-lg opacity-0 group-hover:opacity-100"
              >
                Read More
              </motion.button>
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                whileHover={{ opacity: 1, scale: 1 }}
                className="absolute top-2 left-2 bg-white p-1 rounded-full shadow-lg opacity-0 group-hover:opacity-100"
              >
                <Gallery className="w-5 h-5 text-red-500" />
              </motion.div>
            </motion.div>
            <div className="my-4 ">
              <h3 className="text-lg font-semibold text-center text-red-500 my-2">{product.title}</h3>
              <hr className='w-full text-gray-300' />
              <p className="text-sm text-gray-600 mt-2 px-2 text-justify">{product.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
