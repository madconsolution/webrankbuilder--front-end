import Image from "next/image";

interface PowerGridItem {
  title: string;
  title2?: string;
  description: string;
  description2?: string;
  image: string;
}

interface PowerGridProps {
  items: PowerGridItem[]; // expecting 3 items
}

const PowerGrid: React.FC<PowerGridProps> = ({ items }) => {
  return (
    <section className="bg-black w-full md:w-[1300px] mx-auto text-white py-16 px-4 md:px-16">
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

                {item.title2 && (
                  <h4 className="text-lg font-semibold text-red-500 mt-6">{item.title2}</h4>
                )}
                {item.description2 && (
                  <p className="text-sm leading-relaxed whitespace-pre-line">
                    {item.description2}
                  </p>
                )}
              </div>

              {/* Image */}
              <div className="w-full md:w-1/2">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={500}
                  height={400}
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
