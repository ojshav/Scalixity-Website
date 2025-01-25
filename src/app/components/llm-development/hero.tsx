import Link from 'next/link'

export function LLMDevelopmentHero() {
  return (
    <section className="bg-[#080B16] py-20 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            LLM Development Services
          </h1>
          <p className="text-xl text-gray-400 mb-8">
            Harness the power of Large Language Models to transform your business. Our expert team develops custom LLM solutions tailored to your specific needs and industry requirements.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 md:py-4 md:text-lg md:px-10"
          >
            Get Started
          </Link>
        </div>
      </div>
      <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-20" />
    </section>
  )
}

