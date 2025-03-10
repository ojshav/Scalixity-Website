import { Hero } from "@/src/app/components/mlops/hero"
import { WhatWeOffer } from "@/src/app/components/mlops/what-we-offer"
import { Benefits } from "@/src/app/components/mlops/benefits"
import { Process } from "@/src/app/components/mlops/process"
import { TechStack} from "@/src/app/components/mlops/tech-stack"
import { CTA } from "@/src/app/components/mlops/cta"
import { FAQ } from "@/src/app/components/mlops/faq"
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