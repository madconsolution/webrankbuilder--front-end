'use client'

import ProductBanner from "@/app/reuseable/products/banner/page";
import FeatureHighlightSection from "@/app/reuseable/products/feature/page";
import ProductOverview from "@/app/reuseable/products/overview/page";

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

const IrisPage = () => {
  return (
    <>
      {/* Banner Section */}
      <>
        <ProductBanner
          bgImage="/products/iris-banner.png"
          logo1="/logo.png"
          logo2="/products/IRIS.png"
          description="ATX MID TOWER COMPUTER CASE THAT HAVE GREAT DESIGN"
        />
      </>

      {/* Vertical spacing between Banner and Overview */}


      {/* Overview Section */}
      <>
        <ProductOverview products={products} />
      </>

      {/* Here is Feature highlight section  */}

      <>
      <FeatureHighlightSection
      image="/products/feature-prof.png" 
      title="FUTURE-PROOF FRONT PANEL"
      highlightText="Featuring a super-speed USB 3.1 port, RGB Lighting Control switch and additional connections for all modern peripherals."
      position="right" // or "left"
    />
      </>
    </>
  );
};

export default IrisPage;
