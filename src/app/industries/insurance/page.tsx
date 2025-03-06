import { Hero } from "@/src/app/components/industries/insurance/hero"
import { WhatWeOffer } from "@/src/app/components/industries/insurance/what-we-offer"
import { AIApplications } from "@/src/app/components/industries/insurance/ai-appliction"
import { UseCases } from "@/src/app/components/industries/insurance/use-case"
import { Benefits } from "@/src/app/components/industries/insurance/benefits"
import { CaseStudy } from "@/src/app/components/industries/insurance/case-study"
import { Process } from "@/src/app/components/industries/insurance/process"
import { TechStack } from "@/src/app/components/industries/insurance/tech-stack"
import { FAQ } from "@/src/app/components/industries/insurance/faq"
import { CTA } from "@/src/app/components/industries/insurance/CTA"
export default function FintechPage() {
  return (
    <main className="bg-background">
      <Hero />
      <WhatWeOffer/>
      <AIApplications />
      <UseCases/>
      <Benefits />
      <CaseStudy />
      <Process />
      <TechStack />
      <FAQ />
      <CTA />
    </main>
  )
}
