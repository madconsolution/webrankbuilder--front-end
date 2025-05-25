'use client';

import CablesBanner from "@/app/reuseable/cables/banner/banner";


import CallToActionBanner from "@/app/reuseable/products/join-group/join_group";
import Title from "@/app/reuseable/products/title/title";
import Cable1ResolutionSection from "@/app/sections/cables/cables1_section";


const hdmi4_cables_page= () => {
  return (
    <div className="w-full md:w-[1440px] mx-auto">
   <CablesBanner
      bgImage="/cables/4hdmi_cables/banner.png"
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
               subTitle="4K 60Hz HDMI CABLES"
               content="Unleash the power of Tortox Ultra HD HDMI Cable, your gateway to a visual revolution. Immerse yourself in 4K brilliance, seamless Mirror Mode, and a blazing 18Gbps bandwidth. Connect effortlessly to TVs, monitors, PlayStation, projectors, computers, and laptops for unparalleled versatility. Dive into a world of superior audio with support for Dolby True-HD, DTS-HD, and master audio, accommodating up to 32 sound channels simultaneously. The gold-plated connectors ensure a stable, corrosion-resistant link, and the sleek aluminum shell adds a touch of durability and style. Elevate your entertainment experience with Tortox – where cutting-edge technology meets reliability for a future-forward connection. Welcome to the next level."
             />
              </ div>
        {/* Resolution section */}
        <Cable1ResolutionSection />;
   
    
           
          {/* Join Group  */}
      <CallToActionBanner
  text="Over 1000's of gamers already using our products."
  buttonLabel="Join Our Group"
  buttonHref="/community"
/>

    </ div>
  );
};

export default hdmi4_cables_page;
