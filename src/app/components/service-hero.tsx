"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);



interface ServiceHeroProps {
  title: string;
  description: string;
}

export function ServiceHero({
  title,
  description,
}: ServiceHeroProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray(".hero-card") as HTMLElement[];

      // Initial state
      gsap.set(cards, {
        y: 0,
        rotation: (i) => (i % 2 === 0 ? -2 : 2) * (i + 1), // Pre-rotated
        scale: (i) => i === 0 ? 1 : 0.8, // 1st card full scale
        opacity: (i) => i === 0 ? 1 : 0, // 1st card visible
        zIndex: (i) => i + 1,
      });

      // Animate in
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "center center",
          end: "+=2000",
          pin: true,
          scrub: 1,
        }
      });

      cards.forEach((card, i) => {
        if (i === 0) return; // Skip 1st card

        tl.to(card, {
          y: i * -15, // Slight stack offset
          rotation: (i % 2 === 0 ? -2 : 2) * (i + 1), // Keep rotation
          scale: 1 - (cards.length - 1 - i) * 0.05,
          opacity: 1,
          duration: 1,
          ease: "power2.out",
        });
      });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="bg-[#FFF2D5] min-h-screen flex flex-col items-center justify-center pt-32 pb-20 overflow-hidden">
      <div className="container mx-auto px-4 md:px-8 text-center max-w-6xl mb-16">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-playfair font-bold text-[#590178] mb-6 leading-tight">
          {title}
        </h1>
        {/* <p className="text-lg md:text-xl text-black/70 font-inter max-w-2xl mx-auto">
          {description}
        </p> */}
      </div>

      <div ref={cardsRef} className="relative w-full max-w-9xl h-[600px] flex items-center justify-center perspective-1000">
        {[
          "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1555421689-49263376da7a?q=80&w=2940&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2940&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2940&auto=format&fit=crop"
        ].map((src, index) => (
          <div
            key={index}
            className={`hero-card absolute w-[85%] md:w-[70%] h-[400px] rounded-[32px] shadow-xl overflow-hidden border border-white/20 ${index === 3 ? "z-10" : ""
              }`}
          >
            <img
              src={src}
              alt={`Hero image ${index + 1}`}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-[#590178]/20 mix-blend-multiply" />
          </div>
        ))}
      </div>

      <div className="container mx-auto px-4 md:px-8 text-center max-w-4xl mt-16">
        <p className="text-lg md:text-xl text-black font-inter font-medium leading-relaxed">
          {description}
        </p>
      </div>
    </section>
  );
}

