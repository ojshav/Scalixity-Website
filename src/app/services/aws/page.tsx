import { Hero } from "@/src/app/components/aws/hero"
import { WhatWeOffer } from "@/src/app/components/aws/what-we-offer"
import Benefits from "@/src/app/components/aws/benefits";
import { Expertise }from "@/src/app/components/aws/Expertise"
import { FeaturedWork } from "@/src/app/components/aws/featured-work"
import { UseCases } from "@/src/app/components/aws/use-cases"
import { Process } from "@/src/app/components/aws/process"
import { SuccessStories } from "@/src/app/components/aws/success-stories"
import { WhyChooseUs } from "@/src/app/components/aws/why-choose-us"
import { Industries } from "@/src/app/components/aws/industries"
import {FAQ} from "@/src/app/components/aws/faq"
import { TechStack } from "@/src/app/components/aws/tech-stack"
import { CTA } from "@/src/app/components/aws/CTA"



export default function CloudDevelopmentPage() {
  return (
    <main className="bg-[#080B16]">
       <Hero/>
       <WhatWeOffer/>
       
       <Expertise/>
       <FeaturedWork/>
       <UseCases/>
      
      <WhyChooseUs />
      <Industries/>
      <TechStack /> 
      <CTA />
      <FAQ/>
      
   
      
    </main>
  )}
