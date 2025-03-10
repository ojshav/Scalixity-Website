import { Hero } from "@/src/app/components/copilot/hero"
import { WhatWeOffer } from "@/src/app/components/copilot/what-we-offer"
import { Benefits } from "@/src/app/components/copilot/benefits"
import { Process } from "@/src/app/components/copilot/process"
import { TechStack} from "@/src/app/components/copilot/tech-stack"
import { CTA } from "@/src/app/components/copilot/CTA"
import { FAQ } from "@/src/app/components/copilot/faq"
export default function AIPage() {
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