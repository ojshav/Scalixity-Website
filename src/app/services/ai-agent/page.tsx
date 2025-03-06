import { Hero } from "@/src/app/components/ai-agent/hero"
import { WhatWeOffer } from "@/src/app/components/ai-agent/what-we-offer"
import { FeaturedWork } from "@/src/app/components/ai-agent/featured-work"
import { Capabilities } from "@/src/app/components/ai-agent/capabilities"
import { Industries } from "@/src/app/components/ai-agent/industries"
import { Process } from "@/src/app/components/ai-agent/process"
import { ToolsAndTechnology} from "@/src/app/components/ai-agent/tools-and-technology"
import { FAQ } from "@/src/app/components/ai-agent/faq"
import { CTA } from "@/src/app/components/ai-agent/CTA" 

export default function Enterprisegenaidev() {
  return (
    <main className="bg-[#080B16]">
      <Hero />
      <WhatWeOffer />
      <FeaturedWork />
      <Capabilities />
      <Industries />
      <Process />
      <ToolsAndTechnology /> 
      <FAQ />
      < CTA /> 
      
    </main>
  )}