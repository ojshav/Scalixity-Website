import {Hero} from "@/src/app/components/industries/saas/ai-personalization/hero"
import {WhatWeOffer} from "@/src/app/components/industries/saas/ai-personalization/what-we-offer"
import { AIApplications } from "@/src/app/components/industries/saas/ai-personalization/ai-application"
import { Benefits }  from "@/src/app/components/industries/saas/ai-personalization/benefits"
import {CTA } from "@/src/app/components/industries/saas/ai-personalization/CTA"
import {Process} from "@/src/app/components/industries/saas/ai-personalization/process"
import {FAQ}  from "@/src/app/components/industries/saas/ai-personalization/faq"
 
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