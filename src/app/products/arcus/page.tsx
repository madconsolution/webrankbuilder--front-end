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


const acrus_page = () => {
  return (
    <div className="w-full md:w-[1440px] mx-auto">
   <CaseBanner
      bgImage="/case/Arcus/banner.png"
      logo1="/logo.png"
      logo2="/case/Arcus/ARCUS.png"
      description={[
        'RGB LED LIGHTING FAN',
  
        'Crafted For The Dynamic Game Players',
      ]}
    />
     
       {/* Here is first heading title */}
            <div className="text-xl text-[#FFFFFF]">
             <Title
               mainTitle="TORTOX"
               subTitle="arcus"
               content="Tortox ARCUS dynamically adjust fan speed between 800 RPM to 2,000 RPM with a 120mm TORTOX PWM fan, making it easy to minimize noise or maximize airflow. Unified luminous effect of water block and fan, forming a beautiful color."
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

export default acrus_page;
