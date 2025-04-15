'use client';

import CablesBanner from "@/app/reuseable/cables/banner/page";
import ResolutionSection from "@/app/reuseable/cables/Resolution/page";
import SpecificationSection from "@/app/reuseable/cables/Specification/page";
import CallToActionBanner from "@/app/reuseable/products/join-group/page";
import Title from "@/app/reuseable/products/title/page";

// Here is specification date
const specs = [
    { label: 'Model', value: 'USB C To HDMI' },
    { label: 'Built In Conversion Chip', value: 'Yes' },
    { label: 'PVC Jackets', value: 'Yes' },
    { label: 'Shell Type', value: 'Aluminium' },
    { label: 'Max Resolution', value: '4k@60Hz' },
    { label: 'Compatibility', value: 'Smartphone, TV, Projector' },
  ];

//   Here is resolution data



  const resolutionData = [
    {
      mainImage: '/cables/4hdmi_cables/resolution/cable-1.png',
      overlayImage: '/cables/4hdmi_cables/resolution/right-1.png',
      title: 'Stream Visuals From Your Smartphone',
      descriptionImage: '/cables/4hdmi_cables/resolution/monitor.png',
    },
    {
      mainImage: '/cables/4hdmi_cables/resolution/cable-2.png',
      title: 'Experience The Brilliance Of',
      descriptionImage: '/cables/4hdmi_cables/resolution/right-1.png',
      badges: [
        '/cables/4hdmi_cables/resolution/right-1.png',
        '/cables/4hdmi_cables/resolution/right-2.png',
        '/cables/4hdmi_cables/resolution/right-3.png',
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
        'ATX MID TOWER COMPUTER',
        'CASE',
        'THAT HAVE GREAT DESIGN',
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
        <ResolutionSection cards={resolutionData} />;
        {/* Specification section */}
        <SpecificationSection specifications={specs} />
           
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
