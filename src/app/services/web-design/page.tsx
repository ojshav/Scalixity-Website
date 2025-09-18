import { Hero} from "@/src/app/components/web-design/hero"
import { WhatWeOffer } from "@/src/app/components/web-design/whar-we-offer"
import { Benefits } from "@/src/app/components/web-design/benefits"
import  {Expertise} from "@/src/app/components/web-design/expertise"
import { FeaturedWork }  from "@/src/app/components/web-design/featured-work"
import { Process } from "@/src/app/components/web-design/process"
import { CTA}  from "@/src/app/components/cta"
import { FAQ } from "@/src/app/components/web-design/faq"
export default function DesignPage() {
    return (
      <main className="bg-[#080B16]">
        <Hero />
        <WhatWeOffer />
        <Benefits />
        <Expertise/>
        <FeaturedWork/>
        <Process />
        <CTA />
        <FAQ />
        
      </main>
    )}
  