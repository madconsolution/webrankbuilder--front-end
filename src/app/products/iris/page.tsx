'use client';

import ProductBanner from "@/app/reuseable/products/banner/page";
import FeatureHighlightSection from "@/app/reuseable/products/feature/page";
import FeatureSlider from "@/app/reuseable/products/freature-slider/page";

import ProductOverview from "@/app/reuseable/products/overview/page";
import ProductSlider from "@/app/reuseable/products/product-slider/page";
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

const IrisPage = () => {
  return (
    <>
      <ProductBanner
        bgImage="/products/iris-banner.png"
        logo1="/logo.png"
        logo2="/products/IRIS.png"
        description="ATX MID TOWER COMPUTER CASE THAT HAVE GREAT DESIGN"
      />

      <ProductOverview products={products} />

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

      <ProductSlider title="Other Products" products={sampleProducts} />

      <SpecificationSection specs={specs} imageSrc="/products/IRIS/specification/image.png" />
    </>
  );
};

export default IrisPage;
