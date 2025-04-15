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
const hdmi4_cables_page= () => {
  return (
    <div className="w-full md:w-[1440px] mx-auto">
   <CablesBanner
      bgImage="/cables/4hdmi_cables/banner.png"
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
               subTitle="4K 60Hz HDMI CABLES"
               content="Unleash the power of Tortox Ultra HD HDMI Cable, your gateway to a visual revolution. Immerse yourself in 4K brilliance, seamless Mirror Mode, and a blazing 18Gbps bandwidth. Connect effortlessly to TVs, monitors, PlayStation, projectors, computers, and laptops for unparalleled versatility. Dive into a world of superior audio with support for Dolby True-HD, DTS-HD, and master audio, accommodating up to 32 sound channels simultaneously. The gold-plated connectors ensure a stable, corrosion-resistant link, and the sleek aluminum shell adds a touch of durability and style. Elevate your entertainment experience with Tortox – where cutting-edge technology meets reliability for a future-forward connection. Welcome to the next level."
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

export default hdmi4_cables_page;
