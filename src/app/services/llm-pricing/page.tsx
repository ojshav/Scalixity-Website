import { Hero } from "@/src/app/components/lm-pricing/hero"
import { WhatWeOffer } from "@/src/app/components/lm-pricing/what-we-offer"
import { Benefits } from "@/src/app/components/lm-pricing/benfits"
import { Process } from "@/src/app/components/lm-pricing/process"
import { TechStack} from "@/src/app/components/lm-pricing/tech-stack"
import { CTA } from "@/src/app/components/lm-pricing/cta"
import { FAQ } from "@/src/app/components/lm-pricing/faq"
export default function AIDevelopmentPage() {
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