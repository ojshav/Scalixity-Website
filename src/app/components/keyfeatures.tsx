"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const defaultColors = [
    { color: "#FF9F66", lightColor: "#FFF0E6" }, // Orange
    { color: "#2E86DE", lightColor: "#E6F2FF" }, // Blue
    { color: "#4CD137", lightColor: "#E8F9E6" }, // Green
    { color: "#E84118", lightColor: "#FDECEC" }, // Red
    { color: "#9C88FF", lightColor: "#F3F0FF" }, // Purple
    { color: "#FF6B81", lightColor: "#FFF0F3" }, // Pink
];

interface KeyFeaturesProps {
    features?: string[];
}

const KeyFeatures = ({ features }: KeyFeaturesProps) => {
    // Use provided features or fallback to default
    const displayFeatures = features && features.length > 0 
        ? features.map((feature, index) => ({
            description: feature,
            ...defaultColors[index % defaultColors.length],
            number: String(index + 1).padStart(2, '0'),
        }))
        : [
            {
                description: "Scalixity was founded with a vision to democratize AI for enterprise.",
                color: "#FF9F66",
                lightColor: "#FFF0E6",
                number: "01",
            },
            {
                description: "Opened offices in London and Singapore, expanding our reach to 3 continents.",
                color: "#2E86DE",
                lightColor: "#E6F2FF",
                number: "02",
            },
            {
                description: "Secured $50M to accelerate R&D in generative AI models.",
                color: "#4CD137",
                lightColor: "#E8F9E6",
                number: "03",
            },
            {
                description: "Launching Scalixity Core 2.0, setting new benchmarks in AI ethics and speed.",
                color: "#E84118",
                lightColor: "#FDECEC",
                number: "04",
            },
        ];
    const containerRef = useRef<HTMLDivElement>(null);
    const lineRef = useRef<HTMLDivElement>(null);
    const itemsRef = useRef<(HTMLDivElement | null)[]>([]);

    useGSAP(
        () => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top 70%",
                    end: "bottom 80%",
                    scrub: 1,
                },
            });

            // Animate the vertical line
            tl.fromTo(
                lineRef.current,
                { height: "0%" },
                { height: "100%", duration: 2, ease: "none" }
            );

            // Animate each feature item
            itemsRef.current.forEach((item, index) => {
                if (!item) return;

                const isEven = index % 2 !== 0;
                const xOffset = isEven ? 50 : -50;

                gsap.fromTo(
                    item,
                    { opacity: 0, y: 50, x: xOffset },
                    {
                        opacity: 1,
                        y: 0,
                        x: 0,
                        duration: 1,
                        ease: "power3.out",
                        scrollTrigger: {
                            trigger: item,
                            start: "top 85%",
                            end: "top 60%",
                            scrub: 1,
                        },
                    }
                );

                // Animate the node pop
                const node = item.querySelector(".feature-node");
                if (node) {
                    gsap.fromTo(node,
                        { scale: 0, opacity: 0 },
                        {
                            scale: 1, opacity: 1, duration: 0.5, ease: "back.out(1.7)", scrollTrigger: {
                                trigger: item,
                                start: "top 85%",
                            }
                        }
                    )
                }
            });
        },
        { scope: containerRef }
    );

    return (
        <section className="w-full py-16 md:py-20 bg-[#FFF2D5] overflow-hidden" ref={containerRef}>
            <div className="container mx-auto px-4 md:px-8">
                {/* Header */}
                <div className="mb-16 md:mb-20 text-center">
                    <h2 className="text-3xl md:text-5xl font-bold text-[#1A1A1A] leading-tight">
                        Key Features
                    </h2>
                </div>

                {/* Timeline Container */}
                <div className="relative max-w-6xl mx-auto">
                    {/* Central Vertical Line */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-1 bg-gray-300 rounded-full h-full z-0">
                        <div ref={lineRef} className="w-full bg-gray-400 rounded-full origin-top" />
                    </div>

                    {/* Features */}
                    <div className="space-y-16 md:space-y-20 relative z-10">
                        {displayFeatures.map((feature, index) => {
                            const isEven = index % 2 !== 0; // Alternating pattern

                            return (
                                <div
                                    key={index}
                                    ref={(el) => {
                                        if (el) itemsRef.current[index] = el;
                                    }}
                                    className={`flex flex-col md:flex-row items-center w-full gap-8 md:gap-4`}
                                >
                                    {/* Left Side */}
                                    <div className={`w-full md:w-[45%] flex ${isEven ? 'md:justify-end' : 'md:justify-end'} justify-center order-2 md:order-1`}>
                                        {isEven && (
                                            // Even rows: Description on Left
                                            <div
                                                className="px-6 md:px-8 py-4 rounded-xl shadow-md w-full max-w-sm flex items-center justify-center min-h-[70px]"
                                                style={{ backgroundColor: feature.lightColor }}
                                            >
                                                <p className="text-gray-800 text-sm md:text-base text-center mb-0">
                                                    {feature.description}
                                                </p>
                                            </div>
                                        )}
                                    </div>

                                    {/* Center Node */}
                                    <div className="relative z-20 order-1 md:order-2 flex-shrink-0">
                                        <div
                                            className="feature-node w-20 h-20 md:w-24 md:h-24 rounded-full flex items-center justify-center border-4 md:border-[6px] border-white shadow-xl"
                                            style={{ backgroundColor: feature.color }}
                                        >
                                            <span className="text-white text-2xl md:text-3xl font-bold">{feature.number}</span>
                                        </div>
                                    </div>

                                    {/* Right Side */}
                                    <div className={`w-full md:w-[45%] flex ${isEven ? 'md:justify-start' : 'md:justify-start'} justify-center order-3`}>
                                        {!isEven && (
                                            // Odd rows: Description on Right
                                            <div
                                                className="px-6 md:px-8 py-4 rounded-xl shadow-md w-full max-w-sm flex items-center justify-center min-h-[70px]"
                                                style={{ backgroundColor: feature.lightColor }}
                                            >
                                                <p className="text-gray-800 text-sm md:text-base text-center mb-0">
                                                    {feature.description}
                                                </p>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default KeyFeatures;
