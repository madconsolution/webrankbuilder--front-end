"use client";

interface TitleProps {
  mainTitle: string;
  subTitle: string;
  content: string;
}

export default function Title2({ mainTitle, subTitle, content }: TitleProps) {
  return (
    <div className="text-white py-[68px] px-4 sm:px-[60px] md:px-[170px] w-full md:w-[921px] my-[100px] md:my-[200px] mx-auto">
      {/* Heading */}
      <h3 className="text-2xl sm:text-3xl font-bold text-center">
        {mainTitle} <span className="text-red-500 uppercase">{subTitle}</span>
      </h3>
      <p className="text-center mx-auto mt-2 text-sm sm:text-base">{content}</p>
    </div>
  );
}
