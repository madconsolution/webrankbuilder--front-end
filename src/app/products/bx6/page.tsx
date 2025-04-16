"use client";

import SpecificationSection from "@/app/reuseable/cables/Specification/page";
import CaseBanner from "@/app/reuseable/case/banner/page";
import NinjaSlider, { SlideContent } from "@/app/reuseable/case/slider/ninja-slider/page";
import CallToActionBanner from "@/app/reuseable/products/join-group/page";
import Title from "@/app/reuseable/products/title/page";

// Here is specification date
const specs = [
  { label: "Model", value: "USB C To HDMI" },
  { label: "Built In Conversion Chip", value: "Yes" },
  { label: "PVC Jackets", value: "Yes" },
  { label: "Shell Type", value: "Aluminium" },
  { label: "Max Resolution", value: "4k@60Hz" },
  { label: "Compatibility", value: "Smartphone, TV, Projector" },
];

  // Here is sldier data
  const slides: SlideContent[] = [
    {
      image: '/case/Ninja-x/slider/image.png',
      leftTexts: [
        'Tempered Glass Panel Showcases Custom RGB Lighting',
        'With High-Quality Hydraulic Bearing, Working Life Is Up To 20000 Hrs Under High-Speed Rotation Condition',
      ],
      rightTexts: [
        'Water-Cooling Installation Simplified For Both AIO And Custom Loop',
        'Adaptive Noise Reduction Optimizes Cooling And Noise Balance For Best Gaming Comfort',
      ],
    },
  
  ];  

const bx7_page = () => {
  return (
    <div className="w-full md:w-[1440px] mx-auto">
      <CaseBanner
        bgImage="/power/bx6/banner.png"
        logo1="/logo.png"
        logo2="/power/bx6/bx6.png"
        description={[
          "RGB LED LIGHTING FAN",

          "Crafted For The Dynamic Game Players",
        ]}
      />

      {/* Here is first heading title */}
      <div className="text-xl text-[#FFFFFF]">
        <Title
          mainTitle="TORTOX"
          subTitle="bx600"
          content="Simplest and most powerful PSU design allowing you to handle your many devices without worry. No matter what combination of devices and components you have, our PSUs have plenty of power to handle all your needs. Whether we are using Single or Multi rail design, it will always function the same way, easy and simple."
        />
      </div>
       
          {/*  slider  */}
          <NinjaSlider slides={slides} />
      {/* Specification section */}
      <SpecificationSection specifications={specs} />

      {/* Join Group  */}
      <CallToActionBanner
        text="Over 1000's of gamers already using our products."
        buttonLabel="Join Our Group"
        buttonHref="/community"
      />
    </div>
  );
};

export default bx7_page;
