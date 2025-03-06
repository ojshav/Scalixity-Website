import { Hero } from "@/src/app/components/smart-contracts/hero"
import { WhatWeOffer } from "@/src/app/components/smart-contracts/what-we-offer"
import { Benefits } from "@/src/app/components/smart-contracts/benefits"
import { WhyChooseUs } from "@/src/app/components/smart-contracts/why-choose-us"
import { Process } from "@/src/app/components/smart-contracts/process"
import { FeaturedWork }from "@/src/app/components/smart-contracts/featured-work"
import { TechStack} from "@/src/app/components/smart-contracts/tech-stack"
import { Expertise } from "@/src/app/components/smart-contracts/expertise"
import { Industries } from "@/src/app/components/smart-contracts/industries"
import { FAQ } from "@/src/app/components/smart-contracts/faq"
import { CTA } from "../../components/smart-contracts/CTA"
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
      <CTA/>
    </main>
  )}