"use client";

interface TitleProps {
  mainTitle: string;
  subTitle: string;
  content: string;
}

export default function Title({ mainTitle, subTitle, content }: TitleProps) {
  return (
    <div className="  py-[68px] px-4 w-full md:w-[1261px] mx-auto ">
      {/* Heading */}
      <div className=" adapter-title">
        {mainTitle} <span className="text-red-500 uppercase ">{subTitle}</span>
      </div>
      <p className="text-center text-[#FFFFFFCC]  mt-2 px-10 ">
        {content}
      </p>
    </div>
  );
}
