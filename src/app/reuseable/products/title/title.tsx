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
      <div className="  text-[#FFFFFF] font-[Montserrat] font-bold text-[40px] leading-[40px] tracking-[0] text-center align-middle">
        {mainTitle} <span className="text-[#CD2122] ">{subTitle}</span>
      </div>
      <p className="text-[#FFFFFF] font-[Montserrat] font-bold text-[18px] leading-[30px] tracking-[0] text-center align-middle  mt-2 ">
        {content}
      </p>
    </div>
  );
}
