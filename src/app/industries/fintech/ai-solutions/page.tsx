import { Hero } from "@/src/app/components/industries/fintech/ai-solutions/hero"
import { WhatWeOffer } from "@/src/app/components/industries/fintech/ai-solutions/what-we-offer"
import { Benefits } from "@/src/app/components/industries/fintech/ai-solutions/bnefits"
import { Process } from "@/src/app/components/industries/fintech/ai-solutions/process"
import { TechStack} from "@/src/app/components/industries/fintech/ai-solutions/tech-stack"
import { CTA } from "@/src/app/components/cta"
import { FAQ } from "@/src/app/components/industries/fintech/ai-solutions/faq"
import AIAPPLICATION from "@/src/app/components/industries/fintech/ai-solutions/ai-applications"
export default function AIDevelopmentPage() {
  return (
    <main className="bg-[#080B16]">
      <Hero />
      <WhatWeOffer />
      <Benefits />
      <AIAPPLICATION/>
      < Process />
      <TechStack />
      < CTA />
      <FAQ />
      
    </main>
  )}
