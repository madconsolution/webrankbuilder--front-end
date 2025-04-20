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

const SpecificationSection: FC<SpecificationSectionProps> = ({
  title = 'SPECIFICATION',
  specifications,
}) => {
  return (
    <section className=" text-white py-14 px-4 md:px-20">
    <h1 className=" mb-14">
  <span
    className="uppercase text-6xl  "
    style={{
      WebkitTextStroke: '1px #E7000B',
      color: 'transparent',
      letterSpacing: '0.1em',
    }}
  >
    {title}
  </span>
</h1>


      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 text-sm md:text-base">
        {specifications.map((spec, idx) => (
          <div key={idx}>
            <div className="flex flex-col items-start  mb-4">
              <Image
                src={iconMap[spec.type]}
                alt={`${spec.type} icon`}
                width={50}
                height={50}
                className="mb-2"
              />
              <h4 className="font-semibold text-lg mt-1">
                {sectionTitleMap[spec.type]}
              </h4>
            </div>

            <ul className="space-y-2 list-disc list-inside md:list-outside md:pl-5">
              {spec.items.map((item, index) => {
                if (typeof item === 'string') {
                  return <li key={index}>{item}</li>;
                } else {
                  return (
                    <li key={index}>
                      <span className="font-semibold">{item.label}:</span>{' '}
                      {item.highlight ? (
                        <span className="text-white font-bold">{item.value}</span>
                      ) : (
                        item.value
                      )}
                    </li>
                  );
                }
              })}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SpecificationSection;
