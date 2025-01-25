import { CaseStudies } from "@/src/app/components/case-studies"
import { CTA } from "@/src/app/components/cta"

export default function WorkPage() {
  return (
    <div className="pt-20">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-center py-12">Our Work</h1>
        <p className="text-xl text-center text-gray-400 mb-12">Discover how we've helped businesses transform with AI</p>
      </div>
      <CaseStudies />
      <CTA />
    </div>
  )
}

