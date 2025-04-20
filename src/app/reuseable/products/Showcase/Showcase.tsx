import Image from 'next/image';
import { FC } from 'react';

interface ProductFeatureShowcaseProps {
  imageSrc: string;
  imageAlt: string;
  title: string;
  highlight: string;
  description: string;
  noteLine1: string;
  noteLine2: string;
}

const ProductFeatureShowcase: FC<ProductFeatureShowcaseProps> = ({
  imageSrc,
  imageAlt,
  title,
  highlight,
  description,
  noteLine1,
  noteLine2,
}) => {
  return (
    <section className="bg-black text-white py-16 px-4 md:px-16 ">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        <div className="w-full aspect-[1/1] flex items-center justify-center">
          <Image
            src={imageSrc}
            alt={imageAlt}
            width={512}
            height={512}
            className="w-full h-full object-contain"
          />
        </div>
        <div className="w-full aspect-[1/1] flex flex-col justify-center items-start">
          <h2 className="text-2xl md:text-3xl font-bold text-white">
            {title}{' '}
            <span className="text-red-500 ">{highlight}</span>
          </h2>
          <p
            className="mt-4 text-sm md:text-base leading-relaxed text-gray-300"
            dangerouslySetInnerHTML={{ __html: description }}
          />
          <p className="mt-4 text-sm md:text-base text-white">
            {noteLine1}
            <br />
            <span className="text-red-500 italic">{noteLine2}</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProductFeatureShowcase;
