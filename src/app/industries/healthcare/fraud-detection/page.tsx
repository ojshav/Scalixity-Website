import {Hero} from "@/src/app/components/industries/healthcare/fraud-detection/hero"
import {WhatWeOffer} from "@/src/app/components/industries/healthcare/fraud-detection/what-we-offer"
import { AIApplications } from "@/src/app/components/industries/healthcare/fraud-detection/ai-applications"
import { Benefits }  from "@/src/app/components/industries/healthcare/fraud-detection/benefits"
import {CTA } from "@/src/app/components/industries/healthcare/fraud-detection/CTA"
import {Process} from "@/src/app/components/industries/healthcare/fraud-detection/process"
import{TechStack }from "@/src/app/components/industries/healthcare/fraud-detection/tech-stack"
import {Industries } from "@/src/app/components/industries/healthcare/fraud-detection/industries"
import {FAQ}  from "@/src/app/components/industries/healthcare/fraud-detection/faq"
 
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