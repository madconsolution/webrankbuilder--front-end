"use client";

interface TitleProps {
  mainTitle: string;
  subTitle: string;
  content: string;
}

export default function IrisTitle({ mainTitle, subTitle, content }: TitleProps) {
  return (
    <div className="relative flex items-center justify-center w-full h-screen md:h-[810px]">
      {/* Background Image from Public Folder */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-50 z-0"
        style={{
          backgroundImage: "url('/products/IRIS/title-bg.png')",
        }}
      ></div>

      {/* Foreground Content */}
      <div className="relative z-10 text-white  w-full md:w-[810px] mx-auto">
       <div className="  text-[#FFFFFF] font-[Montserrat] font-bold text-[40px] leading-[40px] tracking-[0] text-center align-middle">
        {mainTitle} <span className="text-[#CD2122] ">{subTitle}</span>
      </div>
      <span className="text-[30px] leading-[100%] font-normal text-center align-middle font-['Open_Sans']">{content}</span>
      </div>
    </div>
  );
}
