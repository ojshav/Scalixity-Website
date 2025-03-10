import { Hero } from "@/src/app/components/llm/hero"
import { WhatWeOffer } from "@/src/app/components/llm/what-we-offer"
import { Benefits } from "@/src/app/components/llm/benefits"
import { UseCases } from "@/src/app/components/llm/use-cases"
import { Process } from "@/src/app/components/llm/process"
import { WhyChooseUs }from "@/src/app/components/llm/why-choose-us"
import { Industries } from "@/src/app/components/llm/industries"
import { TechStack } from "@/src/app/components/llm/tech-stack"
import { FAQ } from "@/src/app/components/llm/faq"
import { CTA } from "@/src/app/components/cta"

export default function LLMDevelopmentPage() {
return (
  <main className="bg-background">
    { <Hero /> }
    <WhatWeOffer />
    <Benefits />
    <UseCases />
    <Process />
    <WhyChooseUs />
    <Industries />
    <TechStack />
    <FAQ />
    <CTA />
  </main>
)
}

