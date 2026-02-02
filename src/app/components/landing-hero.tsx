import React from 'react';
import Link from 'next/link';

export function LandingHero() {
    return (
        <div className="relative w-full bg-[#FFF2D5]">
            <section className="relative w-full bg-[#590178] text-white pt-20 pb-10 sm:pt-24 sm:pb-12 md:pt-28 md:pb-10 lg:pt-32 lg:pb-4 px-4 sm:px-6 md:px-8 rounded-b-[2.5rem] sm:rounded-b-[3.75rem] md:rounded-b-[5rem] lg:rounded-b-[5rem] overflow-hidden animate-[slideDown_1s_ease-out]">
                <div className="max-w-5xl mx-auto flex flex-col items-center text-center relative z-10">

                    {/* Headline */}
                    <h1 className="font-playfair text-3xl sm:text-4xl md:text-5xl lg:text-7xl xl:text-[5.5rem] leading-[1.2] sm:leading-[1.15] lg:leading-[1.1] mb-4 sm:mb-5 md:mb-6 px-2 sm:px-0">
                        Your Growth Engine, Not<br />
                        Just Your Tech Team
                    </h1>

                    {/* Subtext */}
                    <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white/80 max-w-3xl mx-auto mb-6 sm:mb-8 md:mb-10 lg:mb-12 font-light leading-relaxed px-2 sm:px-4 md:px-0">
                        At <span className="font-bold font-playfair text-[#FFF2D5] text-lg sm:text-xl md:text-2xl">SCALIXITY</span>, we redefine innovation by crafting AI solutions tailored to elevate businesses. Our approach merges data intelligence and automation, unlocking new realms of growth and efficiency. From streamlining operations to uncovering hidden opportunities, we empower companies to embrace the future with confidence and creativity.
                    </p>

                    {/* Buttons */}
                    <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 mb-8 sm:mb-12 md:mb-14 lg:mb-16 relative w-full sm:w-auto px-4 sm:px-0">
                        <Link
                            href="/company"
                            className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-3.5 bg-[#FFF8E7] text-[#4A0072] rounded-lg font-semibold text-sm sm:text-base hover:bg-white transition-colors text-center"
                        >
                            Explore Scalixity
                        </Link>
                        <Link
                            href="/contact"
                            className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-3.5 bg-transparent border border-white/30 text-white rounded-lg font-semibold transition-colors text-sm sm:text-base hover:bg-white/10 text-center"
                        >
                            Schedule a Call
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
