import { Hero } from "@/src/app/components/ionic/hero"
import { WhatWeOffer } from "@/src/app/components/ionic/what-we-offer"
import { Benefits } from "@/src/app/components/ionic/benefits"
import { Process } from "@/src/app/components/ionic/proces"
import { TechStack} from "@/src/app/components/ionic/tech-stack"
import { CTA} from "@/src/app/components/ionic/cta"
import { FAQ } from "@/src/app/components/ionic/faq"
export default function MobileDevelopmentPage() {
  return (
    <main className="bg-[#080B16]">
      <Hero />
      <WhatWeOffer />
      <Benefits />
      < Process />
      <TechStack />
      <  CTA />
      <FAQ />
      
    </main>
  )}