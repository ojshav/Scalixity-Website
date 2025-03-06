import { Hero } from "@/src/app/components/cardano/hero"
import { WhatWeOffer } from "@/src/app/components/cardano/what-we-offer"
import { Benefits } from "@/src/app/components/cardano/benefits"
import { WhyChooseUs } from "@/src/app/components/cardano/why-choose-us"
import { Process } from "@/src/app/components/cardano/process"
import { FeaturedWork }from "@/src/app/components/cardano/featured-work"
import { TechStack} from "@/src/app/components/cardano/tech-stack"
import { Expertise } from "@/src/app/components/cardano/expertise"
import { Industries } from "@/src/app/components/cardano/industries"
import { FAQ } from "@/src/app/components/cardano/faq"
import { CTA  } from "@/src/app/components/cardano/CTA"
export default function BlockchainDevelopmentPage() {
  return (
    <main className="bg-[#080B16]">
      <Hero />
      <WhatWeOffer />
      <Benefits />
      <WhyChooseUs />
      < Process />
      < FeaturedWork />
      <TechStack />
      < Expertise />
      < Industries />
      <FAQ />
      < CTA />
      
    </main>
  )}