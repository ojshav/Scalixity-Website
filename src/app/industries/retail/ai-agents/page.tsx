import {Hero} from "@/src/app/components/industries/retail/ai-agents/hero"
import {WhatWeOffer} from "@/src/app/components/industries/retail/ai-agents/whaat-we-offer"
import { AIApplications } from "@/src/app/components/industries/retail/ai-agents/ai-applications"
import { Benefits }  from "@/src/app/components/industries/retail/ai-agents/benefits"
import {CTA } from "@/src/app/components/industries/retail/ai-agents/CTA"
import {Process} from "@/src/app/components/industries/retail/ai-agents/process"
import {Industries } from "@/src/app/components/industries/retail/ai-agents/industries"
import {FAQ}  from "@/src/app/components/industries/retail/ai-agents/faq"
 
export default function RetailPage() {
    return (
      <main className="bg-[#080B16]">
        <Hero />
        <WhatWeOffer />
        <AIApplications/>
        <Benefits />
       <Process />
       <Industries/>
       <CTA />
       <FAQ />
       
      </main>
    )}