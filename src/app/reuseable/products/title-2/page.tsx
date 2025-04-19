"use client";

interface TitleProps {
  mainTitle: string;
  subTitle: string;
  content: string;
}

export default function Title2({ mainTitle, subTitle, content }: TitleProps) {
  return (
    <div className=" text-white py-[68px] px-[170px] w-full md:w-[821px] my-[200px] mx-auto ">
      {/* Heading */}
      <h3 className="text-3xl font-bold text-center ">
        {mainTitle} <span className="text-red-500 uppercase ">{subTitle}</span>
      </h3>
      <p className="text-center  mx-auto mt-2">
        {content}
      </p>
    </div>
  );
}2
