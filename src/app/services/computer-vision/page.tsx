import { Hero } from "@/src/app/components/computer-vision/hero"
import { WhatWeOffer } from "@/src/app/components/computer-vision/what-we-offer"
import { Benefits } from "@/src/app/components/computer-vision/benefits"
import { Process } from "@/src/app/components/computer-vision/process"
import { TechStack} from "@/src/app/components/computer-vision/tech-stack"
import { CTA } from "@/src/app/components/computer-vision/cta"
import { FAQ } from "@/src/app/components/computer-vision/faq"
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