'use client';
import BottomProductBanner from "@/app/reuseable/products/banner/BottomBanner";

import FeatureGrid from "@/app/reuseable/products/Feature-Grid/Feature_Grid";

import CallToActionBanner from "@/app/reuseable/products/join-group/join_group";
import AutoSlider from "@/app/reuseable/products/overview/overview";


import ProductSlider from "@/app/reuseable/products/product-slider/product_slider";

import SpecificationSection from "@/app/reuseable/products/specifications/specifications";
import Title from "@/app/reuseable/products/title/title";

// ✅ Add the SpecItem type here
type SpecItem = {
  title: string;
  items: string[];
};

// Here is auto-slider data
const products = [
  {
    title: "Semi Curved Tempered Glass Design.",
    description: "",
    image: "/products/Vidrio/Auto-Slider/image-1.png",
  },
  {
    title: "Supports ATX, M-ATX, and Mini-ITX motherboards.",
    description: "",
    image: "/products/Vidrio/Auto-Slider/image-2.png",
  },
  {
    title: "Semi Curved Tempered Glass Design.",
    description: "",
    image: "/products/Prism/Auto-Slider/image-1.png",
  },
  {
    title: "Supports ATX, M-ATX, and Mini-ITX motherboards.",
    description: "",
    image: "/products/Prism/Auto-Slider/image-2.png",
  },
  {
    title: "Semi Curved Tempered Glass Design.",
    description: "",
    image: "/products/Curvo/Auto-Slider/image-1.png",
  },
  {
    title: "Supports ATX, M-ATX, and Mini-ITX motherboards.",
    description: "",
    image: "/products/Curvo/Auto-Slider/image-2.png",
  },
];


const sampleProducts = [
  { image: '/products/IRIS/Feature-slider/image-1.png' },
  { image: '/products/IRIS/Feature-slider/image-2.png' },
  { image: '/products/IRIS/Feature-slider/Background.png' },
];



// Feature Grid 6 image start


const features = [
  {
    image: '/products/Prism/feature/f1.png',
  
  },
  {
    image: '/products/Prism/feature/f2.png',
 
  },
  {
    image: '/products/Prism/feature/f3.png',
  
  },
  {
    image: '/products/Prism/feature/f4.png',
   
  },
  {
    image: '/products/Prism/feature/f5.png',
  
  },
  {
    image: '/products/Prism/feature/f6.png',
   
  },
];

// Feature Grid 6 image end

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

const VidrioPage = () => {
  return (
    <div className="w-full md:w-[1440px] mx-auto">
      <BottomProductBanner
        bgImage="/products/iris-banner.png"
        logo1="/logo.png"
        logo2="/products/VIDRIO/VIDRIO.png"
        description={[
          'ATX MID TOWER COMPUTER',
          'CASE',
          'THAT HAVE GREAT DESIGN',
        ]}
      />
   
        {/* Section title is here */}
     
            <div className="text-xl text-[#FFFFFF]">
               <Title
                 mainTitle="TORTOX"
                 subTitle="VIDRIO"
                 content="The Tortox Prism versatile gaming pc case supports both ATX and Micro-ATX (M-ATX) motherboards, ensuring compatibility with a wide range of build requirements. Its sleek design features three tempered glass panels secured with an O-Screw snap joint design, allowing for easy installation and removal while showcasing your internal components. The case supports up to ten 120mm or nine 140mm fans, providing extensive cooling options to maintain low temperatures even during heavy use. It also boasts a convertible PCI slot design, enabling horizontal or vertical GPU mounting to enhance both aesthetics and airflow. A USB Type-C port is included for faster data transmission, adding modern connectivity options. To prevent GPU sagging, the case comes with a dedicated GPU stand. Superior heat dissipation is achieved through its excellent airflow design, ensuring optimal performance. Additionally, the case offers ample room for expansion, allowing for multiple storage drives, additional GPUs, and other components, making it ideal for both gaming and professional workstations."
               />
             </div>


       
                {/* Here is auto slider section */}
   <AutoSlider
  products={products}
  mainTitle="TORTOX"
  subTitle="NOVA"
  content="The most premium production gaming enclosure. Built from premium materials that are engineered with utmost care and attention to detail. A design based on continuous product improvement and innovation throughout . Discover the ultimate building experience. Shadow keeps an incredibly clean look that can be easily switched to different RGB patterns from the side control panel."
/>


           {/* Feature-Grid 6-image */}
           <FeatureGrid features={features} />

      {/* Join Group  */}
      <CallToActionBanner
  text="Over 1000's of gamers already using our products."
  buttonLabel="Join Our Group"
  buttonHref="/community"
/>

 




          {/* Specifications */}
      <SpecificationSection specs={specs} imageSrc="/products/IRIS/specification/image.png" />
          {/* Products slider */}
      <ProductSlider title="Other Products" products={sampleProducts} />
    </ div>
  );
};

export default VidrioPage;
