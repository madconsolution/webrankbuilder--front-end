'use client';

import CablesBanner from "@/app/reuseable/cables/banner/banner";
import ResolutionSection from "@/app/reuseable/cables/Resolution/resulution";
import SpecificationSection, { SpecificationItem } from "@/app/reuseable/cables/Specification/specification";
import CallToActionBanner from "@/app/reuseable/products/join-group/join_group";
import Title from "@/app/reuseable/products/title/title";

  // Here is specification date

     const specs: SpecificationItem[] = [

      {
        type: 'dimensions',
        items: [
          { label: 'Model ', value: ' USB C to HDMI' },
          { label: 'Built In Conversion Chip ', value: 'Yes' },
       
          { label: 'PVC Jackets  ', value: 'Yes' },
 
        ],
      },
      {
        type: 'additional',
        items: [
      
          { label: 'Shell Type ', value: 'Aluminium', highlight: true },
          { label: 'Max Resolution ', value: '4k@60Hz' },
          { label: 'Compatibility ', value: 'Smartphone, TV, Projector ', highlight: true },

        ],
      },
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
const c_to_hdmi_page= () => {
  return (
    <div className="w-full md:w-[1440px] mx-auto">
   <CablesBanner
      bgImage="/adapter/c_to_hdmi/banner.png"
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
               subTitle="USB TYPE C TO HDMI"
               content="The Tortox USB C Adapter is designed to provide a high-resolution visual experience, delivering stunning 4K quality with a reliable and smooth viewing performance. It offers seamless streaming compatibility, allowing users to connect their smartphones equipped with USB C ports, TVs, projectors, or monitors with HDMI ports. This enables the direct streaming of movies, sports events, and gaming. The adapter is not only portable and lightweight but also user-friendly. It features a reinforced joint for added durability and an aluminum casing to manage heat effectively. With its plug-and-play functionality, no additional drivers are required—simply connect and enjoy high-resolution visuals instantly. This adapter is ideal for movie enthusiasts, sports fans, and binge-watchers of Netflix and Amazon Prime. It is also perfect for professionals who need to cast presentations onto projectors during meetings."
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

export default c_to_hdmi_page;
