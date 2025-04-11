'use client';

import ProductBanner from "@/app/reuseable/products/banner/page";
import Expensive from "@/app/reuseable/products/expensive/page";

import FeatureGallery from "@/app/reuseable/products/Feature-Gallery/page";
import FeatureHighlightSection from "@/app/reuseable/products/feature/page";

import FeatureSlider from "@/app/reuseable/products/freature-slider/page";
import HighlightsSlider from "@/app/reuseable/products/Highlights-silder/page";
import CallToActionBanner from "@/app/reuseable/products/join-group/page";

import ProductOverview from "@/app/reuseable/products/overview/page";
import ProductSlider from "@/app/reuseable/products/product-slider/page";
import ProductFeatureShowcase from "@/app/reuseable/products/Showcase/page";
import SpecificationSection from "@/app/reuseable/products/specifications/page";


// Add the SpecItem type here
type SpecItem = {
  title: string;
  items: string[];
};

const products = [
  {
    title: "3D Reflection front panel with Elegant honeycomb design",
    description: "A sleek and stylish design for maximum airflow and performance.",
    image: "/category-1.png",
  },
  {
    title: "Four 120mm Tortox Dual loop Case fans, Aura Controller & Remote",
    description: "Optimized for cooling with customizable lighting effects.",
    image: "/category-1.png",
  },
];

const slides = [
  {
    title: '',
    highlight: 'Sharp, Black and Beautiful',
    description:
      'Premium-quality tempered glass guarantees the durability of the panels and adds overall strength to the chassis. A light grey tinted tempered glass side panel is ideal for showcasing your build with (RGB) lighting.',
    image: '/products/IRIS/Feature-slider/image-1.png',
  },
  {
    title: '',
    highlight: 'Covers for Clean Building',
    description:
      'A PSU shroud and additional cable covers take cable management to the next level. Assemble clean builds like a pro!  An incredibly clean look that can be easily switched to different RGB patterns from the side control panel.',
    image: '/products/IRIS/Feature-slider/image-2.png',
  },
  {
    title: '',
    highlight: '',
    description:
      '',
    image: '/products/IRIS/Feature-slider/Background.png',
  },
];

const sampleProducts = [
  { image: '/products/IRIS/Feature-slider/image-1.png' },
  { image: '/products/IRIS/Feature-slider/image-2.png' },
  { image: '/products/IRIS/Feature-slider/Background.png' },
];

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

const ShadowPage = () => {
  return (
    <>
      <ProductBanner
        bgImage="/products/iris-banner.png"
        logo1="/logo.png"
        logo2="/products/Shadow/Shadow-right-logo-banner.png"
        description="ATX MID TOWER COMPUTER  CASE THAT HAVE GREAT DESIGN"
      />
   

   <ProductOverview
  products={products}
  mainTitle="TORTOX"
  subTitle="SHADOW"
  content="The most premium production gaming enclosure. Built from premium materials that are engineered with utmost care and attention to detail. A design based on continuous product improvement and innovation throughout . Discover the ultimate building experience. Shadow keeps an incredibly clean look that can be easily switched to different RGB patterns from the side control panel."
/>


      <FeatureHighlightSection
        image="/products/feature-prof.png"
        title="FUTURE-PROOF FRONT PANEL"
        highlightText="Featuring a super-speed USB 3.1 port, RGB Lighting Control switch and additional connections for all modern peripherals."
        position="right"
      />

      <FeatureSlider slides={slides} />

        {/* Feature Gallery section is here */}
        <FeatureGallery
  title="TORTOX"
  highlight="SHADOW"
  description={`Featuring ATX/Micro ATX/Mini-ITX supported case\nwith two SSD Drive Bays and additional connections\nfor all modern peripherals.`}
  images={[
    '/products/Shadow/gallery/image-1.png',
    '/products/Shadow/gallery/image-2.png',
    '/products/Shadow/gallery/image-3.png',
    '/products/Shadow/gallery/image-4.png',
    '/products/Shadow/gallery/image-5.png',
   
  ]}
/>


      {/* Join Group  */}
      <CallToActionBanner
  text="Over 1000's of gamers already using our products."
  buttonLabel="Join Our Group"
  buttonHref="/community"
/>

       {/* Feature showcase */}
       <ProductFeatureShowcase
  imageSrc="/products/Shadow/showcase/image.png"
 imageAlt=""
 title=""
 highlight="RGB LED Controller"
 description={`The RGB LED Controller allows you to take full control of your rig’s lighting and take it to the next level. Take advantage of countless combinations of colors and lighting effects and have the PC lighting you want without an RGB capable motherboard. It has a special designed to give your build awesome LED visual effect just by a 3-button controller, which allow you adjust effect speed (high, medium, slow), color (White, red, Orange, yellow, Green, Blue, Violet, demo) and mode (static, breathing, pulse, breathing + pulse), the only limitation is your imagination. The LED ring and fan blade are transparent and sharp made also add points on the install effect.`}
  noteLine1="THREE PRE-INSTALLED 120MM RGB RAINBOW FANS*"
  noteLine2="*Shadow Case can support up to 7 RGB Fans."
 />



{/* Expensive */}

<Expensive
  bgImage="/products/Shadow/expensive/image.png"
  title="Expansive Storage Space"
  description="With the explosion of high-definition content, users are going to need a lot more storage to keep it all. Shadow offers no less than seven PCI Slot & two 3.5” HDD bays for massive storage capability. You can even install a 2.5” SSD on the case for lightning-fast boot times."
/>


       {/* Highlight slider  */}
        <HighlightsSlider
   title="Magnetic And Removable"
   highlight="Built-In Dust Filters"
  description="Your system should look good inside and out. Featuring a large removable and magnetic dust filter on the Top of case, along with dust filters for the power supply at the bottom. Shadow keeps dust where it belongs - outside your PC."
  images={[
     { src: '/products/Shadow/Highlight-slider/image-1.png', alt: 'Front Case' },
    { src: '/products/Shadow/Highlight-slider/image-2.png', alt: 'Mesh Filter' },
    { src: '/products/Shadow/Highlight-slider/image-3.png', alt: 'RGB Case' },
   ]}
 />
          {/* Specifications */}
      <SpecificationSection specs={specs} imageSrc="/products/IRIS/specification/image.png" />
          {/* Products slider */}
      <ProductSlider title="Other Products" products={sampleProducts} />
    </>
  );
};

export default ShadowPage;
