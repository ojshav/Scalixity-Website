import { Hero } from "@/src/app/components/stable-diffusion/hero"
import { WhatWeOffer } from "@/src/app/components/what-we-offer"
import { FeaturedWork } from "@/src/app/components/stable-diffusion/featured-work"
import { Process } from "@/src/app/components/process"
import { Expertise } from "@/src/app/components/stable-diffusion/expertise"
import { ToolsAndTechnology } from "@/src/app/components/stable-diffusion/tools-and-technology"
import { Industries } from "@/src/app/components/stable-diffusion/industries"
import { FAQ } from "@/src/app/components/stable-diffusion/faq"
import { CTA } from "../../components/stable-diffusion/CTA"
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
      <CTA/>
      
    </main>
  )}