"use client";

export function Hero() {
  return (
    <section className="bg-[#F3F1EB] text-black py-32 text-center">
      <div className="container mx-auto px-6">
        <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-6">
          AI-Powered Financial Solutions for a Smarter Future
        </h1>
        <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-8">
          Transform financial services with cutting-edge AI — from fraud detection to automated insights, enhancing efficiency and security.
        </p>
        <div className="flex justify-center space-x-4">
          <button className="bg-black text-white font-bold py-3 px-8 rounded-full transition-transform transform hover:scale-105">
            Explore Solutions
          </button>
        </div>
      </div>
    </section>
  );
}

export default Hero;
