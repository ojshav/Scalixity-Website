import { Hero } from "@/src/app/components/industries/saas/ai-chatbots/hero"
import { WhatWeOffer } from "@/src/app/components/industries/saas/ai-chatbots/what-we-offer"
import { Benefits } from "@/src/app/components/industries/saas/ai-chatbots/benefits"
import { Process } from "@/src/app/components/industries/saas/ai-chatbots/process"
import { TechStack} from "@/src/app/components/industries/saas/ai-chatbots/tech-stack"
import {CTA} from "@/src/app/components/cta"
import { FAQ } from "@/src/app/components/industries/saas/ai-chatbots/faq"
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


