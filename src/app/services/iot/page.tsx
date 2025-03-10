import { Hero } from "@/src/app/components/iot/hero"
import { WhatWeOffer } from "@/src/app/components/iot/what-we-offer"
import { Benefits } from "@/src/app/components/iot/benefits"
import { Process } from "@/src/app/components/iot/process"
import { TechStack} from "@/src/app/components/iot/tech-stack"
import { CTA } from "@/src/app/components/iot/cta"
import { FAQ } from "@/src/app/components/iot/faq"
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