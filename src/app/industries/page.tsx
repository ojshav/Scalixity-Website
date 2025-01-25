import { Industries } from "@/src/app/components/industries"
import { CTA } from "@/src/app/components/cta"

export default function IndustriesPage() {
  return (
    <div className="pt-20">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-center py-12">Industries We Serve</h1>
        <p className="text-xl text-center text-gray-400 mb-12">Transforming businesses across various sectors with AI-powered solutions</p>
      </div>
      <Industries />
      <CTA />
    </div>
  )
}

