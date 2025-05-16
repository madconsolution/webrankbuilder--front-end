 'use client';

import Image from 'next/image';
import React from 'react';

interface CardData {
  type: 'single' | 'dual';
  mainImage: string;
  title: React.ReactNode;
  descriptionImage: string;
}

interface Resolution2SectionProps {
  cards: ReadonlyArray<CardData>;
}

const Resolution2Section: React.FC<Resolution2SectionProps> = ({ cards }) => {
  return (
    <section>
      <div className="mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {cards.map((card, index) => (
          <div
            key={index}
            className="rounded-[5rem] border border-[#E7000B] bg-[#000000] text-white flex flex-col justify-center items-center w-full max-w-[660px] mx-auto h-[796px] relative"
          >
            {card.type === 'dual' ? (
              <>
                <div className="relative flex items-center gap-8 -ml-[20%]">
                  <Image
                    src={card.mainImage}
                    alt={`main-${index}`}
                    width={285}
                    height={285}
                    className="w-[285px] h-[285px] object-contain"
                  />
                  <div className="mini-to-dp-text ">
                    {card.title}
                  </div>
                </div>
                <Image
                  src={card.descriptionImage}
                  alt="description"
                  width={654}
                  height={494}
                  className="w-[654px] h-[494px] object-contain -mb-[21%] -ml-[3%]"
                />
              </>
            ) : (
              <>
                <div className="relative w-[285px] h-[285px] flex">
                  <Image
                    src={card.mainImage}
                    alt={`main-${index}`}
                    width={285}
                    height={285}
                    className="h-full object-contain"
                  />
                </div>
                <div className=" text-center ">
                  {card.title}
                </div>
                <div className="bg-cover p-5">
                  <Image
                    src={card.descriptionImage}
                    alt="description"
                    width={477}
                    height={270}
                    className="bg-cover w-[477px] h-[270px] rounded-md object-cover"
                  />
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Resolution2Section;
