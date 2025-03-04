import {Hero} from "@/src/app/components/industries/healthcare/personalized-medicine/hero"
import {WhatWeOffer} from "@/src/app/components/industries/healthcare/personalized-medicine/what-we-offer"
import { AIApplications } from "@/src/app/components/industries/healthcare/personalized-medicine/ai-applications"
import { Benefits }  from "@/src/app/components/industries/healthcare/personalized-medicine/benefits"
import {CTA } from "@/src/app/components/industries/healthcare/personalized-medicine/CTA"
import {Process} from "@/src/app/components/industries/healthcare/personalized-medicine/process"
import{TechStack }from "@/src/app/components/industries/healthcare/personalized-medicine/tech-stack"
import {Industries } from "@/src/app/components/industries/healthcare/personalized-medicine/industries"
import {FAQ}  from "@/src/app/components/industries/healthcare/personalized-medicine/faq"
 
export default function HealthcarePage() {
    return (
      <main className="bg-[#080B16]">
        <Hero />
        <WhatWeOffer />
        <AIApplications/>
        <Benefits />
       <Process />
       <TechStack />
       <Industries/>
       <CTA />
       <FAQ />
       
      </main>
    )}