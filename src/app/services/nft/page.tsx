import { Hero } from "@/src/app/components/nft/hero"
import { WhatWeOffer } from "@/src/app/components/nft/what-we-offer"
import { Benefits } from "@/src/app/components/nft/benefits"
import { WhyChooseUs } from "@/src/app/components/nft/why-choose-us"
import { Process } from "@/src/app/components/nft/process"
import { FeaturedWork }from "@/src/app/components/nft/featured-work"
import { ToolsAndTechnology } from "@/src/app/components/nft/ToolsAndTechnology"
import { Expertise } from "@/src/app/components/nft/expertise"
import { Industries } from "@/src/app/components/nft/industries"
import { FAQ } from "@/src/app/components/nft/faq"
export default function BlockchainDevelopmentPage() {
  return (
    <main className="bg-[#080B16]">
      <Hero />
      <WhatWeOffer />
      <Benefits />
      <WhyChooseUs />
      < Process />
      < FeaturedWork />
      <ToolsAndTechnology />
      < Expertise />
      < Industries />
      <FAQ />
      
    </main>
  )}