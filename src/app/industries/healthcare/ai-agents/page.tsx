import {Hero} from "@/src/app/components/industries/healthcare/ai-agents/hero"
import {WhatWeOffer} from "@/src/app/components/industries/healthcare/ai-agents/what-we-offer"
import { AIApplications } from "@/src/app/components/industries/healthcare/ai-agents/ai-applications"
import { Benefits }  from "@/src/app/components/industries/healthcare/ai-agents/benefits"
import {CTA } from "@/src/app/components/industries/healthcare/ai-agents/CTA"
import {Process} from "@/src/app/components/industries/healthcare/ai-agents/process"
import{TechStack }from "@/src/app/components/industries/healthcare/ai-agents/tech-stack"
import {Industries } from "@/src/app/components/industries/healthcare/ai-agents/industries"
import {FAQ}  from "@/src/app/components/industries/healthcare/ai-agents/faq"
 
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