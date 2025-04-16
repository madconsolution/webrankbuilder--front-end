'use client';

import Image from "next/image";

interface PowerGridItem {
  title: string;
  description: string;
  image: string;
}

interface PowerGridProps {
  items: PowerGridItem[]; // expecting 3 items
}

const PowerGrid: React.FC<PowerGridProps> = ({ items }) => {
  return (
    <section className="bg-black text-white py-16 px-4 md:px-16">
      <div className="space-y-20">
        {items.map((item, index) => {
          const isImageRight = index % 2 === 0; // row 1 and 3: image on right
          return (
            <div
              key={index}
              className={`flex flex-col md:flex-row ${
                isImageRight ? '' : 'md:flex-row-reverse'
              } items-center gap-8 md:gap-16`}
            >
              {/* Text */}
              <div className="w-full md:w-1/2 space-y-3 text-left">
                <h3 className="text-xl font-semibold text-red-600">{item.title}</h3>
                <p className="text-sm leading-relaxed whitespace-pre-line">{item.description}</p>
              </div>

              {/* Image */}
              <div className="w-full md:w-1/2">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={500}
                  height={300}
                  className="rounded-lg object-contain w-full h-auto"
                />
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default PowerGrid;
