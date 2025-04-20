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
  subTitle?: string;
}

const FeatureBlock: FC<FeatureBlockProps> = ({
  imageSrc,
  imageAlt,
  title,
  highlight,
  subTitle,
  description,
  note,
  imageLeft = true,
}) => {
  return (
    <section className=" text-white py-16 px-4 md:px-16 lg:px-24">
      <div
        className={`max-w-7xl mx-auto grid gap-10 lg:grid-cols-2 items-center ${
          imageLeft ? '' : 'lg:[grid-template-columns:repeat(2,minmax(0,1fr))] lg:[direction:rtl]'
        }`}
      >
        <div className={`w-full max-w-md mx-auto ${imageLeft ? '' : 'lg:[direction:ltr]'}`}>
          <Image
            src={imageSrc}
            alt={imageAlt}
            width={512}
            height={512}
            className="w-full h-full object-contain"
          />
        </div>
        <div className="text-left">
          <h3>
            {title}{' '}
            <span className="text-red-500">{highlight}</span>
          </h3>
          <p
            className="mt-8"
            dangerouslySetInnerHTML={{ __html: description }}
          />
          {note && (
            <div className="mt-4">
              <span>
                {note}
              </span>
              {subTitle && (
                <span className="block text-sm text-[#CD2122] mt-1">
                  {subTitle}
                </span>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default FeatureBlock;
