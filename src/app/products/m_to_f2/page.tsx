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

export default m_to_f2_page;
