'use client';

import { motion } from 'framer-motion';

import Image from 'next/image';
import BannerSection from '../reuseable/contact/banner/page';

export default function AboutTortox() {
  return (
 <div>
  {/* About benner */}
  <BannerSection
        backgroundImage="/contact/banner-contact.jpg" 
        title="Distributors"
        buttonText="Read More"
        buttonLink="/distributors"
      />
  {/*  */}
     <section className="bg-white py-12 px-4 md:px-16">
      <motion.div
        className="max-w-custom mx-auto flex flex-col md:flex-row items-center justify-between gap-8"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        {/* Text Section */}
        <motion.div
          className="w-full md:w-3/4"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl md:text-3xl font-bold text-[#CC0000] mb-4">About Tortox</h3>
          <p className="text-gray-700 mb-4 text-justify">
            TORTOX continuously innovates, is one of the world’s leading providers of high-performance PC peripherals and components.
            Integrating its extensive experience in R&amp;D, technology, quality and design, its scope of business encompasses computer
            chassis, server, power supply, mechanical keyboards, precision gaming mice, wireless headsets, high-performance components that
            gamers use to build gaming PCs.
          </p>
          <p className="text-gray-700">
            Our computer systems are assembled carefully, rigorously tested and built to last for the long run. With a company-wide
            commitment to quality, innovative design, advanced features and high performance. By being the manufacturer and the distributor,
            we are dedicated to meet your personalized desires with the highest performance for all your gaming and digital media solutions.
          </p>
        </motion.div>

        {/* Image Section */}
        <motion.div
          className="w-full md:w-1/4 flex items-center"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <Image
            src="/logo/logo.png"
            alt="Tortox Logo"
            width={250} // adjust as needed
            height={250}
            className="w-full h-auto"
          />
        </motion.div>
      </motion.div>
    </section>
 </div>
  );
}
