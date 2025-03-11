import { Hero } from "@/src/app/components/industries/saas/ai-integration/hero"
import { WhatWeOffer } from "@/src/app/components/industries/saas/ai-integration/what-we-offer"
import { Benefits } from "@/src/app/components/industries/saas/ai-integration/benefits"
import { Process } from "@/src/app/components/industries/saas/ai-integration/process"
import { TechStack} from "@/src/app/components/industries/saas/ai-integration/tech-stack"
import {CTA} from "@/src/app/components/cta"
import { FAQ } from "@/src/app/components/industries/saas/ai-integration/faq"
export default function SaasPage() {
  return (
    <main className="bg-[#080B16]">
      <Hero />
      <WhatWeOffer />
      <Benefits />
      
      < Process />
      <TechStack />
      < CTA />
      <FAQ />
      
    </main>
  )}


