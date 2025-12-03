import React from 'react';
import Link from 'next/link';

export function WorkHero() {
    return (
        <div className="relative w-full bg-[#FFF2D5]">
            <section className="relative w-full bg-[#590178] text-white pt-32 pb-16 sm:pt-32 sm:pb-20 md:pt-32 md:pb-22 lg:pt-32 lg:pb-24 px-4 sm:px-6 md:px-8 rounded-b-[40px] sm:rounded-b-[60px] md:rounded-b-[80px] lg:rounded-b-[120px] overflow-hidden animate-[slideDown_1s_ease-out]">
                <div className="max-w-5xl mx-auto flex flex-col items-center text-center relative z-10">

                    {/* Headline */}
                    <h1 className="font-playfair text-3xl sm:text-4xl md:text-5xl lg:text-7xl xl:text-[5.5rem] leading-[1.2] sm:leading-[1.15] lg:leading-[1.1] mb-6 sm:mb-8 md:mb-10 lg:mb-12 px-2 sm:px-0">
                        Digital solutions we&apos;ve<br />
                        engineered
                    </h1>

                    {/* Buttons */}
                    <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 relative w-full sm:w-auto px-4 sm:px-0">
                        <Link
                            href="/"
                            className="w-auto px-6 sm:px-8 py-3 sm:py-3.5 bg-[#FFF8E7] text-[#590178] rounded-lg font-semibold hover:bg-white transition-colors text-sm sm:text-base hover:text-[#590178] text-center"
                        >
                            Explore Scalixity
                        </Link>
                      
                    </div>
                </div>
            </section>
        </div>
    );
}