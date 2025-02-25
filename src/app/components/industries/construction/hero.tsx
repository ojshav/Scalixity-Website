"use client";

export function Hero() {
  return (
    <section className="bg-gradient-to-r from-yellow-500 to-orange-600 text-white py-32 text-center">
      <div className="container mx-auto px-6">
        <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-6 animate-pulse">
          Building the Future, One Smart Brick at a Time
        </h1>
        <p className="text-xl md:text-2xl text-white max-w-3xl mx-auto mb-8">
          Unlock AI-powered solutions for smarter, faster, and safer construction. Let’s revolutionize how we build — from blueprint to skyline.
        </p>
        <div className="flex justify-center space-x-4">
          <button className="bg-black hover:bg-gray-800 text-white font-bold py-3 px-8 rounded-full shadow-xl transition-transform transform hover:scale-105">
            Get Started
          </button>
          <button className="bg-transparent border-4 border-white hover:bg-white hover:text-orange-600 text-white font-bold py-3 px-8 rounded-full transition-transform transform hover:scale-105">
            Explore Solutions
          </button>
        </div>
      </div>
    </section>
  );
}

export default Hero;
