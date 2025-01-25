import { Hero } from "@/src/app/components/industries/healthcare/hero"
import { AIApplications } from "@/src/app/components/industries/healthcare/ai-applications"
import { Benefits } from "@/src/app/components/industries/healthcare/benefits"
import { CaseStudies } from "@/src/app/components/industries/healthcare/case-studies"
import { Process } from "@/src/app/components/industries/healthcare/process"
import { TechStack } from "@/src/app/components/industries/healthcare/tech-stack"
import { FAQ } from "@/src/app/components/industries/healthcare/faq"
import { CTA } from "@/src/app/components/cta"

export default function HealthcareAIPage() {
  return (
    <main className="bg-background">
      <Hero />
      <AIApplications />
      <Benefits />
      <CaseStudies />
      <Process />
      <TechStack />
      <FAQ />
      <CTA />
    </main>
  )
}

