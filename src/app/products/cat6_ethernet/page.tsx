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
const cat6_ethernet_page = () => {
  return (
    <div className="w-full md:w-[1440px] mx-auto">
   <CablesBanner
      bgImage="/cables/cat6_ethernet/banner.png"
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
               subTitle="CAT 6E ETHERNET CABLE"
               content="Tortox CAT 6E Ethernet Cable is designed to elevate your connectivity experience. This cable is ETL Verified to meet the stringent ETA/TIA 568 standards, ensuring top-notch performance in various applications. Enjoy seamless high-speed connections with a remarkable 10Gbps download speed capability. The cable's premium quality construction includes 4 twisted pairs of color-coded, 24AWG, stranded bare copper wire, featuring 100% Oxygen-free copper for enhanced data transmission. Built to last, the PVC outer jackets resist twists, turns, and abrasions while reducing crosstalk for optimal signal integrity. With a splashproof coating, this cable is well-protected against environmental elements, making it suitable for both indoor and outdoor use. Experience versatility with a higher frequency rate compared to CAT 6, making the Tortox CAT 6E ideal for phone lines, home networks, office setups, and data centers. Upgrade your connectivity and redefine your networking experience with the Tortox CAT 6E Ethernet Cable, where speed, quality, and durability converge for unparalleled performance.."
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



export default cat6_ethernet_page;
