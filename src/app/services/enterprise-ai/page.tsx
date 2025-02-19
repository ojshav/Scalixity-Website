import { Hero } from "@/src/app/components/enterprise-ai/hero"
import { WhatWeOffer } from "@/src/app/components/enterprise-ai/what-we-offer"
import { Benefits } from "@/src/app/components/enterprise-ai/benifits"
import { WhyChooseUs } from "@/src/app/components/enterprise-ai/why-choose-us"
import { Capabilities } from "@/src/app/components/enterprise-ai/capabilities"
import { Process } from "@/src/app/components/enterprise-ai/process"
import { FeaturedWork } from "@/src/app/components/enterprise-ai/featured-work"
import { Industries } from "@/src/app/components/enterprise-ai/industries"
import { Expertise } from "@/src/app/components/enterprise-ai/expertise"
import { ToolsAndTechnology } from "@/src/app/components/enterprise-ai/tools-and-technology"
import { FAQ } from "@/src/app/components/enterprise-ai/faq"
export default function Enterpriseaidev() {
  return (
    <main className="bg-[#080B16]">
      <Hero />
      <WhatWeOffer />
      <Benefits />
      <WhyChooseUs />
      < Capabilities />
      <Process />
      < FeaturedWork />
      <Industries />
      < Expertise />
      <ToolsAndTechnology />
      <FAQ />
      
    </main>
  )}