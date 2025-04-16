'use client';

import Image from "next/image";

export interface PowerGridItem {
  title: string;
  description: string;
  image?: string;
  position: "left" | "right" | "center";
}

interface PowerGridProps {
  items: PowerGridItem[];
}

const PowerGrid: React.FC<PowerGridProps> = ({ items }) => {
  return (
    <section className="bg-black text-white py-10 px-4 md:px-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {items.map((item, index) => (
          <div key={index} className={`flex flex-col items-${item.position} gap-4`}>
            {item.image && (
              <Image
                src={item.image}
                alt={item.title}
                width={500}
                height={300}
                className="rounded-lg object-contain max-w-full h-auto"
              />
            )}

            <div className={`text-${item.position} space-y-2`}>
              <h3
                className={`text-lg font-semibold ${
                  index === 0 || index === 4 ? 'text-red-600' : 'text-white'
                }`}
              >
                {item.title}
              </h3>
              <p className="text-sm leading-relaxed">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PowerGrid;
