import { Hero } from "@/src/app/components/midjourney/hero"
import { WhatWeOffer } from "@/src/app//components/midjourney/what-we-offer"
import { FeaturedWork } from "@/src/app/components/midjourney/featured-work"
import { Process } from "@/src/app/components/midjourney/process"
import { Expertise } from "@/src/app/components/midjourney/expertise"

import { Industries} from "@/src/app/components/midjourney/industries"
import { FAQ } from "@/src/app/components/midjourney/faq"
import { CTA } from "../../components/midjourney/CTA"
export default function Enterprisegenaidev() {
  return (
    <main className="bg-[#080B16]">
      <Hero />
      <WhatWeOffer />
      <FeaturedWork />
      <Process />
      <Expertise />
      <Industries />
      <FAQ />
      <CTA />
      
    </main>
  )}