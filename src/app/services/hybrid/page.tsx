import { Hero } from "@/src/app/components/hybrid/hero"
import { WhatWeOffer } from "@/src/app/components/hybrid/what-we-offer"
import { Benefits } from "@/src/app/components/hybrid/benefits"
import { FeaturedWork } from "@/src/app/components/hybrid/featured-work"
import { Process } from "@/src/app/components/hybrid/process"
import { TechStack} from "@/src/app/components/hybrid/tech-stack"
import { Industries } from "@/src/app/components/hybrid/industries"
import {CTA} from "@/src/app/components/cta"
import { FAQ } from "@/src/app/components/hybrid/faq"
export default function MobileDevelopmentPage() {
  return (
    <main className="bg-[#080B16]">
      <Hero />
      <WhatWeOffer />
      <Benefits />
      <FeaturedWork/>
      < Process />
      <TechStack />
      < Industries />
      <CTA/>
      <FAQ />
      
    </main>
  )}