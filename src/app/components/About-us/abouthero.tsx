import React from 'react';
import Link from 'next/link';

export function Hero() {
    return (
        <div className="relative w-full bg-[#FFF2D5]">
            <section className="relative w-full bg-[#590178] text-white pt-20 pb-16 sm:pt-24 sm:pb-20 md:pt-28 md:pb-22 lg:pt-32 lg:pb-24 px-4 sm:px-6 md:px-8 rounded-b-[40px] sm:rounded-b-[60px] md:rounded-b-[80px] lg:rounded-b-[120px] overflow-hidden animate-[slideDown_1s_ease-out]">
                <div className="max-w-5xl mx-auto flex flex-col items-center text-center relative z-10">

                    {/* Tag */}
                    <div className="mb-4 sm:mb-6 md:mb-8">
                        <span className="bg-white text-[#4A0072] px-3 py-1 sm:px-4 sm:py-1.5 rounded-full text-[10px] sm:text-xs font-bold tracking-wider uppercase">
                            Redefining AI Solutions
                        </span>
                    </div>

                    {/* Headline */}
                    <h1 className="font-playfair text-3xl sm:text-4xl md:text-5xl lg:text-7xl xl:text-[5.5rem] leading-[1.2] sm:leading-[1.15] lg:leading-[1.1] mb-4 sm:mb-5 md:mb-6 px-2 sm:px-0">
                        Built for Innovation.<br />
                        Powered by Intelligence.
                    </h1>

                    {/* Subtext */}
                    <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white/80 max-w-3xl mx-auto mb-6 sm:mb-8 md:mb-10 lg:mb-12 font-light leading-relaxed px-2 sm:px-4 md:px-0">
                        Scalixity bridges the gap between complex data and actionable strategy. We engineer AI-driven ecosystems that propel businesses into the future.
                    </p>

                    {/* Buttons */}
                    <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 mb-8 sm:mb-12 md:mb-14 lg:mb-16 relative w-full sm:w-auto px-4 sm:px-0">
                        <Link
                            href="/"
                            className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-3.5 bg-[#FFF8E7] text-[#4A0072] rounded-lg font-semibold text-sm sm:text-base hover:text-[#4A0072] text-center"
                        >
                            Explore Scalixity
                        </Link>
                        <Link
                            href="/work"
                            className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-3.5 bg-transparent border border-white/30 text-white rounded-lg font-semibold transition-colors text-sm sm:text-base hover:text-white text-center"
                        >
                            View Our Work
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}