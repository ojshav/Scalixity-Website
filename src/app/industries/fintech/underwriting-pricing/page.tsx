import { Hero } from "@/src/app/components/industries/fintech/underwriting-pricing/hero"
import { WhatWeOffer } from "@/src/app/components/industries/fintech/underwriting-pricing/what-we-offer"
import { Benefits } from "@/src/app/components/industries/fintech/underwriting-pricing/benefits"
import { Process } from "@/src/app/components/industries/fintech/underwriting-pricing/process"
import { TechStack} from "@/src/app/components/industries/fintech/underwriting-pricing/tech-stack"
import { CTA } from "@/src/app/components/industries/fintech/underwriting-pricing/cta"
import { FAQ } from "@/src/app/components/industries/fintech/underwriting-pricing/faq"
export default function FintechPage() {
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