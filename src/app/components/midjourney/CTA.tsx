import Link from 'next/link';

export function CTA() {
  return (
    <section className="py-20" style={{ backgroundColor: "#A8B2E7" }}>
      <div className="container mx-auto px-4 text-center">
        <h2
          className="text-3xl md:text-5xl font-bold mb-8"
          style={{ color: "#000000" }}
        >
          Ready to transform your business with AI?
        </h2>
        <p
          className="text-xl mb-12 max-w-3xl mx-auto"
          style={{ color: "#000000" }}
        >
          Let&rsquo;s discuss how we can help you leverage the power of
          generative AI and blockchain technology to drive growth and
          innovation.
        </p>
        <Link
          href="/contact"
          className="inline-flex items-center justify-center px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-300 transition-colors"
          style={{ backgroundColor: "#000000", color: "#FFFFFF" }}
        >
          Schedule a Consultation
        </Link>
      </div>
    </section>
  );
}
