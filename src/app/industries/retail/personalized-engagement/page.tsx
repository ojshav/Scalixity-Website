import {Hero} from "@/src/app/components/industries/retail/personalized-engagement/hero"
import {WhatWeOffer} from "@/src/app/components/industries/retail/personalized-engagement/what-we-offer"
import { AIApplications } from "@/src/app/components/industries/retail/personalized-engagement/ai-applications"
import { Benefits }  from "@/src/app/components/industries/retail/personalized-engagement/benefits"
import {CTA } from "@/src/app/components/industries/retail/personalized-engagement/CTA"
import {Process} from "@/src/app/components/industries/retail/personalized-engagement/process"
import {FAQ}  from "@/src/app/components/industries/retail/personalized-engagement/faq"
 
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