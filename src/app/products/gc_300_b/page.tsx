"use client";
import SpecificationSection, { SpecificationItem } from "@/app/reuseable/cables/Specification/pecification";
import CaseBanner from "@/app/reuseable/case/banner/banner";
import NinjaSlider, { SlideContent } from "@/app/reuseable/case/slider/ninja-slider/ninja_slider";
import PowerGrid from "@/app/reuseable/power/power-grid/power_grid";
import CallToActionBanner from "@/app/reuseable/products/join-group/join_group";
import ProductSlider from "@/app/reuseable/products/product-slider/product_slider";
import Title from "@/app/reuseable/products/title/title";


  // Here is sldier data
  const slides: SlideContent[] = [
    {
      image: '/cheir/gc_300_b/slider/image.png',
      leftTexts: [
        'Soft yet durable furniture fabric',
        'Armrest with adjustable height and width',
        'Velvet backrest and head support',
      ],
      rightTexts: [
        'Lumbered support adjustable knob',
        'Backrest with lumbar support',
        'Chair with casters and five-point base',
      ],
    },
    {
      image: '/cheir/gc_300_b/slider/image.png',
      leftTexts: [
        'Soft yet durable furniture fabric',
        'Armrest with adjustable height and width',
        'Velvet backrest and head support',
      ],
      rightTexts: [
        'Lumbered support adjustable knob',
        'Backrest with lumbar support',
        'Chair with casters and five-point base',
      ],
    },
    {
      image: '/cheir/gc_300_b/slider/image.png',
      leftTexts: [
        'Soft yet durable furniture fabric',
        'Armrest with adjustable height and width',
        'Velvet backrest and head support',
      ],
      rightTexts: [
        'Lumbered support adjustable knob',
        'Backrest with lumbar support',
        'Chair with casters and five-point base',
      ],
    },
    {
      image: '/cheir/gc_300_b/slider/image.png',
      leftTexts: [
        'Soft yet durable furniture fabric',
        'Armrest with adjustable height and width',
        'Velvet backrest and head support',
      ],
      rightTexts: [
        'Lumbered support adjustable knob',
        'Backrest with lumbar support',
        'Chair with casters and five-point base',
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
      image: "/cheir/gc_300_b/grid/image-1.png",
    },
    {
      title: "Timeless Construction",
      description: `Made of scratch-resistant Medium Particle Board (PB) and premium steel frame, the Tortox aims to be as sturdy as possible, accompanying you to countless game battles.`,
      title2: "Light Up Your Battles",
      description2: `The Tortox GD400-R has 2 ARGB light streams on both wings of the table, toggle through 15 exotic lighting effects with a simple command on the remote.`,
      image: "/cheir/gc_300_b/grid/image-2.png",
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

  
const gc_300_b_page = () => {
  return (
    <div className="w-full md:w-[1440px] mx-auto">
      <CaseBanner
        bgImage="/cheir/gc_300_b/banner.png"
        logo1="/logo.png"
        logo2="/cheir/gc_300_b/GC_300B.png"
        description={[
  
          "Crafted For The Dynamic Game Players",
        ]}
      />

      {/* Here is first heading title */}
      <div className="text-xl text-[#FFFFFF]">
        <Title
          mainTitle="TORTOX"
          subTitle="gc 300b"
          content="The Tortox GC300-B Series fabric gaming chairs are constructed with high-density padding and a contoured backrest to bring unparalleled comfort and adjustability to your gaming. Many gamers prefer the feel of a fabric chair because of the soft-touch material. Others prefer mesh fabric because it’s more breathable. It is recommended choosing a chair with all the necessary adjustments to support proper posture."
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
         

       
             {/* Specifications */}
      
             {/* Specifications */}
              {/* Specification section */}
      <SpecificationSection specifications={specs} />
             {/* Products slider */}
             <ProductSlider title="Other Products" products={sampleProducts} />
    </div>
  );
};

export default gc_300_b_page;
