import Link from 'next/link'

export function GenerativeAIDevelopmentHero() {
  return (
    <section className="bg-[#F3F1EB] py-20 relative overflow-hidden"> {/* Soft, warm beige background */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-semibold text-black mb-6"> {/* Less bold heading */}
            Generative AI Development Company
          </h1>
          <p className="text-xl text-gray-700 mb-12 leading-relaxed"> {/* Slightly darker text for contrast */}
            We help data-driven, medium-sized companies innovate with Generative AI development services. Our team of AI/ML engineers builds custom Generative AI solutions that address specific business challenges, reduce operational costs, and create impact.
          </p>
          <div className="flex items-center justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-black text-white font-medium text-lg hover:bg-gray-800 transition-colors"
            >
              Schedule a Free Consultation
            </Link>
          </div>
        </div>
      </div>
      <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-20" />
    </section>
  )
}

export default GenerativeAIDevelopmentHero;