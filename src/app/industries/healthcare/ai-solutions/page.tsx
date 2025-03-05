import {Hero} from "@/src/app/components/industries/healthcare/ai-solutions/hero"
import { AIApplications } from "@/src/app/components/industries/healthcare/ai-solutions/ai-applications"
import {WhatWeOffer} from "@/src/app/components/industries/healthcare/ai-solutions/what-we-offer"
import { Benefits }  from "@/src/app/components/industries/healthcare/ai-solutions/benefits"
import { CaseStudies }from "@/src/app/components/industries/healthcare/ai-solutions/Case-studies"
import {CTA } from "@/src/app/components/industries/healthcare/ai-solutions/CTA"
import {Process} from "@/src/app/components/industries/healthcare/ai-solutions/process"
import{TechStack }from "@/src/app/components/industries/healthcare/ai-solutions/tech-stack"
import {Industries } from "@/src/app/components/industries/healthcare/ai-solutions/industries"
import {FAQ}  from "@/src/app/components/industries/healthcare/ai-solutions/faq"
 
export default function HealthcarePage() {
    return (
      <main className="bg-[#080B16]">
        <Hero />
        <AIApplications/>
        <WhatWeOffer />
        <Benefits />
        <CaseStudies/>
       <Process />
       <TechStack />
       <Industries/>
       <CTA />
       <FAQ />
       
      </main>
    )}