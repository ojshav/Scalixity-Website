import { Hero } from "@/src/app/components/ai-development/hero"
import { WhatWeOffer } from "@/src/app/components/ai-development/what-we-offer"
import { Process } from "@/src/app/components/ai-development/process"
import { WhyChooseUs } from "@/src/app/components/ai-development/why-choose-us"
import { TechStack } from "@/src/app/components/ai-development/tech-stack"
import { FeaturedWork } from "@/src/app/components/ai-development/featured-work"
import { Industries } from "@/src/app/components/ai-development/industries"
import { FAQ } from "@/src/app/components/ai-development/faq"
import { CTA } from "@/src/app/components/cta"

export default function AIDevelopmentPage() {
  return (
    <main className="bg-background">
      <Hero />
      <WhatWeOffer />
      <Process />
      <WhyChooseUs />
      <TechStack />
      <FeaturedWork />
      <Industries />
      <FAQ />
      <CTA />
    </main>
  )
}

