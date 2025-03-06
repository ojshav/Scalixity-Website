import { Hero} from "@/src/app/components/ai-consulting/hero"
import { WhatWeOffer } from "@/src/app/components/ai-consulting/what-we-offer"
import { Benefits } from "@/src/app/components/ai-consulting/benifits"
import { WhyChooseUs } from "@/src/app/components/ai-consulting/why-choose-us"
import { Capabilities } from "@/src/app/components/ai-consulting/capabilities"
import { Process } from "@/src/app/components/ai-consulting/process"
import { FeaturedWork }from "@/src/app/components/ai-consulting/featured-work"
import { AIModels } from "@/src/app/components/ai-consulting/ai-models"
import { ToolsAndTechnology} from "@/src/app/components/ai-consulting/tools-and-technology"
import { Expertise } from "@/src/app/components/ai-consulting/expertise"
import { Industries } from "@/src/app/components/ai-consulting/industries"
import { FAQ } from "@/src/app/components/ai-consulting/faq"
import { CTA } from "@/src/app/components/ai-consulting/CTA"
export default function AIDevelopmentPage() {
  return (
    <main className="bg-[#080B16]">
      <Hero />
      <WhatWeOffer />
      <Benefits />
      <WhyChooseUs />
      < Capabilities />
      <Process />
      < FeaturedWork />
      < AIModels />
      <ToolsAndTechnology />
      < Expertise />
      <Industries />
      <FAQ />
      < CTA />
    </main>
  )}
