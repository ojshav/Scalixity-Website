import { ConsultingHero } from "@/src/app/components/generative-ai-consulting/hero"
import { WhatWeOffer } from "@/src/app/components/generative-ai-consulting/what-we-offer"
import { Process } from "@/src/app/components/generative-ai-consulting/process"
import { WhyChooseUs } from "@/src/app/components/generative-ai-consulting/why-choose-us"
import { TechStack } from "@/src/app/components/generative-ai-consulting/tech-stack"
import { FeaturedWork } from "@/src/app/components/generative-ai-consulting/featured-work"
import { Industries } from "@/src/app/components/generative-ai-consulting/industries"
import { FAQ } from "@/src/app/components/generative-ai-consulting/faq"
import { CTA } from "@/src/app/components/cta"

export default function GenerativeAIConsultingPage() {
  return (
    <main className="bg-background">
      <ConsultingHero />
      <WhatWeOffer />
      <Process />
      <WhyChooseUs />
      <TechStack />
      <FeaturedWork />
      <Industries />
      <FAQ />
      <CTA />
    </main>
  )
}
