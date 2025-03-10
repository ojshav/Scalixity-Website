import { Hero } from "@/src/app/components/industries/fintech/regulatory-compliance/hero"
import { WhatWeOffer } from "@/src/app/components/industries/fintech/regulatory-compliance/what-we-offer"
import { Benefits } from "@/src/app/components/industries/fintech/regulatory-compliance/benefits"
import { Process } from "@/src/app/components/industries/fintech/regulatory-compliance/process"
import { TechStack} from "@/src/app/components/industries/fintech/regulatory-compliance/tech-stack"
import { CTA } from "@/src/app/components/industries/fintech/regulatory-compliance/cta"
import { FAQ } from "@/src/app/components/industries/fintech/regulatory-compliance/faq"
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