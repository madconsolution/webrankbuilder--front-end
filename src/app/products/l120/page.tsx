"use client";
import CaseBanner from "@/app/reuseable/case/banner/banner";
import NinjaSlider, { SlideContent } from "@/app/reuseable/case/slider/ninja-slider/ninja_slider";
import PowerGrid from "@/app/reuseable/power/power-grid/power_grid";
import CallToActionBanner from "@/app/reuseable/products/join-group/join_group";
import ProductSlider from "@/app/reuseable/products/product-slider/product_slider";
import Title from "@/app/reuseable/products/title/title";
import SpecificationSection, { SpecificationItem } from "@/app/reuseable/cables/Specification/specification";
import CompatibilitySection from "@/app/reuseable/liquid/Compatibility/banner";


  // Here is sldier data
  const slides: SlideContent[] = [
    {
      image: '/liquid/l120/slider/image.png',
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

  // here is slider
  const sampleProducts = [
    { image: '/products/IRIS/Feature-slider/image-1.png' },
    { image: '/products/IRIS/Feature-slider/image-2.png' },
    { image: '/products/IRIS/Feature-slider/Background.png' },
  ];
  //   Here is power-grid data

  const powerItems = [
    {
      title: "Double cavity water block design",
      description: `Independent pump, internal motor, smooth flow.The form of dipper tooth copper heatsink makes the better heat conduction.`,
      image: "/liquid/l120/grid/image-1.png",
    },
    {
      title: "Densification aluminum radiator",
      description: `High density fin, large heat dissipation area.High density folding leaves, better heat dissipation efficiency.`,
      title2: "Equipped with univerual platform metal brackets",
      description2: `Compatible with various mainstream platforms of both Intel and AMD.`,
      image: "/liquid/l120/grid/image-2.png",
    },
    {
      title: "FEP material pipe, industrial-grade seal",
      description: `Effectively reduces the evaporation rate of coolant.Special pipe material, resistant to corrosion and oxidation greatly improves the service life of the pipe.`,
  
      image: "/liquid/l120/grid/image-3.png",
    },
 
  ];

  // here is specification data
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
  
const l120_page = () => {
  return (
    <div className="w-full md:w-[1440px] mx-auto">
      <CaseBanner
        bgImage="/liquid/l120/banner.png"
        logo1="/logo.png"
        logo2="/liquid/l120/l120.png"
        description={[
  
          "Crafted For The Dynamic Game Players",
        ]}
      />

      {/* Here is first heading title */}
      <div className="text-xl text-[#FFFFFF]">
        <Title
          mainTitle="TORTOX"
          subTitle="LIQWI L120"
          content="Tortox Liquid CPU cooler’s second-generation design offers powerful, low-noise, liquid cooling. The redesigned fan and low-profile radiator help L120 excel at rapidly drawing heat away from your CPU, all the while looking stylish with its RGB LED-lit pump head."
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
            {/* Grid  */}
            <PowerGrid items={powerItems} />
         
         {/* CompatibilitySection  */}
            <CompatibilitySection />
                   {/* Specification section */}
      <SpecificationSection specifications={specs} />
             {/* Products slider */}
             <ProductSlider title="Other Products" products={sampleProducts} />
    </div>
  );
};

export default l120_page;
