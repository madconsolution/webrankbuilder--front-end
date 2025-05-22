'use client';

import CablesBanner from "@/app/reuseable/cables/banner/banner";
import ResolutionSection from "@/app/reuseable/cables/Resolution/resulution";
import SpecificationSection, { SpecificationItem } from "@/app/reuseable/cables/Specification/pecification";
import CallToActionBanner from "@/app/reuseable/products/join-group/join_group";
import Title from "@/app/reuseable/products/title/title";
import Hdmi8ResolutionSection from "@/app/sections/cables/8hdmi_cables_section";

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


const hdmi8_cables_page = () => {
  return (
    <div className="w-full md:w-[1440px] mx-auto">
   <CablesBanner
      bgImage="/cables/8hdmi_cables/banner.png"
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
               subTitle=" High Speed HDMI 2.1 8k 60Hz CABLES"
               content="Tortox high-speed HDMI cable is designed and manufactured for quality, durability & efficiency. The cable helps you to enjoy 8k resolution @60Hz refresh rate for an ultimate visual experience. Moreover, the cable can transfer 18Gbps to 48Gbps which means a 6GB film can be transferred in seconds; users can experience lag-free visual and audio, Additionally, Dynamic HDR and 3D effects further optimize the visual experience. The top configuration is backward compatible with HDMI 2.0b/2.0a/1.4/1.3/1.2/1.1 versions, and supports Dolby Vision and Dolby Sound, offering an exceptional experience. The HDMI cable features connectors coated with 24k gold and an aluminum shell body. Furthermore, the Tortox HDMI Cable is made with oxygen-free copper conductors to enhance both image and sound quality, ensuring no compromise on quality."
             />
              </ div>
        {/* Resolution section */}
        <Hdmi8ResolutionSection />;
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



export default hdmi8_cables_page;
