"use client";
import CaseBanner from "@/app/reuseable/case/banner/page";
import NinjaSlider, { SlideContent } from "@/app/reuseable/case/slider/ninja-slider/page";
import PowerGrid from "@/app/reuseable/power/power-grid/page";
import CallToActionBanner from "@/app/reuseable/products/join-group/page";
import ProductSlider from "@/app/reuseable/products/product-slider/page";
import Title from "@/app/reuseable/products/title/page";
import SpecificationSection from "@/app/reuseable/products/specifications/page";
import HeatPipeFeatureSection from "@/app/reuseable/air/HeatPipe/paget";
import AngleFeatureSection from "@/app/reuseable/air/HeatPipe/paget";
import AngleFeatureSectionWithIcons from "@/app/reuseable/air/HeatPipe/paget";

// ✅the SpecItem type here
type SpecItem = {
  title: string;
  items: string[];
};
  // Here is sldier data
  const slides: SlideContent[] = [
    {
      image: '/cheir/gs_300_r/slider/image.png',
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

  // here is specification data
  const specs: SpecItem[] = [
    {
      title: "Featured",
      items: [
        "Clean design, well balanced between a perfectly optimized interior structure and the sleek exterior design",
        "Color: <strong>Black</strong>",
        "Material: <strong>SECC 0.6mm</strong>",
        "Motherboard: EATX/ATX/Micro ATX/Mini-ITX",
        "HDD/1–5/2.5” x 5",
        "Add-on card: ≤ 7",
        "Max. VGA card: <strong>400mm</strong>",
        "Max. CPU Cooler: <strong>175mm</strong>",
        "Power Supply: Bottom/ATX PS2 PSU",
      ],
    },
    {
      title: "Cooling System",
      items: [
        "Front: 3*120MM (Included) <strong>Support 240mm liquid cooler</strong>",
        "Rear: 120 fan (*optional)",
        "1*120mm (included) <strong>Support 240 liquid cooler</strong>",
        "Bottom: 2*120mm (Fan Optional) <strong>Support 240 liquid cooler</strong>",
        "Front water cooling: <strong>360mm/280mm/152mm</strong>",
        "Rear water cooling: <strong>240mm*175mm</strong>",
      ],
    },
    {
      title: "Dimensions And Weight",
      items: [
        "IRIS comes with high quality temper glass side panels in crystal clear to showcase the hardware.",
        "16.5\"x7.9\"x18\"(overall)",
        "17.7\"x7.9\"x18\"(Case)",
        "2.1\"x11.7\"x12.1\"(chassis)",
        "Weight: <strong>10.5kg</strong>",
      ],
    },
    {
      title: "I/O ports",
      items: [
        "Top-front panel features two USB 3.0 data transfer port along with one RESET button as well as HD audio I/O to grant direct access when needed.",
        "1*Power",
        "2*USB3.0",
        "1*RESET button",
        "1*HD Audio in / out",
      ],
    },
    {
      title: "Additional Features",
      items: [
        "Preinstalled with 4x True Dual loop fans for a more efficient cooling performance.",
        "VGA card convenient installation",
        "CPU cooler height: up to <strong>175mm</strong>",
        "Filtered front ventilation",
        "Back cable management",
        "Thumbs screw mounted side panels for easy access",
      ],
    },
    {
      title: "Expansion",
      items: [
        "The improved air intake mesh on the front comes with an embedded nylon filter that prevents dust from entering the system while the drive filter at the bottom keeps PSU free from dust.",
        "2*3.5” external drive bay",
        "2*2.5” SSD drive bay",
        "8* expansion slots",
      ],
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
      <SpecificationSection specs={specs} imageSrc="/products/IRIS/specification/image.png" />
             {/* Products slider */}
             <ProductSlider title="Other Products" products={sampleProducts} />
    </div>
  );
};

export default air_freeze_121_page;
