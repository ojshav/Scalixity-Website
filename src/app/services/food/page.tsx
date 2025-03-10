import { Hero } from "@/src/app/components/industries/food/hero"
import { WhatWeOffer } from "@/src/app/components/industries/food/what-we-offer"
import { Benefits } from "@/src/app/components/industries/food/benefits"
import { AIApplications } from "@/src/app/components/industries/food/ai-applications"
import { Process } from "@/src/app/components/industries/food/process"
import { TechStack} from "@/src/app/components/industries/food/tech-stack"
import { CTA } from "@/src/app/components/industries/food/cta"
import { FAQ } from "@/src/app/components/industries/food/faq"
export default function AIDevelopmentPage() {
  return (
    <main className="bg-[#080B16]">
      <Hero />
      <WhatWeOffer />
      <Benefits />
      <AIApplications/>
      < Process />
      <TechStack />
      < CTA />
      <FAQ />
      
    </main>
  )}