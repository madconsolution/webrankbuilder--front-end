"use client";
import CaseBanner from "@/app/reuseable/case/banner/banner";
import { SlideContent } from "@/app/reuseable/case/slider/ninja-slider/ninja_slider";
import PowerGrid from "@/app/reuseable/power/power-grid/power_grid";
import CallToActionBanner from "@/app/reuseable/products/join-group/join_group";
import ProductSlider from "@/app/reuseable/products/product-slider/product_slider";
import Title from "@/app/reuseable/products/title/title";
import { SpecificationItem } from "@/app/reuseable/cables/Specification/pecification";
import GSSlider from "@/app/reuseable/slider/gaming/gs_slider";
import SpecificationCheir from "@/app/reuseable/specifications/specification_cheir";

  // Here is sldier data
  const slides: SlideContent[] = [
    {
      image: '/cheir/gs_300_g/slider/image.png',
      leftTexts: [
        'The Tortox GS300 Gaming Sofa is a versatile and comfortable seating option designed specifically for gamers. With its movable scroll casters, you can easily move the sofa around your gaming setup without any hassle.',
   
      ],
      rightTexts: [
        'Foam in the holder and back feels very soft when your body is above it. The foam is not easily deflated even if it is occupied for a long time and will return to its original position.',
 
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
      image: "/cheir/gs_300_g/grid/image-1.png",
    },
    {
      title: "Timeless Construction",
      description: `Made of scratch-resistant Medium Particle Board (PB) and premium steel frame, the Tortox aims to be as sturdy as possible, accompanying you to countless game battles.`,
      title2: "Light Up Your Battles",
      description2: `The Tortox GD400-R has 2 ARGB light streams on both wings of the table, toggle through 15 exotic lighting effects with a simple command on the remote.`,
      image: "/cheir/gs_300_g/grid/image-2.png",
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
      'A high-quality sofa is built to last with sturdy construction and reinforced stitching to withstand the rigors of intense gaming.',
      { label: 'Chair Cover Material ',  value: ' PVC Leather', highlight: true },
      { label: 'Mechanism Type ', value: '2Multi-Functional Tilt', highlight: true },
      { label: 'Armrests : ', value: '4D', highlight: true },
      { label: 'Model', value: 'GS300-R', highlight: true },
      { label: 'Gas Lift Class', value: '4', highlight: true },
      { label: 'Foam Type ', value: 'High Density Mold Shaping Foam', highlight: true },
    ],
  },
];

const gs_300_g_page = () => {
  return (
    <div className="w-full md:w-[1440px] mx-auto">
      <CaseBanner
        bgImage="/cheir/gs_300_g/banner.png"
        logo1="/logo.png"
        logo2="/cheir/gs_300_g/GS_300G.png"
        description={[
  
          "Crafted For The Dynamic Game Players",
        ]}
      />

      {/* Here is first heading title */}
      <div className="text-xl text-[#FFFFFF]">
        <Title
          mainTitle="TORTOX"
          subTitle="gs 300g"
          content="The Tortox GS300-G Series gaming chairs are suitable for those who want the simpliest design with esports feeling. Manually control the handle to adjust the backrest angle. Made by inner softness pouch & a waterproof PU leather surface covering. Apply to any living room, bedroom, classroom, bar, and lounge etc."
        />
      </div>
       {/*  slider  */}
       <GSSlider slides={slides} />
          {/* Join Group  */}
      <CallToActionBanner
        text="Over 1000's of gamers already using our products."
        buttonLabel="Join Our Group"
        buttonHref="/community"
      />
            {/* Grid  */}
            <PowerGrid items={powerItems} />
         

       
           {/* Specification section */}
      <SpecificationCheir specifications={specs} />
             {/* Products slider */}
             <ProductSlider title="Other Products" products={sampleProducts} />
    </div>
  );
};

export default gs_300_g_page;
