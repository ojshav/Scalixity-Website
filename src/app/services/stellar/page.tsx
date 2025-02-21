import { Hero } from "@/src/app/components/stellar/hero"
import { WhatWeOffer } from "@/src/app/components/stellar/what-we-offer"
import { Benefits } from "@/src/app/components/stellar/benefits"
import { WhyChooseUs } from "@/src/app/components/stellar/why-choose-us"
import { Process } from "@/src/app/components/stellar/process"
import { FeaturedWork }from "@/src/app/components/stellar/featured-work"
import { TechStack} from "@/src/app/components/stellar/tech-stack"
import { Expertise } from "@/src/app/components/stellar/expertise"
import { Industries } from "@/src/app/components/stellar/industries"
import { FAQ } from "@/src/app/components/stellar/faq"
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
      
    </main>
  )}