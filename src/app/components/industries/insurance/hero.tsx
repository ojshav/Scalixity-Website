"use client";

export function Hero() {
  return (
    <section className="bg-gradient-to-r from-blue-900 to-black text-white py-32 text-center">
      <div className="container mx-auto px-6">
        <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
          Revolutionizing Insurance with AI
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-8">
          Empower your insurance business with AI-driven solutions. From risk assessment to fraud detection, experience the future of smart insurance.
        </p>
        <div className="flex justify-center space-x-4">
          <button className="bg-blue-600 hover:bg-blue-500 text-white font-semibold py-3 px-6 rounded-lg shadow-lg transition">
            Get Started
          </button>
          <button className="bg-transparent border-2 border-blue-600 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg transition">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
}

export default Hero;
