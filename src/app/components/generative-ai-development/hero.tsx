import Link from 'next/link'

export function GenerativeAIDevelopmentHero() {
  return (
    <section className="bg-[#080B16] py-20 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Generative AI Development Company
          </h1>
          <p className="text-xl text-gray-400 mb-12 leading-relaxed">
            We help data-driven, medium-sized companies innovate with Generative AI development services. Our team of AI/ML engineers builds custom Generative AI solutions that address specific business challenges, reduce operational costs, and create impact.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-purple-600 text-white font-medium text-lg hover:bg-purple-700 transition-colors w-full sm:w-auto"
            >
              Schedule a Free Consultation
            </Link>
            <Link
              href="#case-studies"
              className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-white/10 text-white font-medium text-lg hover:bg-white/20 transition-colors w-full sm:w-auto"
            >
              View Case Studies
            </Link>
          </div>
        </div>
      </div>
      <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-20" />
    </section>
  )
}

