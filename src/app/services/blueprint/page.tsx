import { Hero} from "@/src/app/components/blueprint/hero"
import { WhatWeOffer } from "@/src/app/components/blueprint/what-we-offer"
import { Benefits } from "@/src/app/components/blueprint/benefits"
import { FeaturedWork } from "@/src/app/components/blueprint/featured-work"

import { Expertise } from "@/src/app/components/blueprint/expertise"
import { WhyChooseUs } from "@/src/app/components/blueprint/why-choose-us"
import { FAQ } from "@/src/app/components/blueprint/faq"
import { CTA } from "@/src/app/components/blueprint/CTA"
export default function DesignPage() {
    return (
      <main className="bg-[#080B16]">
        <Hero />
        <WhatWeOffer/>
        <Benefits />
        <Expertise/>
        <FeaturedWork/>
      
        <WhyChooseUs />
       
        <FAQ />
        < CTA />
      </main>
    )}
  