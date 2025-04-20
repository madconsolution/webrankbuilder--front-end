import React from "react";
import Link from "next/link";

interface CallToActionBannerProps {
  text: string;
  buttonLabel: string;
  buttonHref: string;
  backgroundColor?: string;
  textColor?: string;
  borderColor?: string;
}

const CallToActionBanner: React.FC<CallToActionBannerProps> = ({
  text,
  buttonLabel,
  buttonHref,
  backgroundColor = "bg-red-700",
  textColor = "text-white",
  borderColor = "border-white",
}) => {
  return (
    <section className={`${backgroundColor} py-4 px-6`}>
      <div className="max-w-7xl mx-auto flex justify-between items-center flex-wrap gap-4">
        <p className={`text-sm md:text-base ${textColor}`}>{text}</p>
        <Link
          href={buttonHref}
          className={`border ${borderColor} ${textColor} text-sm px-4 py-2 rounded hover:bg-white hover:text-black transition`}
        >
          {buttonLabel}
        </Link>
      </div>
    </section>
  );
};

export default CallToActionBanner;
