import { Hero} from "@/src/app/components/mobile-design/hero"
import {MobileAppDesignOfferings} from "@/src/app/components/mobile-design/what-we-offer"
import { MobileAppDesignBenefits } from "@/src/app/components/mobile-design/benifits"
import { WhyChooseUs } from "@/src/app/components/mobile-design/why-choose-us"
import { Capabilities } from "@/src/app/components/mobile-design/capabilities"
import { MobileAppDesignExpertise}  from "@/src/app/components/mobile-design/expertise"
import{ MobileAppDesignProcess} from "@/src/app/components/mobile-design/process"
import { FeaturedWork }from "@/src/app/components/mobile-design/featured-work"
import {MobileAppDesignTools} from "@/src/app/components/mobile-design/tools-and-technology"
import { Industries } from "@/src/app/components/mobile-design/industries"
import { CTA } from "@/src/app/components/mobile-design/CTA"
import { FAQ } from "@/src/app/components/mobile-design/faq"


export default function DesignPage() {
  return (
    <main className="bg-[#080B16]">
      <Hero />
    <MobileAppDesignOfferings/>
      <MobileAppDesignBenefits />
      < MobileAppDesignExpertise/>
      <WhyChooseUs />
      < Capabilities />
     <MobileAppDesignProcess/>
      < FeaturedWork />
      <MobileAppDesignTools/>
      <Industries />
      < CTA />
      <FAQ />
      
      
    </main>
  )}
