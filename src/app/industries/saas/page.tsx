import { Hero } from "@/src/app/components/industries/saas/hero"
import { AIApplications } from "@/src/app/components/industries/saas/ai-applications"
import { UseCases } from "@/src/app/components/industries/saas/use-cases"
import { Benefits } from "@/src/app/components/industries/saas/benefits"
import { CaseStudy } from "@/src/app/components/industries/saas/case-studies"
import { Process } from "@/src/app/components/industries/saas/process"
import { TechStack } from "@/src/app/components/industries/saas/tech-stack"
import { FAQ } from "@/src/app/components/industries/saas/faq"
import { CTA } from "@/src/app/components/industries/saas/CTA"
export default function SaasPage() {
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

