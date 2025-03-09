"use client";

export function GetStarted() {
  return (
    <section className="bg-gradient-to-r from-yellow-500 to-orange-600 text-white py-32 text-center">
      <div className="container mx-auto px-6">
        <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-6 animate-bounce">
        Let&apos;s Kickstart Your AI-Powered Construction Journey! 
        </h1>
        <p className="text-xl md:text-2xl text-white max-w-4xl mx-auto mb-8">
          Welcome to the future of construction, where AI meets innovation. Say goodbye to inefficiencies and hello to data-driven blueprints, automated processes, and smart construction strategies. Join us as we reshape the industry—one intelligent brick at a time.
        </p>
        <div className="flex justify-center space-x-4">
          <button className="bg-black hover:bg-gray-800 text-white font-bold py-3 px-8 rounded-full shadow-xl transition-transform transform hover:scale-110">
            🏁 Get Started Now
          </button>
          <button className="bg-transparent border-4 border-white hover:bg-white hover:text-orange-600 text-white font-bold py-3 px-8 rounded-full transition-transform transform hover:scale-110">
            🔎 Discover More
          </button>
        </div>
      </div>
    </section>
  );
}

export default GetStarted;
