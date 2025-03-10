
import { Hero } from "@/src/app/components/industries/fintech/ai-agents/hero"
import { WhatWeOffer } from "@/src/app/components/industries/fintech/ai-agents/what-we-offer"
import { Benefits } from "@/src/app/components/industries/fintech/ai-agents/benefits"
import {CTA} from "@/src/app/components/cta"
import { Process } from "@/src/app/components/industries/fintech/ai-agents/process"
import { TechStack} from "@/src/app/components/industries/fintech/ai-agents/tech-stack"
import { AIAgents } from "@/src/app/components/industries/fintech/ai-agents/ai-applications"
import { FAQ } from "@/src/app/components/industries/fintech//faq"
export default function FintechPage() {
  return (
    <main className="bg-[#080B16]">
      <Hero />
      <WhatWeOffer />
      <Benefits />
      ,<AIAgents/>
      < Process />
      <TechStack />
      < CTA />
      <FAQ />
      
    </main>
  )}
