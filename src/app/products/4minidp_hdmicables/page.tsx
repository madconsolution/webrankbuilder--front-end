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



export default minidp4_hdmicables;
