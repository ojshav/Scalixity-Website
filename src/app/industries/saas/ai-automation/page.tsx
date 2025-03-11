import { Hero } from "@/src/app/components/industries/saas/ai-automation/hero"
import { WhatWeOffer } from "@/src/app/components/industries/saas/ai-automation/what-we-offer"
import { Benefits } from "@/src/app/components/industries/saas/ai-automation/benefits"
import { Process } from "@/src/app/components/industries/saas/ai-automation/process"
import { TechStack} from "@/src/app/components/industries/saas/ai-automation/tech-stack"
import { AIApplications } from "@/src/app/components/industries/saas/ai-automation/ai-applications"
import {CTA} from "@/src/app/components/cta"
import { FAQ } from "@/src/app/components/industries/saas/ai-automation/faq"
export default function SaasPage() {
  return (
    <main className="bg-[#080B16]">
      <Hero />
      <WhatWeOffer />
      <Benefits />
      <AIApplications/>
      < Process />
      <TechStack />
      < CTA />
      <FAQ />
      
    </main>
  )}


