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
        <section className="w-full py-20 bg-[#FFF2D5] overflow-hidden" ref={containerRef}>
            <div className="container mx-auto px-4 md:px-8">
                {/* Header */}
                <div className="mb-20 pl-4 md:pl-0">
                    <h3 className="text-[#8B2DA8] font-bold tracking-wider uppercase text-sm mb-2 font-poppins">
                        OUR JOURNEY
                    </h3>
                    <h2 className="text-4xl md:text-6xl font-playfair text-[#1A1A1A] leading-tight">
                        Milestones of Innovation
                    </h2>
                </div>

                {/* Timeline Container */}
                <div className="relative max-w-5xl mx-auto min-h-[800px]">
                    {/* Central Vertical Line */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-[#8B2DA8]/20 via-[#8B2DA8]/50 to-transparent h-full">
                        <div ref={lineRef} className="w-full bg-[#4A0E5C] origin-top" />
                    </div>

                    {/* Milestones */}
                    <div className="space-y-24 md:space-y-32">
                        {milestones.map((milestone, index) => (
                            <div
                                key={index}
                                ref={(el) => {
                                    if (el) itemsRef.current[index] = el;
                                }}
                                className={`relative flex flex-col md:flex-row items-center w-full ${milestone.side === "right" ? "md:flex-row-reverse" : ""
                                    }`}
                            >
                                {/* Content Side */}
                                <div className={`w-full md:w-1/2 ${milestone.side === "left" ? "md:pr-16 text-center md:text-right" : "md:pl-16 text-center md:text-left"} mb-8 md:mb-0 z-10`}>
                                    <h3 className="text-3xl md:text-4xl font-medium text-[#1A1A1A] mb-3 font-poppins">
                                        {milestone.title}
                                    </h3>
                                    <p className="text-[#4A4A4A] text-sm md:text-base leading-relaxed max-w-md mx-auto md:mx-0 font-poppins">
                                        {milestone.description}
                                    </p>
                                </div>

                                {/* Center Dot */}
                                <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center z-20 milestone-dot">
                                    <div className="w-4 h-4 bg-[#2D0835] rounded-full ring-4 ring-[#D8B4E2] shadow-[0_0_15px_rgba(139,45,168,0.5)]"></div>
                                </div>

                                {/* Year Side */}
                                <div className={`w-full md:w-1/2 ${milestone.side === "left" ? "md:pl-16 text-center md:text-left" : "md:pr-16 text-center md:text-right"} z-10`}>
                                    <span className="text-[#4A0E5C] font-bold text-xl md:text-2xl font-poppins">
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
