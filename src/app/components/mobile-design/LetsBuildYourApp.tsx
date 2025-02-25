"use client";

export function LetsBuildYourApp() {
  return (
    <section className="bg-[#080B16] py-28 text-center relative overflow-hidden">
      <div className="container mx-auto px-6">
        <h2 className="text-6xl font-extrabold text-white mb-6 leading-tight">
          Your App Idea. <br />
          Our Blueprint. <br />
          <span className="text-purple-500">Limitless Possibilities.</span>
        </h2>
        <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-10">
          Let’s design an app that doesn’t just look stunning — but works 
          effortlessly. From wireframes to wow-moments, we build experiences that captivate.
        </p>
        <button className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white py-4 px-12 rounded-full text-lg font-semibold transition-all shadow-lg transform hover:scale-105">
          Start Your App Journey 🚀
        </button>
      </div>

      {/* Dynamic Background Elements */}
      <div className="absolute -top-20 -left-20 w-80 h-80 bg-purple-500 opacity-30 rounded-full blur-[120px]"></div>
      <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-indigo-500 opacity-30 rounded-full blur-[120px]"></div>
      <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 w-[120%] h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-50"></div>
    </section>
  );
}

export default LetsBuildYourApp;

