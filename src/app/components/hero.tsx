"use client";

import React from "react";

export function Hero() {
  return (
    <section
      className="relative flex flex-col items-center justify-center h-screen text-center text-white bg-[#9FA8DA] overflow-hidden"
    >
      {/* Hero Content */}
      <h1 className="text-6xl font-bold leading-tight">
        Elevate Your Business with <span className="text-[#4B0082]">Scalixity</span>
      </h1>
      <p className="mt-4 text-lg max-w-2xl">
        We craft bespoke, cutting-edge AI solutions that empower data-driven companies to achieve unparalleled innovation and efficiency.
      </p>

      {/* Buttons */}
      <div className="mt-8 flex space-x-4">
        <a
          href="/contact"
          className="px-6 py-3 text-white bg-blue-600 rounded-full hover:bg-blue-500 transition"
        >
          Embark on Your AI Journey
        </a>
        <a
          href="/services"
          className="px-6 py-3 text-white border border-white rounded-full hover:bg-white hover:text-black transition"
        >
          Discover Our Royal Services
        </a>
      </div>
    </section>
  );
}

export default Hero;



