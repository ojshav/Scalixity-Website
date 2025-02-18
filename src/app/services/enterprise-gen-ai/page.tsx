import { Hero } from "@/src/app/components/enterprise-gen-ai/hero"
import { WhatWeOffer } from "@/src/app/components/enterprise-gen-ai/what-we-offer"
import { Process } from "@/src/app/components/enterprise-gen-ai/process"
import { ToolsAndTechnology} from "@/src/app/components/enterprise-gen-ai/tools-and-technology"
import { WhyChooseUs } from "@/src/app/components/enterprise-gen-ai/why-choose-us"
import { Industries } from "@/src/app/components/enterprise-gen-ai/industries"
import { FAQ } from "@/src/app/components/enterprise-gen-ai/faq"
export default function Enterprisegenaidev() {
  return (
    <main className="bg-[#080B16]">
      <Hero />
      <WhatWeOffer />
      <Process />
      <ToolsAndTechnology />
      <WhyChooseUs />
      <Industries />
      <FAQ />
      
    </main>
  )}