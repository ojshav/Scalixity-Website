import Link from 'next/link'
import { Services } from "@/src/app/components/services"
import { CTA } from "@/src/app/components/cta"

export default function ServicesPage() {
  return (
    <div className="pt-20">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-center py-12">Our Services</h1>
        <p className="text-xl text-center text-gray-400 mb-12">Empowering your business with cutting-edge AI solutions</p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <div className="bg-[#1A1B26] p-6 rounded-lg">
            <h2 className="text-2xl font-semibold text-white mb-4">Generative AI</h2>
            <p className="text-gray-400 mb-4">Explore our advanced Generative AI solutions and services.</p>
            <Link href="/services/generative-ai" className="text-purple-500 hover:text-purple-400">
              Learn More →
            </Link>
          </div>
          {/* Add more service cards here */}
        </div>
      </div>
      <Services />
      <CTA />
    </div>
  )
}

