import { Hero } from "@/src/app/components/hedera/hero"
import { WhatWeOffer } from "@/src/app/components/hedera/what-we-offer"
import { Benefits } from "@/src/app/components/hedera/benefits"
import { WhyChooseUs } from "@/src/app/components/hedera/why-choose-us"
import { Process } from "@/src/app/components/hedera/process"
import { SuccessStories } from "@/src/app/components/hedera/success-stories"
import { FeaturedWork }from "@/src/app/components/hedera/featured-work"
import { TechStack} from "@/src/app/components/hedera/tech-stack"
import { Expertise } from "@/src/app/components/hedera/expertise"
import { Industries } from "@/src/app/components/hedera/industries"
import { FAQ } from "@/src/app/components/hedera/faq"
import { CTA } from "@/src/app/components/hedera/CTA"
export default function BlockchainDevelopmentPage() {
  return (
    <main className="bg-[#080B16]">
      <Hero />
      <WhatWeOffer />
      <Benefits />
      <WhyChooseUs />
      < Process />
      < SuccessStories />
      < FeaturedWork />
      <TechStack />
      < Expertise />
      < Industries />
      <FAQ />
      < CTA />
      
    </main>
  )}