import { Hero } from "@/src/app/components/industries/retail/hero"
import { AIApplications } from "@/src/app/components/industries/retail/ai-applications"
import { UseCases } from "@/src/app/components/industries/retail/use-case"
import {CaseStudy } from "@/src/app/components/industries/retail/case-study"
import { Benefits } from "@/src/app/components/industries/retail/benefitis"
import { Process } from "@/src/app/components/industries/retail/process"
import { TechStack } from "@/src/app/components/industries/retail/tech-stack"
import { FAQ } from "@/src/app/components/industries/retail/faq"
import { CTA } from "@/src/app/components/industries/retail/CTA"
export default function RetailPage() {
  return (
    <main className="bg-background">
      <Hero />
      <AIApplications />
      <Benefits />
      <UseCases/>
      <CaseStudy />
      <Process />
      <TechStack />
      <FAQ />
      <CTA />
    </main>
  )
}

