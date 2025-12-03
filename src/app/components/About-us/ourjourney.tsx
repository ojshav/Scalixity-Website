"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const milestones = [
    {
        year: "2024",
        title: "The Beginning",
        description: "Scalixity was founded as a small but ambitious team dedicated to delivering high-quality custom software, ecommerce solutions, dashboards, and AI-driven tools for early-stage businesses.",
        side: "left",
    },
    {
        year: "2024 (Mid)",
        title: "First Major Projects",
        description: "Delivered our first multi-vendor ecommerce platform, a service marketplace with real-time communication, and an internal automation product — establishing a strong foundation across ecommerce, platforms, and AI-driven tools.",
        side: "right",
    },
    {
        year: "2024 (Late)",
        title: "Expansion of Services",
        description: "Introduced AI automation, chatbots, and mobile app development into our offerings as client needs grew.",
        side: "left",
    },
    {
        year: "2025 Onwards",
        title: "Steady Growth & Strong Portfolio",
        description: "With consistent delivery and word-of-mouth referrals, we continue to expand our project base across ecommerce, SaaS, AI, dashboards, and mobile apps — fully bootstrapped and profitable.",
        side: "right",
    },
];

const OurJourney = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const lineRef = useRef<HTMLDivElement>(null);
    const itemsRef = useRef<(HTMLDivElement | null)[]>([]);

    useGSAP(
        () => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top 60%",
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

            // Animate each milestone item
            itemsRef.current.forEach((item, index) => {
                if (!item) return;

                const side = milestones[index].side;
                const xOffset = side === "left" ? -50 : 50;

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
                // Animate the dot separately for a pop effect
                const dot = item.querySelector(".milestone-dot");
                if (dot) {
                    gsap.fromTo(dot,
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
        <section className="w-full py-12 sm:py-16 lg:py-20 bg-[#FFF2D5] overflow-hidden" ref={containerRef}>
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="mb-12 sm:mb-16 lg:mb-20 pl-4 lg:pl-0">
                    <h3 className="text-[#8B2DA8] font-bold tracking-wider uppercase text-xs sm:text-sm mb-2 font-poppins">
                        OUR JOURNEY
                    </h3>
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-playfair text-[#1A1A1A] leading-tight">
                        Milestones of Innovation
                    </h2>
                </div>

                {/* Timeline Container */}
                <div className="relative max-w-5xl mx-auto min-h-[600px] sm:min-h-[700px] lg:min-h-[800px]">
                    {/* Central Vertical Line */}
                    <div className="absolute left-8 sm:left-12 lg:left-1/2 lg:transform lg:-translate-x-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-[#8B2DA8]/20 via-[#8B2DA8]/50 to-transparent h-full">
                        <div ref={lineRef} className="w-full bg-[#4A0E5C] origin-top" />
                    </div>

                    {/* Milestones */}
                    <div className="space-y-16 sm:space-y-20 lg:space-y-32">
                        {milestones.map((milestone, index) => (
                            <div
                                key={index}
                                ref={(el) => {
                                    if (el) itemsRef.current[index] = el;
                                }}
                                className={`relative flex flex-col lg:flex-row items-start lg:items-center w-full ${milestone.side === "right" ? "lg:flex-row-reverse" : ""
                                    }`}
                            >
                                {/* Content Side */}
                                <div className={`w-full lg:w-1/2 ${milestone.side === "left" ? "lg:pr-16 text-left lg:text-right" : "lg:pl-16 text-left"} mb-4 sm:mb-6 lg:mb-0 z-10 pl-20 sm:pl-24 lg:pl-0 pr-4 sm:pr-6 lg:pr-0`}>
                                    <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-medium text-[#1A1A1A] mb-2 sm:mb-3 font-poppins">
                                        {milestone.title}
                                    </h3>
                                    <p className="text-[#4A4A4A] text-xs sm:text-sm lg:text-base leading-relaxed max-w-md lg:mx-0 font-poppins">
                                        {milestone.description}
                                    </p>
                                </div>

                                {/* Center Dot */}
                                <div className="absolute left-8 sm:left-12 lg:left-1/2 top-6 sm:top-8 lg:top-1/2 transform -translate-x-1/2 lg:-translate-y-1/2 flex items-center justify-center z-20 milestone-dot">
                                    <div className="w-3 h-3 sm:w-4 sm:h-4 bg-[#2D0835] rounded-full ring-2 sm:ring-4 ring-[#D8B4E2] shadow-[0_0_10px_rgba(139,45,168,0.5)] sm:shadow-[0_0_15px_rgba(139,45,168,0.5)]"></div>
                                </div>

                                {/* Year Side */}
                                <div className={`w-full lg:w-1/2 ${milestone.side === "left" ? "lg:pl-16 text-left" : "lg:pr-16 text-left lg:text-right"} z-10 pl-20 sm:pl-24 lg:pl-0 pr-4 sm:pr-6 lg:pr-0`}>
                                    <span className="text-[#4A0E5C] font-bold text-base sm:text-lg md:text-xl lg:text-2xl font-poppins">
                                        {milestone.year}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default OurJourney;
