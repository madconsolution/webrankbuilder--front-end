'use client';

import ProductBanner from "@/app/reuseable/products/banner/page";
import Expensive from "@/app/reuseable/products/expensive/page";

import FeatureHighlightSection from "@/app/reuseable/products/feature/page";

import FeatureSlider from "@/app/reuseable/products/freature-slider/page";
import HighlightsSlider from "@/app/reuseable/products/Highlights-silder/page";
import CallToActionBanner from "@/app/reuseable/products/join-group/page";

import ProductOverview from "@/app/reuseable/products/overview/page";
import ProductSlider from "@/app/reuseable/products/product-slider/page";
import ProductFeatureShowcase from "@/app/reuseable/products/Showcase/page";
import SpecificationSection from "@/app/reuseable/products/specifications/page";
import Title from "@/app/reuseable/products/title/page";

// ✅ Add the SpecItem type here
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
    title: 'Up to',
    highlight: 'EATX support',
    description:
      'Tortox IRIS supports up to EATX motherboards while having plenty of room for high end water-cooling builds. At the back of the motherboard tray, leaves plenty of room for cables management to support high end components and PSUs.',
    image: '/products/IRIS/Feature-slider/image-1.png',
  },
  {
    title: 'Tempered Glass',
    highlight: 'Side Panels',
    description:
      'Tortox IRIS features high-quality tempered glass side panel to showcase the beautiful components. IRIS comes with high quality temper glass side panels is crystal clear to showcase the hardware while the other is 100% dark tinted to hide the cables behind motherboard tray.',
    image: '/products/IRIS/Feature-slider/image-2.png',
  },
  {
    title: 'Dual Chamber',
    highlight: 'Air Flow',
    description:
      'Designed for optimal cooling, the dual-chamber setup allows enhanced airflow and separation of heat zones.',
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

const NeonPage = () => {
  return (
    <>
      <ProductBanner
        bgImage="/products/iris-banner.png"
        logo1="/logo.png"
        logo2="/products/Neon/image.png"
        description="ATX MID TOWER COMPUTER  CASE THAT HAVE GREAT DESIGN"
      />
   

   <ProductOverview
  products={products}
  mainTitle="TORTOX"
  subTitle="NEON"
  content="The most premium production gaming enclosure. Built from premium materials that are engineered with utmost care and attention to detail. A design based on continuous product improvement and innovation throughout . Discover the ultimate building experience. Shadow keeps an incredibly clean look that can be easily switched to different RGB patterns from the side control panel."
/>


      <FeatureHighlightSection
        image="/products/feature-prof.png"
        title="FUTURE-PROOF FRONT PANEL"
        highlightText="Featuring a super-speed USB 3.1 port, RGB Lighting Control switch and additional connections for all modern peripherals."
        position="right"
      />

      <FeatureSlider slides={slides} />

      <div className="text-xl text-[#FFFFFF]">
        <Title
          mainTitle="TORTOX"
          subTitle="IRIS"
          content="Featuring EATX / ATX / Micro ATX / Mini-ITX Supported Case with 2 SSD Drive Bays and additional connections for all modern peripherals."
        />
      </div>

      {/* Join Group  */}
      <CallToActionBanner
  text="Over 1000's of gamers already using our products."
  buttonLabel="Join Our Group"
  buttonHref="/community"
/>

       {/* Feature showcase */}
       <ProductFeatureShowcase
  imageSrc="/products/IRIS/showcase/image-1.png"
 imageAlt="Remote and Fan Controller"
 title="High Performance"
 highlight="Spectre Fans Included"
 description={`Tortox IRIS comes preinstalled with 4x Tortox Dual loop fans for a more efficient cooling performance. The Included RGB fansare RGB center illuminated and can support multiple control standards like ASUS AURA SYNC, MSI MISTIC LIGHT SYNC, GIGABYTE RGB Fusion 2.0 and ASRock POLYCHROME RGB. This allows you to control the fan lighting simply through software and synchronize the fans, and other devices such as mice and keyboard for more attractive lighting.`}
  noteLine1="8 Fan 2 LED strip Aura connection with Remote"
  noteLine2="4x DUAL LOOP 120MM RGB RAINBOW FANS*"
 />

 {/* Feature Block */}
  {/* <FeatureBlock
  imageSrc="/products/IRIS/showcase/image-1.png"
  imageAlt="Open Neon Case"   title="Thermal"
   highlight="Expandability"
   description={`To cool down the components, Grid Design on the front panel
   has offered smooth intake. NEON supports up to two 140mm fans or a 280mm radiator in the front while a 120mm rear-fan
   or radiator at the rear will push the hot air out. It also supports up
   to 163mm high CPU air cooler.`}
  note="Three Single Colour(Red) 33 LED Case Fans Pre-installed"
   imageLeft={true} />

 <FeatureBlock
    imageSrc="/products/IRIS/showcase/image-2.png"
   imageAlt="Two NEON Cases"
  title="Tool-free"
 highlight="modular storage design"
 description={`Both the included hard drive cages are modular and tool-free
  giving the user the ability to configure the system to their needs. Apart from these hard drive cages which accommodate up to 2
   HDDs, the NEON comes with three modular SSD brackets. Available in with or without RGB windowed side panel case, you can
  choose the NEON that blends perfectly with your surroundings.`}
  imageLeft={false}
/> */}

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
     { src: '/products/IRIS/highlight/image-1.png', alt: 'Front Case' },
    { src: '/products/IRIS/highlight/image-2.png', alt: 'Mesh Filter' },
    { src: '/products/IRIS/highlight/image-3.png', alt: 'RGB Case' },
   ]}
 />
          {/* Specifications */}
      <SpecificationSection specs={specs} imageSrc="/products/IRIS/specification/image.png" />
          {/* Products slider */}
      <ProductSlider title="Other Products" products={sampleProducts} />
    </>
  );
};

export default NeonPage;
