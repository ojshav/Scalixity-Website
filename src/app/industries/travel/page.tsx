import { Hero } from "@/src/app/components/industries/travel/hero"
import { AIApplications } from "@/src/app/components/industries/travel/ai-application"
import { UseCases } from "@/src/app/components/industries/travel/use-cases"
import { Benefits } from "@/src/app/components/industries/travel/benefits"
import { CaseStudy } from "@/src/app/components/industries/travel/case-studies"
import { Process } from "@/src/app/components/industries/travel/process"
import { TechStack } from "@/src/app/components/industries/travel/tech-stack"
import { FAQ } from "@/src/app/components/industries/travel/faq"
import { CTA } from "@/src/app/components/industries/travel/CTA"
export default function TravelPage() {
  return (
    <main className="bg-background">
      <Hero />
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

