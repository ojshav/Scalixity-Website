import { Hero } from "@/src/app/components/flutter/hero"
import { WhatWeOffer } from "@/src/app/components/flutter/what-we-offer"
import { Benefits } from "@/src/app/components/flutter/benefits"
import { FeaturedWork } from "@/src/app/components/flutter/featured-work"
import { Process } from "@/src/app/components/flutter/process"
import { TechStack} from "@/src/app/components/flutter/tech-stack"
import { Industries } from "@/src/app/components/flutter/industries"
import { FAQ } from "@/src/app/components/flutter/faq"
import {CTA} from "@/src/app/components/cta"
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