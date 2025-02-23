import { Hero } from "@/src/app/components/adaptive-ai/hero"
import { WhatWeOffer } from "@/src/app/components/adaptive-ai/what-we-offer"
import { FeaturedWork } from "@/src/app/components/adaptive-ai/featured-work"
import { Process } from "@/src/app/components/adaptive-ai/process"
import { Expertise } from "@/src/app/components/adaptive-ai/expertise"
import { ToolsAndTechnology} from "@/src/app/components/adaptive-ai/tools-and-tachnology"
import { Industries} from "@/src/app/components/adaptive-ai/industries"
import { FAQ } from "@/src/app/components/adaptive-ai/faq"
import { CTA } from "@/src/app/components/adaptive-ai/CTA"
export default function Enterprisegenaidev() {
  return (
    <main className="bg-[#080B16]">
      <Hero />
      <WhatWeOffer />
      <FeaturedWork />
      <Process />
      <Expertise />
      <ToolsAndTechnology />
      <Industries />
      <FAQ />
      < CTA /> 
      
    </main>
  )}