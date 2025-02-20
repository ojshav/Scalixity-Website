import { Hero} from "@/src/app/components/mobile-design/hero"

import { WhyChooseUs } from "@/src/app/components/mobile-design/why-choose-us"
import { Capabilities } from "@/src/app/components/mobile-design/capabilities"

import { FeaturedWork }from "@/src/app/components/mobile-design/featured-work"

import { Industries } from "@/src/app/components/mobile-design/industries"
import { FAQ } from "@/src/app/components/mobile-design/faq"
export default function DesignPage() {
  return (
    <main className="bg-[#080B16]">
      <Hero />
      
      
      <WhyChooseUs />
      < Capabilities />
     
      < FeaturedWork />
     
      <Industries />
      <FAQ />
      
    </main>
  )}
