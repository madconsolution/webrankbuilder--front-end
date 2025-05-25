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
      'Tortox GS300-R Series gaming chairs are suitable for those who want the simpliest design with esports feeling.',
      { label: 'Color  ',  value: ' Grey & Red', highlight: true },
      { label: 'Frame  ', value: 'Metal', highlight: true },
      { label: 'PVC Leather', value: 'Chair Cover Material ', highlight: true },
      { label: 'Armrests ', value: '4D', highlight: true },
      { label: 'Gas Lift Specification ', value: '80/40, 75mm', highlight: true },
      { label: 'Base ', value: '2705" Wide Metal Base', highlight: true },
      { label: 'Casters ', value: '  3" Caster/PU', highlight: true },
    ],
  },
  {
    type: 'dimensions',
    items: [
      'The backrest is adjustable, allowing you to find the perfect angle for maximum comfort during long gaming sessions.',
      { label: 'Recommended Weight ',  value: ' PVC Leather', highlight: true },
      { label: 'Recommended Height ', value: ' Up to 6"5"', highlight: true },
      { label: 'Adjustable Back Angle ', value: '135°', highlight: true },
      { label: 'Adjustable Headrest ', value: 'Yes', highlight: true },
      { label: 'Adjustable Lumbar Cushion ', value: 'Yes', highlight: true },
      { label: 'Items Dimension(L x W x H) ', value: '800 x 800 x 1200mm ', highlight: true },
      { label: 'Net Weight ', value: '150Kg', highlight: true },
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
