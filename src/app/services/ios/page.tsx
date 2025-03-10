import { Hero } from "@/src/app/components/ios/hero"
import { WhatWeOffer } from "@/src/app/components/ios/what-we-offer"
import { Benefits } from "@/src/app/components/ios/benefits"
import { FeaturedWork } from "@/src/app/components/ios/featured-work"
import { Process } from "@/src/app/components/ios/process"
import { TechStack} from "@/src/app/components/ios/tech-stack"
import { Industries } from "@/src/app/components/ios/industries"
import {CTA} from "@/src/app/components/cta"
import { FAQ } from "@/src/app/components/ios/faq"
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