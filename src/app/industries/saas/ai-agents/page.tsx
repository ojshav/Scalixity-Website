import {Hero} from "@/src/app/components/industries/saas/ai-agents/hero"
import {WhatWeOffer} from "@/src/app/components/industries/saas/ai-agents/what-we-offer"
import { AIApplications } from "@/src/app/components/industries/saas/ai-agents/ai-applications"
import { Benefits }  from "@/src/app/components/industries/saas/ai-agents/benefits"
import {CTA } from "@/src/app/components/industries/saas/ai-agents/CTA"
import {Process} from "@/src/app/components/industries/saas/ai-agents/process"
import{TechStack }from "@/src/app/components/industries/saas/ai-agents/tech-stack"
import {FAQ}  from "@/src/app/components/industries/saas/ai-agents/faq"
 
export default function SaasPage() {
    return (
      <main className="bg-[#080B16]">
        <Hero />
        <WhatWeOffer />
        <AIApplications/>
        <Benefits />
       <Process />
       <TechStack />
       <CTA />
       <FAQ />
       
      </main>
    )}