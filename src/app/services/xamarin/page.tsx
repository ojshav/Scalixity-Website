import { Hero } from "@/src/app/components/xamarin/hero"
import { WhatWeOffer } from "@/src/app/components/xamarin/what-we-offer"
import { Benefits } from "@/src/app/components/xamarin/benefits"
import { Process } from "@/src/app/components/xamarin/process"
import { TechStack} from "@/src/app/components/xamarin/tech-stack"
import { CTA } from "@/src/app/components/xamarin/cta"
import { FAQ } from "@/src/app/components/xamarin/faq"
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