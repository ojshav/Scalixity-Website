import {Hero} from "@/src/app/components/industries/healthcare/clinical-decision-support/hero"
import {WhatWeOffer} from "@/src/app/components/industries/healthcare/clinical-decision-support/what-we-offer"
import { AIAPPLICATION } from "@/src/app/components/industries/healthcare/clinical-decision-support/ai-applications"
import { Benefits }  from "@/src/app/components/industries/healthcare/clinical-decision-support/benefits"
import {CTA } from "@/src/app/components/industries/healthcare/clinical-decision-support/CTA"
import {Process} from "@/src/app/components/industries/healthcare/clinical-decision-support/process"
import{TechStack }from "@/src/app/components/industries/healthcare/clinical-decision-support/tech-stack"
import {Industries } from "@/src/app/components/industries/healthcare/clinical-decision-support/industries"
import {FAQ}  from "@/src/app/components/industries/healthcare/clinical-decision-support/faq"
 
export default function HealthcarePage() {
    return (
      <main className="bg-[#080B16]">
        <Hero />
        <WhatWeOffer />
        <AIAPPLICATION/>
        <Benefits />
       <Process />
       <TechStack />
       <Industries/>
       <CTA />
       <FAQ />
       
      </main>
    )}