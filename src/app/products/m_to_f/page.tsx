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
const m_to_f_page= () => {
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

export default m_to_f_page;
