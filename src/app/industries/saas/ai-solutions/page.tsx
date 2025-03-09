import {Hero} from "@/src/app/components/industries/saas/ai-solutions/hero"
import {WhatWeOffer} from "@/src/app/components/industries/saas/ai-solutions/what-we-offer"
import { AIApplications } from "@/src/app/components/industries/saas/ai-solutions/ai-application"
import { Benefits }  from "@/src/app/components/industries/saas/ai-solutions/benefits"
import {CTA } from "@/src/app/components/industries/saas/ai-solutions/CTA"
import {Process} from "@/src/app/components/industries/saas/ai-solutions/process"
import {FAQ}  from "@/src/app/components/industries/saas/ai-solutions/faq"
 
export default function SaasPage() {
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