'use client';

import CablesBanner from "@/app/reuseable/cables/banner/banner";
import Resolution2Section from "@/app/reuseable/cables/Resolution/Resolution2";
import CableSpecificationSection from "@/app/reuseable/cables/Specification/CableSpecification";
import { SpecificationItem } from "@/app/reuseable/cables/Specification/specification";
import CallToActionBanner from "@/app/reuseable/products/join-group/join_group";
import Title from "@/app/reuseable/products/title/title";

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
const cards = [
  {
    type: 'single',
    mainImage: '/adapter/m_to_f/resolution/left-cable.png',
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
    mainImage: '/adapter/m_to_f/resolution/right-cable.png',
    title: (
      <>
        Mirror <span className="text-white">&</span><br />
        Extended Modes
      </>
    ),
    descriptionImage: '/adapter/m_to_f/resolution/max-image.png',
  }
] as const;

const m_to_f_page = () => {
  return (
    <div className="w-full md:w-[1440px] mx-auto">
   <CablesBanner
      bgImage="/adapter/m_to_f/banner.png"
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
               subTitle="DP DISPLAY PORT MALE TO HDMI FEMALE 4K CABLE CONVERTER ADAPTER"
               content="The Tortox DP to HDMI adapter is designed to transmit high-quality video and audio from computers or tablets to monitor displays, supporting a 20-pin DisplayPort interface and providing a video bandwidth of up to 10.8Gbps. This makes it capable of handling video resolutions up to 4K at 30Hz and 1080p (Full HD), allowing users to enjoy high-quality visuals. Its universal adaptability means it can be connected to TVs, monitors, and desktops, making it highly versatile. Constructed from premium materials, the adapter is durable and resistant to corrosion, ensuring rigidity and improved signal performance. The built-in conversion chip eliminates the need for an external power supply, enhancing its ease of use. Tortox combines innovative design and aesthetics with optimal functionality, ensuring better performance and output."
             />
              </ div>
        {/* Resolution section */}
        <Resolution2Section cards={cards} />;
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

export default m_to_f_page;
