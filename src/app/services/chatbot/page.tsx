import { Hero} from "@/src/app/components/chatbot/hero"
import { WhatWeOffer } from "@/src/app/components/chatbot/what-we-offer"
import { Benefits } from "@/src/app/components/chatbot/benefits"

import { Capabilities } from "@/src/app/components/chatbot/capabilities"
import { Process } from "@/src/app/components/chatbot/process"
import { FeaturedWork }from "@/src/app/components/chatbot/featured-work"
import { CTA } from "@/src/app/components/chatbot/CTA"


export default function AIDevelopmentPage() {
  return (
    <main className="bg-[#080B16]">
      <Hero />
      <WhatWeOffer />
      <Benefits />
      
      < Capabilities />
      <Process />
      < FeaturedWork />
      < CTA />
    </main>
  )}
