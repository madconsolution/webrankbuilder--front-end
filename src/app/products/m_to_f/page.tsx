'use client';

import CablesBanner from "@/app/reuseable/cables/banner/banner";
import Resolution2Section from "@/app/reuseable/cables/Resolution/Resolution2";
import SpecificationSection, { SpecificationItem } from "@/app/reuseable/cables/Specification/pecification";
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
  const resolutionData = [
    {
      mainImage: '/adapter/m_to_f/resolution/left-cable.png',
      overlayImage: '/cables/4hdmi_cables/resolution/right-1.png',
      title: 'Stream Visuals From Your Smartphone',
  
      
      descriptionImage: '/cables/4hdmi_cables/resolution/monitor.png',
    },
    {
      mainImage: '/adapter/m_to_f/resolution/right-cable.png',
      title: 'Experience The Brilliance Of',
      descriptionImage: '/adapter/m_to_f/resolution/max-image.png',
      badges: [
        '/cables/4hdmi_cables/resolution/right-1.png',
        '/cables/4hdmi_cables/resolution/right-2.png',
        '/cables/4hdmi_cables/resolution/right-3.png',
      ],
    },
  ];
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
        <Resolution2Section cards={resolutionData} />;
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
