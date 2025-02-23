import { Hero } from "@/src/app/components/chatgpt-integration/hero"
import { WhatWeOffer } from "@/src/app/components/what-we-offer"
import { FeaturedWork }  from "@/src/app/components/chatgpt-integration/featured-work"
import { Process } from "@/src/app/components/chatgpt-integration/process"
import { Expertise } from "@/src/app/components/chatgpt-integration/expertise"
import { ToolsAndTechnology } from "@/src/app/components/chatgpt-integration/tools-and-technology"
import { Industries } from "@/src/app/components/chatgpt-integration/industries"
import {FAQ } from "@/src/app/components/chatgpt-integration/faq"
import { CTA } from "@/src/app/components/chatgpt-integration/CTA"
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