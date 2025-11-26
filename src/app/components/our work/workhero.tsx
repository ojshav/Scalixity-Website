import React from 'react';
import Link from 'next/link';

export function WorkHero() {
    return (
        <div className="relative w-full bg-[#FFF2D5]">
            <section className="relative w-full bg-[#590178] text-white pt-32 pb-24 px-4 md:px-8 rounded-b-[120px] overflow-hidden animate-[slideDown_1s_ease-out]">
                <div className="max-w-5xl mx-auto flex flex-col items-center text-center relative z-10">

                    {/* Headline */}
                    <h1 className="font-playfair text-5xl md:text-7xl lg:text-[5.5rem] leading-[1.1] mb-12">
                        Digital solutions we&apos;ve<br />
                        engineered
                    </h1>

                    {/* Buttons */}
                    <div className="flex flex-col sm:flex-row items-center gap-4 relative">
                        <Link
                            href="/scalixity"
                            className="px-8 py-3.5 bg-[#FFF8E7] text-[#590178] rounded-lg font-semibold hover:bg-white transition-colors text-base hover:text-[#590178]"
                        >
                            Explore Scalixity
                        </Link>
                        <Link
                            href="/work"
                            className="px-8 py-3.5 bg-[#590178] border border-white/30 text-white rounded-lg font-semibold hover:bg-[#6A0188] transition-colors text-base hover:text-white"
                        >
                            View Our Work
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}

