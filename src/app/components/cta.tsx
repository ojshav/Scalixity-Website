import Link from 'next/link'

export function CTA() {
  return (
    <section className="bg-purple-700 py-20">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-8">
          Ready to transform your business with AI?
        </h2>
        <p className="text-xl text-white mb-12 max-w-3xl mx-auto">
          Let's discuss how we can help you leverage the power of generative AI and blockchain technology to drive growth and innovation.
        </p>
        <Link
          href="/contact"
          className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-white text-purple-700 font-bold text-lg hover:bg-gray-100 transition-colors"
        >
          Schedule a Consultation
        </Link>
      </div>
    </section>
  )
}
