import { Hero } from "@/src/app/components/enterprise-chatbot/hero"
import { WhatWeOffer } from "@/src/app/components/enterprise-chatbot/what-we-offer"
import { Benefits } from "@/src/app/components/enterprise-chatbot/benefits"
import { Process } from "@/src/app/components/enterprise-chatbot/process"
import { TechStack} from "@/src/app/components/enterprise-chatbot/tech-stack"
import { CTA } from "@/src/app/components/enterprise-chatbot/CTA"
import { FAQ } from "@/src/app/components/enterprise-chatbot/FAQ"
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