"use client";

import CommunitySection from "./home/booking/community/page";
import BookingSection from "./home/booking/page";
import CategoryTabs from "./home/category/page";
import HeroSection from "./home/hero/page";
import IntroductionSection from "./home/instroduction/page";
import ServiceSection from "./home/service/page";
import AnimatedSection from "./reuseable/Animation/AnimatedSection";

export default function Home() {
  return (
    <div className="bg-white">
      {/* Here is hero section of home page */}
      <AnimatedSection delay={0.1}>
      <HeroSection />
      </AnimatedSection>
    
      {/* Here is introduction section of home page */}
      <AnimatedSection delay={0.1}>
      <IntroductionSection />
      </AnimatedSection>

     {/* Here is category section of home page */}
      <AnimatedSection delay={0.1}>
      <CategoryTabs />
      </AnimatedSection>

     {/* Her is comunity section of home page */}
      <AnimatedSection delay={0.1}>
     <CommunitySection />
      </AnimatedSection>


       {/* Here is service section of home page */}
      <AnimatedSection delay={0.1}>
      <ServiceSection />
      </AnimatedSection>


   {/* Here is booking section of home page */}
      <AnimatedSection delay={0.1}>
       <BookingSection />
      </AnimatedSection>

     
    </ div>
  );
}
