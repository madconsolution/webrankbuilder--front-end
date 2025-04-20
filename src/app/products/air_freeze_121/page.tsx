"use client";
import CaseBanner from "@/app/reuseable/case/banner/page";


import CallToActionBanner from "@/app/reuseable/products/join-group/page";
import ProductSlider from "@/app/reuseable/products/product-slider/page";
import Title from "@/app/reuseable/products/title/page";

import AngleFeatureSectionWithIcons from "@/app/reuseable/air/HeatPipe/paget";
import AutoSlider from "@/app/reuseable/products/overview/page";
import SpecificationSection, { SpecificationItem } from "@/app/reuseable/cables/Specification/page";

import FanBracketSection from "@/app/reuseable/air/FanBracket/page";

  // here is slider
  const sampleProducts = [
    { image: '/products/IRIS/Feature-slider/image-1.png' },
    { image: '/products/IRIS/Feature-slider/image-2.png' },
    { image: '/products/IRIS/Feature-slider/Background.png' },
  ];

  // Here is specification date
  export const specs: SpecificationItem[] = [
    {
      type: 'featured',
      items: [
        'Aorus fan no need an extra controller for rainbow effect',
        'Stand out with vibrant RGB lighting',
        'Custom engineered for superior cooling',
        'Minimize noise or maximize airflow',
        'Stay quiet, run cool!',
      ],
    },
    {
      type: 'dimensions',
      items: [
        { label: 'Voltage', value: 'DC 12V' },
        { label: 'Fan Dimensions', value: '120 x 120 x 25mm' },
        { label: 'Fan Speed', value: '800~2000 R.P.M' },
        { label: 'Air Flow', value: '18~25.4 CFM' },
        { label: 'Static Pressure', value: '0.55~1.51 mm-H2O' },
        { label: 'Noise Level', value: '≤13.5~25.8 dB(A)' },
      ],
    },
    {
      type: 'additional',
      items: [
        'Custom engineered for superior cooling. Minimize noise or maximize airflow',
        { label: 'Bearing Type', value: 'Hydraulic Bearing', highlight: true },
        { label: 'Connector', value: '2510–4Pin' },
        { label: 'Lead Wire Length', value: '300mm', highlight: true },
        { label: 'LED', value: 'Rainbow 16 LEDs', highlight: true },
      ],
    },
  ];
  
  // here is slider data
  const products = [
    {
      title: "3D Reflection front panel with Elegant honeycomb design",
      description: "A sleek and stylish design for maximum airflow and performance.",
      image: "/coolers/freeze_121/slider/image-1.png",
    },
    {
      title: "Four 120mm Tortox Dual loop Case fans, Aura Controller & Remote",
      description: "Optimized for cooling with customizable lighting effects.",
      image: "/coolers/freeze_121/slider/image-2.png",
    },
    {
      title: "3D Reflection front panel with Elegant honeycomb design",
      description: "A sleek and stylish design for maximum airflow and performance.",
      image: "/coolers/freeze_121/slider/image-1.png",
    },
    {
      title: "Four 120mm Tortox Dual loop Case fans, Aura Controller & Remote",
      description: "Optimized for cooling with customizable lighting effects.",
      image: "/coolers/freeze_121/slider/image-2.png",
    },
  
  ];
  
const air_freeze_121_page = () => {
  return (
    <div className="w-full md:w-[1440px] mx-auto">
      <CaseBanner
        bgImage="/coolers/freeze_120/banner.png"
        logo1="/logo.png"
        logo2="/coolers/freeze_120/freeze_120.png"
        description={[
           "COMPUTER CASE COOLING FAN",
           "Crafted For The Dynamic Game Players",
        ]}
      />
        
      {/* Here is first heading title */}
      <div className="text-xl text-[#FFFFFF]">
        <Title
          mainTitle="TORTOX"
          subTitle="AIR FREEZE 120"
          content="Air Freeze 120 keeps a pure aluminium base combining with 4 pure copper heat pipes, efficient heat dissipation. Solves the high temperature problems, farewell game crashing. Dual 15 LEDs ultra-quiet fan. Hydraulic bearing, reduce the frictional resistance, effectively lower the noise. Design for multiple platforms, simple installation."
        />
      </div>

      {/* HeadPipe  */}
      <AngleFeatureSectionWithIcons
  imageSrc="/coolers/freeze_121/HeadPipe/image.png"
  features={[
    {
      title: "COPPER HEATPIPES",
      highlight: "COPPER",
      description:
        "4 pure copper heatpipe. The evaporation and condensation of the liquid in the fully enclosed vacuum tube made high performance heat transfer.",
      position: "left-1",
      icon: "/coolers/freeze_121/HeadPipe/left-1.png",
    },
    {
      title: "ALUMINIUM HEATSINKS",
      highlight: "ALUMINIUM",
      description:
        "High properties of heat dissipation, increase density and enlarge heat dissipation area and tightly coupled to the heatpipes.",
      position: "left-2",
      icon: "/coolers/freeze_121/HeadPipe/left-2.png",
    },
    {
      title: "HEATPIPE DIRECT CONTACT BASE",
      highlight: "HEATPIPE",
      description:
        "Copper pipe direct contact and aluminium base, with smooth cutting process, seamless connection with CPU.",
      position: "right-1",
      icon: "/coolers/freeze_121/HeadPipe/right-1.png",
    },
    {
      title: "UNIVERSAL PLATFORM",
      highlight: "UNIVERSAL",
      description:
        "High toughness steel, double buckle design, supports most Intel and AMD CPUs.",
      position: "right-2",
      icon: "/coolers/freeze_121/HeadPipe/right-2.png",
    },
  ]}
/>

<AutoSlider
  products={products}
  mainTitle="TORTOX"
  subTitle="IRIS"
  content="Tortox Iris re-engineered designs and features to offer the best balance of performance and with honeycomb design front panel inspired open fascia that is specifically created take as much air in to your system as possible. The core of the TORTOX IRIS is its clean design, well balanced between a perfectly organised interior structure and the sleek exterior design."
/>
 
          {/* Join Group  */}
      <CallToActionBanner
        text="Over 1000's of gamers already using our products."
        buttonLabel="Join Our Group"
        buttonHref="/community"
      />
           <FanBracketSection/>

               {/* Specification section */}
      <SpecificationSection specifications={specs} />
             {/* Products slider */}
             <ProductSlider title="Other Products" products={sampleProducts} />
    </div>
  );
};

export default air_freeze_121_page;
