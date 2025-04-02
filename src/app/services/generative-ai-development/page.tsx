import { Hero } from "@/src/app/components/generative-ai/generative-ai-development/hero"
import { WhatWeOffer } from "@/src/app/components/generative-ai/generative-ai-development/what-we-offer"
import { AIModels } from "@/src/app/components/generative-ai/generative-ai-development/ai-models"
import { WhyUs } from "@/src/app/components/generative-ai/generative-ai-development/why-us"
import { FeaturedWork } from "@/src/app/components/generative-ai/generative-ai-development/featured-work"
import { Process } from "@/src/app/components/generative-ai/generative-ai-development/process"
import { ToolsAndTechnology } from "@/src/app/components/generative-ai/generative-ai-development/tools-and-technology"
import { Industries } from "@/src/app/components/generative-ai/generative-ai-development/industries"
import { FAQ } from "@/src/app/components/generative-ai/generative-ai-development/faq"
import { CTA } from "@/src/app/components/cta"

export default function GenerativeAIDevelopmentPage() {
  return (
    <main className="bg-background">
      <Hero />
      <WhatWeOffer />
      <AIModels/>
      <WhyUs />
      <FeaturedWork />
      <Process />
      <ToolsAndTechnology/>
      <Industries />
      <FAQ />
      <CTA />
    </main>
  )
}

