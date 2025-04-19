"use client";

import Image from "next/image";
import React from "react";

type Position = "left-1" | "left-2" | "right-1" | "right-2";

type Feature = {
  title: string;
  highlight: string;
  description: string;
  position: Position;
  icon: string; // path to the small image
};

type Props = {
  imageSrc: string;
  features?: Feature[]; // ✅ make features optional for safety
};

const alignment: Record<Position, string> = {
  "left-1": "items-end text-right",
  "left-2": "items-end text-right",
  "right-1": "items-start text-left",
  "right-2": "items-start text-left",
};

const AngleFeatureSectionWithIcons: React.FC<Props> = ({ imageSrc, features = [] }) => {
  return (
    <section className="relative bg-black py-16 px-4">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-4 items-center relative">
        {/* Left Side */}
        <div className="flex flex-col justify-between h-full gap-32">
          {features
            .filter((f) => f.position.startsWith("left"))
            .map((feature) => (
              <div
                key={feature.title}
                className={`flex flex-col ${alignment[feature.position]} max-w-xs relative space-y-2`}
              >
                <Image
                  src={feature.icon}
                  alt={feature.title}
                  width={50}
                  height={50}
                  className="mb-2 object-contain"
                />
                <h3 className="text-white font-semibold uppercase leading-snug">
                  <span className="text-red-600">{feature.highlight}</span>{" "}
                  {feature.title.replace(feature.highlight, "")}
                </h3>
                <p className="text-white text-sm">{feature.description}</p>
              </div>
            ))}
        </div>

        {/* Center Image */}
        <div className="flex justify-center relative z-10">
          <Image
            src={imageSrc}
            alt="Product"
            width={300}
            height={400}
            className="object-contain"
          />
        </div>

        {/* Right Side */}
        <div className="flex flex-col  h-full gap-32 ">
          {features
            .filter((f) => f.position.startsWith("right"))
            .map((feature) => (
              <div
                key={feature.title}
                className={`flex flex-col ${alignment[feature.position]} max-w-xs relative space-y-2`}
              >
                <Image
                  src={feature.icon}
                  alt={feature.title}
                  width={448}
                  height={550}
                  className="mb-2 object-contain"
                />
                <h3 className="text-white font-semibold uppercase leading-snug">
                  <span className="text-red-600">{feature.highlight}</span>{" "}
                  {feature.title.replace(feature.highlight, "")}
                </h3>
                <p className="text-white text-sm">{feature.description}</p>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default AngleFeatureSectionWithIcons;
