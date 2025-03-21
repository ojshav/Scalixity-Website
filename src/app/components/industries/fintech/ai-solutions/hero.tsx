"use client";

export function Hero() {
  return (
    <section className="bg-[#F3F1EB] text-black py-32 text-center">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
          AI-Powered Financial Solutions for a Smarter Future
        </h1>
        <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-12">
          Transform financial services with cutting-edge AI — from fraud detection to automated insights, enhancing efficiency and security.
        </p>
        <a
          href="/contact"
          className="inline-block bg-black text-white py-3 px-6 rounded-lg text-lg font-semibold transition duration-300 hover:bg-gray-800"
        >
          Contact Us
        </a>
      </div>
    </section>
  );
}

export default Hero;
