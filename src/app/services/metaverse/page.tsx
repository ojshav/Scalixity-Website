import { Hero } from "@/src/app/components/metaverse/hero"
import { WhatWeOffer } from "@/src/app/components/metaverse/what-we--offer"
import { Benefits } from "@/src/app/components/metaverse/benefits"
import { WhyChooseMeta } from "@/src/app/components/metaverse/why-choose-us"
import { Process } from "@/src/app/components/metaverse/process"
import { SuccessStories }  from "@/src/app/components/metaverse/success-stories"
import { FeaturedWork }from "@/src/app/components/metaverse/featured-work"
import { TechStack} from "@/src/app/components/metaverse/tech-stack"
import { Expertise } from "@/src/app/components/metaverse/expertise"
import { Industries } from "@/src/app/components/metaverse/industries"
import { FAQ } from "@/src/app/components/metaverse/faq"
export default function BlockchainDevelopmentPage() {
  return (
    <main className="bg-[#080B16]">
      <Hero />
      <WhatWeOffer />
      <Benefits />
      <WhyChooseMeta />
      < Process />
      < FeaturedWork />
      < SuccessStories />
      <TechStack />
      < Expertise />
      < Industries />
      <FAQ />
      
    </main>
  )}