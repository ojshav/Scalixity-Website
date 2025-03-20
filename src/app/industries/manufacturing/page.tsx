import { Hero } from "@/src/app/components/industries/manufacturing/hero"

import { AIApplications } from "@/src/app/components/industries/manufacturing/ai-applications"
import { WhatWeOffer }  from "@/src/app/components/industries/manufacturing/what-we-offer"
import { Benefits } from "@/src/app/components/industries/manufacturing/benefits"
import { UseCases } from "@/src/app/components/industries/manufacturing/use-cases"
import { Process } from "@/src/app/components/industries/manufacturing/process"
import { TechStack } from "@/src/app/components/industries/manufacturing/tech-stack"
import { CTA } from "@/src/app/components/industries/manufacturing/CTA"
import { FAQ } from "@/src/app/components/industries/manufacturing/faq"
export default function ManufacturingPage() {
  return (
    <main className="bg-background">
      <Hero />
    
      <WhatWeOffer/>
      <AIApplications />
      <Benefits />
      <UseCases />
      <Process />
      <TechStack />
      <CTA/>
      <FAQ/>
    </main>
  )
}
