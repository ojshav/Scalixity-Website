import Link from 'next/link'

export function Hero() {
  return (
    <section className="bg-[#F3F1EB] py-20 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-black mb-6">
            IoT Development Services
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Unlock the power of connected devices with our cutting-edge IoT solutions. We design, develop, and deploy smart IoT ecosystems tailored to your business needs.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-black hover:bg-gray-800 md:py-4 md:text-lg md:px-10"
          >
            Get Started
          </Link>
        </div>
      </div>
      <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-20" />
    </section>
  )
}

export default Hero;
