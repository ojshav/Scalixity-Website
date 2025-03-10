import { Hero } from "@/src/app/components/native/hero"
import { WhatWeOffer } from "@/src/app/components/native/what-e-offer"
import { Benefits } from "@/src/app/components/native/benefits"
import { Process } from "@/src/app/components/native/process"
import { TechStack} from "@/src/app/components/native/tech-stack"
import { Industries } from "@/src/app/components/native/industries"
import {CTA }from "@/src/app/components/cta"
import { FAQ } from "@/src/app/components/native/faq"

export default function MobileDevelopmentPage() {
  return (
    <main className="bg-[#080B16]">
      <Hero />
      <WhatWeOffer />
      <Benefits />
      < Process />
      <TechStack />
      < Industries />
      < CTA/>
      <FAQ />
      
    </main>
  )}