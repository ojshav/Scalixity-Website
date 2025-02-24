import { Hero } from "@/src/app/components/industries/fintech/hero"
import { AIApplications } from "@/src/app/components/industries/fintech/ai-applications"
import { UseCases } from "@/src/app/components/industries/fintech/use-case"
import { Benefits } from "@/src/app/components/industries/fintech/benefits"
import { CaseStudy } from "@/src/app/components/industries/fintech/case-studies"
import { Process } from "@/src/app/components/industries/fintech/process"
import { TechStack } from "@/src/app/components/industries/fintech/tech-stack"
import { FAQ } from "@/src/app/components/industries/fintech/faq"
import { CTA } from "@/src/app/components/industries/fintech/CTA"
export default function FintechPage() {
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

