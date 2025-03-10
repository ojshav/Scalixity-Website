import{Hero} from "@/src/app/components/azure/hero"
import { WhatWeOffer } from "@/src/app/components/azure/what-we-offer"
import { Benefits } from "@/src/app/components/azure/benefits"
import { FeaturedWork } from "@/src/app/components/azure/featured-work"
import { WhyChooseUs } from "@/src/app/components/azure/why-choose-us"
import { Expertise } from "@/src/app/components/azure/expertise"
import { SuccessStories } from "@/src/app/components/azure/success-stories"
import { UseCases }from "@/src/app/components/azure/use-cases"
import { Process }from "@/src/app/components/azure/process"
import { Industries }from "@/src/app/components/azure/industruies"
import { TechStack } from "@/src/app/components/azure/tech-stack"
import { CTA } from "@/src/app/components/azure/CTA"
import {FAQ} from "@/src/app/components/azure/faq"

export default function CloudDevelopmentPage() {
  return (
    <main className="bg-[#080B16]">
    <Hero/>
    <WhatWeOffer/>
    <Benefits/>
    <FeaturedWork/>
    <WhyChooseUs />
    <Expertise/>
    <SuccessStories/>
    <UseCases/>
    <Process/>
    <Industries/>
    <TechStack /> /
    <FAQ/>
    < CTA />  
      
   
      
    </main>
  )}
