'use client';

import SpecificationSection, { SpecificationItem } from "@/app/reuseable/cables/Specification/page";
import CaseBanner from "@/app/reuseable/case/banner/page";
import SparkSlider from "@/app/reuseable/case/slider/spark-slider/page";
import TwisterBearingSection from "@/app/reuseable/case/TwisterBearing/page";
import CallToActionBanner from "@/app/reuseable/products/join-group/page";
import Title from "@/app/reuseable/products/title/page";


// Here is specification date
export const specs: SpecificationItem[] = [
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


// here is slider data
const slideData = [
  {
    image: '/case/spark/slider/image.png', 
    leftTitle: 'RGB LED Lighting',
    leftDescription:
      'SPARK X offers full colour control and stunning visual effects. Four halo shaped rings equipped with the TORTOX LED lighting technology are smoothly worked into the frame and offer bright and even illumination without visible LED spots.',
    rightTitle: 'Silent Operation',
    rightDescription:
      'The fan blades of Spark X are optimized for silent operation and the speed can be turned down to 500 RPM. Spark X frame is equipped with rubber damping pads to prevent vibration transfer to the chassis and to ensure low noise operation.',
  },
  {
    image: '/case/spark/slider/image.png', 
    leftTitle: 'RGB LED Lighting',
    leftDescription:
      'SPARK X offers full colour control and stunning visual effects. Four halo shaped rings equipped with the TORTOX LED lighting technology are smoothly worked into the frame and offer bright and even illumination without visible LED spots.',
    rightTitle: 'Silent Operation',
    rightDescription:
      'The fan blades of Spark X are optimized for silent operation and the speed can be turned down to 500 RPM. Spark X frame is equipped with rubber damping pads to prevent vibration transfer to the chassis and to ensure low noise operation.',
  },
  {
    image: '/case/spark/slider/image.png', 
    leftTitle: 'RGB LED Lighting',
    leftDescription:
      'SPARK X offers full colour control and stunning visual effects. Four halo shaped rings equipped with the TORTOX LED lighting technology are smoothly worked into the frame and offer bright and even illumination without visible LED spots.',
    rightTitle: 'Silent Operation',
    rightDescription:
      'The fan blades of Spark X are optimized for silent operation and the speed can be turned down to 500 RPM. Spark X frame is equipped with rubber damping pads to prevent vibration transfer to the chassis and to ensure low noise operation.',
  },
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
         

         {/* Here is spark slider */}

         <SparkSlider slides={slideData} />


          {/* Join Group  */}
      <CallToActionBanner
  text="Over 1000's of gamers already using our products."
  buttonLabel="Join Our Group"
  buttonHref="/community"
/>
        {/* here is twister-technology section */}
      <TwisterBearingSection/>

              {/* Specification section */}
              <SpecificationSection specifications={specs} />
           
    </ div>
  );
};

export default spark_page;
