'use client';

import CablesBanner from "@/app/reuseable/cables/banner/banner";
import SpecificationSection, { SpecificationItem } from "@/app/reuseable/cables/Specification/pecification";
import CallToActionBanner from "@/app/reuseable/products/join-group/join_group";
import Title from "@/app/reuseable/products/title/title";
import Cable6ResolutionSection from './../../sections/cables/cables6_section';

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
