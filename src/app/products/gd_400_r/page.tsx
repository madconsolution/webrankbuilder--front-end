"use client";
import CaseBanner from "@/app/reuseable/case/banner/banner";

import PowerGrid from "@/app/reuseable/power/power-grid/power_grid";
import CallToActionBanner from "@/app/reuseable/products/join-group/join_group";
import ProductSlider from "@/app/reuseable/products/product-slider/product_slider";
import Title from "@/app/reuseable/products/title/title";
import SpecificationSection, { SpecificationItem } from "@/app/reuseable/cables/Specification/pecification";
import GamingSlider, { GamingSlideContent } from "@/app/reuseable/slider/gaming/gaming_slider";


  // Here is sldier data
  const slides: GamingSlideContent[] = [
    {
      image: '/gaming/gd_400_r/slider/image.png',
      leftTexts: [
        'Increase the angle of view, refuse to do low head, healthy sitting, easy to deal with the work.',
        '4-port USB expansion interface, stable and efficient transmission, no longer need to bow and bend.',
        'The panel of the stand can be folded flexibly, occupying less space, the small desktop can also be used.',
      ],
      rightTexts: [
        'LED lighting effect decoration on both sides, RGB lighting, 9 kinds of lighting effects, more sense of use experience.',
        'Built in mobile phone, tablet bracket and sundry storage box, easy storage more clean desktop',
        'The material is solid, bearing 30kg, safe to use.',
     
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
      title: "Clever Architecture Design",
      description: `Tortox GD400-R desk has four adjustable knobs that can be effortlessly adjusted for it to stand erect and stay completely leveled on any surface.`,
      image: "/gaming/gd_400_r/grid/image-1.png",
    },
    {
      title: "Timeless Construction",
      description: `Made of scratch-resistant Medium Particle Board (PB) and premium steel frame, the Tortox aims to be as sturdy as possible, accompanying you to countless game battles.`,
      title2: "Light Up Your Battles",
      description2: `The Tortox GD400-R has 2 ARGB light streams on both wings of the table, toggle through 15 exotic lighting effects with a simple command on the remote.`,
      image: "/gaming/gd_400_r/grid/image-2.png",
    },
    {
      title: "Unique Overlay",
      description: `The surface of the desk is completely covered with a spill-resistant XXL mouse mat, and under the mousemat is a switch to freely command the RGB light streams with 15 lighting effects.`,
      image: "/gaming/gd_400_r/grid/image-3.png",
      title2: "Impressive Operation At 40°C",
      description2: `Powerful performance at 40°C/104°F ambient temperature.`,
  
    },
  ];

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

const gd_400_r_page = () => {
  return (
    <div className="w-full md:w-[1440px] mx-auto">
      <CaseBanner
        bgImage="/gaming/gd_400_r/banner.png"
        logo1="/logo.png"
        logo2="/gaming/gd_400_r/GAMING-DESK.png"
        description={[
  
          "Crafted For The Dynamic Game Players",
        ]}
      />

      {/* Here is first heading title */}
      <div className="text-xl text-[#FFFFFF]">
        <Title
          mainTitle="TORTOX"
          subTitle="Gaming desk"
          content="The Tortox GD400-R Series is an RGB gaming desk that features a carbon fiber surface, an innovative structural design, and RGB streaming lights on both wings of the table to enhance your gaming experience."
        />
      </div>
       {/*  slider  */}
       <GamingSlider slides={slides}/>
          {/* Join Group  */}
      <CallToActionBanner
        text="Over 1000's of gamers already using our products."
        buttonLabel="Join Our Group"
        buttonHref="/community"
      />
            {/* Grid  */}
            <PowerGrid items={powerItems} />
         

       
           {/* Specification section */}
      <SpecificationSection specifications={specs} />
             {/* Products slider */}
             <ProductSlider title="Other Products" products={sampleProducts} />
    </div>
  );
};

export default gd_400_r_page;
