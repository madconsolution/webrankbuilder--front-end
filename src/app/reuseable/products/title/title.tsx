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
      <div className=" text-[#FFFFFF] font-[700]   font-[Montserrat]  text-[26px] leading-[40px] tracking-[0] text-center align-middle">
        {mainTitle} <span className="text-[#CD2122] ">{subTitle}</span>
      </div>
      <p className="text-[#FFFFFF] md:w-[1120px] mx-auto font-[Montserrat] font-[400] text-[18px] leading-[30px] tracking-[0] text-center align-middle  mt-2 ">
        {content}
      </p>
    </div>
  );
}
