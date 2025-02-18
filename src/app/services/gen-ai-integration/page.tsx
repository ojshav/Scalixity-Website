import { Hero } from "@/src/app/components/gen-ai-integration/hero"
import { WhatWeOffer } from "@/src/app/components/gen-ai-integration/what-we-offer"
import { Benefits } from "@/src/app/components/gen-ai-integration/benifits"
import { Process } from "@/src/app/components/gen-ai-integration/process"
import { ToolsAndTechnology } from "@/src/app/components/gen-ai-integration/tools-and-technology"
import { Industries } from "@/src/app/components/gen-ai-integration/industries"
import { WhyChooseUs } from "@/src/app/components/gen-ai-integration/why-choose-us"
import { FAQ } from "@/src/app/components/gen-ai-integration/faq"
export default function AIAgentDevelopmentPage() {
  return (
    <main className="bg-[#080B16]">
      <Hero />
      <WhatWeOffer />
      <Benefits />
      <Process />
      < ToolsAndTechnology />
      <Industries />
      <WhyChooseUs />
      <FAQ />
    </main>
  )
}

