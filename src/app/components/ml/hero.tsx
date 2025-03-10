import Link from 'next/link';

export function Hero() {
  return (
    <section className="bg-[#F3F1EB] py-20 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-black mb-6">
            ML Development Services
          </h1>
          <p className="text-xl text-gray-700 mb-8">
            Unlock the power of Machine Learning to drive innovation and solve complex business challenges with our tailored ML solutions.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-black hover:opacity-80 md:py-4 md:text-lg md:px-10"
          >
            Get Started
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Hero;
