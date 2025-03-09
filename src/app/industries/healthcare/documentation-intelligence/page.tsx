import {Hero} from "@/src/app/components/industries/healthcare/documentation-intelligence/hero"
import {WhatWeOffer} from "@/src/app/components/industries/healthcare/documentation-intelligence/what-we-offer"
import { AIApplications } from "@/src/app/components/industries/healthcare/documentation-intelligence/ai-applications"
import { Benefits }  from "@/src/app/components/industries/healthcare/documentation-intelligence/benefits"
import {CTA } from "@/src/app/components/industries/healthcare/documentation-intelligence/CTA"
import {Process} from "@/src/app/components/industries/healthcare/documentation-intelligence/process"
import{TechStack }from "@/src/app/components/industries/healthcare/documentation-intelligence/tech-stack"
import {Industries } from "@/src/app/components/industries/healthcare/documentation-intelligence/industries"
import {FAQs}  from "@/src/app/components/industries/healthcare/documentation-intelligence/faq"
 
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
       <FAQs />
       
      </main>
    )}