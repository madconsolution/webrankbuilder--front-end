import Image from 'next/image';
import { FC } from 'react';

interface FeatureBlockProps {
  imageSrc: string;
  imageAlt: string;
  title: string;
  highlight: string;
  description: string;
  note?: string;
  imageLeft?: boolean;
}

const FeatureBlock: FC<FeatureBlockProps> = ({
  imageSrc,
  imageAlt,
  title,
  highlight,
  description,
  note,
  imageLeft = true,
}) => {
  return (
    <section className="bg-black text-white py-16 px-4 md:px-16 lg:px-24">
      <div
        className={`max-w-7xl mx-auto grid gap-10 lg:grid-cols-2 items-center ${
          imageLeft ? '' : 'lg:[grid-template-columns:repeat(2,minmax(0,1fr))] lg:[direction:rtl]'
        }`}
      >
        <div className="aspect-[1/1] w-full max-w-md mx-auto ${
          imageLeft ? '' : 'lg:[direction:ltr]'}">
          <Image
            src={imageSrc}
            alt={imageAlt}
            width={512}
            height={512}
            className="w-full h-full object-contain"
          />
        </div>
        <div className="w-full max-w-xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold">
            {title}{' '}
            <span className="text-red-500">{highlight}</span>
          </h2>
          <p
            className="mt-4 text-sm md:text-base leading-relaxed text-gray-300"
            dangerouslySetInnerHTML={{ __html: description }}
          />
          {note && (
            <p className="mt-4 text-sm md:text-base italic text-[#CD2122]">
              {note}
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default FeatureBlock;