import { Hero } from "@/src/app/components/android/hero"
import { WhatWeOffer } from "@/src/app/components/android/what-we-offer"
import { Benefits } from "@/src/app/components/android/benefits"
import { FeaturedWork } from "@/src/app/components/android/featured-work"
import { Process } from "@/src/app/components/android/proces"
import { Industries} from "@/src/app/components/android/industries"
import { CTA } from "@/src/app/components/android/CTA"
import { FAQ } from "@/src/app/components/android/faq"
export default function MobileDevelopmentPage() {
  return (
    <main className="bg-[#080B16]">
      <Hero />
      <WhatWeOffer />
      <Benefits />
      <FeaturedWork/>
      < Process />
      <Industries />
      < CTA />
      <FAQ />
      
    </main>
  )}