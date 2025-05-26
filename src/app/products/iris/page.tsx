'use client';

import AnimatedSection from "@/app/reuseable/Animation/AnimatedSection";
import IrisProductBanner from "@/app/reuseable/products/banner/iris-banner";
import FeatureBlock from "@/app/reuseable/products/Feature-Block/Feature_Block";
import FeatureHighlightSection from "@/app/reuseable/products/feature/feature";

import FeatureSlider from "@/app/reuseable/products/freature-slider/freature_slider";
import HighlightsSlider from "@/app/reuseable/products/Highlights-silder/Highlights_silder";
import CallToActionBanner from "@/app/reuseable/products/join-group/join_group";
import AutoSlider from "@/app/reuseable/products/overview/overview";

import ProductSlider from "@/app/reuseable/products/product-slider/product_slider";

import SpecificationSection from "@/app/reuseable/products/specifications/specifications";
import IrisTitle from "@/app/reuseable/products/title-2/iris_title";

import Title from "@/app/reuseable/products/title/title";

// ✅the SpecItem type here
type SpecItem = {
  title: string;
  items: string[];
};

const products = [
  {
    title: "3D Reflection front panel with Elegant honeycomb design",
    description: "A sleek and stylish design for maximum airflow and performance.",
    image: "/products/IRIS/Auto-Slider/image-1.png",
  },
  {
    title: "Four 120mm Tortox Dual loop Case fans, Aura Controller & Remote",
    description: "Optimized for cooling with customizable lighting effects.",
    image: "/products/IRIS/Auto-Slider/image-2.png",
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
  title: 'Optimized',
  highlight: 'Airflow Design',
  description:
    'Tortox IRIS is engineered with a high-airflow layout featuring multiple fan mounts and ventilation points to ensure maximum cooling efficiency. The front mesh panel and top exhaust setup allow for optimal air circulation, making it ideal for high-performance gaming builds.',
  image: '/products/IRIS/Feature-slider/Background.png',
}

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
    <div className="w-full md:w-[1440px] mx-auto">
{/* ProductBanner */}
<AnimatedSection delay={0.1}>
<IrisProductBanner
      bgImage="/products/iris-banner.png"
      logo1="/logo.png"
      logo2="/products/IRIS.png"
      description={[
        'ATX MID TOWER COMPUTER',
        'CASE',
        'THAT HAVE GREAT DESIGN',
      ]}
    />

 {/* Here is first heading title */}
</AnimatedSection>
       <AnimatedSection delay={0.2}>
       <div>
        <Title
          mainTitle="TORTOX"
          subTitle="IRIS"
          content="Tortox Iris re-engineered designs and features to offer the best balance of performance and with honeycomb design front panel inspired open fascia that is specifically created take as much air in to your system as possible. The core of the TORTOX IRIS is its clean design, well balanced between a perfectly organised interior structure and the sleek exterior design."
        />
      </div>
</AnimatedSection>

{/* AutoSlider */}
<AnimatedSection delay={0.3}>
<AutoSlider
  products={products}
  mainTitle="TORTOX"
  subTitle="IRIS"
  content="Tortox Iris re-engineered designs and features to offer the best balance of performance and with honeycomb design front panel inspired open fascia that is specifically created take as much air in to your system as possible. The core of the TORTOX IRIS is its clean design, well balanced between a perfectly organised interior structure and the sleek exterior design."
/>
</AnimatedSection>
 
 {/* FeatureHighlightSection */}
<AnimatedSection delay={0.1}>
<FeatureHighlightSection
        image="/products/feature_prof.png"
        title="FUTURE-PROOF FRONT PANEL"
        highlightText="Featuring a super-speed USB 3.1 port, RGB Lighting Control switch and additional connections for all modern peripherals."
        position="right"
      />
</AnimatedSection>

{/* FeatureSlider */}
<AnimatedSection delay={0.3}>
<FeatureSlider slides={slides} />
</AnimatedSection>


{/* Here is title2 */}
<AnimatedSection delay={0.2}>
<div className="text-xl text-[#FFFFFF]">
        <IrisTitle
          mainTitle="TORTOX"
          subTitle="IRIS"
          content="Featuring EATX / ATX / Micro ATX / Mini-ITX Supported Case with 2 SSD Drive Bays and additional connections for all modern peripherals."
        />
      </div>
</AnimatedSection>

  

      {/* Join Group  */}
<AnimatedSection delay={0.1}>
<CallToActionBanner
  text="Over 1000's of gamers already using our products."
  buttonLabel="Join Our Group"
  buttonHref="/community"
/>
</AnimatedSection>


 {/* Feature Block */}
<AnimatedSection delay={0.3}>
<FeatureBlock
  imageSrc="/products/IRIS/showcase/image-1.png"
  imageAlt="Open Neon Case"   title="High Performance"
   highlight="Spectre Fans Included"
   description={`Tortox IRIS comes preinstalled with 4x Tortox Dual loop fans for a more efficient cooling performance. The Included RGB fansare RGB center illuminated and can support multiple control standards like ASUS AURA SYNC, MSI MISTIC LIGHT SYNC, GIGABYTE RGB Fusion 2.0 and ASRock POLYCHROME RGB. This allows you to control the fan lighting simply through software and synchronize the fans, and other devices such as mice and keyboard for more attractive lighting.`}
  note="8 Fan 2 LED strip Aura connection with Remote"
  subTitle="4x DUAL LOOP 120MM RGB RAINBOW FANS*"
   imageLeft={true} />

 <FeatureBlock
    imageSrc="/products/IRIS/showcase/image-2.png"
   imageAlt="Two NEON Cases"
  title="Tool-free and modular "
 highlight="storage design"
 description={`Both the included hard drive cages are modular and tool-free
  giving the user the ability to configure the system to their needs. Apart from these hard drive cages which accommodate up to 2
   HDDs, the NEON comes with three modular SSD brackets. Available in with or without RGB windowed side panel case, you can
  choose the NEON that blends perfectly with your surroundings.`}
  imageLeft={false}
/>
</AnimatedSection>


    {/* Highlight slider  */}
<AnimatedSection delay={0.1}>
       <HighlightsSlider
   title="Easy Clean with "
   highlight="Removable Dust Filters"
  description="TORTOX IRIS is designed to offer reliable performance for years to come. By filtering out dust particle which reduces system lifespan, systems built with TORTOX IRIS can boast of dust free operation. The improved air intake mesh on the front comes with an embedded nylon filter that prevents dust from entering the system while the filter at the bottom keeps PSU free from dust. All these filters can be easily removed for a faster cleaning job."
  images={[
     { src: '/products/IRIS/highlight/image-1.png', alt: 'Front Case' },
    { src: '/products/IRIS/highlight/image-2.png', alt: 'Mesh Filter' },
    { src: '/products/IRIS/highlight/image-3.png', alt: 'RGB Case' },
   ]}
 />
</AnimatedSection>

  {/* Specifications */}
<AnimatedSection delay={0.2}>
       <SpecificationSection specs={specs} imageSrc="/products/IRIS/specification/image.png" />
</AnimatedSection>


   {/* Products slider */}
<AnimatedSection delay={0.1}>
       <ProductSlider title="Other Products" products={sampleProducts} />
</AnimatedSection>

    </ div>
  );
};

export default IrisPage;
