import React from 'react';
import Link from 'next/link';

export function Hero() {
    return (
        <div className="relative w-full bg-[#FFF2D5]">
            <section className="relative w-full bg-[#590178] text-white pt-32 pb-24 px-4 md:px-8 rounded-b-[120px] overflow-hidden animate-[slideDown_1s_ease-out]">
                <div className="max-w-5xl mx-auto flex flex-col items-center text-center relative z-10">

                    {/* Tag */}
                    <div className="mb-8">
                        <span className="bg-white text-[#4A0072] px-4 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase">
                            Redefining AI Solutions
                        </span>
                    </div>

                    {/* Headline */}
                    <h1 className="font-playfair text-5xl md:text-7xl lg:text-[5.5rem] leading-[1.1] mb-6">
                        Built for Innovation.<br />
                        Powered by Intelligence.
                    </h1>

                    {/* Subtext */}
                    <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto mb-12 font-light leading-relaxed">
                        Scalixity bridges the gap between complex data and actionable strategy. We engineer AI-driven ecosystems that propel businesses into the future.
                    </p>

                    {/* Buttons */}
                    <div className="flex flex-col sm:flex-row items-center gap-4 mb-16 relative">
                        <Link
                            href="/contact"
                            className="px-8 py-3.5 bg-[#FFF8E7] text-[#4A0072] rounded-lg font-semibold text-base hover:text-[#4A0072]"
                        >
                            Explore Scalixity
                        </Link>
                        <Link
                            href="/contact"
                            className="px-8 py-3.5 bg-transparent border border-white/30 text-white rounded-lg font-semibold transition-colors text-base hover:text-white"
                        >
                            View Our Work
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
