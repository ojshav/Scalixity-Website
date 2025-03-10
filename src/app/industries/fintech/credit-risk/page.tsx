import { Hero } from "@/src/app/components/industries/fintech/credit-risk/hero"
import { WhatWeOffer } from "@/src/app/components/industries/fintech/credit-risk/what-we-offer"
import { Benefits } from "@/src/app/components/industries/fintech/credit-risk/benefits"
import { Process } from "@/src/app/components/industries/fintech/credit-risk/process"
import { TechStack} from "@/src/app/components/industries/fintech/credit-risk/tech-stack"
import { CTA } from "@/src/app/components/industries/fintech/credit-risk/cta"
import { FAQ } from "@/src/app/components/industries/fintech/credit-risk/faq"
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