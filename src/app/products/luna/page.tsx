'use client';

import SpecificationSection, { SpecificationItem } from "@/app/reuseable/cables/Specification/pecification";
import CaseBanner from "@/app/reuseable/case/banner/banner";
import LunaSlider from "@/app/reuseable/case/slider/luna-slider/luna_slider";

import CallToActionBanner from "@/app/reuseable/products/join-group/join_group";
import ProductSlider from "@/app/reuseable/products/product-slider/product_slider";

import Title from "@/app/reuseable/products/title/title";

// Here is specification date
 const specs: SpecificationItem[] = [
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


 
  const sampleProducts = [
    { image: '/products/IRIS/Feature-slider/image-1.png' },
    { image: '/products/IRIS/Feature-slider/image-2.png' },
    { image: '/products/IRIS/Feature-slider/Background.png' },
  ];
  
const luna_page = () => {
  return (
    <div className="w-full md:w-[1440px] mx-auto overflow-hidden">
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
      
        {/* here is luna slider */}
          <LunaSlider
  slides={[
    {
      image: '/case/luna/slider/image.png', 
     
      leftTexts: [
        'High-Performance Fan For The CPU Heatsink',
        'Standard 120mm Computer Case Fan',
        'High-Speed And High-Brightness LED Design',
        'High Capacity Cooling',
        'Water Cooling System',
      ],
    },
    {
      image: '/case/luna/slider/image.png', 
     
      leftTexts: [
        'High-Performance Fan For The CPU Heatsink',
        'Standard 120mm Computer Case Fan',
        'High-Speed And High-Brightness LED Design',
        'High Capacity Cooling',
        'Water Cooling System',
      ],
    },
    {
      image: '/case/luna/slider/image.png', 
     
      leftTexts: [
        'High-Performance Fan For The CPU Heatsink',
        'Standard 120mm Computer Case Fan',
        'High-Speed And High-Brightness LED Design',
        'High Capacity Cooling',
        'Water Cooling System',
      ],
    },
   
  ]}
/>

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
