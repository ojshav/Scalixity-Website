import { Hero } from "@/src/app/components/gcp//hero"
import { WhatWeOffer } from "@/src/app/components/gcp//what-we-offer"
import { Benefits } from "@/src/app/components/gcp//benefits"
import { Expertise }from "@/src/app/components/gcp//expertise"
import { FeaturedWork } from "@/src/app/components/gcp//featured-work"
import { Process } from "@/src/app/components/gcp//process"
import { SuccessStories } from "@/src/app/components/gcp//success-stories"
import { WhyChooseUs } from "@/src/app/components/gcp/why-choose-us"
import { UseCases }from "@/src/app/components/gcp//use-cases"
import { Industries } from "@/src/app/components/gcp/industries"
import { TechStack } from "@/src/app/components/gcp/tech-stack"
import { CTA } from "@/src/app/components/gcp/CTA"
import { FAQ } from "@/src/app/components/gcp/faq"


export default function CloudDevelopmentPage() {
  return (
    <main className="bg-[#080B16]">
       <Hero/>
       <WhatWeOffer/>
       <Benefits/>
       <Expertise/>
       <FeaturedWork/>
       
       <WhyChooseUs />
       <UseCases/>
       <Industries/>
      <TechStack /> /
      <CTA/>
      <FAQ/>
     
      
    </main>
  )}
