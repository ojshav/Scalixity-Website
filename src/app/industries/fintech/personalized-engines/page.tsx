import { Hero } from "@/src/app/components/industries/fintech/personalized-engines/hero"
import { WhatWeOffer } from "@/src/app/components/industries/fintech/personalized-engines/what-we-offer"
import { Benefits } from "@/src/app/components/industries/fintech/personalized-engines/benefits"
import { Process } from "@/src/app/components/industries/fintech/personalized-engines/process"
import { TechStack} from "@/src/app/components/industries/fintech/personalized-engines/tech-stack"
import { CTA } from "@/src/app/components/industries/fintech/personalized-engines/cta"
import { FAQ } from "@/src/app/components/industries/fintech/personalized-engines/faq"
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