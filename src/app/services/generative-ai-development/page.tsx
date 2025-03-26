// import { TrustedBy } from "@/src/app/components/trusted-by"
import { GenerativeAIDevelopmentHero } from "@/src/app/components/generative-ai-development/hero"
import { WhyUs } from "@/src/app/components/generative-ai-development/why-us"
import { FeaturedWork } from "@/src/app/components/generative-ai-development/featured-work"
import { WhatWeOffer } from "@/src/app/components/generative-ai-development/what-we-offer"
import { Process } from "@/src/app/components/generative-ai-development/process"
import { Industries } from "@/src/app/components/generative-ai-development/industries"
import { ToolsAndTechnology } from "@/src/app/components/generative-ai-development/tools-and-technology"
import { AIModels } from "@/src/app/components/generative-ai-development/ai-models"
import { FAQ } from "@/src/app/components/generative-ai-development/faq"
import { CTA } from "@/src/app/components/cta"

export default function GenerativeAIDevelopmentPage() {
  return (
    <main className="bg-[#080B16]">
      <GenerativeAIDevelopmentHero />
      {/* <TrustedBy /> */}
      <WhyUs />
      <FeaturedWork />
      <WhatWeOffer />
      <Process />
      <Industries />
      <ToolsAndTechnology />
      <AIModels />
      <FAQ />
      <CTA />
    </main>
  )
}

