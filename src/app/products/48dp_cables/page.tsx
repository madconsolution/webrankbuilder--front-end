'use client';

import CablesBanner from "@/app/reuseable/cables/banner/banner";
import CableSpecificationSection from "@/app/reuseable/cables/Specification/CableSpecification";

import  { SpecificationItem } from "@/app/reuseable/cables/Specification/specification";
import CallToActionBanner from "@/app/reuseable/products/join-group/join_group";
import Title from "@/app/reuseable/products/title/title";
import Cable3ResolutionSection from "@/app/sections/cables/cables3_section";


// Here is specification date
  // Here is specification date
const specs: SpecificationItem[] = [
 
    {
      type: 'dimensions',
      items: [
        { label: 'Model ', value: 'DP to DP 8k' },
        { label: 'Transfer Speed ', value: '32.4 GBPS' },
        { label: 'Plug ', value: 'Gold Plated' },
    
      ],
    },
    {
      type: 'additional',
      items: [
   
        { label: 'Body ', value: ' Aluminium', highlight: true },
        { label: 'Max Resolution ', value: '8k@60Hz' },
        { label: 'Compatibility ', value: 'Graphics Card, Monitor, Desktop, Laptop', highlight: true },
   
      ],
    },
  ];

const dp48_cables_page = () => {
  return (
    <div className="w-full md:w-[1440px] mx-auto">
   <CablesBanner
      bgImage="/cables/48dp_cables/banner.png"
      logo1="/logo.png"
      logo2="/products/IRIS.png"
      description={[
        'Engineered for Durability ',
        '',
        'Stuffed with Features',
      ]}
    />
     
       {/* Here is first heading title */}
            <div className="text-xl text-[#FFFFFF]">
             <Title
               mainTitle="TORTOX"
               subTitle=" 8k@60Hz, 4k@120Hz DP To DP CABLE"
               content="The Tortox 8K DisplayPort to DisplayPort Cable is a powerhouse that delivers unparalleled visual experiences. With support for 8K at 60Hz, 4K at 144Hz, and more, this cable ensures high-fidelity visuals with the fastest refresh rates. Boasting a robust bandwidth of 32.4Gbps, the Tortox cable eliminates picture delays during streaming, providing a seamless visual experience for gaming and content creation. The 24K gold-plated plug and Aluminum Alloy Shell guarantee corrosion resistance and enhanced durability. Crafted with 100% Oxygen-Free Copper conductors and PVC jackets, this cable ensures a stable signal transmission over time. Compatible with monitors, laptops, and graphics cards supporting DisplayPort or DP++, the Tortox cable is your key to an elevated display setup. Upgrade to Tortox for quality, performance, and an immersive visual journey. Elevate your standards with the Tortox 8K DisplayPort to DisplayPort Cable - where high resolution meets reliability."
             />
              </ div>
        {/* Resolution section */}
        <Cable3ResolutionSection/>;
        {/* Specification section */}
        <CableSpecificationSection specifications={specs} />
           
          {/* Join Group  */}
      <CallToActionBanner
  text="Over 1000's of gamers already using our products."
  buttonLabel="Join Our Group"
  buttonHref="/community"
/>

    </ div>
  );
};



export default dp48_cables_page;
