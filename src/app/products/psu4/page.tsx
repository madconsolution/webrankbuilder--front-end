'use client';

import CablesBanner from "@/app/reuseable/cables/banner/banner";
import CableSpecificationSection from "@/app/reuseable/cables/Specification/CableSpecification";
import  { SpecificationItem } from "@/app/reuseable/cables/Specification/pecification";
import CallToActionBanner from "@/app/reuseable/products/join-group/join_group";
import Title from "@/app/reuseable/products/title/title";
import Cable9ResolutionSection from "@/app/sections/cables/cables9_section";

  // Here is specification date
const specs: SpecificationItem[] = [
  
    {
      type: 'dimensions',
      items: [
        { label: 'Size ', value: '345 X 40 X 18mm' },
        { label: 'Rated Voltage ', value: 'Line 300V - Light 5V' },
       
      ],
    },
    {
      type: 'additional',
      items: [
   
        { label: 'Electric Current ', value: 'Line 7A - Light 810mA' },
        { label: 'Sillicon Tube ', value: '253mm' },
    
      ],
    },
  ];

const psu4_page = () => {
  return (
    <div className="w-full md:w-[1440px] mx-auto">
   <CablesBanner
      bgImage="/cables/psu4/banner.png"
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
               subTitle="PSU 12+4 PCI-E 5.0 12 VHPWR Pin To 8*3 PCI-E Pin ARGB Extension Cable"
               content="The Tortox PSU ARGB Extension Cables are a premium choice for PC builders looking to combine functionality with eye-catching aesthetics. Featuring a dual 6+2 Pin2 configuration, these cables are compatible with a wide range of power supply units, ensuring reliable power distribution. The integrated ARGB illumination syncs seamlessly with 5V 3-pin connectors, allowing for synchronized and dynamic RGB lighting across your build. Made from high-quality silicone, these cables offer exceptional durability and flexibility, simplifying cable management and ensuring long-lasting performance. With 100 LED beads embedded within, the cables provide vibrant and even lighting, adding customizable visual effects to your system. The expandable TPE material enhances flexibility, making installation straightforward and ensuring a clean, organized interior. Additionally, the special protective coating on the cable's resists wear and tear, preserving their aesthetic appeal over time. Available in various configurations, including 6+2 Pin2, 6+2 Pin3, 12+4 PCI-E 5.0 12VHPWR Pin to 83 PCI-E Pin, and 24 Pin, these cables are designed to meet the needs of any PC build."
             />
              </ div>
        {/* Resolution section */}
        <Cable9ResolutionSection />;
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



export default psu4_page;
