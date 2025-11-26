import { Hero } from "@/src/app/components/About-us/abouthero"
import OurJourney from "@/src/app/components/About-us/ourjourney"
import { OurTeam } from "@/src/app/components/About-us/ourteam"
import GlobalImpact from "@/src/app/components/About-us/globalimpact"
import CoreValue from "@/src/app/components/About-us/corevalue"
import { CTA } from "@/src/app/components/cta"

export default function CompanyPage() {


  return (
    <div className=" text-black min-h-screen">
      <Hero />
      <GlobalImpact />
      <OurJourney />
      <OurTeam />
      <CoreValue />
      <CTA />
    </div>
  )
}
