'use client';

import CablesBanner from "@/app/reuseable/cables/banner/banner";
import ResolutionSection from "@/app/reuseable/cables/Resolution/resulution";
import SpecificationSection, { SpecificationItem } from "@/app/reuseable/cables/Specification/pecification";

import CallToActionBanner from "@/app/reuseable/products/join-group/join_group";
import Title from "@/app/reuseable/products/title/title";


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
const mini_dp_to__page= () => {
  return (
    <div className="w-full md:w-[1440px] mx-auto">
   <CablesBanner
      bgImage="/adapter/mini_dp_to_dp/banner.png"
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
               subTitle="MINI DP TO DP ADAPTER CABLE 4K@60Hz"
               content="The Tortox Mini DP to DP Adapter Cable is designed to support 4K resolution at 60Hz, providing high-quality visuals and fast data transmission. Compliant with the DP1.2 standard, this adapter can handle speeds up to 21.6Gbps, enabling smooth playback and a high-definition 3D experience for both gaming and movie watching. Its versatility includes two modes: mirror mode for sharing content and presentations, and extension mode for multitasking across a larger screen. The adapter's anti-loosing design ensures a secure and stable connection, with a gold-plated interface that enhances durability. It's widely compatible with various devices, including desktops, laptops, MacBooks, displays, and projectors, making it a practical choice for both work and entertainment."
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

export default mini_dp_to__page;
