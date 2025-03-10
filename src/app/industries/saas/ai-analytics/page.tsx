import { Hero } from "@/src/app/components/industries/saas/ai-analytics/hero"
import { WhatWeOffer } from "@/src/app/components/industries/saas/ai-analytics/what-we-offer"
import { Benefits } from "@/src/app/components/industries/saas/ai-analytics/benefits"
import { Process } from "@/src/app/components/industries/saas/ai-analytics/process"
import { TechStack} from "@/src/app/components/industries/saas/ai-analytics/tech-stack"
import { AIApplications } from "@/src/app/components/industries/saas/ai-analytics/ai-applications"
import {CTA} from "@/src/app/components/cta"
import { FAQ } from "@/src/app/components/industries/saas/ai-analytics/faq"
export default function SAAStPage() {
  return (
    <main className="bg-[#080B16]">
      <Hero />
      <WhatWeOffer />
      <Benefits />
      <AIApplications/>
      < Process />
      <TechStack />
      < CTA />
      <FAQ />
      
    </main>
  )}
