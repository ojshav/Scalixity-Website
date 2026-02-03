import React from 'react'

export function ResultsSpeak() {
    return (
        <section className="py-12 sm:py-16 md:py-20 bg-[#FFF2D5] w-full">
            <div className="container max mx-auto px-4 sm:px-6 max-w-7xl">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-playfair font-semibold text-center mb-8 sm:mb-12 md:mb-16 text-[#1A1A1A]">
                    The Results Speak.
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 md:gap-6 auto-rows-fr">
                    {/* Card 01 */}
                    <div className="bg-[#FFF2D5] p-8 sm:p-6 md:p-10 rounded-xl sm:rounded-2xl shadow-[0px_0px_20px_rgba(0,0,0,0.1)] flex flex-row justify-between items-end min-h-[180px] sm:min-h-[200px] md:min-h-[240px] transition-transform hover:-translate-y-1 duration-300 overflow-hidden">
                        <span className="text-[7rem] sm:text-[7rem] md:text-[9rem] lg:text-[16rem] font-serif font-medium leading-[0.7] tracking-tighter bg-[linear-gradient(182.96deg,#590178_35.74%,rgba(89,1,120,0)_100%)] text-transparent bg-clip-text -mb-4 sm:-mb-5 md:-mb-6 -ml-4 sm:-ml-5 md:-ml-6 selection:bg-transparent">
                            01
                        </span>
                        <p className="text-[#590178] text-base sm:text-lg md:text-2xl font-medium max-w-[130px] sm:max-w-[140px] md:max-w-[160px] text-left self-center mb-2 sm:mb-3 md:mb-0 relative z-10">
                            58% average <br /> timeline <br /> compression
                        </p>
                    </div>

                    {/* Card 02 */}
                    <div className="bg-[#FFF2D5] p-8 sm:p-6 md:p-10 rounded-xl sm:rounded-2xl shadow-[0px_0px_20px_rgba(0,0,0,0.1)] flex flex-row justify-between items-end min-h-[180px] sm:min-h-[200px] md:min-h-[240px] transition-transform hover:-translate-y-1 duration-300 overflow-hidden">
                        <span className="text-[7rem] sm:text-[7rem] md:text-[9rem] lg:text-[16rem] font-serif font-medium leading-[0.7] tracking-tighter bg-[linear-gradient(182.96deg,#590178_35.74%,rgba(89,1,120,0)_100%)] text-transparent bg-clip-text -mb-4 sm:-mb-5 md:-mb-6 -ml-4 sm:-ml-5 md:-ml-6 selection:bg-transparent">
                            02
                        </span>
                        <p className="text-[#590178] text-base sm:text-lg md:text-2xl font-medium max-w-[130px] sm:max-w-[140px] md:max-w-[160px] text-left self-center mb-2 sm:mb-3 md:mb-0 relative z-10">
                            30-60% cost <br /> reduction
                        </p>
                    </div>

                    {/* Card 03 - Number on Right */}
                    <div className="bg-[#FFF2D5] p-8 sm:p-6 md:p-10 rounded-xl sm:rounded-2xl shadow-[0px_0px_20px_rgba(0,0,0,0.1)] flex flex-row justify-between items-end min-h-[180px] sm:min-h-[200px] md:min-h-[240px] transition-transform hover:-translate-y-1 duration-300 overflow-hidden">
                        <p className="text-[#590178] text-base sm:text-lg md:text-2xl font-medium max-w-[130px] sm:max-w-[140px] md:max-w-[160px] text-left self-center mb-2 sm:mb-3 md:mb-0 relative z-10">
                            97% delivery <br /> accuracy
                        </p>
                        <span className="inline-block text-[7rem] sm:text-[7rem] md:text-[9rem] lg:text-[16rem] font-serif font-medium leading-[0.85] tracking-tighter bg-[linear-gradient(182.96deg,#590178_35.74%,rgba(89,1,120,0)_100%)] text-transparent bg-clip-text -mb-4 sm:-mb-5 md:-mb-10 -mr-4 sm:-mr-5 md:-mr-6 selection:bg-transparent">
                            03
                        </span>
                    </div>

                    {/* Card 04 - Number on Right */}
                    <div className="bg-[#FFF2D5] p-8 sm:p-6 md:p-10 rounded-xl sm:rounded-2xl shadow-[0px_0px_20px_rgba(0,0,0,0.1)] flex flex-row justify-between items-end min-h-[180px] sm:min-h-[200px] md:min-h-[240px] transition-transform hover:-translate-y-1 duration-300 overflow-hidden">
                        <p className="text-[#590178] text-base sm:text-lg md:text-2xl font-medium max-w-[160px] sm:max-w-[180px] md:max-w-[220px] text-left self-center mb-2 sm:mb-3 md:mb-0 relative z-10">
                            Products <br /> deployed across 4 <br /> continents
                        </p>
                        <span className="inline-block text-[7rem] sm:text-[7rem] md:text-[9rem] lg:text-[16rem] font-serif font-medium leading-[0.85] tracking-tighter bg-[linear-gradient(182.96deg,#590178_35.74%,rgba(89,1,120,0)_100%)] text-transparent bg-clip-text -mb-4 sm:-mb-5 md:-mb-10 -mr-4 sm:-mr-5 md:-mr-6 selection:bg-transparent">
                            04
                        </span>
                    </div>

                    {/* Card 05 */}
                    <div className="bg-[#FFF2D5] p-8 sm:p-6 md:p-10 rounded-xl sm:rounded-2xl shadow-[0px_0px_20px_rgba(0,0,0,0.1)] flex flex-row justify-between items-end min-h-[180px] sm:min-h-[200px] md:min-h-[240px] transition-transform hover:-translate-y-1 duration-300 col-span-1 sm:col-span-2 md:col-span-1 overflow-hidden">
                        <span className="inline-block text-[7rem] sm:text-[7rem] md:text-[9rem] lg:text-[16rem] font-serif font-medium leading-[1] tracking-tighter bg-[linear-gradient(182.96deg,#590178_35.74%,rgba(89,1,120,0)_100%)] text-transparent bg-clip-text -mb-4 sm:-mb-5 md:-mb-10 -ml-4 sm:-ml-5 md:-ml-8 selection:bg-transparent">
                            05
                        </span>
                        <p className="text-[#590178] text-base sm:text-lg md:text-2xl font-medium max-w-[160px] sm:max-w-[180px] md:max-w-[200px] text-left self-center mb-2 sm:mb-3 md:mb-0 relative z-10">
                            Trusted by <br /> startups, D2C, <br /> enterprise, and <br /> SaaS founders
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}
