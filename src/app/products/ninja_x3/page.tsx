"use client";

import SpecificationSection, { SpecificationItem } from "@/app/reuseable/cables/Specification/page";
import CaseBanner from "@/app/reuseable/case/banner/page";
import NinjaSlider, { SlideContent } from "@/app/reuseable/case/slider/ninja-slider/page";
import CallToActionBanner from "@/app/reuseable/products/join-group/page";
import ProductSlider from "@/app/reuseable/products/product-slider/page";
import Title from "@/app/reuseable/products/title/page";

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


  // Here is sldier data
  const slides: SlideContent[] = [
    {
      image: '/case/Ninja-x3/slider/image.png',
      leftTexts: [
        'Tempered Glass Panel Showcases Custom RGB Lighting',
        'With High-Quality Hydraulic Bearing, Working Life Is Up To 20000 Hrs Under High-Speed Rotation Condition',
      ],
      rightTexts: [
        'Water-Cooling Installation Simplified For Both AIO And Custom Loop',
        'Adaptive Noise Reduction Optimizes Cooling And Noise Balance For Best Gaming Comfort',
      ],
    },
    {
      image: '/case/Ninja-x3/slider/image.png',
      leftTexts: [
        'Tempered Glass Panel Showcases Custom RGB Lighting',
        'With High-Quality Hydraulic Bearing, Working Life Is Up To 20000 Hrs Under High-Speed Rotation Condition',
      ],
      rightTexts: [
        'Water-Cooling Installation Simplified For Both AIO And Custom Loop',
        'Adaptive Noise Reduction Optimizes Cooling And Noise Balance For Best Gaming Comfort',
      ],
    },
    {
      image: '/case/Ninja-x3/slider/image.png',
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

    // 
    const sampleProducts = [
      { image: '/products/IRIS/Feature-slider/image-1.png' },
      { image: '/products/IRIS/Feature-slider/image-2.png' },
      { image: '/products/IRIS/Feature-slider/Background.png' },
    ];
    
const ninja_x3_page = () => {
  return (
    <div className="w-full md:w-[1440px] mx-auto">
      <CaseBanner
        bgImage="/case/Ninja-x3/banner.png"
        logo1="/logo.png"
        logo2="/case/Ninja-x3/ninja-x3.png"
        description={[
          "Beautiful LED Cooling System",

          "Crafted For The Dynamic Game Players",
        ]}
      />

      {/* Here is first heading title */}
      <div className="text-xl text-[#FFFFFF]">
        <Title
          mainTitle="TORTOX"
          subTitle="Ninja x3"
          content="The original Ninja was well known for being one of the best heatsink around. It has a special designed to give your build awesome LED visual effect just by a 3-button controller, which allow you adjust effect speed and mode , the only limitation is your imagination. The LED ring and fan blade are sharp made also add points on the install effect."
        />
      </div>
        
            {/*  slider  */}
            <NinjaSlider slides={slides} />
              {/* Join Group  */}
      <CallToActionBanner
        text="Over 1000's of gamers already using our products."
        buttonLabel="Join Our Group"
        buttonHref="/community"
      />
      {/* Specification section */}
      <SpecificationSection specifications={specs} />

    
         {/* Products slider */}
         <ProductSlider title="Other Products" products={sampleProducts} />
    </div>
  );
};

export default ninja_x3_page;
