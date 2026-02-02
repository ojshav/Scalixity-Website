import React from 'react';
import Image from 'next/image';

export function GrowthPartner() {
    return (
        <section className="w-full bg-[#590178]">
            <div className="flex flex-col lg:flex-row items-center">
                {/* Left - Image */}
                <div className="w-full lg:w-[38%] relative h-[14rem] sm:h-[16rem] md:h-[18rem] lg:min-h-[19rem]">
                    <Image
                        src="/images/growth-partner.png"
                        alt="Growth Engineering Partner"
                        fill
                        className="object-contain object-center lg:object-left"
                    />
                </div>

                {/* Right - Text */}
                <div className="w-full lg:w-2/3 flex items-center justify-center px-4 sm:px-6 md:px-10 lg:px-16 py-8 sm:py-10 md:py-12 lg:py-16">
                    <h2 className="font-playfair text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold text-white leading-tight text-center lg:text-left">
                        You Don&apos;t Need a Developer Team.<br />
                        You Need a Growth Engineering Partner
                    </h2>
                </div>
            </div>
        </section>
    );
}
