"use client";

export function Hero() {
  return (
    <section className="bg-[#F3F1EB] text-black py-32 text-center">
      <div className="container mx-auto px-6">
        <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-6">
          Revolutionizing Finance with AI Agents
        </h1>
        <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-8">
          Empower your fintech solutions with AI agents — automating processes, personalizing customer experiences, and enhancing data-driven decision-making.
        </p>
        <div className="flex justify-center space-x-4">
          <button className="bg-black text-white font-bold py-3 px-8 rounded-full transition-transform transform hover:scale-105">
            Discover Solutions
          </button>
          <button className="bg-transparent border-4 border-black text-black font-bold py-3 px-8 rounded-full transition-transform transform hover:scale-105">
            Get Started
          </button>
        </div>
      </div>
    </section>
  );
}

export default Hero;
