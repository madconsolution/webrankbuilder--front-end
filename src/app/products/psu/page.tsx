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
const psu_page = () => {
  return (
    <div className="w-full md:w-[1440px] mx-auto">
   <CablesBanner
    bgImage="/cables/psu/banner.png"
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
               subTitle="PSU 6+2 PIN * 2 ARGB EXTENSION CABLES"
               content="The Tortox PSU ARGB Extension Cables are a premium choice for PC builders looking to combine functionality with eye-catching aesthetics. Featuring a dual 6+2 Pin2 configuration, these cables are compatible with a wide range of power supply units, ensuring reliable power distribution. The integrated ARGB illumination syncs seamlessly with 5V 3-pin connectors, allowing for synchronized and dynamic RGB lighting across your build. Made from high-quality silicone, these cables offer exceptional durability and flexibility, simplifying cable management and ensuring long-lasting performance. With 100 LED beads embedded within, the cables provide vibrant and even lighting, adding customizable visual effects to your system. The expandable TPE material enhances flexibility, making installation straightforward and ensuring a clean, organized interior. Additionally, the special protective coating on the cable's resists wear and tear, preserving their aesthetic appeal over time. Available in various configurations, including 6+2 Pin2, 6+2 Pin3, 12+4 PCI-E 5.0 12VHPWR Pin to 83 PCI-E Pin, and 24 Pin, these cables are designed to meet the needs of any PC build."
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



export default psu_page;
