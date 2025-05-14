'use client';

import Image from 'next/image';
import Link from 'next/link';

interface BannerProps {
  backgroundImage: string;
  title: string;
  buttonText?: string;
  buttonLink?: string;
}

export default function BannerSection({
  backgroundImage,
  title,
  buttonText = 'Read More',
  buttonLink = '#',
}: BannerProps) {
  return (
    <section className="relative w-full h-[300px] md:h-[400px] flex items-center justify-center overflow-hidden"
    
       style={{
        
        clipPath:
          'polygon(0 100%, 0 0, 35% 0%, 65% 0%, 59% 0, 100% 0, 100% 43%, 100% 60%, 100% 100%, 58% 100%, 52% 94%, 46% 100%)',
      }}>
      {/* Background Image */}
      <Image
        src={backgroundImage}
        alt={title}
        layout="fill"
        objectFit="cover"
        className="z-0"
        priority
      />

      {/* Overlay particles (optional, matches snow-like effect) */}
      <div className="absolute inset-0 z-10 bg-black/10 pointer-events-none" />

      {/* Content Box */}
      <div className="relative z-20 bg-white/80 backdrop-blur-md rounded-md shadow-lg px-6 py-4 flex items-center space-x-6 max-w-md">
        <h2 className="text-lg md:text-xl font-semibold text-gray-800">{title}</h2>
        <Link
          href={buttonLink}
          className="ml-auto bg-[#d12128] hover:bg-[#b71b21] text-white text-sm font-semibold px-4 py-2 rounded"
        >
          {buttonText}
        </Link>
      </div>
    </section>
  );
}
