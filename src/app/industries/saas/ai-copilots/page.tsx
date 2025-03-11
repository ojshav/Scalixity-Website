
import { Hero } from "@/src/app/components/industries/saas/ai-copilots/hero"
import { WhatWeOffer } from "@/src/app/components/industries/saas/ai-copilots/what-we-offer"
import { Benefits } from "@/src/app/components/industries/saas/ai-copilots/benefits"
import { Process } from "@/src/app/components/industries/saas/ai-copilots/process"
import { TechStack} from "@/src/app/components/industries/saas/ai-copilots/tech-stack"
import {CTA} from "@/src/app/components/cta"
import { FAQ } from "@/src/app/components/industries/saas/ai-copilots/faq"
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


