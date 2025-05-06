import { FC } from 'react';
import Image from 'next/image';

export interface SpecificationItem {
  type: 'featured' | 'dimensions' | 'additional';
  items: (string | { label: string; value: string; highlight?: boolean })[];
}

interface SpecificationSectionProps {
  title?: string;
  specifications: SpecificationItem[];
}

const iconMap = {
  featured: '/case/Arcus/specification/icon-1.png',
  dimensions: '/case/Arcus/specification/icon-2.png',
  additional: '/case/Arcus/specification/icon-3.png',
};

const sectionTitleMap = {
  featured: 'Featured',
  dimensions: 'Dimensions And Weight',
  additional: 'Additional Features',
};

const SpecificationCheir: FC<SpecificationSectionProps> = ({
  title = 'SPECIFICATION',
  specifications,
}) => {
  return (
    <section className="text-white py-14 px-4  bg-black">
      {/* Title */}
      <h6 className="mb-14 ">
        <span
          className="specification-cheir md:ps-16"
          style={{
            WebkitTextStroke: '2px #E7000B',
            color: 'transparent',
          
          }}
        >
          {title}
        </span>
      </h6>

      {/* Grid layout */}
      <div className="w-full px-[65px]  mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 text-sm md:text-base">
        {specifications.map((spec, idx) => (
          <div key={idx} className="flex flex-col gap-4">
            {/* Icon and Heading */}
            <div className="flex  items-center gap-2">
              <Image
                src={iconMap[spec.type]}
                alt={`${spec.type} icon`}
                width={50}
                height={50}
              />
              <h4 className="font-semibold text-lg">
                {sectionTitleMap[spec.type]}
              </h4>
            </div>

            {/* Description List */}
         <div className="w-full px-[65px]  grid grid-cols-1 ">
       
         <ul className="space-y-2 list-disc ">
              {spec.items.map((item, index) => {
                if (typeof item === 'string') {
                  return <li  key={index}>{item}</li>;
                } else {
                  return (
                    <li key={index}>
                      <span className="">{item.label}:</span>{' '}
                      {item.highlight ? (
                        <span className="text-white font-bold ">
                          {item.value}
                        </span>
                      ) : (
                        item.value
                      )}
                    </li>
                  );
                }
              })}
            </ul>
         </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SpecificationCheir;
