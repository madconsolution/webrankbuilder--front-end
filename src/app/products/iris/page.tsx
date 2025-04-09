'use client'

import ProductBanner from "@/app/reuseable/products/banner/page";
import FeatureHighlightSection from "@/app/reuseable/products/feature/page";
import FeatureSlider from "@/app/reuseable/products/freature-slider/page";
import FeatureCard from "@/app/reuseable/products/freature-slider/page";
import ProductOverview from "@/app/reuseable/products/overview/page";
import ProductSlider from "@/app/reuseable/products/product-slider/page";

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

// 

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
// 
const sampleProducts = [
  { image: '/products/IRIS/Feature-slider/image-1.png' },
  { image: '/products/IRIS/Feature-slider/image-2.png' },
  { image: '/products/IRIS/Feature-slider/Background.png' },

];

const IrisPage = () => {
  return (
    <>
      {/* Banner Section */}
   <ProductBanner
          bgImage="/products/iris-banner.png"
          logo1="/logo.png"
          logo2="/products/IRIS.png"
          description="ATX MID TOWER COMPUTER CASE THAT HAVE GREAT DESIGN"
        />

      {/* Overview Section */}
     <ProductOverview products={products} />


      {/* Here is Feature highlight section  */}

      <FeatureHighlightSection
      image="/products/feature-prof.png" 
      title="FUTURE-PROOF FRONT PANEL"
      highlightText="Featuring a super-speed USB 3.1 port, RGB Lighting Control switch and additional connections for all modern peripherals."
      position="right" 
    />
     {/* Here is feature slider */}
     <FeatureSlider slides={slides} />
     {/* Other product slider */}
     <ProductSlider title="Other Products" products={sampleProducts} />
    </>
  );
};

export default IrisPage;
