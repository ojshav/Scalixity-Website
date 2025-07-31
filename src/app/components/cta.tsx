import Link from 'next/link'

export function CTA() {
  return (
    <section className="bg-[#A8B2E7] py-20">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-black mb-8">
          Ready to transform your business with AI?
        </h2>
        <p className="text-xl text-black mb-12 max-w-3xl mx-auto">
          Let&rsquo;s discuss how we can help you leverage the power of generative AI and blockchain technology to drive growth and innovation.
        </p>
        <Link
          href="/contact"
          className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-black text-white font-bold text-lg hover:bg-gray-800 transition-colors"
        >
          Schedule a Consultation
        </Link>
      </div>
    </section>
  )
} 

