import {Hero} from "@/src/app/components/industries/retail/voice-ordering/hero"
import {WhatWeOffer} from "@/src/app/components/industries/retail/voice-ordering/what-we-offer"
import { AIApplications } from "@/src/app/components/industries/retail/voice-ordering/ai-application"
import { Benefits }  from "@/src/app/components/industries/retail/voice-ordering/benefits"
import {CTA } from "@/src/app/components/industries/retail/voice-ordering/CTA"
import {Process} from "@/src/app/components/industries/retail/voice-ordering/process"
import {FAQ}  from "@/src/app/components/industries/retail/voice-ordering/faq"
 
export default function RetailPage() {
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