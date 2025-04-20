import { FC } from 'react';
import { FaStar, FaBalanceScale, FaCogs } from 'react-icons/fa';

interface TextSpecItem {
  label: string;
  value: string;
  highlight?: boolean;
}


export interface SpecificationItem {
  type: 'featured' | 'dimensions' | 'additional';
  items: (string | { label: string; value: string; highlight?: boolean })[];
}

interface SpecificationSectionProps {
  title?: string;
  specifications: SpecificationItem[];
}

const iconMap = {
  featured: <FaStar className="text-3xl mb-2" />,
  dimensions: <FaBalanceScale className="text-3xl mb-2" />,
  additional: <FaCogs className="text-3xl mb-2" />,
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
    <section className="bg-black text-white py-14 px-4 md:px-6">
      <h3 className="text-center text-5xl font-extrabold mb-14 uppercase tracking-wider">
        <span
          className="inline-block text-transparent"
          style={{
            WebkitTextStroke: '1px #E7000B',
            color: 'transparent',
          }}
        >
          {title}
        </span>
      </h3>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 text-sm md:text-base">
        {specifications.map((spec, idx) => (
          <div key={idx}>
            <div className="flex flex-col items-start md:items-center mb-4">
              <div className="text-white">{iconMap[spec.type]}</div>
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
