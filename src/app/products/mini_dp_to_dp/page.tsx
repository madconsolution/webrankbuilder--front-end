'use client';

import CablesBanner from "@/app/reuseable/cables/banner/banner";
import Resolution2Section from "@/app/reuseable/cables/Resolution/Resolution2";
import CableSpecificationSection from "@/app/reuseable/cables/Specification/CableSpecification";
import { SpecificationItem } from "@/app/reuseable/cables/Specification/specification";

import CallToActionBanner from "@/app/reuseable/products/join-group/join_group";
import Title from "@/app/reuseable/products/title/title";


//   Here is resolution data
const cards = [
  {
    type: 'single',
    mainImage: '/adapter/m_to_f2/resolution/left-cable.png',
    title: (
      <>
             <span className="  mini-to-dp-text-left-top">Enjoy 4k Resolution</span><br />
        <span className=" mini-to-dp-text-left-bottom">Supports 3840*2160@30Hz</span>
      </>
    ),
    descriptionImage: '/cables/4hdmi_cables/resolution/monitor.png',
  },
  {
    type: 'dual',
    mainImage: '/adapter/m_to_f2/resolution/right-cable.png',
    title: (
      <>
        Mirror <span className="text-white">&</span><br />
        Extended Modes
      </>
    ),
    descriptionImage: '/adapter/m_to_f/resolution/max-image.png',
  }
] as const;


  
     // Here is specification date
     const specs: SpecificationItem[] = [

      {
        type: 'dimensions',
        items: [
          { label: 'Model ', value: 'DP to HDMI Adapter' },
          { label: 'Gold Plated Connectors ', value: 'Yes' },
       
          { label: 'Built-in Conversion Chips ', value: 'Yes' },
 
        ],
      },
      {
        type: 'additional',
        items: [
      
          { label: 'Bandwidth ', value: '10.8GBPS', highlight: true },
          { label: 'Max Resolution ', value: '4k@60Hz' },
          { label: 'Compatibility  ', value: 'TV, Monitors, Projectors', highlight: true },

        ],
      },
    ];
const mini_dp_to__page= () => {
  return (
    <div className="w-full md:w-[1440px] mx-auto">
   <CablesBanner
      bgImage="/adapter/mini_dp_to_dp/banner.png"
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
               subTitle="MINI DP TO DP ADAPTER CABLE 4K@60Hz"
               content="The Tortox Mini DP to DP Adapter Cable is designed to support 4K resolution at 60Hz, providing high-quality visuals and fast data transmission. Compliant with the DP1.2 standard, this adapter can handle speeds up to 21.6Gbps, enabling smooth playback and a high-definition 3D experience for both gaming and movie watching. Its versatility includes two modes: mirror mode for sharing content and presentations, and extension mode for multitasking across a larger screen. The adapter's anti-loosing design ensures a secure and stable connection, with a gold-plated interface that enhances durability. It's widely compatible with various devices, including desktops, laptops, MacBooks, displays, and projectors, making it a practical choice for both work and entertainment."
             />
              </ div>
        {/* Resolution section */}
        <Resolution2Section  cards={cards}/>; 
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

export default mini_dp_to__page;
