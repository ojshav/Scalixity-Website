import { Hero } from "@/src/app/components/llm-development/hero"
import { Benefits } from "@/src/app/components/llm-development/benefits"
import { UseCases } from "@/src/app/components/llm-development/use-cases"
import { Process } from "@/src/app/components/llm-development/process"
import { Industries } from "@/src/app/components/llm-development/industries"
import { TechStack } from "@/src/app/components/llm-development/tech-stack"
import { FAQ } from "@/src/app/components/llm-development/faq"
import { CTA } from "@/src/app/components/cta"

export default function LLMDevelopmentPage() {
return (
  <main className="bg-background">
    <Hero />
    <Benefits />
    <UseCases />
    <Process />
    <Industries />
    <TechStack />
    <FAQ />
    <CTA />
  </main>
)
}

