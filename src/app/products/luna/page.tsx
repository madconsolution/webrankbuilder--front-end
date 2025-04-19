'use client';

import SpecificationSection from "@/app/reuseable/cables/Specification/page";
import CaseBanner from "@/app/reuseable/case/banner/page";
import NinjaSlider, { SlideContent } from "@/app/reuseable/case/slider/ninja-slider/page";
import CallToActionBanner from "@/app/reuseable/products/join-group/page";
import ProductSlider from "@/app/reuseable/products/product-slider/page";
import Title2 from "@/app/reuseable/products/title-2/page";
import Title from "@/app/reuseable/products/title/page";

// Here is specification date
const specs = [
    { label: 'Model', value: 'USB C To HDMI' },
    { label: 'Built In Conversion Chip', value: 'Yes' },
    { label: 'PVC Jackets', value: 'Yes' },
    { label: 'Shell Type', value: 'Aluminium' },
    { label: 'Max Resolution', value: '4k@60Hz' },
    { label: 'Compatibility', value: 'Smartphone, TV, Projector' },
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
  const sampleProducts = [
    { image: '/products/IRIS/Feature-slider/image-1.png' },
    { image: '/products/IRIS/Feature-slider/image-2.png' },
    { image: '/products/IRIS/Feature-slider/Background.png' },
  ];
  
const luna_page = () => {
  return (
    <div className="w-full md:w-[1440px] mx-auto">
   <CaseBanner
      bgImage="/case/luna/banner.png"
      logo1="/logo.png"
      logo2="/case/Luna/luna.png"
      description={[
        'Engineered for Durability ',
        '',
        'Stuffed with Features',
      ]}
    />
     
       {/* Here is first heading title */}
            <div className="text-xl text-[#FFFFFF]">
             <Title
               mainTitle="TORTOX"
               subTitle="LUNA"
               content="The design is user friendly interface: a 3pin and Molex Pin two interface design, compatible with any motherboard, power supply plug or other devices. Super Silent PC Heat Sink: all copper motor and rugged. hydraulic press bearings with self-lubricating antifriction material, reduce operating noise, improve efficiency, and run the noise less than 25.5 decibels."
             />
              </ div>
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
    </ div>
  );
};

export default luna_page;
