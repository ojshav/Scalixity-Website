import { Hero } from "@/src/app/components/poc/hero"
import { WhatWeOffer } from "@/src/app/components/poc/what.-we-offer"
import { Benefits } from "@/src/app/components/poc/benefits"
import { Process } from "@/src/app/components/poc/process"
import { TechStack} from "@/src/app/components/poc/tech-stack"
import { CTA } from "@/src/app/components/poc/CTA"
import { FAQ } from "@/src/app/components/poc/faq"
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