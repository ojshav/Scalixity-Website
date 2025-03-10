import { Hero } from "@/src/app/components/react-native/hero"
import { WhatWeOffer } from "@/src/app/components/react-native/what-we-offer"
import { Benefits } from "@/src/app/components/react-native/benefits"
import { Process } from "@/src/app/components/react-native/process"
import { TechStack} from "@/src/app/components/react-native/tech-stack"
import { CTA } from "@/src/app/components/react-native/cta"
import { FAQ } from "@/src/app/components/react-native/faq"
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