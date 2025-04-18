"use client";

interface TitleProps {
  mainTitle: string;
  subTitle: string;
  content: string;
}

export default function Title({ mainTitle, subTitle, content }: TitleProps) {
  return (
    <div className=" text-white py-[68px] px-4 w-full md:w-[971px] mx-auto ">
      {/* Heading */}
      <h3 className="text-3xl font-bold text-center ">
        {mainTitle} <span className="text-red-500 uppercase ">{subTitle}</span>
      </h3>
      <p className="text-center text-gray-400  mx-auto mt-2">
        {content}
      </p>
    </div>
  );
}
