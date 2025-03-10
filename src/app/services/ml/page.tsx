import { Hero } from "@/src/app/components/ml/hero"
import { WhatWeOffer } from "@/src/app/components/ml/what-we-offer"
import { Benefits } from "@/src/app/components/ml/benefits"
import { Process } from "@/src/app/components/ml/process"
import { TechStack} from "@/src/app/components/ml/tech-stack"
import { CTA } from "@/src/app/components/ml/cta"
import { FAQ } from "@/src/app/components/ml/faq"
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