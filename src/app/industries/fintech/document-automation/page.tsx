import { Hero } from "@/src/app/components/industries/fintech/document-automation/hero"
import { WhatWeOffer } from "@/src/app/components/industries/fintech/document-automation/what-we-offer"
import { Benefits } from "@/src/app/components/industries/fintech/document-automation/benefits"
import { Process } from "@/src/app/components/industries/fintech/document-automation/process"
import { TechStack} from "@/src/app/components/industries/fintech/document-automation/tech-stack"
import { CTA } from "@/src/app/components/industries/fintech/document-automation/cta"
import { FAQ } from "@/src/app/components/industries/fintech/document-automation/faq"
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