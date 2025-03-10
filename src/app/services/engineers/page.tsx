import { Hero } from "@/src/app/components/engineers/hero"
import { WhatWeOffer } from "@/src/app/components/engineers/what-we-offer"
import { Benefits } from "@/src/app/components/engineers/benefit"
import { Process } from "@/src/app/components/engineers/process"
import { TechStack} from "@/src/app/components/engineers/tech-stack"
import { CTA} from "@/src/app/components/engineers/CTA"
import { FAQ } from "@/src/app/components/engineers/faq"
export default function AIDevelopmentPage() {
  return (
    <main className="bg-[#080B16]">
      <Hero />
      <WhatWeOffer />
      <Benefits />
      < Process />
      <TechStack />
      < CTA/>
      <FAQ />
      
    </main>
  )}