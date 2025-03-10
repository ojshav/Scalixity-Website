import { Hero } from "@/src/app/components/conversational-ai/hero"
import { WhatWeOffer } from "@/src/app/components/conversational-ai/what-we-offer"
import { Benefits } from "@/src/app/components/conversational-ai/benefits"
import { Process } from "@/src/app/components/conversational-ai/process"
import { TechStack} from "@/src/app/components/conversational-ai/tech-stack"
import { CTA } from "@/src/app/components/conversational-ai/cta"
import { FAQ } from "@/src/app/components/conversational-ai/faq"
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