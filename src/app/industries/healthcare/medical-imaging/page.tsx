import {Hero} from "@/src/app/components/industries/healthcare/medical-imaging/hero"
import {WhatWeOffer} from "@/src/app/components/industries/healthcare/medical-imaging/what-we-offer"
import { AIApplications } from "@/src/app/components/industries/healthcare/medical-imaging/ai-applications"
import { Benefits }  from "@/src/app/components/industries/healthcare/medical-imaging/benefits"
import {CTA } from "@/src/app/components/industries/healthcare/medical-imaging/CTA"
import {Process} from "@/src/app/components/industries/healthcare/medical-imaging/process"
import{TechStack }from "@/src/app/components/industries/healthcare/medical-imaging/tech-stack"
import {Industries } from "@/src/app/components/industries/healthcare/medical-imaging/industries"
import {FAQ}  from "@/src/app/components/industries/healthcare/medical-imaging/faq"
 
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