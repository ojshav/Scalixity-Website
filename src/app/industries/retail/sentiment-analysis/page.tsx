import {Hero} from "@/src/app/components/industries/retail/sentiment-analysis/hero"
import {WhatWeOffer} from "@/src/app/components/industries/retail/sentiment-analysis/what-we-offer"
import { AIApplications } from "@/src/app/components/industries/retail/sentiment-analysis/ai-applications"
import { Benefits }  from "@/src/app/components/industries/retail/sentiment-analysis/benefits"
import {CTA } from "@/src/app/components/industries/retail/sentiment-analysis/CTA"
import {Process} from "@/src/app/components/industries/retail/sentiment-analysis/process"
import {FAQ}  from "@/src/app/components/industries/retail/sentiment-analysis/faq"
 
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