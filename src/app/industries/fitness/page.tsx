import { Hero } from "@/src/app/components/industries/fitness/hero"
import { AIApplications } from "@/src/app/components/industries/fintech/ai-applications"
import { UseCases }  from "@/src/app/components/industries/fitness/use.case"
import { Benefits } from "@/src/app/components/industries/fintech/benefits"
import { CaseStudy} from "@/src/app/components/industries/fintech/case-studies"
import { Process } from "@/src/app/components/industries/fitness/process"
import { TechStack } from "@/src/app/components/industries/fitness/tech-stack"
import { CTA } from "@/src/app/components/industries/fitness/CTA"
import { FAQ} from "@/src/app/components/industries/fitness/faq"
export default function FitnessPage() {
  return (
    <main className="bg-background">
      <Hero />
      <AIApplications />
      <UseCases/>
      <Benefits />
      <CaseStudy />
      <Process />
      <TechStack />
      <CTA />
      <FAQ />
    </main>
  )
}
