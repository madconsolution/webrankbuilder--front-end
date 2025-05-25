'use client';

import CablesBanner from "@/app/reuseable/cables/banner/banner";
import SpecificationSection, { SpecificationItem } from "@/app/reuseable/cables/Specification/specification";
import CallToActionBanner from "@/app/reuseable/products/join-group/join_group";
import Title from "@/app/reuseable/products/title/title";
import Cable5ResolutionSection from "@/app/sections/cables/cables5_section";



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

const minidp4_hdmicables = () => {
  return (
    <div className="w-full md:w-[1440px] mx-auto">
   <CablesBanner
      bgImage="/cables/4minidp_hdmicables/banner.png"
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
               subTitle=" MINI DISPLAY PORT TO HDMI"
               content="Introducing the Tortox 4K Ultra HD Mini DP to HDMI Cable, a cutting-edge solution designed to seamlessly connect your devices and elevate your visual experience. This 1.8-meter cable boasts a Mini DisplayPort v1.2 compatibility, supporting the 20-pin Mini DisplayPort interface and delivering a remarkable video bandwidth of up to 10.8Gbps. Experience lightning speed with the Tortox cable, capable of transferring data at an impressive rate of 10.8Gbps, ensuring a smooth and uninterrupted visual experience for users. Say goodbye to picture delays and enjoy seamless connectivity for your high-definition content. Effortless usability is a key feature of the Tortox Mini DP to HDMI cable – it's a plug-and-play solution that requires no additional drivers. Enjoy hassle-free connections with support for uncompressed audio, including LPCM, and compressed audio formats such as DTS Digital and Dolby Digital, encompassing DTS-HD and Dolby True HD for an immersive audio experience. The cable is equipped with a built-in conversion chip, eliminating the need for an external power supply. This innovative design supports one-way, single-channel, four-wire connections, and allows for hot swapping, making it convenient and versatile for various setups. Crafted to universal standards and designed strictly with the Mini DP standard, the Tortox cable aligns perfectly with Apple's Mini DP specification, ensuring stable and reliable signal transmission. The cable's HDMI portion supports audio and video synchronization transmission, catering specifically to Apple computers. Versatility is key – the Tortox Mini DP to HDMI cable is compatible with a range of devices, including laptops, TVs, VR systems, desktops, and projectors. It supports mirror modes, providing flexible display options for different applications. Elevate your connectivity with the Tortox 4K Ultra HD Mini DP to HDMI Cable – where performance, ease of use, and compatibility converge for a superior multimedia experience."
             />
              </ div>
        {/* Resolution section */}
        <Cable5ResolutionSection/>;
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



export default minidp4_hdmicables;
