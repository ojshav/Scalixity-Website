import { Hero } from "@/src/app/components/industries/fintech/risk-management/hero"
import { WhatWeOffer } from "@/src/app/components/industries/fintech/risk-management/what-we-offer"
import { Benefits } from "@/src/app/components/industries/fintech/risk-management/benefits"
import { Process } from "@/src/app/components/industries/fintech/risk-management/process"
import { TechStack} from "@/src/app/components/industries/fintech/risk-management/tech-stack"
import { CTA } from "@/src/app/components/industries/fintech/risk-management/cta"

export default function FintechPage() {
  return (
    <main className="bg-[#080B16]">
      <Hero />
      <WhatWeOffer />
      <Benefits />
      < Process />
      <TechStack />
      < CTA />
      
      
    </main>
  )}