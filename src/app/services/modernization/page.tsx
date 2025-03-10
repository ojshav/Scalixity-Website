import { Hero } from "@/src/app/components/modernization/hero"
import { WhatWeOffer } from "@/src/app/components/modernization/what-we-offer"
import { Benefits } from "@/src/app/components/modernization/benefits"
import { Process } from "@/src/app/components/modernization/process"
import { TechStack} from "@/src/app/components/modernization/tech-stack"
import { CTA } from "@/src/app/components/modernization/cta"
import { FAQ } from "@/src/app/components/modernization/faq"
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