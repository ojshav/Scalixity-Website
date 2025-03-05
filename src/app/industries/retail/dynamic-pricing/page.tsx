import {Hero} from "@/src/app/components/industries/retail/dynamic-pricing/hero"
import {WhatWeOffer} from "@/src/app/components/industries/retail/dynamic-pricing/what-we-offer"
import { AIApplications } from "@/src/app/components/industries/retail/dynamic-pricing/ai-applications"
import { Benefits }  from "@/src/app/components/industries/retail/dynamic-pricing/benefits"
import {CTA } from "@/src/app/components/industries/retail/dynamic-pricing/CTA"
import {Process} from "@/src/app/components/industries/retail/dynamic-pricing/process"
import {FAQ}  from "@/src/app/components/industries/retail/dynamic-pricing/faq"
 
export default function HealthcarePage() {
    return (
      <main className="bg-[#080B16]">
        <Hero />
        <WhatWeOffer />
        <AIApplications/>
        <Benefits />
       <Process />
       <CTA />
       <FAQ />
       
      </main>
    )}