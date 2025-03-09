import {Hero} from "@/src/app/components/industries/healthcare/patient-data-analytics/hero"
import {WhatWeOffer} from "@/src/app/components/industries/healthcare/patient-data-analytics/what-we-offer"
import { AIApplications } from "@/src/app/components/industries/healthcare/patient-data-analytics/ai-applications"
import { Benefits }  from "@/src/app/components/industries/healthcare/patient-data-analytics/benefits"
import {CTA } from "@/src/app/components/industries/healthcare/patient-data-analytics/CTA"
import {Process} from "@/src/app/components/industries/healthcare/patient-data-analytics/process"
import{TechStack }from "@/src/app/components/industries/healthcare/patient-data-analytics/tech-stack"
import {Industries } from "@/src/app/components/industries/healthcare/patient-data-analytics/industries"
import {FAQ}  from "@/src/app/components/industries/healthcare/patient-data-analytics/faq"
 
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