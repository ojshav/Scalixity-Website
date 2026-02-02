'use client';

import Link from 'next/link';

const ScalixityBlends = () => {
    // Main content comparison points
    const comparisonPoints = [
        "Most teams hire developers expecting growth.",
        "Developers write code.",
        "We engineer outcomes",
    ];

    // Card items
    const cardItems = [
        "Consulting-level thinking",
        "AI-first engineering",
        "Automation & systems design",
        "Speed-focused product execution",
    ];

    return (
        <section className="bg-[#FFF2D5] py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 md:px-8 lg:px-12 flex flex-col items-center overflow-hidden">
            {/* Component Title */}
            <div className="w-full max-w-5xl text-center mb-10 sm:mb-14 md:mb-16 lg:mb-20">
                <h2 className="font-playfair text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-[1.15] sm:leading-[1.1] text-[#1A1A1A] font-semibold px-2">
                    You Don&apos;t Need a Developer Team. You Need a Growth Engineering Partner.
                </h2>
            </div>

            {/* Main Content Area */}
            <div className="w-full max-w-7xl grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 md:gap-12 lg:gap-16 xl:gap-24 items-center">

                {/* Left Side: Text */}
                <div className="flex flex-col h-full">
                    <div className="flex-grow flex flex-col justify-center">
                        <div className="space-y-5 sm:space-y-6 md:space-y-7">
                            {comparisonPoints.map((point, i) => (
                                <div key={i} className="flex items-center gap-4 sm:gap-6 md:gap-8">
                                    <div className="w-9 h-9 sm:w-10 sm:h-10 md:w-11 md:h-11 rounded-full bg-[#590178] flex items-center justify-center shrink-0 border-[1.5px] border-solid border-white/20 shadow-[3px_3px_0px_0px_rgba(0,0,0,0.2)] sm:shadow-[4px_4px_0px_0px_rgba(0,0,0,0.2)]">
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="sm:w-[18px] sm:h-[18px]">
                                            <path d="M5 12h14" />
                                            <path d="m12 5 7 7-7 7" />
                                        </svg>
                                    </div>
                                    <p className="text-base sm:text-lg md:text-xl font-medium text-black tracking-tight leading-snug">{point}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="mt-8 sm:mt-10 md:mt-12">
                        <Link href="/contact" className="inline-block w-full sm:w-auto">
                            <button className="bg-[#590178] hover:bg-[#6d0294] text-white font-bold py-3 px-6 sm:py-4 sm:px-8 rounded-xl border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] sm:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] sm:hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all flex items-center justify-center gap-2 sm:gap-3 group w-full sm:w-fit">
                                <span className="text-base sm:text-lg md:text-xl font-playfair">Let&apos;s Build Something</span>
                                <svg
                                    width="18"
                                    height="18"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="3"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="group-hover:translate-x-1 transition-transform sm:w-[20px] sm:h-[20px]"
                                >
                                    <path d="M5 12h14" />
                                    <path d="m12 5 7 7-7 7" />
                                </svg>
                            </button>
                        </Link>
                    </div>
                </div>

                {/* Right Side: Card */}
                <div className="relative mt-10 sm:mt-12 md:mt-0">
                    {/* Label above card */}
                    <div className="absolute -top-5 sm:-top-6 left-1/2 -translate-x-1/2 md:left-8 lg:left-10 md:translate-x-0 bg-[#FFF2D5] border-2 border-black rounded-lg sm:rounded-xl px-4 py-1.5 sm:px-6 sm:py-2 z-20 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] sm:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
                        <span className="font-playfair text-lg sm:text-xl md:text-2xl font-bold text-black whitespace-nowrap">Scalixity blends:</span>
                    </div>

                    {/* Main Purple Card */}
                    <div className="bg-[#590178] mt-10 sm:mt-12 border-[2.5px] sm:border-[3px] border-black rounded-[1.5rem] sm:rounded-[2rem] p-6 sm:p-8 md:p-9 lg:p-10 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] sm:shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] md:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] relative z-10 w-full max-w-lg mx-auto md:ml-auto">
                        <div className="flex flex-col gap-3 sm:gap-3.5 md:gap-4">
                            {cardItems.map((item, idx) => (
                                <p key={idx} className="text-base sm:text-lg md:text-xl lg:text-2xl font-semibold text-white tracking-tight leading-tight">
                                    {item}
                                </p>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export { ScalixityBlends };
