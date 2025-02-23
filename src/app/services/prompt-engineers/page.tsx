import { Hero } from "@/src/app/components/prompt-engineers/hero"
import { WhatWeOffer } from "@/src/app/components/prompt-engineers/what-we-offer"
import { FeaturedWork } from "@/src/app/components/prompt-engineers/featured-work"
import { Process } from "@/src/app/components/prompt-engineers/process"
import { Expertise } from "@/src/app/components/prompt-engineers/expertise"
import { ToolsAndTechnology} from  "@/src/app/components/prompt-engineers/tools-and-technology"
import { Industries} from "@/src/app/components/prompt-engineers/industries"
import { FAQ } from "@/src/app/components/prompt-engineers/faq"
import  { CTA} from "@/src/app/components/prompt-engineers/CTA"
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
      < CTA/>
    </main>
  )}