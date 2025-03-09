import { Hero } from "@/src/app/components/industries/construction/hero"
import {GetStarted } from "@/src/app/components/industries/construction/GetStarted"
import { AIApplications } from "@/src/app/components/industries/construction/ai-application"
import { UseCases } from "@/src/app/components/industries/construction/use-case"
import { AIBenefits } from "@/src/app/components/industries/construction/benefits"
import { CaseStudy } from "@/src/app/components/industries/construction/case-study"
import { Process } from "@/src/app/components/industries/construction/process"
import { TechStack } from "@/src/app/components/industries/construction/tech-stack"
import { CTA } from "@/src/app/components/industries/construction/CTA"
import { FAQ } from "@/src/app/components/industries/construction/faq"
export default function ConstructionPage() {
  return (
    <main className="bg-background">
      <Hero />
      <GetStarted />
      <AIApplications />
      <UseCases />
      <AIBenefits />
      <CaseStudy />
      <Process />
      <TechStack />
      <CTA />
      <FAQ />
      
    </main>
  )
}

