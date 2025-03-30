'use client';

import CommunitySection from "./home/booking/community/page";
import BookingSection from "./home/booking/page";
import CategoryTabs from "./home/category/page";
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
     {/* Here is category section of home page */}
      <CategoryTabs/>
    {/* Her is comunity section of home page */}
    <CommunitySection/>
    
     {/* Here is service section of home page */}
     <ServiceSection/>
     {/* Here is booking section of home page */}
     <BookingSection/>
   </>
  );
}
