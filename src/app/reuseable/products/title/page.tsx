"use client";

interface TitleProps {
  mainTitle: string;
  subTitle: string;
  content: string;
}

export default function Title({ mainTitle, subTitle, content }: TitleProps) {
  return (
    <div className="bg-black text-white py-28 px-4 md:px-16">
      {/* Heading */}
      <h2 className="text-3xl font-bold text-center">
        {mainTitle} <span className="text-red-500">{subTitle}</span>
      </h2>
      <p className="text-center text-gray-400 max-w-3xl mx-auto mt-2">
        {content}
      </p>
    </div>
  );
}
