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

// Keep fixed positioning values
const positionStyles: Record<Position, string> = {
  "left-1": "top-[15%] left-0 items-end text-right",
  "left-2": "top-[60%] left-0 items-end text-right",
  "right-1": "top-[15%] right-0 items-start text-left",
  "right-2": "top-[60%] right-0 items-start text-left",
};

const AngleFeatureSectionWithIcons: React.FC<Props> = ({ imageSrc, features = [] }) => {
  return (
    <section className="relative w-full max-w-[1205px] mx-auto bg-black py-32 px-4 overflow-hidden">
      {/* Scaling wrapper */}
      <div className="relative origin-top-left scale-[0.85] sm:scale-[0.9] md:scale-100 h-[600px] md:h-[600px] flex justify-center items-center transition-transform duration-300 ease-in-out">
        {/* Center Product Image */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 w-[448px] h-[550px]">
          <Image
            src={imageSrc}
            alt="Product"
            fill
            className="object-contain"
          />
        </div>

        {/* Feature Blocks */}
        {features.map((feature) => {
          const isTop = feature.position.endsWith("1");

          return (
            <div
              key={feature.title}
              className={`absolute w-72 max-w-sm flex flex-col ${positionStyles[feature.position]}`}
            >
              {/* Top Text */}
              {isTop && (
                <div className="mb-2 border-4 border-red-600 p-3 rounded-md bg-black">
                  <h3 className="text-white font-bold uppercase text-base leading-snug">
                    <span className="text-red-600">{feature.highlight}</span>{" "}
                    {feature.title.replace(feature.highlight, "")}
                  </h3>
                  <p className="text-white text-sm leading-relaxed">{feature.description}</p>
                </div>
              )}

              {/* Icon */}
              <div className="flex items-center justify-center w-full">
                <Image
                  src={feature.icon}
                  alt={feature.title}
                  width={100}
                  height={48}
                  className="object-contain"
                />
              </div>

              {/* Bottom Text */}
              {!isTop && (
                <div className="mt-2 border-4 border-red-600 p-3 rounded-md bg-black">
                  <h3 className="text-white font-bold uppercase text-base leading-snug">
                    <span className="text-red-600">{feature.highlight}</span>{" "}
                    {feature.title.replace(feature.highlight, "")}
                  </h3>
                  <p className="text-white text-sm leading-relaxed">{feature.description}</p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default AngleFeatureSectionWithIcons;
