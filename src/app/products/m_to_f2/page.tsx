'use client';

import CablesBanner from "@/app/reuseable/cables/banner/banner";
import Resolution2Section from "@/app/reuseable/cables/Resolution/Resolution2";
import SpecificationSection, { SpecificationItem } from "@/app/reuseable/cables/Specification/specification";
import CallToActionBanner from "@/app/reuseable/products/join-group/join_group";
import Title from "@/app/reuseable/products/title/title";

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


// 
const m_to_f2_page= () => {
  return (
    <div className="w-full md:w-[1440px] mx-auto">
   <CablesBanner
      bgImage="/adapter/m_to_f2/banner.png"
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
               content="The Tortox Mini DisplayPort to HDMI 4K Adapter is a reliable solution for connecting Mini DisplayPort or Thunderbolt port-compatible PCs or graphics cards to HDMI-equipped displays such as HDTVs, monitors, or projectors. This adapter facilitates the transmission of both audio and video over a single cable, supporting video resolutions up to 4K at 30Hz and delivering flawless audio pass-thru for uncompressed digital 7.1, 5.1, or 2 channels. With the capability to extend or mirror laptop/PC displays, this adapter is versatile for expanded workstations, home theaters, or professional presentations. The built-in chipset ensures signal conversion only from Mini DisplayPort to HDMI, and the reinforced stress points in the cable prevent connector splitting, contributing to its durability. The gold-plated connectors resist corrosion, promising a longer lifespan and consistent signal performance over time, making it a convenient and reliable choice for users seeking seamless connectivity between Mini DisplayPort devices and HDMI displays."
             />
              </ div>
        {/* Resolution section */}
        <Resolution2Section cards={cards} />;
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

export default m_to_f2_page;
