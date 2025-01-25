import { AgentHero } from "@/src/app/components/ai-agent-development/hero"
import { Features } from "@/src/app/components/ai-agent-development/features"
import { Capabilities } from "@/src/app/components/ai-agent-development/capabilities"
import { Process } from "@/src/app/components/ai-agent-development/process"
import { UseCases } from "@/src/app/components/ai-agent-development/use-cases"
import { TechStack } from "@/src/app/components/ai-agent-development/tech-stack"
import { FAQ } from "@/src/app/components/ai-agent-development/faq"
import { CTA } from "@/src/app/components/cta"

export default function AIAgentDevelopmentPage() {
  return (
    <main className="bg-[#080B16]">
      <AgentHero />
      <Features />
      <Capabilities />
      <Process />
      <UseCases />
      <TechStack />
      <FAQ />
      <CTA />
    </main>
  )
}

