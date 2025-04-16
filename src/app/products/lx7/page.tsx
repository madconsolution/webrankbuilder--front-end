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
      image: '/power/lx7/slider/image.png',
      leftTexts: [
        'suitable for high-end computer configuration, support Intel, AMD full range',
    
        '12cm hydraulic bearing fan, quiet and durable, large air volume',
      ],
      rightTexts: [
        'Dual magnetic ring magnetic amplifier circuit, high frequency low resistance filter capacitor, Ensure that the current is pure and stable',
        'circuit design, with overvoltage, overcurrent, overload, undervoltage, short circuit, Light protection',
      ],
    },
  
  ];  

//   Here is power-grid data
  const powerItems = [
    {
      title: "Safety And Protection LX700",
      description: `• 0.6mm Sec Black Baking Varnish
  • Smart Thermal Control Circuit
  • High Voltage Electrolytic Capacitor
  • Intel/AMD Compatible
  • Protection from Overvoltage, Undervoltage, Short Circuit
  • 1Oz Copper Foil Circuit Board`,
      image: "/power/lx7/grid/image-1.png",
    },
    {
      title: "High Power Output",
      description: `With a power output of, this PC power supply can handle even the most power-hungry gaming rigs and servers`,
      title2: "Quiet Operation",
      description2: `The fan ensures quiet operation, making it ideal for use in noise-sensitive environments.`,
      image: "/power/lx7/grid/image-2.png",
    },
    {
      title: "Non-modular Design",
      description: `The non-modular design of this power supply ensures that all cables are permanently connected, reducing clutter and improving airflow in your vehicle.`,
      image: "/power/lx7/grid/image-3.png",
      title2: "Multiple Connectors",
      description2: `With multiple connectors for CPU power, SATA ports and graphics cards, this power supply is compatible with a wide range of desktop computers`,
  
    },
  ];
  
  
  
const lx7_page = () => {
  return (
    <div className="w-full md:w-[1440px] mx-auto">
      <CaseBanner
        bgImage="/power/lx7/banner.png"
        logo1="/logo.png"
        logo2="/power/lx7/lx7.png"
        description={[
          "RGB LED LIGHTING FAN",

          "Crafted For The Dynamic Game Players",
        ]}
      />

      {/* Here is first heading title */}
      <div className="text-xl text-[#FFFFFF]">
        <Title
          mainTitle="TORTOX"
          subTitle="lx700"
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

export default lx7_page;
