import { Hero } from "@/src/app/components/llm-development/hero"
import { WhatWeOffer } from "@/src/app/components/llm-development/what-we-offer"
import { Benefits } from "@/src/app/components/llm-development/benefits"
import { UseCases } from "@/src/app/components/llm-development/use-cases"
import { Process } from "@/src/app/components/llm-development/process"
import { WhyChooseUs }from "@/src/app/components/llm-development/why-choose-us"
import { Industries } from "@/src/app/components/llm-development/industries"
import { TechStack } from "@/src/app/components/llm-development/tech-stack"
import { FAQ } from "@/src/app/components/llm-development/faq"
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

