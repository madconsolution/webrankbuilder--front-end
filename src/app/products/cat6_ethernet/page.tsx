'use client';

import CablesBanner from "@/app/reuseable/cables/banner/banner";
import  { SpecificationItem } from "@/app/reuseable/cables/Specification/pecification";
import CallToActionBanner from "@/app/reuseable/products/join-group/join_group";
import Title from "@/app/reuseable/products/title/title";
import Cable6ResolutionSection from './../../sections/cables/cables6_section';
import CableSpecificationSection from "@/app/reuseable/cables/Specification/CableSpecification";

  // Here is specification date
const specs: SpecificationItem[] = [
  
    {
      type: 'dimensions',
      items: [
        { label: 'Model ', value: 'CAT6E UTP 4Pairs 24AWG' },
        { label: 'Length  ', value: '1m' },
        { label: 'Download Speed ', value: '10GBPS' },

       
 
      ],
    },
    {
      type: 'additional',
      items: [
   
        { label: 'Splash Proof   ', value: 'Yes', highlight: true },
        { label: 'PVC Outer Jacket', value: 'Yes ' },
    
       
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
        <Cable6ResolutionSection />;
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



export default cat6_ethernet_page;
