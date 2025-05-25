'use client';
import SpecificationSection, { SpecificationItem } from "@/app/reuseable/cables/Specification/specification";
import CaseBanner from "@/app/reuseable/case/banner/banner";
import ArcusSlider from "@/app/reuseable/case/slider/arcus-slider/arcus_slider";
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


  const slideData = [
    {
      image: "/case/Arcus/slider/image.png",
      leftTexts: [
        'Do Not Need Extra Controller For Rainbow Effect',
        'With URA RGB Circle Fan More Distinctive Visual Effect',
        'Precise PWM Control',
        'RGB Fan',
      ],
      rightTexts: [
        '300mm Lead Wire Length',
        'Rainbow 16 LEDs',
        'Fan Airflow - 57.2 CFM',
        'Magnetic Levitation Fans',
        'Low Noise Fans',
      ],
    },
    {
      image: "/case/Arcus/slider/image.png",
      leftTexts: [
        'Do Not Need Extra Controller For Rainbow Effect',
        'With URA RGB Circle Fan More Distinctive Visual Effect',
        'Precise PWM Control',
        'RGB Fan',
      ],
      rightTexts: [
        '300mm Lead Wire Length',
        'Rainbow 16 LEDs',
        'Fan Airflow - 57.2 CFM',
        'Magnetic Levitation Fans',
        'Low Noise Fans',
      ],
    },
    {
      image: "/case/Arcus/slider/image.png",
      leftTexts: [
        'Do Not Need Extra Controller For Rainbow Effect',
        'With URA RGB Circle Fan More Distinctive Visual Effect',
        'Precise PWM Control',
        'RGB Fan',
      ],
      rightTexts: [
        '300mm Lead Wire Length',
        'Rainbow 16 LEDs',
        'Fan Airflow - 57.2 CFM',
        'Magnetic Levitation Fans',
        'Low Noise Fans',
      ],
    },
  ];

  // here is slider data
  const sampleProducts = [
    { image: '/products/IRIS/Feature-slider/image-1.png' },
    { image: '/products/IRIS/Feature-slider/image-2.png' },
    { image: '/products/IRIS/Feature-slider/Background.png' },
  ];
  
const acrus_page = () => {
  return (
    <div className="w-full md:w-[1440px] mx-auto">
   <CaseBanner
      bgImage="/case/Arcus/banner.png"
      logo1="/logo.png"
      logo2="/case/Arcus/ARCUS.png"
      description={[
        'RGB LED LIGHTING FAN',
  
        'Crafted For The Dynamic Game Players',
      ]}
    />
     
       {/* Here is first heading title */}
            <div className="text-xl text-[#FFFFFF]">
             <Title
               mainTitle="TORTOX"
               subTitle="arcus"
               content="Tortox ARCUS dynamically adjust fan speed between 800 RPM to 2,000 RPM with a 120mm TORTOX PWM fan, making it easy to minimize noise or maximize airflow. Unified luminous effect of water block and fan, forming a beautiful color."
             />
              </ div>
           {/* here is luna slider */}
           <ArcusSlider slides={slideData} />
     
           
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

export default acrus_page;
