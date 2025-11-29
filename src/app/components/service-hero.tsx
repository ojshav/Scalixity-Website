"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);



interface ServiceHeroProps {
  title: string;
  description: string;
  images?: string[];
}

export function ServiceHero({
  title,
  description,
  images,
}: ServiceHeroProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);

  useGSAP(() => {
    const cards = gsap.utils.toArray(".hero-card") as HTMLElement[];

    // Animate title on load
    gsap.fromTo(titleRef.current,
      {
        opacity: 0,
        y: 50,
        scale: 0.9,
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1.2,
        ease: "power3.out",
      }
    );

    // Initial state with custom rotations
    // Card 0: -4 degrees (rotated left)
    // Card 1: -1 degrees (slightly left)
    // Card 2: 2 degrees (slightly right)
    const rotations = [-3, 0, 3];
    
    // Set initial state - 1st card visible, 2nd and 3rd start from bottom
    gsap.set(cards, {
      y: (i) => i === 0 ? 0 : 300,
      rotation: (i) => rotations[i] || 0,
      scale: (i) => i === 0 ? 1 : 0.8,
      opacity: (i) => i === 0 ? 1 : 0,
      zIndex: (i) => i + 1,
    });

    // Scroll-triggered animation - 2nd and 3rd cards come from bottom
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "center center",
        end: "+=3000",
        pin: true,
        scrub: 1,
      }
    });

    // Animate 2nd card from bottom first
    tl.to(cards[1], {
      y: -20,
      rotation: rotations[1] || 0,
      scale: 1,
      opacity: 1,
      duration: 1,
      ease: "power2.out",
    })
    // Then animate 3rd card from bottom after 2nd is complete
    .to(cards[2], {
      y: -40,
      rotation: rotations[2] || 0,
      scale: 1,
      opacity: 1,
      duration: 1,
      ease: "power2.out",
    });

  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="bg-[#FFF2D5] min-h-screen flex flex-col items-center justify-center pt-32 pb-20 overflow-hidden">
      <div className="container mx-auto px-4 md:px-8 text-center max-w-6xl mb-16">
        <h1 ref={titleRef} className="text-4xl md:text-6xl lg:text-7xl font-playfair font-bold text-[#590178] mb-6 leading-tight">
          {title}
        </h1>
        {/* <p className="text-lg md:text-xl text-black/70 font-inter max-w-2xl mx-auto">
          {description}
        </p> */}
      </div>

      <div ref={cardsRef} className="relative w-full max-w-9xl h-[550px] flex items-center justify-center perspective-1000">
        {(images || [
          "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2940&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=2940&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?q=80&w=2940&auto=format&fit=crop"
        ]).map((src, index) => (
          <div
            key={index}
            className="hero-card absolute w-[85%] md:w-[70%] h-[550px] rounded-[32px] shadow-xl overflow-hidden border border-white/20"
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

      <div className="container mx-auto px-4 md:px-8 text-center max-w-7xl mt-20">
        <p className="text-lg md:text-3xl text-black font-inter font-medium leading-relaxed">
          {description}
        </p>
      </div>
    </section>
  );
}


