'use client';

import AnimatedSection from "@/app/reuseable/Animation/AnimatedSection";
import ProductBanner from "@/app/reuseable/products/banner/banner";
import Expensive from "@/app/reuseable/products/expensive/expensive";
import FeatureHighlightSection from "@/app/reuseable/products/feature/feature";
import FeatureSlider from "@/app/reuseable/products/freature-slider/freature_slider";
import HighlightsSlider from "@/app/reuseable/products/Highlights-silder/Highlights_silder";
import CallToActionBanner from "@/app/reuseable/products/join-group/join_group";
import ProductOverview from "@/app/reuseable/products/overview/overview";
import ProductSlider from "@/app/reuseable/products/product-slider/product_slider";
import ProductFeatureShowcase from "@/app/reuseable/products/Showcase/Showcase";
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
    title: "Accommodate up to 2 HDDs and three modular SSD.",
    description: "",
    image: "/products/Magnus/Auto-Slider/image-1.png",
  },
  {
    title: "Optional window side panel.",
    description: "",
    image: "/products/Magnus/Auto-Slider/image-2.png",
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
    <div className="w-full md:w-[1440px] mx-auto">
      {/* ProductBanner */}
      <AnimatedSection delay={0.1}>
      <ProductBanner
        bgImage="/products/iris-banner.png"
        logo1="/logo.png"
        logo2="/products/Neon/image.png"
        description={[
          'ATX MID TOWER COMPUTER',
          'CASE',
          'THAT HAVE GREAT DESIGN',
        ]}
      />
      </AnimatedSection>
  
           {/* Here is first heading title */}
      <AnimatedSection delay={0.1}>
      <div className="text-xl text-[#FFFFFF]">
                        <Title
                          mainTitle="TORTOX"
                          subTitle="Neon"
                          content="The core of the NEON is its clean design, well balanced between a perfectly organized interior structure and the sleek exterior design. It is complemented by a tempered glass front panel and the latest in illumination effects, highlighting the clean and discreet lines of the grid front panel. It is complemented by a 4mm see-through-tinted tempered glass panel on the front. Available in with or without RGB windowed acrylic side panel case, you can choose the NEON that blends perfectly with your surroundings"
                        />
                      </div>
      </AnimatedSection>

           {/*ProductOverview */}
      <AnimatedSection delay={0.1}>
      <ProductOverview
  products={products}
  mainTitle="TORTOX"
  subTitle="NEON"
  content="The most premium production gaming enclosure. Built from premium materials that are engineered with utmost care and attention to detail. A design based on continuous product improvement and innovation throughout . Discover the ultimate building experience. Shadow keeps an incredibly clean look that can be easily switched to different RGB patterns from the side control panel."
/>
      </AnimatedSection>


           {/*FeatureHighlightSection*/}
      <AnimatedSection delay={0.1}>
      <FeatureHighlightSection
        image="/products/feature_prof.png"
        title="FUTURE-PROOF FRONT PANEL"
        highlightText="Featuring a super-speed USB 3.1 port, RGB Lighting Control switch and additional connections for all modern peripherals."
        position="right"
      />
      </AnimatedSection>

           {/*FeatureSlider*/}
      <AnimatedSection delay={0.1}>
      <FeatureSlider slides={slides} />
      </AnimatedSection>
  
            {/* Join Group  */}
      <AnimatedSection delay={0.1}>
       <CallToActionBanner
  text="Over 1000's of gamers already using our products."
  buttonLabel="Join Our Group"
  buttonHref="/community"
/>
      </AnimatedSection>


            {/* Feature showcase */}
      <AnimatedSection delay={0.1}>
          <ProductFeatureShowcase
  imageSrc="/products/IRIS/showcase/image-1.png"
 imageAlt="Remote and Fan Controller"
 title="High Performance"
 highlight="Spectre Fans Included"
 description={`Tortox IRIS comes preinstalled with 4x Tortox Dual loop fans for a more efficient cooling performance. The Included RGB fansare RGB center illuminated and can support multiple control standards like ASUS AURA SYNC, MSI MISTIC LIGHT SYNC, GIGABYTE RGB Fusion 2.0 and ASRock POLYCHROME RGB. This allows you to control the fan lighting simply through software and synchronize the fans, and other devices such as mice and keyboard for more attractive lighting.`}
  noteLine1="8 Fan 2 LED strip Aura connection with Remote"
  noteLine2="4x DUAL LOOP 120MM RGB RAINBOW FANS*"
 />
      </AnimatedSection>
  

        {/* Expensive */}
    <AnimatedSection delay={0.1}>
<Expensive
  bgImage="/products/Shadow/expensive/image.png"
  title="Expansive Storage Space"
  description="With the explosion of high-definition content, users are going to need a lot more storage to keep it all. Shadow offers no less than seven PCI Slot & two 3.5” HDD bays for massive storage capability. You can even install a 2.5” SSD on the case for lightning-fast boot times."
/> </AnimatedSection>
  

           {/* Highlight slider  */}
    <AnimatedSection delay={0.1}>
       <HighlightsSlider
   title="Magnetic And Removable"
   highlight="Built-In Dust Filters"
  description="Your system should look good inside and out. Featuring a large removable and magnetic dust filter on the Top of case, along with dust filters for the power supply at the bottom. Shadow keeps dust where it belongs - outside your PC."
  images={[
     { src: '/products/IRIS/highlight/image-1.png', alt: 'Front Case' },
    { src: '/products/IRIS/highlight/image-2.png', alt: 'Mesh Filter' },
    { src: '/products/IRIS/highlight/image-3.png', alt: 'RGB Case' },
   ]}
 /> </AnimatedSection>

      {/* Specifications */}
    <AnimatedSection delay={0.1}>
      <SpecificationSection specs={specs} imageSrc="/products/IRIS/specification/image.png" />
       </AnimatedSection>
  
        {/* Products slider */}
    <AnimatedSection delay={0.1}>
      <ProductSlider title="Other Products" products={sampleProducts} />
       </AnimatedSection>
  
    </ div>
  );
};

export default NeonPage;
