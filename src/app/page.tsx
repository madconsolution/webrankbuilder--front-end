'use client';

import BookingSection from "./home/booking/page";
import HeroSection from "./home/hero/page";
import IntroductionSection from "./home/instroduction/page";
import ServiceSection from "./home/service/page";



export default function Home() {


  return (
   <>
    {/* Here is hero section of home page */}
     <HeroSection/>
     {/* Here is introduction section of home page */}
     <IntroductionSection/>
     {/* Here is service section of home page */}
     <ServiceSection/>
     {/* Here is booking section of home page */}
     <BookingSection/>
   </>
  );
}
