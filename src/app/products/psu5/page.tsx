'use client';

import CablesBanner from "@/app/reuseable/cables/banner/banner";
import ResolutionSection from "@/app/reuseable/cables/Resolution/resulution";
import SpecificationSection, { SpecificationItem } from "@/app/reuseable/cables/Specification/pecification";
import CallToActionBanner from "@/app/reuseable/products/join-group/join_group";
import Title from "@/app/reuseable/products/title/title";
import Cable10ResolutionSection from "@/app/sections/cables/cables10_section";

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

const psu5_page = () => {
  return (
    <div className="w-full md:w-[1440px] mx-auto">
   <CablesBanner
      bgImage="/cables/psu5/banner.png"
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
               subTitle="PSU 24 Pin ARGB Extension Cables"
               content="The Tortox PSU ARGB Extension Cables are a premium choice for PC builders looking to combine functionality with eye-catching aesthetics. Featuring a dual 6+2 Pin2 configuration, these cables are compatible with a wide range of power supply units, ensuring reliable power distribution. The integrated ARGB illumination syncs seamlessly with 5V 3-pin connectors, allowing for synchronized and dynamic RGB lighting across your build. Made from high-quality silicone, these cables offer exceptional durability and flexibility, simplifying cable management and ensuring long-lasting performance. With 100 LED beads embedded within, the cables provide vibrant and even lighting, adding customizable visual effects to your system. The expandable TPE material enhances flexibility, making installation straightforward and ensuring a clean, organized interior. Additionally, the special protective coating on the cable's resists wear and tear, preserving their aesthetic appeal over time. Available in various configurations, including 6+2 Pin2, 6+2 Pin3, 12+4 PCI-E 5.0 12VHPWR Pin to 83 PCI-E Pin, and 24 Pin, these cables are designed to meet the needs of any PC build."
             />
              </ div>
        {/* Resolution section */}
        <Cable10ResolutionSection />;
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



export default psu5_page;
