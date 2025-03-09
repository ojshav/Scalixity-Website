import {Hero} from "@/src/app/components/industries/retail/ai-solutions/hero"
import {WhatWeOffer} from "@/src/app/components/industries/retail/ai-solutions/what-we-offer"
import { AIApplications } from "@/src/app/components/industries/retail/ai-solutions/ai-applications"
import { Benefits }  from "@/src/app/components/industries/retail/ai-solutions/benefits"
import {CTA } from "@/src/app/components/industries/retail/ai-solutions/CTA"
import {Process} from "@/src/app/components/industries/retail/ai-solutions/process"
import{TechStack }from "@/src/app/components/industries/retail/ai-solutions/tech-stack"
import {Industries } from "@/src/app/components/industries/retail/ai-solutions/industries"
import {FAQ}  from "@/src/app/components/industries/retail/ai-solutions/faq"
 
export default function RetailPage() {
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