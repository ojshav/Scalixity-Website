"use client";

export function Hero() {
  return (
    <section className="bg-[#F3F1EB] text-black py-32 text-center">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl md:text-5xl font-semibold leading-tight mb-6">
          Revolutionizing Insurance with AI
        </h1>
        <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto mb-8">
          Empower your insurance business with AI-driven solutions. From risk assessment to fraud detection, experience the future of smart insurance.
        </p>
        <a 
          href="/contact"
          className="bg-black text-white py-3 px-8 rounded-lg text-lg font-medium hover:bg-gray-800 transition-colors"
        >
          Get Started
        </a>
      </div>
    </section>
  );
}

export default Hero;
