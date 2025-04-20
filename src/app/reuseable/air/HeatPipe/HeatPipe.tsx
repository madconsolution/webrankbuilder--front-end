"use client";

import Image from "next/image";
import React from "react";

type Position = "left-1" | "left-2" | "right-1" | "right-2";

type Feature = {
  title: string;
  highlight: string;
  description: string;
  position: Position;
  icon: string;
};

type Props = {
  imageSrc: string;
  features?: Feature[];
};

const positionStyles: Record<Position, string> = {
  "left-1": "top-[5%] left-0 items-end text-right",
  "left-2": "top-[60%] left-0 items-end text-right",
  "right-1": "top-[5%] right-0 items-start text-left",
  "right-2": "top-[60%] right-0 items-start text-left",
};

const AngleFeatureSectionWithIcons: React.FC<Props> = ({ imageSrc, features = [] }) => {
  return (
    <section className="relative w-full max-w-[1205px] mx-auto bg-black py-20 md:py-32 px-2 sm:px-4 overflow-hidden">
      <div className="relative h-[500px] sm:h-[600px] flex justify-center items-center transition-transform duration-300 ease-in-out">
        {/* Product Image */}
        <div className="absolute left-1/2 top-[60%] -translate-x-1/2 -translate-y-1/2 z-10 w-[260px] sm:w-[360px] md:w-[448px] h-[340px] sm:h-[480px] md:h-[550px]">
          <Image src={imageSrc} alt="Product" fill className="object-contain" />
        </div>

        {/* Feature Items */}
        {features.map((feature) => {
          const isTop = feature.position.endsWith("1");

          return (
            <div
              key={feature.title}
              className={`absolute w-60 sm:w-64 md:w-72 flex flex-col ${positionStyles[feature.position]}`}
            >
              {isTop && (
                <>
                  <h6 className="text-white font-bold uppercase text-xs sm:text-sm md:text-base leading-tight sm:leading-snug">
                    <span className="text-red-600">{feature.highlight}</span>{" "}
                    {feature.title.replace(feature.highlight, "")}
                  </h6>
                  <div className="mb-1 sm:mb-2 border-2 sm:border-4 border-red-600 p-2 sm:p-3 rounded-md bg-black">
                    <p className="text-white text-xs sm:text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </>
              )}

              {/* Icon */}
              <div className="flex items-center mt-1 mb-1 sm:my-2">
                <Image
                  src={feature.icon}
                  alt={feature.title}
                  width={60}
                  height={18}
                  className="sm:w-[90px] sm:h-auto md:w-[110px]"
                />
              </div>

              {!isTop && (
                <>
                  <div className="mt-1 sm:mt-2 border-2 sm:border-4 border-red-600 p-2 sm:p-3 rounded-md bg-black">
                    <p className="text-white text-xs sm:text-sm">{feature.description}</p>
                  </div>
                  <h6 className="text-white uppercase text-xs sm:text-sm md:text-base mt-1">
                    <span className="text-red-600">{feature.highlight}</span>{" "}
                    {feature.title.replace(feature.highlight, "")}
                  </h6>
                </>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default AngleFeatureSectionWithIcons;
