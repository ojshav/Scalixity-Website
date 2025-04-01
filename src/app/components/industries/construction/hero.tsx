"use client";

export function Hero() {
  return (
    <section className="bg-[#F3F1EB] text-black py-24 text-center">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl md:text-6xl font-semibold leading-tight mb-6">
          Building the Future, One Smart Brick at a Time
        </h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8">
          Unlock AI-powered solutions for smarter, faster, and safer construction. Let’s revolutionize how we build — from blueprint to skyline.
        </p>
        <div className="flex justify-center">
          <a
            href="/contact"
            className="bg-transparent border-4 border-black text-black font-bold py-3 px-8 rounded-full hover:bg-black hover:text-white transition-colors"
          >
            Explore Solutions
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
