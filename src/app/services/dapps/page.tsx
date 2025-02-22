import { Hero } from "@/src/app/components/dapps/hero"
import { WhatWeOffer } from "@/src/app/components/dapps/what-we-offer"
import { Benefits } from "@/src/app/components/dapps/benefits"
import { WhyChooseUs } from "@/src/app/components/dapps/why-choose-us"
import { Process } from "@/src/app/components/dapps/process"
import { FeaturedWork }from "@/src/app/components/dapps/featured-work"
import { TechStack} from "@/src/app/components/dapps/tech=stack"
import { Expertise } from "@/src/app/components/dapps/expertise"
import { Industries } from "@/src/app/components/dapps/industries"
import { FAQ } from "@/src/app/components/dapps/faq"
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