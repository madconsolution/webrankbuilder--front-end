'use client';

import SpecificationSection from "@/app/reuseable/cables/Specification/page";
import CaseBanner from "@/app/reuseable/case/banner/page";
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


const ninja_x3_page = () => {
  return (
    <div className="w-full md:w-[1440px] mx-auto">
   <CaseBanner
      bgImage="/case/Ninja-x/banner.png"
      logo1="/logo.png"
      logo2="/case/Ninja-x/ninja-x.png"
      description={[
        'Beautiful LED Cooling System',
  
        'Crafted For The Dynamic Game Players',
      ]}
    />
     
       {/* Here is first heading title */}
            <div className="text-xl text-[#FFFFFF]">
             <Title
               mainTitle="TORTOX"
               subTitle="Ninja"
               content="The original Ninja was well known for being one of the best heatsink around. The fan is a beautiful LED cooling system with various RGB color effect. You can adjust the awesome LED visual effect and color with the controller. The LED ring and fan blade are sharp made also add points on the install effect."
             />
              </ div>
 
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

export default ninja_x3_page;
