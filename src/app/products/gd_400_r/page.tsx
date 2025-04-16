"use client";

import SpecificationSection from "@/app/reuseable/cables/Specification/page";
import CaseBanner from "@/app/reuseable/case/banner/page";
import NinjaSlider, { SlideContent } from "@/app/reuseable/case/slider/ninja-slider/page";
import PowerGrid from "@/app/reuseable/power/power-grid/page";
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
      image: '/power/bx6/slider/image.png',
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

  //   Here is power-grid data
  const powerItems = [
    {
      title: "Safety And Protection BX700",
      description: `Get economical power today with the Tortox Power Supply with high-efficiency power supply solution. Featuring 80 PLUS® BRONZE certification, a quiet 120 mm DBB fan, All Japanese capacitors and Universal Input with Active Power Factor Correction, Tortox gives you a cooler, quieter system, all powered by Continuous Power.`,
      image: "/power/bx7/grid/image-1.png",
    },
    {
      title: "80-Plus Bronze Certified",
      description: `Efficiency up to 85% power conversion for reducing your electricity bill.`,
      title2: "Support MULTI-GPU Technology",
      description2: `Support PCI Express 3.0 graphic cards with 6+2pin PCI-E connectors`,
      image: "/power/bx7/grid/image-2.png",
    },
    {
      title: "Optimized Over Current Protections",
      description: `Your components will operate stably and protected from any harm.`,
      image: "/power/bx7/grid/image-3.png",
      title2: "Impressive Operation At 40°C",
      description2: `Powerful performance at 40°C/104°F ambient temperature.`,
  
    },
  ];

const gd_400_r_page = () => {
  return (
    <div className="w-full md:w-[1440px] mx-auto">
      <CaseBanner
        bgImage="/power/bx7/banner.png"
        logo1="/logo.png"
        logo2="/power/bx7/bx7.png"
        description={[
          "RGB LED LIGHTING FAN",

          "Crafted For The Dynamic Game Players",
        ]}
      />

      {/* Here is first heading title */}
      <div className="text-xl text-[#FFFFFF]">
        <Title
          mainTitle="TORTOX"
          subTitle="bx700"
          content="Simplest and most powerful PSU design allowing you to handle your many devices without worry. No matter what combination of devices and components you have, our PSUs have plenty of power to handle all your needs. Whether we are using Single or Multi rail design, it will always function the same way, easy and simple."
        />
      </div>
            {/* Grid  */}
            <PowerGrid items={powerItems} />
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

export default gd_400_r_page;
