import { Hero } from "@/src/app/components/chatgpt/hero"
import { WhatWeOffer } from "@/src/app/components/chatgpt/what-we-offer"
import { FeaturedWork } from "@/src/app/components/chatgpt/featured-work"
import { Process } from "@/src/app/components/chatgpt/process"
import { Expertise } from "@/src/app/components/chatgpt/expertise"
import { ToolsAndTechnology} from  "@/src/app/components/chatgpt/tools-and-technology"
import { Industries} from "@/src/app/components/chatgpt/industries"
import { FAQ } from "@/src/app/components/chatgpt/faq" 
export default function Enterprisegenaidev() {
  return (
    <main className="bg-[#080B16]">
      <Hero />
      < WhatWeOffer />
      <FeaturedWork />
      <Process />
      <Expertise />
      <ToolsAndTechnology />
      <Industries />
      <FAQ />
      
      
    </main>
  )}