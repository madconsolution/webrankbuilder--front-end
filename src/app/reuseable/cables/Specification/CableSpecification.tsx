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



const CableSpecificationSection: FC<SpecificationSectionProps> = ({
  title = 'SPECIFICATION',
  specifications,
}) => {
  return (
    <section className=" text-white py-14 px-4 md:px-20 text-center">
    <h1 className=" mb-14">
  <span
    className="   font-[700] text-[100px] leading-[40px] tracking-[0%] text-center align-middle  font-['Open_Sans']"
    style={{
      WebkitTextStroke: '1px #E7000B',
      color: 'transparent',
   
    }}
  >
    {title}
  </span>
</h1>


      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 ">
        {specifications.map((spec, idx) => (
          <div key={idx}>
       

            <ul className="font-[600] space-y-4 text-start text-[30px] leading-[100%] tracking-[0%]  align-middle  font-['Open_Sans']">
              {spec.items.map((item, index) => {
                if (typeof item === 'string') {
                  return <p key={index}>{item}</p>;
                } else {
                  return (
                    <p key={index}>
                      <span>{item.label}:</span>{' '}
                      {item.highlight ? (
                        <span>{item.value}</span>
                      ) : (
                        item.value
                      )}
                    </p>
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

export default CableSpecificationSection;
