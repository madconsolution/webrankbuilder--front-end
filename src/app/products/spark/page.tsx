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


const spark_page = () => {
  return (
    <div className="w-full md:w-[1440px] mx-auto">
   <CaseBanner
      bgImage="/case/Spark/banner.png"
      logo1="/logo.png"
      logo2="/case/Spark/spark.png"
      description={[
        'RGB LED LIGHTING FAN',
  
        'Crafted For The Dynamic Game Players',
      ]}
    />
     
       {/* Here is first heading title */}
            <div className="text-xl text-[#FFFFFF]">
             <Title
               mainTitle="TORTOX"
               subTitle="spark"
               content="SPARK X is the excellent RGB fan to create the right light and colour composition for your system
SPARK X fan applies exclusive TORTOX LED LIGHTING Technology to deliver incredibly bright and even RGB lighting. With the patented Twister Bearing technology, the Spark X fan can not only provide beautiful lighting effects, but also offer superior silent performance. Spark X can be used as a standalone product with the included RGB controller or can be synchronised with supported RGB motherboards from Asus, MSI and Gigabyte."
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

export default spark_page;
