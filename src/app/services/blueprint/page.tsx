import { Hero} from "@/src/app/components/blueprint/hero"
import { Benefits } from "@/src/app/components/blueprint/benefits"
import { WhyChooseUs } from "@/src/app/components/blueprint/why-choose-us"
import { FAQ } from "@/src/app/components/blueprint/faq"
import { CTA } from "@/src/app/components/blueprint/CTA"
export default function DesignPage() {
    return (
      <main className="bg-[#080B16]">
        <Hero />
       
        <Benefits />
        <WhyChooseUs />
       
        <FAQ />
        < CTA />
      </main>
    )}
  