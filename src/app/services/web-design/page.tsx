import { Hero} from "@/src/app/components/web-design/hero"
import { WhatWeOffer } from "@/src/app/components/web-design/whar-we-offer"
import { Benefits } from "@/src/app/components/web-design/benefits"
import { Process } from "@/src/app/components/web-design/process"

import { FAQ } from "@/src/app/components/web-design/faq"
export default function DesignPage() {
    return (
      <main className="bg-[#080B16]">
        <Hero />
        <WhatWeOffer />
        <Benefits />
       
        <Process />
        
        
       
        <FAQ />
        
      </main>
    )}
  