import React from 'react';
import Image from 'next/image';

const companies = [
    { name: 'AOIN', logo: '/images/clients/aoin.png', width: 120, height: 48, mobileWidth: 80 },
    { name: 'Pinegap', logo: '/images/clients/pinegap.png', width: 190, height: 60, mobileWidth: 100 },
    { name: 'Ambitio', logo: '/images/clients/ambitio.png', width: 145, height: 44, mobileWidth: 90 },
    { name: 'Antis Overseas', logo: '/images/clients/AnjisOverseas.png', width: 72, height: 72, mobileWidth: 50 },
    { name: 'Kyari', logo: '/images/clients/Kyari.png', width: 120, height: 44, mobileWidth: 80 },
    { name: 'Nakshatra Gyaan', logo: '/images/clients/NakshatraGyaan.png', width: 145, height: 85, mobileWidth: 80 },
];

export function TrustedCompanies() {
    return (
        <section className="w-full bg-[#FFF2D5] py-10 sm:py-12 md:py-14 lg:py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
                {/* Heading */}
                <h2 className="font-playfair text-center text-lg sm:text-xl md:text-2xl text-[#1F1F1F] mb-0">
                    Trusted by data driven companies
                </h2>

                {/* Company Logos - Grid layout for mobile, flex for larger screens */}
                <div className="grid grid-cols-3 gap-4 sm:gap-6 mt-6 sm:mt-8 md:flex md:flex-wrap md:items-center md:justify-center md:gap-12 lg:gap-20">
                    {companies.map((company) => (
                        <div
                            key={company.name}
                            className="flex items-center justify-center p-2"
                        >
                            <Image
                                src={company.logo}
                                alt={company.name}
                                width={company.width}
                                height={company.height}
                                className="object-contain w-full h-auto md:w-auto md:h-auto"
                                style={{
                                    maxWidth: `${company.mobileWidth}px`,
                                }}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
