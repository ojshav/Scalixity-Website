import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const successStories = [
    {
        industry: 'INSURANCE',
        stat: '40% Reduced Claim settlement time',
        link: '/work',
        image: '/images/success-stories/insurance.png',
    },
    {
        industry: 'HEALTHCARE',
        stat: '95% accuracy in medical claims',
        link: '/work',
        image: '/images/success-stories/healthcare.png',
    },
    {
        industry: 'MANUFACTURING',
        stat: '70% Faster CAD-to-BOM estimates',
        link: '/work',
        image: '/images/success-stories/manufacturing.png',
    },
];

export function SuccessStories() {
    return (
        <section className="w-full bg-[#FFF2D5] py-12 sm:py-16 md:py-20 lg:py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
                {/* Heading */}
                <div className="text-center mb-10 sm:mb-12 md:mb-16">
                    <h2 className="font-playfair text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#590178] mb-4">
                        Success Stories across Industries
                    </h2>
                    <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-black/80 max-w-2xl mx-auto px-4 sm:px-0">
                        We provide comprehensive digital solutions tailored to your business needs
                    </p>
                </div>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
                    {successStories.map((story) => (
                        <div
                            key={story.industry}
                            className="bg-white rounded-2xl p-4 sm:p-5 shadow-sm hover:shadow-md transition-shadow flex flex-col"
                        >
                            {/* Industry Image */}
                            <div className="rounded-xl h-32 sm:h-36 md:h-40 mb-4 sm:mb-5 overflow-hidden">
                                <Image
                                    src={story.image}
                                    alt={story.industry}
                                    width={400}
                                    height={200}
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            {/* Content */}
                            <div className="flex-grow">
                                {/* Industry Name */}
                                <h3 className="font-semibold text-[#590178] text-sm sm:text-base tracking-wide mb-2">
                                    {story.industry}
                                </h3>

                                {/* Stat */}
                                <p className="font-playfair text-lg sm:text-xl md:text-2xl text-[#1F1F1F] mb-4 sm:mb-6">
                                    {story.stat}
                                </p>
                            </div>

                            {/* Learn More Button - Fixed at bottom center */}
                            <div className="text-center mt-auto">
                                <Link
                                    href={story.link}
                                    className="inline-block px-5 py-2 sm:px-6 sm:py-2.5 bg-[#590178] text-white rounded-lg text-sm font-medium hover:bg-[#7A0499] transition-colors"
                                >
                                    Learn More
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
