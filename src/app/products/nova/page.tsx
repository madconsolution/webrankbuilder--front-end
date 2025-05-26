'use client';


import ProductBanner from "@/app/reuseable/products/banner/banner";
import Expensive from "@/app/reuseable/products/expensive/expensive";
import FeatureBlock from "@/app/reuseable/products/Feature-Block/Feature_Block";

import FeatureHighlightSection from "@/app/reuseable/products/feature/feature";
import SpecificationSection, { SpecificationItem } from "@/app/reuseable/cables/Specification/specification";

import FeatureSlider from "@/app/reuseable/products/freature-slider/freature_slider";

import CallToActionBanner from "@/app/reuseable/products/join-group/join_group";
import AutoSlider from "@/app/reuseable/products/overview/overview";
import ProductSlider from "@/app/reuseable/products/product-slider/product_slider";

import Title2 from "@/app/reuseable/products/title-2/title_2";
import Title from "@/app/reuseable/products/title/title";
import AnimatedSection from "@/app/reuseable/Animation/AnimatedSection";



// Here is auto-slider data
const products = [
  {
    title: "Modern Simplicity Design..",
    description: "",
    image: "/products/Nova/Auto-Slider/image-1.png",
  },
  {
    title: "Multi-Color Modes LED strips in the front and bottom.",
    description: "",
    image: "/products/Nova/Auto-Slider/image-2.png",
  },
];

const slides = [
  {
    title: 'Multi-Color Modes',
    highlight: ' Of Light Strip',
    description:
      'RGB light Strip with pure design of front panel and pre-installed RGB LED strip in the front and bottom delivers RGB LED illumination, which is exclusively designed for Tortox Nova RGB PC gaming case.',
    image: '/products/Nova/showcase/image-1.png',
  },
  {
    title: 'The Rigor And Detail Of',
    highlight: ' Nordic Design',
    description:
      '0.8MM Hardware Structure to achieve solid and steady effect.',
      image: '/products/Nova/showcase/image-2.png',
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
const NovaPage = () => {
  return (
    <div className="w-full md:w-[1440px] mx-auto">
      {/* ProductBanner */}
      <AnimatedSection delay={0.1}>
      <ProductBanner
        bgImage="/products/iris-banner.png"
        logo1="/logo.png"
        logo2="/products/Nova/image.png"
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
                          subTitle="Nova"
                          content="NOVA simplistic design, aluminium badge, color options and full tempered glass side panel mean it will blend in perfectly. To seal fan noise inside the chassis, we developed a closed front panel for Nova. Nova supports up to four full size 3.5 hard drives, two 2.5 compact hard drives or SSDs and features a full size 5.25 optical disc drive slot."
                        />
       </div>
      </AnimatedSection>
  
    {/* Here is auto slider section */}
      <AnimatedSection delay={0.1}>
     <AutoSlider
  products={products}
  mainTitle="TORTOX"
  subTitle="NOVA"
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


    {/*Title2*/}
      <AnimatedSection delay={0.1}>
      <div className="text-xl text-[#FFFFFF]">
        <Title2
          mainTitle="TORTOX"
          subTitle="nova"
          content="Featuring 5.25” exposed x1, 3.5” hidden x2, 2.5”SSD x3 or 5(sharing 2 with 3’5) Drive bays and additional connections for all modern peripherals."
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
  
             {/* Expensive */}
      <AnimatedSection delay={0.1}>
<Expensive
  bgImage="/products/Shadow/expensive/image.png"
  title="Remaking the Idea of Gaming Case"
  description="With the explosion of high-definition content, users are going to need a lot more storage to keep it all. Shadow offers no less than seven PCI Slot & two 3.5” HDD bays for massive storage capability. You can even install a 2.5” SSD on the case for lightning-fast boot times."
/>
</AnimatedSection>
  
        {/* Feature Block */}
  <AnimatedSection delay={0.1}>
 <FeatureBlock
  imageSrc="/products/Nova/dual-feature/image-2.png"
  imageAlt="Open Neon Case"   title=""
   highlight="Flexible Cooling Option"
   description={`To cool down the components, Grid Design on the front panel
   has offered smooth intake. NEON supports up to two 140mm fans or a 280mm radiator in the front while a 120mm rear-fan
   or radiator at the rear will push the hot air out. It also supports up
   to 163mm high CPU air cooler.`}
  note="Three Single Colour(Red) 33 LED Case Fans Pre-installed"
   imageLeft={true} />

 <FeatureBlock
    imageSrc="/products/Nova/dual-feature/image-1.png"
   imageAlt="Two NEON Cases"
  title="Tool-free"
 highlight="modular storage design"
 description={`Both the included hard drive cages are modular and tool-free
  giving the user the ability to configure the system to their needs. Apart from these hard drive cages which accommodate up to 2
   HDDs, the NEON comes with three modular SSD brackets. Available in with or without RGB windowed side panel case, you can
  choose the NEON that blends perfectly with your surroundings.`}
  imageLeft={false}
/>
</AnimatedSection>
  
         {/* Specification section */}
  <AnimatedSection delay={0.1}>
   <SpecificationSection specifications={specs} />
</AnimatedSection>
  
 {/* Products slider */}
  <AnimatedSection delay={0.1}>
 <ProductSlider title="Other Products" products={sampleProducts} />
</AnimatedSection>
    </ div>
  );
};

export default NovaPage;
